# Objects in JavaScript

Objects are a fundamental part of JavaScript and are used to store collections of data and more complex entities.

## Creating objects

Objects are created using either object literals or the Object constructor.

1. Object Literals:

The most common way to create an object is by using an object literal.

```javascript
// Creating an object using object literal
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};
console.log(person);
// Output: { name: 'Alice', age: 30, profession: 'Engineer' }
```

2. Object Constructor:

Another way to create an object is by using the Object constructor.

```javascript
// Creating an object using Object constructor
let person = new Object();
person.name = "Alice";
person.age = 30;
person.profession = "Engineer";
console.log(person);
// Output: { name: 'Alice', age: 30, profession: 'Engineer' }
```

## Accessing Object Properties

You can access the properties of an object using either dot notation or bracket notation.

1. Dot Notation:

This is the most common way to access properties.

```javascript
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};

console.log(person.name); // Output: Alice
console.log(person.age); // Output: 30
console.log(person.profession); // Output: Engineer
```

2. Bracket Notation:

This is useful when property names are dynamic or not valid identifiers.

```javascript
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};

console.log(person["name"]); // Output: Alice
console.log(person["age"]); // Output: 30
console.log(person["profession"]); // Output: Engineer

// Dynamic property access
let propName = "age";
console.log(person[propName]); // Output: 30
```

## Adding and Removing Properties

1. Adding Properties:

You can add properties to an object using either dot notation or bracket notation.

```javascript
let person = {
  name: "Alice",
  age: 30,
};

// Adding a property
person.profession = "Engineer";
console.log(person);
// Output: { name: 'Alice', age: 30, profession: 'Engineer' }

// Adding a property using bracket notation
person["country"] = "USA";
console.log(person);
// Output: { name: 'Alice', age: 30, profession: 'Engineer', country: 'USA' }
```

2. Removing Properties:

You can remove properties from an object using the delete operator.

```javascript
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
  country: "USA",
};

// Removing a property
delete person.country;
console.log(person);
// Output: { name: 'Alice', age: 30, profession: 'Engineer' }
```

## Checking for Property Existence

You can check if a property exists in an object using the in operator or the hasOwnProperty method.

1. Using in Operator:

```javascript
let person = {
  name: "Alice",
  age: 30,
};

console.log("name" in person); // Output: true
console.log("profession" in person); // Output: false
```

2. Using hasOwnProperty Method:

```javascript
let person = {
  name: "Alice",
  age: 30,
};

console.log(person.hasOwnProperty("name")); // Output: true
console.log(person.hasOwnProperty("profession")); // Output: false
```

## Iterating Over Object Properties

You can iterate over the properties of an object using a for...in loop or Object.keys, Object.values, and Object.entries.

1. Using for...in Loop:

```javascript
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: Alice
// age: 30
// profession: Engineer
```

2. Using Object.keys, Object.values, Object.entries:

```javascript
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};

// Object.keys
console.log(Object.keys(person));
// Output: ['name', 'age', 'profession']

// Object.values
console.log(Object.values(person));
// Output: ['Alice', 30, 'Engineer']

// Object.entries
console.log(Object.entries(person));
// Output: [['name', 'Alice'], ['age', 30], ['profession', 'Engineer']]
```

---

# Creating Object Methods

Object methods are defined inside the object. Here are a few ways to define methods in an object:

1. Using Function Expressions:

```javascript
let person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet(); // Output: Hello, my name is Alice
```

2. Using ES6 Method Syntax:

```javascript
let person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet(); // Output: Hello, my name is Alice
```

## Common Object Methods

1. this Keyword:

The this keyword refers to the object from which the method was called. It's crucial for accessing object properties inside methods.

```javascript
let car = {
  brand: "Toyota",
  model: "Corolla",
  getDetails() {
    return this.brand + " " + this.model;
  },
};

console.log(car.getDetails()); // Output: Toyota Corolla
```

2. Adding Methods to Existing Objects:

You can add methods to existing objects.

```javascript
let book = {
  title: "1984",
  author: "George Orwell",
};

book.getSummary = function () {
  return `${this.title} by ${this.author}`;
};

console.log(book.getSummary()); // Output: 1984 by George Orwell
```

3. Using Object.defineProperty:

You can define methods (or properties) using Object.defineProperty for more control.

```javascript
let user = {
  name: "Alice",
  age: 30,
};

Object.defineProperty(user, "info", {
  get() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
});

console.log(user.info); // Output: Name: Alice, Age: 30
```

### Practical Examples

1. Calculator Object:

```javascript
let calculator = {
  value: 0,
  add(num) {
    this.value += num;
    return this;
  },
  subtract(num) {
    this.value -= num;
    return this;
  },
  multiply(num) {
    this.value *= num;
    return this;
  },
  divide(num) {
    if (num !== 0) {
      this.value /= num;
    } else {
      console.log("Cannot divide by zero");
    }
    return this;
  },
  reset() {
    this.value = 0;
    return this;
  },
  getResult() {
    return this.value;
  },
};

calculator.add(10).subtract(5).multiply(2).divide(5);
console.log(calculator.getResult()); // Output: 2
```

