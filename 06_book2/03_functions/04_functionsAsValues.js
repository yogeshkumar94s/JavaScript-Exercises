// In JavaScript, functions are first-class citizens, meaning they can be treated like any other value. This allows you to assign functions to variables, pass them as arguments to other functions, and return them from functions. Let's explore how functions can be used as values:

// Assigning Functions to Variables:

// Function expression assigned to a variable
let greet = function (name) {
  console.log("Hello, " + name + "!");
};

// Using the variable as a function
greet("Alice"); // Output: Hello, Alice!

//   Here, greet is a variable that holds a function. You can then invoke the function by using the variable as if it were a function.

// Passing Functions as Arguments:
function doMath(operation, a, b) {
  return operation(a, b);
}

// Passing a function as an argument
let sum = doMath(
  function (x, y) {
    return x + y;
  },
  5,
  3
);

console.log(sum); // Output: 8

//   In this example, doMath is a higher-order function that takes another function (operation) as an argument. It then applies that function to the provided arguments.

//   Returning Functions from Functions:

function multiplier(factor) {
  // Returning a function from another function
  return function (x) {
    return x * factor;
  };
}

// Creating a new function by calling the outer function
let double = multiplier(2);

// Using the new function
console.log(double(5)); // Output: 10

//   Here, multiplier is a function that returns another function. The returned function (in this case, double) remembers the factor value from its outer scope, creating a closure.
