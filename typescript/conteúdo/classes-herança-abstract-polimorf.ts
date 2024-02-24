// Inicio Abstract e Herança

/*

abstract class DefaultAccount {
  name: string;
  accountNumber: number;
  balance: number = 20;


  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  };

  deposit = () => {
    console.log("você depositou");
  };

  withDraw = () => {
    console.log("você sacou");
  }; 
  
  getBalance = () => {
    console.log(this.balance);
  };
};

class PersonalAccount extends DefaultAccount {
  docId: number;

  constructor (docId: number, name: string, accountNumber: number){ 
  super (name, accountNumber);
  this.docId = docId;
  };
} 

class BusinessAccount extends DefaultAccount {
  constructor (name: string, accountNumber: number){ 
    super (name, accountNumber) ;
  };

  getLoan = () => {
    console.log ("você pegou um empréstimo");
  };
  
};

const dio : BusinessAccount = new BusinessAccount ("DIO", 174);
console.log (dio);

const peopleAccount: PersonalAccount = new PersonalAccount (15418, "Alfredo", 151);
console.log (peopleAccount);
*/