### Consuming Promises: Best Practices and Examples

Consuming promises effectively ensures clean, readable, and maintainable asynchronous code. Here are best practices and examples for consuming promises in different scenarios.

---

### **Best Practices for Consuming Promises**

1. **Always Handle Errors**: Use `.catch()` to catch errors and prevent unhandled promise rejections.
2. **Use `.finally()` for Cleanup**: Perform actions like stopping loaders or resetting states regardless of the promise's outcome.
3. **Avoid Nesting Promises**: Chain `.then()` calls instead of nesting them.
4. **Graceful Fallbacks**: Provide default values or retry mechanisms for failed promises.
5. **Readable Chains**: Break down complex chains into smaller, modular functions for better readability.
6. **Error Propagation**: Let errors bubble up to the top-level `.catch()` unless you handle them locally.
7. **Parallel Execution**: Use `Promise.all` or `Promise.allSettled` for handling multiple promises efficiently.

---

### **Examples of Consuming Promises**

#### **1. Basic Consumption**

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      success ? resolve("Data fetched!") : reject(new Error("Fetch failed."));
    }, 1000);
  });
};

fetchData()
  .then((data) => console.log("Success:", data))
  .catch((err) => console.error("Error:", err.message))
  .finally(() => console.log("Operation complete."));
```

**Best Practice**: Use `.finally()` for cleanup, e.g., hiding loaders.

---

#### **2. Sequential Operations (Promise Chaining)**

```javascript
const authenticate = () => {
  return Promise.resolve("User authenticated");
};

const fetchUserData = () => {
  return Promise.resolve("User data fetched");
};

const logActivity = () => {
  return Promise.resolve("Activity logged");
};

// Chain promises sequentially
authenticate()
  .then((message) => {
    console.log(message);
    return fetchUserData();
  })
  .then((userData) => {
    console.log(userData);
    return logActivity();
  })
  .then((activity) => console.log(activity))
  .catch((err) => console.error("Error:", err.message))
  .finally(() => console.log("Workflow complete."));
```

**Best Practice**: Avoid nesting and use chaining for readability.

---

#### **3. Parallel Execution with `Promise.all`**

When tasks are independent and can run in parallel.

```javascript
const fetchPosts = () =>
  new Promise((resolve) => setTimeout(() => resolve("Posts fetched"), 1000));
const fetchComments = () =>
  new Promise((resolve) => setTimeout(() => resolve("Comments fetched"), 1500));
const fetchUsers = () =>
  new Promise((resolve) => setTimeout(() => resolve("Users fetched"), 500));

Promise.all([fetchPosts(), fetchComments(), fetchUsers()])
  .then((results) => {
    console.log("All tasks complete:");
    console.log("Posts:", results[0]);
    console.log("Comments:", results[1]);
    console.log("Users:", results[2]);
  })
  .catch((err) => console.error("Error:", err.message))
  .finally(() => console.log("Parallel execution done."));
```

**Best Practice**: Use `Promise.all` when all promises must succeed, and handle errors in `.catch()`.

---

#### **4. Handling Multiple Outcomes with `Promise.allSettled`**

Use `Promise.allSettled` when you need results of all promises regardless of success or failure.

```javascript
const fetchData = (id) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        id % 2 === 0
          ? resolve(`Data for ID ${id}`)
          : reject(`Error for ID ${id}`),
      1000
    )
  );

Promise.allSettled([fetchData(1), fetchData(2), fetchData(3)])
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Promise ${index + 1} succeeded:`, result.value);
      } else {
        console.error(`Promise ${index + 1} failed:`, result.reason);
      }
    });
  })
  .finally(() => console.log("Processed all promises."));
```

**Best Practice**: Use `Promise.allSettled` for non-critical tasks or when partial results are acceptable.

---

#### **5. Handling Timeouts with `Promise.race`**

Timeout a promise if it takes too long.

```javascript
const apiCall = new Promise((resolve) =>
  setTimeout(() => resolve("API response"), 3000)
);
const timeout = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("Request timed out")), 2000)
);

Promise.race([apiCall, timeout])
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
```

**Best Practice**: Use `Promise.race` for time-sensitive operations.

---

#### **6. Retrying Failed Promises**

Retry a promise a few times before giving up.

```javascript
const fetchWithRetry = (retries) => {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.7; // 30% success rate
    if (success) resolve("Success!");
    else reject("Failure!");
  }).catch((err) => {
    if (retries > 0) {
      console.log(`Retrying... (${retries} attempts left)`);
      return fetchWithRetry(retries - 1);
    }
    throw new Error(err);
  });
};

fetchWithRetry(3)
  .then((result) => console.log(result))
  .catch((err) => console.error("Final Error:", err.message));
```

**Best Practice**: Implement retry logic for flaky operations.

---

#### **7. Graceful Fallbacks**

Provide a default value or fallback operation if the promise fails.

```javascript
const fetchData = () => Promise.reject(new Error("Network error"));

fetchData()
  .catch((err) => {
    console.error("Error:", err.message);
    return "Default data";
  })
  .then((data) => console.log("Data:", data));
```

**Best Practice**: Handle specific failures and provide meaningful fallbacks.

---

### **Key Takeaways**

- **Error Handling**: Always `.catch()` errors to prevent crashes.
- **Parallel vs Sequential**: Use `Promise.all` for parallel tasks and chaining for dependent tasks.
- **Cleanup with `.finally()`**: Always handle post-promise tasks like hiding loaders.
- **Graceful Handling**: Provide fallbacks or retry strategies for better user experience.
- **Readable Code**: Break down complex chains into smaller, modular functions.

---

## Here are 20 practice questions to help you deepen your understanding of consuming promises and their best practices:

---

## **Basic Consumption**

### 1. What are the key methods used to consume promises, and what are their purposes?

In JavaScript, there are several key methods used to consume promises. These methods allow you to handle the result or failure of a promise and manage asynchronous code. Below are the most important methods:

### 1. **`then()`**

- **Purpose**: Used to handle the resolved value of a promise.
- **Usage**: The `then()` method is called when the promise is resolved (fulfilled). It takes two arguments:
  - The first argument is a function that handles the resolved value.
  - The second argument (optional) is a function that handles a rejection.

**Example**:

```javascript
const promise = new Promise((resolve, reject) => {
  resolve("Success!");
});

promise.then(
  (result) => console.log(result), // Handles the resolved value
  (error) => console.log(error) // Handles any rejection
);
```

### 2. **`catch()`**

- **Purpose**: Used to handle any errors (rejections) in a promise chain.
- **Usage**: The `catch()` method is a shorthand for `.then(null, rejectionHandler)`, and it catches any error or rejection that occurs during promise execution or in the previous `then()` method.

**Example**:

```javascript
const promise = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); // Handles any rejection
```

### 3. **`finally()`**

- **Purpose**: Executes a cleanup operation regardless of whether the promise is resolved or rejected.
- **Usage**: The `finally()` method allows you to execute code after the promise settles (either fulfilled or rejected), such as closing a connection or hiding a loading spinner.

**Example**:

```javascript
const promise = new Promise((resolve, reject) => {
  resolve("Done!");
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Cleanup or final operation.")); // Executes regardless of resolve/reject
```

### 4. **`all()`**

- **Purpose**: Takes an array (or iterable) of promises and returns a single promise that resolves when all the promises in the array resolve.
- **Usage**: If any of the promises reject, `Promise.all()` will reject immediately with the reason of the first promise that rejects.

**Example**:

```javascript
const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(4);
const promise3 = Promise.resolve(5);

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results)) // [3, 4, 5]
  .catch((error) => console.log(error));
```

### 5. **`race()`**

- **Purpose**: Takes an array (or iterable) of promises and returns a promise that resolves or rejects as soon as one of the promises resolves or rejects, whichever happens first.
- **Usage**: This is useful when you want to proceed with the first result available, without waiting for all promises.

**Example**:

```javascript
const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "Second"));

Promise.race([promise1, promise2])
  .then((result) => console.log(result)) // "Second"
  .catch((error) => console.log(error));
```

### 6. **`allSettled()`**

- **Purpose**: Takes an array (or iterable) of promises and returns a promise that resolves after all of the input promises have settled (either fulfilled or rejected).
- **Usage**: This is useful when you want to know the outcome of all promises regardless of whether they resolved or rejected.

**Example**:

