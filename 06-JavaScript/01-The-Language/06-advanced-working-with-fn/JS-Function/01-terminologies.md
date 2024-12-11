Here’s a quick guide to the terminologies related to functions in modern JavaScript:

---

### 1. **Functions vs. Methods**

- **Function**: A block of reusable code that performs a specific task. Can be standalone or part of an object.
  ```javascript
  function greet() {
    console.log("Hello!");
  }
  greet(); // Function call
  ```
- **Method**: A function that is a property of an object.
  ```javascript
  const obj = {
    greet: function () {
      console.log("Hello from a method!");
    },
  };
  obj.greet(); // Method call
  ```

---

### 2. **Declaration vs. Definition**

- **Declaration**: Tells the interpreter about the existence of a function (its name, parameters, etc.).
  ```javascript
  function add(a, b) {} // Declaration
  ```
- **Definition**: Includes the actual implementation (code inside the curly braces).
  ```javascript
  function add(a, b) {
    return a + b; // Definition
  }
  ```

---

### 3. **Arguments vs. Parameters**

- **Parameters**: Variables defined in the function signature (like placeholders).
  ```javascript
  function multiply(x, y) {
    // `x` and `y` are parameters
    return x * y;
  }
  ```
- **Arguments**: The actual values passed to a function when calling it.
  ```javascript
  multiply(2, 3); // `2` and `3` are arguments
  ```

---

### 4. **Callback Functions vs. Higher-Order Functions**

- **Callback Function**: A function passed as an argument to another function to be executed later.

  ```javascript
  function processCallback(name, callback) {
    console.log("Processing...");
    callback(name); // Execute the callback
  }
  processCallback("Alice", (name) => console.log(`Hello, ${name}!`));
  ```

- **Higher-Order Function**: A function that takes another function as an argument or returns a function.
  ```javascript
  function createMultiplier(multiplier) {
    return function (num) {
      return num * multiplier; // Returns a function
    };
  }
  const double = createMultiplier(2);
  console.log(double(5)); // 10
  ```

---

## A list of questions from basic to advanced to help you master JavaScript functions.

### **1. Functions vs. Methods**

**Basic:**

1. Define what a JavaScript function is and how it differs from a method.

**JavaScript Function**

A JavaScript function is a block of code designed to perform a specific task. It's a reusable piece of code that can be called multiple times to execute the same logic. Functions are defined using the `function` keyword followed by a function name, a list of parameters (optional), and a function body enclosed in curly braces `{}`.

**Syntax:**

```javascript
function functionName(parameter1, parameter2, ...) {
  // Function body
  // Code to be executed
}
```

**Example:**

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
```

**JavaScript Method**

A method is a function that is associated with an object. It's a specific type of function that belongs to an object and is invoked using dot notation. Methods are defined within the object's definition and can access the object's properties.

**Syntax:**

```javascript
const person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet(); // Output: Hello, my name is Alice
```

**Key Differences:**

| Feature          | Function                                           | Method                                              |
| ---------------- | -------------------------------------------------- | --------------------------------------------------- |
| Declaration      | Can be declared independently or within an object. | Defined within an object.                           |
| Invocation       | Called directly using its name.                    | Called using dot notation on an object instance.    |
| Context (`this`) | Depends on the calling context.                    | Refers to the object the method is associated with. |

In essence, while both functions and methods are blocks of code that perform tasks, methods are specifically tied to objects and operate within their context.

2. Write a function and a method to calculate the square of a number. What makes the method different?

```javascript
// Function
function squareNumber(number) {
  return number * number;
}

// Method
const numberObject = {
  value: 5,
  square: function () {
    return this.value * this.value;
  },
};

console.log(squareNumber(4)); // Output: 16
console.log(numberObject.square()); // Output: 25
```

**Key Difference:**

- **Function:** A standalone function that takes a number as input and returns its square. It's independent of any specific object.
- **Method:** A function associated with an object. It can access the object's properties (in this case, `this.value`) to perform the calculation.

The method is specific to the `numberObject` and can only be used to calculate the square of its `value` property. The function, on the other hand, is more general and can be used to calculate the square of any number.

**Intermediate:**  
3. Convert the following standalone function into a method within an object:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

```javascript
const greeter = {
  greet: function (name) {
    return `Hello, ${name}!`;
  },
};

