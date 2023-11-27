//In JavaScript, object methods are functions that are associated with an object. They are defined as properties of an object and can be invoked through the object. Object methods allow objects to encapsulate behavior, making them a key part of object-oriented programming in JavaScript.

//Here's an example demonstrating object methods:

// Example of object methods in JavaScript

// Object definition with a method
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  // Method to display full name
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  // Method to increment age
  celebrateBirthday: function () {
    this.age++;
  },
};

// Accessing properties and invoking methods
console.log("First Name:", person.firstName); // Output: First Name: John
console.log("Full Name:", person.fullName()); // Output: Full Name: John Doe

console.log("Age before birthday:", person.age); // Output: Age before birthday: 30
person.celebrateBirthday(); // Invoking the celebrateBirthday method
console.log("Age after birthday:", person.age); // Output: Age after birthday: 31

//In this example:

//The person object has properties (firstName, lastName, age) and two methods (fullName and celebrateBirthday).

//The fullName method is a function that concatenates the firstName and lastName properties to form the full name.

//The celebrateBirthday method is a function that increments the age property by one.

//Object methods are invoked using the object and the dot notation (object.method()). The this keyword inside a method refers to the object itself.

//Using ES6 Method Shorthand:

//In modern JavaScript (ES6 and later), you can use the shorthand method syntax when defining methods within an object:

// ES6 shorthand method syntax
let personES6 = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25,
  // Shorthand method to display full name
  fullName() {
    return this.firstName + " " + this.lastName;
  },
  // Shorthand method to increment age
  celebrateBirthday() {
    this.age++;
  },
};

console.log("Full Name (ES6):", personES6.fullName()); // Output: Full Name (ES6): Alice Smith
personES6.celebrateBirthday();
console.log("Age after birthday (ES6):", personES6.age); // Output: Age after birthday (ES6): 26

//The shorthand method syntax is more concise and is commonly used in modern JavaScript code.
