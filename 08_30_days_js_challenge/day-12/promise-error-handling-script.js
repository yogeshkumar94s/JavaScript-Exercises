// Function that returns a promise which may either resolve or reject
function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject(new Error("Failed to fetch data."));
      }
    }, 1000);
  });
}

// Using .catch() to handle errors
fetchData(false)
  .then((data) => {
    console.log(data); // This won't run if the promise is rejected
  })
  .catch((error) => {
    console.error("Error using .catch():", error.message);
  });

// Using try-catch within an async function to handle errors
async function fetchDataAsync(success) {
  try {
    const data = await fetchData(success);
    console.log(data); // This will run if the promise resolves
  } catch (error) {
    console.error(
      "Error using try-catch within async function:",
      error.message
    );
  }
}

// Call the async function with a failing promise
fetchDataAsync(false);
