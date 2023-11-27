// Binding:

// In JavaScript, a binding is a connection between a name (or identifier) and a value. The most common way to create a binding is to use the let keyword:
let message = "Hello, World!";

// Here, message is a binding that holds the value "Hello, World!". You can think of bindings as containers or labels that hold information.

// Bindings can be updated with new values:
message = "Hi there!";

// The type of binding created with let is mutable, meaning its value can be changed.

// Scope:
// Scope defines the region of your code where a binding is visible and can be accessed. There are two main types of scope in JavaScript:

//1.0 Global Scope:

// A binding declared outside any function or block is in the global scope.
// It's accessible throughout your entire program.
let globalVariable = "I'm global!";

//2.0 Local Scope:

// A binding declared within a function or block is in a local scope.
// It's only accessible within that function or block.
function exampleScope() {
  let localVariable = "I'm local!";
  console.log(localVariable);
}

//   Understanding scope is crucial because it determines where a binding is visible and can be used. Variables declared with let and const have block scope, meaning they are only accessible within the block (enclosed by curly braces) where they are defined.

if (true) {
  let blockVariable = "I'm in a block!";
  console.log(blockVariable);
}

// This would result in an error since blockVariable is not accessible here.
// console.log(blockVariable);

//   It's important to note that functions also create their own scope, known as function scope.

function exampleFunctionScope() {
  let functionVariable = "I'm in a function!";
  console.log(functionVariable);
}

// This would result in an error since functionVariable is not accessible here.
// console.log(functionVariable);

//   Understanding binding and scope helps you write clean and organized code by managing where your variables are accessible and avoiding unintended conflicts between different parts of your program.
