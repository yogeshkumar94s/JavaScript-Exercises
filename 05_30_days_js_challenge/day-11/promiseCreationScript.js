// Function that returns a promise which resolves after 2 seconds
const resolveAfter2Seconds = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved after 2 seconds");
    }, 2000);
  });
};

// Function that returns a promise which rejects after 2 seconds
const rejectAfter2Seconds = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Rejected after 2 seconds");
    }, 2000);
  });
};

// Create an array of promises
const promises = [
  resolveAfter2Seconds(), // This will resolve
  rejectAfter2Seconds(), // This will reject
];

// Handling promises with Promise.all
Promise.all(promises)
  .then((results) => {
    // This block will not execute because one of the promises rejects
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    // This block will execute if any promise rejects
    console.error("Error with Promise.all:", error);
  });

// Handling promises with Promise.allSettled
Promise.allSettled(promises).then((results) => {
  console.log("All promises settled:", results);
  // Output: [
  //   { status: 'fulfilled', value: 'Resolved after 2 seconds' },
  //   { status: 'rejected', reason: 'Rejected after 2 seconds' }
  // ]
});

// Handling promises individually
resolveAfter2Seconds()
  .then((result) => {
    console.log("Resolved individually:", result); // Output: 'Resolved after 2 seconds'
  })
  .catch((error) => {
    console.error("Error in resolveAfter2Seconds:", error);
  });

rejectAfter2Seconds()
  .then((result) => {
    // This block will not execute because the promise rejects
    console.log("Resolved individually:", result);
  })
  .catch((error) => {
    console.error("Error in rejectAfter2Seconds:", error); // Output: 'Rejected after 2 seconds'
  });