console.log(greeter.greet("Alice")); // Output: Hello, Alice!
```

In this example, we've created an object called `greeter`. The `greet` function is now a method of this object. To use the method, we call it on the object using dot notation: `greeter.greet("Alice")`.

By making the function a method, we've associated it with an object, giving it access to the object's properties and methods. This can be useful for creating more complex objects with various behaviors.

**Advanced:**

4. Explain how `this` behaves differently in functions and methods. Demonstrate with examples where `this` behaves unexpectedly in both contexts.

The behavior of `this` in JavaScript depends on **how** a function or method is invoked, not where it is defined. The main difference lies in the context of the function or method call.

---

### **How `this` Works in Functions**

- In a **regular function**, `this` refers to the global object (`window` in browsers or `global` in Node.js) in non-strict mode. In **strict mode**, `this` is `undefined`.
- The value of `this` in a function is determined by the **call-site** (how the function is called).

#### Example of Unexpected Behavior in Functions

```javascript
function regularFunction() {
  console.log(this); // Depends on how it's called
}

// Case 1: Called as a standalone function
regularFunction();
// In non-strict mode: Logs the global object (e.g., `window`)
// In strict mode: Logs `undefined`

// Case 2: Assigned to an object
const obj = { func: regularFunction };
obj.func();
// Logs `obj` because the function is called as a method of `obj`

// Case 3: Assigned to a variable
const standalone = obj.func;
standalone();
// Logs the global object (non-strict mode) or `undefined` (strict mode)
```

---

### **How `this` Works in Methods**

- In a **method** (a function defined inside an object), `this` refers to the object that owns the method (the object before the dot `.` when calling the method).
- However, if the method is assigned to another variable or passed as a callback, `this` may lose its original context.

#### Example of Unexpected Behavior in Methods

```javascript
const person = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};

// Case 1: Called directly as a method
person.greet();
// Logs 'Alice' because `this` refers to `person`

// Case 2: Assigned to a variable
const greetFn = person.greet;
greetFn();
// Logs `undefined` (strict mode) or may throw an error because `this` is no longer `person`

// Case 3: Used as a callback
function executeCallback(callback) {
  callback();
}
executeCallback(person.greet);
// Logs `undefined` (strict mode) or throws an error
```

---

### **Solving `this` Issues**

#### 1. Use **Arrow Functions**

Arrow functions don’t have their own `this`. Instead, they inherit `this` from the surrounding lexical scope.

```javascript
const obj = {
  name: "Bob",
  greet: () => {
    console.log(this.name); // `this` refers to the surrounding scope
  },
};

obj.greet();
// Logs `undefined` because `this` in arrow functions is not bound to `obj`
```

#### 2. Use **`.bind()`**

Manually bind the desired `this` context.

```javascript
const boundGreet = person.greet.bind(person);
boundGreet();
// Logs 'Alice' because `this` is explicitly bound to `person`
```

#### 3. Use **`call()` or `apply()`**

These methods explicitly set the `this` value for the function call.

```javascript
person.greet.call({ name: "Charlie" });
// Logs 'Charlie'
```

#### 4. Use **`class` and `constructor`**

In classes, methods automatically bind `this` to the instance.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name);
  }
}

const personInstance = new Person("Diana");
personInstance.greet();
// Logs 'Diana'
```

---

### **2. Declaration vs. Definition**

**Basic:**

1. What is the difference between a function declaration and a function definition? Provide examples.

The terms **function declaration** and **function definition** are often used interchangeably, but technically, they refer to different aspects of defining and declaring functions in JavaScript.

---

### **Function Declaration**

- A **function declaration** introduces a function into the scope with a name.
- It is a statement that defines the function and hoists the function to the top of its scope.
- A function declaration must have a name.

#### Example:

```javascript
function sayHello() {
  console.log("Hello!");
}
```

- This is a **function declaration** because it defines a function named `sayHello`.
- It is hoisted, meaning you can call `sayHello()` before its declaration in the code.

---

### **Function Definition**