```javascript
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject("Error");

Promise.allSettled([promise1, promise2]).then((results) =>
  console.log(results)
);
// Output: [{ status: 'fulfilled', value: 1 }, { status: 'rejected', reason: 'Error' }]
```

### 7. **`any()`**

- **Purpose**: Takes an array (or iterable) of promises and returns a promise that resolves as soon as **any** of the promises resolves. If all the promises reject, it returns the first rejection reason.
- **Usage**: This method is useful when you are interested in the first successful resolution, even if others fail.

**Example**:

```javascript
const promise1 = Promise.reject("Failure");
const promise2 = Promise.resolve("Success");
const promise3 = Promise.reject("Another failure");

Promise.any([promise1, promise2, promise3])
  .then((result) => console.log(result)) // "Success"
  .catch((error) => console.log(error));
```

---

### Summary of Purposes:

- **`then()`**: Handle resolved values of a promise.
- **`catch()`**: Handle rejected promises (errors).
- **`finally()`**: Execute code after promise settles (for cleanup, etc.).
- **`all()`**: Wait for all promises to resolve (or reject if any one fails).
- **`race()`**: Wait for the first promise to resolve or reject.
- **`allSettled()`**: Wait for all promises to settle (resolve or reject).
- **`any()`**: Resolve as soon as any promise resolves (or fail if all reject).

### 2. Write a promise chain that logs "Data loaded", "Data processed", and "Done!" sequentially.

Here is a simple promise chain that logs "Data loaded", "Data processed", and "Done!" sequentially:

### **Code Example:**

```javascript
function loadData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data loaded");
      resolve();
    }, 1000); // Simulate a 1-second delay for data loading
  });
}

function processData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data processed");
      resolve();
    }, 1000); // Simulate a 1-second delay for data processing
  });
}

function done() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Done!");
      resolve();
    }, 500); // Simulate a 0.5-second delay for the final step
  });
}

loadData()
  .then(() => processData()) // Chain to process data after loading
  .then(() => done()) // Chain to indicate "Done!" after processing
  .catch((error) => console.error("Error:", error));
```

---

### **Explanation**:

1. **`loadData()`**: Simulates an asynchronous operation (like fetching data) with a delay of 1 second, logs "Data loaded", and resolves the promise.
2. **`processData()`**: After the data is loaded, this function simulates data processing with a 1-second delay, logs "Data processed", and resolves the promise.
3. **`done()`**: The final step in the chain, which simulates completing the task and logs "Done!" with a 0.5-second delay.

The promise chain ensures each step occurs sequentially, and if there’s an error at any point, it will be caught by the `.catch()` method.

---

### **Output** (with delays):

```
Data loaded
Data processed
Done!
```

### 3. What is the purpose of the `.finally()` method? Provide an example.

The `.finally()` method in JavaScript is used to execute a block of code after a promise has been settled, regardless of whether the promise was fulfilled (resolved) or rejected. It's useful for cleanup operations such as hiding loading spinners, closing connections, or resetting UI states, as it runs after the promise is settled (either in `.then()` or `.catch()`).

### **Key Points:**

- **Runs after the promise is settled**: Whether the promise resolves or rejects, the code inside `.finally()` will run.
- **Does not affect the promise's result**: It doesn't change the outcome of the promise; it simply allows you to perform cleanup operations after the promise is settled.

### **Example:**

```javascript
function fetchData(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000);
  });
}

fetchData(false) // Change to true to simulate success
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Cleanup: Hiding loader or closing connections.");
  });
```

### **Explanation**:

1. **`fetchData()`**: This function simulates an asynchronous operation (like fetching data). If `success` is `true`, it resolves the promise; otherwise, it rejects it.
2. **`.then()`**: Handles the resolved value when the promise is fulfilled.
3. **`.catch()`**: Handles the error if the promise is rejected.
4. **`.finally()`**: Regardless of whether the promise resolves or rejects, the `finally()` block runs and logs the message "Cleanup: Hiding loader or closing connections."

### **Output**:

#### If the promise is successful:

```
Cleanup: Hiding loader or closing connections.
Data fetched successfully!
```

#### If the promise fails:

```
Cleanup: Hiding loader or closing connections.
Failed to fetch data.
```

---

### **Use Cases for `.finally()`**:

- **Hide loading indicators**: If you are showing a loading spinner or indicator during an async task, you can use `.finally()` to ensure that the spinner is hidden after the task completes.
- **Cleanup resources**: Close database connections, file handles, or network connections.
- **Reset UI state**: After an operation completes, reset buttons, inputs, or other UI elements back to their initial state.

### 4. How do you handle a situation where a promise fails with an error?

When a promise fails (i.e., is rejected), you handle the error using the `.catch()` method or by using `try/catch` blocks with `async/await`. Here are two common ways to handle errors in promises:

### 1. **Using `.catch()`**

The `.catch()` method is specifically designed to handle rejected promises. It catches any error that occurs in the promise chain (whether directly in the promise or in a `.then()` method).

#### **Example**:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    const success = false; // Simulate a failure
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error: Failed to fetch data.");
      }
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // Will not be called if the promise is rejected
  })
  .catch((error) => {
    console.error(error); // Handles the error when the promise is rejected
  });
```

#### **Explanation**:

- The `fetchData()` function returns a promise that simulates a success or failure.
- If the promise fails (i.e., is rejected), the `.catch()` method will catch the error and log it.

### **Output**:

```
Error: Failed to fetch data.
```

---

### 2. **Using `async/await` with `try/catch`**

If you're using `async/await`, you can handle promise rejections using a `try/catch` block. This approach allows you to write asynchronous code in a more synchronous-looking way, and it catches errors in a cleaner way.

#### **Example**:

```javascript
async function fetchData() {
  return new Promise((resolve, reject) => {
    const success = false; // Simulate a failure
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error: Failed to fetch data.");
      }
    }, 1000);
  });
}

async function getData() {
  try {
    const result = await fetchData();
    console.log(result); // Will not be called if the promise is rejected
  } catch (error) {
    console.error(error); // Handles the error when the promise is rejected
  }
}

getData();
```

#### **Explanation**:

- The `fetchData()` function simulates an asynchronous operation and returns a promise that may resolve or reject.
- The `getData()` function is `async` and uses `await` to wait for the promise to settle.
- If the promise is rejected, the error is caught in the `catch` block.

### **Output**:

```
Error: Failed to fetch data.
```

---

### **Error Handling Best Practices**:

1. **Log the Error**: Always log the error for debugging purposes. In production, you might want to send the error details to a logging service.
2. **Provide User Feedback**: If the promise failure affects the user (e.g., a network request failure), inform the user with an appropriate error message.
3. **Fallback Mechanisms**: For critical failures, consider implementing a fallback mechanism to ensure the application continues working, e.g., trying an alternative API or using cached data.
4. **Graceful Degradation**: When errors occur, ensure that the app degrades gracefully and doesn't break the entire user experience.

---

By using `.catch()` or `try/catch` with `async/await`, you ensure that errors in promises are handled properly and you prevent unhandled promise rejections from causing unexpected behavior in your code.

### 5. Write a promise that resolves with a message after 2 seconds and log the message.

Here's an example of a promise that resolves with a message after 2 seconds, and then logs that message:

### **Code Example**:

```javascript
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Message resolved after 2 seconds!");
  }, 2000); // Resolves after 2 seconds
});

myPromise.then((message) => {
  console.log(message); // Logs the message once the promise is resolved
});
```

### **Explanation**:

1. **`new Promise()`**: Creates a new promise.
2. **`setTimeout()`**: Simulates an asynchronous operation by delaying the resolution of the promise for 2 seconds.
3. **`resolve("Message resolved after 2 seconds!")`**: Resolves the promise with the message after 2 seconds.
4. **`.then()`**: Once the promise is resolved, `.then()` is called and logs the message to the console.

### **Output** (after 2 seconds):

```
Message resolved after 2 seconds!
```

---

## **Error Handling**

### 6. What happens if a `.then()` handler throws an error? How do you handle it?

If a `.then()` handler throws an error, that error will be passed along the promise chain and cause the promise to be rejected. The error can be caught and handled in subsequent `.catch()` blocks or using `try/catch` with `async/await`.

### What happens:

- When an error is thrown inside a `.then()` handler, the promise returned by `.then()` is rejected, and the rejection will propagate to the next `.catch()` handler in the chain.
- If no `.catch()` is provided, the error will result in an unhandled rejection.

### Example of throwing an error in a `.then()` handler:

```javascript
const myPromise = new Promise((resolve, reject) => {
  resolve("Initial data");
});

