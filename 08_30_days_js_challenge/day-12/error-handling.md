# Error handling in JavaScript

## try-catch

Error handling in JavaScript is crucial for building robust applications. The `try-catch` statement is used to handle exceptions (errors) that occur during the execution of your code.

### Basic Structure of `try-catch`

```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
}
```

### Explanation

- **`try` Block**: Contains code that might throw an error. If an error occurs within this block, execution immediately jumps to the `catch` block.
- **`catch` Block**: Contains code that executes if an error is thrown in the `try` block. The `error` object contains information about the error that was thrown.

### Example

Here's a simple example to demonstrate error handling with `try-catch`:

```javascript
try {
  // Intentionally throwing an error
  const result = someUndefinedFunction(); // This function doesn't exist and will throw an error
  console.log(result); // This line will not execute because an error is thrown above
} catch (error) {
  console.error("An error occurred:", error.message); // Logs the error message
}

console.log("Execution continues after the try-catch block"); // This will still execute
```

### Explanation of the Example

1. **`try` Block**:

   - The code attempts to call `someUndefinedFunction()`, which does not exist, so an error is thrown.
   - Because of the error, the rest of the code inside the `try` block is skipped.

2. **`catch` Block**:

   - The error is caught, and the error message is logged to the console.
   - The `error` object provides details about the error, such as its message.

3. **Continuation**:
   - The code after the `try-catch` block continues to execute normally, demonstrating that the error was handled gracefully.

### Using `finally`

You can also use a `finally` block to execute code regardless of whether an error was thrown or not:

```javascript
try {
  const result = someUndefinedFunction();
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("This will run regardless of an error");
}
```

### Explanation of `finally`

- The `finally` block executes whether an error occurred or not. This is useful for cleanup code that should run no matter what, such as closing files or releasing resources.

### Summary

- **`try` block**: Wraps the code that may throw an error.
- **`catch` block**: Handles the error if one occurs.
- **`finally` block**: Executes code after `try` and `catch`, regardless of the outcome.

```javascript

```

### Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

```javascript
// Function that intentionally throws an error
function throwError() {
  throw new Error("This is an intentional error");
}

try {
  throwError(); // Call the function that throws an error
} catch (error) {
  console.error("Caught an error:", error.message); // Handle and log the error
}
```

### Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

```javascript
// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  const result = divide(10, 0); // Attempt to divide by zero
  console.log("Result:", result); // This line will not execute if an error is thrown
} catch (error) {
  console.error("Error:", error.message); // Handle and log the error
}

try {
  const result = divide(10, 2); // Attempt to divide with a valid denominator
  console.log("Result:", result); // This line will execute normally
} catch (error) {
  console.error("Error:", error.message); // Handle any potential errors (though there won't be any in this case)
}
```

### Explanation

#### Task 1

- **`throwError` Function**:
  - This function throws an error intentionally with the message "This is an intentional error".
- **`try-catch` Block**:
  - Calls `throwError` inside the `try` block. Since the function throws an error, the code in the `try` block after the error is thrown will not execute.
  - The `catch` block catches the error and logs the message "Caught an error: This is an intentional error".

#### Task 2

- **`divide` Function**:
  - Takes two parameters, `a` and `b`.
  - If `b` is zero, it throws an error with the message "Cannot divide by zero".
  - Otherwise, it returns the result of `a / b`.
- **First `try-catch` Block**:
  - Calls `divide` with `10` and `0`. Since dividing by zero is not allowed, it throws an error.
  - The `catch` block catches the error and logs the message "Error: Cannot divide by zero".
- **Second `try-catch` Block**:
  - Calls `divide` with `10` and `2`. This is a valid division, so it returns the result `5`.
  - Logs the result "Result: 5".
  - Since there's no error, the `catch` block does not execute.

---

## try-catch-finally block

The `finally` block in JavaScript is used in conjunction with `try` and `catch` blocks to ensure that code is executed regardless of whether an error occurs or not. It is typically used for cleanup actions, such as closing files, releasing resources, or resetting variables.

### Structure

The basic structure of `try-catch-finally` looks like this:

```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will always run, regardless of whether an error occurred or not
}
```

### Example

Here is a simple example that demonstrates the use of the `finally` block:

```javascript
function exampleFunction() {
  try {
    console.log("Executing try block");
    // Intentionally throwing an error
    throw new Error("An error occurred");
  } catch (error) {
    console.log("Caught an error:", error.message);
  } finally {
    console.log("Executing finally block");
  }
}

exampleFunction();
```

### Explanation

1. **`try` Block**:

   - Contains code that might throw an error.
   - In this example, it intentionally throws an error with the message "An error occurred".

2. **`catch` Block**:

   - Executes if an error occurs in the `try` block.
   - Logs the error message to the console.

3. **`finally` Block**:
   - Executes regardless of whether an error was thrown or caught.
   - In this example, it logs "Executing finally block" to the console.

### Output

The output of the above example will be:

```
Executing try block
Caught an error: An error occurred
Executing finally block
```

### Key Points

- The `finally` block always executes after the `try` and `catch` blocks, whether an error was thrown or not.
- It is useful for cleanup operations that need to run regardless of the outcome of the `try-catch` blocks.
- Even if a `return` statement is encountered in the `try` or `catch` block, the `finally` block will still execute.

### Example with Return

Here is an example demonstrating that the `finally` block executes even if there's a return statement:

```javascript
function returnExample() {
  try {
    console.log("Executing try block");
    return "Return from try";
  } catch (error) {
    console.log("Caught an error:", error.message);
  } finally {
    console.log("Executing finally block");
  }
}

const result = returnExample();
console.log("Result:", result);
```

### Output

```
Executing try block
Executing finally block
Result: Return from try
```

In this example, the `finally` block executes even though the `try` block contains a return statement.

### Here is a script that includes a `try-catch-finally` block and logs messages in each block to demonstrate the execution flow:

```javascript
function executeTryCatchFinally() {
  try {
    console.log("Inside try block: About to throw an error");
    // Intentionally throwing an error
    throw new Error("This is an intentional error");
    console.log("This line will not execute due to the error");
  } catch (error) {
    console.log("Inside catch block: Caught an error:", error.message);
  } finally {
    console.log("Inside finally block: This will always execute");
  }

  console.log("Outside of try-catch-finally blocks: Execution continues");
}

executeTryCatchFinally();
```

### Explanation

1. **`try` Block**:

   - Logs "Inside try block: About to throw an error".
   - Throws an error intentionally.
   - The line "This line will not execute due to the error" will not be executed because of the thrown error.

2. **`catch` Block**:

   - Executes if an error occurs in the `try` block.
   - Logs "Inside catch block: Caught an error: This is an intentional error".

3. **`finally` Block**:

   - Always executes regardless of whether an error was thrown or caught.
   - Logs "Inside finally block: This will always execute".

4. **After `try-catch-finally`**:
   - Logs "Outside of try-catch-finally blocks: Execution continues" to show that the script continues executing after the error handling blocks.

### Output

The output of the script will be:

```
Inside try block: About to throw an error

Inside catch block: Caught an error: This is an intentional error

Inside finally block: This will always execute

Outside of try-catch-finally blocks: Execution continues
```

---

## Custom Error Object in JavaScript

Custom error objects in JavaScript allow you to create your own error types that provide more specific information about the errors that occur in your code. This can be particularly useful for debugging and handling errors in a more meaningful way. You can create custom error objects by extending the built-in `Error` class.

### Creating Custom Error Objects

To create a custom error object, you need to:

1. Extend the `Error` class.
2. Set the name of your custom error.
3. Optionally, add additional properties to provide more context about the error.

### Example

Here's an example of creating and using a custom error object:

```javascript
// Define a custom error class by extending the built-in Error class
class CustomError extends Error {
  constructor(message) {
    super(message); // Call the parent class (Error) constructor with the message
    this.name = "CustomError"; // Set the error name
  }
}

// Function that throws a custom error
function riskyOperation() {
  try {
    // Simulate an error
    throw new CustomError("This is a custom error");
  } catch (error) {
    if (error instanceof CustomError) {
      console.error("Caught a custom error:", error.message);
    } else {
      console.error("Caught an unknown error:", error.message);
    }
  } finally {
    console.log("Operation complete, whether successful or not.");
  }
}

// Run the function
riskyOperation();
```

### Explanation