- A **function definition** refers to the actual implementation of the function, regardless of how it is defined in the code.
- It occurs when you assign a function to a variable, use an anonymous function, or declare a named function.

#### Examples:

1. **Named Function Declaration** (Function Definition)

   ```javascript
   function greet() {
     console.log("Hi there!");
   }
   ```

   - This is both a function declaration and a definition because the function is implemented.

2. **Anonymous Function Expression**

   ```javascript
   const add = function (a, b) {
     return a + b;
   };
   ```

   - This is a **function expression** that defines a function but does not declare it with a name.

3. **Arrow Function**
   ```javascript
   const multiply = (a, b) => a * b;
   ```
   - This is another example of a function definition using an arrow function.

---

### **Key Differences**

| Aspect               | Function Declaration                                | Function Definition                                     |
| -------------------- | --------------------------------------------------- | ------------------------------------------------------- |
| **Purpose**          | Declares a function by introducing it to the scope. | Provides the implementation of the function.            |
| **Hoisting**         | Hoisted to the top of the scope.                    | Not hoisted (for function expressions).                 |
| **Name Requirement** | Requires a name.                                    | May or may not have a name (e.g., anonymous functions). |
| **Usage Context**    | Always used to declare functions.                   | Includes all forms of function implementations.         |

---

### Example Demonstrating the Difference

```javascript
// Function Declaration (hoisted)
console.log(square(4)); // 16
function square(x) {
  return x * x;
}

// Function Definition using Expression (not hoisted)
console.log(double(4)); // Error: double is not defined
const double = function (x) {
  return x * 2;
};
```

In this example:

- The `square` function is a **declaration** and is hoisted, so it works before its definition.
- The `double` function is defined using an **expression**, so it is not available until after its definition.

2. Identify whether the following is a declaration or a definition:
   ```javascript
   function add(a, b) {
     return a + b;
   }
   ```

The provided code is both a **function declaration** and a **function definition**.

### **Why is it a Function Declaration?**

- The `function` keyword is used, and the function has a name (`add`).
- It introduces the function `add` into the scope, making it accessible.

### **Why is it a Function Definition?**

- The body of the function is provided (`return a + b;`), which means the actual implementation of the function is specified.

### **Conclusion**

This code serves as:

1. A **function declaration** because it declares a named function `add` in the scope.
2. A **function definition** because it defines the behavior of the function.

**Intermediate:**

3. Write a function declaration and then define it using an arrow function. Compare their syntax.

Here’s an example of a **function declaration** and its equivalent **arrow function** definition. We’ll also compare their syntax.

---

### **Function Declaration**

A **function declaration** introduces a named function into the scope.

```javascript
function add(a, b) {
  return a + b;
}
```

- The `function` keyword is used.
- The function has a name (`add`).
- Parameters (`a` and `b`) are defined in parentheses.
- The `return` keyword specifies the output of the function.

---

### **Arrow Function Definition**

An **arrow function** is a concise syntax for defining a function, usually as a function expression.

```javascript
const add = (a, b) => {
  return a + b;
};
```

- The `function` keyword is replaced by `=>` (arrow).
- The function is assigned to a variable `add`.
- Parameters (`a` and `b`) are in parentheses, similar to a declaration.
- The `return` keyword is still used in a block body `{}`.

#### **Further Simplification (Implicit Return)**

If the function has a single expression, you can omit the `return` keyword and `{}`:

```javascript
const add = (a, b) => a + b;
```

---

### **Comparison of Syntax**

| Feature              | Function Declaration                   | Arrow Function                          |
| -------------------- | -------------------------------------- | --------------------------------------- |
| **Keyword**          | Uses the `function` keyword            | Uses `=>` for definition                |
| **Hoisting**         | Fully hoisted                          | Not hoisted; treated as a variable      |
| **Context (`this`)** | Creates its own `this` context         | Inherits `this` from enclosing scope    |
| **Conciseness**      | More verbose                           | More concise                            |
| **Usage**            | Suited for named, standalone functions | Often used for callbacks or expressions |

---

### Example: Usage and Behavior

```javascript
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow Function
const greetArrow = (name) => `Hello, ${name}!`;

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greetArrow("Bob")); // Output: Hello, Bob!
```

