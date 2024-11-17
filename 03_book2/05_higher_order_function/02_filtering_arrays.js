// Filtering arrays in JavaScript is a common operation where you extract elements from an array that satisfy a given condition. The filter method is commonly used for this purpose.
// Using filter Method:

//The filter method creates a new array with elements that pass a test implemented by a provided function.

let numbers = [1, 2, 3, 4, 5, 6];

// Example 1: Filtering even numbers
let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6]

// Example 2: Filtering numbers greater than 3
let greaterThan3 = numbers.filter(function (number) {
  return number > 3;
});

console.log(greaterThan3); // Output: [4, 5, 6]

// In both examples, the filter method is applied to the numbers array, and a callback function is provided. The callback function is called for each element in the array, and elements that satisfy the specified condition are included in the new array.

//Using Arrow Functions:*-*-*-*
//You can use arrow functions for concise syntax:

let numbers1 = [1, 2, 3, 4, 5, 6];

// Filtering odd numbers using arrow function
let oddNumbers = numbers1.filter((number) => number % 2 !== 0);

console.log(oddNumbers); // Output: [1, 3, 5]

//Filtering Objects:
//You can also use filter to filter objects based on a property:

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

// Filtering people older than 25
let olderThan25 = people.filter((person) => person.age > 25);

console.log(olderThan25);
// Output: [ { name: 'Bob', age: 30 } ]

//*-*-*-Chaining filter with Other Array Methods:
// filter can be easily combined with other array methods, like map, reduce, or forEach, for more complex operations:

let numbers3 = [1, 2, 3, 4, 5, 6];

// Chaining filter with map to get squares of even numbers
let squaresOfEvenNumbers = numbers3
  .filter((number) => number % 2 === 0)
  .map((number) => number * number);

console.log(squaresOfEvenNumbers); // Output: [4, 16, 36]

//This example first filters even numbers and then maps them to their squares.