1. **Custom Error Class**:

   - The `CustomError` class extends the built-in `Error` class.
   - The constructor of `CustomError` calls the `Error` constructor with `super(message)`, passing the error message.
   - The `name` property of the custom error is set to `"CustomError"`.

2. **`riskyOperation` Function**:

   - Throws a `CustomError` with a specific message.
   - Uses a `try-catch` block to catch the error.
   - Checks if the caught error is an instance of `CustomError` and logs an appropriate message.
   - Logs a different message for other types of errors.
   - The `finally` block logs a message indicating that the operation is complete.

3. **Running the Function**:
   - The function `riskyOperation` is called, demonstrating how the custom error is thrown, caught, and handled.

### Output

The output of the script will be:

```
Caught a custom error: This is a custom error
Operation complete, whether successful or not.
```

### Additional Customization

You can add more properties to the custom error class to provide additional context:

```javascript
class CustomError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.name = "CustomError";
    this.code = errorCode; // Add a custom property for an error code
  }
}

function anotherRiskyOperation() {
  try {
    throw new CustomError("This is another custom error", 404);
  } catch (error) {
    if (error instanceof CustomError) {
      console.error(`Error [${error.code}]: ${error.message}`);
    } else {
      console.error("Caught an unknown error:", error.message);
    }
  } finally {
    console.log("Another operation complete, whether successful or not.");
  }
}

anotherRiskyOperation();
```

### Output

```
Error [404]: This is another custom error
Another operation complete, whether successful or not.
```

### Task 1: Custom Error Class

1. **Create a custom error class that extends the built-in Error class.**
2. **Throw an instance of this custom error in a function and handle it using a try-catch block.**

```javascript
// Define a custom error class by extending the built-in Error class
class CustomError extends Error {
  constructor(message) {
    super(message); // Call the parent class (Error) constructor with the message
    this.name = "CustomError"; // Set the error name
  }
}

// Function that throws a custom error
function throwCustomError() {
  try {
    // Simulate an error
    throw new CustomError("This is a custom error");
  } catch (error) {
    if (error instanceof CustomError) {
      console.error("Caught a custom error:", error.message);
    } else {
      console.error("Caught an unknown error:", error.message);
    }
  } finally {
    console.log("Execution of throwCustomError function is complete.");
  }
}

// Run the function
throwCustomError();
```

### Task 2: Input Validation with Custom Error

1. **Write a function that validates user input (e.g., checking if a string is not empty).**
2. **Throw a custom error if the validation fails. Handle the custom error using a try-catch block.**

```javascript
// Define a custom error class for validation errors
class ValidationError extends Error {
  constructor(message) {
    super(message); // Call the parent class (Error) constructor with the message
    this.name = "ValidationError"; // Set the error name
  }
}

// Function to validate user input
function validateInput(input) {
  if (!input || input.trim() === "") {
    // Throw a custom validation error if input is empty or only whitespace
    throw new ValidationError("Input cannot be empty or just whitespace");
  } else {
    console.log("Valid input:", input);
  }
}

// Function to handle validation
function handleValidation(input) {
  try {
    validateInput(input);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Validation error:", error.message);
    } else {
      console.error("An unknown error occurred:", error.message);
    }
  } finally {
    console.log("Validation complete.");
  }
}

// Test the function with various inputs
handleValidation(""); // Invalid input
handleValidation("  "); // Invalid input
handleValidation("Valid input"); // Valid input
```

### Explanation

1. **Custom Error Class (Task 1)**:

   - `CustomError` extends the built-in `Error` class.
   - In the `throwCustomError` function, an instance of `CustomError` is thrown and caught in a `try-catch` block.

2. **Input Validation with Custom Error (Task 2)**:
   - `ValidationError` extends the built-in `Error` class for validation-specific errors.
   - The `validateInput` function checks if the input is empty or just whitespace and throws a `ValidationError` if it is.
   - The `handleValidation` function calls `validateInput` within a `try-catch` block to handle any `ValidationError` instances.

### Output

For **Task 1**, the output will be:

```
Caught a custom error: This is a custom error
Execution of throwCustomError function is complete.
```

For **Task 2**, the output will be:

```
Validation error: Input cannot be empty or just whitespace
Validation complete.
Validation error: Input cannot be empty or just whitespace
Validation complete.
Valid input: Valid input
Validation complete.
```

