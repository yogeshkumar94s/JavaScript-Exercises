// Array Manipulation

// Write a function to find the second largest number in an array.

const findSecondLargest = (arr) => {
  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[1];
};

const myNumbers = [10, 5, 8, 20, 15];
console.log(findSecondLargest(myNumbers));

// Push and Pop:

const fruits = ["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits);

const removedFruit = fruits.pop();
console.log(removedFruit);

// Unshift and Shift:

// const numbers = [2, 3, 4];
// numbers.unshift(1);
// console.log(numbers);

// const removedNumber = numbers.shift();
// console.log(removedNumber);

// Array Splicing:

// const colors = ['red', 'green', 'blue'];
// colors.splice(1, 1, 'yellow'); // Remove 1 element at index 1 and add 'yellow'
// console.log(colors); // Output: ['red', 'yellow', 'blue']

// Array Filtering:

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// Find Method:

// const fruits = ['apple', 'banana', 'orange'];
// const foundFruit = fruits.find(fruit => fruit.length > 5);
// console.log(foundFruit); // Output: 'banana'

// Array Mapping:

// const numbers = [1, 2, 3];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers); // Output: [1, 4, 9]

// Array Sorting:

// const fruits = ['banana', 'apple', 'orange'];
// fruits.sort();
// console.log(fruits); // Output: ['apple', 'banana', 'orange']

// Array Reduction:

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 10

// Array Iteration:

// const colors = ['red', 'green', 'blue'];
// colors.forEach(color => console.log(color));
// // Output:
// // 'red'
// // 'green'
// // 'blue'
