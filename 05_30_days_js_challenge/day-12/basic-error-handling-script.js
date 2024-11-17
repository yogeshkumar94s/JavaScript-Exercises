function riskyOperation() {
  // This function simulates an operation that can throw an error
  const shouldThrowError = Math.random() > 0.5; // 50% chance of throwing an error

  if (shouldThrowError) {
    throw new Error("Something went wrong during the operation!");
  } else {
    return "Operation completed successfully!";
  }
}

function performOperation() {
  try {
    // Attempt to perform the risky operation
    const result = riskyOperation();
    console.log(result); // Logs the result if successful
  } catch (error) {
    // Handle any errors that were thrown
    console.error("Caught an error:", error.message);
  } finally {
    // This block runs regardless of success or failure
    console.log("Operation attempt finished.");
  }
}

// Call the function to see the result
performOperation();
