### **Higher-Order Functions (HOFs) in JavaScript**

A **higher-order function** is a function that either:

1. **Takes another function as an argument**, or
2. **Returns a function as its result**, or
3. **Does both**.

Higher-order functions allow you to write more flexible, reusable, and concise code. They are widely used in JavaScript, especially for functional programming.

---

### **Characteristics of Higher-Order Functions**

- They operate on other functions, either by taking them as arguments or returning them.
- Examples: `map`, `filter`, `reduce`, `setTimeout`, event listeners, and custom HOFs.

---

### **Syntax**

```javascript
// HOF taking a function as an argument
function execute(fn) {
  fn(); // Call the passed function
}

// HOF returning a function
function multiplier(factor) {
  return function (value) {
    return value * factor;
  };
}
```

---

### **Use-Cases of Higher-Order Functions**

#### 1. **Array Methods (`map`, `filter`, `reduce`)**

##### **`map`**

Transforms each element in an array by applying a callback.

```javascript
const numbers = [1, 2, 3, 4];
const squared = numbers.map((num) => num * num);
console.log(squared); // Output: [1, 4, 9, 16]
```

##### **`filter`**

Filters elements in an array based on a condition.

```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // Output: [2, 4]
```

##### **`reduce`**

Reduces an array to a single value.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
```

---

#### 2. **Event Handling**

Functions like `addEventListener` accept callbacks, making them higher-order functions.

```javascript
document.getElementById("btn").addEventListener("click", () => {
  console.log("Button clicked!");
});
```

---

#### 3. **Custom Function Composition**

You can create reusable logic by returning functions.

```javascript
function createMultiplier(factor) {
  return function (value) {
    return value * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

---

#### 4. **Asynchronous Programming**

Functions like `setTimeout` and `setInterval` are HOFs because they take a callback.

```javascript
setTimeout(() => {
  console.log("This message is delayed by 1 second");
}, 1000);
```

---

#### 5. **Control Flow Utilities**

HOFs allow conditional execution of functions.

```javascript
function conditionalExecution(condition, fn) {
  return condition ? fn : () => console.log("Condition not met");
}

const sayHello = () => console.log("Hello!");
const execute = conditionalExecution(true, sayHello);
execute(); // Output: Hello!
```

---

### **Custom Higher-Order Function Example**

#### **Logger Wrapper**

Wrap any function with logging functionality.

```javascript
function loggerWrapper(fn) {
  return function (...args) {
    console.log(`Function called with arguments: ${args}`);
    return fn(...args);
  };
}

const add = (a, b) => a + b;
const loggedAdd = loggerWrapper(add);

console.log(loggedAdd(2, 3)); // Output: Function called with arguments: 2,3 \n 5
```

---

### **Advantages of Higher-Order Functions**

1. **Code Reusability**: Write generic functions that handle diverse tasks.
2. **Cleaner Syntax**: Avoid repetitive logic using built-in HOFs.
3. **Modularity**: Break down code into smaller, reusable parts.
4. **Functional Programming**: Enables writing declarative code.

---

### **Real-World Use-Cases**

1. **Middleware in Express.js**
   Middleware functions in Express are HOFs.

   ```javascript
   app.use((req, res, next) => {
     console.log("Middleware executed");
     next(); // Call the next middleware
   });
   ```

2. **React's Functional Components**
   Functional components can take HOFs like `useState`, `useEffect`, or custom hooks.

   ```javascript
   const [count, setCount] = useState(0);
   ```

3. **Decorators**
   Modify behavior of functions dynamically.

   ```javascript
   function timeExecution(fn) {
     return function (...args) {
       console.time("Execution Time");
       const result = fn(...args);
       console.timeEnd("Execution Time");
       return result;
     };
   }

   const slowFunction = (num) => {
     for (let i = 0; i < 1e6; i++) {}
     return num * 2;
   };

   const timedFunction = timeExecution(slowFunction);
   console.log(timedFunction(10));
   ```

---

### **Conclusion**

- **Higher-Order Functions** are essential for writing clean, reusable, and declarative code.
- Common use-cases include array transformations, event handling, asynchronous programming, and function composition.
- HOFs simplify complex logic by abstracting it into smaller, manageable parts.

---

## Questions about **Higher-Order Functions (HOFs)** in JavaScript, ranging from basic to advanced:

---

### **Basic Questions**

### 1. What is a Higher-Order Function (HOF) in JavaScript? Explain with a simple example.

### What is a Higher-Order Function (HOF)?

A **Higher-Order Function (HOF)** is a function that either:

1. Takes another function as an argument, or
2. Returns a function as its result.

HOFs are a key feature of JavaScript and enable functional programming. Examples of HOFs include array methods like `map`, `filter`, `reduce`, and functions like `setTimeout`.

---

### Example 1: HOF that Takes a Function as an Argument

```javascript
// Higher-Order Function
const greet = (name, formatter) => {
  return formatter(name);
};

// Callback function to format the greeting
const politeGreeting = (name) => `Hello, ${name}!`;
const casualGreeting = (name) => `Hey, ${name}!`;

// Using the HOF with different callbacks
console.log(greet("Alice", politeGreeting)); // Output: Hello, Alice!
console.log(greet("Bob", casualGreeting)); // Output: Hey, Bob!
```

#### Explanation:

- `greet` is a higher-order function that takes a callback function (`formatter`) as its second argument.
- The `formatter` function determines how the name is formatted.
- By passing different callback functions, we can customize the behavior of the `greet` function.

---

### Example 2: HOF that Returns a Function

```javascript
// Higher-Order Function that returns a function
const multiplier = (factor) => {
  return (num) => num * factor;
};

// Create specific multiplier functions
const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

#### Explanation:

- `multiplier` is a higher-order function that returns a new function.
- The returned function remembers the `factor` value using **closures**.
- The specific multiplier functions (`double`, `triple`) multiply numbers by the factor provided to the `multiplier`.

---

### Benefits of Higher-Order Functions:

1. **Reusability:** You can create generic functions and customize their behavior with callbacks.
2. **Readability:** HOFs like `map` and `filter` make code more concise and declarative.
3. **Functional Programming:** HOFs are foundational for writing functional, cleaner JavaScript code.

### 2. Write a higher-order function `makeMultiplier` that accepts a number `n` and returns a function that multiplies any number by `n`.

Example:

```javascript
const double = makeMultiplier(2);
console.log(double(4)); // Output: 8
```

Here’s the implementation of the `makeMultiplier` higher-order function:

### Code:

```javascript
// Higher-order function
const makeMultiplier = (n) => {
  return (number) => number * n;
};

// Example usage
const double = makeMultiplier(2); // Creates a multiplier function that multiplies by 2
const triple = makeMultiplier(3); // Creates a multiplier function that multiplies by 3

console.log(double(4)); // Output: 8
console.log(triple(4)); // Output: 12
```

### Explanation:

1. **Higher-Order Function `makeMultiplier`:**

   - Takes a number `n` as input.
   - Returns a new function that takes another number as input and multiplies it by `n`.

2. **Inner Function (Returned by `makeMultiplier`):**

   - This function captures the value of `n` through a **closure** and uses it to perform the multiplication.

3. **Usage:**
   - `makeMultiplier(2)` returns a function that multiplies any input by `2` (e.g., `double`).
   - `makeMultiplier(3)` returns a function that multiplies any input by `3` (e.g., `triple`).

### Output:

```javascript
double(4); // Multiplies 4 by 2, returns 8
triple(4); // Multiplies 4 by 3, returns 12
```

### 3. Explain how a higher-order function can accept a function as an argument. Write a function `applyFunction` that accepts an array of numbers and a callback function to modify the numbers (e.g., double or square them).

A **higher-order function** can accept a function as an argument to dynamically decide how it processes data. The passed-in function (callback) determines the behavior of the higher-order function. This is useful for making code reusable and flexible.

---

### Code Example:

Here’s the `applyFunction` higher-order function:

```javascript
// Higher-order function that accepts a callback
const applyFunction = (numbers, callback) => {
  const result = [];
  for (let num of numbers) {
    result.push(callback(num)); // Apply the callback to each number
  }
  return result;
};

// Callback functions
const double = (num) => num * 2; // Doubles a number
const square = (num) => num ** 2; // Squares a number

// Example usage
const numbers = [1, 2, 3, 4, 5];

console.log(applyFunction(numbers, double)); // Output: [2, 4, 6, 8, 10]
console.log(applyFunction(numbers, square)); // Output: [1, 4, 9, 16, 25]
```

---

### Explanation:

1. **Higher-Order Function (`applyFunction`):**

   - Takes two arguments:
     - `numbers`: An array of numbers.
     - `callback`: A function that specifies how each number should be modified.
   - Loops through the `numbers` array using `for...of`.
   - Applies the `callback` to each number and stores the result in a new array.

2. **Callback Functions (`double`, `square`):**

   - `double`: Multiplies a number by 2.
   - `square`: Raises a number to the power of 2.

3. **Usage:**
   - Pass the `numbers` array and a specific callback function (`double` or `square`) to `applyFunction`.
   - The callback dynamically determines how the numbers are processed.

---

### Output:

```javascript
applyFunction(numbers, double); // Returns [2, 4, 6, 8, 10]
applyFunction(numbers, square); // Returns [1, 4, 9, 16, 25]
```

### 4. Write a higher-order function `operation` that takes two numbers and a callback function (`add`, `subtract`, `multiply`, etc.) as arguments and returns the result of the operation.

Here’s how you can implement the `operation` higher-order function:

### Code:

```javascript
// Higher-order function
const operation = (num1, num2, callback) => {
  return callback(num1, num2);
};

// Callback functions
const add = (a, b) => a + b; // Adds two numbers
const subtract = (a, b) => a - b; // Subtracts the second number from the first
const multiply = (a, b) => a * b; // Multiplies two numbers
const divide = (a, b) => (b !== 0 ? a / b : "Division by zero"); // Divides two numbers

// Example usage
console.log(operation(10, 5, add)); // Output: 15
console.log(operation(10, 5, subtract)); // Output: 5
console.log(operation(10, 5, multiply)); // Output: 50
console.log(operation(10, 5, divide)); // Output: 2
console.log(operation(10, 0, divide)); // Output: "Division by zero"
```

---

### Explanation:

1. **Higher-Order Function (`operation`):**

   - Takes three arguments:
     - `num1`: The first number.
     - `num2`: The second number.
     - `callback`: A function that specifies the operation to perform on the two numbers.
   - Calls the `callback` function with `num1` and `num2` as arguments and returns the result.

2. **Callback Functions:**

   - `add`: Adds two numbers.
   - `subtract`: Subtracts the second number from the first.
   - `multiply`: Multiplies two numbers.
   - `divide`: Divides the first number by the second (with a check to prevent division by zero).

3. **Usage:**
   - Pass two numbers and one of the callback functions (`add`, `subtract`, `multiply`, `divide`) to `operation` to get the result of that operation.

---

### Output:

```javascript
operation(10, 5, add); // 15
operation(10, 5, subtract); // 5
operation(10, 5, multiply); // 50
operation(10, 5, divide); // 2
operation(10, 0, divide); // "Division by zero"
```

### 5. Can you pass a function as an argument to another function? Provide an example where you pass a function to be executed inside another function.

Yes, you can pass a function as an argument to another function in JavaScript. This is a fundamental feature of JavaScript and enables the use of higher-order functions.

---

### Example: Passing a Function as an Argument

```javascript
// A function that accepts another function as an argument
const executeFunction = (callback) => {
  console.log("Before executing the callback");
  callback(); // Execute the passed function
  console.log("After executing the callback");
};

// A function to be passed as a callback
const sayHello = () => {
  console.log("Hello, World!");
};

// Example usage
executeFunction(sayHello);
```

---

### Output:

```
Before executing the callback
Hello, World!
After executing the callback
```

---

### Explanation:

1. **`executeFunction`**:

   - A function that takes a `callback` as its parameter.
   - It executes the `callback` function inside its body.

2. **`sayHello`**:

   - A simple function that logs "Hello, World!" to the console.
   - This function is passed as an argument to `executeFunction`.

3. **Execution**:
   - When `executeFunction` is called with `sayHello` as the argument, it logs some text, executes the `sayHello` function, and then logs more text.

---

### Why is this Useful?

This pattern is widely used in JavaScript, for example:

- **Event listeners**:
  ```javascript
  button.addEventListener("click", () => {
    console.log("Button clicked!");
  });
  ```
- **Array methods** like `map`, `filter`, and `reduce`:
  ```javascript
  const numbers = [1, 2, 3];
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled); // Output: [2, 4, 6]
  ```

---

### **Intermediate Questions**

### 6. Write a higher-order function `filterArray` that accepts an array and a callback function to filter the array based on a condition.

Example:

```javascript
filterArray([1, 2, 3, 4], (num) => num % 2 === 0);
```

Here’s how you can implement the `filterArray` higher-order function:

---

### Code:

```javascript
// Higher-order function to filter an array
const filterArray = (arr, callback) => {
  const result = [];
  for (let element of arr) {
    if (callback(element)) {
      // Apply the callback to check the condition
      result.push(element);
    }
  }
  return result;
};

// Example usage
const isEven = (num) => num % 2 === 0; // Callback to filter even numbers

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, isEven); // Filters even numbers
console.log(evenNumbers); // Output: [2, 4, 6]

