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
