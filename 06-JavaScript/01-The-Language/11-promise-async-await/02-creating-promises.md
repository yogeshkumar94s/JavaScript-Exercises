### Promises in JavaScript: Robust and Future-Proof

**A Promise** represents a value that might be available now, or in the future, or never. It's used for handling asynchronous operations cleanly. Let's focus on **creating and consuming promises** with **best practices**.

---

### **Key Components of a Promise**

1. **States**:
   - `Pending`: Initial state.
   - `Fulfilled`: Completed successfully.
   - `Rejected`: Failed with an error.
2. **Methods**:
   - `.then()`: Handles success.
   - `.catch()`: Handles errors.
   - `.finally()`: Runs code regardless of the promise's outcome.

---

### **Creating Promises**

#### **Example 1: Simple Promise**

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Random success/failure
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject(new Error("Failed to fetch data."));
      }
    }, 1000);
  });
};

// Consuming the promise
fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err.message))
  .finally(() => console.log("Operation complete."));
```

---

### **Best Practices**

1. **Always handle errors** with `.catch()`.
2. Use `.finally()` for cleanup tasks like hiding loaders.
3. Keep promises modular (small and reusable).
4. Chain promises correctly; avoid nesting them unnecessarily.

---

### **Chaining Promises**

For sequential async tasks, chain `.then()` to avoid callback hell.

```javascript
const authenticate = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User authenticated"), 1000);
  });
};

const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User data fetched"), 1000);
  });
};

authenticate()
  .then((message) => {
    console.log(message);
    return fetchUserData(); // Return a new promise
  })
  .then((data) => console.log(data))
  .catch((err) => console.error("Error:", err.message))
  .finally(() => console.log("Process complete."));
```

---

### **Promise.all for Parallel Execution**

Run multiple promises in parallel and wait for all to finish.

```javascript
const fetchPosts = () =>
  new Promise((resolve) => setTimeout(() => resolve("Posts fetched"), 1000));
const fetchComments = () =>
  new Promise((resolve) => setTimeout(() => resolve("Comments fetched"), 1500));

Promise.all([fetchPosts(), fetchComments()])
  .then((results) => console.log("Results:", results))
  .catch((err) => console.error("Error in one of the promises:", err.message));
```

---

### **Promise.race for First Resolved/Rejected**

Useful for timeout scenarios.

```javascript
const slowAPI = new Promise((resolve) =>
  setTimeout(() => resolve("Slow API response"), 3000)
);
const timeout = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("Request timed out")), 2000)
);

Promise.race([slowAPI, timeout])
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
```

---

### **Wrapping Callbacks into Promises**

Sometimes, you need to convert callback-based APIs (e.g., `fs.readFile`) into promises.

```javascript
const fs = require("fs");

const readFileAsPromise = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFileAsPromise("./example.txt")
  .then((content) => console.log("File Content:", content))
  .catch((err) => console.error("Error reading file:", err.message));
```

---

### **Error Handling in Promise Chains**

Avoid unhandled promise rejections by catching errors.

```javascript
const riskyOperation = () => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Something went wrong!")), 1000);
  });
};

// Handle errors gracefully
riskyOperation()
  .then(() => console.log("Success"))
  .catch((err) => {
    console.error("Error caught:", err.message);
    // Perform any necessary recovery logic here
  });
```

---

### **Key Takeaways**

- Promises make async operations predictable.
- Always handle errors to prevent runtime crashes.
- Use utilities like `Promise.all`, `Promise.race` to simplify complex workflows.
- Modularize promises for reusability and maintainability.

---

## Here are 20 practice questions on creating and working with promises to strengthen your understanding:

## **Basic Concepts**

### 1. What is the purpose of a promise in JavaScript?

A **Promise** in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It is used to handle asynchronous operations in a more manageable and readable way, especially for operations like API calls, file reading, or timers, which may take time to complete.

### **Purpose of a Promise:**

1. **Handling Asynchronous Operations**: Promises provide a cleaner way to handle asynchronous operations compared to traditional callback functions. They allow you to avoid "callback hell," which happens when you have deeply nested callbacks.

2. **Better Error Handling**: With promises, you can handle errors more gracefully using `.catch()`, rather than relying on error-first callback patterns.

3. **Chaining**: Promises allow you to chain multiple operations that depend on the outcome of the previous one using `.then()`. This is more readable and maintainable than nesting callbacks.

4. **Avoiding Blocking the Main Thread**: Promises allow asynchronous operations to run in the background without blocking the execution of the main thread. This improves the performance and responsiveness of the application.

### **States of a Promise:**

A promise can be in one of three states:

- **Pending**: The initial state; the operation is still in progress.
- **Resolved/Fulfilled**: The operation completed successfully, and the promise has a result.
- **Rejected**: The operation failed, and the promise has an error reason.

### **Example of a Promise:**

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});

// Consuming the promise
myPromise
  .then((result) => {
    console.log(result); // If the promise resolves successfully
  })
  .catch((error) => {
    console.log(error); // If the promise is rejected
  });
```

### **Explanation of the Example:**

- **Promise Creation**: We create a promise called `myPromise`. It contains an executor function that takes two parameters: `resolve` and `reject`. If the operation is successful, we call `resolve()`. If the operation fails, we call `reject()`.
- **Consuming the Promise**: We use `.then()` to handle the successful resolution of the promise and `.catch()` to handle any errors or rejections.

### **Key Advantages of Using Promises:**

1. **Improved Readability**: Promises allow chaining multiple asynchronous operations, making the code more readable and easier to follow.
2. **Error Propagation**: With promises, you can propagate errors through the chain and handle them in a centralized `.catch()` block.
3. **Avoiding Callback Hell**: Promises help avoid nested callbacks by flattening the asynchronous flow and making it easier to manage.

### 2. Explain the three states of a promise.

A **Promise** in JavaScript has three possible states, which represent its lifecycle and how the asynchronous operation it represents is progressing or completed. These states are:

### 1. **Pending**

- **Definition**: The initial state of the promise. The promise is neither fulfilled (resolved) nor rejected. The asynchronous operation is still in progress.
- **Explanation**: The promise is waiting for an eventual result or failure. This is the state when the promise is first created and before the operation completes.

- **Example**:
  ```javascript
  const myPromise = new Promise((resolve, reject) => {
    // Initially pending until the async operation is done
  });
  ```

