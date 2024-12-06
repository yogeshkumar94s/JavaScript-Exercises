### Promises in JavaScript: Robust and Future-Proof

**A Promise** represents a value that might be available now, or in the future, or never. It's used for handling asynchronous operations cleanly. Let's focus on **creating and consuming promises** with **best practices**.

---

### **Key Components of a Promise**

1. **States**:
   - `Pending`: Initial state.
   - `Fulfilled`: Completed successfully.
   - `Rejected`: Failed with an error.
2. **Methods**:
   - `.then()`: Handles success.
   - `.catch()`: Handles errors.
   - `.finally()`: Runs code regardless of the promise's outcome.

---

### **Creating Promises**

#### **Example 1: Simple Promise**

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Random success/failure
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject(new Error("Failed to fetch data."));
      }
    }, 1000);
  });
};

// Consuming the promise
fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err.message))
  .finally(() => console.log("Operation complete."));
```

---

### **Best Practices**

1. **Always handle errors** with `.catch()`.
2. Use `.finally()` for cleanup tasks like hiding loaders.
3. Keep promises modular (small and reusable).
4. Chain promises correctly; avoid nesting them unnecessarily.

---

### **Chaining Promises**

For sequential async tasks, chain `.then()` to avoid callback hell.

```javascript
const authenticate = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User authenticated"), 1000);
  });
};

const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User data fetched"), 1000);
  });
};

authenticate()
  .then((message) => {
    console.log(message);
    return fetchUserData(); // Return a new promise
  })
  .then((data) => console.log(data))
  .catch((err) => console.error("Error:", err.message))
  .finally(() => console.log("Process complete."));
```

---

### **Promise.all for Parallel Execution**

Run multiple promises in parallel and wait for all to finish.

```javascript
const fetchPosts = () =>
  new Promise((resolve) => setTimeout(() => resolve("Posts fetched"), 1000));
const fetchComments = () =>
  new Promise((resolve) => setTimeout(() => resolve("Comments fetched"), 1500));

Promise.all([fetchPosts(), fetchComments()])
  .then((results) => console.log("Results:", results))
  .catch((err) => console.error("Error in one of the promises:", err.message));
```

---

### **Promise.race for First Resolved/Rejected**

Useful for timeout scenarios.

```javascript
const slowAPI = new Promise((resolve) =>
  setTimeout(() => resolve("Slow API response"), 3000)
);
const timeout = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("Request timed out")), 2000)
);

Promise.race([slowAPI, timeout])
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
```

---

### **Wrapping Callbacks into Promises**

Sometimes, you need to convert callback-based APIs (e.g., `fs.readFile`) into promises.

```javascript
const fs = require("fs");

const readFileAsPromise = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFileAsPromise("./example.txt")
  .then((content) => console.log("File Content:", content))
  .catch((err) => console.error("Error reading file:", err.message));
```

---

### **Error Handling in Promise Chains**

Avoid unhandled promise rejections by catching errors.

```javascript
const riskyOperation = () => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Something went wrong!")), 1000);
  });
};

// Handle errors gracefully
riskyOperation()
  .then(() => console.log("Success"))
  .catch((err) => {
    console.error("Error caught:", err.message);
    // Perform any necessary recovery logic here
  });
```

---

### **Key Takeaways**

- Promises make async operations predictable.
- Always handle errors to prevent runtime crashes.
- Use utilities like `Promise.all`, `Promise.race` to simplify complex workflows.
- Modularize promises for reusability and maintainability.

---

## Here are 20 practice questions on creating and working with promises to strengthen your understanding:

### **Basic Concepts**

1. What is the purpose of a promise in JavaScript?
2. Explain the three states of a promise.
3. How do you handle errors in a promise? Give an example.
4. Write a promise that resolves with "Hello, World!" after 2 seconds.
5. How can you execute cleanup code regardless of the promise's result?

---

### **Creating Promises**

6. Create a promise that simulates a database fetch operation, resolving successfully after 1 second.
7. Write a promise that rejects with an error message if the input value is not a number.
8. Convert a callback-based function into a promise using an example.
9. Create a reusable promise function that checks if a number is odd or even and resolves/rejects accordingly.
10. Explain what happens if neither `resolve` nor `reject` is called inside a promise.

---

### **Chaining Promises**

11. Write a chain of promises to simulate these tasks:
    - Authenticate a user.
    - Fetch their data.
    - Log a success message.
12. What happens if a `.then()` block throws an error? How can it be handled?
13. Create a promise chain where one step depends on the result of the previous step.
14. Refactor nested promises into a proper chain structure.
15. What are the benefits of chaining promises instead of nesting them?

---

### **Advanced Scenarios**

16. Write a promise using `Promise.all` to fetch two APIs in parallel and log their results.
17. How does `Promise.race` differ from `Promise.all`? Provide an example.
18. Implement a timeout mechanism using `Promise.race` that rejects if an API call takes too long.
19. Write a function that accepts an array of promises and resolves when any one of them succeeds.
20. What are unhandled promise rejections, and how can they be avoided?

---

### **Bonus Challenges**

- Try re-implementing a promise-based solution without `.catch()` (hint: handle errors inline in `.then()`).

- Experiment with returning promises from `.then()` handlers to see how they chain dynamically.
