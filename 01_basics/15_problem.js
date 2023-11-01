// Write an arrow function that adds two numbers and returns the result.
const addTwo = (num1, num2) => {
  const result = num1 + num2;
  return result;
};
console.log(addTwo(4545, 4545));

// Convert the following function to an arrow function: function greet(name) { return "Hello, " + name; }
const greet = (name) => {
  return "hello, " + name;
};

console.log(greet("yogesh"));

// Use a template literal to create a string that displays your name and age.
const name = "yogesh kumar";
let age = 29;
console.log(`my name is ${name} and age is ${age}`);

// Find the maximum and minimum values in an array without using built-in functions.
const myArray = [34, 343, 55, 64, 65, 756, 65, 343, 543, 66, 88, 9, 65656, 10];
const findMaxAndMin = (arr) => {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return {
    max: max,
    min: min,
  };
};

const result = findMaxAndMin(myArray);
console.log(result);

// Create a function that removes all duplicate values from an array.

const removeDuplicate = (arr) => {};
