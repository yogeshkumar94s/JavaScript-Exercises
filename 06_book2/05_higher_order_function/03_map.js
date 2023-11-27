//The map method in JavaScript is used to transform each element of an array using a provided function and create a new array with the results. It's a powerful and concise way to perform operations on each element of an array.
//Example 1: Doubling Each Element

let numbers = [1, 2, 3, 4, 5];

// Using map to double each number
let doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//Example 2: Converting Strings to Uppercase
let words = ["apple", "banana", "orange"];

// Using map to convert each word to uppercase
let uppercaseWords = words.map(function (word) {
  return word.toUpperCase();
});

console.log(uppercaseWords); // Output: ['APPLE', 'BANANA', 'ORANGE']

//Example 3: Extracting Property Values from Objects
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

// Using map to extract names from objects
let names = people.map(function (person) {
  return person.name;
});

console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

//Example 4: Creating JSX Elements
let colors = ["red", "green", "blue"];

// Using map to create JSX elements
let colorElements = colors.map(function (color) {
  return (
    <div
      style={{ backgroundColor: color, height: "50px", width: "50px" }}
    ></div>
  );
});

console.log(colorElements);
// Output: Array of JSX elements with inline styles for each color

//In this example, the map method is used to create an array of JSX elements, each representing a colored square.

//Using Arrow Functions for Conciseness:
//You can use arrow functions for a more concise syntax:

let numbers4 = [1, 2, 3, 4, 5];

// Using arrow function with map to square each number
let squaredNumbers = numbers4.map((number) => number ** 2);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//Using arrow functions makes the code shorter, especially for simple transformations.

//Chaining map with Other Array Methods:
//You can also chain map with other array methods for more complex operations:

let numbers5 = [1, 2, 3, 4, 5];

// Chaining map with filter to get squares of even numbers
let squaresOfEvenNumbers = numbers5
  .filter((number) => number % 2 === 0)
  .map((number) => number ** 2);

console.log(squaresOfEvenNumbers); // Output: [4, 16]

//In this example, the map method is chained with the filter method to first filter out even numbers and then square each of them.
