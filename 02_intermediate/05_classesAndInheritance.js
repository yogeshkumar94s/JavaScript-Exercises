// Exercise 5: Classes and Inheritance

// Create a class representing a geometric shape.
// Include methods to calculate the area and perimeter of the shape.

class GeometricShape {
  constructor() {
    this.type = "Geometric Shape";
  }

  area() {
    // To be implemented in subclasses
  }

  perimeter() {
    // To be implemented in subclasses
  }
}

// Create a subclass for a rectangle.

class Rectangle extends GeometricShape {
  constructor(width, height) {
    super();
    this.type = "Rectangle";
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const myRectangle = new Rectangle(5, 8);
console.log(myRectangle.area()); // Output should be 40
console.log(myRectangle.perimeter()); // Output should be 26

//   1. Basic Class and Object:
//   1.1 Defining a Class and Creating Objects:
//   Creating a basic class and instances (objects) of that class.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.

//   2. Inheritance and Subclasses:
//   2.1 Creating Subclasses:
//   Extending a class to create a subclass with additional properties/methods.

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the constructor of the parent class
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof! Woof!");
  }

  displayInfo() {
    console.log(`I am a ${this.breed} dog named ${this.name}.`);
  }
}

const genericAnimal = new Animal("Generic Animal");
const myDog = new Dog("Buddy", "Labrador");

genericAnimal.makeSound(); // Output: Some generic sound
myDog.makeSound(); // Output: Woof! Woof!
myDog.displayInfo(); // Output: I am a Labrador dog named Buddy.

//   3. Getter and Setter Methods:
//   3.1 Using Getter and Setter:
//   Using getter and setter methods to access and modify private class properties.

class Circle {
  constructor(radius) {
    this._radius = radius; // Convention to indicate a private property
  }

  get radius() {
    return this._radius;
  }

  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      console.error("Radius must be greater than 0.");
    }
  }

  get area() {
    return Math.PI * this._radius ** 2;
  }
}

const myCircle = new Circle(5);

console.log(myCircle.radius); // Output: 5
myCircle.radius = 7;
console.log(myCircle.radius); // Output: 7
console.log(myCircle.area); // Output: ~153.938

//   4. Static Methods:
//   4.1 Using Static Methods:
//   Defining and using static methods that belong to the class rather than instances.

class MathUtils {
  static square(x) {
    return x * x;
  }

  static cube(x) {
    return x * x * x;
  }
}

const number = 3;

console.log(MathUtils.square(number)); // Output: 9
console.log(MathUtils.cube(number)); // Output: 27

//   5. Class Inheritance with super:
//   5.1 Using super in Subclasses:
//   Using super to call methods from the parent class in a subclass.

class Shape {
  constructor(color) {
    this.color = color;
  }

  displayColor() {
    console.log(`Color: ${this.color}`);
  }
}

class Square extends Shape {
  constructor(color, sideLength) {
    super(color); // Call the constructor of the parent class
    this.sideLength = sideLength;
  }

  displayArea() {
    console.log(`Area: ${this.sideLength ** 2}`);
  }
}

const redSquare = new Square("red", 4);

redSquare.displayColor(); // Output: Color: red
redSquare.displayArea(); // Output: Area: 16

//   6. Class Composition:
//   6.1 Using Class Composition:
//   Composing classes by creating instances of other classes within a class.

class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.engine = new Engine(); // Composition
  }

  startCar() {
    console.log(`Starting ${this.make} ${this.model}`);
    this.engine.start();
  }
}

const myCar = new Car("Toyota", "Camry");
myCar.startCar(); // Output: Starting Toyota Camry, Engine started
