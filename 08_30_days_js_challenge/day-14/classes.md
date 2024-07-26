# Classes in JavaScript

### Classes in JavaScript

In JavaScript, classes are syntactic sugar over the prototype-based inheritance model. They allow you to create objects and define their behavior using a more familiar class syntax.

### Task 1: Define a Class `Person`

Let's define a class `Person` with properties `name` and `age`, and a method to return a greeting message.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Create an instance of the class
const person1 = new Person("John", 30);

// Log the greeting message
console.log(person1.greet());
```

### Task 2: Add a Method to Update the Age

Now, let's add a method to the `Person` class that updates the `age` property and logs the updated age.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Age updated to: ${this.age}`);
  }
}

// Create an instance of the class
const person1 = new Person("John", 30);

// Log the greeting message
console.log(person1.greet());

// Update the age and log the updated age
person1.updateAge(35);
```

### Summary

1. **Defining a Class:**

   - Create a class with a constructor to initialize properties.
   - Add methods to the class.

2. **Creating an Instance:**

   - Use the `new` keyword to create an instance of the class.

3. **Updating Properties:**
   - Add methods to update properties and log the changes.

---

## Class inheritance

### Class Inheritance in JavaScript

In JavaScript, class inheritance allows you to create a new class that extends an existing class, inheriting its properties and methods while also adding new properties or methods or overriding existing ones.

### Task 1: Define a `Student` Class that Extends the `Person` Class

Let's define a `Student` class that extends the `Person` class. We will add a `studentId` property and a method to return the `studentId`.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Age updated to: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return `My student ID is ${this.studentId}.`;
  }
}

// Create an instance of the Student class
const student1 = new Student("John", 20, "S12345");

// Log the student ID
console.log(student1.getStudentId());
```

### Task 2: Override the Greeting Method in the `Student` Class

Next, let's override the `greet` method in the `Student` class to include the `studentId` in the message.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Age updated to: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return `My student ID is ${this.studentId}.`;
  }

  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

// Create an instance of the Student class
const student1 = new Student("John", 20, "S12345");

// Log the overridden greeting message
console.log(student1.greet());
```

### Summary

1. **Class Inheritance:**

   - Use the `extends` keyword to create a new class that inherits from an existing class.
   - Use the `super` keyword to call the constructor of the parent class.

2. **Adding Properties and Methods:**

   - Add new properties and methods to the child class.

3. **Overriding Methods:**
   - Override methods in the child class by redefining them.

---

## static methods in JavaScript

### Static Methods and Properties in JavaScript

Static methods and properties are defined on the class itself rather than on instances of the class. They are called on the class directly and are often used for utility functions and class-level data.

### Task 1: Add a Static Method to the `Person` Class

Let's add a static method to the `Person` class that returns a generic greeting message.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Age updated to: ${this.age}`);
  }

  static genericGreeting() {
    return "Hello, welcome to our community!";
  }
}

// Call the static method without creating an instance of the class
console.log(Person.genericGreeting());
```

### Task 2: Add a Static Property to the `Student` Class

Next, let's add a static property to the `Student` class to keep track of the number of students created. We will increment this property in the constructor and log the total number of students.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Age updated to: ${this.age}`);
  }

  static genericGreeting() {
    return "Hello, welcome to our community!";
  }
}

class Student extends Person {
  static studentCount = 0; // Static property to keep track of the number of students

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount++; // Increment the static property
  }

  getStudentId() {
    return `My student ID is ${this.studentId}.`;
  }

  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }

  static getStudentCount() {
    return `Total number of students: ${Student.studentCount}`;
  }
}

// Create instances of the Student class
const student1 = new Student("John", 20, "S12345");
const student2 = new Student("Jane", 22, "S12346");

// Log the total number of students
console.log(Student.getStudentCount());
```

### Summary

1. **Static Methods:**

   - Defined using the `static` keyword.
   - Called on the class itself, not on instances of the class.

2. **Static Properties:**
   - Defined directly on the class.
   - Used to store class-level data or constants.

---

## getter and setter in JavaScript

### Getters and Setters in JavaScript

Getters and setters are special methods that provide a way to access and update the properties of an object. They are defined using the `get` and `set` keywords respectively.

### Task 1: Add a Getter Method to the `Person` Class

Let's add a getter method to the `Person` class to return the full name.

```javascript
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  greet() {
    return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Age updated to: ${this.age}`);
  }

  static genericGreeting() {
    return "Hello, welcome to our community!";
  }
}

// Create an instance of the Person class
const person = new Person("John", "Doe", 30);

// Log the full name using the getter
console.log(person.fullName);
```

### Task 2: Add a Setter Method to the `Person` Class

Next, let's add a setter method to the `Person` class to update the name properties.

```javascript
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Age updated to: ${this.age}`);
  }

  static genericGreeting() {
    return "Hello, welcome to our community!";
  }
}

// Create an instance of the Person class
const person = new Person("John", "Doe", 30);

// Update the name using the setter
person.fullName = "Jane Smith";

// Log the updated full name
console.log(person.fullName);
```

### Summary

1. **Getter Methods:**

   - Defined using the `get` keyword.
   - Provide a way to access the value of a property.
   - Do not take any arguments.

2. **Setter Methods:**
   - Defined using the `set` keyword.
   - Provide a way to update the value of a property.
   - Take exactly one argument.

---

## private fields

### Private Fields in JavaScript

Private fields in JavaScript classes are defined using the `#` syntax. These fields are only accessible within the class they are defined in, ensuring encapsulation and data privacy.

### Task 1: Define a Class `Account` with Private Fields

Let's define a class `Account` with private fields for balance and methods to deposit and withdraw money.

```javascript
class Account {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}`);
    } else {
      console.log("Invalid withdraw amount.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}
```

### Task 2: Create an Instance and Test the Methods

Now, let's create an instance of the `Account` class and test the deposit and withdraw methods, logging the balance after each operation.

```javascript
// Create an instance of the Account class
const myAccount = new Account(1000);

// Test the deposit method
myAccount.deposit(500);
console.log(`Current Balance: $${myAccount.getBalance()}`); // Expected output: Current Balance: $1500

// Test the withdraw method
myAccount.withdraw(300);
console.log(`Current Balance: $${myAccount.getBalance()}`); // Expected output: Current Balance: $1200

// Attempt to withdraw more than the current balance
myAccount.withdraw(2000);
console.log(`Current Balance: $${myAccount.getBalance()}`); // Expected output: Invalid withdraw amount. Current Balance: $1200

// Attempt to deposit a negative amount
myAccount.deposit(-200);
console.log(`Current Balance: $${myAccount.getBalance()}`); // Expected output: Deposit amount must be positive. Current Balance: $1200
```

### Summary

1. **Private Fields:**

   - Defined using the `#` prefix.
   - Only accessible within the class they are defined in.
   - Provide encapsulation and data privacy.

2. **Encapsulation:**

   - Ensure that the balance can only be updated through the `deposit` and `withdraw` methods.

3. **Instance Methods:**
   - `deposit(amount)`: Adds a positive amount to the balance.
   - `withdraw(amount)`: Subtracts a valid amount from the balance.
   - `getBalance()`: Returns the current balance.
