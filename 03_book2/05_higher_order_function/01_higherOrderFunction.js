// A higher-order function is a concept in functional programming where functions can take other functions as arguments or return functions as results. Essentially, a higher-order function either accepts functions as parameters, returns a function, or both. This concept is a key feature of functional programming languages, and it's widely used in JavaScript.

// Here's a brief explanation along with examples in JavaScript:

// Accepting a Function as a Parameter:*-*-*
// Example of a higher-order function that takes a function as a parameter
function applyOperation(x, y, operation) {
  return operation(x, y);
}

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Using applyOperation with different operations
console.log(applyOperation(5, 3, add)); // Output: 8
console.log(applyOperation(5, 3, multiply)); // Output: 15

//   In this example, applyOperation is a higher-order function that takes two numbers (x and y) and a binary operation function (operation) as parameters. It applies the operation to the numbers.
//Returning a Function:
// Example of a higher-order function that returns a function
function createMultiplier(factor) {
  // The returned function is a closure that "remembers" the factor
  return function (x) {
    return x * factor;
  };
}

// Creating a multiplier function with a factor of 3
let multiplyBy3 = createMultiplier(3);

// Using the returned function
console.log(multiplyBy3(4)); // Output: 12

//   In this example, createMultiplier is a higher-order function that returns a new function. The returned function, in this case, is a multiplier function with a specific factor.

// Common Higher-Order Functions in JavaScript:

//1.0 map:

// The map function applies a provided function to all elements in an array and returns a new array with the results.
let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(function (x) {
  return x * x;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16]

//2.0 filter:
//The filter function creates a new array with elements that satisfy a given condition.
let numbers1 = [1, 2, 3, 4];
let evenNumbers = numbers1.filter(function (x) {
  return x % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

//3.0 reduce:
// The reduce function accumulates the elements of an array into a single value using a provided function.

let numbers2 = [1, 2, 3, 4];
let sum = numbers2.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0);
console.log(sum); // Output: 10

// These are just a few examples of higher-order functions in JavaScript. Embracing higher-order functions can lead to more concise and expressive code, making it easier to work with complex operations on data. It's a powerful concept in functional programming that encourages a declarative and modular coding style.
