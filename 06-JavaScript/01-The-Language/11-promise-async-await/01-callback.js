/* What is a Callback in JavaScript?

A callback is a function passed as an argument to another function. The receiving function can execute the callback at some later point during its execution. Callbacks are a fundamental concept in JavaScript, especially for handling asynchronous operations.

---

**How Callbacks Work**

1. You **pass a function** (the callback) as an argument to another function.
2. The callback is **invoked** within the receiving function, either immediately, synchronously, or after a certain event (asynchronously).

---

### **Example of a Callback**

#### **Synchronous Callback**

A callback executed immediately.

*/

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// Output:
// Hello, Alice!
// Goodbye!

/* 
 **Asynchronous Callback**

A callback executed after a delay or an event.

*/
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback("Sample Data");
  }, 2000);
}

function processData(data) {
  console.log(`Processing: ${data}`);
}

fetchData(processData);
// Output:
// Data fetched
// Processing: Sample Data

/*

 **Why Use Callbacks?**

JavaScript is a single-threaded, non-blocking language. Callbacks allow JavaScript to:
1. Execute asynchronous operations like file reading, API calls, or timers.
2. Avoid "blocking" the main thread while waiting for these operations to complete.

---

### **Use-Cases of Callbacks**

#### 1. **Event Handling**
Callbacks are widely used in handling DOM events.

*/
document.getElementById("myButton").addEventListener("click", () => {
  console.log("Button clicked!");
});

/*

 2. **Asynchronous Operations**

Used in timers, file operations, and fetching data from APIs.

*/
setTimeout(() => {
  console.log("This message appears after 2 seconds!");
}, 2000);

/*

 3. **Higher-Order Array Methods**
Array methods like `map`, `filter`, and `forEach` rely on callbacks.

*/

const numbers = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num * 2));
// Output:
// 2
// 4
// 6
// 8

