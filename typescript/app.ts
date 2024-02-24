import PersonalAccount from './class/personal-account ';
import BusinessAccount from './class/business-account';

const alfredoAccount: PersonalAccount = new PersonalAccount (883183062, "Alfredo", 151);

const petriSolucoesAccount: BusinessAccount = new BusinessAccount ("Petri Soluções", 1844);

alfredoAccount.getBalance();

alfredoAccount.deposit(150);

alfredoAccount.getBalance();