pragma solidity ^0.4.2;
/*Scheduler API*/

contract owned {
    address public owner;
    event Transfer(address indexed from, address indexed to);
    function owned() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        if (msg.sender != owner) throw;
        _;
    }

    function transferOwnership(address newOwner) onlyOwner {
        address temp = owner;
        owner = newOwner;
        Transfer(temp, owner);
    }
}

contract UserManagement is owned{

    enum TypeChoice {Customer, ServiceProvider}
    mapping (string => user) userId;
    mapping (string => uint) userExsists;
    event UserCreated(string UserId, address PublicAddress, string mail, TypeChoice typ);
    event EmailChanged(string UserId);
    event PasswordChanged(string UserId);
    event AddressChanged(string UserId);
    struct user{
        address pubAddress;
        bytes32 password;
        string email;
        TypeChoice mytype;
        bool verified;
    }
    function addMember(address _addr,string id, string pass, string mail, TypeChoice typ) onlyOwner returns (uint){
    if(userExsists[id] == 0)
    {
        userId[id] = user ({pubAddress:_addr,password:sha3(pass),email:mail,mytype:typ,verified:false});
        userExsists[id] = 1;
        UserCreated(id, userId[id].pubAddress ,userId[id].email,userId[id].mytype);
        return 1;
    }
    else
    return 0;
    }
 function retriveVerified(string id) constant returns(bool){
        if(userExsists[id] != 0)
        return userId[id].verified;
        else
        {
        return;
        }
    }
     function addVerified(string id) constant returns(address){
        if(userExsists[id] != 0)
        {
            userId[id].verified = true;
        }
        else
        {
        return;
        }
    }
    function removeVerified(string id) constant returns(address){
        if(userExsists[id] != 0)
        {
            userId[id].verified = false;
        }
        else
        {
        return;
        }
    }
    function deleteMember(string id) onlyOwner returns(uint){
        if(userExsists[id] == 1){
            userExsists[id] = 0;
            return 1;
        }
        else
        return 0;
    }

    function retriveAddr(string id) constant returns(address){
        if(userExsists[id] != 0)
        return userId[id].pubAddress;
        else
        {
        return;
        }
    }
    function retriveEmail(string id) constant returns(string){
        if(userExsists[id] != 0)
        return userId[id].email;
        else
        {
        return;
        }
    }
    function retriveType(string id) constant returns(TypeChoice){
        if(userExsists[id] != 0)
        return userId[id].mytype;
        else
        {
        return;
        }
    }

    function modifyEmail(string id, string mail) onlyOwner returns (uint){
        if(userExsists[id] != 0){
            userId[id].email = mail;
            EmailChanged(id);
            return 1;
        }
        else
        return 0;
    }

    function modifyPassword(string id, string pass) onlyOwner returns (uint){
        if(userExsists[id] != 0){
            userId[id].password = sha3(pass);
            PasswordChanged(id);
            return 1;
        }
        else
        return 0;
    }
    function modifyAddress(string id, address _addr) onlyOwner returns (uint){
        if(userExsists[id] != 0){
            userId[id].pubAddress = _addr;
            AddressChanged(id);
            return 1;
        }
        else
        return 0;
    }
    function authenticate(string id, string pass) constant returns(uint) {
        if(userExsists[id] == 1){
            if(sha3(pass) == userId[id].password)
            return 1;
            else
            return 0;
        }
        else
        return 0;
    }
    function isUserIdAvailable(string id) constant returns(uint){
    if(userExsists[id] != 0)
    return 0;
    else
    return 1;
    }
}
