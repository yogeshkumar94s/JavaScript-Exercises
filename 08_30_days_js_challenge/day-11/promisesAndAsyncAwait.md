# Promises and async/await in JavaScript

A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a way to handle asynchronous operations more elegantly compared to traditional callback functions.

### States of a Promise

A promise can be in one of three states:

1. Pending: The initial state, neither fulfilled nor rejected.

2. Fulfilled: The operation completed successfully.

3. Rejected: The operation failed.

### Creating a Promise

You create a promise using the Promise constructor, which takes a function (executor) with two parameters: resolve and reject.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  const success = true; // Simulating success

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});
```

### Using Promises

To handle the result of a promise, you use the then and catch methods.

1. then: Handles the fulfillment of the promise.
2. catch: Handles the rejection of the promise.

```javascript
myPromise
  .then((result) => {
    console.log(result); // Output: Operation was successful!
  })
  .catch((error) => {
    console.error(error); // If the promise was rejected
  });
```

### Example: Fetching Data with Promises

Here's an example of using promises to fetch data from an API:

```javascript
function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(`Error: ${xhr.status}`);
      }
    };
    xhr.onerror = () => reject("Network error");
    xhr.send();
  });
}

fetchData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Task 1: Create a Promise That Resolves with a Message After a Two-Second Timeout

```javascript
// Task 1: Promise that resolves with a message after a two-second timeout
const resolveAfterTwoSeconds = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This message is resolved after a two-second timeout");
  }, 2000);
});

resolveAfterTwoSeconds.then((message) => {
  console.log(message); // Output: This message is resolved after a two-second timeout
});
```

### Task 2: Create a Promise That Rejects with an Error Message After a Two-Second Timeout and Handle the Error Using .catch()

```javascript
// Task 2: Promise that rejects with an error message after a two-second timeout
const rejectAfterTwoSeconds = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("This error is rejected after a two-second timeout"));
  }, 2000);
});

rejectAfterTwoSeconds.catch((error) => {
  console.error(error.message); // Output: This error is rejected after a two-second timeout
});
```

### full script

```javascript
// Task 1: Promise that resolves with a message after a two-second timeout
const resolveAfterTwoSeconds = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This message is resolved after a two-second timeout");
  }, 2000);
});

resolveAfterTwoSeconds.then((message) => {
  console.log(message); // Output: This message is resolved after a two-second timeout
});

// Task 2: Promise that rejects with an error message after a two-second timeout
const rejectAfterTwoSeconds = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("This error is rejected after a two-second timeout"));
  }, 2000);
});

rejectAfterTwoSeconds.catch((error) => {
  console.error(error.message); // Output: This error is rejected after a two-second timeout
});
```

---

## Chaining promises in JavaScript

Chaining promises in JavaScript allows you to perform multiple asynchronous operations in sequence, where the output of one operation can be used as the input for the next. This is done using the .then() method, which returns a new promise, enabling the chaining of multiple .then() calls.

### Basic Example of Promise Chaining

```javascript
// A function that returns a promise that resolves after a given time
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Example of chaining promises
delay(1000)
  .then(() => {
    console.log("First delay of 1 second");
    return delay(2000); // Return a new promise that resolves after 2 seconds
  })
  .then(() => {
    console.log("Second delay of 2 seconds");
    return delay(3000); // Return a new promise that resolves after 3 seconds
  })
  .then(() => {
    console.log("Third delay of 3 seconds");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### More Complex Example: Fetching Data in Sequence

```javascript
const fetchData = (url) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};

