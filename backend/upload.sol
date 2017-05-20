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
contract UserManagement {

}

contract KYC is owned{

    enum nameOfDocuments {aadhar,drivinglicence,pancard,passport,salarySlip};
    enum classOfDocuments {identityProof,addressProof,photoIdentityProof,incomeProof}
    string externalApprover[] = ['y','n','n','n','n','n']
    mapping (address => uint) myDocumnets;
    struct Approved{
        string approvedBy;
        string approvedDate;
        bool approveStatus;
    }
    struct Documnets{
        string classOfDocuments;
        string nameOfDocuments;
        address[] swarmHash;
        mapping (uint => approved[]) myDocumnets;
    }
    function addMember(address _addr,string id, string pass, string mail, TypeChoice typ) onlyOwner returns (uint){
    if(userExsists[id] == 0)
    {
        userId[id] = user ({pubAddress:_addr,password:sha3(pass),email:mail,mytype:typ});
        userExsists[id] = 1;
        UserCreated(id, userId[id].pubAddress ,userId[id].email,userId[id].mytype);
        return 1;
    }
    else
    return 0;
    }
 
}