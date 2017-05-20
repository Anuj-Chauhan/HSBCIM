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

    enum classOfDocuments {identityProof,addressProof,photoIdentityProof,incomeProof}
    mapping (address => Documnets[]) myDocuments;
    struct Approved{
        address approvedBy;
        uint approvedDate;
        bool approveStatus;
    }
    struct Documnets{
        string nameOfDocuments;
        address[] swarmHash;
        mapping (uint => Approved[]) approvedHistory;
    }
    function upload(string mynameOfDocuments,address myswarmHash) onlyOwner returns (uint){
       
        uint len1 = myDocuments[msg.sender].length++;
        myDocuments[msg.sender][len1].nameOfDocuments= mynameOfDocuments;
        uint len = myDocuments[msg.sender][len1].swarmHash.length++;
        myDocuments[msg.sender][len1].swarmHash[len] = myswarmHash;
            
    return 0;
    }
   function getSwarmHash(string mynameOfDocuments,address userPublicAddr) onlyOwner returns (address[]){
      
         uint len1 = myDocuments[userPublicAddr].length;
         for (uint i =0;i<len1;i++){
             if(stringsEqual(myDocuments[userPublicAddr][i].nameOfDocuments,mynameOfDocuments)){
                 //uint len = myDocuments[msg.sender][len1].swarmHash.length;
                 return myDocuments[userPublicAddr][i].swarmHash;     
             }
         }   
    return ;
    }
    function stringsEqual(string storage _a, string memory _b) internal returns (bool) {
		bytes storage a = bytes(_a);
		bytes memory b = bytes(_b);
		if (a.length != b.length)
			return false;
		// @todo unroll this loop
		for (uint i = 0; i < a.length; i ++)
			if (a[i] != b[i])
				return false;
		return true;
	}
}