// Inline callback to filter odd numbers
const oddNumbers = filterArray(numbers, (num) => num % 2 !== 0);
console.log(oddNumbers); // Output: [1, 3, 5]
```

---

### Explanation:

1. **Higher-Order Function (`filterArray`):**

   - Takes two arguments:
     - `arr`: The array to filter.
     - `callback`: A function that defines the filtering condition.
   - Loops through the array using `for...of` and applies the `callback` to each element.
   - If the `callback` returns `true` for an element, that element is added to the `result` array.

2. **Callback Function (`isEven`):**

   - `isEven`: A simple function that returns `true` if the number is even (`num % 2 === 0`).
   - Can be passed as an argument to `filterArray` to filter even numbers.

3. **Inline Callback:**
   - You can also use an inline arrow function, like `num => num % 2 !== 0`, to filter odd numbers.

---

### Example Outputs:

```javascript
filterArray([1, 2, 3, 4], (num) => num % 2 === 0); // Output: [2, 4]
filterArray([1, 2, 3, 4], (num) => num > 2); // Output: [3, 4]
filterArray([1, 2, 3, 4], (num) => num < 3); // Output: [1, 2]
```

### 7. What is the difference between a higher-order function and a regular function? Give examples where both are used.

### **Difference Between Higher-Order Functions and Regular Functions:**

| **Aspect**     | **Higher-Order Function**                                                    | **Regular Function**                                                                   |
| -------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Definition** | A function that takes another function as an argument or returns a function. | A function that performs an operation without accepting or returning another function. |
| **Purpose**    | Enables functional programming, code reuse, and dynamic behavior.            | Used to perform basic operations or logic.                                             |
| **Examples**   | `map`, `filter`, `reduce`, custom HOFs.                                      | `sum`, `greet`, and simple utility functions.                                          |

---

### **Examples of Both:**

#### **1. Higher-Order Function Example:**

A higher-order function accepts a callback or returns a function.

```javascript
// Higher-order function: Accepts a callback
const applyOperation = (a, b, operation) => {
  return operation(a, b);
};

