// In JavaScript, values are broadly categorized as either "truthy" or "falsy" based on their inherent boolean interpretation when used in a boolean context, such as in conditions or logical expressions. Understanding truthy and falsy values is crucial for writing effective and concise code.

// Truthy Values:
// A value is considered "truthy" if, when coerced to a boolean, it evaluates to true. In other words, these values are treated as if they represent the boolean value true.

// Common truthy values include:

// All non-falsy primitive values:
// Numbers other than 0 and NaN.
// Strings other than an empty string ('').
// The boolean value true.
// Objects, arrays, and functions (non-null objects).
// Examples of truthy values:

if (true) {
  // This block will be executed
}

if ("Hello") {
  // This block will be executed
}

if (42) {
  // This block will be executed
}

if ({}) {
  // This block will be executed
}

//   Falsy Values:
//   A value is considered "falsy" if, when coerced to a boolean, it evaluates to false. These values are treated as if they represent the boolean value false.

//   Common falsy values include:

//   The boolean value false.
//   The number 0 (zero).
//   The special value NaN (Not a Number).
//   An empty string ('').
//   null.
//   undefined.
//   Examples of falsy values:

if (false) {
  // This block will not be executed
}

if (0) {
  // This block will not be executed
}

if ("") {
  // This block will not be executed
}

if (null) {
  // This block will not be executed
}

// Coercion in Boolean Context:
//   In JavaScript, when a non-boolean value is used in a boolean context (such as an if statement or a logical expression), the value undergoes automatic type coercion to a boolean. This coercion follows specific rules, and the resulting boolean value is determined by whether the original value is truthy or falsy.

//   Example:

const value = 42;

if (value) {
  // This block will be executed because 42 is truthy
}

// Understanding truthy and falsy values is essential when working with conditional statements, logical expressions, and other constructs that involve boolean operations. It allows you to write more expressive and concise code by leveraging the inherent boolean nature of values in JavaScript.