/*

 4. **Custom Function Logic**
You can use callbacks to inject dynamic behavior into functions.

*/
function performOperation(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(performOperation(5, 3, add)); // Output: 8
console.log(performOperation(5, 3, multiply)); // Output: 15

/*

 **Handling Callback Hell**

When callbacks are deeply nested, it creates "callback hell," making the code difficult to read and maintain.

*/

setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

/*

**Solution**: Use Promises or `async/await` to avoid this issue.


 **Advantages of Callbacks**

1. **Flexibility**: Provide dynamic behavior to functions.
2. **Modularity**: Break down complex logic into smaller, reusable pieces.
3. **Asynchronous Handling**: Efficiently handle non-blocking operations.

---

### **Summary**
- A **callback** is a function passed into another function to be executed later.
- **Use-cases**: Asynchronous tasks, event handling, array methods, and more.
- **Challenge**: Callback hell, solved with Promises or `async/await`.

*/

// ----------------------

/*

**1. Introduction: Callbacks**

Before diving into Promises and async/await, let's understand the concept of callbacks.

**What is a Callback?**

A callback is a function that is passed as an argument to another function and is executed after the first function completes its task. It's a common pattern in asynchronous programming, where operations like network requests, file I/O, or timers take time to complete.

**Why Callbacks?**

* **Asynchronous Operations:** Callbacks allow us to handle asynchronous operations without blocking the main thread of execution.
* **Non-Blocking Code:** This makes our code more responsive and efficient.

**Example: A Simple Callback**

```javascript
function fetchData(url, callback) {
  // Simulate a network request
  setTimeout(() => {
    const data = { name: 'Alice', age: 30 };
    callback(data);
  }, 2000); // Simulate a 2-second delay
}

fetchData('https://api.example.com/user', (data) => {
  console.log(data); // Output: { name: 'Alice', age: 30 }
});
```

**The Problem with Callbacks: Callback Hell**

As the complexity of asynchronous operations increases, using nested callbacks can lead to the infamous "callback hell":

```javascript
fetchData(url1, (data1) => {
  fetchData(url2, (data2) => {
    fetchData(url3, (data3) => {
      // ...
    });
  });
});
```

This nested structure becomes difficult to read, maintain, and debug. To address this issue, Promises were introduced.

In the next lesson, we'll delve into Promises and how they help us write cleaner and more manageable asynchronous code.
*/

// Q 1: What is a callback function? Explain its purpose in JavaScript.

// A callback function is a function that is passed as an argument to another function. It's executed after the first function completes its task.

// **Example 1: Simple Callback**

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// In this example, `sayGoodbye` is the callback function. It's passed to the `greet` function and executed after the greeting message is printed.

// **Example 2: Asynchronous Callback**

function fetchData(url, callback) {
  setTimeout(() => {
    const data = { name: "Alice", age: 30 };
    callback(data);
  }, 2000);
}

fetchData("https://api.example.com/user", (data) => {
  console.log(data);
});

// Here, the callback function is used to handle the asynchronous result of fetching data from a URL. The callback is executed once the data is retrieved after the 2-second delay.

// Q 2. Why are callbacks essential for asynchronous programming?

/*

Callbacks are essential for asynchronous programming because they allow us to handle non-blocking operations, ensuring that our code remains responsive and efficient. Here's why:

**1. Non-Blocking Operations:**
   - Many operations in JavaScript, such as network requests, file I/O, or timers, can take time to complete.
   - If we were to wait for these operations to finish synchronously, our code would become unresponsive and block other tasks.
   - Callbacks enable us to initiate these operations and continue executing other code while waiting for the result.

**2. Sequential Execution:**
   - Callbacks allow us to chain asynchronous operations sequentially.
   - We can pass a callback to one function, and within that callback, we can initiate another asynchronous operation with its own callback.
   - This allows us to manage complex workflows involving multiple asynchronous steps.

**3. Event-Driven Programming:**
   - Callbacks are fundamental to event-driven programming, where code is executed in response to specific events like button clicks, mouse movements, or data arrival.
   - By registering callback functions for these events, we can react to them as they occur.

In summary, callbacks are crucial for asynchronous programming as they enable us to write non-blocking, responsive, and event-driven code that can handle complex asynchronous operations efficiently.

*/

// Q 3: What is the primary drawback of using nested callbacks?

/*

The primary drawback of using nested callbacks is the creation of a structure known as "callback hell." This occurs when multiple asynchronous operations are chained together, leading to deeply nested callback functions. 

**Key issues of callback hell:**

* **Readability:** The code becomes increasingly difficult to read and understand as the nesting level increases.
* **Maintainability:** It's challenging to maintain and modify such code, as changes in one part can have unintended consequences in others.
* **Error Handling:** Error handling becomes complex, as errors can propagate through multiple levels of nested callbacks.
* **Debugging:** Debugging nested callbacks can be tedious and time-consuming, as it requires tracing the execution flow through multiple levels of function calls.

To mitigate these issues, modern JavaScript provides more elegant solutions like Promises and async/await, which allow for a more linear and readable approach to asynchronous programming.
 */

// Q 4: How can you improve code readability when using callbacks?

/*

**Question 4: How can you improve code readability when using callbacks?**

While callbacks are a powerful tool for asynchronous programming, they can lead to code that is difficult to read and maintain, especially when nested deeply. Here are some strategies to improve code readability when using callbacks:

1. **Consistent Indentation:**
   - Use consistent indentation to visually represent the nesting level of callbacks.
   - This makes it easier to follow the control flow.

2. **Early Returns:**
   - Return early from callback functions to avoid excessive nesting.
   - This can simplify the code and reduce the number of nested levels.

3. **Naming Conventions:**
   - Use clear and descriptive names for callback functions.
   - This helps to understand their purpose and how they fit into the overall code flow.

4. **Breaking Down Complex Callbacks:**
   - If a callback function is too long or complex, consider breaking it down into smaller, more focused functions.
   - This can improve readability and make the code easier to test.

5. **Using Higher-Order Functions:**
   - Utilize higher-order functions like `map`, `filter`, and `reduce` to process data asynchronously.
   - These functions can help to reduce the number of nested callbacks and make the code more concise.

By following these guidelines, you can write more readable and maintainable callback-based code, even when dealing with complex asynchronous operations.


*/

// **Question 5: Provide a real-world example of a callback function in JavaScript.**

// A common real-world example of a callback function in JavaScript is handling asynchronous events, such as button clicks or network requests.

// **Example: Button Click Event**

const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  console.log("Button clicked!");
  // Perform other actions, like making an API request or updating the DOM
});

// In this example, the anonymous function passed to `addEventListener` is a callback function. It's triggered when the button is clicked.

// **Example: Network Request with Fetch API**

fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Do something with the fetched data
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Here, the `then` and `catch` methods take callback functions. The `then` callback is executed when the promise is resolved with the fetched data, while the `catch` callback is executed if an error occurs during the request.

