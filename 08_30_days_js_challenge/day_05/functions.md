# Functions in JavaScript

## Function Declaration

A function declaration defines a named function, which can be called anywhere in the scope where it is defined. This type of function is often used for defining reusable blocks of code.

```javascript
function functionName(parameters) {
  // Function body
  // Code to be executed
  return value; // Optional
}
```

### Key Points

1. Function Name: The name of the function, used to call it later.

2. Parameters: Variables listed inside the parentheses that act as placeholders for the values that will be passed to the function.

3. Function Body: The block of code inside the curly braces {} that runs when the function is called.

4. Return Statement: An optional statement used to return a value from the function. If omitted, the function returns undefined.

Here is a simple example of a function declaration:

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Calling the function
const message = greet("Alice");
console.log(message); // Output: Hello, Alice!
```

## Hoisting

Function declarations are hoisted to the top of their scope, meaning you can call the function before its declaration in the code:

```javascript
console.log(greet("Bob")); // Output: Hello, Bob!

function greet(name) {
  return `Hello, ${name}!`;
}
```

### Characteristics

1. Naming: Function names should be descriptive and follow standard naming conventions (camelCase).

2. Scope: Functions declared within another function are local to that function. If declared in the global scope, they are available globally.

3. Reusability: Function declarations allow you to reuse code by calling the function multiple times with different arguments.

---

## Function Expression

A function expression is another way to define a function in JavaScript. Unlike function declarations, function expressions are not hoisted, and they can be anonymous.

```javascript
const functionName = function (parameters) {
  // Function body
  // Code to be executed
  return value; // Optional
};
```

### Key Points

1. Function Name: In function expressions, the function can be anonymous (no name) or named.

2. Parameters: Variables listed inside the parentheses that act as placeholders for the values that will be passed to the function.

3. Function Body: The block of code inside the curly braces {} that runs when the function is called.

4. Return Statement: An optional statement used to return a value from the function. If omitted, the function returns undefined.

Here is a simple example of a function expression:

```javascript
// Function expression
const greet = function (name) {
  return `Hello, ${name}!`;
};

// Calling the function
const message = greet("Alice");
console.log(message); // Output: Hello, Alice!
```

### Explanation

1. Function Expression: const greet = function(name) { ... }; assigns an anonymous function to the greet variable.

2. Function Body: Inside the function, we use a template literal to create a greeting message.

3. Return Statement: The function returns the greeting string.

4. Function Call: We call the function with the argument 'Alice', and store the result in the message variable, which we then log to the console.

### Named Function Expression

You can also create a named function expression, though it is less common:

```javascript
const greet = function greetFunction(name) {
  return `Hello, ${name}!`;
};
```

### Differences from Function Declarations

1. Hoisting: Function expressions are not hoisted, meaning they cannot be called before they are defined.

```javascript
console.log(greet("Bob")); // Error: greet is not defined

const greet = function (name) {
  return `Hello, ${name}!`;
};
```

2. Anonymous Functions: Function expressions can be anonymous, whereas function declarations must have a name.

3. Flexibility: Function expressions can be used to create immediately invoked function expressions (IIFE), which execute immediately after they are defined.

### Immediately Invoked Function Expression (IIFE)

An IIFE is a function expression that runs as soon as it is defined:

```javascript
(function () {
  console.log("This function runs immediately!");
})();
```

---

## Arrow Function

Sure! Arrow functions are a concise syntax for writing functions in JavaScript, introduced in ES6 (ECMAScript 2015). They offer a shorter syntax compared to traditional function expressions and come with some behavior differences, especially regarding the this keyword.

The basic syntax of an arrow function is:

```javascript
const functionName = (parameters) => {
  // Function body
  return value; // Optional
};
```

For single parameter functions, you can omit the parentheses:

```javascript
const functionName = (parameter) => {
  // Function body
  return value; // Optional
};
```

For single-line functions, you can omit the curly braces and the return keyword:

```javascript
const functionName = (parameters) => value;
```

### Example

Example 1: Single-Line Arrow Function

```javascript
const add = (a, b) => a + b;

console.log(add(2, 3)); // Output: 5
```

Example 2: Arrow Function with Multiple Parameters

```javascript
const greet = (name, age) => {
  return `Hello, ${name}! You are ${age} years old.`;
};

console.log(greet("Alice", 25)); // Output: Hello, Alice! You are 25 years old.
```

Example 3: Arrow Function with a Single Parameter

```javascript
const square = (x) => x * x;

