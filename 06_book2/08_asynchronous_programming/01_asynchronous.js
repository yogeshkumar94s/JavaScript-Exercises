// Asynchronous programming is a programming paradigm that allows multiple tasks to be executed concurrently, without blocking the execution of the main program. It is particularly useful for operations that may take some time to complete, such as I/O operations, network requests, or database queries. Asynchronous programming in JavaScript is commonly achieved through callbacks, Promises, and async/await.

// Let's explore each of these approaches:

// 1. Callbacks:

// Callbacks are functions that are passed as arguments to other functions and are executed after the completion of a particular task. Callbacks are a foundational concept in asynchronous JavaScript.

function fetchData(callback) {
  // Simulating an asynchronous operation (e.g., fetching data from a server)
  setTimeout(function () {
    const data = "This is the fetched data";
    callback(data);
  }, 1000);
}

// Using a callback to handle the result
fetchData(function (result) {
  console.log(result);
});

// 2. Promises:

// Promises provide a cleaner and more structured way to handle asynchronous operations. A Promise represents a value that might be available now, or in the future, or never.

function fetchData() {
  return new Promise(function (resolve, reject) {
    // Simulating an asynchronous operation
    setTimeout(function () {
      const success = true;

      if (success) {
        const data = "This is the fetched data";
        resolve(data);
      } else {
        reject("Failed to fetch data");
      }
    }, 1000);
  });
}

// Using Promises
fetchData()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  });

// 3. Async/Await:

// Async/await is a syntax built on top of Promises that makes asynchronous code look and behave more like synchronous code. It provides a more readable and concise way to work with asynchronous operations.

function fetchData() {
  return new Promise(function (resolve, reject) {
    // Simulating an asynchronous operation
    setTimeout(function () {
      const success = true;

      if (success) {
        const data = "This is the fetched data";
        resolve(data);
      } else {
        reject("Failed to fetch data");
      }
    }, 1000);
  });
}

// Using async/await
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

// In the async/await example, the fetchDataAsync function is declared as asynchronous using the async keyword. The await keyword is then used to pause the execution of the function until the Promise is resolved or rejected.

// Asynchronous programming is crucial for building responsive and efficient applications, especially in scenarios where tasks may take time to complete. Choosing between callbacks, Promises, or async/await depends on personal preference, code readability, and the specific requirements of your project.
