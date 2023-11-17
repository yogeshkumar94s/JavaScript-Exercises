// Callbacks and Higher-Order Functions

// Implement a function that takes an array and a callback function.
// The callback function should be applied to each element in the array.
// Return a new array with the results.

// const applyCallback = (arr, callback) => {
//     return arr.map(callback);
//   };

//   const square = (num) => num * num;
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(applyCallback(numbers, square)); // Output should be [1, 4, 9, 16, 25]

// 1. Basic Callback:

// A callback is a function passed as an argument to another function.

// function greet(name, callback) {
//     return callback(name);
//   }

//   function sayHello(name) {
//     return `Hello, ${name}!`;
//   }

//   console.log(greet('Alice', sayHello)); // Output: 'Hello, Alice!'

// 2. Higher-Order Functions:

// 2.1 Map Function:
// The map function is a higher-order function that applies a given function to each element of an array.

// const numbers = [1, 2, 3];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers); // Output: [1, 4, 9]

// 2.2 Filter Function:

// The filter function is a higher-order function that creates a new array with elements that satisfy a condition.

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// 3. Function Composition:

// 3.1 Compose Function:
// Function composition is combining two or more functions to produce a new function.

const compose = (f, g) => (x) => f(g(x));

const addOne = (x) => x + 1;
const multiplyByTwo = (x) => x * 2;

const addOneAndMultiplyByTwo = compose(multiplyByTwo, addOne);
console.log(addOneAndMultiplyByTwo(3)); // Output: 8

// 4. Asynchronous Callbacks:

// 4.1 setTimeout Function:
// Using setTimeout to simulate an asynchronous operation with a callback.

function delayMessage(message, callback) {
  setTimeout(() => {
    callback(message);
  }, 2000);
}

delayMessage("Delayed Greeting!", (msg) => {
  console.log(msg); // Output (after 2 seconds): 'Delayed Greeting!'
});

// 5. Callbacks with Promises:
// Using Promises to handle asynchronous operations with callbacks.

function asyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      isSuccess ? resolve("Operation successful") : reject("Operation failed");
    }, 2000);
  });
}

asyncOperation()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

// 6. Closure with Callbacks:

// 6.1 Closure Example:
// Callbacks within closures to maintain state.

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();
increment(); // Output: 1
increment(); // Output: 2
