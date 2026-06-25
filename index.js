import { BankAccount } from "./bank-app.js";

//create an account using the BankAccount class
const account1 = new BankAccount("Joe Blogs", 123, 20);
const account2 = new BankAccount("Jane Smith", 345, 30);
const account3 = new BankAccount("Jesse James", 678, 40);

//input account1 accountHolder into account-holder field
document.getElementById("account-holder").textContent = account1.accountHolder;

//input account1 accountNumber into account-number field
document.getElementById("account-number").textContent = account1.accountNumber;

//check account balance into balance field when user clicks check-balance button
const checkButton = document.getElementById("check-balance");
checkButton.addEventListener("click", () => {
  document.getElementById("balance").textContent = `£${account1.balance}`;
  console.log("User's balance is displayed in the web page.");
});

/*when user enters number into deposit field and hits submit 
it adds this number to balance and updates balance*/

const depositSubmit = document.getElementById("deposit-submit");
depositSubmit.addEventListener("click", () => {
  const amount = Number(document.getElementById("deposit-input").value);
  if (amount > 0) {
    account1.deposit(amount);
    document.getElementById("balance").textContent = `£${account1.balance}`;
    document.getElementById("message").textContent = `Deposited: £${amount}`;
    console.log("User has made a deposit.");
  }
});

/*when user enters number into withdrawal field and hits submit 
it subtracts this number from balance and updates balance if there 
were sufficient funds to make the withdrawal*/

const withdrawalSubmit = document.getElementById("withdrawal-submit");
withdrawalSubmit.addEventListener("click", () => {
  const amount = Number(document.getElementById("withdrawal-input").value);
  if (amount > 0) {
    const success = account1.withdraw(amount);
    if (success) {
      document.getElementById("balance").textContent = `£${account1.balance}`;
      document.getElementById("message").textContent = `Withdrew: £${amount}`;
      console.log("User has made a withdrawal.");
    } else {
      /*if there were insufficient funds, the message below will inform user and 
    it will be logged to the console*/
      document.getElementById("message").textContent =
        "Transaction failed due to insufficient funds.";
      console.log(
        "User informed that withdrawal failed due to insufficient funds.",
      );
    }
  }
});
