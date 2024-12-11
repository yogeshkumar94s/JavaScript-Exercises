## **1. Function Binding**

- **Basic Question:**

### What does **`.bind()`** do in JavaScript? Write an example where you use `.bind()` to bind a function to a specific context.

In JavaScript, **`.bind()`** is a method available on functions that creates a new function with the same body and scope as the original function but with a specified value for `this`. Additionally, you can pass arguments to `.bind()` to pre-fill some or all of the parameters of the function.

### Key Features of `.bind()`:

1. **Context Binding**: It binds the `this` keyword inside the function to a specific object.
2. **Does Not Execute Immediately**: `.bind()` does not call the function; instead, it returns a new function with the bound context.

---

### Syntax:

```javascript
functionName.bind(thisArg, ...args);
```

- **`thisArg`**: The value to be set as `this` when the function is called.
- **`...args`**: Arguments to be pre-filled in the function.

---

### Example: Binding a Function to a Specific Context

```javascript
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const unboundGreet = person.greet; // Extracting the method (loses `this` context)
unboundGreet(); // Output: Hello, my name is undefined (or error in strict mode)

const boundGreet = person.greet.bind(person); // Binding `this` to `person`
boundGreet(); // Output: Hello, my name is Alice
```

In this example:

- The `unboundGreet` loses its context (`this` becomes undefined or global object depending on strict mode).
- The `boundGreet` explicitly binds `this` to `person`, ensuring the correct behavior.

---

### Example: Using `.bind()` with Partial Application

You can also use `.bind()` to pre-fill arguments for a function (called **partial application**).

```javascript
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // Pre-fill `a` as 2
console.log(double(5)); // Output: 10

const triple = multiply.bind(null, 3); // Pre-fill `a` as 3
console.log(triple(5)); // Output: 15
```

In this example:

- `null` is passed as the `thisArg` because `this` is not used in the `multiply` function.
- The first argument (`a`) is pre-filled, creating specialized functions like `double` and `triple`.

---

### Why Use `.bind()`?

1. **To Fix `this` in Callbacks**: Useful when passing methods as callbacks where `this` context might be lost.
2. **Partial Application**: Pre-filling some arguments for functions.
3. **Creating Bound Functions**: Useful for event handlers or when sharing functions across objects.

---

### Example: `.bind()` for Event Handlers

```javascript
class Button {
  constructor(label) {
    this.label = label;
  }

  click() {
    console.log(`Button ${this.label} clicked`);
  }
}

const myButton = new Button("Submit");
const buttonClickHandler = myButton.click.bind(myButton); // Bind `this` to `myButton`

document
  .querySelector("#myButton")
  .addEventListener("click", buttonClickHandler);
```

In this example:

- Without `.bind()`, the `this` inside `myButton.click` would refer to the DOM element (`#myButton`) instead of the `myButton` object.
- Using `.bind()` ensures `this` refers to `myButton`.

- **Intermediate Question:**

### Write a function `greet` that accepts a name and logs a greeting message. Then, use `.bind()` to bind the function to a specific context and demonstrate how the context changes.

Here's how you can implement a `greet` function and use `.bind()` to bind it to different contexts:

### Implementation:

```javascript
function greet(greeting) {
  console.log(`${greeting}, my name is ${this.name}.`);
}

// Create two objects with different `name` properties
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// Bind `greet` to `person1`
const greetAlice = greet.bind(person1);

// Bind `greet` to `person2`
const greetBob = greet.bind(person2);

// Call the bound functions
greetAlice("Hello"); // Output: Hello, my name is Alice.
greetBob("Hi"); // Output: Hi, my name is Bob.
```

---

### Explanation:

1. The `greet` function uses `this.name` to access the `name` property of the object it is bound to.
2. `.bind()` is used to explicitly bind the function to a specific object (`person1` or `person2`).
3. The context (`this`) inside the function changes depending on the object it is bound to.

---

### Demonstrating Context Change Dynamically

You can also see how the context changes when the function is invoked with different bindings:

```javascript
const person3 = { name: "Charlie" };

// Re-bind greetAlice to person3 dynamically
const greetCharlie = greetAlice.bind(person3);
greetCharlie("Greetings"); // Output: Greetings, my name is Alice.

console.log(
  "Even after rebinding, greetAlice remains bound to the original context."
);
greetAlice("Hey"); // Output: Hey, my name is Alice.
```

---

### Key Point:

Once a function is bound with `.bind()`, it is permanently tied to the initial context (`person1` for `greetAlice` in this case). Rebinding it to another object does not change the original binding.

- **Advanced Question:**

### Explain how **`bind`** can be used to create partially applied functions. Write an example where you use `bind` to create a function with a preset argument.

### Explanation of Partial Application with `bind`

In JavaScript, **`bind`** can be used not only to bind the `this` context but also to partially apply arguments to a function. This means you can create a new function with some arguments already preset, which is useful for reusing or simplifying function calls.

When you pass arguments to `.bind()`, they are "locked in" as the starting arguments for the new function, while the remaining arguments can still be provided when the function is called.

---

### Example: Partially Applied Function with `bind`

```javascript
function multiply(a, b) {
  return a * b;
}

// Partially apply the first argument (a = 5)
const multiplyByFive = multiply.bind(null, 5);

console.log(multiplyByFive(2)); // Output: 10
console.log(multiplyByFive(10)); // Output: 50

// Partially apply the first argument (a = 10)
const multiplyByTen = multiply.bind(null, 10);

console.log(multiplyByTen(3)); // Output: 30
console.log(multiplyByTen(7)); // Output: 70
```

---

### Key Points in the Example:

1. **`bind` with `null` as `this`**: Since the `multiply` function does not use `this`, we pass `null` as the context. For functions that depend on `this`, you can pass the appropriate object instead.
2. **First Argument is Preset**: In `multiplyByFive`, the first argument `a` is set to `5`. In `multiplyByTen`, it is set to `10`.
3. **Flexible Second Argument**: The second argument `b` can still be provided when calling the partially applied function.

---

### Why Use Partial Application?

- **Code Reusability**: Create specific functions like `multiplyByFive` or `multiplyByTen` without rewriting logic.
- **Convenience**: Simplifies repeated calls where certain arguments are always the same.
- **Improved Readability**: Makes your code more expressive and intention-revealing.

## By using `bind` for partial application, you can modularize and simplify function calls effectively.

## **2. Function Length Property**

- **Basic Question:**

### What is the **`length`** property of a function? Write an example that demonstrates how `length` behaves for a function with parameters.

### Explanation of the `length` Property of a Function

The **`length`** property of a function in JavaScript indicates the number of **formal parameters** declared in the function definition. It does not count rest parameters or default parameters.

---

### Behavior of the `length` Property

1. **Formal Parameters Only**: Counts the number of explicitly declared parameters in the function.
2. **Excludes Default and Rest Parameters**: Parameters with default values or rest parameters (`...args`) are not included in the count.

---

### Example: Demonstrating the `length` Property

```javascript
function example(a, b, c) {}
function withDefaults(a = 1, b = 2, c) {}
function withRest(a, ...args) {}
function noParams() {}

console.log(example.length); // Output: 3 (three declared parameters)
console.log(withDefaults.length); // Output: 1 (only the parameters before the first default are counted)
console.log(withRest.length); // Output: 1 (rest parameter is not counted)
console.log(noParams.length); // Output: 0 (no parameters are declared)
```

---

### Key Points:

1. **Default Parameters**: The `length` property only considers parameters up to the first default value.

   ```javascript
   function func(a, b = 2, c) {}
   console.log(func.length); // Output: 1 (only `a` is counted)
   ```

2. **Rest Parameters**: Rest parameters are always excluded from the count.

   ```javascript
   function funcWithRest(a, ...rest) {}
   console.log(funcWithRest.length); // Output: 1
   ```

3. **No Parameters**: For functions with no declared parameters, `length` is `0`.

---

### Why is the `length` Property Useful?

- **Function Metadata**: The `length` property is helpful when you need to know how many arguments a function is designed to accept, such as in frameworks or libraries.
- **Validation**: It can be used to validate the correct usage of a function or for debugging purposes.

For example:

```javascript
function validateArgs(fn, ...args) {
  if (args.length !== fn.length) {
    console.error(
      `Incorrect number of arguments. Expected ${fn.length}, got ${args.length}.`
    );
  }
}

validateArgs(example, 1, 2); // Output: Incorrect number of arguments. Expected 3, got 2.
```

- **Intermediate Question:**

### How does the `length` property of a function differ from the number of arguments passed to it? Write an example with a function and log its `length` and arguments.

### Difference Between the `length` Property and `arguments.length`

1. **`length` Property**:

   - Represents the number of formal parameters declared in the function definition.
   - It does not change regardless of the number of arguments passed during function execution.

2. **`arguments.length`**:
   - Represents the actual number of arguments passed to the function during its invocation.
   - It reflects the runtime count of arguments.

---

### Example: Comparing `length` and `arguments.length`

