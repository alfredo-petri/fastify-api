import DefaultAccount from "./default-account";

class PersonalAccount extends DefaultAccount {
    docId: number;
  
    constructor (docId: number, name: string, accountNumber: number){ 
    super (name, accountNumber);
    this.docId = docId;
    };
};  

export default PersonalAccount;