myPromise
  .then((data) => {
    console.log(data); // Logs "Initial data"
    throw new Error("Something went wrong in the .then() handler");
  })
  .catch((error) => {
    console.error("Caught an error:", error.message); // Catches and logs the error
  });
```

### **Explanation**:

1. **`myPromise`**: A promise that resolves with `"Initial data"`.
2. In the first `.then()` handler, an error is thrown using `throw new Error("Something went wrong")`.
3. The error is caught by the subsequent `.catch()` handler, which logs the error message.

### **Output**:

```
Initial data
Caught an error: Something went wrong in the .then() handler
```

### **How to handle errors**:

1. **Using `.catch()`**:
   - The `.catch()` method is used to catch errors in the promise chain. If an error is thrown in any `.then()`, it can be handled in the `.catch()` block.
2. **Using `try/catch` with `async/await`**:
   - If you're using `async/await`, you can handle errors with a `try/catch` block.

### **Using `async/await`**:

```javascript
async function fetchData() {
  try {
    const data = await Promise.resolve("Initial data");
    console.log(data);
    throw new Error("Something went wrong");
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
}

fetchData();
```

### **Explanation**:

1. The function `fetchData()` is `async` and uses `await` to wait for the promise to resolve.
2. If an error occurs inside the `try` block, it is caught by the `catch` block and logged.

### **Output**:

```
Initial data
Caught an error: Something went wrong
```

### **Summary**:

- If a `.then()` handler throws an error, the error is passed to the next `.catch()` in the chain.
- Always handle promise rejections using `.catch()` or `try/catch` to ensure your program handles errors gracefully and avoids unhandled rejections.

### 7. Write a promise chain where one of the `.then()` handlers throws an error. Handle it gracefully with `.catch()`.

Here’s an example of a promise chain where one of the `.then()` handlers throws an error, and it’s handled gracefully with a `.catch()`:

### **Code Example**:

```javascript
const myPromise = new Promise((resolve) => {
  resolve("Starting the promise chain");
});

myPromise
  .then((message) => {
    console.log(message); // Logs "Starting the promise chain"
    throw new Error("An error occurred in the second .then() handler");
  })
  .then((message) => {
    // This will not be executed because the previous .then() threw an error
    console.log(message);
  })
  .catch((error) => {
    // Catches the error thrown in the previous .then() handler
    console.error("Caught an error:", error.message); // Logs "Caught an error: An error occurred in the second .then() handler"
  });
```

### **Explanation**:

1. The promise `myPromise` is created and immediately resolved with the message `"Starting the promise chain"`.
2. The first `.then()` logs the message and throws an error with `throw new Error()`.
3. The second `.then()` is not executed because the first `.then()` threw an error, and control is passed to the `.catch()` block.
4. The `.catch()` block catches the error and logs it to the console.

### **Output**:

```
Starting the promise chain
Caught an error: An error occurred in the second .then() handler
```

### **Key Points**:

- When an error is thrown in a `.then()` handler, it will propagate to the next `.catch()` in the chain.
- The `.catch()` method handles the error, ensuring that the error doesn’t break the promise chain.

### 8. Explain the difference between `.catch()` and handling errors inside `.then()`.

In JavaScript, both `.catch()` and handling errors inside `.then()` are used to deal with errors in a promise chain. However, they differ in terms of where the error is handled and how the error propagation works. Let’s break down the differences:

### **1. Handling Errors Inside `.then()`**:

You can handle errors directly within a `.then()` method by using a `try/catch` block or an inline error handler. This approach handles errors immediately in the specific `.then()` where the error occurred.

#### **Example**:

```javascript
new Promise((resolve, reject) => {
  resolve("First success");
})
  .then((message) => {
    console.log(message); // Logs "First success"
    throw new Error("Error in first .then()");
  })
  .then(
    (message) => {
      // This will not be reached because the previous .then() threw an error
      console.log(message);
    },
    (error) => {
      // Inline error handling inside the .then() itself
      console.error("Caught inside .then() handler:", error.message); // Logs "Caught inside .then() handler: Error in first .then()"
    }
  );
```

#### **Explanation**:

- In this example, the error thrown in the first `.then()` is handled inside the second `.then()` by providing an error handler as the second argument.
- If an error occurs in the first `.then()`, it will be caught by the second `.then()` handler, and the chain will not continue past that point unless the error is explicitly handled.

### **2. Using `.catch()`**:

`.catch()` is a method specifically designed to handle errors in a promise chain. It catches any errors that occur in the promise chain prior to it, including errors thrown in any `.then()` handlers.

#### **Example**:

```javascript
new Promise((resolve, reject) => {
  resolve("First success");
})
  .then((message) => {
    console.log(message); // Logs "First success"
    throw new Error("Error in first .then()");
  })
  .then((message) => {
    // This will not be reached because the previous .then() threw an error
    console.log(message);
  })
  .catch((error) => {
    // .catch() handles the error from the previous .then() handler
    console.error("Caught in .catch():", error.message); // Logs "Caught in .catch(): Error in first .then()"
  });
```

#### **Explanation**:

- The error that is thrown in the first `.then()` will be caught by the `.catch()` at the end of the chain.
- `.catch()` is useful when you want to handle errors globally for the entire chain, rather than dealing with them in each `.then()`.

### **Key Differences**:

1. **Error Propagation**:

   - **Inside `.then()`**: Errors can be caught by providing a second callback in the `.then()` method (the error handler). The error is caught only within that specific `.then()` handler.
   - **Using `.catch()`**: `.catch()` catches errors that occur anywhere in the promise chain (in any `.then()` or in the promise itself). It acts as a global error handler for the promise chain.

2. **Readability and Structure**:

   - **Inside `.then()`**: Handling errors inside a `.then()` can make the code more complicated, especially when you have nested `.then()`s or multiple error conditions to handle.
   - **Using `.catch()`**: `.catch()` is generally cleaner and more readable for catching errors at the end of the chain, as it consolidates all error handling in one place.

3. **Error Handling Scope**:
   - **Inside `.then()`**: The error is only caught in the `.then()` where you explicitly define the error handler. It doesn't propagate further unless you rethrow the error or pass it along manually.
   - **Using `.catch()`**: The `.catch()` method handles errors that were thrown anywhere in the chain, making it useful for handling any unforeseen errors without repeating error handling logic in every `.then()`.

### **Best Practices**:

- **Use `.catch()`** when you want a global error handler for the entire promise chain, especially if multiple `.then()` handlers could throw errors. It centralizes error handling and avoids redundant error logic.
- **Use error handlers inside `.then()`** if you want to handle errors locally in a specific part of the chain or you need to handle errors differently for each specific `.then()`.

### **Summary**:

- **`.then()` (with error handler)**: Handles errors only in that specific `.then()` handler.
- **`.catch()`**: Catches errors from any point in the promise chain and allows you to handle them globally.

### 9. Create a promise that fails on the first attempt but succeeds on retry. Log the final result.

Here’s how you can create a promise that fails on the first attempt but succeeds on retry. We'll use a retry mechanism with `setTimeout` to simulate the failure and success:

### **Code Example**:

```javascript
function retryPromise(retries) {
  return new Promise((resolve, reject) => {
    let attempt = 1;

    function attemptRequest() {
      console.log(`Attempt ${attempt}`);

      // Simulate failure on the first attempt, success on retry
      if (attempt === 1) {
        attempt++;
        reject(new Error("Failed on attempt 1"));
      } else {
        resolve("Success on retry!");
      }
    }

    // Attempt the request with a delay
    setTimeout(attemptRequest, 1000);
  }).catch((error) => {
    console.error(error.message); // Logs the failure message
    // Retry after 2 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(retryPromise(retries - 1)); // Retry the promise if there are retries left
      }, 2000);
    });
  });
}