// Callback functions
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

// Using the higher-order function
console.log(applyOperation(5, 3, add)); // Output: 8
console.log(applyOperation(5, 3, multiply)); // Output: 15
```

**Explanation:**

- `applyOperation` takes two numbers (`a`, `b`) and a callback (`operation`).
- Different operations (like `add` and `multiply`) can be dynamically passed as callbacks.

---

#### **2. Regular Function Example:**

A regular function performs a specific operation and does not involve other functions.

```javascript
// Regular function to add two numbers
const sum = (x, y) => {
  return x + y;
};

// Regular function to greet a user
const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(sum(4, 6)); // Output: 10
console.log(greet("Alice")); // Output: Hello, Alice!
```

**Explanation:**

- `sum` simply adds two numbers and returns the result.
- `greet` formats a greeting string for the provided name.

---

### **Using Both Together:**

```javascript
// Higher-order function using a regular function as a callback
const filterArray = (arr, callback) => {
  const result = [];
  for (let item of arr) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
};

// Regular function as a callback
const isEven = (num) => num % 2 === 0;

// Usage
const numbers = [1, 2, 3, 4, 5];
console.log(filterArray(numbers, isEven)); // Output: [2, 4]
```

**Explanation:**

- `filterArray` is a higher-order function that filters an array using a callback.
- `isEven` is a regular function passed as a callback to `filterArray`.

---

### **Key Takeaways:**

- A **higher-order function** is more abstract and often used for reusable and dynamic behavior.
- A **regular function** performs a straightforward, single-purpose task.

### 8. Write a function `mapArray` that behaves like the `Array.prototype.map` method. It should take an array and a callback function, then return a new array with the results of calling the callback on each element.

Here’s how you can implement a custom `mapArray` function that behaves like the `Array.prototype.map` method:

---

### Code:

```javascript
// Custom mapArray function
const mapArray = (arr, callback) => {
  const result = [];
  for (let element of arr) {
    result.push(callback(element)); // Apply callback to each element and add to the result array
  }
  return result;
};

