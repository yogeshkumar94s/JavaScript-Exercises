### Consuming Promises: Best Practices and Examples

Consuming promises effectively ensures clean, readable, and maintainable asynchronous code. Here are best practices and examples for consuming promises in different scenarios.

---

### **Best Practices for Consuming Promises**

1. **Always Handle Errors**: Use `.catch()` to catch errors and prevent unhandled promise rejections.
2. **Use `.finally()` for Cleanup**: Perform actions like stopping loaders or resetting states regardless of the promise's outcome.
3. **Avoid Nesting Promises**: Chain `.then()` calls instead of nesting them.
4. **Graceful Fallbacks**: Provide default values or retry mechanisms for failed promises.
5. **Readable Chains**: Break down complex chains into smaller, modular functions for better readability.
6. **Error Propagation**: Let errors bubble up to the top-level `.catch()` unless you handle them locally.
7. **Parallel Execution**: Use `Promise.all` or `Promise.allSettled` for handling multiple promises efficiently.

---

### **Examples of Consuming Promises**

#### **1. Basic Consumption**

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      success ? resolve("Data fetched!") : reject(new Error("Fetch failed."));
    }, 1000);
  });
};

fetchData()
  .then((data) => console.log("Success:", data))
  .catch((err) => console.error("Error:", err.message))
  .finally(() => console.log("Operation complete."));
```

**Best Practice**: Use `.finally()` for cleanup, e.g., hiding loaders.

---

#### **2. Sequential Operations (Promise Chaining)**

```javascript
const authenticate = () => {
  return Promise.resolve("User authenticated");
};

const fetchUserData = () => {
  return Promise.resolve("User data fetched");
};

const logActivity = () => {
  return Promise.resolve("Activity logged");
};

// Chain promises sequentially
authenticate()
  .then((message) => {
    console.log(message);
    return fetchUserData();
  })
  .then((userData) => {
    console.log(userData);
    return logActivity();
  })
  .then((activity) => console.log(activity))
  .catch((err) => console.error("Error:", err.message))
  .finally(() => console.log("Workflow complete."));
```

**Best Practice**: Avoid nesting and use chaining for readability.

---

#### **3. Parallel Execution with `Promise.all`**

When tasks are independent and can run in parallel.

```javascript
const fetchPosts = () =>
  new Promise((resolve) => setTimeout(() => resolve("Posts fetched"), 1000));
const fetchComments = () =>
  new Promise((resolve) => setTimeout(() => resolve("Comments fetched"), 1500));
const fetchUsers = () =>
  new Promise((resolve) => setTimeout(() => resolve("Users fetched"), 500));

Promise.all([fetchPosts(), fetchComments(), fetchUsers()])
  .then((results) => {
    console.log("All tasks complete:");
    console.log("Posts:", results[0]);
    console.log("Comments:", results[1]);
    console.log("Users:", results[2]);
  })
  .catch((err) => console.error("Error:", err.message))
  .finally(() => console.log("Parallel execution done."));
```

**Best Practice**: Use `Promise.all` when all promises must succeed, and handle errors in `.catch()`.

---

#### **4. Handling Multiple Outcomes with `Promise.allSettled`**

Use `Promise.allSettled` when you need results of all promises regardless of success or failure.

```javascript
const fetchData = (id) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        id % 2 === 0
          ? resolve(`Data for ID ${id}`)
          : reject(`Error for ID ${id}`),
      1000
    )
  );

Promise.allSettled([fetchData(1), fetchData(2), fetchData(3)])
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Promise ${index + 1} succeeded:`, result.value);
      } else {
        console.error(`Promise ${index + 1} failed:`, result.reason);
      }
    });
  })
  .finally(() => console.log("Processed all promises."));
```

**Best Practice**: Use `Promise.allSettled` for non-critical tasks or when partial results are acceptable.

---

#### **5. Handling Timeouts with `Promise.race`**

Timeout a promise if it takes too long.

```javascript
const apiCall = new Promise((resolve) =>
  setTimeout(() => resolve("API response"), 3000)
);
const timeout = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("Request timed out")), 2000)
);

Promise.race([apiCall, timeout])
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
```

