// In JavaScript, getter and setter methods, as well as static methods, are features of classes that enhance the flexibility and functionality of object-oriented programming. Let's explore each of these concepts:

// Getter and Setter Methods:

// Getter and setter methods are used to get and set the values of private properties in a class. They provide a way to control access to the internal state of an object and allow for additional logic when retrieving or modifying values.

class Circle {
  constructor(radius) {
    // Private property
    this._radius = radius;
  }

  // Getter method
  get radius() {
    return this._radius;
  }

  // Setter method
  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      console.log("Radius must be greater than 0.");
    }
  }

  // Method to calculate area
  calculateArea() {
    return Math.PI * this._radius ** 2;
  }
}

// Creating an instance of the Circle class
let myCircle = new Circle(5);

// Using the getter
console.log(myCircle.radius); // Output: 5

// Using the setter
myCircle.radius = 8;
console.log(myCircle.radius); // Output: 8

// Trying to set an invalid radius
myCircle.radius = -2; // Output: Radius must be greater than 0.
console.log(myCircle.radius); // Output: 8 (unchanged)

// In this example, the radius property is private, and its value is accessed and modified through the getter and setter methods.

//Static Methods:*-*-*-

//Static methods are associated with the class itself rather than instances of the class. They are called on the class rather than on an object created from the class. Static methods are useful for utility functions that are not tied to a specific instance of the class.

class MathOperations {
  // Static method for adding two numbers
  static add(x, y) {
    return x + y;
  }

  // Static method for multiplying two numbers
  static multiply(x, y) {
    return x * y;
  }
}

// Calling static methods without creating an instance
console.log(MathOperations.add(3, 5)); // Output: 8
console.log(MathOperations.multiply(2, 4)); // Output: 8

//In this example, add and multiply are static methods of the MathOperations class, and they can be called directly on the class without creating an instance.

// Using Getters, Setters, and Statics Together:

class Student {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (typeof newName === "string") {
      this._name = newName;
    } else {
      console.log("Name must be a string.");
    }
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Static method for creating a Student instance
  static createStudent(name, age) {
    return new Student(name, age);
  }
}

// Using getters and setters
let student1 = new Student("Alice", 20);
console.log(student1.name); // Output: Alice
student1.name = "Bob";
console.log(student1.name); // Output: Bob
student1.name = 123; // Output: Name must be a string.
console.log(student1.name); // Output: Bob (unchanged)

// Using a static method to create an instance
let student2 = Student.createStudent("Charlie", 22);
console.log(student2.name); // Output: Charlie

//In this example, the Student class has getter and setter methods for name and age, and it also has a static method createStudent for creating instances of the class. This demonstrates the combination of getter, setter, and static methods in a class.