```javascript
function exampleFunction(a, b, c) {
  console.log("Function `length`:", exampleFunction.length); // Number of declared parameters
  console.log("Arguments passed:", arguments.length); // Number of arguments passed
  console.log("Arguments:", arguments); // The arguments object
}

// Call with fewer arguments
exampleFunction(1);
// Output:
// Function `length`: 3
// Arguments passed: 1
// Arguments: [Arguments] { '0': 1 }

// Call with more arguments
exampleFunction(1, 2, 3, 4);
// Output:
// Function `length`: 3
// Arguments passed: 4
// Arguments: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

// Call with exact arguments
exampleFunction(1, 2, 3);
// Output:
// Function `length`: 3
// Arguments passed: 3
// Arguments: [Arguments] { '0': 1, '1': 2, '2': 3 }
```

---

### Key Observations:

1. **Static vs. Dynamic**:

   - The `length` property is static and reflects the number of declared parameters in the function definition.
   - `arguments.length` dynamically reflects the number of arguments passed during a function call.

2. **No Relationship**:
   - The value of `length` has no dependency on how the function is called or the number of arguments passed.

---

### Why is this distinction important?

- **`length`** helps identify the function's intended usage (metadata).
- **`arguments.length`** provides insight into how the function was actually called.

For example:

```javascript
function validateArgs() {
  if (arguments.length !== validateArgs.length) {
    console.error(
      "Mismatch: Function expects",
      validateArgs.length,
      "arguments, but got",
      arguments.length
    );
  }
}

validateArgs(1, 2); // Output: Mismatch: Function expects 0 arguments, but got 2
```

- **Advanced Question:**

### Explain the role of the `length` property in **rest parameters** and how it behaves when rest parameters are used in the function.

### The Role of the `length` Property in Functions with Rest Parameters

The `length` property of a function in JavaScript reflects the number of **declared parameters** _before_ the first rest parameter. Any parameters declared after the rest parameter or the rest parameter itself are **not counted** in the `length` property.

---

### Key Rules:

1. **Parameters Before Rest Parameters**: The `length` property counts only the regular parameters declared before the rest parameter.
2. **Rest Parameter Ignored**: The rest parameter and any parameters after it are not included in the `length` property.
3. **Default Parameters**: If a default parameter appears before the rest parameter, it is still counted in the `length`.

---

### Example: Rest Parameters and the `length` Property

```javascript
function myFunction(a, b, ...rest) {
  console.log("Function `length`:", myFunction.length);
}

myFunction(1, 2, 3, 4);
// Output:
// Function `length`: 2
```

#### Explanation:

- `a` and `b` are regular parameters declared before the rest parameter.
- The rest parameter `...rest` is ignored in the `length` calculation.
- The function's `length` is `2`.

---

### Example with Default Parameters

```javascript
function anotherFunction(a, b = 10, ...rest) {
  console.log("Function `length`:", anotherFunction.length);
}

anotherFunction(1, 2, 3);
// Output:
// Function `length`: 1
```

#### Explanation:

- Only `a` is counted because `b` has a default value.
- The rest parameter `...rest` is ignored in the `length` calculation.
- The function's `length` is `1`.

---

### Summary of Behavior:

| **Parameter Type**          | **Counted in `length`?** |
| --------------------------- | ------------------------ |
| Regular parameters          | ✅ Yes                   |
| Default parameters          | ❌ No                    |
| Rest parameters (`...rest`) | ❌ No                    |

The `length` property gives insight into the **expected number of non-default, non-rest parameters** a function requires. This is particularly useful for understanding a function's signature or for meta-programming.

---

## **3. Function Call Stack**

- **Basic Question:**

### What is the **call stack** in JavaScript? How does it relate to function execution?

### What is the **Call Stack** in JavaScript?

The **call stack** is a mechanism in JavaScript used to manage the execution of functions. It is a **stack data structure** (LIFO: Last In, First Out) where function calls are added and removed as the program runs.

---

### How the Call Stack Works:

1. **When a function is called**:
   - It is added to the top of the call stack.
2. **When a function completes**:
   - It is removed (popped) from the top of the stack.
3. **The current function being executed**:
   - Is always the one on top of the stack.

---

### Relation to Function Execution:

- **Single-threaded nature**: JavaScript uses a single call stack for execution, meaning it can only handle one function at a time.
- **Function nesting**: If a function calls another function, the new function is added to the stack. Once the inner function completes, the program returns to the outer function.
- **Stack overflow**: If too many functions are added to the stack without being removed (e.g., due to infinite recursion), a **stack overflow** error occurs.

---

### Example of Call Stack in Action:

```javascript
function greet() {
  console.log("Hello!");
}

function sayGoodbye() {
  console.log("Goodbye!");
}

function conversation() {
  greet();
  sayGoodbye();
}

conversation();
```

#### Step-by-Step Call Stack:

1. **Call `conversation()`**:
   - `conversation` is added to the stack.
2. **Call `greet()` from `conversation()`**:
   - `greet` is added to the stack.
   - `console.log("Hello!")` executes.
   - `greet` is removed from the stack.
3. **Call `sayGoodbye()` from `conversation()`**:
   - `sayGoodbye` is added to the stack.
   - `console.log("Goodbye!")` executes.
   - `sayGoodbye` is removed from the stack.
4. **Finish `conversation()`**:
   - `conversation` is removed from the stack.

---

### Visualizing the Call Stack:

```plaintext
Initial:             []
Call conversation(): [conversation]
Call greet():        [conversation, greet]
Return from greet(): [conversation]
Call sayGoodbye():   [conversation, sayGoodbye]
Return from sayGoodbye(): [conversation]
End of conversation(): []
```

---

### Example of a Stack Overflow:

```javascript
function infinite() {
  infinite(); // Recursively calls itself
}

infinite(); // This will cause a stack overflow error
```

#### Explanation:

- Each call to `infinite()` adds a new frame to the stack.
- The stack keeps growing without being cleared, leading to a **stack overflow error**.

---

### Summary:

- The **call stack** tracks the execution of functions in a LIFO order.
- It manages which function is currently being executed and ensures the program flow is predictable.
- Understanding the call stack is crucial for debugging and dealing with issues like stack overflow and asynchronous behavior.

- **Intermediate Question:**

### Explain how the call stack grows and shrinks when functions are called. Demonstrate with a recursive function.

### How the Call Stack Grows and Shrinks with Function Calls

The **call stack** grows when a function is invoked, as each invocation adds a new **stack frame** to the top of the stack. It shrinks when a function completes its execution and the corresponding frame is removed from the stack.

In the case of **recursive functions**, the stack grows with each recursive call until a base case is met, at which point the stack begins to shrink as each recursive function resolves.

---

### Example: Recursive Factorial Function

```javascript
function factorial(n) {
  if (n === 1) {
    console.log(`Base case reached with n = ${n}`);
    return 1; // Base case: no more recursive calls
  }
  console.log(`Calculating factorial(${n}), calling factorial(${n - 1})`);
  return n * factorial(n - 1); // Recursive call
}

// Test the function
console.log("Factorial result:", factorial(5));
```

---

### Step-by-Step Stack Growth and Shrinkage

#### 1. **Initial Call**:

- `factorial(5)` is called. A new frame is added to the stack.

#### 2. **Recursive Calls**:

- `factorial(5)` calls `factorial(4)` → new frame for `factorial(4)`.
- `factorial(4)` calls `factorial(3)` → new frame for `factorial(3)`.
- `factorial(3)` calls `factorial(2)` → new frame for `factorial(2)`.
- `factorial(2)` calls `factorial(1)` → new frame for `factorial(1)`.

#### 3. **Base Case**:

- When `factorial(1)` is called, it meets the base case (`n === 1`), returns `1`, and its frame is removed from the stack.

#### 4. **Stack Shrinks**:

- The return value of `factorial(1)` is used by `factorial(2)`, which completes and is removed.
- This process continues until `factorial(5)` completes, at which point the stack is empty.

---

### Visualizing the Stack:

#### Call Stack Growth (Recursive Calls):

```plaintext
1. Call factorial(5)       -> [factorial(5)]
2. Call factorial(4)       -> [factorial(5), factorial(4)]
3. Call factorial(3)       -> [factorial(5), factorial(4), factorial(3)]
4. Call factorial(2)       -> [factorial(5), factorial(4), factorial(3), factorial(2)]
5. Call factorial(1)       -> [factorial(5), factorial(4), factorial(3), factorial(2), factorial(1)]
```

#### Call Stack Shrinkage (Returning Values):

```plaintext
6. Return factorial(1) = 1 -> [factorial(5), factorial(4), factorial(3), factorial(2)]
7. Return factorial(2) = 2 -> [factorial(5), factorial(4), factorial(3)]
8. Return factorial(3) = 6 -> [factorial(5), factorial(4)]
9. Return factorial(4) = 24 -> [factorial(5)]
10. Return factorial(5) = 120 -> []
```

---

### Console Output:

```plaintext
Calculating factorial(5), calling factorial(4)
Calculating factorial(4), calling factorial(3)
Calculating factorial(3), calling factorial(2)
Calculating factorial(2), calling factorial(1)
Base case reached with n = 1
Factorial result: 120
```

---

### Key Takeaways:

