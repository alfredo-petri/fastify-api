"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_account_1 = __importDefault(require("./default-account"));
class PersonalAccount extends default_account_1.default {
    constructor(docId, name, accountNumber) {
        super(name, accountNumber);
        this.docId = docId;
    }
    ;
}
;
exports.default = PersonalAccount;
