// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, making them more efficient. In the context of web development, debouncing is often used to control the frequency of certain events, especially those triggered by user input such as scroll events, resize events, and key presses.

// The main idea behind debouncing is to delay the execution of a function until after a certain amount of time has passed since the last time the function was invoked. This is particularly useful in scenarios where frequent invocation of a function might lead to performance issues or unnecessary resource consumption.

function debounce(func, delay) {
  let timeoutId;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}

// Example usage:

const expensiveOperation = debounce(function () {
  console.log("Expensive operation executed");
}, 1000);

// Call the debounced function multiple times
expensiveOperation();
expensiveOperation();
expensiveOperation();

// Only after 1000 milliseconds of inactivity will the expensive operation be executed

//   In this example:

// The debounce function takes a function (func) and a delay time (delay) as parameters.
// It returns a new function that, when invoked, will clear any existing timeout and set a new one.
// The actual function (func) will only be executed if there is no further invocation of the debounced function within the specified delay.

// Debouncing is often used to optimize performance in scenarios such as:

// Handling User Input: For example, debouncing the input event on a search bar to avoid sending a request for every keystroke.
// Window Resize/Scroll Events: Debouncing can be useful to control the frequency of updates in response to these events.
// API Requests: If an API request is triggered by user input, debouncing can prevent a flood of unnecessary requests.