1. The call stack **grows** with each function call.
2. The stack **shrinks** as functions complete and return values.
3. In recursion, the base case is crucial to prevent infinite growth (stack overflow).

- **Advanced Question:**

### How does JavaScript handle function execution in the event of **recursive calls** and what impact does the call stack have on memory usage?

### How JavaScript Handles Function Execution in Recursive Calls

When a recursive function is executed, JavaScript relies on the **call stack** to keep track of function calls and their execution context. Each time the function is invoked, a new **stack frame** is created and pushed onto the stack. This frame contains details like local variables, parameters, and the point of execution in the function.

---

### Key Aspects of Recursive Calls:

1. **Call Stack Growth**:

   - For every recursive call, a new stack frame is added.
   - This consumes memory because each frame stores data like the function’s scope and its execution context.

2. **Base Case**:

   - A properly implemented recursive function includes a **base case** that halts further recursion.
   - Without a base case, recursion continues indefinitely, leading to a **stack overflow**.

3. **Memory Consumption**:

   - The more recursive calls made without unwinding the stack, the more memory is used.
   - Recursive functions that require deep recursion (e.g., processing large datasets) may exhaust the stack.

4. **Tail Call Optimization (TCO)**:
   - In some programming languages, tail call optimization reduces stack usage for specific recursive patterns. However, JavaScript does **not consistently support TCO**, so each call typically adds to the stack.

---

### Impact on Memory Usage:

#### 1. **Stack Frame Size**:

- Each stack frame consumes memory proportional to the local data it holds.
- Deep recursive calls can quickly lead to excessive memory usage.

#### 2. **Stack Overflow**:

- When the call stack exceeds its maximum size, a **stack overflow error** occurs.
- Example:
  ```javascript
  function infiniteRecursion() {
    return infiniteRecursion(); // No base case
  }
  infiniteRecursion(); // Causes a stack overflow
  ```

---

### Example: Recursive Function and Memory Implications

#### Factorial with Recursive Calls:

```javascript
function factorial(n) {
  if (n === 1) {
    return 1; // Base case
  }
  return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5));
```

#### Memory Usage Analysis:

1. **Stack Growth**:

   - Each call (e.g., `factorial(5)`, `factorial(4)`, ...) adds a stack frame.
   - Memory usage increases with the number of recursive calls.

2. **Stack Shrinkage**:
   - As each call completes (starting from the base case), its stack frame is removed.

---

### Iterative Solution to Reduce Memory Usage:

An iterative approach avoids the call stack growth seen in recursion, making it more memory-efficient.

```javascript
function factorialIterative(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialIterative(5));
```

---

### Summary of Key Differences:

| **Aspect**            | **Recursive Approach**                           | **Iterative Approach**             |
| --------------------- | ------------------------------------------------ | ---------------------------------- |
| **Memory Usage**      | Increases with each call due to stack frames     | Minimal, as it uses a single frame |
| **Base Case Needed**  | Yes, to prevent infinite recursion               | No base case required              |
| **Call Stack Growth** | Grows with each recursive call                   | Constant stack usage               |
| **Complexity**        | Easier to write for problems like tree traversal | May require additional logic       |

---

### Recommendation:

1. Use recursion when it simplifies the logic and the depth of recursion is predictable and manageable.
2. For deeply nested or resource-intensive tasks, prefer **iterative approaches** to avoid stack overflow and reduce memory usage.

---

## **4. Function Expressions vs. Function Declarations**

- **Basic Question:**

### What is the difference between a function expression and a function declaration in JavaScript? Write examples of both.

### Difference Between a Function Declaration and a Function Expression

1. **Function Declaration**:

   - A named function defined using the `function` keyword.
   - It is **hoisted**, meaning it is available throughout its containing scope even before its definition is encountered.

   **Example**:

   ```javascript
   function sayHello() {
     console.log("Hello!");
   }

   sayHello(); // Output: Hello!
   ```

2. **Function Expression**:

   - A function that is assigned to a variable, often anonymously.
   - It is **not hoisted**, meaning it cannot be called before the assignment.

   **Example**:

   ```javascript
   const sayHello = function () {
     console.log("Hello!");
   };

   sayHello(); // Output: Hello!
   ```

---

### Key Differences

| **Aspect**    | **Function Declaration**                 | **Function Expression**            |
| ------------- | ---------------------------------------- | ---------------------------------- |
| **Syntax**    | Begins with `function` keyword           | Assigned to a variable             |
| **Hoisting**  | Hoisted; can be called before definition | Not hoisted; must be defined first |
| **Name**      | Always has a name                        | Can be anonymous or named          |
| **Use Cases** | Used for reusable named functions        | Useful for callbacks or closures   |

---

### Hoisting Demonstration

**Function Declaration**:

```javascript
sayHello(); // Output: Hello!

function sayHello() {
  console.log("Hello!");
}
```

**Function Expression**:

```javascript
sayHello(); // Error: Cannot access 'sayHello' before initialization

const sayHello = function () {
  console.log("Hello!");
};
```

---

### Named vs Anonymous Function Expressions

1. **Anonymous**:

   - Common in callbacks or event handlers.

   ```javascript
   const greet = function () {
     console.log("Hi!");
   };

   greet(); // Output: Hi!
   ```

2. **Named**:

   - Useful for debugging or recursion.

   ```javascript
   const factorial = function fact(n) {
     if (n === 0) return 1;
     return n * fact(n - 1); // Named for self-reference
   };

   console.log(factorial(5)); // Output: 120
   ```

---

### Summary

- **Function Declaration**: Preferred when defining reusable, hoisted functions.
- **Function Expression**: Useful for callbacks, closures, or when hoisting is not required.

- **Intermediate Question:**

### Explain how **hoisting** affects function declarations and function expressions. Demonstrate with examples.

### Hoisting in JavaScript

**Hoisting** is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed.

However, hoisting behaves differently for **function declarations** and **function expressions**.

---

### Function Declaration and Hoisting

Function declarations are **hoisted** entirely, including the function definition itself (i.e., both the function name and body are moved to the top). This means you can call a function before its declaration in the code.

**Example** (Function Declaration with Hoisting):

```javascript
// Call the function before it is declared
greet(); // Output: Hello, World!

// Function declaration
function greet() {
  console.log("Hello, World!");
}
```

**Explanation**:

- The function `greet()` can be called before its declaration because the entire function definition is hoisted to the top of the scope.

---

### Function Expression and Hoisting

Function expressions, on the other hand, **are not hoisted** in the same way. Only the variable declaration (but not the function definition) is hoisted to the top. This means that if you try to invoke a function expression before the function assignment, it will result in an error.

**Example** (Function Expression without Hoisting):

```javascript
// Trying to call before assignment
myFunction(); // Error: Cannot access 'myFunction' before initialization

// Function expression
const myFunction = function () {
  console.log("Hello from function expression!");
};
```

**Explanation**:

- Only the variable `myFunction` is hoisted, not its function definition. When you try to call `myFunction()` before it’s assigned, you get an error because at that point, `myFunction` is `undefined`.

---

### Hoisting Behavior Comparison

| **Type**                 | **Hoisting**                                               | **Can Be Called Before Declaration?** |
| ------------------------ | ---------------------------------------------------------- | ------------------------------------- |
| **Function Declaration** | Entire function (name and body) is hoisted                 | Yes                                   |
| **Function Expression**  | Only the variable declaration is hoisted, not the function | No                                    |

---

### Additional Example: Hoisting with `var` and `let`

For function expressions, hoisting can also be affected by how variables are declared (`var`, `let`, or `const`).

#### Using `var` for Function Expression:

```javascript
myFunction(); // Output: undefined

var myFunction = function () {
  console.log("This is a function expression!");
};
```

**Explanation**:

- The variable `myFunction` is hoisted and initialized as `undefined`. When the function is called before the assignment, it logs `undefined`.

#### Using `let` or `const` for Function Expression:

```javascript
myFunction(); // Error: Cannot access 'myFunction' before initialization

let myFunction = function () {
  console.log("This is a function expression!");
};
```

**Explanation**:

- If you use `let` or `const`, the variable is hoisted to the top but remains in a "temporal dead zone" until the assignment is reached. This results in a ReferenceError when trying to call it before initialization.

---

### Summary

- **Function Declarations**: Are hoisted completely, so they can be called before they are defined in the code.
- **Function Expressions**: Only the variable declaration is hoisted (not the assignment), so calling the function before its definition results in an error (unless using `var`, in which case it will be `undefined`).

- **Advanced Question:**

### How do **anonymous functions** and **named function expressions** differ? Write an example of each and explain their use cases.

### **Anonymous Functions** vs **Named Function Expressions**

In JavaScript, **anonymous functions** and **named function expressions** are both ways to define functions, but they differ in how they are written and used.

---

### **Anonymous Functions**

An **anonymous function** is a function that doesn't have a name. These are typically used as function expressions or callback functions.

**Syntax**:

```javascript
const myFunction = function () {
  console.log("This is an anonymous function.");
};
```

- **Use Case**: Anonymous functions are often used when a function is required only once and doesn't need to be referenced by name. They are common in callbacks, event handlers, or as arguments to higher-order functions.

