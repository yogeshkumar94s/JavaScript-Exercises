class Account {
  // Private field for balance
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
    } else if (amount > this.#balance) {
      console.log("Insufficient funds.");
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  }

  // Method to check the balance (for demonstration purposes)
  checkBalance() {
    console.log(`Current balance: ${this.#balance}`);
  }
}

// Create an instance of the Account class
const myAccount = new Account(100);

// Test the deposit and withdraw methods
myAccount.deposit(50); // Deposited: 50. New balance: 150
myAccount.withdraw(30); // Withdrew: 30. New balance: 120
myAccount.withdraw(200); // Insufficient funds.
myAccount.deposit(-20); // Deposit amount must be positive.
myAccount.withdraw(-10); // Withdrawal amount must be positive.

// Check the balance
myAccount.checkBalance(); // Current balance: 120

// --------------------------------

// ### Explanation:

// 1. **Private Field**:
//    - The `#balance` field is declared as private using the `#` prefix. This makes it inaccessible from outside the class.

// 2. **Constructor**:
//    - The constructor initializes the `#balance` with the provided `initialBalance`.

// 3. **Deposit Method**:
//    - The `deposit` method takes an `amount` as input. If the amount is positive, it adds the amount to the balance and logs the new balance. Otherwise, it logs an error message.

// 4. **Withdraw Method**:
//    - The `withdraw` method takes an `amount` as input. If the amount is positive and less than or equal to the balance, it subtracts the amount from the balance and logs the new balance. If the amount is greater than the balance, it logs an "Insufficient funds" message. If the amount is negative, it logs an error message.

// 5. **Check Balance Method**:
//    - The `checkBalance` method logs the current balance. This is included for demonstration purposes to verify that the balance is being updated correctly.

// 6. **Testing the Methods**:
//    - An instance of the `Account` class is created with an initial balance of 100.
//    - The `deposit` and `withdraw` methods are tested with various inputs to demonstrate their functionality.
//    - The `checkBalance` method is used to log the final balance.
