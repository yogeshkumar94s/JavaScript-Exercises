// The event loop is a fundamental concept in JavaScript and other languages with asynchronous capabilities. It is a mechanism that allows JavaScript to handle multiple tasks concurrently without blocking the execution of the main program

// Here's an overview of how the event loop works in a typical JavaScript environment, such as a web browser or Node.js:

// 1.0 Call Stack:

// The call stack is a data structure that keeps track of the execution context of functions. When a function is called, a new frame is pushed onto the stack, and when the function completes, its frame is popped off the stack.

// 2.0 Callback Queue:

// Asynchronous tasks, such as I/O operations, timers, and events, are processed outside the normal flow of execution and are placed in the callback queue when they are ready to be executed.

// 3.0 Event Loop:

// The event loop continuously checks the call stack and the callback queue.
// If the call stack is empty, the event loop takes the first callback from the queue and pushes it onto the stack, allowing it to execute.

// 4.0 Execution of Callback:

// The callback is executed, and the process repeats. The event loop continually checks the stack and the queue, ensuring that asynchronous tasks are executed when appropriate.

// Here's a simplified example to illustrate the event loop:

console.log("Start");

// Asynchronous task: setTimeout
setTimeout(function () {
  console.log("Inside setTimeout callback");
}, 2000);

console.log("End");

// In this example:
// "Start" and "End" are logged to the console.
// The setTimeout function is asynchronous and will be moved to the callback queue after 2000 milliseconds.
// The event loop continually checks the stack. When the stack is empty, it takes the callback from the queue and pushes it onto the stack for execution.

// Output (approximately):

// Start
// End
// // After 2 seconds:
// Inside setTimeout callback

// This illustrates that while the setTimeout callback is asynchronous and doesn't block the main program, the order of execution is not guaranteed. JavaScript's event-driven nature allows it to handle multiple tasks concurrently.

// It's important to note that the event loop is a part of the JavaScript runtime environment, and its behavior may vary between environments (e.g., browsers, Node.js). Understanding how the event loop operates is essential for writing efficient and non-blocking asynchronous code.
