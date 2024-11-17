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

// Define the Student class extending the Person class
class Student extends Person {
  constructor(firstName, lastName, age, studentId) {
    super(firstName, lastName, age);
    this.studentId = studentId;
  }

  // Method to return the student ID
  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }

  // Overriding the greet method to include the student ID
  greet() {
    return `Hello, my name is ${this.getFullName()}, I am ${
      this.age
    } years old, and my student ID is ${this.studentId}.`;
  }
}

// Create an instance of the Student class
const student1 = new Student("Alice", "Johnson", 20, "S12345");

// Log the student ID
console.log(student1.getStudentId()); // Expected output: Student ID: S12345

// Log the greeting message
console.log(student1.greet()); // Expected output: Hello, my name is Alice Johnson, I am 20 years old, and my student ID is S12345.

// Update the age of the student and log the updated greeting message
student1.updateAge(21); // Expected output: Updated age: 21
console.log(student1.greet()); // Expected output: Hello, my name is Alice Johnson, I am 21 years old, and my student ID is S12345.
