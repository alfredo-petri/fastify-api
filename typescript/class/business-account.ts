import DefaultAccount from "./default-account";

class BusinessAccount extends DefaultAccount {
    constructor (name: string, accountNumber: number){ 
      super (name, accountNumber) ;
    };
  
    getLoan = () => {
      console.log ("você pegou um empréstimo");
    };    
};

export default BusinessAccount;