### 2. **Fulfilled (Resolved)**

- **Definition**: The promise has been successfully completed, and the operation has finished without errors. The promise now has a value that can be accessed.
- **Explanation**: When the asynchronous operation completes successfully, the promise is marked as "fulfilled," and the result of the operation is passed to the `resolve()` function.

- **Example**:

  ```javascript
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Operation successful!"), 1000); // Resolves after 1 second
  });

  myPromise.then((result) => {
    console.log(result); // "Operation successful!"
  });
  ```

  In this example, after 1 second, the promise resolves successfully with the message "Operation successful!".

### 3. **Rejected**

- **Definition**: The promise has failed, and the operation could not be completed. The promise is now rejected, and the reason for the failure is passed to the `reject()` function.
- **Explanation**: If something goes wrong during the asynchronous operation (like an error or unexpected outcome), the promise is marked as "rejected," and the error or reason for the failure is passed to the `reject()` function.

- **Example**:

  ```javascript
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Operation failed!"), 1000); // Rejects after 1 second
  });

  myPromise.catch((error) => {
    console.log(error); // "Operation failed!"
  });
  ```

  Here, the promise rejects after 1 second with the message "Operation failed!"

### **State Transitions of a Promise:**

1. A promise starts in the **Pending** state.
2. If the operation completes successfully, the promise transitions to the **Fulfilled (Resolved)** state.
3. If the operation fails, the promise transitions to the **Rejected** state.

Once a promise is either **fulfilled** or **rejected**, its state is considered final, and it cannot change again. This makes promises a reliable mechanism for managing the completion of asynchronous operations.

### **Visual Summary of the States:**

| **State**     | **Description**                             | **Action**                      |
| ------------- | ------------------------------------------- | ------------------------------- |
| **Pending**   | The promise is still in progress.           | Asynchronous operation ongoing. |
| **Fulfilled** | The promise is successfully completed.      | Resolves with a value.          |
| **Rejected**  | The promise failed or encountered an error. | Rejects with an error reason.   |

### 3. How do you handle errors in a promise? Give an example.

In JavaScript, you can handle errors in a promise using the `.catch()` method or by passing a rejection handler in the `.then()` method. When a promise is rejected (i.e., an error occurs during the asynchronous operation), you can use these mechanisms to handle the error gracefully.

### **Ways to Handle Errors in a Promise:**

1. **Using `.catch()` Method**:
   The `.catch()` method is used to handle any errors or rejections from a promise. It catches any error that occurs in the promise chain.

2. **Using `.then()` with a Second Callback**:
   You can also pass an error handler directly as the second callback to the `.then()` method. This can be useful for handling specific errors after each `.then()`.

### **Example 1: Handling Errors Using `.catch()`**

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = false; // Change to `true` to test success
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Something went wrong!");
  }
});

// Handling error using .catch()
myPromise
  .then((result) => {
    console.log(result); // This will run if the promise resolves successfully
  })
  .catch((error) => {
    console.error("Error:", error); // This will run if the promise is rejected
  });
```

### **Explanation**:

- In this example, `myPromise` is a promise that will either resolve (if `success` is `true`) or reject (if `success` is `false`).
- If the promise is rejected, the `.catch()` method is invoked, and the error message is logged.

### **Example 2: Handling Errors Using `.then()` with a Rejection Handler**

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = false; // Change to `true` to test success
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Something went wrong!");
  }
});

// Handling error using .then()'s second callback
myPromise.then(
  (result) => {
    console.log(result); // This will run if the promise resolves successfully
  },
  (error) => {
    console.error("Error:", error); // This will run if the promise is rejected
  }
);
```

### **Explanation**:

- Here, the second argument to `.then()` is used to handle the rejection. If the promise is rejected, this callback is called and the error is logged.

### **Example 3: Catching Errors in Promise Chains**

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Data fetch failed!"), 1000); // Simulate a failed API call
  });
};

fetchData()
  .then((data) => {
    console.log(data); // This will not run because the promise is rejected
  })
  .catch((error) => {
    console.log("Error caught:", error); // This will catch the error
  });
```

### **Explanation**:

- The `fetchData` function returns a promise that is intentionally rejected after 1 second.
- The `.catch()` method is used at the end of the promise chain to catch any errors that might occur in the previous steps.

### **Handling Multiple Promises with Error Handling**:

If you have multiple promises, you can handle errors for each promise individually using `.catch()`:

```javascript
const promise1 = Promise.resolve("First Promise Resolved");
const promise2 = Promise.reject("Second Promise Failed");
const promise3 = Promise.resolve("Third Promise Resolved");

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("One of the promises failed:", error); // Catches the rejection from promise2
  });
```

### **Explanation**:

- `Promise.all` waits for all promises to resolve, but if any promise is rejected (like `promise2`), the error is caught in the `.catch()` block.

### **Summary**:

- Use **`.catch()`** to catch and handle errors at the end of the promise chain.
- Alternatively, you can handle errors in individual `.then()` calls by passing a rejection handler as the second argument to `.then()`.
- **Error handling with promises** ensures that your code can deal with asynchronous failures gracefully, without breaking the flow of execution.

### 4. Write a promise that resolves with "Hello, World!" after 2 seconds.

Here is an example of a promise that resolves with `"Hello, World!"` after a 2-second delay:

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, World!"); // Resolves with "Hello, World!" after 2 seconds
  }, 2000);
});

// Consuming the promise
myPromise.then((result) => {
  console.log(result); // "Hello, World!" will be logged after 2 seconds
});
```

### Explanation:

- **Promise Creation**: A new promise is created, and inside its executor function, we use `setTimeout` to delay the resolution by 2 seconds (2000 milliseconds).
- **`resolve()`**: After the 2-second delay, `resolve("Hello, World!")` is called, which resolves the promise with the message `"Hello, World!"`.
- **Consuming the Promise**: The `.then()` method is used to log the result once the promise resolves.

This will output `"Hello, World!"` after 2 seconds.

### 5. How can you execute cleanup code regardless of the promise's result?

To execute cleanup code regardless of whether a promise resolves or rejects, you can use the `.finally()` method. The `.finally()` method allows you to specify a block of code that will be executed once the promise is settled (either resolved or rejected), making it ideal for cleanup operations like closing a connection, hiding a loading indicator, or clearing timeouts.

### **Syntax**:

```javascript
promise.finally(() => {
  // Cleanup code here
});
```