- Both forms achieve the same result, but the arrow function is more concise.
- Use function declarations for standalone functions and arrow functions for callbacks or shorter definitions.

**Advanced:**

4. Can you call a function before declaring it in JavaScript? Explain with examples and relate it to the concept of "hoisting."

In JavaScript, **whether you can call a function before declaring it depends on how the function is defined**. This is closely related to the concept of **hoisting**.

---

### **What is Hoisting?**

- **Hoisting** is JavaScript's behavior of moving declarations (variable and function declarations) to the top of their containing scope during the compilation phase, before the code is executed.
- Function declarations are fully hoisted, meaning you can call them before their definition.
- Function expressions and arrow functions are not hoisted in the same way, so they cannot be invoked before they are assigned.

---

### **Function Declaration**

Function declarations are hoisted entirely, including their body. This allows you to call the function before it appears in the code.

#### Example:

```javascript
sayHello(); // Works because of hoisting

function sayHello() {
  console.log("Hello!");
}
```

- During the compilation phase, the `sayHello` function is moved to the top of its scope.
- As a result, the function can be invoked before its declaration.

---

### **Function Expression**

Function expressions (including arrow functions) are **not hoisted with their definitions**. The variable they are assigned to is hoisted, but it is uninitialized until the code execution reaches the assignment.

#### Example:

```javascript
greet(); // Error: greet is not a function

const greet = function () {
  console.log("Hi!");
};
```

- The variable `greet` is hoisted, but its value remains `undefined` until the assignment.
- Trying to invoke it before the assignment results in a runtime error.

---

### **Arrow Function**

Arrow functions behave the same as function expressions. They are not hoisted with their definitions.

#### Example:

```javascript
sayHi(); // Error: sayHi is not a function

const sayHi = () => {
  console.log("Hi!");
};
```

- The variable `sayHi` is hoisted, but its value is not set until the code execution reaches the assignment.

---

### **Comparison**

| Type                     | Hoisted? | Callable Before Declaration? | Example Behavior                  |
| ------------------------ | -------- | ---------------------------- | --------------------------------- |
| **Function Declaration** | Yes      | Yes                          | ✅ `function greet() {}`          |
| **Function Expression**  | No       | No                           | ❌ `const greet = function () {}` |
| **Arrow Function**       | No       | No                           | ❌ `const greet = () => {}`       |

---

### **Key Takeaways**

1. Use **function declarations** when you want the ability to call the function anywhere within its scope.
2. Use **function expressions** or **arrow functions** when you want more control over where and when the function is initialized.

---

### **3. Arguments vs. Parameters**

**Basic:**

1. Differentiate between function arguments and parameters with an example.

### **Difference Between Function Arguments and Parameters**

In JavaScript (and programming in general), **parameters** and **arguments** are related to how data is passed to functions but refer to different aspects of the process:

1. **Parameters**:

   - Variables listed in the function declaration or definition.
   - They act as placeholders for the values that will be provided when the function is called.

2. **Arguments**:
   - Actual values passed to a function when it is invoked.
   - These values are assigned to the corresponding parameters.

---

### **Example: Parameters vs. Arguments**

```javascript
// Function Declaration with Parameters
function greet(name, age) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

// Function Call with Arguments
greet("Alice", 25);
```

- **Parameters**:
  - In the function `greet`, `name` and `age` are **parameters**. They define the inputs that the function expects.
- **Arguments**:
  - When the function `greet` is called with `"Alice"` and `25`, these are the **arguments** passed to the function. The values are assigned to the parameters `name` and `age`, respectively.

---

### **Key Differences**

| Feature          | Parameters                            | Arguments                                 |
| ---------------- | ------------------------------------- | ----------------------------------------- |
| **Definition**   | Variables in the function definition. | Values provided during the function call. |
| **Location**     | Declared in the function signature.   | Passed in the function invocation.        |
| **Example**      | `function add(a, b)`                  | `add(3, 5)`                               |
| **Relationship** | Placeholder for input values.         | Actual data assigned to parameters.       |

---

### **Example with Multiple Arguments**

Consider a function to add two numbers:

```javascript
// Parameters: a, b
function add(a, b) {
  return a + b;
}

// Arguments: 3, 5
const result = add(3, 5);
console.log(result); // Output: 8
```

