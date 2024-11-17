// In JavaScript, objects are a fundamental data type that allows you to store and organize data using a collection of key-value pairs. Objects are used to represent and model real-world entities and concepts. Here's a basic overview of objects in JavaScript:

// Object Creation:

// There are multiple ways to create objects in JavaScript. The most common method is using the object literal syntax:

// Object literal syntax
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

//   In this example, person is an object with properties like firstName, lastName, age, and email.

// Accessing Properties:

// You can access object properties using dot notation or square bracket notation:
console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe

// Modifying and Adding Properties:
// Modifying an existing property
person.age = 31;

// Adding a new property
person.city = "New York";

// Object Methods:
// Objects can also have methods, which are functions associated with the object:

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  start: function () {
    console.log("Engine started!");
  },
  drive: function () {
    console.log("Car is moving...");
  },
};

car.start(); // Output: Engine started!
car.drive(); // Output: Car is moving...

//   Object Constructors:
// You can create objects using constructor functions and the new keyword:

// Constructor function
function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function () {
    console.log("Woof!");
  };
}

// Creating a new instance of Dog
let myDog = new Dog("Buddy", 3);

// Accessing properties and calling a method
console.log(myDog.name); // Output: Buddy
myDog.bark(); // Output: Woof!

//   Object Destructuring:
// Object destructuring allows you to extract properties from objects and assign them to variables:
let { firstName, lastName, age } = person;
console.log(firstName, lastName, age); // Output: John Doe 31

// JSON (JavaScript Object Notation):
// Objects in JavaScript are closely related to JSON, a lightweight data interchange format. JSON syntax resembles object literal notation:

let jsonString = '{"name": "Alice", "age": 25, "city": "Wonderland"}';
let parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name); // Output: Alice

// Object Prototypes and Inheritance:
// JavaScript is a prototype-based language. Objects can inherit properties and methods from other objects through prototypes:

// Creating a prototype object
let animal = {
  eat: function () {
    console.log("Nom nom nom");
  },
};

// Creating a new object that inherits from the prototype
let cat = Object.create(animal);
cat.meow = function () {
  console.log("Meow!");
};

cat.eat(); // Output: Nom nom nom
cat.meow(); // Output: Meow!

//   Understanding objects is crucial in JavaScript programming, as they play a central role in the language's data model and are used extensively in web development.