retryPromise(2).then((message) => {
  console.log(message); // Logs the final success message
});
```

### **Explanation**:

1. The `retryPromise()` function simulates a request that fails on the first attempt but succeeds on a retry.
2. On the first attempt, the promise is rejected (`reject(new Error("Failed on attempt 1"))`).
3. The `.catch()` block catches the rejection, logs the failure message, and retries after 2 seconds.
4. The second attempt succeeds, and the message `"Success on retry!"` is logged.

### **Output**:

```
Attempt 1
Failed on attempt 1
Attempt 2
Success on retry!
```

### **Explanation of Flow**:

- On the first attempt, the promise is rejected.
- The `.catch()` block catches the rejection and waits for 2 seconds before retrying.
- On the second attempt, the promise resolves successfully, logging `"Success on retry!"`.

This structure simulates a simple retry mechanism with delayed retries and logs the final result once the promise resolves successfully.

---

## **Sequential Promises**

### 10. Write a chain of promises that simulates the following steps:

    - Fetch user details.
    - Fetch user’s posts using their ID.
    - Log a message indicating both operations are complete.

Here's an example of a chain of promises that simulates fetching user details, fetching the user's posts using their ID, and logging a message once both operations are complete:

### **Code Example**:

```javascript
function fetchUserDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: "John Doe" }; // Simulating user data
      console.log("User details fetched:", user);
      resolve(user);
    }, 1000); // Simulates a 1-second delay to fetch user details
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { postId: 1, content: "Post 1 by John" },
        { postId: 2, content: "Post 2 by John" },
      ]; // Simulating posts for the user
      console.log(`Posts fetched for user ${userId}:`, posts);
      resolve(posts);
    }, 1000); // Simulates a 1-second delay to fetch user posts
  });
}

