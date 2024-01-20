// In JavaScript, the rest parameter is a feature that allows a function to accept an indefinite number of arguments as an array. It enables functions to handle a variable number of parameters in a more flexible and concise way.

// Syntax:
// The rest parameter is denoted by three dots (...), followed by a parameter name. It gathers the remaining arguments into an array.

function exampleFunction(firstParam, ...restParams) {
  // firstParam is the first parameter, and restParams is an array of the remaining arguments
  // ...
}

//1.0 Key Points:
// Gathering Remaining Arguments:

// The rest parameter collects all the remaining arguments into an array.
function sum(firstNum, ...restNumbers) {
  return firstNum + restNumbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));
// Outputs: 10 (1 + 2 + 3 + 4)

//2.0 Can Only Be the Last Parameter:

// The rest parameter must be the last parameter in a function's parameter list.
// Valid
function exampleFunction(a, b, ...rest) {
  // ...
}

// Invalid (rest parameter is not the last parameter)

//   function invalidFunction(...rest, a, b) {
//     // ...
//   }

//3.0 Array-Like Behavior:

// The rest parameter behaves like an array and can be used with array methods.
function logItems(...items) {
  items.forEach((item) => console.log(item));
}

logItems(1, "apple", true);
// Outputs:
// 1
// 'apple'
// true

//4.0 No Need for arguments Object:

// The rest parameter provides a more modern and concise alternative to the arguments object for handling variable numbers of arguments.

// Using rest parameter
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Using arguments object
function sumWithArguments() {
  return Array.from(arguments).reduce((total, num) => total + num, 0);
}

//The rest parameter simplifies working with variable numbers of arguments and improves code readability. It is especially useful when defining functions that need to handle a dynamic set of input values.
