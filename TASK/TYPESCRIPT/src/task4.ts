class BankAccount {
  public accountHolder: string;
  private balance: number;
  protected bankName: string = "SBI";

  constructor(name: string, balance: number) {
    this.accountHolder = name;
    this.balance = balance;
  }

  public getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount("Abheek", 5000);
console.log(acc.accountHolder);
console.log(acc.getBalance());