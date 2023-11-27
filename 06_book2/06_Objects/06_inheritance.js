// Inheritance is a key concept in object-oriented programming (OOP) that allows one class to inherit the properties and methods of another class. This promotes code reuse and the creation of a hierarchy of classes with shared characteristics. In JavaScript, inheritance is achieved through prototype chaining or, more modernly, through the use of classes.

//Prototype Chaining:

// Before the introduction of ES6 classes, JavaScript used prototype-based inheritance. Objects in JavaScript have a prototype, and the prototype is itself an object. When a property or method is accessed on an object, JavaScript looks for that property or method on the object itself and, if not found, continues to look in the object's prototype, forming a prototype chain.

//Example of Prototype Chaining:

// Parent constructor function
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

// Child constructor function
function Dog(name, breed) {
  // Call the parent constructor using call or apply
  Animal.call(this, name);
  this.breed = breed;
}

// Establishing prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding a method to the child prototype
Dog.prototype.bark = function () {
  console.log(`${this.name} barks loudly.`);
};

// Creating instances
let myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); // Output: Buddy makes a sound.
myDog.bark(); // Output: Buddy barks loudly.

// In this example:

//The Animal constructor creates objects with a name property and a speak method.
//The Dog constructor calls the Animal constructor to initialize the name property, and it adds a breed property.
//The Dog prototype is set to an object created with Object.create(Animal.prototype), establishing the prototype chain.
//The Dog prototype is linked to the Animal prototype, allowing instances of Dog to inherit the speak method.

// ES6 Class Inheritance:

//With the introduction of ES6, JavaScript has a more class-based syntax for inheritance. The class keyword provides a cleaner and more intuitive way to define classes and their inheritance relationships.

//Example of Class Inheritance:

// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class
class Dog extends Animal {
  constructor(name, breed) {
    // Call the parent constructor using super
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks loudly.`);
  }
}

// Creating instances
let myDog1 = new Dog("Buddy", "Golden Retriever");
myDog1.speak(); // Output: Buddy makes a sound.
myDog1.bark(); // Output: Buddy barks loudly.

//In this example:

//The Animal class is defined with a constructor and a speak method.
//The Dog class extends the Animal class using the extends keyword.
//The super keyword is used to call the constructor of the parent class, ensuring that the name property is properly initialized.
//The Dog class adds a bark method.

//ES6 classes provide a more structured and syntactically clear way to work with inheritance in JavaScript.

//Both prototype-based and class-based inheritance approaches are valid in JavaScript, and the choice often depends on personal preference and the specific requirements of a project. ES6 classes have become more popular due to their readability and familiarity with developers coming from other object-oriented languages.
