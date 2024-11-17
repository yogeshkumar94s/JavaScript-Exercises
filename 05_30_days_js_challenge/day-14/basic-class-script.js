// Define the Person class
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Method to return the full name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Method to return a greeting message
  greet() {
    return `Hello, my name is ${this.getFullName()} and I am ${
      this.age
    } years old.`;
  }

  // Method to update the age and log the updated age
  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }
}

// Create instances of the Person class
const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);

// Log greeting messages
console.log(person1.greet()); // Expected output: Hello, my name is John Doe and I am 30 years old.
console.log(person2.greet()); // Expected output: Hello, my name is Jane Smith and I am 25 years old.

// Update the age of person1 and log the updated age
person1.updateAge(31); // Expected output: Updated age: 31

// Log the greeting message after updating the age
console.log(person1.greet()); // Expected output: Hello, my name is John Doe and I am 31 years old.
