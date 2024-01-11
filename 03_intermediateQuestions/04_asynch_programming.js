// Asynchronous Programming:

//1.0 Convert a callback-based function to use Promises.

// Converting a callback-based function to use Promises involves creating a wrapper function that returns a Promise. Here's an example:
// Suppose you have a callback-based function like this:

function fetchData(callback) {
  // Simulate fetching data with a delay
  setTimeout(() => {
    const data = { message: "Data fetched successfully!" };
    callback(null, data);
    // Pass null as the error argument
  }, 2000);
}

// Example usage:
fetchData((error, result) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log(result.message);
  }
});
// Now, let's convert it to use Promises:
function fetchDataAsync() {
  return new Promise((resolve, reject) => {
    // Simulate fetching data with a delay
    setTimeout(() => {
      const data = { message: "Data fetched successfully!" };
      resolve(data);
      // Resolve the Promise with the fetched data
      // In case of an error, you can use reject(new Error("Error message"));
    }, 2000);
  });
}

// Example usage with Promises:
fetchDataAsync()
  .then((result) => {
    console.log(result.message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//2.0 Create a function that returns a Promise and resolves after a delay.
//3.0 Handle errors in a Promise chain using catch.
//4.0 Use async/await to simplify asynchronous code.
//5.0 Create a function that retries a Promise-based operation.
//6.0 Write a function to fetch data from an API using fetch.
//7.0 Implement a debounce function for handling repeated events.