// Example usage
const numbers = [1, 2, 3, 4, 5];

// Callback to double each number
const double = (num) => num * 2;

// Callback to square each number
const square = (num) => num ** 2;

// Using mapArray with different callbacks
console.log(mapArray(numbers, double)); // Output: [2, 4, 6, 8, 10]
console.log(mapArray(numbers, square)); // Output: [1, 4, 9, 16, 25]
```

---

### Explanation:

1. **`mapArray` Function:**

   - Accepts two arguments:
     - `arr`: The array to be transformed.
     - `callback`: A function that specifies the transformation logic for each element.
   - Creates an empty `result` array.
   - Loops through each element of the input array using `for...of`.
   - Applies the `callback` to each element and pushes the result to the `result` array.
   - Returns the new `result` array after the loop.

2. **Callback Functions:**

   - `double`: Multiplies each number by 2.
   - `square`: Raises each number to the power of 2.

3. **Usage:**
   - Call `mapArray` with an array and a specific callback function to transform the array based on the logic in the callback.

---

### Output:

```javascript
mapArray([1, 2, 3], (num) => num * 2); // Output: [2, 4, 6]
mapArray([1, 2, 3], (num) => num ** 2); // Output: [1, 4, 9]
```

### 9. How do higher-order functions help in composing other functions? Write a function `compose` that accepts two functions and returns a function that applies both in sequence (i.e., `f(g(x))`).

Higher-order functions enable **function composition**, which allows you to combine smaller, reusable functions to build more complex logic. This is especially useful in functional programming.

### **Function Composition**

Composition is the process of applying one function to the result of another. For example, `f(g(x))` means applying `g(x)` first and then passing the result to `f`.

---

### **Implementation of `compose`**

Here’s how you can implement a `compose` function:

```javascript
// Higher-order function for composition
const compose = (f, g) => {
  return (x) => f(g(x));
};

// Example functions to compose
const double = (x) => x * 2;
const square = (x) => x ** 2;

// Composed function
const doubleThenSquare = compose(square, double); // f(g(x)) => square(double(x))
const squareThenDouble = compose(double, square); // f(g(x)) => double(square(x))

// Example usage
console.log(doubleThenSquare(3)); // Output: 36 (double(3) = 6, square(6) = 36)
console.log(squareThenDouble(3)); // Output: 18 (square(3) = 9, double(9) = 18)
```

---

### **Explanation:**

1. **`compose` Function:**

   - Accepts two functions `f` and `g`.
   - Returns a new function that:
     - Takes an argument `x`.
     - First applies `g(x)` (inner function).
     - Then applies `f(g(x))` (outer function).

2. **Example Functions:**

   - `double`: Multiplies the input by 2.
   - `square`: Squares the input.

3. **Composed Functions:**
   - `doubleThenSquare`: Doubles the input and then squares it.
   - `squareThenDouble`: Squares the input and then doubles it.

---

### **Output:**

```javascript
doubleThenSquare(3); // Output: 36
squareThenDouble(3); // Output: 18
```

---

### **Benefits of Composition:**

- Encourages **code reuse** by combining smaller functions.
- Makes code more readable and modular.
- Useful for building pipelines (e.g., data transformations).

### 10. Create a higher-order function `debounce` that accepts a function and a delay. The returned function should only call the original function after the delay, even if it’s called multiple times in quick succession.

A `debounce` function ensures that a given function is only executed after a specified delay, even if it’s called multiple times in rapid succession. This is especially useful for optimizing performance in scenarios like handling resize, scroll, or keypress events.

---

### Implementation of `debounce`

```javascript
// Higher-order function: debounce
const debounce = (func, delay) => {
  let timeoutId; // Holds the reference to the timeout
  return (...args) => {
    // Clear any existing timeout
    clearTimeout(timeoutId);

    // Set a new timeout to invoke the function after the delay
    timeoutId = setTimeout(() => {
      func(...args); // Call the original function with arguments
    }, delay);
  };
};

// Example usage
const logMessage = (message) => {
  console.log(message);
};

// Debounced function
const debouncedLog = debounce(logMessage, 2000);

