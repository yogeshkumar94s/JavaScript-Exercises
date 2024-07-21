// Function with default parameters
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

// Calling the function with different arguments

// No arguments passed, defaults will be used
console.log(greet());
// Output: Hello, Guest!

// Only the name argument is passed
console.log(greet("Alice"));
// Output: Hello, Alice!

// Both arguments are passed
console.log(greet("Bob", "Hi"));
// Output: Hi, Bob!

// Only the greeting argument is passed by using undefined for the name argument
console.log(greet(undefined, "Welcome"));
// Output: Welcome, Guest!

// Custom default parameter function with more complex logic
function calculatePrice(price, tax = price * 0.1) {
  return price + tax;
}

// Calling the function with different arguments

// Only the price is passed, tax is calculated as 10% of the price
console.log(calculatePrice(100));
// Output: 110

// Both price and tax are passed
console.log(calculatePrice(100, 15));
// Output: 115

// Passing undefined for the tax to use the default tax calculation
console.log(calculatePrice(200, undefined));
// Output: 220