- `a` and `b` are **parameters**.
- `3` and `5` are **arguments** passed to the function.

2. Create a function that takes two parameters and returns their sum. Call this function with the arguments 5 and 10.

Here's the function that takes two parameters and returns their sum:

### **Code**

```javascript
// Function Declaration
function addNumbers(a, b) {
  return a + b;
}

// Calling the function with arguments 5 and 10
const result = addNumbers(5, 10);

console.log(result); // Output: 15
```

### **Explanation**

1. **Function Definition**:

   - `addNumbers(a, b)` is a function with two parameters: `a` and `b`.
   - It returns the sum of `a` and `b` using the `return` statement.

2. **Function Call**:

   - The function is called with arguments `5` and `10`.
   - These arguments are assigned to the parameters `a` and `b`, respectively.

3. **Output**:
   - The function calculates `5 + 10` and returns `15`, which is stored in the variable `result` and logged to the console.

**Intermediate:**

3. Write a function that uses default parameter values. Call the function with and without passing arguments.

Here's a function that uses default parameter values:

### **Code**

```javascript
// Function with default parameter values
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

// Calling the function without arguments
console.log(greet()); // Output: Hello, Guest!

// Calling the function with one argument
console.log(greet("Alice")); // Output: Hello, Alice!

// Calling the function with both arguments
console.log(greet("Bob", "Hi")); // Output: Hi, Bob!
```

### **Explanation**

1. **Default Parameters**:

   - The function `greet` has two parameters: `name` and `greeting`.
   - If no value is passed for `name`, it defaults to `"Guest"`.
   - If no value is passed for `greeting`, it defaults to `"Hello"`.

2. **Function Calls**:
   - When no arguments are provided, the defaults are used: `"Guest"` and `"Hello"`.
   - When one argument is provided, the first parameter takes the argument, and the second uses the default value.
   - When both arguments are provided, the defaults are overridden.

**Advanced:**

4. How can you handle an unknown number of arguments in a function? Demonstrate with an example using the `arguments` object and `rest` parameters.

In JavaScript, you can handle an unknown number of arguments in a function using either the **`arguments` object** (available in non-arrow functions) or **rest parameters** (`...`). Both methods allow you to work with a variable number of inputs.

---

### **Using the `arguments` Object**

The `arguments` object is an array-like object available in non-arrow functions. It contains all arguments passed to the function.

#### Example with `arguments`

```javascript
function sumUsingArguments() {
  let total = 0;

  // Loop through the arguments object
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

// Calling the function with different numbers of arguments
console.log(sumUsingArguments(1, 2, 3)); // Output: 6
console.log(sumUsingArguments(5, 10, 15, 20)); // Output: 50
console.log(sumUsingArguments()); // Output: 0
```

#### Notes:

- `arguments` is not a real array but an array-like object.
- You cannot use array methods like `.map()` or `.reduce()` directly on `arguments`.

---

### **Using Rest Parameters**

Rest parameters (`...args`) provide a cleaner, more modern way to handle unknown arguments. They collect all arguments into a real array.

#### Example with Rest Parameters

```javascript
function sumUsingRest(...numbers) {
  // Use array methods to calculate the sum
  return numbers.reduce((total, num) => total + num, 0);
}

// Calling the function with different numbers of arguments
console.log(sumUsingRest(1, 2, 3)); // Output: 6
console.log(sumUsingRest(5, 10, 15, 20)); // Output: 50
console.log(sumUsingRest()); // Output: 0
```

#### Notes:

- `...numbers` is a real array, so you can use array methods like `.map()`, `.reduce()`, etc.
- Rest parameters are part of ES6, making them more modern and preferable to `arguments`.

---

### **Comparison of `arguments` and Rest Parameters**

| Feature           | `arguments` Object                 | Rest Parameters (`...args`) |
| ----------------- | ---------------------------------- | --------------------------- |
| **Availability**  | Available in non-arrow functions.  | Available in all functions. |
| **Type**          | Array-like object.                 | Real array.                 |
| **Modern Syntax** | Legacy feature.                    | Part of ES6, more modern.   |
| **Methods**       | Cannot use array methods directly. | Can use all array methods.  |