**Best Practice**: Use `Promise.race` for time-sensitive operations.

---

#### **6. Retrying Failed Promises**

Retry a promise a few times before giving up.

```javascript
const fetchWithRetry = (retries) => {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.7; // 30% success rate
    if (success) resolve("Success!");
    else reject("Failure!");
  }).catch((err) => {
    if (retries > 0) {
      console.log(`Retrying... (${retries} attempts left)`);
      return fetchWithRetry(retries - 1);
    }
    throw new Error(err);
  });
};

fetchWithRetry(3)
  .then((result) => console.log(result))
  .catch((err) => console.error("Final Error:", err.message));
```

**Best Practice**: Implement retry logic for flaky operations.

---

#### **7. Graceful Fallbacks**

Provide a default value or fallback operation if the promise fails.

```javascript
const fetchData = () => Promise.reject(new Error("Network error"));

fetchData()
  .catch((err) => {
    console.error("Error:", err.message);
    return "Default data";
  })
  .then((data) => console.log("Data:", data));
```

**Best Practice**: Handle specific failures and provide meaningful fallbacks.

---

### **Key Takeaways**

- **Error Handling**: Always `.catch()` errors to prevent crashes.
- **Parallel vs Sequential**: Use `Promise.all` for parallel tasks and chaining for dependent tasks.
- **Cleanup with `.finally()`**: Always handle post-promise tasks like hiding loaders.
- **Graceful Handling**: Provide fallbacks or retry strategies for better user experience.
- **Readable Code**: Break down complex chains into smaller, modular functions.

---

Here are 20 practice questions to help you deepen your understanding of consuming promises and their best practices:

---

### **Basic Consumption**

1. What are the key methods used to consume promises, and what are their purposes?
2. Write a promise chain that logs "Data loaded", "Data processed", and "Done!" sequentially.
3. What is the purpose of the `.finally()` method? Provide an example.
4. How do you handle a situation where a promise fails with an error?
5. Write a promise that resolves with a message after 2 seconds and log the message.

---

### **Error Handling**

6. What happens if a `.then()` handler throws an error? How do you handle it?
7. Write a promise chain where one of the `.then()` handlers throws an error. Handle it gracefully with `.catch()`.
8. Explain the difference between `.catch()` and handling errors inside `.then()`.
9. Create a promise that fails on the first attempt but succeeds on retry. Log the final result.

---

### **Sequential Promises**

10. Write a chain of promises that simulates the following steps:
    - Fetch user details.
    - Fetch user’s posts using their ID.
    - Log a message indicating both operations are complete.
11. What happens if one promise in a chain fails? How can you recover from it?
12. Refactor a nested promise into a clean, chained structure.

---

### **Parallel Promises**

13. Explain the difference between `Promise.all` and `Promise.allSettled` with examples.
14. Write a script using `Promise.all` to fetch data from three APIs in parallel and log the results.
15. Write a script using `Promise.allSettled` to fetch data from three APIs and handle both success and failure cases.

---

### **Promise Utilities**

16. How does `Promise.race` work? Write an example to demonstrate it.
17. Write a function that uses `Promise.race` to implement a timeout for an API call.
18. What is the purpose of `Promise.any`? Write an example where it can be useful.
19. Explain a scenario where using `Promise.allSettled` is better than `Promise.all`.

---

### **Advanced Scenarios**

20. Write a function that accepts an array of promises and retries any rejected promise up to 3 times before giving up.
21. How can you ensure that a cleanup operation (like closing a connection or hiding a loader) is performed even if a promise is rejected?
22. Write a fallback mechanism where, if the main API call fails, a backup API is called instead.

---

### **Practical Use Cases**

23. Implement a function that simulates an API call to fetch data. If the promise fails, provide a default value as a fallback.
24. Write a promise chain that calculates the factorial of a number step by step and logs intermediate results.
25. Simulate a ticket booking system where:
    - Step 1: Check availability.
    - Step 2: Reserve the ticket.
    - Step 3: Confirm payment.
    - Handle any errors in the process gracefully.
