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