fetchUserDetails()
  .then((user) => {
    return fetchUserPosts(user.id); // Fetch posts using user ID
  })
  .then((posts) => {
    console.log("Both operations are complete!");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### **Explanation**:

1. **`fetchUserDetails()`**: A function that simulates fetching user details. After a 1-second delay, it resolves with a `user` object containing the user’s ID and name.
2. **`fetchUserPosts(userId)`**: A function that simulates fetching posts for a user using their ID. It resolves with an array of posts after a 1-second delay.
3. **Promise Chain**: The promise chain:
   - First, `fetchUserDetails()` is called to fetch the user’s details.
   - Once the user details are fetched, the `.then()` handler calls `fetchUserPosts()` with the user’s ID.
   - After both promises resolve, the final `.then()` logs the message `"Both operations are complete!"`.
4. **Error Handling**: A `.catch()` block is added to catch any errors that might occur during the promise chain.

### **Output**:

```
User details fetched: { id: 1, name: "John Doe" }
Posts fetched for user 1: [ { postId: 1, content: "Post 1 by John" }, { postId: 2, content: "Post 2 by John" } ]
Both operations are complete!
```

### **Explanation of Flow**:

1. First, the user details are fetched and logged.
2. Then, using the user’s ID, the user's posts are fetched and logged.
3. Finally, a message is logged to indicate that both operations (fetching user details and posts) are complete.

### 11. What happens if one promise in a chain fails? How can you recover from it?

If one promise in a chain fails (i.e., it is rejected), the entire chain will be interrupted, and the subsequent `.then()` handlers will be skipped. Instead, the chain will look for an error handler (usually a `.catch()` method) to handle the rejection.

### **What Happens When a Promise Fails in a Chain?**

When a promise in a chain is rejected:

1. The chain stops executing the remaining `.then()` handlers after the rejection.
2. The rejection is propagated to the next `.catch()` method in the chain (if any).
3. If no `.catch()` is provided, the rejection will cause an unhandled promise rejection, which could terminate the process (in Node.js) or be logged as an unhandled promise rejection warning in the browser.

### **Example of a Promise Chain with a Failure:**

```javascript
function fetchUserDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false; // Simulate a failure
      if (success) {
        resolve({ id: 1, name: "John Doe" });
      } else {
        reject(new Error("Failed to fetch user details"));
      }
    }, 1000);
  });
}

fetchUserDetails()
  .then((user) => {
    console.log("User details:", user);
    // Simulating another operation, e.g., fetch posts (this won't run if the first promise fails)
    return fetchUserPosts(user.id);
  })
  .then((posts) => {
    console.log("User posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error.message); // This will handle any error in the chain
  });
```

### **Output**:

```
Error: Failed to fetch user details
```

In this case:

- The promise `fetchUserDetails()` is rejected because of the `success = false` condition.
- The rejection is propagated to the `.catch()` method, and the error is logged.
- Since the first promise fails, the second `.then()` and subsequent operations (like fetching user posts) are skipped.

### **How to Recover from a Promise Failure?**

You can **recover from a promise failure** in two main ways:

1. **Using `.catch()` to handle the error globally**: You can use `.catch()` at the end of the promise chain to handle errors and possibly perform some recovery operations (e.g., calling a backup API or retrying the operation).
2. **Handling errors locally with `.then()` error handler**: You can specify an error handler in a specific `.then()` method to recover from an error for that step in the chain.

### **Recovering with `.catch()` (Global Error Handler)**:

You can use `.catch()` to handle any error that occurs anywhere in the chain and perform recovery actions, like calling a backup API or returning a fallback value.

```javascript
function fetchUserDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Failed to fetch user details"));
    }, 1000);
  });
}

fetchUserDetails()
  .then((user) => {
    console.log("User details:", user);
  })
  .catch((error) => {
    console.error("Error:", error.message); // Handle error globally
    return { id: 0, name: "Guest" }; // Return a fallback value
  })
  .then((user) => {
    console.log("Recovered user details:", user); // Logs fallback user details
  });
```

### **Output**:

```
Error: Failed to fetch user details
Recovered user details: { id: 0, name: 'Guest' }
```

In this example:

- The first promise is rejected.
- The error is caught in the `.catch()` block, and a fallback user object is returned.
- The `.then()` that follows the `.catch()` block receives the fallback user details, allowing the process to continue smoothly.

### **Recovering with `.then()` Error Handler (Local Error Handler)**:

If you want to handle errors only for specific promises in the chain, you can pass a second argument to `.then()` (the error handler) for that particular step.

```javascript
function fetchUserDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Failed to fetch user details"));
    }, 1000);
  });
}

fetchUserDetails()
  .then(
    (user) => {
      console.log("User details:", user);
    },
    (error) => {
      console.error("Error in fetching user:", error.message);
      return { id: 0, name: "Guest" }; // Handle error locally and return a fallback
    }
  )
  .then((user) => {
    console.log("Recovered user details:", user); // Logs fallback user details
  });
```

### **Output**:

```
Error in fetching user: Failed to fetch user details
Recovered user details: { id: 0, name: 'Guest' }
```

In this case:

- The error is handled inside the `.then()` method by providing a second callback that catches the error.
- The fallback user object is returned directly, allowing the chain to continue without a global `.catch()` block.

### **Conclusion**:

- **Promise failure**: When a promise in a chain fails, it interrupts the sequence, and any subsequent `.then()` handlers are skipped unless an error handler is provided.
- **Recovery**: Use `.catch()` to globally handle errors or a second argument in `.then()` to handle errors for specific steps in the chain.
- **Graceful recovery**: You can return fallback values or retry operations within error handlers to keep the program flowing even after a failure.

### 12. Refactor a nested promise into a clean, chained structure.

Here's an example of how to refactor a nested promise into a clean, chained structure. Let's say we have a function that fetches user details and, upon successful retrieval of user details, fetches the user's posts. This example demonstrates how to refactor a nested promise to use a promise chain instead for cleaner code.

### **Original Nested Promise Example:**

```javascript
function fetchUserDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: "John Doe" }; // Simulating user data
      resolve(user);
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { postId: 1, content: "Post 1 by John" },
        { postId: 2, content: "Post 2 by John" },
      ]; // Simulating posts for the user
      resolve(posts);
    }, 1000);
  });
}

// Original nested promise structure
fetchUserDetails()
  .then((user) => {
    return fetchUserPosts(user.id)
      .then((posts) => {
        console.log("Posts for user:", posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  })
  .catch((error) => {
    console.error("Error fetching user details:", error);
  });
```

### **Explanation**:

In the above example:

- The `fetchUserPosts` function is nested within the `then()` handler of `fetchUserDetails`.
- This results in nested `.then()` and `.catch()` blocks, which can be harder to read and manage.

### **Refactored Promise Chain:**

We can refactor this into a cleaner promise chain by returning the `fetchUserPosts` call inside the first `then()` and chaining them together.

```javascript
function fetchUserDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: "John Doe" }; // Simulating user data
      resolve(user);
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { postId: 1, content: "Post 1 by John" },
        { postId: 2, content: "Post 2 by John" },
      ]; // Simulating posts for the user
      resolve(posts);
    }, 1000);
  });
}

// Refactored promise chain
fetchUserDetails()
  .then((user) => {
    console.log("User details:", user);
    return fetchUserPosts(user.id); // Returning the second promise to chain it
  })
  .then((posts) => {
    console.log("Posts for user:", posts); // Logs posts after they are fetched
  })
  .catch((error) => {
    console.error("Error:", error); // Handles any errors in the chain
  });
```

### **Explanation of Refactored Code**:

1. **First `.then()`**: The first `.then()` handles the result of `fetchUserDetails()`, logging the user details, and returns the promise from `fetchUserPosts()`.
2. **Second `.then()`**: The second `.then()` receives the result of `fetchUserPosts()` and logs the posts.
3. **`.catch()`**: The `.catch()` block handles any errors that occur in either `fetchUserDetails()` or `fetchUserPosts()`.

### **Output**:

```
User details: { id: 1, name: 'John Doe' }
Posts for user: [
  { postId: 1, content: 'Post 1 by John' },
  { postId: 2, content: 'Post 2 by John' }
]
```

### **Benefits of Refactoring**:

- **Readability**: The promise chain is now linear and easy to follow.
- **Error Handling**: There’s a single `.catch()` at the end to handle any errors from either of the promises.
- **Simplification**: The code is less nested, making it easier to maintain and extend in the future.

---

## **Parallel Promises**

### 13. Explain the difference between `Promise.all` and `Promise.allSettled` with examples.

`Promise.all` and `Promise.allSettled` are both methods used to handle multiple promises concurrently, but they behave differently in terms of handling fulfilled and rejected promises.

### **1. `Promise.all`**

`Promise.all` takes an array (or iterable) of promises and returns a new promise that resolves when **all** of the input promises are resolved or rejects as soon as **any** of the input promises is rejected.

- If all promises resolve, the `Promise.all` will resolve with an array of their results.
- If any of the promises reject, `Promise.all` will immediately reject with the reason of the first rejected promise.

#### **Example of `Promise.all`:**

```javascript
const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "One")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Two")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 3000, "Three")
);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.log("One of the promises was rejected:", error);
  });
```

### **Output:**

```
All promises resolved: [ 'One', 'Two', 'Three' ]
```

#### **Example with rejection in `Promise.all`:**

```javascript
const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "One")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 2000, "Error in promise2")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 3000, "Three")
);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.log("One of the promises was rejected:", error);
  });
```

### **Output:**

```
One of the promises was rejected: Error in promise2
```

### **Explanation of `Promise.all`:**

- If all promises resolve, the result is an array of values from each promise.
- If one promise is rejected, the whole `Promise.all` rejects immediately with the rejection reason of the first rejected promise.

---

### **2. `Promise.allSettled`**

`Promise.allSettled` takes an array (or iterable) of promises and returns a promise that resolves **when all the promises have settled**, meaning either they are resolved or rejected.

- The result of the returned promise is an array of objects, each representing the outcome of each input promise, including its status (`"fulfilled"` or `"rejected"`) and the corresponding value or reason.
- Unlike `Promise.all`, `Promise.allSettled` does not short-circuit on rejection and ensures that all promises settle before resolving.

#### **Example of `Promise.allSettled`:**

```javascript
const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "One")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 2000, "Error in promise2")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 3000, "Three")
);

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log("All promises settled:", results);
});
```

### **Output:**

```
All promises settled: [
  { status: 'fulfilled', value: 'One' },
  { status: 'rejected', reason: 'Error in promise2' },
  { status: 'fulfilled', value: 'Three' }
]
```

#### **Explanation of `Promise.allSettled`:**

- `Promise.allSettled` waits for all promises to settle, whether they resolve or reject.
- The result is an array of objects where each object has:
  - `status`: `'fulfilled'` if the promise was resolved, or `'rejected'` if the promise was rejected.
  - `value` (if fulfilled): the value returned from the resolved promise.
  - `reason` (if rejected): the reason the promise was rejected.

---

### **Key Differences Between `Promise.all` and `Promise.allSettled`:**

1. **Rejection Handling**:

   - **`Promise.all`**: Rejects as soon as one of the promises rejects.
   - **`Promise.allSettled`**: Waits for all promises to settle (either fulfilled or rejected) before resolving.

2. **Return Values**:
   - **`Promise.all`**: Returns an array of resolved values if all promises are resolved; if any promise is rejected, it returns the rejection reason of the first rejected promise.
   - **`Promise.allSettled`**: Returns an array of objects, each containing the status (`fulfilled` or `rejected`) and either `value` (fulfilled) or `reason` (rejected).

### **Use Cases**:

- Use **`Promise.all`** when you want to proceed only if all promises succeed. It's useful when all the operations are required and you need the results together.
- Use **`Promise.allSettled`** when you need to know the outcome of all promises, even if some fail. This is useful when you don't want the rejection of one promise to affect others (e.g., performing independent tasks that should continue regardless of failures).

### 14. Write a script using `Promise.all` to fetch data from three APIs in parallel and log the results.

Here's a script using `Promise.all` to fetch data from three different APIs in parallel and log the results. For the sake of this example, we'll use mock API endpoints to simulate the fetching process.

### **Script Example:**

```javascript
// Example API endpoints (mocked with placeholder URLs)
const api1 = "https://jsonplaceholder.typicode.com/posts/1";
const api2 = "https://jsonplaceholder.typicode.com/users/1";
const api3 = "https://jsonplaceholder.typicode.com/todos/1";

// Function to fetch data from an API
function fetchData(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
  });
}

// Using Promise.all to fetch data from three APIs in parallel
Promise.all([fetchData(api1), fetchData(api2), fetchData(api3)])
  .then((results) => {
    // Log the results when all promises are resolved
    const [post, user, todo] = results;
    console.log("Post data:", post);
    console.log("User data:", user);
    console.log("Todo data:", todo);
  })
  .catch((error) => {
    // Handle any error that occurs during the fetch operations
    console.error("Error:", error);
  });
```

### **Explanation:**

1. **`fetchData(url)`**: A function that fetches data from the given `url`. It returns a promise that resolves with the parsed JSON data if the request is successful.
2. **`Promise.all([...])`**: This method takes an array of promises (in this case, the three fetch operations) and returns a single promise that resolves when all the promises in the array resolve.
3. **`.then(results)`**: When all the promises resolve, the `results` array contains the resolved values from the APIs. We log the values of the post, user, and todo.
4. **`.catch(error)`**: If any of the fetch operations fail (e.g., network error, invalid URL), the `catch` block will log the error.

### **Output (Example):**

If the API requests are successful, the output will look like:

```json
Post data: { "userId": 1, "id": 1, "title": "Title of the post", "body": "Body of the post" }
User data: { "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz" }
Todo data: { "userId": 1, "id": 1, "title": "Buy groceries", "completed": false }
```

### **Key Notes:**

- This example assumes that the API endpoints (`https://jsonplaceholder.typicode.com/...`) are reachable and return JSON data.
- `Promise.all` ensures that the three API calls happen in parallel, which is more efficient than waiting for each one sequentially.

### 15. Write a script using `Promise.allSettled` to fetch data from three APIs and handle both success and failure cases.

Here's a script using `Promise.allSettled` to fetch data from three APIs. This approach ensures that all promises settle, meaning that even if some requests fail, you can still handle the results of the ones that succeed.

### **Script Example Using `Promise.allSettled`:**

```javascript
// Example API endpoints (mocked with placeholder URLs)
const api1 = "https://jsonplaceholder.typicode.com/posts/1";
const api2 = "https://jsonplaceholder.typicode.com/users/1";
const api3 = "https://jsonplaceholder.typicode.com/todos/invalid"; // This will cause an error

// Function to fetch data from an API
function fetchData(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch from ${url}`);
    }
    return response.json();
  });
}

