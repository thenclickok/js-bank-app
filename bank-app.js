export class BankAccount {
  constructor(accountHolder, accountNumber, balance) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return true;
    } else {
      alert("Insufficient funds.");
      console.log("Attempted to withdraw funds exceeding account balance.");
      return false;
    }
  }
}
