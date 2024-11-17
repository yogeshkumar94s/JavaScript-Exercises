// Return:
// The return statement is used in functions to specify the value to be returned from the function. When a return statement is encountered, the function immediately stops executing, and the specified value (if any) is sent back to the caller.

function addNumbers(a, b) {
  return a + b;
  // The result is returned, and the function execution stops here
}
const sum = addNumbers(3, 4);
console.log(sum);
// Outputs: 7

//1.0 Returning Objects and Complex Data:
// The return statement is not limited to simple data types; it can also be used to return complex data structures like objects or arrays.

function createPerson(name, age) {
  return { name, age };
}

const person = createPerson("John", 30);
console.log(person);
// Outputs: { name: 'John', age: 30 }
// Returning objects allows you to encapsulate related data and provide a structured way to access it.

//2.0 Returning Functions:
// Just as you can return data, you can also return functions. This is often used in functional programming and for creating closures.

function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5));
// Outputs: 10
// In this example, createMultiplier returns a function that multiplies its argument by the factor provided during the initial function call.

//3.0 Early Termination and Guard Clauses:
// The return statement is commonly used for early termination and implementing guard clauses to handle edge cases.

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero.";
  }
  return a / b;
}

console.log(divide(8, 2));
// Outputs: 4
console.log(divide(5, 0));
// Outputs: 'Cannot divide by zero.'
// Using return in conditional statements allows you to exit the function early based on specific conditions.

//4.0 Returning Promises:
// In asynchronous programming, functions can return promises, enabling the use of async/await for handling asynchronous operations.

function fetchData() {
  return new Promise((resolve, reject) => {
    // Async operation
    setTimeout(() => {
      resolve("Data fetched successfully.");
    }, 1000);
  });
}

async function getData() {
  const result = await fetchData();
  console.log(result);
}

getData();
// Outputs: 'Data fetched successfully.'
// Here, fetchData returns a promise, allowing asynchronous data fetching in a clean and readable way.

//5.0 Chaining and Fluent Interfaces:
// In certain scenarios, functions return objects that allow for method chaining, creating fluent interfaces.

class Calculator {
  constructor(value) {
    this.value = value;
  }

  add(num) {
    this.value += num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  getResult() {
    return this.value;
  }
}

const result = new Calculator(3).add(5).multiply(2).getResult();

console.log(result);
// Outputs: 16
// The add and multiply methods return the current instance (this), allowing for method chaining.

//Implicit Return:
// In modern JavaScript, arrow functions provide a concise syntax for implicit return when the function body consists of a single expression.

const add = (a, b) => a + b;
console.log(add(3, 4));
// Outputs: 7

// Here, the arrow function implicitly returns the result of the addition expression.

// Conclusion:
// The return statement in JavaScript is a versatile tool that goes beyond simple value return. It facilitates the creation of complex, functional, and asynchronous code, contributing to the flexibility and expressiveness of the language. Understanding these advanced use cases can help you write more efficient and readable code.
