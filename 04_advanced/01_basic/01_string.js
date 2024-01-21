// Strings in javascript are sequence of charactors.

const myString = "This is my First String";
// Strings are immutable, meaning that you can't change individual characters.
// you can replace the string with the desired modification
// console.log(myString);
const modifiedString = myString.replace("First", "modified");
// console.log(modifiedString);

// Indexing: Accessing characters using index no.
const firstChar = myString[0];
// console.log(firstChar);
const lastChar = myString[myString.length - 1];
// console.log(lastChar);
// console.log(myString.length);
// console.log(myString[22]);

// Loop each character in string

for (let i = 0; i < myString.length; i++) {
  //   console.log(myString[i]);
}

//Can I use template literals for string concatenation?
const myString1 = "hello world!";
const myString2 = "whats Up!";

const stringConcate = `${myString1} ${myString2}`;
// console.log(stringConcate);

// How do I check if a string contains a specific substring?
const helloContains = myString1.includes("hello");
// console.log(helloContains);

//How do I find the index of a substring in a string?
const indexOf = myString.indexOf("T");
console.log(indexOf); //0

//How do I replace a substring in a string?
const replacedString = myString.replace("This", "That");
console.log(replacedString);

//How do I trim extra whitespaces from the beginning and end of a string?
const stringWithExtraSpaces =
  "   this is    my      String with Extra spaces   !";
const trimedString = stringWithExtraSpaces.trim();
console.log(trimedString); // this is    my      String with Extra spaces   !
// does not remove the space within string because trim() removes the spaces from start and from end;

const stringWithExtraSpaces1 = "   this is my String with Extra spaces!       ";
const trimedString1 = stringWithExtraSpaces1.trim();
console.log(trimedString1);

//How do I split a string into an array based on a delimiter?
const myFruits = "banana apple mango guava grapes pineapple papaya orange";
const myFruitsArray = myFruits.split(" ");
console.log(myFruitsArray);

//How do I convert a string to a number?
const myStringNumber = "30";
const myNumber = Number(myStringNumber);
console.log(typeof myNumber);
console.log(myNumber);

//How do I repeat a string multiple times?
const repeatedString = myString.repeat(3);
console.log(repeatedString);

//How do I compare two strings?
console.log(myString === myString1); // false
console.log(myString !== myString1); // true