// Using Promise.allSettled to fetch data from three APIs and handle both success and failure
Promise.allSettled([fetchData(api1), fetchData(api2), fetchData(api3)]).then(
  (results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`API ${index + 1} succeeded:`, result.value);
      } else {
        console.error(`API ${index + 1} failed:`, result.reason);
      }
    });
  }
);
```

### **Explanation:**

1. **`fetchData(url)`**: This function fetches data from the given URL. It returns a promise that resolves with the parsed JSON if the request is successful. If the fetch fails, it throws an error.
2. **`Promise.allSettled([...])`**: This method is used to wait for all the promises (fetching data from the three APIs) to settle, whether they resolve or reject. Unlike `Promise.all`, it does not short-circuit if one of the promises fails.

3. **`.then(results)`**: Once all promises settle, the `results` array contains an object for each promise, indicating whether it was fulfilled or rejected:

   - If fulfilled, the object has a `status` of `"fulfilled"` and a `value` property containing the resolved data.
   - If rejected, the object has a `status` of `"rejected"` and a `reason` property containing the error message.

4. **Handling Success and Failure**:
   - In the `.then(results)` block, we loop through the `results` array and check the status of each promise:
     - If the promise was fulfilled, we log the result.
     - If the promise was rejected, we log the error.

### **Example Output:**

Assuming that `api1` and `api2` are successful, and `api3` fails:

```
API 1 succeeded: { userId: 1, id: 1, title: "Title of the post", body: "Body of the post" }
API 2 succeeded: { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" }
API 3 failed: Error: Failed to fetch from https://jsonplaceholder.typicode.com/todos/invalid
```

### **Key Points:**

- **`Promise.allSettled`** guarantees that all promises will be handled (either fulfilled or rejected).
- You can easily differentiate between successful and failed API calls and handle each case accordingly.
- This is useful when you want to perform multiple independent operations and don’t want the failure of one to impact the others.

---

## **Promise Utilities**

### 16. How does `Promise.race` work? Write an example to demonstrate it.

`Promise.race` is a method that takes an iterable (usually an array) of promises and returns a single promise. The returned promise resolves or rejects as soon as **the first promise** in the iterable resolves or rejects, whichever comes first. It doesn't wait for all promises to settle like `Promise.all` or `Promise.allSettled`; it "races" the promises and settles with the outcome of the first one to settle.

### **Key Points of `Promise.race`:**

- It returns a promise that resolves or rejects based on the first promise in the iterable to settle (either resolve or reject).
- If the first promise resolves, the returned promise resolves with that value.
- If the first promise rejects, the returned promise rejects with that reason.

### **Example of `Promise.race`:**

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Promise 1 resolved");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Promise 2 resolved");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, "Promise 3 rejected");
});

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log("First promise resolved:", result);
  })
  .catch((error) => {
    console.log("First promise rejected:", error);
  });
```

### **Explanation:**

- **`promise1`** resolves after 3 seconds.
- **`promise2`** resolves after 1 second.
- **`promise3`** rejects after 2 seconds.
- The `Promise.race` method will resolve or reject based on the first promise to settle, regardless of whether it is fulfilled or rejected.
- In this case, **`promise2`** will be the first to resolve after 1 second, so the race will finish with the resolution of `promise2`.

### **Expected Output:**

```
First promise resolved: Promise 2 resolved
```

### **Key Behavior of `Promise.race`:**

1. **If the first promise resolves**: The returned promise resolves with that value.
2. **If the first promise rejects**: The returned promise rejects with that reason.
3. **If multiple promises resolve or reject at the same time**: Only the first one in the iterable order will determine the result.

### **Example with Rejection:**

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "First promise resolved");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "Second promise rejected");
});

Promise.race([promise1, promise2])
  .then((result) => {
    console.log("First promise resolved:", result);
  })
  .catch((error) => {
    console.log("First promise rejected:", error);
  });
```

### **Expected Output:**

```
First promise rejected: Second promise rejected
```

In this case, **`promise2`** is the first to reject, so `Promise.race` immediately rejects with the reason from `promise2`.

### 17. Write a function that uses `Promise.race` to implement a timeout for an API call.

You can use `Promise.race` to implement a timeout for an API call by creating a timeout promise that rejects after a specified period, and then race it against the API request promise. If the API call takes longer than the timeout, it will be rejected with a timeout error.

### Example:

```javascript
function fetchWithTimeout(url, timeout) {
  // Create the timeout promise
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject("Request timed out"), timeout)
  );

  // Create the API fetch promise
  const fetchPromise = fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("API call failed");
    }
    return response.json();
  });

  // Use Promise.race to return the first promise that settles (either the API call or the timeout)
  return Promise.race([fetchPromise, timeoutPromise]);
}