### **Example:**

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = false; // Change to true to test resolution
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Something went wrong!");
  }
});

myPromise
  .then((result) => {
    console.log(result); // Will run if resolved
  })
  .catch((error) => {
    console.error(error); // Will run if rejected
  })
  .finally(() => {
    console.log("Cleanup code executed!"); // Always runs, regardless of the promise result
  });
```

### **Explanation**:

- **`finally()`**: The `finally()` block is executed after the promise is either resolved or rejected, ensuring that cleanup code (like logging or UI updates) is executed no matter what.
- In this case, `"Cleanup code executed!"` will be logged regardless of whether the promise was resolved with `"Operation was successful!"` or rejected with `"Something went wrong!"`.

### **Use Cases for `.finally()`**:

- **Hiding a loading spinner**: If you're making an API call and displaying a loading indicator, you can hide the spinner once the operation is complete, regardless of success or failure.

```javascript
fetchData().finally(() => {
  hideLoadingSpinner(); // Always hide the spinner after the operation
});
```

- **Closing connections or cleaning up resources**: If you're dealing with network connections, file handlers, or other resources, `.finally()` ensures the cleanup happens even if an error occurs.

```javascript
openConnection()
  .then(() => {
    // Do something with the connection
  })
  .catch((err) => {
    console.error("Connection failed:", err);
  })
  .finally(() => {
    closeConnection(); // Ensure connection is closed regardless of success or failure
  });
```

## **Creating Promises**

### 6. Create a promise that simulates a database fetch operation, resolving successfully after 1 second.

Here’s an example of a promise simulating a database fetch operation that resolves successfully after 1 second:

---

### Code Example:

```javascript
const fetchFromDatabase = (query) => {
  return new Promise((resolve, reject) => {
    console.log(`Executing query: ${query}`);
    setTimeout(() => {
      // Simulate a successful fetch operation
      const result = { id: 1, name: "John Doe", email: "john.doe@example.com" };
      resolve(result); // Resolve with the "fetched" data
    }, 1000); // Simulate 1-second delay
  });
};

// Example usage
fetchFromDatabase("SELECT * FROM users WHERE id = 1")
  .then((data) => {
    console.log("Database fetch successful:", data);
  })
  .catch((error) => {
    console.error("Database fetch failed:", error);
  });
```

---

### Explanation:

1. **`fetchFromDatabase` Function:**

   - Returns a `Promise`.
   - Simulates executing a database query by logging the query string.
   - After 1 second (using `setTimeout`), it resolves with a mock result.

2. **Simulated Result:**

   - An object representing a user record (e.g., `id`, `name`, `email`).

3. **Usage:**
   - The `.then()` block handles the resolved promise (successful fetch).
   - The `.catch()` block would handle any errors, but no rejection occurs here since the fetch is always successful.

---

### Output:

```
Executing query: SELECT * FROM users WHERE id = 1
Database fetch successful: { id: 1, name: 'John Doe', email: 'john.doe@example.com' }
```

---

This can be extended to simulate more complex scenarios, like conditional rejections for query errors or empty results.

### 7. Write a promise that rejects with an error message if the input value is not a number.

Here’s an example of a promise that rejects with an error message if the input value is not a number:

---

### Code Example:

```javascript
const checkNumber = (value) => {
  return new Promise((resolve, reject) => {
    if (typeof value === "number") {
      resolve(`The value ${value} is a valid number.`);
    } else {
      reject(new Error(`Invalid input: ${value} is not a number.`));
    }
  });
};

// Example usage
checkNumber(42)
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

checkNumber("hello")
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
```

---

### Explanation:

1. **`checkNumber` Function:**

   - Accepts a `value` as input.
   - Returns a promise:
     - Resolves with a success message if the value is a number.
     - Rejects with an error if the value is not a number.

2. **Validation:**

   - The `typeof` operator checks if the input is a number.

3. **Error Handling:**
   - If the promise rejects, the `catch` block logs the error message using `error.message`.

---

### Output:

For `checkNumber(42)`:

```
Success: The value 42 is a valid number.
```

For `checkNumber("hello")`:

```
Error: Invalid input: hello is not a number.
```

### 8. Convert a callback-based function into a promise using an example.

To convert a callback-based function into a promise, you can use the `Promise` constructor. Here's an example where a callback-based `readFile` function (from Node.js) is wrapped in a promise:

---

### Callback-Based Function:

```javascript
const fs = require("fs");

// Callback-based function
fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File contents:", data);
  }
});
```

---

### Converted to a Promise:

```javascript
const fs = require("fs");

const readFilePromise = (filePath, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        reject(err); // Reject the promise if an error occurs
      } else {
        resolve(data); // Resolve the promise with the file data
      }
    });
  });
};

// Example usage
readFilePromise("example.txt", "utf-8")
  .then((data) => {
    console.log("File contents:", data);
  })
  .catch((error) => {
    console.error("Error reading file:", error);
  });
```

---

### Explanation:

1. **Callback-Based `fs.readFile`:**

   - The `fs.readFile` function reads a file and uses a callback to handle the result (`err` or `data`).

2. **Promise Wrapper:**

   - The `readFilePromise` function wraps `fs.readFile` in a `Promise`.
   - If `fs.readFile` calls the callback with an error, the promise is **rejected**.
   - If `fs.readFile` calls the callback with data, the promise is **resolved**.

3. **Usage:**
   - Use `.then()` to handle the resolved value (file contents).
   - Use `.catch()` to handle errors (e.g., file not found).

---

### Output:

If `example.txt` contains `"Hello, World!"`:

```
File contents: Hello, World!
```

If the file does not exist:

```
Error reading file: [Error: ENOENT: no such file or directory, open 'example.txt']
```

### 9. Create a reusable promise function that checks if a number is odd or even and resolves/rejects accordingly.

You can create a reusable promise function that checks if a number is odd or even by resolving or rejecting based on the result. Here's how you can implement it:

---

### Code Example:

```javascript
const checkOddOrEven = (number) => {
  return new Promise((resolve, reject) => {
    if (typeof number !== "number") {
      reject(new Error("Input is not a number"));
    } else if (number % 2 === 0) {
      resolve(`${number} is even`);
    } else {
      resolve(`${number} is odd`);
    }
  });
};

