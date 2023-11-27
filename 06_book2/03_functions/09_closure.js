// A closure in JavaScript is a powerful and often-used concept. It occurs when a function is defined inside another function, allowing the inner function to access the variables of the outer (enclosing) function even after the outer function has finished execution. This creates a closure around the inner function, preserving the scope chain.

// Let's explore a simple example to illustrate closures:

function outerFunction(x) {
  // Inner function defined inside the outer function
  function innerFunction(y) {
    console.log(x + y); // Accessing the 'x' variable from the outer function
  }

  // Returning the inner function from the outer function
  return innerFunction;
}

// Creating a closure by calling outerFunction with argument 10
let closureExample = outerFunction(10);

// Using the closure to call the inner function with argument 5
closureExample(5); // Output: 15

//   In this example:

//1.0   outerFunction takes a parameter x and defines an inner function innerFunction.
//2.0   innerFunction has access to the x parameter of the outer function, forming a closure.
//3.0   outerFunction returns the innerFunction, creating a closure when called with an argument (e.g., 10).
//4.0   closureExample now holds a reference to the innerFunction along with the environment (scope) in which it was created.
//5.0   Calling closureExample(5) invokes the innerFunction with y set to 5. The closure allows it to still access the x from the outer function, resulting in 10 + 5 and producing the output 15.

//--Key points about closures:

//Access to Outer Scope: The inner function has access to variables and parameters of the outer function, even after the outer function has completed execution.

//Preservation of Scope Chain: Closures "remember" the environment in which they were created, preserving the entire scope chain.

//Data Encapsulation: Closures provide a way to create private variables and methods, encapsulating data within a function.

//Functional Programming: Closures are commonly used in functional programming paradigms, allowing the creation of higher-order functions and flexible code structures.
