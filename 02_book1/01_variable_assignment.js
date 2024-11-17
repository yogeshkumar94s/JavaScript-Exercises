////// --------Use of let

// 01. When the value might change:

// let counter = 0;
// function incrementCounter() {
//     counter++;
// }

// Here, counter is expected to change as it increments. Using let is appropriate because it allows the value to be reassigned.

// 02. Loop Variables:

// for (let i = 0; i < 5; i++) {
//     // 'i' is only used in this loop, and its value will change
//     console.log(i);
// }

// In a loop, you often need a variable that changes its value during each iteration. let is suitable for this scenario.

////// --------Use of const

// 01. Constants:

// const PI = 3.14;
// const MAX_SIZE = 100;

// Use const for values that are meant to be constant and should not change throughout your program. It makes your code more readable, and it signals to other developers that the value is not expected to be modified

// 02. Object and Array Declarations:

// const person = {
//     name: 'John',
//     age: 30
// };

// While const makes the variable itself immutable, it doesn't mean the properties of an object or elements of an array assigned to it can't change. In this case, you can modify the properties of the person object.

// const numbers = [1, 2, 3];
// numbers.push(4); // This is allowed . The array itself is still the same, but its contents can be modified.

// // 03. Function Declarations:

// const calculateArea = (radius) => {
//   return PI * radius * radius;
// };

///////--------------------Reduce Scope Conflicts with let and const--------------------

// 1. Block Scoping with let and const:

// Example 1
// function printNumbers() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }

// printNumbers();

///////////--- 3. Function Scoping with let and const:

// Example 3
function exampleFunction() {
  const localVar = "I am a local variable";

  if (true) {
    const blockVar = "I am a block-scoped variable";
    console.log(localVar); // Accessing 'localVar' from the outer scope is fine
    console.log(blockVar); // Accessing 'blockVar' within the block is fine
  }

  //   console.log(blockVar); // This would result in an error because 'blockVar' is not defined here
}

// console.log(localVar); // This would result in an error because 'localVar' is not defined here
exampleFunction();

////////-------- 4. Reducing Global Scope with let and const:

// Example 4
const globalVar = "I am a global variable";

function exampleFunction() {
  // let globalVar = 'This would be a different variable in the local scope';
  const localVar = "I am a local variable";
  console.log(globalVar); // Accessing 'globalVar' from the outer scope is fine
  console.log(localVar); // Accessing 'localVar' from the same scope is fine
}

// console.log(localVar); // This would result in an error because 'localVar' is not defined here

// Convert Variables to Readable Strings with Template Literals

// Without template literals
let name = "John";
let age = 25;
let greeting = "Hello, my name is " + name + " and I am " + age + " years old.";

// With template literals
let greetingTemplate = `Hello, my name is ${name} and I am ${age} years old.`;
