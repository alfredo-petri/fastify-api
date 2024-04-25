"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DefaultAccount {
    constructor(name, accountNumber) {
        this.balance = 20;
        this.status = true;
        this.setName = (name) => {
            this.name = name;
            console.log("Nome alterado com sucesso");
        };
        this.getName = () => {
            return this.name;
        };
        this.deposit = (balance) => {
            if (this.validateStatus()) {
                this.balance = this.balance + balance;
                console.log("você depositou " + this.balance);
            }
        };
        this.withDraw = () => {
            console.log("você sacou");
        };
        this.getBalance = () => {
            console.log(this.balance);
        };
        this.validateStatus = () => {
            if (this.status) {
                return this.status;
            }
            else {
                throw new Error("conta inativa");
            }
            ;
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
    ;
}
;
exports.default = DefaultAccount;
