// Definition:
// The boolean data type in JavaScript has two possible values: true or false. Booleans are commonly used in conditional statements and logical operations.

// Example:
// Boolean variables
let isJavaScriptFun = true;
let isLearningEasy = false;

// Logical operations
let andResult = isJavaScriptFun && isLearningEasy; // false
let orResult = isJavaScriptFun || isLearningEasy; // true
let notResult = !isLearningEasy; // true

// Comparison operators
let isEqual = 10 === 5; // false
let isNotEqual = 10 !== 5; // true
let greaterThan = 10 > 5; // true
let lessThan = 10 < 5; // false

// Output
console.log("AND Result:", andResult);
console.log("OR Result:", orResult);
console.log("NOT Result:", notResult);
console.log("Is Equal:", isEqual);
console.log("Is Not Equal:", isNotEqual);
console.log("Greater Than:", greaterThan);
console.log("Less Than:", lessThan);

// In this example:

// isJavaScriptFun is a boolean variable set to true.
// isLearningEasy is a boolean variable set to false.
// Logical operations (&& for AND, || for OR, ! for NOT) are performed on these boolean values.

// Comparison operators (=== for equal, !== for not equal, > for greater than, < for less than) compare numeric values and return boolean results.

// Booleans are fundamental for controlling the flow of your program using conditional statements (if, else, switch) and for making decisions based on the state of your application.
