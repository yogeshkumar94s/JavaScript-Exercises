// Exercise 4: Asynchronous JavaScript (Promises)

// Create a function that simulates an asynchronous API call using Promises.
// The function should resolve with a success message after 2 seconds
// and reject with an error message after 1 second.

const simulateAPICall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.8; // Simulating success 80% of the time
      isSuccess
        ? resolve("API call successful")
        : reject("Error: API call failed");
    }, 2000);
  });
};

// Usage:
simulateAPICall()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

//   1. Basic Promise:
//   1.1 Creating a Promise:
//   Creating a simple Promise that resolves after a certain delay.

const delay = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Operation completed after ${milliseconds} ms`);
    }, milliseconds);
  });
};

delay(2000)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

// 2. Chaining Promises:
// 2.1 Chaining Multiple Promises:
// Chaining multiple Promises to execute sequentially.

const step1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 1 completed");
    }, 1000);
  });
};

const step2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 2 completed");
    }, 500);
  });
};

step1()
  .then((result) => {
    console.log(result);
    return step2();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));

// 3. Handling Errors:
// 3.1 Handling Promise Rejections:
// Handling errors using the catch method.

const asyncOperation = () => {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;

    setTimeout(() => {
      isSuccess ? resolve("Operation successful") : reject("Operation failed");
    }, 2000);
  });
};

asyncOperation()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

// 4. Promise.all:
// 4.1 Promise.all for Parallel Execution:
// Using Promise.all to execute multiple promises in parallel.

const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data fetched");
    }, 1000);
  });
};

const fetchBlogPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Blog posts fetched");
    }, 1500);
  });
};

Promise.all([fetchUserData(), fetchBlogPosts()])
  .then((results) => {
    console.log(results[0]); // User data fetched
    console.log(results[1]); // Blog posts fetched
  })
  .catch((error) => console.error(error));

// 5. Async/Await:
// 5.1 Using Async/Await with Promises:
// Using async and await for a cleaner asynchronous code.

// const delay = (milliseconds) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`Operation completed after ${milliseconds} ms`);
//       }, milliseconds);
//     });
//   };

//   const performAsyncTask = async () => {
//     try {
//       const result1 = await delay(1000);
//       console.log(result1);

//       const result2 = await delay(500);
//       console.log(result2);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   performAsyncTask();

// 6. Promise.race:
// 6.1 Promise.race for Fastest Result:
// Using Promise.race to get the result of the first resolved promise.

const fetchFromServer1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from Server 1");
    }, 2000);
  });
};

const fetchFromServer2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from Server 2");
    }, 1000);
  });
};

Promise.race([fetchFromServer1(), fetchFromServer2()])
  .then((result) => {
    console.log(result); // Data from Server 2 (the faster one)
  })
  .catch((error) => console.error(error));