**Example: Anonymous Function in an Array Method**:

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

**Explanation**:

- The function passed to `map()` is anonymous and used directly as a callback. It doesn't need to have a name because it is not reused elsewhere.

---

### **Named Function Expressions**

A **named function expression** is a function that has a name and is assigned to a variable. This type of function is still treated as a function expression, but the function itself has a name that can be useful for debugging or recursion.

**Syntax**:

```javascript
const myFunction = function myNamedFunction() {
  console.log("This is a named function expression.");
};
```

- **Use Case**: Named function expressions are used when you want the function to have a name for easier debugging, or if the function needs to call itself recursively. They are especially useful in situations where the function is complex or might be used for debugging (since the function's name appears in stack traces).

**Example: Named Function Expression with Recursion**:

```javascript
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Recursive call using the function name
};

console.log(factorial(5)); // Output: 120
```

**Explanation**:

- The function `fact` is named inside the expression, allowing it to be called recursively. This is not possible with anonymous functions, as they do not have a name to reference themselves.

---

### Key Differences

| **Feature**       | **Anonymous Function**                                  | **Named Function Expression**                         |
| ----------------- | ------------------------------------------------------- | ----------------------------------------------------- |
| **Function Name** | No name assigned to the function itself                 | Has a name assigned to the function expression        |
| **Debugging**     | Harder to debug (stack traces show as `anonymous`)      | Easier to debug (stack traces show the function name) |
| **Recursion**     | Cannot call itself by name (unless self-referencing)    | Can call itself by the function name                  |
| **Use Case**      | One-time use, commonly as a callback or inline function | Reusable, debugging, or recursive functions           |

---

### When to Use Each

- **Anonymous Functions**:
  - When the function is used **once** or **briefly** (e.g., passing a callback).
  - When you don't need the function to have a name for referencing or debugging.
- **Named Function Expressions**:
  - When you want to **debug** easily and need the function name to appear in stack traces.
  - When you need the function to **reference itself** (recursion).
  - When the function is intended to be used multiple times in the same scope.

---

## **5. Function Memoization**

- **Intermediate Question:**

### What is **memoization** in the context of functions? Write a memoized version of the Fibonacci function using a cache.

### **Memoization** in Functions

**Memoization** is an optimization technique used to improve the performance of functions by storing the results of expensive function calls and reusing them when the same inputs occur again. In essence, it avoids the need to recompute results for the same inputs, thus improving efficiency, especially for recursive functions.

Memoization is often used for functions where the result of a computation depends on repeated calls with the same arguments. By caching the results, you avoid redundant computations and reduce the time complexity.

---

### **Memoized Fibonacci Function**

A common example of using memoization is optimizing the Fibonacci sequence calculation, where each number in the sequence is the sum of the two preceding numbers. Without memoization, a naive recursive Fibonacci implementation results in a lot of redundant calculations.

Here is a **memoized** version of the Fibonacci function using a cache:

```javascript
function memoizedFibonacci() {
  const cache = {}; // Create an empty cache object

  // Return a function that calculates Fibonacci numbers
  return function fibonacci(n) {
    if (n in cache) {
      return cache[n]; // If the result is already in cache, return it
    }

    if (n <= 1) {
      return n; // Base case: Fibonacci(0) = 0, Fibonacci(1) = 1
    }

    // Calculate the Fibonacci number and store it in the cache
    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n]; // Return the computed value
  };
}

const fib = memoizedFibonacci();

console.log(fib(10)); // Output: 55
console.log(fib(5)); // Output: 5
console.log(fib(10)); // Output: 55 (This time it uses the cached result)
```

### **Explanation**:

1. **Cache Object**: We use a `cache` object to store the results of the Fibonacci calculations. The key is the input `n`, and the value is the result of `Fibonacci(n)`.

2. **Recursive Function**: The function `fibonacci(n)` is the one that calculates the Fibonacci number. It first checks if the result is already cached (i.e., `n in cache`). If it is, it returns the cached value.

3. **Base Case**: For `n <= 1`, the Fibonacci sequence is straightforward: `Fibonacci(0) = 0` and `Fibonacci(1) = 1`.

4. **Recursive Calculation**: If the result is not cached, it calculates the Fibonacci number recursively, stores it in the cache, and returns it.

5. **Efficiency**: When you call `fib(10)`, the result is calculated and stored in the cache. When you call `fib(10)` again, it retrieves the cached value without recalculating, making the process much faster.

---

### **Benefits of Memoization**:

- **Time Complexity**: The naive recursive Fibonacci function has an exponential time complexity `O(2^n)`. With memoization, it reduces to linear time complexity `O(n)` because each Fibonacci value is computed only once and then reused.
- **Space Complexity**: The space complexity is `O(n)` due to the storage of the computed values in the cache.

- **Advanced Question:**

### How can **memoization** optimize performance in functions that involve repeated calculations? Write an example where memoization is used to improve the performance of a recursive function.

### **Memoization for Optimizing Recursive Functions**

**Memoization** is particularly useful for recursive functions that perform the same calculations multiple times with the same inputs. By caching the results of expensive computations, memoization avoids redundant calculations, thus improving performance significantly.

When a function performs repeated calculations, particularly in recursive calls, memoization stores the results of previous calls, and if the same inputs are encountered again, it simply returns the cached value instead of recalculating.

### **Example: Optimizing the Recursive Factorial Function**

The **factorial** function is a common example of a recursive function. Without optimization, it works fine but can be inefficient when repeated calculations happen.

#### **Naive Recursive Factorial (Without Memoization)**

Here's a simple recursive implementation of the factorial function:

```javascript
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Output: 120
```

While this works fine, it recalculates the factorial of the same numbers multiple times when called recursively, which is inefficient for larger values of `n`.

### **Memoized Factorial Function**

Using **memoization**, we can cache the results of previously computed factorials, thus avoiding redundant calculations and improving performance.

#### **Memoization Implementation for Factorial**

```javascript
function memoizedFactorial() {
  const cache = {}; // Cache object to store computed factorial values

  // Return the memoized factorial function
  return function factorial(n) {
    if (n in cache) {
      return cache[n]; // If result is cached, return it
    }

    if (n <= 1) {
      return 1; // Base case
    }

    // Otherwise, calculate the factorial, cache it, and return it
    cache[n] = n * factorial(n - 1);
    return cache[n];
  };
}

const factorial = memoizedFactorial();

console.log(factorial(5)); // Output: 120
console.log(factorial(6)); // Output: 720 (Calculated, then cached)
console.log(factorial(5)); // Output: 120 (Retrieved from cache)
console.log(factorial(7)); // Output: 5040 (Calculated, then cached)
```

### **How Memoization Works in the Example**:

1. **Cache**: The `cache` object stores the results of previously computed factorials. The key is the argument `n`, and the value is the corresponding factorial value.
2. **Check Cache**: Before calculating the factorial of `n`, the function checks whether `n` is already in the cache. If it is, the function simply returns the cached value.

3. **Calculate and Cache**: If `n` is not in the cache, the factorial is calculated recursively, and the result is stored in the cache before returning it.

4. **Improved Performance**: After the first computation of `factorial(5)`, the value is stored in the cache. When `factorial(5)` is called again, the function retrieves it from the cache, avoiding redundant calculations.

### **Performance Comparison**:

- **Without Memoization**: The naive recursive factorial function recalculates the same values multiple times. For example, when calculating `factorial(5)`, it calculates `factorial(4)`, which in turn calculates `factorial(3)`, and so on. This can lead to significant performance issues, especially for larger values of `n`.
- **With Memoization**: Memoization eliminates the redundant recalculations. After the first calculation of `factorial(5)`, all subsequent calls to `factorial(5)` simply return the cached result, which is much faster.

### **Why Memoization Helps**:

- **Time Complexity**: Without memoization, the time complexity of the recursive factorial function is exponential (`O(2^n)`). With memoization, it becomes linear (`O(n)`), as each factorial value is calculated only once.
- **Space Complexity**: The space complexity is also `O(n)` because the cache object stores the factorials for each integer from `1` to `n`.

Memoization is particularly powerful when solving problems with overlapping subproblems, such as in **dynamic programming**. It drastically reduces computation time by reusing previously computed results.

---

## **6. Arrow Function Limitations**

- **Basic Question:**

### What are the limitations of **arrow functions** in JavaScript? For example, what happens to the `this` keyword in an arrow function?

### **Limitations of Arrow Functions in JavaScript**

Arrow functions in JavaScript have several key differences from regular functions. While they provide cleaner syntax and some useful features, there are limitations and behaviors that you should be aware of.

Here are the main limitations of arrow functions:

### 1. **No `this` Binding**

Arrow functions **do not have their own `this`**. Instead, they **inherit the `this` value** from the surrounding (lexical) context where they are defined. This can cause some issues, especially when you need to explicitly bind `this` to a function (e.g., in object methods or event handlers).

#### **Example: `this` in Arrow Functions**

```javascript
const obj = {
  name: "Arrow Function Example",
  show: function () {
    setTimeout(() => {
      console.log(this.name); // "this" refers to the object obj
    }, 1000);
  },
};

obj.show(); // Output: "Arrow Function Example"
```

In this example, even though `setTimeout` is called in a different execution context, the arrow function inside `setTimeout` inherits `this` from its outer scope (the `show` method), where `this` points to the `obj` object.

#### **Why This Happens:**

- Regular functions (such as those defined using function declarations or expressions) have their own `this`, which is determined by how the function is called.
- Arrow functions **do not** have their own `this`; instead, they capture `this` from the surrounding scope when they are created. This is useful in cases where you want to avoid explicit `.bind()` or function calls altering the context of `this`.

#### **Limitations Example:**

```javascript
const obj = {
  name: "Test Object",
  regularFunction: function () {
    setTimeout(function () {
      console.log(this.name); // `this` refers to global object or undefined in strict mode
    }, 1000);
  },
  arrowFunction: function () {
    setTimeout(() => {
      console.log(this.name); // `this` refers to `obj` because arrow functions inherit `this`
    }, 1000);
  },
};

obj.regularFunction(); // Output: undefined (in strict mode) or global object property
obj.arrowFunction(); // Output: "Test Object"
```

In this example:

- `regularFunction` uses a traditional function for `setTimeout`, and as a result, `this` refers to the global object (or `undefined` in strict mode), not `obj`.
- `arrowFunction` uses an arrow function, so it correctly captures the `this` value from its lexical context (the `obj` object).

### 2. **No `arguments` Object**

Arrow functions do not have their own `arguments` object. Instead, they inherit the `arguments` object from their enclosing scope, which can be a limitation when you need to access all arguments passed to a function inside the arrow function.

#### **Example: No `arguments` in Arrow Functions**

```javascript
function regularFunction() {
  const arrowFunction = () => {
    console.log(arguments); // Inherited from the enclosing scope (regularFunction)
  };
  arrowFunction(1, 2, 3);
}

regularFunction(4, 5, 6); // Output: { '0': 4, '1': 5, '2': 6 }
```

In this example, the `arguments` object is inherited from `regularFunction` inside the `arrowFunction`. If you tried to access `arguments` in an arrow function without an enclosing function, it would result in an error since arrow functions do not have their own `arguments`.

#### **Limitations Example:**

```javascript
const arrowFunction = () => {
  console.log(arguments); // Error: arguments is not defined
};

arrowFunction(1, 2, 3); // This will throw a ReferenceError
```

### 3. **No `new` Keyword (Cannot Be Used as Constructors)**

Arrow functions cannot be used as constructor functions. They do not have the internal properties needed to create instances when invoked with the `new` keyword. This means you cannot create objects using `new` with arrow functions.

#### **Example: Using Arrow Functions as Constructors**

```javascript
const Person = (name) => {
  this.name = name; // 'this' won't work as expected inside an arrow function
};

const person1 = new Person("Alice"); // TypeError: Person is not a constructor
```

In the above example, trying to use `new` with an arrow function results in a `TypeError`, because arrow functions do not have the `[[Construct]]` method that regular functions do. As a result, arrow functions cannot be used to create new instances with `new`.

### 4. **No `super` Keyword**

Arrow functions do not have their own `super` keyword. This means they cannot be used to call a parent class's method or access the prototype chain through `super`.

#### **Example: Arrow Function and `super`**

```javascript
class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  greet() {
    const arrowGreet = () => {
      console.log(super.greet()); // Error: 'super' is not allowed in an arrow function
    };
    arrowGreet();
  }
}

const child = new Child();
child.greet(); // TypeError: 'super' is not allowed in this context
```

Here, attempting to call `super.greet()` within an arrow function results in an error because arrow functions do not have their own `super` keyword.

### 5. **No `this` in Object Methods (If Used as Object Method)**

When used as object methods, arrow functions may not behave as expected since they do not have their own `this`. They inherit `this` from the outer scope, which can cause unexpected results.

#### **Example: Arrow Functions in Object Methods**

```javascript
const obj = {
  name: "Arrow Function",
  greet: () => {
    console.log(this.name); // `this` refers to the global object, not `obj`
  },
};

obj.greet(); // Output: undefined (or global object)
```

In this example, `this` in the arrow function refers to the global object or `undefined` in strict mode, not the `obj` object. Regular methods would have `this` pointing to the object they belong to.

### **Summary of Arrow Function Limitations**

1. **`this` is lexically bound**: It does not create its own `this` but inherits it from the surrounding context.
2. **No `arguments` object**: Arrow functions do not have their own `arguments` object, which can be problematic for some use cases.
3. **Cannot be used as constructors**: Arrow functions cannot be invoked with `new` to create instances.
4. **No `super` keyword**: Arrow functions do not have their own `super` keyword, which is necessary for calling parent class methods in class inheritance.
5. **Not ideal for object methods**: Arrow functions should not be used as methods in objects where you need access to the object's `this`.

Arrow functions are powerful for short, concise functions where the behavior of `this` is desired to be lexically bound, but they are not suitable in cases where you need the full functionality of regular functions, such as method binding, constructors, and the `arguments` object.

- **Intermediate Question:**

### Write an example where an arrow function’s `this` behavior creates an issue in object methods, and explain why it happens.

Here's an example where the behavior of `this` in an arrow function creates an issue in object methods:

### Example: Arrow Function in Object Method

```javascript
const obj = {
  name: "Arrow Function Object",
  greet: () => {
    console.log(this.name);
  },
};

obj.greet(); // Output: undefined
```

### **Explanation:**

In the example above, we have an object `obj` with a `name` property and a method `greet` that is defined as an arrow function. When the `greet` method is called, the expected output is the value of `this.name`, which should be `"Arrow Function Object"`. However, the output is `undefined`.

### **Why it Happens:**

- **Arrow functions do not have their own `this` context**. Instead, they **lexically inherit `this` from their surrounding context** at the time the function is defined. In this case, the `greet` method is defined as an arrow function inside the `obj` object.
- The `this` inside the arrow function refers to the **lexical context** where the function was created, not the object that calls it. In this case, the arrow function is defined in the global scope, so `this` refers to the global object (or `undefined` in strict mode), not the `obj` object.

- When `obj.greet()` is called, JavaScript doesn't set `this` to `obj` as it normally would for a regular method function. Instead, it uses the inherited `this` from the global context, which doesn't have a `name` property, so it logs `undefined`.

### **How to Fix This:**

To fix this issue, you should use a **regular function** instead of an arrow function in the object method. Regular functions have their own `this` that is correctly set when the method is called as part of an object.

### Corrected Version:

```javascript
const obj = {
  name: "Arrow Function Object",
  greet: function () {
    console.log(this.name);
  },
};

obj.greet(); // Output: "Arrow Function Object"
```

In this corrected version, `greet` is defined as a regular function, and when `obj.greet()` is called, `this` correctly refers to the `obj` object, so it logs `"Arrow Function Object"`.

### Conclusion:

The issue with using an arrow function in object methods is that it doesn't bind its own `this`, and instead, it inherits `this` from the surrounding scope. In the case of an object method, this results in unexpected behavior because the `this` inside the arrow function does not refer to the object itself.

- **Advanced Question:**

### Can arrow functions be used as constructors? Why or why not? Write an example that demonstrates this.

Arrow functions **cannot be used as constructors** in JavaScript. This is because arrow functions do not have their own `this` context. The `this` in an arrow function is lexically inherited from its surrounding context, not dynamically bound at the time of invocation, which is essential for constructor functions to work properly.

In JavaScript, constructor functions typically use the `new` keyword to create instances of an object. When `new` is used with a constructor, `this` inside the function refers to the newly created object. However, since arrow functions do not have their own `this`, they cannot act as constructors.

### Example: Attempting to Use an Arrow Function as a Constructor

```javascript
const Person = (name, age) => {
  this.name = name;
  this.age = age;
};

const person1 = new Person("Alice", 30); // TypeError: Person is not a constructor
```

### **Explanation:**

In this example, we attempt to create a constructor-like function using an arrow function. When we try to call `new Person('Alice', 30)`, we get a `TypeError: Person is not a constructor`.

- The `this` inside the arrow function refers to the surrounding lexical context (likely the global scope or `undefined` in strict mode), not the newly created object, so the `new` keyword cannot create an instance of `Person`.

### Why Arrow Functions Can't Be Used as Constructors:

- Arrow functions do not have their own `this` binding. They inherit `this` from the outer scope, which is not useful in the context of object construction.
- A constructor function must have its own `this` binding to properly initialize a new object. Since arrow functions don't have a `this` context of their own, they cannot be used for this purpose.

### Correct Way: Using a Regular Function as a Constructor

To use a function as a constructor, you should use a **regular function** instead of an arrow function:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 30);
console.log(person1.name); // Output: Alice
console.log(person1.age); // Output: 30
```

### **Conclusion:**

Arrow functions cannot be used as constructors because they don't have their own `this` binding, which is required for the creation of new instances. Regular functions, on the other hand, can be used as constructors because they dynamically bind `this` to the newly created object when used with the `new` keyword.

---

## **7. Function Execution Context**

- **Basic Question:**

### What is an **execution context** in JavaScript, and how does it relate to function calls?

An **execution context** in JavaScript refers to the environment in which a piece of code is evaluated and executed. It contains all the necessary information about the code that is running, such as variable bindings, the value of `this`, and the scope in which the code is being executed.

When a function is called, a new execution context is created. This context determines how the function will be executed and how it interacts with other parts of the code. Every time a function is invoked, it creates a new execution context, which is pushed onto the **call stack**.

### Key Components of an Execution Context:

1. **Variable Environment**: This is where all the variables, functions, and parameters for the execution are stored. It includes:

   - **Function arguments**
   - **Local variables**
   - **The value of `this`** (depending on the context of the function)

2. **Scope Chain**: The scope chain ensures that when a function tries to access a variable, it will search through the current scope and then through the outer scopes, up to the global scope, if necessary.

3. **The `this` Keyword**: This refers to the object that is calling the current function, and it is determined by how the function is invoked (e.g., method call, constructor call, or regular function call).

4. **Code Execution**: This refers to the actual code that is executed in the execution context, such as evaluating expressions, performing operations, and returning values.

### Types of Execution Contexts:

1. **Global Execution Context**:

   - The first execution context that is created when JavaScript code starts executing.
   - This context exists only once in any program, and it represents the global scope.
   - Variables declared in the global scope are part of the global execution context.

2. **Function Execution Context**:

   - Whenever a function is called, a new execution context is created.
   - Each function call creates its own execution context, which is added to the call stack.
   - This context has its own local variables, parameters, and `this` binding.

3. **Eval Execution Context** (rarely used):
   - Created when the `eval()` function is invoked. However, its usage is generally discouraged because it can lead to security issues and unpredictable behavior.

### How Execution Context Relates to Function Calls:

When a function is called, JavaScript follows a process involving the **creation phase** and the **execution phase** of the execution context:

1. **Creation Phase**:
   - The function's **arguments** are assigned.
   - The function's **local variables** are initialized (but not yet assigned).
   - The function's **`this` value** is determined based on how the function is invoked.
2. **Execution Phase**:
   - The function’s code is executed line by line.
   - Variables are assigned values and functions are invoked as per the logic of the function.

### Example:

```javascript
function greet(name) {
  console.log("Hello, " + name);
}

