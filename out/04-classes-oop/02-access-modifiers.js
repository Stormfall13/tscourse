"use strict";
// Модификаторы доступа
class BankAccount {
    id;
    accountNumber;
    balance;
    owner;
    constructor(id, accountNumber, owner) {
        this.id = id;
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.owner = owner;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withDraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(123, "123123", "Vasya");
account.deposit(1000);
console.log(account.getBalance());
account.withDraw(450);
console.log(account.getBalance());
// account.owner
