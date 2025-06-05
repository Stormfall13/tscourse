// Модификаторы доступа

class BankAccount {
    readonly id: number;
    public accountNumber: string;
    private balance: number;
    protected owner: string;

    constructor(id: number, accountNumber: string, owner: string){
        this.id = id;
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.owner = owner;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public withDraw(amount: number): boolean {
        if (this.balance >= amount){
            this.balance -= amount
            return true
        }
        return false;
    }

    public getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(123, "123123", "Vasya")
account.deposit(1000);
console.log(account.getBalance());
account.withDraw(450)
console.log(account.getBalance());

// account.owner