---

### **Key Takeaway**

- Use the `arguments` object in older JavaScript code for compatibility.
- Prefer rest parameters (`...args`) in modern JavaScript for better readability and flexibility.

---

### **4. Callback Functions vs. Higher-Order Functions**

**Basic:**

1. Define a callback function and a higher-order function with examples.

### **Callback Function**

A **callback function** is a function passed as an argument to another function. It is called (executed) inside the other function to complete some kind of routine or action.

---

### **Higher-Order Function**

A **higher-order function** is a function that:

1. Takes one or more functions as arguments (callbacks).
2. Returns a function as its result (optional).

---

### **Example: Callback Function**

```javascript
// Callback function
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Higher-order function
function processUserInput(callback) {
  const name = "Alice";
  callback(name); // Executing the callback function
}

// Using the higher-order function with a callback
processUserInput(greet);

// Output: Hello, Alice!
```

- `greet` is the **callback function** passed as an argument.
- `processUserInput` is the **higher-order function** that accepts and invokes the callback.

---

### **Example: Higher-Order Function Returning a Function**

```javascript
// Higher-order function returning another function
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

// Using the higher-order function
const double = multiplyBy(2); // Returns a function that doubles the input
const triple = multiplyBy(3); // Returns a function that triples the input

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

- `multiplyBy` is the **higher-order function** because it returns another function.
- The returned function can be used to multiply any number by the specified factor.

---

### **Key Differences**

| Aspect                     | Callback Function                         | Higher-Order Function                               |
| -------------------------- | ----------------------------------------- | --------------------------------------------------- |
| **Definition**             | A function passed as an argument.         | A function that accepts or returns other functions. |
| **Usage**                  | Often used for asynchronous tasks.        | Used for abstraction and reusability.               |
| **Examples in JavaScript** | `setTimeout`, `Array.map`, `Array.filter` | `Array.map`, function factories                     |

---

### **Real-World Example: Array.map (Built-In Higher-Order Function with Callbacks)**

```javascript
const numbers = [1, 2, 3, 4];

// Callback function to square numbers
const square = (num) => num * num;

// Using Array.map (Higher-Order Function) with the callback
const squaredNumbers = numbers.map(square);

console.log(squaredNumbers); // Output: [1, 4, 9, 16]
```

- `square` is the **callback function**.
- `Array.map` is the **higher-order function** that applies the callback to each element in the array.

2. Write a higher-order function `operate` that accepts a callback function for addition or multiplication.

Here's an example of a higher-order function `operate` that accepts a callback function to either perform addition or multiplication:

### **Code Example**

```javascript
// Higher-order function that accepts a callback
function operate(a, b, callback) {
  return callback(a, b); // Calls the callback function with a and b
}

// Callback function for addition
const add = (x, y) => x + y;

// Callback function for multiplication
const multiply = (x, y) => x * y;

// Using the higher-order function with addition callback
console.log(operate(5, 3, add)); // Output: 8 (5 + 3)

// Using the higher-order function with multiplication callback
console.log(operate(5, 3, multiply)); // Output: 15 (5 * 3)
```

### **Explanation**

1. **`operate` Function (Higher-Order Function)**:

   - It takes three parameters: `a`, `b`, and `callback`.
   - `a` and `b` are the numbers on which the operation (addition or multiplication) will be performed.
   - `callback` is a function (either `add` or `multiply`) that defines the operation.

2. **Callback Functions**:

   - `add`: Adds two numbers.
   - `multiply`: Multiplies two numbers.

3. **Usage**:
   - We call `operate` with the values `5` and `3`, passing either the `add` or `multiply` function as the callback.
   - The result is returned based on the operation defined in the callback.

---

### **Key Concept**

- The `operate` function is a **higher-order function** because it accepts another function (`callback`) as an argument.
- The `add` and `multiply` functions are **callback functions** that define the operations to be performed inside the higher-order function.

**Intermediate:**  
3. Create an array of numbers `[1, 2, 3, 4, 5]`. Use a higher-order function to filter out even numbers.

Here is how you can use the `filter` higher-order function to filter out even numbers from an array:

### Code Snippet:

```javascript
// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use the filter function to get even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
```

### Explanation:

1. **`filter` function**: It creates a new array containing all elements of the original array that pass the provided test (a condition in the callback function).
2. **Condition**: `number % 2 === 0` checks if the number is even. If true, the number is included in the `evenNumbers` array.

3. Implement a higher-order function that repeatedly calls a given callback function `n` times.

Here's how you can implement a higher-order function that calls a given callback function `n` times:

### Code Snippet:

```javascript
// Higher-order function to call a callback `n` times
function repeatNTimes(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(i); // Pass the current iteration index to the callback
  }
}

