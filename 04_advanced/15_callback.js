// A callback in JavaScript is a function that is passed as an argument to another function and is intended to be executed after the completion of some asynchronous operation or at a later point in the program's execution. Callbacks are a fundamental concept in JavaScript, especially when dealing with asynchronous tasks like handling events, making API calls, or reading files.

// Key Characteristics of Callbacks:

//1.0 Passing Functions as Arguments:

// In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned as values.

//2.0 Asynchronous Operations:

// Callbacks are often used to handle asynchronous operations. For example, when making an AJAX request or reading a file, a callback function can be provided to execute once the operation is complete.

fetchDataFromServer((data) => {
  // Callback function to handle the data
  console.log("Data received:", data);
});

//3.0 Event Handling:

//   Callbacks are commonly used to respond to events in the browser, such as button clicks or keyboard input.

document.getElementById("myButton").addEventListener("click", () => {
  // Callback function for button click event
  console.log("Button clicked!");
});

//4.0 Timeouts and Intervals:

//   Callbacks are also employed with setTimeout and setInterval functions to execute code after a specified delay or at regular intervals.

setTimeout(() => {
  // Callback function for delayed execution
  console.log("Delayed execution");
}, 1000);

// Example of a Callback Function:

function fetchData(callback) {
  // Simulating an asynchronous operation (e.g., fetching data from a server)
  setTimeout(() => {
    const data = { message: "Data retrieved successfully" };
    callback(data); // Execute the callback function with the retrieved data
  }, 2000);
}

// Using the fetchData function with a callback
fetchData((result) => {
  console.log(result.message); // Outputs: Data retrieved successfully
});

// In this example, the fetchData function takes a callback as an argument and simulates an asynchronous operation. Once the operation is complete, it executes the provided callback function with the retrieved data.

// Callbacks are crucial for handling asynchronous code in a non-blocking manner, allowing for more responsive and efficient programs. They are a foundational concept in JavaScript, forming the basis for more advanced patterns like Promises and async/await.
