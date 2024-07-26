// Define the Person class
class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Getter method to return the full name
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Setter method to update the first name and last name
  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this._firstName = firstName;
    this._lastName = lastName;
  }
}

// Create an instance of the Person class
const person = new Person("John", "Doe");

// Log the full name using the getter
console.log(person.fullName); // Expected output: John Doe

// Update the name using the setter
person.fullName = "Jane Smith";

// Log the updated full name using the getter
console.log(person.fullName); // Expected output: Jane Smith
