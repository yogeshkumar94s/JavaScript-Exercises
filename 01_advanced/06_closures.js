//In JavaScript, a closure is a powerful and fundamental concept that allows functions to retain access to variables from their outer (enclosing) scope even after the outer function has finished executing. A closure effectively "closes over" the variables it needs, preserving them for later use.

//1.0 Lexical Scope:
// Closures are closely related to lexical scope, which means that the scope of variables is determined by the structure of the code (the placement of functions and blocks) and not by the runtime flow of the program.

//2.0 Closure Formation:
// A closure is created when a function is defined inside another function (the outer or enclosing function) and the inner function refers to variables from the outer function.
// The inner function "closes over" the variables it references, preserving them even if the outer function has completed execution.

//3.0 Access to Outer Scope Variables:
// Closures have access to variables from their own scope, the scope of the outer function, and the global scope. This access is possible because the inner function retains a reference to the variables it needs.

function outerFunction() {
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample();
// Outputs: "I am from the outer function"

// Use Cases:

// Closures are commonly used for data encapsulation and creating private variables.
// They are useful for creating factory functions that generate functions with specific behavior based on the values of the outer variables.

// Memory Management:

// Closures can impact memory management because they keep the variables they reference alive, even if those variables are not needed anymore. Proper management of closures is essential to avoid memory leaks.

// Common Pitfalls:

// Care must be taken when using closures to avoid unintended memory retention and unexpected behavior.
// Be aware of the fact that closures capture the entire variable, not just its current value. If the variable is later modified, the closure will reflect that change.