// Example usage:
repeatNTimes(5, (index) => {
  console.log(`Callback called at iteration ${index}`);
});
```

### Explanation:

1. **`repeatNTimes` Function**:

   - Takes two arguments: `n` (number of times to repeat) and `callback` (the function to call).
   - Uses a `for` loop to call the `callback` function `n` times.
   - Passes the current iteration index to the `callback` for potential use.

2. **Callback Function**:
   - Here, the callback is a function that logs the current iteration index.

### Output:

```
Callback called at iteration 0
Callback called at iteration 1
Callback called at iteration 2
Callback called at iteration 3
Callback called at iteration 4
```

**Advanced:**

5. Explain the difference between synchronous and asynchronous callbacks with examples.

### **Synchronous vs Asynchronous Callbacks**

1. **Synchronous Callbacks**:

   - These are executed immediately, in the order they are called, as part of the main program's flow.
   - The program waits for the callback to complete before continuing to the next line.

   **Example**:

   ```javascript
   function greet(name, callback) {
     console.log(`Hello, ${name}!`);
     callback(); // Synchronous execution
   }

   greet("Alice", () => {
     console.log("This is a synchronous callback.");
   });
   console.log("This will run after the callback.");
   ```

   **Output**:

   ```
   Hello, Alice!
   This is a synchronous callback.
   This will run after the callback.
   ```

   - The callback is executed immediately, before moving to the next line.

2. **Asynchronous Callbacks**:

   - These are executed at a later time, often in response to an event (e.g., a timeout, fetching data, etc.).
   - The program does not wait for the callback to complete; it continues executing the next lines of code.

   **Example**:

   ```javascript
   function fetchData(callback) {
     console.log("Fetching data...");
     setTimeout(() => {
       callback("Data received"); // Asynchronous execution
     }, 2000); // Simulate a 2-second delay
   }

   fetchData((data) => {
     console.log(data);
   });
   console.log("This will run before the callback.");
   ```

   **Output**:

   ```
   Fetching data...
   This will run before the callback.
   Data received
   ```

   - The callback is executed after a delay, while the program continues running other code in the meantime.

---

### **Key Differences**:

| **Aspect**           | **Synchronous Callback**              | **Asynchronous Callback**               |
| -------------------- | ------------------------------------- | --------------------------------------- |
| **Execution Timing** | Executes immediately, in order.       | Executes later, after a task completes. |
| **Blocking**         | Blocks further code execution.        | Non-blocking; allows code to continue.  |
| **Use Case**         | Simple operations like array methods. | I/O operations, timers, or API calls.   |

6. Write a higher-order function `asyncOperation` that accepts a callback function and executes it after a 2-second delay using `setTimeout`.

Here’s how you can write a higher-order function `asyncOperation` that executes a callback after a 2-second delay:

### Code Snippet:

```javascript
// Higher-order function that delays execution of a callback
function asyncOperation(callback) {
  console.log("Starting async operation...");
  setTimeout(() => {
    callback(); // Execute the callback after 2 seconds
  }, 2000);
}

// Example usage:
asyncOperation(() => {
  console.log("Callback executed after 2 seconds!");
});
```

### Explanation:

1. **`asyncOperation` Function**:
   - Accepts a callback function as an argument.
   - Uses `setTimeout` to delay the execution of the callback by 2 seconds (2000 milliseconds).
2. **`setTimeout`**:

   - A built-in JavaScript function used to schedule tasks to run after a specified delay.

3. **Callback**:
   - When the delay expires, the callback function is executed.

### Output:

```
Starting async operation...
Callback executed after 2 seconds!
```
