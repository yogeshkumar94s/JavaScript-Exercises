// Functions" in JavaScript are a fundamental concept that allows you to group a sequence of statements into a reusable and named block of code. Let's break down key aspects of functions:
// Function Declaration:

// Syntax: function functionName(parameters) { ...code }
function greet(name) {
  console.log("Hello, " + name + "!");
}

// In this example:

// function: Keyword indicating the start of the function declaration.
// greet: Name of the function.
// name: Parameter, a placeholder for the value you'll provide when calling the function.
// { ...code }: The block of code to be executed when the function is called.

// Function Call:
greet("Alice");
// Output: Hello, Alice!

// Here, "Alice" is the argument passed to the greet function.

// Return Statement:
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum); // Output: 8

// The return statement sends a value back to the code that called the function.

// Function Expression:
let multiply = function (x, y) {
  return x * y;
};

let result = multiply(4, 6);
console.log(result); // Output: 24

//   Here, multiply is a function assigned to a variable. This is called a function expression.

// Arrow Functions (ES6+):
let square = (num) => num * num;

let squaredValue = square(4);
console.log(squaredValue); // Output: 16

// Arrow functions provide a more concise syntax for writing functions.

// Higher-Order Functions:
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8]

// Functions that take other functions as arguments or return functions are called higher-order functions.
