// Example with Default Values:
// Function with optional argument and default value
function greet(name, greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

// Using the function with both arguments
greet("Alice"); // Output: Hello, Alice!

// Using the function with the optional argument
greet("Bob", "Hi"); // Output: Hi, Bob!

//   In this regenerated example:

//   The greet function takes two parameters: name and greeting.
//   The greeting parameter is optional, and it has a default value of "Hello."
//   The function uses template literals for string interpolation, making the code more concise.

//   Example with Checking for Undefined:

// Function with optional argument and check for undefined
function greet(name, greeting) {
  if (greeting === undefined) {
    greeting = "Hello";
  }
  console.log(`${greeting}, ${name}!`);
}

// Using the function with both arguments
greet("Alice"); // Output: Hello, Alice!

// Using the function with the optional argument
greet("Bob", "Hi"); // Output: Hi, Bob!

//   In this regenerated example:

//   The function checks if the greeting parameter is undefined and assigns a default value ("Hello") if it is.

//   Rest Parameters:
// Function with rest parameter to collect additional arguments
function printArgs(arg1, arg2, ...rest) {
  console.log(arg1);
  console.log(arg2);
  console.log(rest);
}

// Using the function with multiple arguments
printArgs("One", "Two", "Three", "Four", "Five");
// Output:
// One
// Two
// ["Three", "Four", "Five"]

//   In this regenerated example:

//   The printArgs function uses the rest parameter (...rest) to collect any additional arguments into an array.
