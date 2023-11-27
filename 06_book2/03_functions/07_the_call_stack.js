// The call stack is a fundamental concept in JavaScript and many other programming languages. It's a mechanism that keeps track of the execution context of functions in a program. Let's break down the key components and how the call stack works:

// Function Calls and Execution Context:

//1.0 Function Calls:

// When a function is called in JavaScript, a new execution context is created for that function.

//2.0 Execution Context:

// An execution context is a data structure that contains information about the function's call, local variables, and other details needed for execution.

// The Call Stack:*-*-*-*-
//1.0 Stack Structure:

// The call stack operates as a stack data structure, following the Last In, First Out (LIFO) principle.
// Functions are pushed onto the stack when called and popped off when they complete.

//2.0 Push and Pop:

// When a function is called, it is pushed onto the top of the call stack.
// When the function completes, it is popped off the stack.

// Example:
function firstFunction() {
  console.log("Inside firstFunction");
  secondFunction();
  console.log("Back inside firstFunction");
}

function secondFunction() {
  console.log("Inside secondFunction");
}

firstFunction();

//   Execution Steps:*-*-*-*-*

//1.0 firstFunction is called and pushed onto the call stack.
//--Inside firstFunction, console.log("Inside firstFunction") is executed.
//--secondFunction is called and pushed onto the call stack.

//2.0 secondFunction is executed.
//--Inside secondFunction, console.log("Inside secondFunction") is executed.
//--secondFunction completes and is popped off the stack.

//3.0 Execution returns to firstFunction.
//--console.log("Back inside firstFunction") is executed.
//--firstFunction completes and is popped off the stack.

// Recursion:
// The call stack is crucial in understanding recursion, where a function calls itself.

function countdown(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(3);

//   In this example, each recursive call adds a new frame to the call stack.
