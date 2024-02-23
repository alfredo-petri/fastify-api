//Dio Banking

// Inicio Classes e Herança 
/*


class Account {
  name: string;
  accountNumber: number;

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
};

class Admin extends Account {
  balance: number;

  constructor (name: string, accountNumber: number){
    super(name, accountNumber)
    this.balance = 20;
  };

  getBalance = () => {
    console.log(this.balance)
  };
};


const adminAccount: Admin = new Admin ("alfredo", 2);
console.log(adminAccount);

const account: Account = new Account ('João', 28)
console.log(account);


*/
// Fim  Classes e Herança

// Inicio Abstract

class Account {
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
    console.log(this.balance)
  };
};

class Admin extends Account {
  constructor (name: string, accountNumber: number){
    super(name, accountNumber)
  }; 
};


const adminAccount: Admin = new Admin ("alfredo", 2);
console.log(adminAccount);

const account: Account = new Account ('João', 28)
console.log(account);

// Fim Abstract