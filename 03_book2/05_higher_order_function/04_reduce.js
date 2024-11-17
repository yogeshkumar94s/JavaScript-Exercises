//The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It takes a callback function and an optional initial value as parameters. The callback function is applied to each element of the array, and the accumulated result is carried forward from one iteration to the next

//Example 1: Summing Numbers
let numbers = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of numbers
let sum = numbers.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0);

console.log(sum); // Output: 15

//In this example, the reduce method is used to calculate the sum of the array of numbers. The initial value of the accumulator is set to 0, and the callback function adds each element to the accumulator.

//Example 2: Concatenating Strings
let words = ["Hello", " ", "World", "!"];

// Using reduce to concatenate strings
let sentence = words.reduce(function (accumulator, current) {
  return accumulator + current;
}, "");

console.log(sentence); // Output: 'Hello World!'

// Here, reduce is employed to concatenate an array of strings into a single sentence. The initial value of the accumulator is an empty string ('').

// Example 3: Calculating Product
let numbers1 = [2, 3, 4];

// Using reduce to calculate the product of numbers
let product = numbers1.reduce(function (accumulator, current) {
  return accumulator * current;
}, 1);

console.log(product); // Output: 24

//This example demonstrates the use of reduce to calculate the product of an array of numbers. The initial value of the accumulator is set to 1.

//Chaining reduce with Other Array Methods:
//You can also chain reduce with other array methods for more complex operations:

let numbers2 = [1, 2, 3, 4, 5];

// Chaining reduce with map to calculate the sum of squared numbers
let sumOfSquares = numbers2
  .map((number) => number ** 2)
  .reduce((accumulator, current) => accumulator + current, 0);

console.log(sumOfSquares); // Output: 55

//In this example, reduce is chained with map to first calculate the squares of the numbers and then sum them up.
