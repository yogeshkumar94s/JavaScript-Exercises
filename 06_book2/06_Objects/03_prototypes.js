//Prototypes are a fundamental concept in JavaScript that plays a key role in the language's object-oriented nature. Understanding prototypes is crucial for working effectively with objects and constructors in JavaScript.

//Here's an explanation of prototypes and how they work:

//Prototypes in JavaScript:

//1.0 Prototype Chain:

//Every object in JavaScript has a prototype, which is itself an object. This creates a chain of objects known as the prototype chain.

//When you try to access a property or method on an object, JavaScript looks for that property or method on the object itself. If it doesn't find it, it looks in the object's prototype, and so on, forming a chain until it reaches the top-level object, which is Object.prototype.

//2.0 Constructor Functions:

// Constructor functions are used to create objects with a shared structure and behavior. When a new object is created using a constructor, the object inherits properties and methods from the constructor's prototype.

//Example of Prototypes with Constructor Functions:

// Constructor function for creating Person objects
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

// Creating two Person objects
let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

// Both objects share the same prototype method
person1.greet(); // Output: Hello, my name is Alice.
person2.greet(); // Output: Hello, my name is Bob.

//In this example:

//The Person constructor function creates objects with name and age properties.
//The greet method is added to the Person.prototype. This means that all instances created by the Person constructor will share this method through the prototype chain.
//person1 and person2 both have access to the greet method, even though it's not directly defined on each object. This is because they inherit it from the shared prototype.

//Object.create for Prototypal Inheritance:

// Creating a prototype object
let animalPrototype = {
  makeSound: function () {
    console.log("Some generic sound.");
  },
};

// Creating a new object that inherits from the prototype
let dog = Object.create(animalPrototype);
dog.breed = "Labrador";

// Accessing a property from the prototype
console.log(dog.breed); // Output: Labrador

// Accessing a method from the prototype
dog.makeSound(); // Output: Some generic sound.

//In this example, dog is created with Object.create(animalPrototype), establishing a prototype link between dog and animalPrototype. The makeSound method is part of the prototype, and dog inherits it.

//ES6 Classes and Prototypes:*-*-*-*-*
//In modern JavaScript (ES6 and later), the class syntax provides a more syntactic sugar for working with prototypes and constructor functions:

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic sound.");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

let myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound(); // Output: Some generic sound.

//Under the hood, classes in JavaScript still use prototypes for inheritance.

//Understanding prototypes is essential for effective JavaScript development, especially when working with objects, constructors, and inheritance. It provides a mechanism for code reuse and a way to structure and organize your code in a more modular and maintainable manner.
