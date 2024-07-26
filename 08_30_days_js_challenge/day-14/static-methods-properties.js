// Define the Person class
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Static method to return a generic greeting message
  static genericGreeting() {
    return "Hello, this is a generic greeting!";
  }

  // Static method to return the full name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Define the Student class extending the Person class
class Student extends Person {
  // Static property to keep track of the number of students created
  static studentCount = 0;

  constructor(firstName, lastName, studentId) {
    super(firstName, lastName);
    this.studentId = studentId;
    // Increment the student count whenever a new Student instance is created
    Student.studentCount++;
  }

  // Method to return the student ID
  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }

  // Static method to get the current student count
  static getStudentCount() {
    return `Total number of students: ${Student.studentCount}`;
  }
}

// Call the static method without creating an instance of the Person class
console.log(Person.genericGreeting()); // Expected output: Hello, this is a generic greeting!

// Create instances of the Student class
const student1 = new Student("Alice", "Johnson", "S12345");
const student2 = new Student("Bob", "Smith", "S67890");

// Log the student IDs
console.log(student1.getStudentId()); // Expected output: Student ID: S12345
console.log(student2.getStudentId()); // Expected output: Student ID: S67890

// Log the total number of students using the static property
console.log(Student.getStudentCount()); // Expected output: Total number of students: 2
