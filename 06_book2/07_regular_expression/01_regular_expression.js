// A regular expression, often abbreviated as regex or regexp, is a sequence of characters that forms a search pattern. Regular expressions are used for pattern matching within strings and provide a powerful and flexible way to search, match, and manipulate text. They are supported in many programming languages, including JavaScript.

// In JavaScript, regular expressions are represented by the RegExp object, and you can create a regular expression using the RegExp constructor or a literal notation between slashes (/.../). Here are some basic concepts and examples:

//Creating a Regular Expression:
//Using the RegExp Constructor:

// Creating a regular expression to match the word "apple"
let regex1 = new RegExp("apple");

// Creating a regular expression with case-insensitive flag
let regex2 = new RegExp("banana", "i");

// Both examples above are equivalent to the following literal notation:
let regex3 = /orange/i;

// Basic Patterns and Modifiers:

// Basic Patterns:

// Characters: a, b, c, ...
// Digits: 0, 1, 2, ...
// Special characters: ., +, *, ?, [ ], ^, $, etc.

//Modifiers:

// i: Case-insensitive matching
// g: Global matching (find all matches)
// m: Multi-line matching

// Matching and Testing:
// test Method:
let pattern = /apple/i;
let text = "I have an Apple phone.";

let result = pattern.test(text);
console.log(result); // Output: true

// exec Method:
// let pattern = /apple/i;
// let text = "I have an Apple phone.";

// let result = pattern.exec(text);
// console.log(result);
// Output: ['Apple', index: 10, input: 'I have an Apple phone.', groups: undefined]

// Character Classes and Quantifiers:

// Character Classes:

// [abc]: Match any of the characters a, b, or c
// [^abc]: Match any character except a, b, or c
// [a-z]: Match any lowercase letter
// [A-Z]: Match any uppercase letter
// [0-9]: Match any digit

// Quantifiers:

// *: Match 0 or more occurrences
// +: Match 1 or more occurrences
// ?: Match 0 or 1 occurrence
// {n}: Match exactly n occurrences
// {n,}: Match n or more occurrences
// {n,m}: Match between n and m occurrences

// Examples:**-*-*
let pattern1 = /[aeiou]/gi;
let text1 = "Hello World";

let vowels = text1.match(pattern1);
console.log(vowels); // Output: ['e', 'o', 'o']

let pattern2 = /\d{2,4}/;
let text2 = "The year is 2022";

let year = text2.match(pattern2);
console.log(year); // Output: ['2022']

//Regular expressions can become quite complex, and mastering them takes practice. They are powerful tools for text processing, search and replace operations, and data validation.
