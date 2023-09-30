// Write a JavaScript program to reverse the string.

function reverseString(inputString) {
  const reversedString = [...inputString].reverse().join("");
  return reversedString;
}

const inputString = "yogesh Kumar";

const reversedString = reverseString(inputString);

console.log(`Original String: ${inputString}`);
console.log(`Reversed String: ${reversedString}`);
