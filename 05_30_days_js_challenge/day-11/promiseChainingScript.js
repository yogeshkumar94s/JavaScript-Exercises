// Function that returns a promise which resolves with a message after a timeout
const delayMessage = (message, timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, timeout);
  });
};

// Chain multiple promises and log messages in sequence
delayMessage("Step 1: Starting the process...", 1000)
  .then((result) => {
    console.log(result); // Output: Step 1: Starting the process...
    return delayMessage("Step 2: Process is ongoing...", 2000);
  })
  .then((result) => {
    console.log(result); // Output: Step 2: Process is ongoing...
    return delayMessage("Step 3: Almost done...", 1500);
  })
  .then((result) => {
    console.log(result); // Output: Step 3: Almost done...
    return delayMessage("Step 4: Process complete!", 500);
  })
  .then((result) => {
    console.log(result); // Output: Step 4: Process complete!
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
