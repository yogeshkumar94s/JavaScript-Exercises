// In JavaScript, there are two main ways to declare functions: function declaration and function expression. The "declaration notation" typically refers to function declaration, where you use the function keyword to declare a function. Here's how it works:

// Function Declaration:

// Function Declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Calling the function
greet("Alice"); // Output: Hello, Alice!

//   In this example:

//   The keyword function is used to declare a function.
//   greet is the name of the function.
//   (name) is the parameter list, defining the input the function expects.
//   The function body is enclosed in curly braces { ... }, containing the code to be executed when the function is called.
//   Function declarations are hoisted, which means they are moved to the top of the scope during the compilation phase. This allows you to call the function before its actual declaration in the code.

//   Contrasting with Function Expression:

// Function Expression
let greet = function (name) {
  console.log("Hello, " + name + "!");
};

// Calling the function
greet("Bob"); // Output: Hello, Bob!

//   In a function expression:

//   let greet declares a variable and assigns an anonymous function to it.
//   (name) is still the parameter list.
//   The function is assigned to the variable greet.
//   This type of function is not hoisted in the same way as function declarations.
//   Both function declarations and function expressions have their use cases. Declarations are often preferred for their hoisting behavior and clarity, while expressions are useful when you want to assign functions dynamically or pass them as arguments.
