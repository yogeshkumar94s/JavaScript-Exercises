// Define a custom error class that extends the built-in Error class
class CustomError extends Error {
  constructor(message, code) {
    super(message); // Call the parent class constructor with the error message
    this.name = "CustomError"; // Set the name property to the class name
    this.code = code; // Add a custom property for additional information
  }
}

// Function that throws a custom error
function throwCustomError() {
  // Create an instance of the custom error with a message and code
  throw new CustomError("This is a custom error message.", 400);
}

// Function that handles the custom error using try-catch blocks
function handleCustomError() {
  try {
    // Attempt to call the function that throws the custom error
    throwCustomError();
  } catch (error) {
    if (error instanceof CustomError) {
      // Handle the custom error
      console.error(
        `Caught a CustomError: ${error.message} (Code: ${error.code})`
      );
    } else {
      // Handle other types of errors
      console.error("Caught an error:", error.message);
    }
  }
}

// Call the function to see the result
handleCustomError();
