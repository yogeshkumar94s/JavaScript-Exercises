// Template Literals Example

// Variables to be embedded
const name = "Alice";
const age = 30;
const city = "Wonderland";

// Using Template Literals to embed variables
const greeting = `Hello, my name is ${name}. I am ${age} years old and I live in ${city}.`;

console.log(greeting);
// Output: Hello, my name is Alice. I am 30 years old and I live in Wonderland.

// Multiline String using Template Literals
const multilineString = `
This is a multiline string.
It can span multiple lines
without the need for escape characters or concatenation.
`;

console.log(multilineString);
// Output:
// This is a multiline string.
// It can span multiple lines
// without the need for escape characters or concatenation.

// Embedding Expressions in Template Literals
const number1 = 5;
const number2 = 10;
const sum = `${number1} + ${number2} = ${number1 + number2}`;

console.log(sum);
// Output: 5 + 10 = 15

// Nested Template Literals
const nestedTemplate = `The result of the expression is: ${`The sum of ${number1} and ${number2} is ${
  number1 + number2
}`}`;

console.log(nestedTemplate);
// Output: The result of the expression is: The sum of 5 and 10 is 15