// Simulate multiple calls
debouncedLog("Call 1"); // Only this call will execute after 2 seconds
debouncedLog("Call 2"); // Overrides the previous call
debouncedLog("Call 3"); // Overrides the previous call
// After 2 seconds, "Call 3" will be logged
```

---

### Explanation:

1. **`debounce` Function:**

   - Accepts two parameters:
     - `func`: The original function to be debounced.
     - `delay`: The delay time (in milliseconds).
   - Returns a new function that:
     - Clears any previously scheduled timeout using `clearTimeout`.
     - Schedules a new timeout with `setTimeout` to call the original `func` after the specified `delay`.

2. **Timeout Mechanism:**

   - If the debounced function is called again before the timeout expires, the previous timeout is canceled, effectively "resetting" the delay.

3. **Example Use Case:**
   - The function `debouncedLog` is called multiple times with different messages. Only the last call ("Call 3") is executed after 2 seconds because each new call resets the timer.

---

### Practical Use Cases:

- **Input Validation:**
  Trigger an API call only after the user stops typing in a search box.
- **Window Resize:**
  Recalculate layout only after the resizing stops.

---

### Output:

```javascript
debouncedLog("Call 1"); // Nothing happens immediately
debouncedLog("Call 2"); // Resets the timer
debouncedLog("Call 3"); // Resets the timer
// After 2 seconds, "Call 3" is logged
```

---

### **Advanced Questions**

### 11. Explain **currying** in the context of higher-order functions. Write a curried function that accepts multiple arguments and returns their sum.

### What is Currying?

**Currying** is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. The final result is obtained when all the arguments are provided.

In the context of higher-order functions, currying allows you to create partially applied functions by passing only some of the arguments initially and deferring the rest.

---

### Curried Function Example: Summing Numbers

Here's a curried function to calculate the sum of three numbers:

```javascript
function curriedSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c; // Returns the sum of a, b, and c
    };
  };
}

// Example usage:
const result = curriedSum(2)(3)(5); // Currying: Pass one argument at a time
console.log(result); // Output: 10

// Partial application:
const addTwo = curriedSum(2); // Partially apply the first argument
const addThree = addTwo(3); // Partially apply the second argument
console.log(addThree(4)); // Output: 9
```

---

### Explanation:

1. **Structure of the Curried Function**:

   - The outermost function takes the first argument (`a`) and returns another function.
   - The next function takes the second argument (`b`) and returns another function.
   - The innermost function takes the third argument (`c`) and computes the sum.

2. **Full Application**:

   - When all arguments are passed sequentially (e.g., `curriedSum(2)(3)(5)`), the result is directly computed.

3. **Partial Application**:
   - You can pass one or two arguments and get back a function that accepts the remaining arguments. This is useful for reusing functions with predefined arguments.

---

### Compact Version Using Arrow Functions:

You can also write a curried function using arrow functions:

```javascript
const curriedSum = (a) => (b) => (c) => a + b + c;

// Example usage:
console.log(curriedSum(1)(2)(3)); // Output: 6
```

---

### Benefits of Currying:

- **Reusability**: Partial application lets you create specialized functions by fixing some arguments.
- **Readability**: Makes function composition more intuitive in functional programming.
- **Flexibility**: Adapts functions to different use cases with minimal code changes.

### 12. Write a higher-order function `once` that accepts a function and ensures it can only be executed once. Any subsequent calls should return the result of the first execution.

Here’s how you can implement the `once` higher-order function:

```javascript
function once(fn) {
  let result; // Stores the result of the first execution
  let called = false; // Tracks whether the function has been called

  return function (...args) {
    if (!called) {
      result = fn(...args); // Execute the function and store the result
      called = true; // Mark as called
    }
    return result; // Return the stored result
  };
}

// Example usage:
const add = (a, b) => a + b;
const addOnce = once(add);

console.log(addOnce(2, 3)); // Output: 5 (Executed)
console.log(addOnce(10, 20)); // Output: 5 (Ignored, returns cached result)
console.log(addOnce(0, 0)); // Output: 5 (Still returns cached result)
```

---

### Explanation:

1. **Outer Function (`once`)**:

   - Accepts a function `fn` as an argument.
   - Keeps track of:
     - `result`: Stores the result of the first execution of `fn`.
     - `called`: A flag to ensure `fn` is only executed once.

2. **Returned Function**:

   - When called, it checks if `called` is `false`.
   - If not called:
     - Executes `fn` with the provided arguments using `fn(...args)`.
     - Sets `called` to `true` and stores the result in `result`.
   - If already called:
     - Skips execution and returns the stored `result`.

3. **Example**:
   - The first call (`addOnce(2, 3)`) computes `2 + 3 = 5` and stores the result.
   - Subsequent calls ignore the arguments and return the stored result (`5`).

---

### Use Cases:

- **Initialization**: Ensure a setup function (e.g., initializing a database connection) runs only once.
- **Event Handlers**: Avoid multiple executions of the same event handler.
- **Performance Optimization**: Cache expensive computations.

### 13. How do higher-order functions relate to **callback functions**? Provide an example where a callback is passed as an argument to a higher-order function.

### Relationship Between Higher-Order Functions and Callback Functions

A **higher-order function** is a function that can:

1. Accept other functions as arguments (callbacks).
2. Return a function as its result.

A **callback function** is simply a function passed as an argument to another function and is typically executed within the higher-order function. Higher-order functions often use callbacks to customize their behavior or process data in a dynamic way.

---

### Example: Using a Callback in a Higher-Order Function

Here’s an example where a higher-order function processes an array by applying a callback function to each element:

```javascript
function processArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i])); // Call the callback for each element
  }
  return result;
}

// Example callback functions
const square = (num) => num * num;
const double = (num) => num * 2;

// Using processArray with different callbacks
const numbers = [1, 2, 3, 4];

console.log(processArray(numbers, square)); // Output: [1, 4, 9, 16]
console.log(processArray(numbers, double)); // Output: [2, 4, 6, 8]
```

---

### Explanation:

1. **Higher-Order Function (`processArray`)**:

   - Accepts an array `arr` and a `callback` function as arguments.
   - Iterates over the array and applies the `callback` function to each element.
   - Collects the results in a new array and returns it.

2. **Callback Functions**:

   - `square`: Computes the square of a number.
   - `double`: Doubles a number.

3. **Dynamic Behavior**:
   - By passing different callback functions, `processArray` can dynamically modify how the elements of the array are processed.

---

### Key Points:

- Higher-order functions enable dynamic and reusable behavior by allowing different callbacks to be passed.
- Callbacks are typically used in array methods like `.map()`, `.filter()`, and `.reduce()`, event handling, and asynchronous programming (e.g., `setTimeout` and Promises).

---

### Real-World Example: Array `.map()` Method

The `.map()` method in JavaScript is a built-in higher-order function that uses callbacks:

```javascript
const numbers = [1, 2, 3, 4];

