// Exception handling is a programming concept that allows developers to gracefully manage and respond to unexpected or exceptional situations that may occur during the execution of a program. In JavaScript, exception handling is typically done using the try, catch, finally, and throw statements.

// Basic Structure:

// try Block:
// Contains the code that may throw an exception.

// catch Block:
// Executes when an exception is thrown within the corresponding try block.
// Catches and handles the exception.

// finally Block:

// Executes whether an exception is thrown or not.
// Used for cleanup or releasing resources.

// throw Statement:

// Explicitly throws an exception.

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    const result = a / b;
    return result;
  } catch (error) {
    console.error("Error:", error.message);
    return "Error occurred.";
  } finally {
    console.log("Finally block executed.");
  }
}

console.log(divide(8, 2));
// Outputs: 4
console.log(divide(5, 0));
// Outputs: Error: Cannot divide by zero. Finally block executed.

// In this example, the divide function attempts to perform a division operation. If b is 0, it explicitly throws an Error. The catch block handles the exception and logs an error message, and the finally block is executed regardless of whether an exception occurred.

//Common Use Cases:-----------

//1.0 Handling Asynchronous Code:

// When working with asynchronous operations like fetching data or dealing with Promises, exception handling ensures that errors are appropriately managed.

async function fetchData() {
  try {
    const response = await fetch("https://example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

//2.0 Validating Input:

// Checking and validating input parameters to functions or methods can help catch potential errors early.

function processInput(value) {
  if (typeof value !== "number") {
    throw new TypeError("Input must be a number.");
  }
  return value * 2;
}

//3.0 Resource Cleanup:

// The finally block is useful for releasing resources or performing cleanup operations, ensuring they occur regardless of whether an exception is thrown.

function openFile(fileName) {
  let file;
  try {
    file = open(fileName);
    // File processing logic
  } catch (error) {
    console.error("Error opening file:", error);
  } finally {
    if (file) {
      close(file);
    }
  }
}

//4.0 Custom Exceptions:

// Developers can create custom exception types by extending the Error object for more meaningful error handling.

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function exampleFunction() {
  throw new CustomError("This is a custom error.");
}

// Exception handling is a critical aspect of robust and reliable software development. It helps identify, report, and handle errors effectively, improving the overall stability and maintainability of a program.
