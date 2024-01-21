// Q1: What is an object in JavaScript?
// A: An object is a complex data type that allows you to store and organize data using key-value pairs. Keys are strings, and values can be any data type.

// Q2: How do you create an empty object?
// A: You can create an empty object using the object literal syntax or the Object constructor.

const emptyObjectLiteral = {};
const emptyObjectConstructor = new Object();

// Q3: How do you add properties to an object?
// A: You can add properties to an object by using dot notation or square bracket notation.

const person = {};
person.name = "John"; // Using dot notation
person["age"] = 25; // Using square bracket notation

// Q4: Can objects have functions as properties? What are they called?
// A: Yes, objects can have functions as properties. These functions are called methods.

const car = {
  brand: "Toyota",
  start: function () {
    console.log("Engine started!");
  },
};

car.start(); // Calling the method

// Q5: How do you access the values of object properties?
// A: You can access the values of object properties using dot notation or square bracket notation.

console.log(person.name); // Using dot notation
console.log(person["age"]); // Using square bracket notation

// Q6: What is object destructuring, and how is it used?
// A: Object destructuring is a way to extract properties from an object and assign them to variables in a single line.

const { name, age } = person;
console.log(name, age);

// Q7: How do you check if an object has a specific property?
// A: You can use the "in" operator or the "hasOwnProperty" method.

console.log("name" in person); // Using "in" operator
console.log(person.hasOwnProperty("age")); // Using "hasOwnProperty" method

// Q8: What is the "this" keyword in the context of an object method?
// A: The "this" keyword refers to the current instance of the object and is used to access its properties and methods.

const user = {
  name: "Alice",
  greet: function () {
    console.log("Hello, " + this.name + "!");
  },
};

user.greet(); // Outputs: Hello, Alice!