// Q 6: Write a JavaScript function that takes a callback as an argument and logs a message after a 2-second delay.

/*
```javascript
function logAfterDelay(message, delay, callback) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, delay);
}

logAfterDelay("Hello, world!", 2000, () => {
  console.log("Message logged after 2 seconds.");
});
```

In this example:

1. We define a function `logAfterDelay` that takes three arguments:
   - `message`: The message to be logged.
   - `delay`: The delay in milliseconds before logging the message.
   - `callback`: A callback function to be executed after the message is logged.

2. Inside the `logAfterDelay` function, we use `setTimeout` to schedule the logging of the message after the specified delay.
3. Once the message is logged, the callback function is invoked.

In the second part of the code, we call the `logAfterDelay` function with a message, a 2-second delay, and an anonymous callback function that logs a message indicating that the initial message has been logged.


*/

/*
**Question 7: Explain the concept of "callback hell" and how to avoid it.**

**Callback hell** is a term used to describe a situation where multiple nested callback functions are used to handle asynchronous operations. This can lead to code that is difficult to read, understand, and maintain.

**Here's a simplified example of callback hell:**

```javascript
fetchData(url1, (data1) => {
  fetchData(url2, (data2) => {
    fetchData(url3, (data3) => {
      // Process data1, data2, and data3
    });
  });
});
```

As you can see, the code becomes increasingly indented and difficult to follow as more asynchronous operations are chained.

**To avoid callback hell, consider these approaches:**

1. **Promises:**
   - Promises provide a more structured way to handle asynchronous operations.
   - They allow you to chain asynchronous operations in a more linear fashion, making the code easier to read and understand.

2. **Async/Await:**
   - Async/await is a syntactic sugar for Promises that makes asynchronous code look more synchronous.
   - It allows you to write asynchronous code in a sequential style, further improving readability.

3. **Higher-Order Functions:**
   - Higher-order functions like `map`, `filter`, and `reduce` can be used to process data asynchronously in a more concise and readable way.

By using these techniques, you can write cleaner, more maintainable, and easier-to-understand asynchronous code.

*/

// Q 8: Given a function fetchData(url, callback) that fetches data from a URL, write a code snippet to demonstrate how to use it with a callback.

/*

```javascript
fetchData('https://api.example.com/data', (data) => {
  console.log(data);
});
```

In this example, the `fetchData` function takes a URL and a callback function as arguments. It fetches data from the specified URL and passes the retrieved data to the callback function once the request is complete.

The callback function logs the received data to the console.

*/

/*

**Question 9: What are the potential issues with using callbacks extensively in large-scale applications?**

While callbacks are a powerful tool for asynchronous programming, using them extensively in large-scale applications can lead to several issues:

1. **Callback Hell:** As mentioned earlier, deeply nested callbacks can make code difficult to read, understand, and maintain.
2. **Error Handling:** Managing errors in nested callbacks can be challenging. Unhandled exceptions can propagate through multiple levels of callbacks, making it difficult to identify the root cause.
3. **Code Readability:** Complex asynchronous flows can be hard to follow when using callbacks, especially when they involve multiple asynchronous operations.
4. **Testing:** Testing asynchronous code with callbacks can be more complex, as it often requires mocking or stubbing asynchronous operations.
5. **Performance:** In some cases, excessive use of callbacks can impact performance, particularly when dealing with a large number of concurrent asynchronous operations.

To mitigate these issues, modern JavaScript provides more powerful and elegant solutions like Promises and async/await, which offer a more structured and readable approach to asynchronous programming. 

 */

/*

**Question 10: How do Promises and async/await address the limitations of callbacks?**

Promises and async/await are modern JavaScript features designed to address the limitations of callbacks, particularly callback hell. 

**Promises:**
* **Cleaner Syntax:** Promises provide a more structured and readable way to handle asynchronous operations.
* **Chaining:** They allow you to chain asynchronous operations using `.then()` and `.catch()` methods, improving code readability.
* **Error Handling:** Promises provide a built-in mechanism for error handling using `.catch()`.

**Async/Await:**
* **Synchronous-like Syntax:** Async/await allows you to write asynchronous code in a synchronous-like style, making it easier to read and understand.
* **Simplified Error Handling:** Error handling is simplified with `try...catch` blocks, similar to synchronous code.

**Example:**

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```

This code, using async/await, is much more readable than the equivalent callback-based code. It avoids the nested structure of callback hell and provides a more straightforward way to handle asynchronous operations.


*/