greet("Alice");
```

In the example above, the following happens:

1. **Global Execution Context**:

   - The script starts executing and creates the global execution context.
   - A global variable is available in the global scope.

2. **Function Execution Context** (when `greet("Alice")` is called):

   - A new execution context is created for the `greet` function.
   - The argument `name` is assigned the value `"Alice"`.
   - The `this` keyword is set based on how `greet` is invoked (in this case, it is the global object in non-strict mode).

3. **Execution Phase**:

   - The code inside the function is executed (`console.log("Hello, " + name)`), and it prints `"Hello, Alice"` to the console.

4. Once the function execution is complete, the function's execution context is popped off the call stack.

### Execution Context and the Call Stack:

- JavaScript uses a **call stack** to manage the execution contexts. The call stack is a LIFO (Last In, First Out) data structure that keeps track of the order of function calls.
- The first execution context pushed onto the stack is the **global execution context**.
- Whenever a function is called, its execution context is pushed onto the stack. When the function finishes execution, its context is popped off the stack, and the control returns to the previous context.

### Summary:

An **execution context** in JavaScript is the environment where code is executed. It contains information about variables, functions, the value of `this`, and the scope chain. Each time a function is called, a new execution context is created, which allows JavaScript to manage the execution flow, variable scope, and function calls properly. This is fundamental for understanding how JavaScript handles function calls, scope, and the `this` keyword.

- **Intermediate Question:**

### Explain the **creation** and **execution phases** of an execution context with respect to function invocation.

When a function is invoked in JavaScript, a new **execution context** is created to handle its execution. The execution context goes through two main phases: the **creation phase** and the **execution phase**. Here's how each phase works:

### 1. Creation Phase:

The creation phase is the first phase when the JavaScript engine prepares to execute a function. In this phase, the execution context is set up, but the function's code hasn't been executed yet.

#### Steps in the Creation Phase:

- **Creation of the Variable Environment**:

  - **Function arguments**: The function parameters are assigned the passed argument values.
  - **Local variables**: Variables defined inside the function (including those declared with `let`, `const`, and `var`) are set up but not yet assigned values. The variables are stored in the **Variable Environment**.
  - **`this` value**: The value of `this` is determined based on how the function is invoked (e.g., globally, as a method, using `call`, `apply`, or in a constructor).

- **Scope Chain Creation**:

  - The scope chain is established based on the current function’s scope and the outer scopes (from the global scope and parent function scopes, if applicable). The scope chain is what allows access to variables in the current function and outer scopes.

- **Function Declarations**:
  - If the function contains any function declarations, these are hoisted to the top of the function scope (and can be invoked from anywhere within the function).

### Example (Creation Phase):

```javascript
function example(x, y) {
  let a = 10;
  const b = 20;

  console.log(x + y); // Logs the sum of x and y
}
```

In the creation phase, the following happens:

- The arguments `x` and `y` are set up as properties of the `example` function's execution context.
- The local variables `a` and `b` are initialized, but they have no assigned values yet (this happens later during the execution phase).
- The scope chain for this function includes the function's local scope and the outer global scope.

### 2. Execution Phase:

Once the creation phase is complete, the JavaScript engine moves on to the execution phase, where the actual code inside the function is run.

#### Steps in the Execution Phase:

- **Assignment of values to variables**:
  - During this phase, the variables (like `a`, `b`, etc.) are assigned their values (e.g., `a = 10` and `b = 20`).
  - If a variable is referenced, it will be fetched from the current execution context, which may involve the scope chain.
- **Execution of statements**:

  - The function’s body is executed line by line, starting with the first statement inside the function. Expressions, operations, and statements like `console.log` are executed in this phase.

- **Returning values**:
  - If the function has a `return` statement, the value is returned to the caller. This marks the end of the function execution, and the function’s execution context is popped off the call stack.

### Example (Execution Phase):

Continuing with the previous `example` function:

```javascript
function example(x, y) {
  let a = 10;
  const b = 20;

  console.log(x + y); // In the execution phase, x + y is logged.
}

