// Promises in JavaScript are a more structured way to handle asynchronous operations compared to callbacks. A Promise represents a value that might be available now, or in the future, or never. It has three states: pending, fulfilled, or rejected.

// Promises simplify the handling of asynchronous code and help to avoid the "callback hell" or "pyramid of doom" that can occur with deeply nested callbacks. Here's an overview of how Promises work:

// Creating a Promise:

function fetchData() {
  return new Promise(function (resolve, reject) {
    // Simulating an asynchronous operation (e.g., fetching data from a server)
    setTimeout(function () {
      const success = true;

      if (success) {
        const data = "This is the fetched data";
        // Resolve the promise with the data
        resolve(data);
      } else {
        // Reject the promise with an error message
        reject("Failed to fetch data");
      }
    }, 1000);
  });
}

// In the example above:

// The fetchData function returns a new Promise.
// The Promise takes a function with two parameters: resolve and reject.
// Inside the function, we simulate an asynchronous operation with setTimeout.
// If the operation is successful, we call resolve with the result (data).
// If there's an error, we call reject with an error message.

// Using Promises:

// Using the Promise
fetchData()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  });

// In this example:

// The then method is called when the Promise is fulfilled (resolved).
// The catch method is called when the Promise is rejected.
// Promises allow chaining of then and catch methods, making it easier to handle multiple asynchronous operations.

// Chaining Promises:

function processResult(result) {
  return new Promise(function (resolve) {
    // Simulating another asynchronous operation
    setTimeout(function () {
      const processedData = `Processed: ${result}`;
      resolve(processedData);
    }, 1000);
  });
}

// Chaining Promises
fetchData()
  .then(processResult)
  .then(function (finalResult) {
    console.log(finalResult);
  })
  .catch(function (error) {
    console.error(error);
  });

// In this example:

// The processResult function returns a new Promise.
// We chain the promises using then. The result of the first Promise is passed to the next then callback.

// Async/Await with Promises:

// The async/await syntax provides a more concise and synchronous-looking way to work with Promises.

async function fetchDataAsync() {
  try {
    const result = await fetchData();
    console.log(result);

    const processedResult = await processResult(result);
    console.log(processedResult);
  } catch (error) {
    console.error(error);
  }
}

// Calling the async function
fetchDataAsync();

// In this example:

// The async keyword is used to declare an asynchronous function.
// The await keyword is used to pause the execution of the function until the Promise is resolved or rejected.

// Promises are a powerful tool for handling asynchronous code in a more organized and readable way. They are widely used in modern JavaScript development.
