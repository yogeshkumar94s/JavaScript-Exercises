//1. For Loop:
//The traditional for loop is a common choice for iterating over arrays.

let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//2. For...of Loop:
//The for...of loop is a more modern and concise way to iterate over array elements.

let fruits1 = ["apple", "banana", "orange"];

for (let fruit of fruits1) {
  console.log(fruit);
}

//3. Array.forEach():
// The forEach method is a built-in method for arrays that executes a provided function once for each array element.

let fruits3 = ["apple", "banana", "orange"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});

//4. Array.map():
//The map method creates a new array by applying a function to each element of the original array.

let fruits4 = ["apple", "banana", "orange"];

let capitalizedFruits = fruits4.map(function (fruit) {
  return fruit.toUpperCase();
});

console.log(capitalizedFruits);

//5. Array.filter():
//The filter method creates a new array with elements that satisfy a given condition.
let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

//6. Array.reduce():
//The reduce method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
let numbers1 = [1, 2, 3, 4, 5];

let sum = numbers1.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0);

console.log(sum);
