// Define some example promises
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Result from promise1"), 3000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Result from promise2"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Result from promise3"), 1000)
);

// Using Promise.all
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises resolved:", results);
    // Output will be: ['Result from promise3', 'Result from promise2', 'Result from promise1']
  })
  .catch((error) => {
    console.error("Error in Promise.all:", error);
  });

// Using Promise.race
Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log("First promise resolved:", result);
    // Output will be: 'Result from promise3'
  })
  .catch((error) => {
    console.error("Error in Promise.race:", error);
  });
