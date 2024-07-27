# Closure in JavaScript

### Brief Introduction to Closures in JavaScript

A **closure** is a function that has access to its own scope, the scope of the outer function, and the global scope. Closures are created every time a function is created, at function creation time. They allow a function to access variables from an enclosing scope, even after that function has finished executing.

### Tasks

#### Task 1: Function Returning a Function with Closure

Here's an example where a function returns another function, and the inner function accesses a variable from the outer function's scope:

```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");
```

**Explanation:**

- `outerFunction` takes an argument `outerVariable` and returns `innerFunction`.
- `innerFunction` has access to `outerVariable` because of the closure.
- When `newFunction` is called, it logs both `outerVariable` and `innerVariable`.

#### Task 2: Closure to Maintain a Private Counter

Here is an example of a closure that maintains a private counter and includes functions to increment and get the current value of the counter:

```javascript
function createCounter() {
  let counter = 0; // Private variable

  return {
    increment: function () {
      counter++;
      console.log(`Counter: ${counter}`);
    },
    getCounter: function () {
      return counter;
    },
  };
}

const myCounter = createCounter();
myCounter.increment(); // Counter: 1
myCounter.increment(); // Counter: 2
console.log(`Current Counter Value: ${myCounter.getCounter()}`); // Current Counter Value: 2
```

**Explanation:**

- `createCounter` is a function that initializes a private `counter` variable.
- It returns an object with two methods: `increment` and `getCounter`.
- `increment` increases the value of `counter` and logs it.
- `getCounter` returns the current value of `counter`.
- The private `counter` variable is maintained within the closure, and can only be accessed or modified through the `increment` and `getCounter` methods.

### Practical Closures

#### Task 1: Unique ID Generator Using Closure

Here's an example of a function that generates unique IDs by using a closure to keep track of the last generated ID:

```javascript
function createIdGenerator() {
  let lastId = 0; // Private variable to keep track of the last generated ID

  return function () {
    lastId++; // Increment the last generated ID
    return lastId; // Return the new ID
  };
}

const generateId = createIdGenerator();

console.log(generateId()); // 1
console.log(generateId()); // 2
console.log(generateId()); // 3
```

**Explanation:**

- `createIdGenerator` initializes `lastId` to 0.
- It returns a function that increments `lastId` and returns the new value.
- Each call to `generateId` produces a unique, incremented ID.

#### Task 2: User Greeting Using Closure

Here's an example of a closure that captures a user's name and returns a function that greets the user by name:

```javascript
function createGreeting(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const greetAlice = createGreeting("Alice");
const greetBob = createGreeting("Bob");

greetAlice(); // Hello, Alice!
greetBob(); // Hello, Bob!
```

**Explanation:**

- `createGreeting` takes a `name` as an argument.
- It returns a function that logs a greeting message including the captured `name`.
- Each call to `createGreeting` creates a new greeting function for a specific name.

By using closures, both examples encapsulate private state (`lastId` and `name` respectively) within their outer function, ensuring that the inner function can access and modify that state even after the outer function has completed execution. This is a powerful feature of JavaScript closures that enables encapsulation and maintains state across function calls.

---

### Closures in Loops

Here's an example of a loop that creates an array of functions, where each function logs its index when called. A closure is used to ensure that each function logs the correct index:

```javascript
function createFunctionArray() {
  let functions = [];

  for (let i = 0; i < 5; i++) {
    functions[i] = (function (index) {
      return function () {
        console.log(index);
      };
    })(i);
  }

  return functions;
}

const functionArray = createFunctionArray();

functionArray[0](); // 0
functionArray[1](); // 1
functionArray[2](); // 2
functionArray[3](); // 3
functionArray[4](); // 4
```

**Explanation:**