---

## Error Handling in Promises in JavaScript

Error handling in promises is crucial for managing asynchronous operations in JavaScript. It allows you to catch and handle errors that may occur during the execution of a promise. Here are the key concepts:

### Basic Error Handling with `.catch()`

When using promises, you can handle errors using the `.catch()` method. This method is called if the promise is rejected, allowing you to handle the error appropriately.

```javascript
// Example of a promise that may fail
const myPromise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});

// Handling the promise
myPromise
  .then((result) => {
    console.log(result); // Logs the resolved value if the promise is successful
  })
  .catch((error) => {
    console.error("Error:", error); // Logs the error if the promise is rejected
  });
```

### Chaining Promises and Error Handling

When chaining multiple promises, you can handle errors at any point in the chain. If an error occurs at any step, it will propagate down the chain until it is caught.

```javascript
const promiseChain = new Promise((resolve, reject) => {
  resolve("Start of the chain");
});

promiseChain
  .then((result) => {
    console.log(result);
    return "Next step";
  })
  .then((result) => {
    console.log(result);
    // Simulate an error
    throw new Error("Something went wrong in this step");
  })
  .then((result) => {
    console.log(result); // This will not execute because the previous step threw an error
  })
  .catch((error) => {
    console.error("Caught an error in the chain:", error.message);
  });
```

### Using `.finally()`

The `.finally()` method allows you to execute code regardless of whether the promise was fulfilled or rejected. This is useful for cleaning up resources or finalizing operations.

```javascript
const myPromiseWithFinally = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});

myPromiseWithFinally
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log(
      "This will always execute, whether the promise resolved or rejected"
    );
  });
```

### Handling Errors in Async/Await

When using `async`/`await` for handling promises, you can use `try`/`catch` blocks to handle errors.

```javascript
async function asyncFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error("Caught an error with async/await:", error);
  } finally {
    console.log("This will always execute in async/await function");
  }
}

asyncFunction();
```

### Summary

1. **`.catch()` Method**: Handles errors in promises.
2. **Chaining Promises**: Errors propagate down the chain and can be caught at any point.
3. **`.finally()` Method**: Executes code regardless of the promise outcome.
4. **Async/Await with `try`/`catch`**: Handles errors in asynchronous functions.

### Task 1: Promise with `.catch()` Handling

1. **Create a promise that randomly resolves or rejects.**
2. **Use `.catch()` to handle the rejection and log an appropriate message to the console.**

```javascript
// Create a promise that randomly resolves or rejects
const randomPromise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5; // 50% chance of success
  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");
    }
  }, 1000); // Simulate async operation with 1 second delay
});

// Handle the promise with .catch()
randomPromise
  .then((result) => {
    console.log(result); // Logs the resolved value
  })
  .catch((error) => {
    console.error("Error:", error); // Logs the error if the promise is rejected
  });
```

### Task 2: Using `try-catch` within an `async` Function

1. **Use `try-catch` within an async function to handle errors from a promise that randomly resolves or rejects.**
2. **Log the error message.**

```javascript
// Create a promise that randomly resolves or rejects
const randomPromiseAsync = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5; // 50% chance of success
  setTimeout(() => {
    if (success) {
      resolve("Async Promise resolved successfully!");
    } else {
      reject("Async Promise rejected!");
    }
  }, 1000); // Simulate async operation with 1 second delay
});

// Async function that handles the promise with try-catch
async function handleAsyncPromise() {
  try {
    const result = await randomPromiseAsync;
    console.log(result); // Logs the resolved value if the promise is successful
  } catch (error) {
    console.error("Caught an error in async function:", error); // Logs the error if the promise is rejected
  }
}

// Call the async function
handleAsyncPromise();
```

### Explanation

1. **Task 1**:

   - We create a promise (`randomPromise`) that randomly resolves or rejects after a 1-second delay.
   - We handle the promise using `.then()` to log the resolved value and `.catch()` to log the error message if the promise is rejected.

2. **Task 2**:
   - We create another promise (`randomPromiseAsync`) that randomly resolves or rejects after a 1-second delay.
   - We define an async function (`handleAsyncPromise`) that uses `try-catch` to handle the promise. The resolved value is logged if the promise is successful, and the error message is logged if the promise is rejected.