// Using a callback with .map()
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16]
```

### 14. Write a higher-order function `throttle` that limits the execution of a function to once every N milliseconds.

Here’s an implementation of a higher-order function `throttle` that limits the execution of a function to once every `N` milliseconds:

```javascript
function throttle(fn, delay) {
  let isThrottled = false; // Flag to track if the function is throttled
  let lastArgs; // Stores the most recent arguments when throttled

  return function (...args) {
    if (isThrottled) {
      // Save the most recent arguments to execute later
      lastArgs = args;
      return;
    }

    // Call the original function
    fn(...args);
    isThrottled = true;

    // Set a timeout to reset the throttle
    setTimeout(() => {
      isThrottled = false;

      // If there were saved arguments, call the function with them
      if (lastArgs) {
        fn(...lastArgs);
        lastArgs = null; // Clear saved arguments after execution
      }
    }, delay);
  };
}

// Example usage:
function logMessage(message) {
  console.log(`${message} at ${new Date().toISOString()}`);
}

const throttledLog = throttle(logMessage, 2000);

// Simulate rapid calls
throttledLog("Message 1");
throttledLog("Message 2");
setTimeout(() => throttledLog("Message 3"), 500); // Ignored
setTimeout(() => throttledLog("Message 4"), 2500); // Executes
```

---

### How It Works:

1. **Outer Function (`throttle`)**:

   - Takes the function to be throttled (`fn`) and the delay interval (`delay`) in milliseconds.
   - Uses a flag (`isThrottled`) to track whether the function is currently throttled.
   - Uses a variable (`lastArgs`) to store arguments for execution after the delay.

2. **Returned Function**:

   - If `isThrottled` is `true`, it saves the most recent arguments and returns without executing `fn`.
   - If `isThrottled` is `false`, it executes `fn`, sets `isThrottled` to `true`, and starts a timeout.

3. **Timeout**:
   - Resets `isThrottled` to `false` after the delay.
   - If there are saved arguments in `lastArgs`, calls `fn` with those arguments and clears `lastArgs`.

---

### Example Output:

For the example:

1. "Message 1" is logged immediately.
2. "Message 2" and "Message 3" are ignored because they occur within the throttling period.
3. "Message 4" is logged after 2500ms.

---

### Use Cases:

- **Scroll Events**: Limit the execution of a function handling frequent scroll events.
- **Resize Events**: Prevent excessive function calls during window resizing.
- **Button Clicks**: Avoid multiple clicks triggering the same action rapidly.

### 15. Implement a higher-order function `retry` that accepts a function and retries it up to a specified number of times if it fails (e.g., by throwing an error).

Here’s how you can implement a `retry` higher-order function that retries a function up to a specified number of times if it fails:

```javascript
function retry(fn, retries) {
  return async function (...args) {
    let attempts = 0;

    while (attempts < retries) {
      try {
        // Try executing the function
        return await fn(...args);
      } catch (error) {
        attempts++;
        console.warn(`Attempt ${attempts} failed: ${error.message}`);
        if (attempts >= retries) {
          throw new Error(`Failed after ${retries} attempts: ${error.message}`);
        }
      }
    }
  };
}

// Example usage:
async function unstableFunction() {
  if (Math.random() > 0.5) {
    console.log("Function succeeded!");
    return "Success!";
  } else {
    throw new Error("Random failure");
  }
}

const retriableFunction = retry(unstableFunction, 3);

retriableFunction()
  .then((result) => console.log("Final Result:", result))
  .catch((error) => console.error("Final Error:", error.message));
```

---

### Explanation:

1. **Higher-Order Function (`retry`)**:

   - Accepts the function `fn` to be retried and the maximum number of retries (`retries`).
   - Returns a new function that will attempt to execute `fn` multiple times.

2. **Inner Function**:

   - Uses a `while` loop to execute `fn` up to the maximum number of retries.
   - Wraps each execution in a `try-catch` block:
     - If `fn` succeeds, the result is returned immediately.
     - If `fn` throws an error, it logs a warning and increments the `attempts` counter.
   - If all retries are exhausted, it throws an error indicating failure.

3. **Asynchronous Support**:
   - The `retry` function supports asynchronous operations by using `await` inside the loop.
   - Allows retrying of promises that fail (e.g., due to API errors or network issues).

---

### Example Output:

Suppose `unstableFunction` succeeds randomly:

1. If it fails on the first two attempts and succeeds on the third:
   ```
   Attempt 1 failed: Random failure
   Attempt 2 failed: Random failure
   Function succeeded!
   Final Result: Success!
   ```
2. If it fails all three attempts:
   ```
   Attempt 1 failed: Random failure
   Attempt 2 failed: Random failure
   Attempt 3 failed: Random failure
   Final Error: Failed after 3 attempts: Random failure
   ```

---

### Use Cases:

- Retrying network requests (e.g., fetching data from an API).
- Handling intermittent failures in database queries.
- Ensuring idempotency in operations by retrying on failures.

### 16. How do **composing** higher-order functions improve code reusability and readability? Write an example of function composition with two functions: one that doubles a number and another that squares it. Use composition to combine them.

### What is Function Composition?

**Function composition** is a technique where the output of one function becomes the input to another. In programming, composing functions allows you to build more complex functionality by combining simpler, reusable functions. It improves **code reusability** by encouraging modular design and enhances **readability** by breaking down operations into smaller, well-defined steps.

---

### Example: Function Composition with Doubling and Squaring

Here’s an example where two functions, `double` and `square`, are composed to perform their operations sequentially:

#### Individual Functions

```javascript
const double = (num) => num * 2; // Doubles a number
const square = (num) => num * num; // Squares a number
```

#### Manual Composition (Without a Helper Function)

```javascript
const number = 3;
const result = square(double(number)); // First double, then square
console.log(result); // Output: 36
```

---

### Using a Composition Helper Function

We can write a generic `compose` helper function to make function composition reusable:

```javascript
// Higher-order function for composing two functions
function compose(f, g) {
  return function (x) {
    return f(g(x)); // g(x) is passed as input to f
  };
}

