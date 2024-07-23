// Function that returns a promise which resolves with a message after a timeout
const delayMessage = (message, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (message === "Error") {
        reject("An error occurred");
      } else {
        resolve(message);
      }
    }, timeout);
  });
};

// Async function that uses await to handle promises and includes error handling
const processMessages = async () => {
  try {
    const result1 = await delayMessage("Step 1: Starting the process...", 1000);
    console.log(result1); // Output: Step 1: Starting the process...

    const result2 = await delayMessage("Step 2: Process is ongoing...", 2000);
    console.log(result2); // Output: Step 2: Process is ongoing...

    const result3 = await delayMessage("Step 3: Almost done...", 1500);
    console.log(result3); // Output: Step 3: Almost done...

    const result4 = await delayMessage("Step 4: Process complete!", 500);
    console.log(result4); // Output: Step 4: Process complete!
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

// Call the async function
processMessages();