// Example usage
checkOddOrEven(4)
  .then((message) => {
    console.log(message); // Output: "4 is even"
  })
  .catch((error) => {
    console.error(error.message);
  });

checkOddOrEven(7)
  .then((message) => {
    console.log(message); // Output: "7 is odd"
  })
  .catch((error) => {
    console.error(error.message);
  });

checkOddOrEven("hello")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error.message); // Output: "Input is not a number"
  });
```

---

### Explanation:

1. **`checkOddOrEven` Function:**

   - Takes a `number` as input and returns a promise.
   - If the input is not a number, it rejects the promise with an error message.
   - If the number is even (`number % 2 === 0`), it resolves with a message indicating the number is even.
   - If the number is odd, it resolves with a message indicating the number is odd.

2. **Usage:**
   - The `.then()` method handles the resolved promise with a message about whether the number is odd or even.
   - The `.catch()` method handles the rejection (if the input is not a number).

---

### Output:

- For `checkOddOrEven(4)`:

  ```
  4 is even
  ```

- For `checkOddOrEven(7)`:

  ```
  7 is odd
  ```

- For `checkOddOrEven("hello")`:
  ```
  Input is not a number
  ```

### 10. Explain what happens if neither `resolve` nor `reject` is called inside a promise.

If neither `resolve` nor `reject` is called inside a promise, the promise will remain in a **pending** state forever. This means that the promise will never transition to either a "resolved" (fulfilled) or "rejected" state, and any `.then()` or `.catch()` handlers attached to it will never be executed.

### Key Points:

- A promise can have three states:

  - **Pending**: The promise is still in progress and has not been settled (either resolved or rejected).
  - **Resolved (Fulfilled)**: The promise is successfully completed with a value, and the `.then()` handlers are called.
  - **Rejected**: The promise is failed with a reason (an error), and the `.catch()` handlers are called.

- If neither `resolve` nor `reject` is called:
  - The promise never moves out of the "pending" state.
  - Any `.then()` or `.catch()` methods will **never be triggered**.

### Example:

```javascript
const pendingPromise = new Promise((resolve, reject) => {
  // Neither resolve nor reject is called
});

pendingPromise
  .then(() => {
    console.log("This will never be executed.");
  })
  .catch(() => {
    console.log("This will never be executed either.");
  });
```

### What Happens:

- In the above example, `pendingPromise` never transitions to resolved or rejected because neither `resolve()` nor `reject()` is called inside the executor function.
- As a result, the `then()` and `catch()` handlers will **never execute**, and the promise will remain stuck in the "pending" state indefinitely.

### Why is this an issue?

- **Unsettled promises** can lead to potential memory leaks or logic bugs, especially when you expect some outcome (either resolved or rejected) but nothing happens.
- To avoid this, always ensure that a promise is either resolved or rejected, and consider adding proper handling (like a timeout or fallback) to deal with cases where a promise might hang indefinitely.

### Example with Timeout to Prevent Hanging:

You can introduce a mechanism to reject a promise if it's taking too long:

```javascript
const fetchDataWithTimeout = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched!");
  }, 3000); // Simulate long operation

  // Timeout rejection if data takes too long
  setTimeout(() => {
    reject("Data fetch timeout!");
  }, 2000); // Reject after 2 seconds
});

fetchDataWithTimeout
  .then((data) => {
    console.log(data); // Won't be reached if timeout occurs first
  })
  .catch((error) => {
    console.error(error); // Will catch "Data fetch timeout!" if timeout occurs
  });
```

---

### Summary:

- **Unsettled promises** remain in the pending state and won't trigger `.then()` or `.catch()`.
- To prevent this, ensure that you always call `resolve()` or `reject()` inside the executor function or implement a timeout/fallback mechanism.

---

## **Chaining Promises**

### 11. Write a chain of promises to simulate these tasks:

    - Authenticate a user.
    - Fetch their data.
    - Log a success message.

Here’s a simple example demonstrating how to chain promises to simulate user authentication, fetching data, and logging a success message.

### Code Example:

```javascript
// Simulate user authentication
const authenticateUser = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "user" && password === "password") {
        resolve("User authenticated"); // Successfully authenticated
      } else {
        reject("Authentication failed"); // Invalid credentials
      }
    }, 1000);
  });
};

// Simulate fetching user data
const fetchUserData = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "user") {
        resolve({ name: "John Doe", age: 30 }); // Simulate user data
      } else {
        reject("User data not found");
      }
    }, 1000);
  });
};

// Chaining promises to simulate the tasks
authenticateUser("user", "password")
  .then((authMessage) => {
    console.log(authMessage); // Log authentication message
    return fetchUserData("user"); // Fetch user data after authentication
  })
  .then((userData) => {
    console.log("User data fetched:", userData); // Log the user data
    console.log("Success!"); // Log success message after everything is completed
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors in the chain
  });
```

---

### Explanation:

1. **`authenticateUser`:** This function returns a promise that simulates authenticating a user. It resolves if the correct credentials are provided, and rejects if the credentials are invalid.
2. **`fetchUserData`:** This function returns a promise that simulates fetching user data. If the user exists, it resolves with some sample data, and if not, it rejects with an error.

3. **Chaining Promises:**
   - The first `.then()` handles the result of `authenticateUser`. If authentication is successful, it proceeds to the next task (fetching user data).
   - The second `.then()` handles the resolved data from `fetchUserData` and logs it, followed by a success message.
   - The `.catch()` block catches any errors that occur in the chain (e.g., authentication failure or missing user data).

---

### Output (if successful authentication and data fetch):

```
User authenticated
User data fetched: { name: 'John Doe', age: 30 }
Success!
```

### Output (if authentication fails):

```
Error: Authentication failed
```

### 12. What happens if a `.then()` block throws an error? How can it be handled?

When a `.then()` block throws an error, the promise chain will move to the nearest `.catch()` block (or the next `.then()` block that handles errors). The error will cause the promise to be rejected, and the promise chain will stop executing further `.then()` blocks until the error is caught.

### Key Points:

- **If an error is thrown inside a `.then()` block**:

  - The promise returned by that `.then()` block will be **rejected**.
  - The error will propagate down the chain until it is caught by a `.catch()` handler or another `.then()` block that handles errors.

- **Handling the error**:
  - Errors thrown in a `.then()` block should be caught either using `.catch()` at the end of the chain or by using a `.then()` block that handles errors (using the second parameter of `.then()`).

### Example:

```javascript
// A promise that resolves after 1 second
const resolveAfterOneSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task completed!");
    }, 1000);
  });
};