// Example usage
fetchData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    console.log("First fetch:", data);
    return fetchData("https://jsonplaceholder.typicode.com/todos/2");
  })
  .then((data) => {
    console.log("Second fetch:", data);
    return fetchData("https://jsonplaceholder.typicode.com/todos/3");
  })
  .then((data) => {
    console.log("Third fetch:", data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
```

### Task 1: Create a Sequence of Promises

```javascript
// Function to simulate fetching data with a delay
const fetchData = (message, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
};

// Example usage
fetchData("Fetching data from server 1...", 1000)
  .then((message) => {
    console.log(message); // Output: Fetching data from server 1...
    return fetchData("Fetching data from server 2...", 2000);
  })
  .then((message) => {
    console.log(message); // Output: Fetching data from server 2...
    return fetchData("Fetching data from server 3...", 3000);
  })
  .then((message) => {
    console.log(message); // Output: Fetching data from server 3...
    return fetchData("All data fetched successfully!", 1000);
  })
  .then((message) => {
    console.log(message); // Output: All data fetched successfully!
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

---

## async/await in JavaScript

async and await are syntactic features in JavaScript that make working with promises easier and more readable. They allow you to write asynchronous code that looks and behaves like synchronous code.

### "async" Function

An async function is a function that returns a promise. It allows the use of await inside it.

```javascript
async function myFunction() {
  // Asynchronous code
}
```

### "await" Keyword

The await keyword can only be used inside async functions. It makes JavaScript wait until the promise is resolved or rejected, and then returns the resolved value. If the promise is rejected, it throws the error.

```javascript
let result = await somePromise;
```

### Example: Using "async" and "await"

Here’s an example that demonstrates how to use async and await to fetch data:

```javascript
// Simulating a fetch function that returns a promise
const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/data") {
        resolve({ data: "Sample Data" });
      } else {
        reject("Invalid URL");
      }
    }, 2000);
  });
};

// Using async/await to fetch data
async function getData() {
  try {
    console.log("Fetching data...");
    const response = await fetchData("https://example.com/data");
    console.log("Data received:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();
```

### Benefits of Async/Await

1. Readability: Code that uses async/await is generally easier to read and understand compared to using .then() and .catch() for promise chaining.

2. Error Handling: try...catch blocks can be used with async/await to handle errors in a more straightforward way.

3. Synchronous-Like Flow: The code looks and behaves more like synchronous code, making it easier to follow the flow of operations.

### Task 1: Write an Async Function That Waits for a Promise to Resolve and Then Logs the Resolved Value

```javascript
// Function to simulate a promise that resolves with a value
const resolvePromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved value");
    }, 2000);
  });
};

// Async function to wait for the promise and log the resolved value
async function logResolvedValue() {
  const value = await resolvePromise();
  console.log(value); // Output: Resolved value
}

// Call the async function
logResolvedValue();
```

### Task 2: Write an Async Function That Handles a Rejected Promise Using try/catch and Logs the Error Message

```javascript
// Function to simulate a promise that rejects with an error
const rejectPromise = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Rejected promise"));
    }, 2000);
  });
};

// Async function to handle the rejected promise and log the error message
async function handleRejectedPromise() {
  try {
    const value = await rejectPromise();
    console.log(value); // This will not be executed
  } catch (error) {
    console.error(error.message); // Output: Rejected promise
  }
}

// Call the async function
handleRejectedPromise();
```

---

## Fetching data from an API

Fetching data from an API in JavaScript is commonly done using the fetch API. This built-in JavaScript function allows you to make network requests similar to XMLHttpRequest, but it's more powerful and easier to use. Here’s a brief overview of how to use fetch to get data from an API:

### Basic Usage of fetch

The fetch function takes a URL as an argument and returns a promise that resolves to the response of the request.

```javascript
// URL of the API endpoint
const apiUrl = "https://api.example.com/data";

// Function to fetch data from the API
async function fetchData() {
  try {
    // Making the fetch request
    const response = await fetch(apiUrl);

    // Checking if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parsing the response data as JSON
    const data = await response.json();

    // Logging the data
    console.log(data);
  } catch (error) {
    // Handling any errors that occur during the fetch
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch data
fetchData();
```

### Task 1: Using the Fetch API with Promises

We'll use the Fetch API to get data from a public API and log the response data to the console using promises.

```javascript
// URL of the public API
const apiUrl = "https://api.example.com/data";

// Fetch data using promises
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // Log the response data to the console
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
```

### Task 2: Using the Fetch API with Async/Await

We'll use the Fetch API to get data from a public API and log the response data to the console using async/await.

```javascript
// URL of the public API
const apiUrl = "https://api.example.com/data";

// Async function to fetch data
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data); // Log the response data to the console
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the async function
fetchData();
```

---

## Concurrent promises in JavaScript.

Concurrent promises in JavaScript refer to executing multiple promises at the same time rather than sequentially. This can significantly improve performance when you have multiple asynchronous operations that can run independently.

### Key Concepts

1. Promise.all():

Waits for all promises in an array to resolve and returns a single promise that resolves with an array of their results.

If any of the promises reject, Promise.all immediately rejects with that error.

2. Promise.allSettled():

Waits for all promises to either resolve or reject and returns a single promise that resolves with an array of objects describing the outcome of each promise.

3. Promise.race():

Returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects. It will return the result of the first promise that completes.

4. Promise.any() (ES2021):

Returns a promise that resolves as soon as any of the promises in the array resolves. It rejects if no promises resolve (only if all promises are rejected).

### Examples

1. Using Promise.all()

```javascript
// Functions that return promises
const fetchData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data 1"), 2000));
const fetchData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data 2"), 1000));
const fetchData3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data 3"), 3000));

// Using Promise.all to execute promises concurrently
Promise.all([fetchData1(), fetchData2(), fetchData3()])
  .then((results) => {
    console.log("All data:", results); // Output: ['Data 1', 'Data 2', 'Data 3']
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

2. Using Promise.allSettled()

```javascript
// Functions that return promises (one of them rejects)
const fetchData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data 1"), 2000));
const fetchData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data 2"), 1000));
const fetchData3 = () =>
  new Promise((_, reject) => setTimeout(() => reject("Error in Data 3"), 3000));

// Using Promise.allSettled to handle all promises
Promise.allSettled([fetchData1(), fetchData2(), fetchData3()]).then(
  (results) => {
    console.log("All results:", results);
    // Output: [
    //   { status: 'fulfilled', value: 'Data 1' },
    //   { status: 'fulfilled', value: 'Data 2' },
    //   { status: 'rejected', reason: 'Error in Data 3' }
    // ]
  }
);
```

3. Using Promise.race()

```javascript
// Functions that return promises
const fetchData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data 1"), 3000));
const fetchData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data 2"), 1000));
const fetchData3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data 3"), 2000));

// Using Promise.race to get the first promise that settles
Promise.race([fetchData1(), fetchData2(), fetchData3()]).then((result) => {
  console.log("First resolved data:", result); // Output: 'Data 2'
});
```

4. Using Promise.any()

```javascript
// Functions that return promises (all of them reject)
const fetchData1 = () =>
  new Promise((_, reject) => setTimeout(() => reject("Error 1"), 2000));
const fetchData2 = () =>
  new Promise((_, reject) => setTimeout(() => reject("Error 2"), 1000));
const fetchData3 = () =>
  new Promise((_, reject) => setTimeout(() => reject("Error 3"), 3000));

// Using Promise.any to get the first fulfilled promise
Promise.any([fetchData1(), fetchData2(), fetchData3()])
  .then((result) => {
    console.log("First fulfilled data:", result);
  })
  .catch((error) => {
    console.error("All promises rejected:", error);
  });
```

### Task 1: Use Promise.all to Wait for Multiple Promises to Resolve and Then Log All Their Values

We'll create a few promises that resolve after different times and use Promise.all to wait for all of them to complete. After all promises are resolved, we'll log their values.

```javascript
// Functions that return promises
const fetchData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data 1"), 3000));
const fetchData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data 2"), 1000));
const fetchData3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data 3"), 2000));

// Using Promise.all to wait for all promises to resolve
Promise.all([fetchData1(), fetchData2(), fetchData3()])
  .then((results) => {
    console.log("All data:", results); // Output: ['Data 2', 'Data 3', 'Data 1']
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### Task 2: Use Promise.race to Log the Value of the First Promise That Resolves Among Multiple Promises

We'll create several promises and use Promise.race to get the value of the first promise that resolves.

```javascript
// Functions that return promises
const fetchData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data 1"), 3000));
const fetchData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data 2"), 1000));
const fetchData3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data 3"), 2000));

// Using Promise.race to get the first resolved promise
Promise.race([fetchData1(), fetchData2(), fetchData3()])
  .then((result) => {
    console.log("First resolved data:", result); // Output: 'Data 2'
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```