console.log(square(4)); // Output: 16
```

### Key Characteristics

1. No this Binding: Arrow functions do not have their own this context. Instead, they inherit this from the surrounding non-arrow function or global scope. This makes them particularly useful for writing short callback functions.

2. Implicit Return: If the function body consists of a single expression, you can omit the curly braces and the return keyword, and the expression will be implicitly returned.

3. Cannot be used as constructors: Arrow functions cannot be used with the new keyword, as they do not have their own this.

4. No arguments Object: Arrow functions do not have their own arguments object. You need to use rest parameters to achieve similar functionality.

### Comparison with Regular Functions

"this" Binding

Regular functions:

```javascript
function Person() {
  this.age = 0;

  setInterval(function growUp() {
    this.age++; // `this` refers to the global object
  }, 1000);
}

const p = new Person();
```

Arrow functions:

```javascript
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` refers to the Person instance
  }, 1000);
}

const p = new Person();
```

Example with "this" Context

```javascript
const person = {
  name: "Alice",
  greet: function () {
    setTimeout(function () {
      console.log(`Hello, my name is ${this.name}`); // `this` is undefined
    }, 1000);
  },
};

person.greet(); // Output: Hello, my name is undefined
```

Using an arrow function:

```javascript
const person = {
  name: "Alice",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}`); // `this` refers to the person object
    }, 1000);
  },
};

person.greet(); // Output: Hello, my name is Alice
```

---

## Function Parameters

Function parameters are the variables listed as part of the function definition. When a function is called, the values passed to the function are called arguments. The parameters act as placeholders for these arguments.

```javascript
function greet(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet("Alice", 25); // Output: Hello, Alice! You are 25 years old.
```

### Default Parameters

Default parameters allow you to initialize named parameters with default values if no value or undefined is passed to the function.

```javascript
function functionName(parameter1 = defaultValue1, parameter2 = defaultValue2) {
  // Function body
}
```

### Example with Default Parameters

Here's an example demonstrating the use of default parameters:

```javascript
function greet(name = "Guest", age = 18) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet("Alice", 25); // Output: Hello, Alice! You are 25 years old.
greet(); // Output: Hello, Guest! You are 18 years old.
```

### Combining Parameters and Default Values

You can mix parameters with and without default values. Default parameters should generally be placed after non-default parameters to avoid confusion.

```javascript
function greet(greeting, name = "Guest") {
  console.log(`${greeting}, ${name}!`);
}

greet("Hello", "Alice"); // Output: Hello, Alice!
greet("Hi"); // Output: Hi, Guest!
```

### Handling undefined Values

Default parameters only apply if the argument is undefined. If an argument is explicitly passed as undefined, the default value will be used. However, if null is passed, it will not trigger the default value.

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(undefined); // Output: Hello, Guest!
greet(null); // Output: Hello, null!
```

---

## Higher-Order Functions

### Higher-Order Functions

A higher-order function is a function that either:

1. Takes one or more functions as arguments, or
2. Returns a function as its result.

Higher-order functions are a fundamental part of functional programming and allow for more abstract and reusable code.

### Why Use Higher-Order Functions?

Higher-order functions help in:

1. Abstracting or isolating actions, effects, or asynchronous flows

2. Creating utilities that can be reused in different contexts

3. Writing more declarative and readable code

Example 1: Function as an Argument

Here's an example of a higher-order function that takes another function as an argument:

```javascript
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// Usage example
repeat(3, console.log); // Logs 0, 1, 2 to the console
```

Example 2: Function Returning Another Function

Here's an example of a higher-order function that returns another function:

```javascript
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

// Usage example
const double = createMultiplier(2);
console.log(double(5)); // Output: 10

const triple = createMultiplier(3);
console.log(triple(5)); // Output: 15
```

### Built-in Higher-Order Functions

JavaScript provides several built-in higher-order functions, particularly for arrays. Here are a few commonly used ones:

1. Array.prototype.map

"map" creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

2. Array.prototype.filter

filter creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

3. Array.prototype.reduce

reduce executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10
```

### Example: Combining Higher-Order Functions

Here's an example of using map, filter, and reduce together:

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// Chain higher-order functions
const result = numbers
  .map((n) => n * 2) // Double each number
  .filter((n) => n > 5) // Keep only numbers greater than 5
  .reduce((acc, curr) => acc + curr, 0); // Sum all remaining numbers

console.log(result); // Output: 36
```
