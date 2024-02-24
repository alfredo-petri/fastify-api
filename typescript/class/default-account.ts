abstract class DefaultAccount {
    private name: string;
    accountNumber: number;
    balance: number = 20;
    private status: boolean = true;

  
  
    constructor(name: string, accountNumber: number){
      this.name = name;
      this.accountNumber = accountNumber;
    };

    setName = (name: string): void => {
      this.name = name;
      console.log("Nome alterado com sucesso");
    };

    getName = (): string => {
      return this.name;
    };
  
    deposit = (balance: number): void => {
      
      if (this.validateStatus()) {
        this.balance = this.balance + balance;
        console.log("você depositou " + this.balance);
      }
    };
  
    withDraw = (): void => {
      console.log("você sacou");
    }; 
    
    getBalance = (): void => {
      console.log(this.balance);
    };

    private validateStatus = (): boolean => {
      if (this.status) {
        return this.status;
      } else {
        throw new Error ("conta inativa");
      };
    };
  };

export default DefaultAccount;