- The `createFunctionArray` function creates an array called `functions`.
- A loop iterates from `0` to `4`.
- For each iteration, an immediately invoked function expression (IIFE) is used to create a closure that captures the current value of `i`.
- The IIFE returns a function that logs the captured value of `i`, which is stored in the `functions` array.
- When the functions in the `functionArray` are called, they log their respective indices correctly.

Using an IIFE in this way ensures that each function has its own copy of the `index` variable, preserving the correct value at the time of creation.

---

### Module Pattern with Closures

Here's an example of using closures to create a simple module for managing a collection of items. The module provides methods to add, remove, and list items.

```javascript
const ItemManager = (function () {
  let items = [];

  function addItem(item) {
    items.push(item);
    console.log(`${item} added.`);
  }

  function removeItem(item) {
    const index = items.indexOf(item);
    if (index !== -1) {
      items.splice(index, 1);
      console.log(`${item} removed.`);
    } else {
      console.log(`${item} not found.`);
    }
  }

  function listItems() {
    console.log("Items:", items.join(", "));
  }

  return {
    add: addItem,
    remove: removeItem,
    list: listItems,
  };
})();

// Using the ItemManager module
ItemManager.add("apple");
ItemManager.add("banana");
ItemManager.list(); // Items: apple, banana
ItemManager.remove("apple");
ItemManager.list(); // Items: banana
ItemManager.remove("orange"); // orange not found.
```

**Explanation:**

- The `ItemManager` module is created using an immediately invoked function expression (IIFE).
- Inside the IIFE, a private `items` array is declared, which will hold the collection of items.
- Three functions, `addItem`, `removeItem`, and `listItems`, are defined to manipulate the `items` array.
- The module returns an object exposing the public methods `add`, `remove`, and `list`, which correspond to the private functions.
- The `addItem` function adds an item to the `items` array and logs a message.
- The `removeItem` function removes an item from the `items` array if it exists and logs a message. If the item is not found, it logs a different message.
- The `listItems` function logs the current list of items.

Using this pattern, the internal state of the module (the `items` array) is protected and can only be manipulated through the provided methods.

---

### Memoization in JavaScript

#### 1. General Memoization Function

Here's a function that memoizes the results of another function using closures to store the results of previous computations.

```javascript
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      console.log(`Fetching from cache for args: ${key}`);
      return cache[key];
    } else {
      console.log(`Calculating result for args: ${key}`);
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

// Example usage with a simple add function
function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Calculating result for args: [1,2] -> 3
console.log(memoizedAdd(1, 2)); // Fetching from cache for args: [1,2] -> 3
console.log(memoizedAdd(2, 3)); // Calculating result for args: [2,3] -> 5
console.log(memoizedAdd(2, 3)); // Fetching from cache for args: [2,3] -> 5
```

#### 2. Memoized Factorial Function

Here's a memoized version of a function that calculates the factorial of a number:

```javascript
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      console.log(`Fetching from cache for args: ${key}`);
      return cache[key];
    } else {
      console.log(`Calculating result for args: ${key}`);
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Calculating result for args: [5] -> 120
console.log(memoizedFactorial(5)); // Fetching from cache for args: [5] -> 120
console.log(memoizedFactorial(6)); // Calculating result for args: [6] -> 720
console.log(memoizedFactorial(6)); // Fetching from cache for args: [6] -> 720
console.log(memoizedFactorial(5)); // Fetching from cache for args: [5] -> 120
```

**Explanation:**

- The `memoize` function takes another function `fn` as its argument.
- It creates a `cache` object to store the results of previous computations.
- When the memoized function is called, it first checks if the result for the given arguments (`args`) is already in the `cache`.
- If the result is in the cache, it returns the cached result.
- If the result is not in the cache, it calculates the result using the original function `fn`, stores the result in the cache, and then returns the result.
- The `factorial` function calculates the factorial of a number using recursion.
- The `memoizedFactorial` function is the memoized version of the `factorial` function. It caches the results of previous factorial computations to avoid redundant calculations.
