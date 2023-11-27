// Async functions, introduced in ECMAScript 2017 (ES8), provide a cleaner and more concise syntax for working with asynchronous code. An async function always returns a Promise and allows you to use the await keyword to pause the execution of the function until a Promise is resolved or rejected.

// Here's a basic overview of async functions:

// Basic Syntax:
async function myAsyncFunction() {
  // Code here

  // Using await with a Promise
  const result = await someAsyncOperation();

  // Code continues after the Promise is resolved
  console.log(result);
}

// Using async and await:*-*-*-*-*-*

function fetchData() {
  return new Promise(function (resolve) {
    // Simulating an asynchronous operation
    setTimeout(function () {
      const data = "This is the fetched data";
      resolve(data);
    }, 1000);
  });
}

async function fetchDataAsync() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Calling the async function
fetchDataAsync();

// In this example:

// The fetchDataAsync function is declared as asynchronous using the async keyword.
// Inside the function, the await keyword is used to pause the execution until the fetchData Promise is resolved.
// The try and catch blocks handle any errors that may occur during the asynchronous operation.

// Handling Multiple Promises:

async function processMultipleAsync() {
  try {
    const result1 = await fetchData();
    console.log(result1);

    const result2 = await someOtherAsyncOperation();
    console.log(result2);
  } catch (error) {
    console.error(error);
  }
}

// Calling the async function
processMultipleAsync();

// In this example, multiple asynchronous operations are handled sequentially using await. Each await pauses the execution until the respective Promise is resolved.

// Parallel Execution with Promise.all:

// If you want to run multiple asynchronous operations in parallel, you can use Promise.all. Note that this approach doesn't guarantee the order of results.

async function processAsyncOperationsInParallel() {
  try {
    const [result1, result2] = await Promise.all([
      fetchData(),
      someOtherAsyncOperation(),
    ]);

    console.log(result1, result2);
  } catch (error) {
    console.error(error);
  }
}

// Calling the async function
processAsyncOperationsInParallel();

// Error Handling:

// Async functions make error handling with Promises more straightforward using the try and catch blocks. Errors thrown inside the async function are automatically converted into rejected Promises.

async function fetchDataWithError() {
  throw new Error("Simulated error in async function");
}

async function handleAsyncError() {
  try {
    await fetchDataWithError();
  } catch (error) {
    console.error(error.message);
  }
}

// Calling the async function
handleAsyncError();

// Async functions are a powerful feature that simplifies asynchronous code in JavaScript. They provide a cleaner syntax for handling Promises and make it easier to reason about and maintain asynchronous code.
