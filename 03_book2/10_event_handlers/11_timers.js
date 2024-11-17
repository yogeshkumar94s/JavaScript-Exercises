// Timers in JavaScript are mechanisms that allow you to schedule the execution of functions or pieces of code after a specified delay or at regular intervals. Timers are commonly used for scenarios like animation, polling, or executing tasks after a certain amount of time has passed.

// There are two main types of timers in JavaScript:

// setTimeout: Executes a function or a piece of code once after a specified delay.
console.log("Start");

setTimeout(function () {
  console.log("Timeout callback after 2000 milliseconds");
}, 2000);

console.log("End");

// In this example, the callback function inside setTimeout is executed after a delay of 2000 milliseconds.

// setInterval: Executes a function or a piece of code repeatedly at a specified interval.

console.log("Start");

setInterval(function () {
  console.log("Interval callback every 1000 milliseconds");
}, 1000);

// In this example, the callback function inside setInterval is executed every 1000 milliseconds.

// Clearing Timers:

// Both setTimeout and setInterval return a unique identifier, which can be used to clear or cancel the timer before it executes.

// clearTimeout: Cancels a timeout created with setTimeout.

const timeoutId = setTimeout(function () {
  console.log("This should not be logged");
}, 2000);

clearTimeout(timeoutId); // The timeout will be canceled, and the callback won't be executed

// clearInterval: Cancels an interval created with setInterval.

const intervalId = setInterval(function () {
  console.log("This will be logged every 1000 milliseconds");
}, 1000);

clearInterval(intervalId); // The interval will be canceled, and the callback won't be executed anymore

//   Nested Timers:
// Timers can be nested, meaning that you can use a timer inside the callback function of another timer.

console.log("Start");

setTimeout(function () {
  console.log("Timeout callback after 2000 milliseconds");

  setTimeout(function () {
    console.log("Nested Timeout callback after another 1000 milliseconds");
  }, 1000);
}, 2000);

console.log("End");

// In this example, the second setTimeout is nested inside the callback of the first one, creating a sequence of timed events.