// Usage example:
fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", 3000)
  .then((data) => {
    console.log("Data fetched:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

### Explanation:

1. **`timeoutPromise`**: This promise is set to reject after the specified `timeout` duration (in milliseconds).
2. **`fetchPromise`**: This is the normal API fetch call that resolves if the request is successful and returns the response as JSON.
3. **`Promise.race([...])`**: This method returns the first promise to settle. If the API call resolves first, the data is returned. If the timeout occurs first, the promise rejects with a timeout error.

### Example Output:

- If the API request is successful and completes within the timeout:

```
Data fetched: [{ id: 1, title: 'Post title', body: 'Post body' }, ...]
```

- If the API request takes longer than the timeout (e.g., 3 seconds):

```
Error: Request timed out
```

### 18. What is the purpose of `Promise.any`? Write an example where it can be useful.

`Promise.any` is a method that takes an iterable of promises and returns a single promise that resolves as soon as **any one of the promises resolves**. If all the promises reject, it will reject with an **AggregateError**. Unlike `Promise.race`, which resolves with the first settled promise (whether resolved or rejected), `Promise.any` only resolves with the first **resolved** promise, and it ignores rejected promises until all have been tried.

### **Key Points of `Promise.any`:**

- Returns a promise that resolves with the first promise that resolves successfully.
- If all promises reject, it rejects with an `AggregateError` (a new type of error in JavaScript that groups multiple errors).

### **Example: Using `Promise.any` to Try Multiple API Endpoints**

Imagine you need to fetch data from multiple sources and want to proceed with whichever source responds first. If one API fails, you can fall back to another one. `Promise.any` can be useful in such scenarios.

### **Example Script:**

```javascript
const api1 = "https://jsonplaceholder.typicode.com/posts/1";
const api2 = "https://jsonplaceholder.typicode.com/users/1";
const api3 = "https://jsonplaceholder.typicode.com/todos/1"; // Assume all APIs are valid

// Simulate API call with different response times and possible failures
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        // Random failure to simulate unreliable APIs
        resolve(`${url} data fetched successfully!`);
      } else {
        reject(`${url} failed to fetch.`);
      }
    }, Math.floor(Math.random() * 3000) + 1000); // Random timeout between 1 and 4 seconds
  });
}

// Using Promise.any to fetch data from multiple APIs
Promise.any([fetchData(api1), fetchData(api2), fetchData(api3)])
  .then((result) => {
    console.log("Successfully fetched:", result);
  })
  .catch((error) => {
    console.error("All attempts failed:", error);
  });
```

### **Explanation:**

1. **`fetchData(url)`**: Simulates an API call that may either succeed or fail randomly. It resolves if successful or rejects if it fails, with a delay (randomized between 1 to 4 seconds).
2. **`Promise.any([...])`**: This method takes the array of promises and resolves as soon as one of them resolves successfully. It returns the resolved value of the first successful promise.
3. If all promises fail, `Promise.any` will reject with an `AggregateError`.

### **Example Output:**

- If **`api2`** resolves first, you will see:

  ```
  Successfully fetched: https://jsonplaceholder.typicode.com/users/1 data fetched successfully!
  ```

- If all promises reject (i.e., all APIs fail), you will see:
  ```
  All attempts failed: AggregateError: All promises were rejected
  ```

### **Use Case for `Promise.any`:**

- **Fallback scenarios**: You might be trying to fetch data from multiple servers or APIs, and you want to use whichever responds first.
- **Optimizing response times**: Instead of waiting for the longest API to respond, you can proceed with the first one that successfully responds, improving the overall user experience.

### **When `Promise.any` Is Not Ideal:**

- If it's critical that you wait for **all promises to settle** (e.g., all data is required), then `Promise.all` or `Promise.allSettled` would be more appropriate.

### 19. Explain a scenario where using `Promise.allSettled` is better than `Promise.all`.

`Promise.allSettled` is particularly useful when you need to wait for all promises to settle (either resolved or rejected) and don't want the entire operation to fail if one or more promises are rejected. This makes it a better option than `Promise.all` in situations where you need to handle the success and failure of each promise independently.

### **Scenario: Processing Multiple Independent API Calls with Different Outcomes**

Let's consider a scenario where you're making multiple API calls to process user data, and each API call can either succeed or fail. You need to gather the results of all calls and handle both successes and failures separately, but you don't want the entire process to fail if one or more calls reject.

In this case, using `Promise.all` would be problematic because it **fails fast**: as soon as one promise is rejected, the entire `Promise.all` chain is rejected, and you wouldn't be able to handle the successful ones. However, with `Promise.allSettled`, you can handle both successful and failed promises and continue processing.

### **Example:**

```javascript
const apiCall1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "API Call 1 Success")
);
const apiCall2 = new Promise((resolve, reject) =>
  setTimeout(reject, 2000, "API Call 2 Failed")
);
const apiCall3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 3000, "API Call 3 Success")
);

// Using Promise.allSettled to handle all results
Promise.allSettled([apiCall1, apiCall2, apiCall3]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(
        `API Call ${index + 1} succeeded with result: ${result.value}`
      );
    } else {
      console.error(
        `API Call ${index + 1} failed with reason: ${result.reason}`
      );
    }
  });
});
```

### **Explanation:**

1. **`apiCall1`** and **`apiCall3`** will resolve successfully after 1 and 3 seconds, respectively.
2. **`apiCall2`** will reject after 2 seconds with an error.
3. **`Promise.allSettled`** ensures that we get results for all three promises:
   - Even though `apiCall2` fails, it doesn't stop the other promises from being handled.
   - We can process the successful and failed API calls separately in the `.then(results)` block.

### **Expected Output:**

```
API Call 1 succeeded with result: API Call 1 Success
API Call 2 failed with reason: API Call 2 Failed
API Call 3 succeeded with result: API Call 3 Success
```

### **Why `Promise.allSettled` is Better in This Scenario:**

1. **Independent Handling of Results**: It allows you to handle each promise's result individually. You can log successful API calls and handle errors in rejected ones without the entire process being interrupted.
2. **Avoids Fail Fast**: With `Promise.all`, if any promise rejects, the whole chain is immediately rejected. `Promise.allSettled` doesn't care about rejections and ensures you get results for all promises, whether they succeed or fail.
3. **Reliability in Multi-Operation Scenarios**: If your use case involves multiple independent operations (such as interacting with different services), `Promise.allSettled` ensures that you won't lose data from successful operations just because one of them failed.

### **When is `Promise.all` Better?**

- If you need all promises to resolve before proceeding (for example, you are collecting data from multiple sources where all the data is needed for the next step), `Promise.all` is ideal.
- If one promise rejection should halt the process (e.g., all data is required to proceed), `Promise.all` is a better fit.

---

## **Advanced Scenarios**

### 20. Write a function that accepts an array of promises and retries any rejected promise up to 3 times before giving up.

Here’s how to implement a function that accepts an array of promises and retries any rejected promise up to 3 times before giving up:

---

### **Code Example:**

```javascript
function retryPromise(promiseFn, retries = 3) {
  return new Promise((resolve, reject) => {
    const attempt = (remainingTries) => {
      promiseFn()
        .then(resolve) // Resolve if the promise succeeds
        .catch((error) => {
          if (remainingTries === 0) {
            reject(`Failed after ${retries} retries: ${error}`);
          } else {
            console.log(`Retrying... (${retries - remainingTries + 1})`);
            attempt(remainingTries - 1); // Retry
          }
        });
    };

    attempt(retries);
  });
}

function retryAll(promises, retries = 3) {
  return Promise.all(
    promises.map((promiseFn) => retryPromise(promiseFn, retries))
  );
}

// Example usage:
// Simulate a task with random failures
const createTask = (id) => () =>
  new Promise((resolve, reject) => {
    console.log(`Executing task ${id}`);
    setTimeout(() => {
      if (Math.random() > 0.7) {
        resolve(`Task ${id} succeeded`);
      } else {
        reject(`Task ${id} failed`);
      }
    }, 500);
  });

// Array of promise functions
const tasks = [createTask(1), createTask(2), createTask(3), createTask(4)];

retryAll(tasks, 3)
  .then((results) => {
    console.log("All tasks completed successfully:", results);
  })
  .catch((error) => {
    console.error("Some tasks failed:", error);
  });
```

---

### **Explanation**:

1. **`retryPromise`**:

   - Accepts a promise-returning function (`promiseFn`) and the maximum number of retries.
   - Calls the promise and retries it recursively if it fails, up to the given retry limit.

2. **`retryAll`**:

   - Accepts an array of promise-returning functions.
   - Uses `Promise.all` to execute all promises concurrently, each with retry logic applied via `retryPromise`.

3. **Simulated Tasks**:

   - Each task has a random chance of success or failure.
   - Failures are retried up to 3 times.

4. **Error Handling**:
   - If all retries fail for any promise, `retryPromise` rejects with an error message.

---

### **Output Example**:

#### Successful Completion:

```
Executing task 1
Executing task 2
Executing task 3
Executing task 4
Retrying... (1)
Retrying... (1)
Retrying... (2)
All tasks completed successfully: [ 'Task 1 succeeded', 'Task 2 succeeded', 'Task 3 succeeded', 'Task 4 succeeded' ]
```

#### Some Tasks Fail:

```
Executing task 1
Executing task 2
Executing task 3
Executing task 4
Retrying... (1)
Retrying... (1)
Retrying... (2)
Retrying... (3)
Retrying... (2)
Retrying... (3)
Some tasks failed: Failed after 3 retries: Task 2 failed
```

### 21. How can you ensure that a cleanup operation (like closing a connection or hiding a loader) is performed even if a promise is rejected?

To ensure that a cleanup operation is performed regardless of whether a promise is resolved or rejected, you can use the **`finally`** method of a promise. The `finally` block is executed after the promise is settled (either fulfilled or rejected), making it an ideal place for cleanup logic.

---

### **Example: Using `finally` for Cleanup**

```javascript
function simulateTask(success = true) {
  return new Promise((resolve, reject) => {
    console.log("Task started...");
    setTimeout(() => {
      if (success) {
        resolve("Task completed successfully!");
      } else {
        reject("Task failed!");
      }
    }, 2000);
  });
}

function performTask() {
  console.log("Showing loader...");

  simulateTask(false) // Change to `true` to simulate success
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Hiding loader...");
    });
}

// Example usage:
performTask();
```

---

### **How It Works**:

1. **Promise Execution**:

   - `simulateTask` simulates an asynchronous operation, which can either resolve or reject after a delay.

2. **`finally` for Cleanup**:

   - The `finally` block runs **after** the `then` or `catch` block, ensuring that cleanup operations like hiding a loader are executed.

3. **Loader Visibility**:
   - A loader is shown at the start (`console.log("Showing loader...")`) and hidden in the `finally` block, ensuring proper cleanup irrespective of success or failure.

---

### **Output**:

#### If the task succeeds:

```
Showing loader...
Task started...
Task completed successfully!
Hiding loader...
```

#### If the task fails:

```
Showing loader...
Task started...
Task failed!
Hiding loader...
```

---

### **Use Cases for `finally`**:

1. **Hiding Loaders or Spinners**:
   - Show a spinner during an operation and hide it afterward.
2. **Closing Connections**:
   - Ensure database or network connections are closed even if an error occurs.
3. **Releasing Resources**:
   - Free up allocated resources like memory or files.
4. **UI State Reset**:
   - Reset UI elements to their default state after an operation.

The `finally` block is a reliable and clean way to ensure necessary cleanup tasks are always executed.

### 22. Write a fallback mechanism where, if the main API call fails, a backup API is called instead.

Here’s how you can implement a fallback mechanism where a backup API is called if the main API call fails:

---

### **Code Example:**

```javascript
async function fetchFromApi(url) {
  try {
    console.log(`Fetching data from: ${url}`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Failed to fetch from ${url}: ${error.message}`);
  }
}

async function fetchWithFallback(mainUrl, backupUrl) {
  try {
    const data = await fetchFromApi(mainUrl);
    console.log("Successfully fetched data from the main API:", data);
    return data;
  } catch (mainError) {
    console.error(mainError.message);
    console.log("Attempting to fetch data from the backup API...");
    try {
      const backupData = await fetchFromApi(backupUrl);
      console.log("Successfully fetched data from the backup API:", backupData);
      return backupData;
    } catch (backupError) {
      console.error(backupError.message);
      throw new Error("Both the main and backup API calls failed.");
    }
  }
}

