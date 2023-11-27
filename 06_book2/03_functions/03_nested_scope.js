// Nested scope is a concept in JavaScript that refers to the situation where one scope is enclosed within another. This occurs when you have a block of code (such as within a function or a loop) inside another block. Understanding nested scope is crucial for managing variable visibility and access. Let's explore this with an example:
function outerFunction() {
  let outerVariable = "I'm in the outer function!";

  function innerFunction() {
    let innerVariable = "I'm in the inner function!";
    console.log(outerVariable); // Accessing outerVariable from the outer scope
    console.log(innerVariable); // Accessing innerVariable from the inner scope
  }

  innerFunction(); // Calling the inner function
}

outerFunction(); // Calling the outer function

//   In this example:

//   outerFunction is the outer scope.

//   It contains a variable called outerVariable.
//   It also contains another function called innerFunction.
//   innerFunction is the inner scope.

//   It has its own variable called innerVariable.
//   It can access variables from its own scope (innerVariable) and variables from the outer scope (outerVariable).
//   When innerFunction is called inside outerFunction, it can access both outerVariable and innerVariable, demonstrating the concept of nested scope.

//   It's important to note that variables declared in an outer scope are accessible in the inner scope, but the reverse is not true. Variables declared in an inner scope are not accessible in the outer scope.