2. Todo List Object:

```javascript
let todoList = {
  todos: [],
  addTodo(task) {
    this.todos.push(task);
    return this;
  },
  removeTodo(task) {
    this.todos = this.todos.filter((todo) => todo !== task);
    return this;
  },
  getTodos() {
    return this.todos;
  },
};

todoList
  .addTodo("Learn JavaScript")
  .addTodo("Practice coding")
  .removeTodo("Learn JavaScript");
console.log(todoList.getTodos()); // Output: ["Practice coding"]
```

---

## Nested objects in JavaScript

Nested objects in JavaScript are objects that contain other objects as their properties. This is useful for representing more complex data structures. Let's dive into how to create, access, and manipulate nested objects in JavaScript.

### Creating Nested Objects

Nested objects are created just like regular objects, but their properties can also be objects.

```javascript
let person = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Wonderland",
    zip: "12345",
  },
  hobbies: {
    indoor: ["reading", "chess"],
    outdoor: ["hiking", "cycling"],
  },
};

console.log(person);
```

### Accessing Nested Object Properties

You can access nested properties using dot notation or bracket notation.

1. Dot Notation:

```javascript
console.log(person.name); // Output: Alice
console.log(person.address.city); // Output: Wonderland
console.log(person.hobbies.indoor[0]); // Output: reading
```

2. Bracket Notation:

```javascript
console.log(person["name"]); // Output: Alice
console.log(person["address"]["city"]); // Output: Wonderland
console.log(person["hobbies"]["indoor"][0]); // Output: reading
```

### Modifying Nested Object Properties

You can modify nested properties in the same way you access them.

```javascript
person.address.street = "456 Elm St";
person.hobbies.outdoor.push("swimming");

console.log(person.address.street); // Output: 456 Elm St
console.log(person.hobbies.outdoor); // Output: ["hiking", "cycling", "swimming"]
```

### Adding Properties to Nested Objects

You can add new properties to nested objects similarly.

```javascript
person.address.country = "Fantasyland";
person.hobbies.indoor.push("coding");

console.log(person.address.country); // Output: Fantasyland
console.log(person.hobbies.indoor); // Output: ["reading", "chess", "coding"]
```

### Deleting Properties from Nested Objects

You can delete properties from nested objects using the delete operator.

```javascript
delete person.address.zip;
delete person.hobbies.outdoor[1]; // This removes the element but leaves an empty slot in the array

console.log(person.address); // Output: { street: '456 Elm St', city: 'Wonderland', country: 'Fantasyland' }
console.log(person.hobbies.outdoor); // Output: ["hiking", undefined, "swimming"]
```

### Iterating Over Nested Objects

You can iterate over properties in nested objects using loops.

```javascript
for (let key in person) {
  if (typeof person[key] === "object" && !Array.isArray(person[key])) {
    console.log(`${key}:`);
    for (let nestedKey in person[key]) {
      console.log(`  ${nestedKey}: ${person[key][nestedKey]}`);
    }
  } else {
    console.log(`${key}: ${person[key]}`);
  }
}
// Output:
// name: Alice
// age: 30
// address:
//   street: 456 Elm St
//   city: Wonderland
//   country: Fantasyland
// hobbies:
//   indoor: reading,chess,coding
//   outdoor: hiking,,swimming
```

### Practical Example

Let's create a more complex nested object and manipulate it.

```javascript
let company = {
  name: "TechCorp",
  location: {
    address: "789 Business Ave",
    city: "Tech City",
    country: "Technoland",
  },
  employees: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" },
  ],
  addEmployee(employee) {
    this.employees.push(employee);
  },
  getEmployeeNames() {
    return this.employees.map((employee) => employee.name);
  },
};

console.log(company);

// Adding a new employee
company.addEmployee({ name: "Charlie", role: "Manager" });
console.log(company.getEmployeeNames()); // Output: ["Alice", "Bob", "Charlie"]

// Accessing nested properties
console.log(company.location.city); // Output: Tech City

// Modifying nested properties
company.location.address = "101 Innovation Drive";
console.log(company.location.address); // Output: 101 Innovation Drive
```

```javascript

```

---

## this Keyword

The this keyword is a fundamental concept in JavaScript that often causes confusion. Its value depends on the context in which it is used. Let's go through the different contexts and understand how this behaves in each one.

### Global Context

In the global execution context (outside of any function), this refers to the global object. In a web browser, the global object is window.

```javascript
console.log(this); // In a browser, this will output: Window {...}
```

### Function Context

1. Regular Function:

In a regular function, this refers to the global object (window in browsers, global in Node.js).

```javascript
function showThis() {
  console.log(this);
}

showThis(); // Output: Window {...} (in a browser)
```

2. Strict Mode:

In strict mode, this is undefined in a regular function.

```javascript
"use strict";

function showThis() {
  console.log(this);
}

showThis(); // Output: undefined
```

