function createGreeting(greeting) {
  // This is the outer function with the 'greeting' variable
  return function (name) {
    // This is the inner function that accesses the 'greeting' variable
    return `${greeting}, ${name}!`;
  };
}

// Create a new function with a specific greeting
const sayHello = createGreeting("Hello");
const sayGoodbye = createGreeting("Goodbye");

// Call the inner function with different names
console.log(sayHello("Alice")); // Output: Hello, Alice!
console.log(sayHello("Bob")); // Output: Hello, Bob!
console.log(sayGoodbye("Alice")); // Output: Goodbye, Alice!
console.log(sayGoodbye("Bob")); // Output: Goodbye, Bob!
