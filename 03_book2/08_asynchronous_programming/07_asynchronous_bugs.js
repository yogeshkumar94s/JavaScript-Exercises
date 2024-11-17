// Asynchronous programming in JavaScript can introduce unique challenges and potential bugs due to the non-blocking nature of asynchronous operations. Understanding and addressing these issues is crucial for writing robust and maintainable asynchronous code

// Race Conditions:
// Issue: Concurrent asynchronous operations can lead to race conditions where the order of execution is not guaranteed.
// Solution: Use proper synchronization mechanisms, such as Promise.all or async/await, to ensure dependencies between asynchronous operations.

//1.0 Race condition example
let data;

fetchData1().then((result) => {
  data = result;
});

fetchData2().then((result) => {
  console.log(data); // May be undefined due to race condition
});

// Using Promise.all
Promise.all([fetchData1(), fetchData2()]).then(([result1, result2]) => {
  console.log(result1, result2);
});

// Using async/await
async function fetchDataAsync() {
  const result1 = await fetchData1();
  const result2 = await fetchData2();
  console.log(result1, result2);
}

//2.0 Uncaptured Errors in Event Handlers:

// Issue: Errors that occur in asynchronous event handlers, such as those attached to setTimeout or addEventListener, might go unnoticed.
// Solution: Always handle errors in event handlers and log or handle them appropriately.

// Uncaptured error in setTimeout
setTimeout(function () {
  throw new Error("Uncaptured error");
}, 1000);

// Handling error in setTimeout
setTimeout(function () {
  try {
    throw new Error("Captured error");
  } catch (error) {
    console.error(error);
  }
}, 1000);

//3.0 Callback Execution Context:

// Issue: The context (this value) within callbacks might not be what you expect, especially when using arrow functions.
// Solution: Be mindful of the context and use function expressions or bind methods as needed.

// Callback context issue
const obj = {
  value: 42,
  fetchData: function () {
    setTimeout(function () {
      console.log(this.value); // 'this' is not the obj
    }, 1000);
  },
};

obj.fetchData(); // Outputs 'undefined'

// Using arrow function to preserve context
const obj2 = {
  value: 42,
  fetchData: function () {
    setTimeout(() => {
      console.log(this.value); // 'this' is the obj
    }, 1000);
  },
};

obj2.fetchData(); // Outputs '42'

// By being aware of these common asynchronous bugs and applying best practices, you can write more reliable and maintainable asynchronous JavaScript code. Additionally, tools like linters and static code analyzers can help catch potential issues early in the development process.