### Output

For **Task 1**, the output will be either:

```
Promise resolved successfully!
```

or

```
Error: Promise rejected!
```

For **Task 2**, the output will be either:

```
Async Promise resolved successfully!
```

or

```
Caught an error in async function: Async Promise rejected!
```

---

## Gracefull Error Handling in fetch API in JavaScript

Graceful error handling in `fetch` is important to ensure your application can handle network errors and other issues gracefully. The `fetch` API in JavaScript returns a promise that resolves with a `Response` object, even if the HTTP status code indicates a failure (like 404 or 500). You need to handle these scenarios explicitly.

### Basic Structure of a `fetch` Request

Here's a basic example of how to use `fetch`:

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
```

### Key Points for Graceful Error Handling

1. **Check the Response Status**: Use `response.ok` to check if the HTTP status is in the range 200-299.
2. **Handle Network Errors**: Catch network errors using `.catch()`.
3. **Use `try-catch` with `async/await`**: For better readability and handling, especially when using async functions.

### Example with `async/await` and `try-catch`

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchData();
```

### Graceful Error Handling Steps

1. **Perform the Fetch Request**:

   - Use `fetch()` to make the HTTP request.
   - Use `await` to wait for the promise to resolve.

2. **Check for HTTP Errors**:

   - Check the `response.ok` property to see if the response status code is in the 200-299 range.
   - If not, throw an error with the status code.

3. **Handle JSON Parsing**:

   - Use `await response.json()` to parse the JSON response.
   - Be prepared to catch JSON parsing errors if the response isn't valid JSON.

4. **Handle Network Errors**:
   - Wrap the fetch call in a `try-catch` block to catch network errors and other exceptions.

### Detailed Example

Here's a detailed example that demonstrates all these steps:

```javascript
async function fetchDataGracefully() {
  const url = "https://api.example.com/data";

  try {
    const response = await fetch(url);

    // Check if the response status is not ok (i.e., not in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response JSON
    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    // Log the error message
    console.error("Fetch error:", error.message);
  } finally {
    console.log("Fetch attempt finished.");
  }
}

// Call the function
fetchDataGracefully();
```

### Explanation

1. **Perform the Fetch Request**:

   - The `fetch(url)` function is called and `await` is used to wait for the promise to resolve.

2. **Check for HTTP Errors**:

   - `response.ok` checks if the status code is in the 200-299 range. If not, an error is thrown with the status code.

3. **Handle JSON Parsing**:

   - `await response.json()` is used to parse the response JSON.

4. **Handle Network Errors**:

   - The `try-catch` block catches any errors thrown during the fetch request or JSON parsing.

5. **Finally Block (Optional)**:
   - The `finally` block executes regardless of whether an error was thrown, useful for cleanup actions or logging.

Sure! Here’s how you can handle errors from the `fetch` API when requesting data from an invalid URL:

### Task 1: Handle Error Using `.catch()`

1. **Use the `fetch` API to request data from an invalid URL.**
2. **Handle the error using `.catch()` and log an appropriate error message.**

```javascript
// Request data from an invalid URL
fetch("https://api.example.com/invalid-endpoint")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // This line won't be reached if there is an error
  })
  .then((data) => {
    console.log("Data:", data); // This line won't be reached if there is an error
  })
  .catch((error) => {
    console.error("Fetch error:", error.message);
  });
```

### Task 2: Handle Error Using `try-catch` in an Async Function

1. **Use the `fetch` API to request data from an invalid URL within an async function.**
2. **Handle the error using `try-catch` and log an appropriate message.**

```javascript
// Define an async function to request data from an invalid URL
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/invalid-endpoint");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data:", data); // This line won't be reached if there is an error
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

// Call the async function
fetchData();
```

### Explanation

- **Task 1**:

  - `fetch` is called with an invalid URL.
  - The `.then()` method checks if the `response.ok` is `false` and throws an error with the status code.
  - The `.catch()` method handles any errors, logging an appropriate error message.

- **Task 2**:
  - An `async` function `fetchData` is defined.
  - Inside the function, `await fetch` is used to make the request.
  - `if (!response.ok)` checks for errors, and if there is an error, it is thrown.
  - The `catch` block handles any errors, logging an appropriate error message.
