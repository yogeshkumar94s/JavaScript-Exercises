// Definition:

// The string data type in JavaScript is used to represent textual data. Strings are sequences of characters and can be enclosed in single or double quotes.

// Strings with single quotes
let singleQuotesString = "Hello, World!";

// Strings with double quotes
let doubleQuotesString = "JavaScript is awesome!";

// Concatenation
let combinedString = singleQuotesString + " " + doubleQuotesString;

// String length
let stringLength = singleQuotesString.length;

// Accessing individual characters
let firstCharacter = singleQuotesString[0];
let lastCharacter = singleQuotesString[singleQuotesString.length - 1];

// Output
console.log("Combined String:", combinedString);
console.log("String Length:", stringLength);
console.log("First Character:", firstCharacter);
console.log("Last Character:", lastCharacter);

// In this example:

// singleQuotesString and doubleQuotesString are variables holding strings with single and double quotes, respectively.

// The combinedString variable concatenates the two strings with an additional space in between.

// The stringLength variable stores the length of the singleQuotesString.

// You can access individual characters in a string using square brackets ([]). Keep in mind that JavaScript uses zero-based indexing, so singleQuotesString[0] gives you the first character.

// JavaScript provides many built-in methods for working with strings, such as toUpperCase(), toLowerCase(), slice(), and more. These methods allow you to manipulate and extract information from strings easily.