// A promise chain with a thrown error inside a .then() block
resolveAfterOneSecond()
  .then((message) => {
    console.log(message); // Logs "Task completed!"
    throw new Error("Something went wrong!"); // Throw an error in the .then() block
  })
  .then((message) => {
    console.log("This will not be executed.");
  })
  .catch((error) => {
    console.error("Error caught:", error.message); // Catches the error from the previous .then() block
  });
```

---

### Explanation:

1. The first `.then()` block resolves the promise with the message `"Task completed!"` and logs it.
2. In the same `.then()` block, an error is **thrown** (`throw new Error("Something went wrong!")`), which causes the promise to be rejected.
3. The next `.then()` block doesn't get executed because the promise is rejected due to the error.
4. The `.catch()` block catches the error and logs `"Error caught: Something went wrong!"`.

---

### Output:

```
Task completed!
Error caught: Something went wrong!
```

---

### Handling Errors:

- **Using `.catch()`**: The `.catch()` block will catch any error thrown in the promise chain and handle it.
- **Using the second parameter of `.then()`**: You can provide an error handler directly in the `.then()` block as the second argument.

### Example with error handler in `.then()`:

```javascript
resolveAfterOneSecond()
  .then((message) => {
    console.log(message);
    throw new Error("Something went wrong!");
  })
  .then(
    (message) => {
      console.log("This will not be executed.");
    },
    (error) => {
      console.error("Handled error in second .then():", error.message); // Handles the error here
    }
  );
```

---

### Summary:

- When an error is thrown in a `.then()` block, it causes the promise to be rejected.
- The error can be handled either by using a `.catch()` block or by passing an error handler as the second argument in `.then()`.

### 13. Create a promise chain where one step depends on the result of the previous step.

Here’s an example of a promise chain where each step depends on the result of the previous step. We’ll simulate a scenario where a user logs in, their profile is fetched, and then some user-specific data is retrieved based on the profile information.

### Example:

```javascript
// Simulate user authentication
const authenticateUser = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "user" && password === "password") {
        resolve({ userId: 1, username: "user" }); // Successfully authenticated
      } else {
        reject("Authentication failed");
      }
    }, 1000);
  });
};

// Simulate fetching user profile data
const fetchUserProfile = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ name: "John Doe", age: 30 }); // Simulate profile data
      } else {
        reject("Profile not found");
      }
    }, 1000);
  });
};

// Simulate fetching user-specific data
const fetchUserData = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "John Doe") {
        resolve({
          posts: ["Post 1", "Post 2"],
          friends: ["Friend1", "Friend2"],
        }); // Simulate user data
      } else {
        reject("User data not found");
      }
    }, 1000);
  });
};

// Promise chain where each step depends on the previous one
authenticateUser("user", "password")
  .then((authResult) => {
    console.log("Authentication successful:", authResult);
    return fetchUserProfile(authResult.userId); // Pass userId to the next step
  })
  .then((profile) => {
    console.log("User profile fetched:", profile);
    return fetchUserData(profile.name); // Pass name to the next step
  })
  .then((userData) => {
    console.log("User data fetched:", userData); // Final result
    console.log("Success! All tasks completed.");
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors in the chain
  });
```

---

### Explanation:

1. **Step 1 - `authenticateUser`:** This function simulates user authentication. It returns a promise that resolves with an object containing the `userId` and `username` if the credentials are correct. If authentication fails, it rejects with an error message.

2. **Step 2 - `fetchUserProfile`:** This function simulates fetching user profile information. It takes the `userId` from the previous step and returns the profile data if the `userId` is valid.

3. **Step 3 - `fetchUserData`:** This function simulates fetching additional user data (like posts and friends). It takes the `name` from the previous step and returns some user-specific data.

4. **Chaining the Promises:**
   - The first `.then()` block handles the result of `authenticateUser`. If successful, it passes the `userId` to the next step.
   - The second `.then()` block handles the result of `fetchUserProfile`. If successful, it passes the `name` to the next step.
   - The third `.then()` block handles the result of `fetchUserData` and logs the final user data.
   - The `.catch()` block catches any errors that occur at any step and logs the error.

---

### Output (if successful):

```
Authentication successful: { userId: 1, username: 'user' }
User profile fetched: { name: 'John Doe', age: 30 }
User data fetched: { posts: [ 'Post 1', 'Post 2' ], friends: [ 'Friend1', 'Friend2' ] }
Success! All tasks completed.
```

---

### Output (if authentication fails):

```
Error: Authentication failed
```

### Output (if profile fetching fails):

```
Error: Profile not found
```

---

### Summary:

In this example, each step in the promise chain depends on the result of the previous step, allowing for sequential asynchronous tasks. The `.then()` handlers pass data from one promise to the next, enabling dependent operations to be performed in order.

### 14. Refactor nested promises into a proper chain structure.

Nested promises can lead to what's often referred to as **"callback hell"** or **"pyramid of doom"**, where the code becomes hard to read and maintain. Refactoring nested promises into a proper chain structure makes the code cleaner, easier to follow, and more maintainable.

### Example of Nested Promises:

Here's an example where we have nested promises, and we'll refactor it into a proper chain structure:

```javascript
// Simulate user authentication
const authenticateUser = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "user" && password === "password") {
        resolve({ userId: 1, username: "user" }); // Successfully authenticated
      } else {
        reject("Authentication failed");
      }
    }, 1000);
  });
};

// Simulate fetching user profile data
const fetchUserProfile = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ name: "John Doe", age: 30 }); // Simulate profile data
      } else {
        reject("Profile not found");
      }
    }, 1000);
  });
};

// Simulate fetching user-specific data
const fetchUserData = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "John Doe") {
        resolve({
          posts: ["Post 1", "Post 2"],
          friends: ["Friend1", "Friend2"],
        }); // Simulate user data
      } else {
        reject("User data not found");
      }
    }, 1000);
  });
};

// Refactored Nested Promises to a proper chain structure
authenticateUser("user", "password")
  .then((authResult) => {
    console.log("Authentication successful:", authResult);
    return fetchUserProfile(authResult.userId); // Return the result to chain next promise
  })
  .then((profile) => {
    console.log("User profile fetched:", profile);
    return fetchUserData(profile.name); // Return the result to chain next promise
  })
  .then((userData) => {
    console.log("User data fetched:", userData); // Final result
    console.log("Success! All tasks completed.");
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any error that occurs in any step
  });