### Object Method

When a method is called as a property of an object, this refers to the object itself.

```javascript
let person = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
};

person.greet(); // Output: Alice
```

### Arrow Functions

Arrow functions do not have their own this binding. Instead, this is lexically bound, meaning it uses this from the surrounding code where the arrow function is defined.

```javascript
let person = {
  name: "Alice",
  greet: function () {
    let innerFunc = () => {
      console.log(this.name);
    };
    innerFunc();
  },
};

person.greet(); // Output: Alice
```

### Constructors and the new Keyword

When a function is used as a constructor with the new keyword, this refers to the newly created object.

```javascript
function Person(name) {
  this.name = name;
}

let alice = new Person("Alice");
console.log(alice.name); // Output: Alice
```

### Event Handlers

In event handlers, this refers to the element that received the event.

```javascript
document.getElementById("myButton").addEventListener("click", function () {
  console.log(this); // Output: <button id="myButton">...</button>
});
```

### Call, Apply, and Bind Methods

1. call Method:

The call method calls a function with a given this value and arguments provided individually.

```javascript
function greet() {
  console.log(this.name);
}

let person = { name: "Alice" };
greet.call(person); // Output: Alice
```

2. apply Method:

The apply method is similar to call, but it takes arguments as an array.

```javascript
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

let person = { name: "Alice" };
greet.apply(person, ["Hello"]); // Output: Hello, Alice
```

3. bind Method:

The bind method creates a new function that, when called, has its this value set to the provided value.

```javascript
function greet() {
  console.log(this.name);
}

let person = { name: "Alice" };
let greetAlice = greet.bind(person);
greetAlice(); // Output: Alice
```

---

## Object Iteration

Object iteration in JavaScript involves looping through the properties of an object. There are several ways to do this, each with its own use cases and benefits. Let's explore the different methods to iterate over object properties.

### for...in Loop

The for...in loop is used to iterate over the enumerable properties of an object. It iterates over all the properties that are directly on the object as well as those inherited through the prototype chain.

```javascript
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    // To ensure only own properties are iterated
    console.log(`${key}: ${person[key]}`);
  }
}
// Output:
// name: Alice
// age: 30
// profession: Engineer
```

### Object.keys(), Object.values(), and Object.entries()

1. Object.keys():

Returns an array of the object's own enumerable property names (keys).

```javascript
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};

Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});
// Output:
// name: Alice
// age: 30
// profession: Engineer
```

2. Object.values():

Returns an array of the object's own enumerable property values.

```javascript
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};

Object.values(person).forEach((value) => {
  console.log(value);
});
// Output:
// Alice
// 30
// Engineer
```

3. Object.entries():

Returns an array of the object's own enumerable property [key, value] pairs.

```javascript
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: Alice
// age: 30
// profession: Engineer
```

### for...of Loop with Object.keys(), Object.values(), and Object.entries()

You can also use the for...of loop with Object.keys(), Object.values(), and Object.entries() to iterate over the properties.

```javascript
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};

// Using Object.keys()
for (let key of Object.keys(person)) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 30
// profession: Engineer

// Using Object.values()
for (let value of Object.values(person)) {
  console.log(value);
}
// Output:
// Alice
// 30
// Engineer

// Using Object.entries()
for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 30
// profession: Engineer
```

### Using Object.getOwnPropertyNames()

Object.getOwnPropertyNames() returns an array of all properties (enumerable or not) found directly on an object.

```javascript
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};

Object.getOwnPropertyNames(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});
// Output:
// name: Alice
// age: 30
// profession: Engineer
```

### Using Reflect.ownKeys()

Reflect.ownKeys() returns an array of all property keys (including non-enumerable and symbol properties) found directly on an object.

```javascript
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};

Reflect.ownKeys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});
// Output:
// name: Alice
// age: 30
// profession: Engineer
```

### Practical Example

Let's put these methods into practice with a more complex object.

```javascript
let company = {
  name: "TechCorp",
  location: {
    address: "789 Business Ave",
    city: "Tech City",
    country: "Technoland",
  },
  employees: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" },
  ],
};

// Iterating over top-level properties
Object.entries(company).forEach(([key, value]) => {
  console.log(`${key}: ${JSON.stringify(value)}`);
});
// Output:
// name: "TechCorp"
// location: {"address":"789 Business Ave","city":"Tech City","country":"Technoland"}
// employees: [{"name":"Alice","role":"Developer"},{"name":"Bob","role":"Designer"}]

// Iterating over nested properties (location)
Object.entries(company.location).forEach(([key, value]) => {
  console.log(`location ${key}: ${value}`);
});
// Output:
// location address: 789 Business Ave
// location city: Tech City
// location country: Technoland

// Iterating over array of objects (employees)
company.employees.forEach((employee) => {
  Object.entries(employee).forEach(([key, value]) => {
    console.log(`employee ${key}: ${value}`);
  });
});
// Output:
// employee name: Alice
// employee role: Developer
// employee name: Bob
// employee role: Designer
```
