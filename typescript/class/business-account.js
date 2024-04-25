"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_account_1 = __importDefault(require("./default-account"));
class BusinessAccount extends default_account_1.default {
    constructor(name, accountNumber) {
        super(name, accountNumber);
        this.getLoan = () => {
            console.log("você pegou um empréstimo");
        };
    }
    ;
}
;
exports.default = BusinessAccount;