```

### Explanation of Changes:

1. **Before Refactoring (Nested Promises)**:

   - We were calling promises inside other promises (nested). This can become difficult to maintain as the depth of nesting increases.
   - Each promise had its own `.then()` and `.catch()` inside other promises, making the code hard to read.

2. **After Refactoring (Promise Chain)**:
   - The promises are now chained using `.then()` and `.catch()`, making the flow of operations linear and easy to follow.
   - Each `.then()` block returns a promise, which is automatically chained to the next `.then()` in the chain.
   - If any promise fails, the `.catch()` block catches the error and handles it.

### Output (if successful):

```
Authentication successful: { userId: 1, username: 'user' }
User profile fetched: { name: 'John Doe', age: 30 }
User data fetched: { posts: [ 'Post 1', 'Post 2' ], friends: [ 'Friend1', 'Friend2' ] }
Success! All tasks completed.
```

### Output (if authentication fails):

```
Error: Authentication failed
```

### Output (if profile fetching fails):

```
Error: Profile not found
```

---

### Summary:

- **Nested Promises**: Leads to hard-to-read code and makes it more difficult to manage errors and logic.
- **Promise Chain**: Makes the code cleaner, linear, and easier to understand by chaining `.then()` handlers in sequence.
- Always return promises inside `.then()` blocks to maintain a smooth flow in the chain.

### 15. What are the benefits of chaining promises instead of nesting them?

Chaining promises offers several benefits over nesting them. Here's a breakdown of the key advantages:

### 1. **Improved Readability and Maintainability**

- **Chaining** makes the code linear, easier to follow, and more natural to read, as each step in the promise chain is connected sequentially.
- **Nesting** can lead to complex indentation and a "pyramid of doom," making the code harder to understand, especially when many asynchronous operations are involved.

**Example (Chaining):**

```javascript
authenticateUser()
  .then((user) => fetchUserProfile(user))
  .then((profile) => fetchUserData(profile))
  .then((data) => console.log("User Data:", data))
  .catch((error) => console.error("Error:", error));
```

**Example (Nesting):**

```javascript
authenticateUser(function (err, user) {
  if (err) {
    return console.error("Authentication failed");
  }
  fetchUserProfile(user, function (err, profile) {
    if (err) {
      return console.error("Profile fetch failed");
    }
    fetchUserData(profile, function (err, data) {
      if (err) {
        return console.error("Data fetch failed");
      }
      console.log("User Data:", data);
    });
  });
});
```

### 2. **Error Handling**

- **Chaining** allows centralized error handling using a single `.catch()` at the end of the promise chain, which makes it simpler to manage errors.
- **Nesting** requires multiple `.catch()` or `try-catch` blocks within each nested function, leading to duplicated error handling code.

**Example (Chaining with centralized error handling):**

```javascript
authenticateUser()
  .then(fetchUserProfile)
  .then(fetchUserData)
  .catch((error) => console.error("Error occurred:", error));
```

**Example (Nesting with multiple error handling):**

```javascript
authenticateUser(function (err, user) {
  if (err) return console.error("Authentication error");
  fetchUserProfile(user, function (err, profile) {
    if (err) return console.error("Profile fetch error");
    fetchUserData(profile, function (err, data) {
      if (err) return console.error("Data fetch error");
      console.log(data);
    });
  });
});
```

### 3. **Avoiding the "Pyramid of Doom"**

- **Chaining** results in a linear structure that avoids deep nesting, making the code more compact and easier to manage.
- **Nesting** increases indentation with each level of nested callbacks, leading to a "pyramid" shape that can become difficult to follow.

**Chained promises** are straightforward and follow a simple top-to-bottom order. In contrast, nested callbacks create multiple levels of indentation, increasing complexity.

### 4. **Code Reusability**

- **Chaining** promotes reusability. If any step in the chain is reusable, it can be isolated as a separate function and simply chained where needed.
- **Nesting** tightly couples the callbacks, which makes it harder to reuse individual steps independently.

**Example (Chaining with reusable functions):**

```javascript
const processUserData = (userId) =>
  authenticateUser(userId)
    .then(fetchUserProfile)
    .then(fetchUserData)
    .catch(console.error);

processUserData("user1");
```

### 5. **Easier to Follow Asynchronous Flow**

- **Chaining** allows the code to follow an easy-to-understand flow of asynchronous operations where each step depends on the previous one.
- **Nesting** creates multiple levels of functions, making the flow of control harder to trace, especially when the logic is more complicated.

### 6. **Composability**

- **Chaining** can make your functions more composable. Promises are designed to be chained together, making it easy to combine different asynchronous operations.
- **Nesting** makes it harder to compose individual tasks because the nested structure isn't easily reusable outside of the context.

---

### Summary of Benefits:

| Benefit            | Chaining                            | Nesting                                                   |
| ------------------ | ----------------------------------- | --------------------------------------------------------- |
| **Readability**    | Linear and easy to follow           | Difficult to follow with deep nesting                     |
| **Error Handling** | Centralized with `.catch()`         | Requires separate error handling for each nested function |
| **Code Structure** | Flat and sequential                 | Deeply nested (pyramid shape)                             |
| **Reusability**    | More reusable, each step is modular | Hard to reuse individual steps                            |
| **Composability**  | Easy to combine async functions     | Difficult to compose without nested callbacks             |

---

### Conclusion:

Chaining promises creates cleaner, more readable, and maintainable code. It avoids issues like callback hell, centralized error handling, and provides a more composable structure. Nested promises, on the other hand, quickly become hard to manage, especially with complex asynchronous flows.

---

## **Advanced Scenarios**

### 16. Write a promise using `Promise.all` to fetch two APIs in parallel and log their results.

Here’s how you can use `Promise.all` to fetch data from two APIs in parallel and log their results:

---

### Code Example:

```javascript
// Example function to fetch two APIs in parallel
const fetchTwoAPIs = async () => {
  const api1 = "https://jsonplaceholder.typicode.com/posts/1";
  const api2 = "https://jsonplaceholder.typicode.com/users/1";

  try {
    // Use Promise.all to fetch both APIs in parallel
    const [response1, response2] = await Promise.all([
      fetch(api1).then((res) => res.json()),
      fetch(api2).then((res) => res.json()),
    ]);

    // Log the results
    console.log("API 1 Response:", response1);
    console.log("API 2 Response:", response2);
  } catch (error) {
    console.error("Error fetching APIs:", error);
  }
};

