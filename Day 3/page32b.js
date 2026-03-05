import { deposit, checkBalance, showTransactions, withdraw } from "./bank.js";
deposit(1, 1500);
checkBalance(1)
deposit(1, 1000);
checkBalance(1);
showTransactions(1);
withdraw(1, 2000);
checkBalance(1);
showTransactions(1);