example(5, 7); // Calling the function with arguments 5 and 7.
```

Here’s what happens during the **execution phase**:

1. The values of `x` and `y` are assigned based on the arguments passed (`x = 5`, `y = 7`).
2. The `a` and `b` variables are assigned values (`a = 10`, `b = 20`).
3. The code `console.log(x + y)` is executed, printing `12` (5 + 7) to the console.
4. Once the function completes, the execution context is removed from the call stack.

### Summary of the Phases:

- **Creation Phase**:

  - Function parameters and local variables are initialized.
  - The `this` context is determined.
  - The scope chain is created.
  - Function declarations are hoisted.

- **Execution Phase**:
  - Variables are assigned values.
  - Statements are executed.
  - The function returns a value (if applicable).
  - The execution context is removed from the call stack.

### Example with Both Phases:

```javascript
function foo(a, b) {
  console.log(a + b); // Execution phase: Logs the sum
}

foo(2, 3); // Calling the function
```

1. **Creation Phase**:

   - `a` and `b` are assigned `2` and `3` respectively.
   - The `this` context is determined (global `this` in this case).
   - The scope chain is set up, which includes the global scope and the function's local scope.

2. **Execution Phase**:
   - The expression `a + b` is evaluated, resulting in `5`, which is logged to the console.
   - The function finishes, and its execution context is popped off the stack.

In conclusion, the **creation phase** sets up all the variables, parameters, and context needed for the function to execute, while the **execution phase** runs the code inside the function, performs operations, and eventually cleans up after itself by removing its execution context.

- **Advanced Question:**

### How does the **scope chain** work in function execution contexts, and how does the **lexical environment** impact it? Write a function with nested scopes and explain the execution context at each level.

### Scope Chain and Lexical Environment in JavaScript

In JavaScript, the **scope chain** is a mechanism that ensures variable resolution (i.e., looking up variables) follows a specific order when code is executed. The **lexical environment** plays a crucial role in how the scope chain is formed.

- **Scope Chain**: When a function is executed, JavaScript creates an execution context that contains a **scope chain**. This chain determines the order in which variables and functions are accessed. The scope chain is created based on the nesting of functions in the code and is constructed at the time of function definition (lexically), not at runtime.

- **Lexical Environment**: A **lexical environment** is an object that holds variable bindings and functions within a scope. Each function has its own lexical environment, and nested functions have access to the environment of their parent functions. This is how closures in JavaScript work.

### Key Concepts

1. **Local Scope**: Variables and functions declared inside a function are part of its local scope.
2. **Outer Scope**: Any surrounding function or global scope that is accessible from within the current function.
3. **Global Scope**: The outermost scope, which contains global variables and functions accessible throughout the program.

### How Scope Chain Works

- When JavaScript looks for a variable, it starts at the innermost scope (local scope). If the variable is not found, it looks in the outer scope, then the next outer scope, and so on, until it reaches the global scope.
- If a variable is not found in the global scope, a **ReferenceError** is thrown.

### Example with Nested Scopes

```javascript
let globalVar = "I'm in the global scope";