// Call the function
fetchTwoAPIs();
```

---

### Explanation:

1. **`Promise.all`:**

   - Combines multiple promises into a single promise that resolves when all included promises resolve.
   - If any promise rejects, `Promise.all` immediately rejects with the error from the first rejected promise.

2. **Fetching APIs in Parallel:**

   - Two API URLs (`api1` and `api2`) are provided.
   - The `fetch` function is used to make the requests. Each `fetch` returns a promise, which resolves to a response object.
   - The `res.json()` method parses the JSON data from the response.

3. **`await Promise.all`:**

   - `Promise.all` waits for both `fetch` calls to complete.
   - The resolved results (JSON data) from both APIs are destructured into `response1` and `response2`.

4. **Error Handling:**
   - The `try...catch` block captures any errors, such as network issues or invalid URLs, and logs them.

---

### Output:

If both APIs respond successfully, you’ll see something like this:

```javascript
API 1 Response: { id: 1, title: "some post title", ... }
API 2 Response: { id: 1, name: "Leanne Graham", ... }
```

If an error occurs:

```javascript
Error fetching APIs: [Error message]
```

---

### 17. How does `Promise.race` differ from `Promise.all`? Provide an example.

### Difference Between `Promise.all` and `Promise.race`

| **Aspect**   | **`Promise.all`**                                                        | **`Promise.race`**                                                               |
| ------------ | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| **Behavior** | Waits for **all promises** to resolve (or rejects if any promise fails). | Resolves or rejects with the **first settled promise** (resolve or reject).      |
| **Use Case** | Used when all results are needed to proceed further.                     | Used when you only need the fastest result (e.g., timeout or quickest response). |
| **Outcome**  | Returns an array of all resolved values.                                 | Returns the value or error of the first settled promise.                         |

---

### Example:

#### **Using `Promise.all`**

```javascript
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 2000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 3000)
);

Promise.all([promise1, promise2])
  .then((results) => console.log("Promise.all results:", results)) // Both promises need to resolve
  .catch((error) => console.error("Promise.all error:", error));
```

**Output (after 3 seconds):**

```
Promise.all results: [ 'Promise 1 resolved', 'Promise 2 resolved' ]
```

---

#### **Using `Promise.race`**

```javascript
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 2000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 3000)
);

Promise.race([promise1, promise2])
  .then((result) => console.log("Promise.race result:", result)) // Only the first settled promise
  .catch((error) => console.error("Promise.race error:", error));
```

**Output (after 2 seconds):**

```
Promise.race result: Promise 1 resolved
```

---

### Explanation:

1. **`Promise.all`:**

   - Both `promise1` and `promise2` must resolve. The results are combined into an array and logged.
   - If any promise rejects, the entire `Promise.all` chain rejects immediately.

2. **`Promise.race`:**
   - As soon as one promise settles (either resolves or rejects), the returned promise resolves or rejects with that value.
   - In this case, `promise1` resolves first after 2 seconds, so its value is logged.

---

### When to Use:

- **`Promise.all`:** When you need results from multiple promises (e.g., fetching data from multiple APIs).
- **`Promise.race`:** When you care about the first result (e.g., timeout handling or picking the fastest API response).

---

### 18. Implement a timeout mechanism using `Promise.race` that rejects if an API call takes too long.

Here’s how you can use `Promise.race` to implement a timeout mechanism for an API call:

---

### Code Example:

```javascript
const fetchWithTimeout = (url, timeout) => {
  // Create a promise for the API call
  const apiPromise = fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });

  // Create a timeout promise
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), timeout)
  );

  // Use Promise.race to race the API call against the timeout
  return Promise.race([apiPromise, timeoutPromise]);
};

// Example usage
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

fetchWithTimeout(apiUrl, 2000) // 2-second timeout
  .then((data) => console.log("API response:", data))
  .catch((error) => console.error("Error:", error));
