// Functions and Callbacks:

// Write a function that adds two numbers and returns the result.

function addTwoNumbers(num1, num2) {
  const result = num1 + num2;
  return result;
}
console.log(addTwoNumbers(78, 555));

// Create a higher-order function that takes a callback.

//*/*/*//*/ 01

function arithmaticOperations(x, y, callbackfunction) {
  console.log(`Performing Operation:- ${callbackfunction.name}`);
  const result = callbackfunction(x, y);
  console.log(`Result: ${result}`);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

arithmaticOperations(5, 8, add);
arithmaticOperations(15, 8, subtract);

// Higher-order function that applies a transformation to each element in an array

//**//*/*// 02

function transformArray(array, transformationCallback) {
  console.log(`The Original Array: ${array}`);
  const transformedArray = array.map(transformationCallback);
  console.log(`transformed array: ${transformedArray}`);
}
function doubleNumber(num) {
  return num * 2;
}

function squareNumber(num) {
  return num * num;
}

console.log(transformArray([34, 54, 43, 66, 77], doubleNumber));
console.log(transformArray([34, 535, 5, 5353, 53, 535], squareNumber));

// Higher-order function that filters an array based on a condition

///*/*/*/*/*/ 03
// map
const myArray = [44, 554, 454, 5656, 77, 6456, 33, 5454, 633, 647];

const doubledNumbers = myArray.map(function (num) {
  return num * 2;
});
console.log(doubledNumbers);
// filter
const evenNumbers = myArray.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);

// reduce
const sum = myArray.reduce(function (acc, currentVal) {
  return acc + currentVal;
});
console.log(sum);

// Higher-order function that filters an array based on a condition

function filterOddNumbers(arr, filterArray) {
  console.log(`the original array is: ${myArray}`);
  return arr.filter(filterArray);
}

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(filterOddNumbers(myArray, isOdd));

// Use map to double each element in an array.
const doubleEachElement = myArray.map(function (num) {
  return num * 2;
});

console.log(doubleEachElement);

// Implement a function that filters out even numbers from an array.

const filteredEvenNums = myArray.filter(function (num) {
  return num % 2 === 0;
});

console.log(filteredEvenNums);

// Create a function that checks if a number is prime.

function isPrime(number) {
  // 1 amd > 1 numbers are not prime numbers
  if (number <= 1) {
    return false;
  }
  // check the divisibility by the 2 to the sqrt of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  // if the divisor are found, the number is prime
  return true;
}

// console.log(isPrime(20));
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(1));
// console.log(isPrime(55));
// console.log(isPrime(18));
// console.log(isPrime(23));

// Implement a function that executes a callback after a delay.

function printHelloAfterDelay(callback, ms) {
  setTimeout(callback, ms);
}

function greeting() {
  console.log("hello yogesh");
}
// console.log(printHelloAfterDelay(greeting, 1000));

// Use the reduce function to calculate the sum of an array.

const myArray2 = [323, 333, 445, , 545465, 6656, 6, 56, 56, 6665, 65, 656, 64];

const sum1 = myArray2.reduce(function (acc, curval) {
  return acc + curval;
}, 0);
console.log(sum1);