function outerFunction(outerParam) {
  let outerVar = "I'm in the outer function scope";

  function innerFunction(innerParam) {
    let innerVar = "I'm in the inner function scope";

    console.log(innerVar); // Logs: I'm in the inner function scope
    console.log(outerVar); // Logs: I'm in the outer function scope
    console.log(globalVar); // Logs: I'm in the global scope
  }

  innerFunction("I'm an argument"); // Call the inner function
}

outerFunction("I'm an argument"); // Call the outer function
```

### Explanation:

1. **Global Scope**:

   - The variable `globalVar` is declared in the global scope.
   - `outerFunction` and `innerFunction` are available in the global scope as they are function declarations.

2. **Execution of `outerFunction`**:
   - When `outerFunction` is invoked, it creates a **new execution context**. This context includes:
     - A reference to the **lexical environment** of `outerFunction`, which includes the `outerParam` parameter and `outerVar` variable.
     - The **scope chain** in this context will include:
       - `outerFunction`'s lexical environment (local variables and parameters).
       - The global environment (variables/functions accessible globally).
3. **Execution of `innerFunction`**:
   - When `innerFunction` is invoked inside `outerFunction`, another **execution context** is created for `innerFunction`:
     - A reference to the **lexical environment** of `innerFunction`, which includes the `innerParam` parameter and `innerVar` variable.
     - The **scope chain** in this context will include:
       - `innerFunction`'s lexical environment.
       - The **scope chain** of `outerFunction` (because `innerFunction` is defined inside `outerFunction`).
       - The global environment.
4. **Scope Chain Access**:
   - Inside `innerFunction`, we can access `innerVar` because it is defined in the same scope.
   - `outerVar` is accessible in `innerFunction` because `outerFunction` is in the scope chain of `innerFunction` (it’s the parent scope).
   - `globalVar` is accessible because it’s part of the global scope and included in the global environment, which is the last part of the scope chain.

### Summary of Execution Context and Scope Chain:

1. **Creation of the Execution Context**:

   - When a function is called, an execution context is created, which contains the function’s scope chain, the value of `this`, and local variables.

2. **Scope Chain Formation**:

   - The scope chain is formed during function creation (lexically) and determines the order in which variables are searched when they are referenced inside a function.
   - The **lexical environment** of each function is added to the scope chain, starting with the innermost scope and working outward.

3. **Nested Function Access**:
   - Inner functions have access to variables in their own scope as well as variables in any outer functions (parent scopes).
   - The global environment is always accessible, but local variables in the global scope are only accessible within nested functions via the scope chain.

### Visualizing the Scope Chain:

When `innerFunction` is called:

```
Scope chain (innerFunction):
1. innerFunction's lexical environment (variables: innerVar, innerParam)
2. outerFunction's lexical environment (variables: outerVar, outerParam)
3. Global environment (variables: globalVar)
```

### Lexical Environment Example:

```javascript
function outer() {
  let outerVar = "outer";
  function inner() {
    console.log(outerVar); // Accessing outerVar from outer's lexical environment
  }
  inner();
}

outer(); // Outputs: outer
```

In the above example:

- The `inner` function has access to `outerVar` because `outer` is its lexical parent. The scope chain allows access to variables declared in outer functions.

---

## **8. Function Overloading**

- **Basic Question:**

### Does JavaScript support **function overloading** like other languages (e.g., Java)? Demonstrate with a function that behaves differently based on the number of arguments.

JavaScript does not natively support function overloading in the same way that languages like Java or C# do. In those languages, you can define multiple functions with the same name but different parameters (either in number or type). JavaScript, however, does not allow you to define multiple functions with the same name. Instead, JavaScript functions can accept any number of arguments, and you can handle different cases using conditional logic inside the function to simulate overloading.

You can achieve function overloading behavior by checking the number or types of the arguments passed to the function.

### Example: Function Overloading in JavaScript

```javascript
function greet(name, age) {
  // If only one argument is passed, treat it as a name
  if (arguments.length === 1) {
    console.log(`Hello, ${name}!`);
  }
  // If both arguments are passed, use them
  else if (arguments.length === 2) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }
  // If no arguments are passed
  else {
    console.log("Hello, guest!");
  }
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob", 30); // Output: Hello, Bob! You are 30 years old.
greet(); // Output: Hello, guest!
```

### Explanation:

- In this example, the `greet` function checks how many arguments are passed using `arguments.length` and behaves accordingly.
- If only one argument is passed, it assumes the argument is the name and prints a simple greeting.
- If two arguments are passed, it assumes the first is the name and the second is the age, and prints a greeting with both pieces of information.
- If no arguments are passed, it defaults to a general greeting.

### Why JavaScript Doesn't Support Traditional Function Overloading:

In languages like Java or C++, function overloading works by differentiating methods by the number or type of parameters. JavaScript functions do not have the same type-checking and overloading mechanism because JavaScript is dynamically typed and flexible in the number of arguments a function can take. Therefore, JavaScript relies on checking `arguments.length` or using the `...rest` parameters to simulate the effect of overloading.

- **Intermediate Question:**

### How can you implement custom function overloading in JavaScript? Write a function `add` that behaves differently based on the number of arguments passed to it.

In JavaScript, function overloading can be simulated by checking the number and type of arguments passed to a function and implementing different logic based on these conditions. JavaScript does not natively support function overloading as it does in other languages like Java or C#, but you can handle multiple argument cases with custom logic.

### Example: Custom Function Overloading for `add` function

The `add` function will behave differently based on the number of arguments passed to it. For example:

- If one argument is passed, it will return the argument itself (simulating unary behavior).
- If two arguments are passed, it will add them together (simulating binary behavior).
- If more than two arguments are passed, it will add all of them together.

### Code Implementation:

```javascript
function add() {
  // If one argument is passed, return it
  if (arguments.length === 1) {
    return arguments[0];
  }

  // If two arguments are passed, add them
  else if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  }

  // If more than two arguments are passed, sum them all
  else if (arguments.length > 2) {
    return Array.from(arguments).reduce((sum, num) => sum + num, 0);
  }

  // If no arguments are passed, return 0
  else {
    return 0;
  }
}

console.log(add(5)); // Output: 5 (Unary behavior)
console.log(add(5, 10)); // Output: 15 (Binary behavior)
console.log(add(1, 2, 3, 4)); // Output: 10 (Sum of multiple arguments)
console.log(add()); // Output: 0 (No arguments)
```

### Explanation:

1. **One argument**: If only one argument is passed, the function returns that value as is (e.g., `add(5)` returns `5`).
2. **Two arguments**: If exactly two arguments are passed, the function adds them together (e.g., `add(5, 10)` returns `15`).
3. **More than two arguments**: If more than two arguments are passed, the function uses the `reduce` method to sum all the arguments together (e.g., `add(1, 2, 3, 4)` returns `10`).
4. **No arguments**: If no arguments are passed, it returns `0`.

### Why This Works:

- **arguments object**: The `arguments` object is an array-like object that holds all the arguments passed to the function. By checking its `length`, we can simulate the behavior of function overloading.
- **Dynamic behavior**: The function adjusts its behavior based on how many arguments are provided, allowing it to perform different tasks in a single function definition.

- **Advanced Question:**

### Write a function `multiply` that can handle different types of arguments (e.g., numbers, arrays) using **rest parameters** and demonstrate custom function overloading.

To implement a custom `multiply` function in JavaScript that handles different types of arguments (such as numbers and arrays), we can use **rest parameters**. The function will:

- Multiply all the numbers provided as arguments.
- If an array is passed, it will multiply all the numbers within that array.
- Handle a combination of both numbers and arrays.

### Code Implementation:

```javascript
function multiply(...args) {
  // Initialize the result as 1 (neutral element for multiplication)
  let result = 1;

  // Iterate over each argument
  args.forEach((arg) => {
    // If the argument is an array, multiply all its elements
    if (Array.isArray(arg)) {
      result *= arg.reduce((acc, num) => acc * num, 1);
    }
    // If the argument is a number, directly multiply it
    else if (typeof arg === "number") {
      result *= arg;
    }
    // Handle invalid types if needed (e.g., non-numbers and non-arrays)
    else {
      console.log(`Invalid argument: ${arg}`);
    }
  });

  return result;
}

