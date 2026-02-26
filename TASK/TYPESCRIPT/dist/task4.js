class BankAccount {
    accountHolder;
    balance;
    bankName = "SBI";
    constructor(name, balance) {
        this.accountHolder = name;
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
}
const acc = new BankAccount("Abheek", 5000);
console.log(acc.accountHolder);
console.log(acc.getBalance());
export {};