// Composed function
const doubleThenSquare = compose(square, double); // square(double(x))
const squareThenDouble = compose(double, square); // double(square(x))

// Example usage
console.log(doubleThenSquare(3)); // Output: 36 (double 3 -> 6, then square 6 -> 36)
console.log(squareThenDouble(3)); // Output: 18 (square 3 -> 9, then double 9 -> 18)
```

---

### Explanation:

1. **Individual Functions**:

   - `double`: Multiplies a number by 2.
   - `square`: Multiplies a number by itself.

2. **Composing Functions**:

   - The `compose` function combines `f` and `g` into a new function.
   - The result of `g(x)` is passed as input to `f`.

3. **Order Matters**:
   - `compose(square, double)`: Doubles first, then squares the result.
   - `compose(double, square)`: Squares first, then doubles the result.

---

### Benefits of Function Composition:

1. **Reusability**:

   - Individual functions (`double`, `square`) are simple, reusable, and testable independently.
   - Composed functions (`doubleThenSquare`, `squareThenDouble`) are combinations of these reusable building blocks.

2. **Readability**:

   - Instead of chaining or nesting functions, composition clearly shows the flow of operations.

3. **Flexibility**:
   - You can easily add more functions to the composition chain by extending the helper function to handle multiple arguments.

---

### Extended Example: Composing Multiple Functions

To compose more than two functions, you can write a generic `compose` for multiple arguments:

```javascript
function composeMultiple(...fns) {
  return function (x) {
    return fns.reduceRight((acc, fn) => fn(acc), x); // Apply functions from right to left
  };
}

const composedFunction = composeMultiple(square, double, Math.abs); // First abs, then double, then square
console.log(composedFunction(-3)); // Output: 36
```

### 17. Write a higher-order function `memoize` that takes a function and returns a new function that caches the results of previous calls. The new function should return the cached result if called with the same arguments again.

Here’s how you can implement a `memoize` higher-order function to cache the results of a function:

```javascript
function memoize(fn) {
  const cache = new Map(); // Cache to store results based on arguments

  return function (...args) {
    const key = JSON.stringify(args); // Serialize arguments to create a unique key
    if (cache.has(key)) {
      console.log("Returning cached result for:", args);
      return cache.get(key); // Return cached result
    }

    const result = fn(...args); // Compute the result if not in cache
    cache.set(key, result); // Store the result in cache
    return result;
  };
}

// Example usage
const slowFunction = (num) => {
  console.log("Computing for:", num);
  return num * num; // Simulate a computationally expensive task
};

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Computing for: 5, Output: 25
console.log(memoizedFunction(5)); // Returning cached result for: [5], Output: 25
console.log(memoizedFunction(6)); // Computing for: 6, Output: 36
console.log(memoizedFunction(6)); // Returning cached result for: [6], Output: 36
```

---

### How It Works:

1. **Cache Setup**:

   - A `Map` object is used to store cached results.
   - The `key` for each result is generated by serializing the arguments using `JSON.stringify`.

2. **Returned Function**:

   - For every call, the function checks if the `key` exists in the cache.
   - If the result is cached, it returns the cached value.
   - If not, it computes the result, stores it in the cache, and then returns it.

3. **Efficiency**:
   - Avoids recomputation for the same inputs, improving performance for expensive calculations.

---

### Benefits of Memoization:

- **Performance**: Reduces redundant computations for functions called with the same arguments.
- **Reusability**: Can be applied to any pure function (a function whose output depends only on its inputs and has no side effects).

---

### Example Output:

For the example function `slowFunction`:

1. The first call to `memoizedFunction(5)` computes the result and caches it.
   ```
   Computing for: 5
   25
   ```
2. The second call to `memoizedFunction(5)` retrieves the cached result.
   ```
   Returning cached result for: [5]
   25
   ```

---

### Notes:

- **Serialization**: `JSON.stringify` is used to handle multi-argument inputs, but it has limitations (e.g., functions, symbols).
- **Edge Cases**: For more complex use cases (e.g., functions with non-serializable arguments), you might need a more advanced keying mechanism.

### 18. Write a higher-order function `delay` that accepts a function and a delay time in milliseconds. It should return a function that calls the original function after the specified delay.

Here’s how you can implement the `delay` higher-order function:

```javascript
function delay(fn, delayTime) {
  return function (...args) {
    setTimeout(() => {
      fn(...args); // Call the original function with the provided arguments after the delay
    }, delayTime);
  };
}

// Example usage:
function greet(name) {
  console.log(`Hello, ${name}!`);
}