```

---

### Explanation:

1. **`fetchWithTimeout`:**

   - Accepts a URL (`url`) and a timeout duration (`timeout`) in milliseconds.
   - Two promises are created:
     - `apiPromise`: Makes the API call using `fetch`. If the call is successful, it resolves with the parsed JSON response. If the status is not OK, it throws an error.
     - `timeoutPromise`: Uses `setTimeout` to reject with an error after the specified timeout.

2. **`Promise.race`:**

   - Races the `apiPromise` and the `timeoutPromise`.
   - If the API call completes before the timeout, `apiPromise` resolves with the data.
   - If the timeout occurs first, `timeoutPromise` rejects with a "Request timed out" error.

3. **Error Handling:**
   - The `catch` block handles both timeout errors and HTTP errors.

---

### Output:

- **If the API responds within 2 seconds:**

  ```
  API response: { userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", ... }
  ```

- **If the API takes longer than 2 seconds:**
  ```
  Error: Request timed out
  ```

---

### 19. Write a function that accepts an array of promises and resolves when any one of them succeeds.

You can create a function that accepts an array of promises and resolves as soon as any one of them succeeds using `Promise.any`. Here's how:

---

### Code Example:

```javascript
const resolveAny = (promises) => {
  return Promise.any(promises);
};

// Example usage
const promise1 = new Promise((_, reject) =>
  setTimeout(() => reject("Promise 1 failed"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 succeeded"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 succeeded"), 3000)
);

resolveAny([promise1, promise2, promise3])
  .then((result) => console.log("First successful result:", result))
  .catch((error) => console.error("All promises failed:", error));
```

---

### Explanation:

1. **`Promise.any`:**

   - Resolves as soon as any promise in the array resolves successfully.
   - If all promises reject, it rejects with an `AggregateError`, containing the errors from all the rejected promises.

2. **How It Works:**

   - `promise1` rejects after 1 second.
   - `promise2` resolves after 2 seconds.
   - `promise3` resolves after 3 seconds.
   - `Promise.any` will resolve with the result of `promise2` since it is the first to succeed.

3. **Error Handling:**
   - If all promises reject, the `catch` block handles the error with details about all the rejections.

---

### Output:

- **If at least one promise resolves:**

  ```
  First successful result: Promise 2 succeeded
  ```

- **If all promises reject:**
  ```
  All promises failed: AggregateError: All promises were rejected
  ```

---

### Compatibility Note:

- `Promise.any` is available in modern JavaScript environments (ES2021 and later). If you need to support older environments, you can achieve similar functionality with a custom implementation.

---

### 20. What are unhandled promise rejections, and how can they be avoided?

### **What Are Unhandled Promise Rejections?**

An **unhandled promise rejection** occurs when a promise is rejected, but no `catch` block or equivalent error handler is attached to handle the error. This can lead to:

- **Silent failures** in code execution.
- Warnings or errors in modern JavaScript environments (e.g., Node.js or browsers).

Example of an unhandled rejection:

```javascript
const promise = new Promise((_, reject) => {
  reject("Something went wrong!");
});
// No `catch` attached, so this rejection is unhandled
```

---

### **Why Are Unhandled Rejections a Problem?**

1. They may cause unexpected behaviors or crashes in production.
2. Starting with Node.js 15, unhandled rejections terminate the process unless properly handled.
3. They make debugging harder, as the rejection reason may not be logged or addressed.

---

### **How to Avoid Unhandled Promise Rejections**

1. **Always Attach `.catch` to Promises**
   Add a `catch` block to handle errors:

   ```javascript
   const promise = new Promise((_, reject) => {
     reject("Something went wrong!");
   });

   promise.catch((error) => {
     console.error("Caught error:", error);
   });
   ```

2. **Use `try...catch` with `async/await`**
   When using `async/await`, wrap the code in a `try...catch` block:

   ```javascript
   const asyncFunction = async () => {
     try {
       const result = await Promise.reject("Something went wrong!");
     } catch (error) {
       console.error("Caught error:", error);
     }
   };

   asyncFunction();
   ```

3. **Handle Errors Globally**
   Attach a global handler for unhandled promise rejections. This is useful for debugging during development:

   ```javascript
   process.on("unhandledRejection", (reason, promise) => {
     console.error("Unhandled Rejection at:", promise, "reason:", reason);
   });
   ```

   In browsers:

   ```javascript
   window.addEventListener("unhandledrejection", (event) => {
     console.error("Unhandled Rejection:", event.reason);
   });
   ```

4. **Chain Promises Properly**
   Ensure all promises in a chain are either handled or return to propagate errors up the chain:

   ```javascript
   Promise.resolve()
     .then(() => {
       throw new Error("Error in chain");
     })
     .catch((error) => {
       console.error("Caught error:", error);
     });
   ```

5. **Validate Error-Handling in Complex Workflows**
   For workflows with multiple nested or concurrent promises, ensure each promise has proper error handling.

---

### **Example: Avoiding Unhandled Rejections**

```javascript
const fetchData = () => {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Fetch failed"), 1000);
  });
};

// Proper error handling
fetchData()
  .then((data) => console.log("Data:", data))
  .catch((error) => console.error("Error:", error));
```

---

### **Key Takeaways**

- Always handle promise rejections with `.catch` or `try...catch`.
- Use global handlers as a fallback for unhandled rejections in development.
- Ensure all promises in your application have a clear path for error handling.

## **Bonus Challenges**

### Try re-implementing a promise-based solution without `.catch()` (hint: handle errors inline in `.then()`).

You can handle errors inline within `.then()` by providing an error handler as the second argument to `.then()`. Here's an example:

---

### Code Example:

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => reject("Fetch failed"), 1000);
  });
};

// Using `.then()` with an inline error handler
fetchData().then(
  (data) => {
    console.log("Data received:", data); // This runs if the promise resolves
  },
  (error) => {
    console.error("Error occurred:", error); // This runs if the promise rejects
  }
);
```

---

### Explanation:

1. **Inline Error Handler:**

   - The `.then()` method accepts two arguments:
     - The first argument is a callback for handling resolved values.
     - The second argument is a callback for handling rejected values (errors).

2. **How It Works:**

   - If the promise resolves, the first callback is executed.
   - If the promise rejects, the second callback handles the error, avoiding the need for a `.catch()`.

3. **Advantages:**
   - Useful in simple cases where you want to handle both resolution and rejection in one chain.

---

### Output:

```
Error occurred: Fetch failed
```

---

### Comparison with `.catch()`:

- **Using `.then()` with an error handler:**
  Handles the error inline, but can become harder to read in more complex chains.
- **Using `.catch()`:**
  Separates error-handling logic, making the code cleaner and easier to manage, especially in long promise chains.

### Experiment with returning promises from `.then()` handlers to see how they chain dynamically.

When you return a promise from a `.then()` handler, the next `.then()` in the chain waits for that promise to resolve or reject before proceeding. This allows dynamic chaining of asynchronous operations.

Here’s an example to demonstrate this:

---

### Code Example:

```javascript
const fetchData = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Data for ID: ${id}`), 1000);
  });
};

const processData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Processed ${data}`), 1000);
  });
};

// Dynamic promise chaining
fetchData(1)
  .then((data) => {
    console.log("Fetched:", data); // Logs the fetched data
    return processData(data); // Return another promise
  })
  .then((processedData) => {
    console.log("Processed:", processedData); // Logs the processed data
    return fetchData(2); // Dynamically fetch more data
  })
  .then((newData) => {
    console.log("Fetched more data:", newData); // Logs the new data
  })
  .catch((error) => {
    console.error("Error:", error); // Catches any error in the chain
  });
```

---

### Explanation:

1. **`fetchData`:**

   - Simulates fetching data for a given ID.
   - Resolves after 1 second with a message.

2. **`processData`:**

   - Simulates processing fetched data.
   - Resolves after 1 second with a processed message.

3. **Chaining with `.then()`:**

   - The first `.then()` fetches data and returns a promise from `processData`.
   - The next `.then()` waits for `processData` to resolve and then dynamically fetches more data with `fetchData`.
   - Each `.then()` returns a promise, enabling dynamic chaining.

4. **Error Handling:**
   - The `catch` block handles any error that occurs in the chain.

---

### Output:

```
Fetched: Data for ID: 1
Processed: Processed Data for ID: 1
Fetched more data: Data for ID: 2
```

---

### Key Points:

- When you return a promise in a `.then()` handler, the next `.then()` waits for that promise to settle (resolve or reject).
- This pattern allows you to dynamically decide what to do next based on the result of the previous promise.