// Example Usage:
const mainApi = "https://jsonplaceholder.typicode.com/todos/1"; // Replace with an invalid URL to test fallback
const backupApi = "https://jsonplaceholder.typicode.com/todos/2";

fetchWithFallback(mainApi, backupApi)
  .then((data) => console.log("Final fetched data:", data))
  .catch((error) => console.error("Error during API calls:", error.message));
```

---

### **Explanation**:

1. **`fetchFromApi`**:

   - Makes a fetch request to the given URL.
   - Throws an error if the response is not OK or the fetch fails.

2. **`fetchWithFallback`**:

   - First attempts to fetch data from the main API.
   - If the main API call fails, it logs the error and tries fetching from the backup API.
   - If the backup API call also fails, it throws a final error indicating both attempts failed.

3. **Error Handling**:
   - Errors are caught at each step and appropriately logged to ensure the fallback mechanism is transparent.

---

### **Output**:

#### If the main API succeeds:

```
Fetching data from: https://jsonplaceholder.typicode.com/todos/1
Successfully fetched data from the main API: { ... }
Final fetched data: { ... }
```

#### If the main API fails but the backup API succeeds:

```
Fetching data from: https://invalid-url.com
Failed to fetch from https://invalid-url.com: Failed to fetch
Attempting to fetch data from the backup API...
Fetching data from: https://jsonplaceholder.typicode.com/todos/2
Successfully fetched data from the backup API: { ... }
Final fetched data: { ... }
```

#### If both the main and backup API fail:

```
Fetching data from: https://invalid-url.com
Failed to fetch from https://invalid-url.com: Failed to fetch
Attempting to fetch data from the backup API...
Fetching data from: https://another-invalid-url.com
Failed to fetch from https://another-invalid-url.com: Failed to fetch
Error during API calls: Both the main and backup API calls failed.
```

## **Practical Use Cases**

### 23. Implement a function that simulates an API call to fetch data. If the promise fails, provide a default value as a fallback.

Here’s how you can implement a function that simulates an API call with a fallback default value in case the promise fails:

---

### **Code Example:**

```javascript
async function fetchDataWithFallback(url, defaultValue) {
  try {
    // Simulating an API call
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok (${response.status})`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    return defaultValue; // Return the default value as a fallback
  }
}

// Example usage:
(async () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1"; // Replace with an invalid URL to simulate failure
  const fallbackData = { id: 0, title: "Default Title", completed: false };

  const data = await fetchDataWithFallback(url, fallbackData);
  console.log("Fetched Data:", data);
})();
```

---

### **How It Works**:

1. **Try Block**:

   - Tries to fetch data from the given URL using the `fetch` API.
   - If the response is not OK (status not in the range 200–299), it throws an error.

2. **Catch Block**:

   - Catches any errors (network issues, invalid URLs, etc.).
   - Logs the error and returns the provided `defaultValue`.

3. **Fallback Data**:
   - If the fetch fails, a fallback value (default data) is used.

---

### **Output**:

#### If the API call succeeds:

```javascript
Fetched Data: { id: 1, title: "delectus aut autem", completed: false }
```

#### If the API call fails:

```javascript
Failed to fetch data: Network response was not ok (404)
Fetched Data: { id: 0, title: "Default Title", completed: false }
```

### 24. Write a promise chain that calculates the factorial of a number step by step and logs intermediate results.

Here's an implementation of a promise chain to calculate the factorial of a number step by step while logging intermediate results:

---

### **Code Example:**

```javascript
function factorialPromise(num) {
  return new Promise((resolve, reject) => {
    if (num < 0) {
      reject("Factorial is not defined for negative numbers.");
    } else if (num === 0 || num === 1) {
      resolve(1);
    } else {
      resolve(num);
    }
  });
}

function calculateFactorial(num) {
  let result = 1;

  // Create a chain of promises
  let promise = Promise.resolve();

  for (let i = 1; i <= num; i++) {
    promise = promise
      .then(() => factorialPromise(i))
      .then((factor) => {
        result *= factor;
        console.log(`Step ${i}: ${result}`);
        return result;
      });
  }

  promise
    .then(() => console.log(`Final Result: ${result}`))
    .catch((err) => console.error(err));
}

// Example Usage:
calculateFactorial(5);
```

---

### **How It Works**:

1. **`factorialPromise`**:

   - Resolves with the current step's value (`i`).
   - Rejects for invalid inputs (e.g., negative numbers).

2. **Promise Chain**:

   - Iteratively multiplies the intermediate results in a chain.
   - Logs each step during the calculation.

3. **Final Result**:
   - After the loop finishes, logs the final factorial value.

---

### **Output**:

For `calculateFactorial(5)`:

```
Step 1: 1
Step 2: 2
Step 3: 6
Step 4: 24
Step 5: 120
Final Result: 120
```

---

This approach demonstrates how promises can manage asynchronous workflows even for synchronous tasks like factorial calculations, with flexibility for future integration with asynchronous steps (e.g., fetching step-specific data).

### 25. Simulate a ticket booking system where:

    - Step 1: Check availability.
    - Step 2: Reserve the ticket.
    - Step 3: Confirm payment.
    - Handle any errors in the process gracefully.

Here's an implementation of a ticket booking system simulation using promises that includes three steps: checking availability, reserving the ticket, and confirming payment. Errors in the process are handled gracefully.

---

### **Code Example:**

```javascript
// Simulate ticket booking system

function checkAvailability(ticketId) {
  return new Promise((resolve, reject) => {
    console.log(`Checking availability for ticket ID: ${ticketId}...`);
    setTimeout(() => {
      const available = Math.random() > 0.2; // 80% chance of being available
      if (available) {
        resolve(`Ticket ${ticketId} is available.`);
      } else {
        reject(`Ticket ${ticketId} is not available.`);
      }
    }, 1000);
  });
}

function reserveTicket(ticketId) {
  return new Promise((resolve, reject) => {
    console.log(`Reserving ticket ID: ${ticketId}...`);
    setTimeout(() => {
      const success = Math.random() > 0.1; // 90% chance of success
      if (success) {
        resolve(`Ticket ${ticketId} has been reserved.`);
      } else {
        reject(`Failed to reserve ticket ${ticketId}.`);
      }
    }, 1000);
  });
}

function confirmPayment(ticketId) {
  return new Promise((resolve, reject) => {
    console.log(`Confirming payment for ticket ID: ${ticketId}...`);
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% chance of success
      if (success) {
        resolve(`Payment confirmed for ticket ${ticketId}.`);
      } else {
        reject(`Payment failed for ticket ${ticketId}.`);
      }
    }, 1000);
  });
}

// Main booking process
function bookTicket(ticketId) {
  console.log("Starting ticket booking process...");

  checkAvailability(ticketId)
    .then((message) => {
      console.log(message);
      return reserveTicket(ticketId);
    })
    .then((message) => {
      console.log(message);
      return confirmPayment(ticketId);
    })
    .then((message) => {
      console.log(message);
      console.log("Ticket booking completed successfully!");
    })
    .catch((error) => {
      console.error("Error during ticket booking:", error);
    });
}

// Example Usage:
bookTicket("A123");
```

---

### **How It Works**:

1. **`checkAvailability`**:

   - Simulates checking ticket availability with an 80% success rate.
   - Resolves if available, rejects otherwise.

2. **`reserveTicket`**:

   - Simulates reserving the ticket with a 90% success rate.
   - Resolves on success, rejects otherwise.

3. **`confirmPayment`**:

   - Simulates payment confirmation with a 70% success rate.
   - Resolves if successful, rejects otherwise.

4. **Error Handling**:
   - Any error during the process is caught in the `.catch` block.
   - Gracefully logs an error message.

---

### **Output (Example)**:

When successful:

```
Starting ticket booking process...
Checking availability for ticket ID: A123...
Ticket A123 is available.
Reserving ticket ID: A123...
Ticket A123 has been reserved.
Confirming payment for ticket ID: A123...
Payment confirmed for ticket A123.
Ticket booking completed successfully!
```

When an error occurs (e.g., payment failure):

```
Starting ticket booking process...
Checking availability for ticket ID: A123...
Ticket A123 is available.
Reserving ticket ID: A123...
Ticket A123 has been reserved.
Confirming payment for ticket ID: A123...
Error during ticket booking: Payment failed for ticket A123.
```