const delayedGreet = delay(greet, 2000); // Wrap `greet` with a 2-second delay
delayedGreet("Alice"); // Logs "Hello, Alice!" after 2 seconds
```

---

### How It Works:

1. **Outer Function (`delay`)**:

   - Takes a function `fn` and a delay time `delayTime` in milliseconds.
   - Returns a new function that encapsulates the original function call in a `setTimeout`.

2. **Returned Function**:

   - When called, it schedules the execution of `fn` using `setTimeout` after the specified delay.
   - Passes any arguments received (`...args`) to `fn` when it is executed.

3. **Asynchronous Behavior**:
   - The `setTimeout` ensures that the execution of `fn` happens asynchronously after the specified delay.

---

### Example Output:

1. Calling `delayedGreet("Alice")` schedules the greeting function to run after 2 seconds.
   ```
   // After 2 seconds:
   Hello, Alice!
   ```

---

### Use Cases:

- Delaying API calls or UI updates.
- Creating animations or timed interactions.
- Implementing debouncing-like behavior for simple use cases.

### 19. How do higher-order functions work with array methods like `.map()`, `.filter()`, and `.reduce()`? Write examples using each of these methods with appropriate callback functions.

### Higher-Order Functions with Array Methods

Array methods like `.map()`, `.filter()`, and `.reduce()` are higher-order functions because they accept a callback function as an argument. These methods use the callback to process each element in the array, allowing dynamic and reusable logic.

---

### 1. **`map()`**: Transforms Each Element

- `.map()` creates a new array by applying the callback to every element.

#### Example: Doubling Array Elements

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
```

**How it works:**

- The callback `(num) => num * 2` doubles each number in the array.
- A new array is returned with the transformed values.

---

### 2. **`filter()`**: Selects Elements That Pass a Test

- `.filter()` creates a new array containing elements for which the callback returns `true`.

#### Example: Filtering Even Numbers

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter((num) => num % 2 === 0);

console.log(evens); // Output: [2, 4, 6]
```

**How it works:**

- The callback `(num) => num % 2 === 0` checks if a number is even.
- Only elements that satisfy the condition (`true`) are included in the new array.

---

### 3. **`reduce()`**: Reduces an Array to a Single Value

- `.reduce()` iterates over the array, applying the callback to accumulate a single result.

#### Example: Summing All Elements

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);

console.log(sum); // Output: 10
```

**How it works:**

- The callback `(accumulator, num) => accumulator + num` adds each number to the `accumulator`.
- The initial value of the accumulator is `0`.

---

### Combined Example

You can combine these methods to perform complex operations. For example:

#### Example: Square Even Numbers and Sum Them

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter((num) => num % 2 === 0) // Keep only even numbers
  .map((num) => num * num) // Square each even number
  .reduce((sum, num) => sum + num, 0); // Sum the squared numbers

console.log(result); // Output: 56 (2² + 4² + 6² = 4 + 16 + 36)
```

---

### Summary of Each Method:

1. **`map()`**: Transform each element.
2. **`filter()`**: Select elements based on a condition.
3. **`reduce()`**: Accumulate a result from all elements.

### 20. Create a higher-order function `retryAsync` that accepts an asynchronous function and retries it if it fails. Use `async/await` to handle asynchronous behavior and retry logic.

Here’s an implementation of a higher-order function `retryAsync` that retries an asynchronous function if it fails:

```javascript
function retryAsync(asyncFn, retries, delay = 0) {
  return async function (...args) {
    let attempts = 0;

    while (attempts < retries) {
      try {
        // Attempt to execute the asynchronous function
        return await asyncFn(...args);
      } catch (error) {
        attempts++;
        console.warn(`Attempt ${attempts} failed: ${error.message}`);
        if (attempts >= retries) {
          throw new Error(`Failed after ${retries} attempts: ${error.message}`);
        }
        // Optional: Wait for a delay before retrying
        if (delay > 0) {
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }
  };
}

// Example usage:
async function fetchData() {
  if (Math.random() > 0.7) {
    console.log("Fetch succeeded!");
    return { data: "Some fetched data" };
  } else {
    throw new Error("Fetch failed due to network issues");
  }
}

const retriableFetch = retryAsync(fetchData, 3, 1000); // Retry up to 3 times with a 1-second delay

retriableFetch()
  .then((result) => console.log("Result:", result))
  .catch((error) => console.error("Final Error:", error.message));
```

---

### Explanation:

1. **Parameters**:

   - `asyncFn`: The asynchronous function to be retried.
   - `retries`: Maximum number of retry attempts.
   - `delay`: (Optional) Delay in milliseconds between retries.

2. **Returned Function**:

   - Wraps `asyncFn` and manages the retry logic.
   - Accepts arguments (`...args`) to be passed to `asyncFn`.

3. **Retry Logic**:

   - Uses a `while` loop to retry until the maximum attempts are reached.
   - If `asyncFn` throws an error, logs a warning and retries after an optional delay.
   - Throws an error if all attempts fail.

4. **Delay Handling**:
   - Uses `setTimeout` wrapped in a `Promise` to introduce a delay between retries.

---

### Example Output:

1. If `fetchData` fails twice but succeeds on the third attempt:

   ```
   Attempt 1 failed: Fetch failed due to network issues
   Attempt 2 failed: Fetch failed due to network issues
   Fetch succeeded!
   Result: { data: "Some fetched data" }
   ```

2. If `fetchData` fails all three attempts:
   ```
   Attempt 1 failed: Fetch failed due to network issues
   Attempt 2 failed: Fetch failed due to network issues
   Attempt 3 failed: Fetch failed due to network issues
   Final Error: Failed after 3 attempts: Fetch failed due to network issues
   ```

---

### Use Cases:

- Retrying failed API calls in case of network issues.
- Ensuring robustness in handling intermittent failures in database queries.
- Implementing retry logic for idempotent operations.
