"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const personal_account_1 = __importDefault(require("./class/personal-account "));
const business_account_1 = __importDefault(require("./class/business-account"));
const alfredoAccount = new personal_account_1.default(883183062, "Alfredo", 151);
const petriSolucoesAccount = new business_account_1.default("Petri Soluções", 1844);
alfredoAccount.getBalance();
alfredoAccount.deposit(150);
alfredoAccount.getBalance();
