//Encapsulation is one of the fundamental principles in object-oriented programming (OOP). It refers to the bundling of data (attributes or properties) and the methods (functions or procedures) that operate on that data into a single unit known as a class. The primary goal of encapsulation is to hide the internal details of an object and expose only what is necessary for the outside world to interact with it.

//Key aspects of encapsulation include:

//1.0 Data Hiding:
//Encapsulation allows you to hide the internal state (data) of an object and provide controlled access to it. This is achieved by declaring data members as private or protected within the class.

//2.0 Access Control:
//In many programming languages that support encapsulation, you can specify the access level of members (attributes or methods) using keywords like private, protected, and public. This controls which parts of the program can access the encapsulated data or methods.

//3.0 Public Interface:
//Encapsulation emphasizes defining a clear and well-designed public interface for interacting with an object. This public interface includes methods that allow users of the class to perform specific operations without needing to know the internal details of how those operations are implemented.

//4.0 Data Validation and Consistency:
//Encapsulation enables the implementation of methods within the class that can enforce data validation rules, ensuring that the object's state remains consistent and valid.

// Example of encapsulation in JavaScript

// Constructor function to create a BankAccount object
function BankAccount(accountHolder, initialBalance) {
  // Private attributes
  let _accountHolder = accountHolder;
  let _balance = initialBalance;

  // Public methods for interaction
  this.deposit = function (amount) {
    // Implement deposit logic with data validation
    if (amount > 0) {
      _balance += amount;
      console.log(`Deposited ${amount}. New balance: ${_balance}`);
    }
  };

  this.withdraw = function (amount) {
    // Implement withdrawal logic with data validation
    if (amount > 0 && amount <= _balance) {
      _balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${_balance}`);
    } else {
      console.log("Insufficient funds");
    }
  };

  this.getBalance = function () {
    // Provide read-only access to balance
    return _balance;
  };

  this.getAccountHolder = function () {
    // Provide read-only access to account holder
    return _accountHolder;
  };
}

// Creating a BankAccount object
let myAccount = new BankAccount("John Doe", 1000);

// Using public methods to interact with the object
myAccount.deposit(500); // Output: Deposited 500. New balance: 1500
myAccount.withdraw(200); // Output: Withdrawn 200. New balance: 1300
console.log(`Account holder: ${myAccount.getAccountHolder()}`);
console.log(`Current balance: ${myAccount.getBalance()}`);

//In this example:

//The BankAccount function serves as a constructor for creating BankAccount objects.

//The accountHolder and _balance variables are encapsulated as private attributes using closure (via the concept of a closure, _accountHolder and _balance are accessible within the public methods but not directly from outside).

//Public methods (deposit, withdraw, getBalance, getAccountHolder) are provided for interacting with the object. These methods encapsulate the internal logic and data validation.

//External code interacts with the object only through its public methods, maintaining encapsulation.

//*-*-*-*another example of encapsulation in JavaScript, this time focusing on encapsulating data related to a person:
// Example of encapsulation for a Person object

// Constructor function to create a Person object
function Person(name, age) {
  // Private attributes
  let _name = name;
  let _age = age;

  // Public methods for interaction
  this.greet = function () {
    console.log(`Hello, my name is ${_name}.`);
  };

  this.getAge = function () {
    // Provide read-only access to age
    return _age;
  };

  this.haveBirthday = function () {
    // Increment age
    _age++;
    console.log(`Happy Birthday! I am now ${_age} years old.`);
  };
}

// Creating a Person object
let john = new Person("John", 30);

// Using public methods to interact with the object
john.greet(); // Output: Hello, my name is John.
console.log(`Current age: ${john.getAge()}`); // Output: Current age: 30
john.haveBirthday(); // Output: Happy Birthday! I am now 31 years old.
console.log(`Updated age: ${john.getAge()}`); // Output: Updated age: 31

//In this example:

//The Person function serves as a constructor for creating Person objects.
//The name and _age variables are encapsulated as private attributes using closure.
//Public methods (greet, getAge, haveBirthday) are provided for interacting with the object. These methods encapsulate the internal logic and data.
//External code interacts with the Person object only through its public methods, ensuring that the internal state is accessed and modified in a controlled manner.

//Encapsulation allows us to bundle related data and functionality together, preventing direct access to the object's internal state from outside code. This helps create more modular and maintainable code, and it reduces the risk of unintended interference with the object's data.
