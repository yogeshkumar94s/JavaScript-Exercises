// Functions

/* 
A JavaScript function is a reusable block of code designed to perform a specific task. It can accept input (parameters), process it, and return an output (optional). Functions allow you to organize, modularize, and reuse code efficiently.
*/

// Function Declaration

function printMessage() {
  console.log("Good morning!");
}

// printMessage(); // Good morning!

// Local variables
// A variable declared inside a function is only visible inside that function.

function showGreeting() {
  let message = "Good morning!";
  console.log(message);
}

// showGreeting();

// Outer variables
// A function can access an outer variable as well, for example:

let usreName = "yogee";

function greetToUser() {
  let message = "Good morning! " + usreName;

  console.log(message);
}

// greetToUser();

let usreName1 = "yogee";

function greetToUser1() {
  usreName1 = "saurav";
  let message = "Good morning! " + usreName1;

  console.log(message);
}

// console.log(usreName1); // yogee
// greetToUser1();
// console.log(usreName1); // saurav

// Global variables

/*
Variables declared outside of any function, such as the outer userName in the code above, are called global.
Global variables are visible from any function (unless shadowed by locals).
It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.
*/

// Parameters
// We can pass arbitrary data to functions using parameters.

function showFullName(fName, lName) {
  console.log(fName + " " + lName);
}

showFullName("yogee", "saini");
showFullName("saurav", "kumar");

/*
When a function called in lines 66 and 67, the given values are copied to the local variables fName and lName. Then the function use them.
*/

// Note: a function always gets a copy of the value: Any changes made to this copy inside the function do not affect the original variable outside the function.

function showMessage(name) {
  name = "inside " + name;
  console.log("Inside the fn", name);
}

let name = "Ann"; // Original value
showMessage(name);

console.log("Outside the fn", name);

// Returning a value

/*
A function can return a value back into the calling code as the result.

The simplest example would be a function that sums two values:
*/

function sum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = sum(45, 55);
console.log("Sum of two is ", result);