console.log(multiply(2, 3)); // Output: 6 (2 * 3)
console.log(multiply([2, 3], 4)); // Output: 24 (2 * 3 * 4)
console.log(multiply(2, [3, 4])); // Output: 24 (2 * 3 * 4)
console.log(multiply([2, 3], [4, 5])); // Output: 120 (2 * 3 * 4 * 5)
console.log(multiply(2, 3, [4, 5])); // Output: 120 (2 * 3 * 4 * 5)
console.log(multiply()); // Output: 1 (no arguments, neutral multiplication result)
```

### Explanation:

1. **Rest parameters**: The function uses `...args` to accept any number of arguments, which can include both individual numbers and arrays.
2. **Array handling**: If an argument is an array (checked using `Array.isArray()`), we use `reduce()` to multiply all its elements together before multiplying with the result.
3. **Number handling**: If an argument is a number (checked using `typeof`), we simply multiply it with the `result`.
4. **Error handling**: If an argument is neither a number nor an array, an error message is logged.
5. **Default return value**: If no arguments are passed, `multiply()` returns `1` because the neutral element for multiplication is `1`.

### Example Demonstration:

- `multiply(2, 3)` returns `6`, as it multiplies the two numbers.
- `multiply([2, 3], 4)` returns `24`, as it first multiplies the array `[2, 3]` to get `6` and then multiplies that with `4`.
- `multiply(2, [3, 4])` returns `24` for the same reason.
- `multiply([2, 3], [4, 5])` returns `120`, as it multiplies all elements together.
- `multiply()` returns `1`, as no arguments were provided.

### Custom Function Overloading:

By using **rest parameters** and checking the types of each argument, we can implement custom function overloading in JavaScript. The `multiply` function adapts its behavior based on whether it receives numbers, arrays, or a combination of both.

---

## **9. Function Composition**

- **Basic Question:**

### What is **function composition** in JavaScript? Write two simple functions and compose them to create a new function.

**Function composition** in JavaScript refers to the process of combining two or more functions to create a new function. The new function applies the output of one function as the input to the next function. The general pattern for function composition is:

```javascript
const compose = (f, g) => (x) => f(g(x));
```

Here, `g` is applied first to the input `x`, and then the result is passed to `f`.

### Example:

Let’s define two simple functions: one that doubles a number and another that adds 5 to it. We will then compose them into a new function.

```javascript
// First function: Doubles the number
const double = (x) => x * 2;

// Second function: Adds 5 to the number
const addFive = (x) => x + 5;

// Function composition
const compose = (f, g) => (x) => f(g(x));

// Composing the functions (double after adding 5)
const doubleAfterAddFive = compose(double, addFive);

// Test the composed function
console.log(doubleAfterAddFive(3)); // Output: 16 (3 + 5 = 8, then 8 * 2 = 16)
```

### Explanation:

1. **`double` function**: This takes a number and doubles it.
2. **`addFive` function**: This takes a number and adds 5 to it.
3. **`compose` function**: This takes two functions `f` and `g`, and returns a new function that first applies `g` (in this case, `addFive`) to the input, and then applies `f` (in this case, `double`) to the result of `g`.
4. **`doubleAfterAddFive`**: This composed function first adds 5 to the number and then doubles the result.

### Result:

- Calling `doubleAfterAddFive(3)` first adds 5 to `3` (resulting in `8`), then doubles `8` (resulting in `16`).

### Composing Multiple Functions:

You can extend the composition to multiple functions. Here’s an example of composing three functions:

```javascript
const subtractThree = (x) => x - 3;

// Compose all three functions
const tripleComposition = compose(compose(double, addFive), subtractThree);

console.log(tripleComposition(3)); // Output: 13 ((3 - 3 = 0), then (0 + 5 = 5), then (5 * 2 = 10))
```

- **Intermediate Question:**

### Write a function `compose` that accepts two functions and returns a new function that applies both functions in sequence.

Here is a simple implementation of the `compose` function that takes two functions and returns a new function that applies both functions in sequence. The first function will be applied to the input, and then the second function will be applied to the result of the first function.

```javascript
const compose = (f, g) => (x) => f(g(x));

// Example functions
const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;

// Composing the functions
const addThenMultiply = compose(multiplyByThree, addTwo);

// Test the composed function
console.log(addThenMultiply(5)); // Output: 21 (5 + 2 = 7, then 7 * 3 = 21)
```

### Explanation:

1. **`compose`**: This function accepts two functions `f` and `g`, and returns a new function. This new function, when called with an argument `x`, first applies `g` to `x` and then applies `f` to the result of `g(x)`.
2. **`addTwo`**: Adds 2 to a number.
3. **`multiplyByThree`**: Multiplies a number by 3.
4. **`addThenMultiply`**: This composed function first adds 2 to the input and then multiplies the result by 3.

### Result:

- Calling `addThenMultiply(5)`:

  - First, `addTwo(5)` results in `7`.
  - Then, `multiplyByThree(7)` results in `21`.

- **Advanced Question:**

### Implement a **pipe function** that takes multiple functions and returns a new function that applies the functions in left-to-right order.

A **pipe function** applies a series of functions in a left-to-right order, where each function takes the result of the previous function as its argument. Here's an implementation of the `pipe` function:

```javascript
const pipe =
  (...functions) =>
  (x) =>
    functions.reduce((acc, fn) => fn(acc), x);

// Example functions
const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;
const subtractFive = (x) => x - 5;

// Using the pipe function to compose multiple functions
const result = pipe(addTwo, multiplyByThree, subtractFive);

// Test the piped function
console.log(result(5)); // Output: 16 (5 + 2 = 7, 7 * 3 = 21, 21 - 5 = 16)
```

### Explanation:

1. **`pipe`**:
   - The `pipe` function takes multiple functions as arguments using the **rest parameter** (`...functions`).
   - It returns a new function that accepts an argument `x`.
   - The `reduce` method iterates over the `functions` array, applying each function to the accumulator (`acc`), which starts as `x`.
2. **`addTwo`**: Adds 2 to a number.
3. **`multiplyByThree`**: Multiplies a number by 3.
4. **`subtractFive`**: Subtracts 5 from a number.

### Result:

- Calling `pipe(addTwo, multiplyByThree, subtractFive)(5)`:
  - First, `addTwo(5)` results in `7`.
  - Then, `multiplyByThree(7)` results in `21`.
  - Finally, `subtractFive(21)` results in `16`.

---

## **10. Function Defaults with Destructuring**

- **Intermediate Question:**

### How can you use **destructuring** with default values in function parameters? Write an example where you destructure an object with default values inside a function.

You can use **destructuring** with **default values** in function parameters to assign default values to properties that may not be present in the object passed to the function. If a property is missing, the default value is used.

Here's an example demonstrating how to destructure an object and provide default values:

```javascript
function greet({ name = "Guest", age = 30 } = {}) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

// Example with all properties
greet({ name: "John", age: 25 });
// Output: Hello, John! You are 25 years old.

// Example with missing properties
greet({ name: "Alice" });
// Output: Hello, Alice! You are 30 years old.

// Example with default values for both properties
greet();
// Output: Hello, Guest! You are 30 years old.
```

### Explanation:

- **Destructuring**: Inside the function parameter, `{ name = 'Guest', age = 30 }` is used to destructure the object and assign default values.
  - `name` is defaulted to `'Guest'` if not provided.
  - `age` is defaulted to `30` if not provided.
- **`= {}`**: This part ensures that even if no argument is passed to the function, it doesn't throw an error. The function defaults to an empty object (`{}`) to destructure.

### How it works:

- If an object is provided, the properties `name` and `age` are extracted. If any property is missing, the default value is used.
- If no object is provided at all, the default object (`{}`) is used, and both properties get their default values.

- **Advanced Question:**

### How can you combine **destructuring**, **default values**, and **rest parameters** to create flexible function parameters? Write an example that accepts an object and additional parameters.

You can combine **destructuring**, **default values**, and **rest parameters** in a function to create a flexible parameter setup that allows for optional object properties and captures additional arguments passed to the function.

Here’s an example where we accept an object with default values and additional parameters using rest parameters:

```javascript
function processOrder(
  { product = "Unknown Product", quantity = 1 } = {},
  ...extraDetails
) {
  console.log(`Product: ${product}`);
  console.log(`Quantity: ${quantity}`);

  if (extraDetails.length > 0) {
    console.log("Additional details:", extraDetails);
  } else {
    console.log("No additional details.");
  }
}

// Example with all parameters
processOrder(
  { product: "Laptop", quantity: 2 },
  "Express shipping",
  "Gift wrap"
);
// Output:
// Product: Laptop
// Quantity: 2
// Additional details: [ 'Express shipping', 'Gift wrap' ]

// Example with missing object properties
processOrder({ product: "Phone" }, "Include charger");
// Output:
// Product: Phone
// Quantity: 1
// Additional details: [ 'Include charger' ]

// Example with default object and no additional arguments
processOrder();
// Output:
// Product: Unknown Product
// Quantity: 1
// No additional details.
```

### Explanation:

1. **Destructuring with default values**: The parameter `{ product = 'Unknown Product', quantity = 1 } = {}` is used to destructure the object argument. If properties `product` or `quantity` are not provided, default values are used.

   - If no object is passed at all, the function uses an empty object as the default (`{}`).
   - Default values for `product` and `quantity` are `'Unknown Product'` and `1`, respectively.

2. **Rest parameters**: The `...extraDetails` syntax collects any additional arguments passed to the function into an array. This allows the function to accept any number of extra details after the object.

3. **Flexibility**: This approach enables the function to handle:
   - Missing properties in the object (`product` and `quantity` will take default values).
   - Additional parameters via rest parameters (`extraDetails`).

### How it works:

- The function first destructures the object and assigns default values where necessary.
- Then, it uses the rest parameter (`...extraDetails`) to capture any additional arguments passed to the function.
- This setup is flexible because you can provide an object with some or all properties and still handle additional parameters, making the function adaptable to various use cases.
