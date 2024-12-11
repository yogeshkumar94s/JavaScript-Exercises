### **Function Scope in JavaScript**

**Function scope** refers to the visibility and accessibility of variables declared within a function. In JavaScript, variables defined inside a function are **scoped** to that function, meaning they cannot be accessed outside the function.

---

### **Key Characteristics**

1. Variables declared with `var`, `let`, or `const` inside a function are accessible only within that function.
2. Nested functions can access variables from their outer function's scope (lexical scoping).
3. Function scope applies to variables, parameters, and declared functions.

---

### **Examples**

#### 1. **Basic Function Scope**

```javascript
function greet() {
  const name = "Alice"; // Scoped to the greet function
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Alice!
// console.log(name); // Error: name is not defined
```

The variable `name` is not accessible outside the `greet` function because it is scoped to that function.

---

#### 2. **Function Parameters are Scoped**

Parameters of a function are also scoped to that function.

```javascript
function add(a, b) {
  const sum = a + b;
  console.log(sum);
}

add(3, 4); // Output: 7
// console.log(a); // Error: a is not defined
```

---

#### 3. **Function Scope and `var`**

Variables declared with `var` are also function-scoped, but `var` behaves differently in block-level structures like `if` or `for` (not block-scoped, only function-scoped).

```javascript
function testVar() {
  if (true) {
    var x = 10; // Function-scoped
  }
  console.log(x); // Output: 10
}

testVar();
```

In contrast, `let` and `const` are **block-scoped**:

```javascript
function testLet() {
  if (true) {
    let y = 20;
  }
  // console.log(y); // Error: y is not defined
}
```

---

#### 4. **Nested Functions and Lexical Scoping**

Nested functions can access variables of their parent function due to **lexical scoping**.

```javascript
function outerFunction() {
  const outerVar = "Outer";

  function innerFunction() {
    const innerVar = "Inner";
    console.log(outerVar); // Access outer function's variable
    console.log(innerVar); // Access inner function's variable
  }

  innerFunction();
  // console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();
```

---

#### 5. **Function Scope and Global Scope**

If a variable is not declared inside a function, it is part of the **global scope**.

```javascript
let globalVar = "I am global";

function display() {
  console.log(globalVar); // Accessible because it's in the global scope
}

display(); // Output: I am global
```

---

### **Use-Cases of Function Scope in Web Development**

1. **Data Protection**: Keep sensitive data hidden inside a function (encapsulation).

   ```javascript
   function apiKeyHandler() {
     const apiKey = "secret-api-key"; // Hidden
     return () => console.log(apiKey);
   }

   const getKey = apiKeyHandler();
   getKey(); // Output: secret-api-key
   ```

2. **Event Handlers**: Use scoped variables to manage data.

   ```javascript
   function handleClick(buttonName) {
     const message = `Button ${buttonName} clicked`;
     document.getElementById(buttonName).addEventListener("click", () => {
       console.log(message); // Scoped to the function
     });
   }

   handleClick("btn1");
   ```

3. **Avoid Pollution of Global Scope**: Use function scope to prevent variable conflicts.

   ```javascript
   function task() {
     const temp = "Scoped variable";
     console.log(temp);
   }

   task();
   // console.log(temp); // Error: temp is not defined
   ```

---

### **Summary**

- **Function scope** restricts variable accessibility to within the function where they are defined.
- Helps in encapsulating logic and avoiding global namespace pollution.
- Nested functions can access variables in their outer function (lexical scoping).

---

## A set of questions about **Function Scope** in JavaScript, ranging from basic to advanced:

### **Basic Questions**

### 1. What is function scope in JavaScript? How is it different from block scope?

### **Function Scope in JavaScript**

In JavaScript, **function scope** means that a variable declared inside a function is accessible only within that function and cannot be accessed outside of it. This scoping applies to variables declared using the `var` keyword.

- Variables declared with `var` are confined to the function in which they are declared.
- This includes nested functions; variables declared in the outer function can be accessed by inner (nested) functions.

#### Example of Function Scope:

```javascript
function outerFunction() {
  var functionScopedVariable = "I am inside the function";
  console.log(functionScopedVariable); // Accessible here
}

outerFunction();

console.log(functionScopedVariable); // ReferenceError: functionScopedVariable is not defined
```

In this example, the `functionScopedVariable` is accessible only inside `outerFunction` and not outside of it.

---

### **Block Scope in JavaScript**

**Block scope** restricts the accessibility of variables to the block `{ ... }` in which they are declared. Variables declared with `let` and `const` are block-scoped.

- A block is any code enclosed within `{ }`, such as in loops, conditionals, or standalone `{ }`.
- Variables declared with `let` or `const` inside a block cannot be accessed outside that block.

#### Example of Block Scope:

```javascript
{
  let blockScopedVariable = "I am inside a block";
  console.log(blockScopedVariable); // Accessible here
}

console.log(blockScopedVariable); // ReferenceError: blockScopedVariable is not defined
```

---

### **Key Differences: Function Scope vs. Block Scope**

| **Aspect**                | **Function Scope**                                                          | **Block Scope**                                    |
| ------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------- |
| **Declaration**           | Achieved using `var`                                                        | Achieved using `let` or `const`                    |
| **Scope Boundary**        | Confined to the function                                                    | Confined to the block `{ ... }`                    |
| **Access in Inner Scope** | Accessible in inner scopes (closures)                                       | Not accessible outside the block                   |
| **Hoisting Behavior**     | Variables hoisted to the top of the function and initialized as `undefined` | Variables hoisted to the block but not initialized |

---

#### **Example Highlighting Both Scopes**

```javascript
function testScopes() {
  if (true) {
    var functionScoped = "I'm function-scoped!";
    let blockScoped = "I'm block-scoped!";
    const alsoBlockScoped = "I'm also block-scoped!";
  }
  console.log(functionScoped); // Accessible
  // console.log(blockScoped); // ReferenceError: blockScoped is not defined
  // console.log(alsoBlockScoped); // ReferenceError: alsoBlockScoped is not defined
}

testScopes();
```

In this example:

- The `var` variable (`functionScoped`) is accessible outside the `if` block because it follows function scope.
- The `let` and `const` variables (`blockScoped` and `alsoBlockScoped`) are inaccessible outside the `if` block because they follow block scope.

### 2. Write a function `displayMessage` that defines a variable inside it and logs its value. Can this variable be accessed outside the function? Why or why not?

Here’s how you can define the `displayMessage` function, along with an explanation of whether the variable defined inside it can be accessed outside the function.

### Function Definition

```javascript
function displayMessage() {
  let message = "Hello from inside the function!";
  console.log(message); // Logs: Hello from inside the function!
}

// Call the function
displayMessage();

// Attempt to access the variable outside the function
console.log(message); // ReferenceError: message is not defined
```

### Explanation

1. **Why can't the variable `message` be accessed outside the function?**

   - The variable `message` is **block-scoped** because it is declared with `let` inside the `displayMessage` function.
   - It is confined to the function's scope and exists only during the execution of that function.
   - Once the function execution is complete, the variable `message` is destroyed and becomes inaccessible.

2. **What would happen if `var` were used instead of `let`?**
   - If `var` were used to declare `message`, it would still be confined to the function due to **function scope**. The behavior would be the same: the variable `message` would not be accessible outside the function.

### General Rule

- **Variables declared inside a function (using `var`, `let`, or `const`) are not accessible outside that function.**
- This is because JavaScript functions create their own scope, isolating variables declared within them from the outer/global scope.

### 3. What happens if you declare a variable without `var`, `let`, or `const` inside a function? Demonstrate with an example and explain the scope of such a variable.

When you declare a variable without using `var`, `let`, or `const` inside a function, it **implicitly becomes a global variable**. This behavior occurs because the variable is added to the **global object** (`window` in browsers, or `global` in Node.js). This can lead to unintended side effects and bugs in your program, as the variable becomes accessible and modifiable anywhere in your code.

---

### Example:

```javascript
function createGlobalVariable() {
  globalVariable = "I am a global variable!"; // No var, let, or const
  console.log(globalVariable); // Logs: I am a global variable!
}

createGlobalVariable();

console.log(globalVariable); // Logs: I am a global variable!

// Modify the variable outside the function
globalVariable = "I have been modified globally!";
console.log(globalVariable); // Logs: I have been modified globally!
```

---

### Explanation:

1. **Implicit Global Variable Creation:**

   - In the `createGlobalVariable` function, the variable `globalVariable` is declared without `var`, `let`, or `const`.
   - As a result, it is not confined to the function scope. Instead, it is attached to the **global object** (`window` in the browser or `global` in Node.js).
   - This makes `globalVariable` accessible everywhere in your code.

2. **Scope of the Implicit Global Variable:**

   - The `globalVariable` has **global scope**, even though it was defined inside the function.
   - It can be read or modified from any part of the program.

3. **Problems with Implicit Globals:**
   - **Unintended Modifications:** Since the variable is global, it can be accidentally modified by other parts of the program, leading to hard-to-find bugs.
   - **Pollution of Global Namespace:** Declaring variables without `var`, `let`, or `const` contributes to global namespace pollution, increasing the likelihood of name collisions.
   - **Strict Mode Error:** In **strict mode** (`"use strict";`), declaring a variable without `var`, `let`, or `const` inside a function will throw a `ReferenceError`.

---

### Example with Strict Mode:

```javascript
"use strict";

function createStrictVariable() {
  implicitVariable = "This will throw an error!"; // No var, let, or const
}

createStrictVariable(); // ReferenceError: implicitVariable is not defined
```

---

### Best Practice:

- **Always declare variables explicitly** using `let`, `const`, or `var`.
- Avoid relying on implicit global variables to ensure your code is predictable, modular, and less prone to bugs.

### 4. Write a function with two local variables having the same name as global variables. Explain which value will be logged when accessing the variable inside and outside the function.

Here's an example of a function where two local variables have the same names as global variables, along with an explanation of the behavior.

---

### Example:

```javascript
// Global variables
let globalVar1 = "I am globalVar1";
const globalVar2 = "I am globalVar2";

function testScope() {
  // Local variables with the same names as global variables
  let globalVar1 = "I am localVar1";
  const globalVar2 = "I am localVar2";

  console.log(globalVar1); // Logs: I am localVar1 (local variable)
  console.log(globalVar2); // Logs: I am localVar2 (local variable)
}

// Call the function
testScope();

// Access variables outside the function
console.log(globalVar1); // Logs: I am globalVar1 (global variable)
console.log(globalVar2); // Logs: I am globalVar2 (global variable)
```

---

### Explanation:

1. **Inside the Function:**

   - When the function `testScope` is executed, the local variables `globalVar1` and `globalVar2` declared inside the function **shadow** the global variables with the same names.
   - This means that within the function, the local variables take precedence, and their values are used when `globalVar1` and `globalVar2` are accessed.

2. **Outside the Function:**
   - Outside the function, the local variables are no longer accessible because their scope is limited to the function body.
   - The global variables `globalVar1` and `globalVar2` remain unchanged and are used when accessed outside the function.

---

### Key Concepts:

- **Variable Shadowing:** When a variable declared in a local scope has the same name as a variable in an outer or global scope, the local variable takes precedence within that scope. This is called **shadowing**.
- **Scope Boundaries:** Variables declared with `let` or `const` are block-scoped and exist only within their defining block (or function, if defined there). Global variables are accessible throughout the script unless shadowed.

---

### Best Practices:

- Use distinct names for global and local variables to avoid confusion.
- If shadowing is necessary, ensure it's intentional and well-documented to prevent misunderstandings in code behavior.

---

### **Intermediate Questions**

### 5. How does JavaScript handle variable shadowing in function scope? Write an example to demonstrate variable shadowing.

### **Variable Shadowing in Function Scope**

In JavaScript, **variable shadowing** occurs when a variable declared in a local scope (e.g., inside a function or block) has the same name as a variable in an outer scope (e.g., global or parent function). The locally declared variable **shadows** (hides) the outer variable within its scope, meaning the inner variable takes precedence when accessed.

---

### **Example: Variable Shadowing in Function Scope**

```javascript
// Global variable
let name = "Global Name";

function outerFunction() {
  // Outer function variable (shadows the global variable inside this function)
  let name = "Outer Function Name";

  console.log("Inside outerFunction:", name); // Logs: Outer Function Name

  function innerFunction() {
    // Inner function variable (shadows the outer function variable inside this function)
    let name = "Inner Function Name";
    console.log("Inside innerFunction:", name); // Logs: Inner Function Name
  }

  innerFunction();

  // Accessing the outer function's variable
  console.log("Back to outerFunction:", name); // Logs: Outer Function Name
}

// Accessing the global variable
console.log("Global Scope:", name); // Logs: Global Name

outerFunction();
```

---

### **Explanation**

1. **Global Scope:**

   - The global variable `name` is declared with the value `"Global Name"`.
   - Outside any function, accessing `name` refers to the global variable.

2. **Outer Function Scope:**

   - The variable `name` declared inside `outerFunction` **shadows** the global `name` within the `outerFunction` scope.
   - Accessing `name` inside `outerFunction` refers to the locally declared variable (`"Outer Function Name"`).

3. **Inner Function Scope:**

   - The variable `name` declared inside `innerFunction` **shadows** the `name` variable from `outerFunction` within the `innerFunction` scope.
   - Accessing `name` inside `innerFunction` refers to the most immediate variable (`"Inner Function Name"`).

4. **Scope Boundary:**
   - Once you exit the inner or outer function, the variables declared in those scopes are no longer accessible. Outside all functions, the global variable `name` is accessible again.

---

### **Key Points About Variable Shadowing:**

- Shadowing affects **only the scope where the local variable is defined**.
- The outer variable remains unchanged and can still be accessed outside the shadowing scope.
- Shadowing can lead to confusion if variable names are reused excessively, so it is good practice to use unique and descriptive names.

---

### **Example with `var`:**

```javascript
var name = "Global Name";

function testVarShadowing() {
  var name = "Local Name"; // Shadows the global variable
  console.log("Inside function:", name); // Logs: Local Name
}

testVarShadowing();
console.log("Outside function:", name); // Logs: Global Name (global variable is unaffected)
```

### 6. Create a function `outer` with a nested function `inner`. Define a variable in `outer` and access it in `inner`. Explain how function scope allows this.

### Function Scope and Nested Functions

In JavaScript, **nested functions** (functions defined inside other functions) can access variables defined in their parent function's scope. This behavior is due to **lexical scoping**, where the inner function has access to the variables of the outer function, as well as global variables.

---

### Example: `outer` and `inner` Functions

```javascript
function outer() {
  let outerVariable = "I am from outer";

  function inner() {
    console.log(outerVariable); // Accessing the variable from outer's scope
  }

  inner(); // Call the inner function
}

outer();
```

---

### Explanation:

1. **Variable Declaration in `outer`:**

   - The variable `outerVariable` is defined in the scope of the `outer` function.

2. **Accessing `outerVariable` in `inner`:**

   - The `inner` function is nested inside `outer`.
   - According to **lexical scoping**, the `inner` function can access variables from its outer function (`outer`) because `inner` is created within `outer`'s scope.

3. **Scope Chain:**
   - When `inner` is executed, it first looks for `outerVariable` in its own local scope.
   - If it doesn't find it, it moves up the scope chain to `outer`'s scope.
   - Since `outerVariable` exists in `outer`, `inner` successfully accesses and logs its value.

---

### Output:

```
I am from outer
```

---

### Why Does This Work? (Function Scope and Lexical Scoping)

- **Function Scope:** Variables declared in a function are accessible only within that function and its nested functions.
- **Lexical Scoping:** JavaScript determines variable accessibility based on where functions are defined in the source code. The `inner` function is defined inside `outer`, so it has access to `outer`'s variables.

---

### Example with Multiple Nested Levels:

```javascript
function outer() {
  let outerVariable = "I am from outer";

  function inner() {
    let innerVariable = "I am from inner";

    function innermost() {
      console.log(outerVariable); // Accesses variable from outer
      console.log(innerVariable); // Accesses variable from inner
    }

    innermost();
  }

  inner();
}

outer();
```

### Output:

```
I am from outer
I am from inner
```

### 7. Write a function that defines a variable using `var` and attempts to access it outside the function. What error, if any, will occur?

Here’s an example to illustrate the behavior of a variable declared using `var` inside a function and attempting to access it outside the function.

---

### Code Example:

```javascript
function testVarScope() {
  var localVar = "I am a local variable";
  console.log(localVar); // Accessible here: Logs "I am a local variable"
}

testVarScope();

console.log(localVar); // Attempt to access: Throws a ReferenceError
```

---

### Explanation:

1. **Inside the Function:**

   - The variable `localVar` is declared with `var` inside the function `testVarScope`.
   - Variables declared with `var` are **function-scoped**, meaning they are accessible anywhere within the function where they are declared.

2. **Outside the Function:**
   - Since `var` variables are confined to the function scope, `localVar` is not accessible outside the function.
   - When `console.log(localVar)` is executed outside the function, it results in a **`ReferenceError`** because `localVar` does not exist in the global scope or any enclosing scope outside `testVarScope`.

---

### Output:

```
I am a local variable
Uncaught ReferenceError: localVar is not defined
```

---

### Key Takeaways:

- **`var` Variables and Function Scope:**
  - A variable declared with `var` is **function-scoped**.
  - It is created when the function is invoked and destroyed when the function execution ends.
- **Access Outside the Function:**
  - Attempting to access a `var` variable outside its defining function results in a `ReferenceError` because the variable exists only within the scope of the function.

---

### 8. Compare the behavior of `let` and `var` inside a function. Write a function that declares the same variable name using both keywords in different blocks, and explain the output.

Here’s an example that demonstrates the behavior of `let` and `var` inside a function, showing their differences in scoping. We'll declare variables with the same name using `let` and `var` in different blocks and observe their behavior.

---

### Code Example:

```javascript
function compareLetAndVar() {
  // Declare a variable using var
  var varVariable = "I am var in the outer scope";

  // Declare a variable using let
  let letVariable = "I am let in the outer scope";

  console.log(varVariable); // Logs: I am var in the outer scope
  console.log(letVariable); // Logs: I am let in the outer scope

  if (true) {
    // Redeclare varVariable in a block
    var varVariable = "I am var in the block scope";

    // Redeclare letVariable in a block
    let letVariable = "I am let in the block scope";

    console.log(varVariable); // Logs: I am var in the block scope
    console.log(letVariable); // Logs: I am let in the block scope
  }

  // Accessing variables outside the block
  console.log(varVariable); // Logs: I am var in the block scope
  console.log(letVariable); // Logs: I am let in the outer scope
}

compareLetAndVar();
```

---

### Explanation:

1. **Behavior of `var`:**

   - `var` is **function-scoped**, so it is accessible throughout the function regardless of block boundaries.
   - When `var varVariable` is redeclared inside the `if` block, it overwrites the `varVariable` in the outer scope because `var` does not create a new block scope.

2. **Behavior of `let`:**
   - `let` is **block-scoped**, so a new `letVariable` is created within the `if` block.
   - The `letVariable` declared in the `if` block shadows the `letVariable` declared in the outer scope, but only within that block.
   - Outside the `if` block, the outer `letVariable` remains unchanged.

---

### Output:

```
I am var in the outer scope
I am let in the outer scope
I am var in the block scope
I am let in the block scope
I am var in the block scope
I am let in the outer scope
```

---

### Key Differences Between `let` and `var`:

| **Aspect**                          | **`var`**                                       | **`let`**                                  |
| ----------------------------------- | ----------------------------------------------- | ------------------------------------------ |
| **Scope**                           | Function-scoped                                 | Block-scoped                               |
| **Redeclaration in the Same Scope** | Allowed                                         | Not allowed                                |
| **Access Before Declaration**       | Hoisted and initialized to `undefined`          | Hoisted but not initialized (throws error) |
| **Shadowing**                       | Overwrites outer variables in the same function | Creates a new variable in the block        |

---

### **Advanced Questions**

### 9. How do closures interact with function scope? Write a function that demonstrates a closure capturing a variable from its outer function.

### Closures and Function Scope

A **closure** in JavaScript is created when a function "remembers" the variables from its outer scope, even after the outer function has finished executing. This is possible because JavaScript functions carry their **lexical environment** with them.

Closures are tightly connected to function scope, as the inner function "closes over" the variables of its outer function.

---

### Example: Closure Capturing a Variable

```javascript
function outerFunction() {
  let outerVariable = "I am from the outer scope";

  function innerFunction() {
    console.log(outerVariable); // Accesses the variable from outerFunction
  }

  return innerFunction; // Return the inner function
}

const closureFunction = outerFunction(); // outerFunction executes and returns innerFunction
closureFunction(); // Logs: I am from the outer scope
```

---

### Explanation:

1. **Outer Function Scope:**

   - The variable `outerVariable` is declared inside the `outerFunction` and exists in its scope.

2. **Inner Function Scope:**

   - The `innerFunction` is declared inside `outerFunction` and can access `outerVariable` due to **lexical scoping**.

3. **Closure Creation:**

   - When `outerFunction` is called, it returns `innerFunction`. Even though `outerFunction` has finished executing, `innerFunction` still "remembers" the variable `outerVariable` because of the closure.

4. **Accessing the Captured Variable:**
   - When `closureFunction` is executed, it logs the value of `outerVariable`, demonstrating that the closure has captured and retained access to `outerVariable` from `outerFunction`.

---

### Output:

```
I am from the outer scope
```

---

### Key Concepts About Closures and Function Scope:

1. **Closure Retains the Environment:**

   - Closures retain access to the variables of their outer functions, even after those functions have returned.

2. **Independent Closure Instances:**
   - Each call to the outer function creates a new environment, so closures from different calls operate independently.

---

### Example with Multiple Closure Instances:

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // Logs: 1
console.log(counter1()); // Logs: 2
console.log(counter2()); // Logs: 1 (separate closure)
console.log(counter2()); // Logs: 2
```

### Explanation of the Counter Example:

- Each call to `createCounter` creates a new closure, so `counter1` and `counter2` have independent `count` variables.

---

### 10. Can a function defined inside another function access variables from its grandparent scope? Write an example with three levels of nested functions and explain the scope behavior.

### Accessing Variables from Grandparent Scope in Nested Functions

Yes, a function defined inside another function can access variables from its **grandparent scope**. This is due to **lexical scoping**, where a function has access to variables from its own scope and all enclosing (parent, grandparent, etc.) scopes where it was defined.

---

### Example with Three Levels of Nested Functions

```javascript
function grandparentFunction() {
  let grandparentVariable = "I am from grandparent scope";

  function parentFunction() {
    let parentVariable = "I am from parent scope";

    function childFunction() {
      let childVariable = "I am from child scope";

      // Accessing variables from all scopes
      console.log(childVariable); // Logs: I am from child scope
      console.log(parentVariable); // Logs: I am from parent scope
      console.log(grandparentVariable); // Logs: I am from grandparent scope
    }

    childFunction(); // Call the innermost function
  }

  parentFunction(); // Call the middle function
}

grandparentFunction(); // Start execution
```

---

### Output:

```
I am from child scope
I am from parent scope
I am from grandparent scope
```

---

### Explanation of Scope Behavior:

1. **Grandparent Scope (`grandparentFunction`):**

   - The variable `grandparentVariable` is declared in the outermost function.
   - All nested functions (`parentFunction` and `childFunction`) can access this variable due to lexical scoping.

2. **Parent Scope (`parentFunction`):**

   - The variable `parentVariable` is declared inside `parentFunction`.
   - The `childFunction` can access this variable because it is defined inside `parentFunction`.

3. **Child Scope (`childFunction`):**

   - The variable `childVariable` is declared inside `childFunction`.
   - This variable is accessible only within `childFunction`.

4. **Scope Chain:**
   - When `childFunction` accesses a variable, it first looks in its own local scope.
   - If the variable is not found, it moves up to `parentFunction`'s scope.
   - If not found there, it continues to the `grandparentFunction`'s scope.
   - This process is known as **scope chaining**.

---

### Key Concepts:

- **Lexical Scoping:**

  - The accessibility of variables is determined by the structure of the code at the time of function definition, not where the function is called.

- **Scope Chain:**
  - A nested function has access to:
    - Its own variables.
    - Variables from all enclosing functions (parent, grandparent, etc.).
    - Global variables (if no shadowing occurs).

---

### Practical Example of Grandparent Access:

Closures often use this behavior to preserve data across multiple levels of function nesting:

```javascript
function makeMultiplier(multiplier) {
  return function (number) {
    return function () {
      return number * multiplier; // Accesses `multiplier` and `number` from grandparent and parent
    };
  };
}

const multiplyBy2 = makeMultiplier(2)(10);
console.log(multiplyBy2()); // Logs: 20
```

### Explanation:

- `multiplier` comes from the grandparent function scope.
- `number` comes from the parent function scope.
- The innermost function uses both to compute the result.

### 11. What happens if you declare a variable using `var` inside a `for` loop within a function? How does it differ from `let`? Demonstrate this with code.

In JavaScript, declaring a variable using `var` inside a `for` loop behaves differently from using `let`. The main difference lies in how the scope of the variable is handled.

### Key Differences:

- **`var`:** The variable declared with `var` is **function-scoped**, not block-scoped. This means that when you declare a variable with `var` inside a `for` loop, the variable is accessible outside the loop (within the function), and it only has one instance throughout the entire loop execution.
- **`let`:** The variable declared with `let` is **block-scoped**, meaning it is confined to the block of the `for` loop and will have a separate instance for each iteration.

---

### Example with `var` inside a `for` loop:

```javascript
function testVarScope() {
  for (var i = 0; i < 3; i++) {
    console.log("Inside loop, i =", i); // Logs i = 0, i = 1, i = 2
  }

  console.log("Outside loop, i =", i); // Logs: Outside loop, i = 3
}

testVarScope();
```

### Explanation:

- **Inside the loop:** The variable `i` is accessible in each iteration, and its value changes from 0 to 2.
- **Outside the loop:** The variable `i` is accessible outside the loop because `var` is function-scoped. Even though the loop has ended, the value of `i` remains 3 because `var` does not create a block scope.

### Output:

```
Inside loop, i = 0
Inside loop, i = 1
Inside loop, i = 2
Outside loop, i = 3
```

---

### Example with `let` inside a `for` loop:

```javascript
function testLetScope() {
  for (let j = 0; j < 3; j++) {
    console.log("Inside loop, j =", j); // Logs j = 0, j = 1, j = 2
  }

  console.log("Outside loop, j =", j); // Throws ReferenceError: j is not defined
}

testLetScope();
```

### Explanation:

- **Inside the loop:** The variable `j` is scoped to the block (inside the `for` loop) and changes from 0 to 2.
- **Outside the loop:** The variable `j` is **not** accessible outside the loop, because `let` is block-scoped, meaning the variable is confined to the loop and doesn't exist outside of it.

### Output:

```
Inside loop, j = 0
Inside loop, j = 1
Inside loop, j = 2
Uncaught ReferenceError: j is not defined
```

---

### Comparison Table:

| Aspect                    | `var` (function-scoped)                    | `let` (block-scoped)                                                      |
| ------------------------- | ------------------------------------------ | ------------------------------------------------------------------------- |
| **Scope**                 | Accessible throughout the entire function  | Accessible only within the block (loop)                                   |
| **Value after loop ends** | Retains the last value after the loop ends | Does not exist outside the loop                                           |
| **Hoisting behavior**     | Hoisted and initialized to `undefined`     | Hoisted but not initialized (throws error if accessed before declaration) |
| **Multiple declarations** | Allowed (no error if redeclared)           | Not allowed (throws error if redeclared)                                  |

---

### Summary:

- **`var`** makes the variable accessible even outside the loop because it is function-scoped.
- **`let`** ensures the variable is only accessible within the loop because it is block-scoped, which is generally safer and more predictable in modern JavaScript.

### 12. Explain the concept of **hoisting** in the context of function scope. Write a function where a variable is used before it's declared, and explain the result.

### Concept of Hoisting in JavaScript

**Hoisting** is a behavior in JavaScript where **declarations** (but not initializations) of variables and functions are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that variables and functions can be used before they are explicitly declared in the code, but with some important differences based on whether they are declared with `var`, `let`, `const`, or using a function declaration.

- **For `var`** variables, hoisting will initialize the variable to `undefined`.
- **For `let` and `const`** variables, hoisting will **not** initialize them, and accessing them before the declaration will result in a **`ReferenceError`**.
- **Function declarations** are hoisted entirely, meaning the function definition is available throughout the entire scope, even before the function is declared.

---

### Example 1: Hoisting with `var`

```javascript
function hoistWithVar() {
  console.log(myVar); // Logs: undefined (hoisted, but not yet assigned)

  var myVar = "Hello, World!"; // Variable declaration and initialization
  console.log(myVar); // Logs: Hello, World! (after initialization)
}

hoistWithVar();
```

### Explanation:

- **Hoisting with `var`:**
  - The `var` declaration is hoisted to the top of the function scope, but its initialization (`"Hello, World!"`) stays in place.
  - When `console.log(myVar)` is called before the variable is initialized, it logs `undefined` because the variable is hoisted but hasn't been assigned a value yet.
  - After the assignment `var myVar = "Hello, World!"`, the second `console.log` logs the actual value of `myVar`.

### Output:

```
undefined
Hello, World!
```

---

### Example 2: Hoisting with `let` and `const`

```javascript
function hoistWithLetAndConst() {
  console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
  console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization

  let myLet = "Hello from let!";
  const myConst = "Hello from const!";
}

hoistWithLetAndConst();
```

### Explanation:

- **Hoisting with `let` and `const`:**
  - `let` and `const` are hoisted like `var`, but they are **not initialized** until their actual declaration in the code.
  - Accessing them before the declaration results in a `ReferenceError` because of the "temporal dead zone" (TDZ), which is the time between the start of the scope and the declaration where the variables are in an uninitialized state.

### Output:

```
Uncaught ReferenceError: Cannot access 'myLet' before initialization
Uncaught ReferenceError: Cannot access 'myConst' before initialization
```

---

### Example 3: Hoisting with Function Declarations

```javascript
function hoistWithFunction() {
  myFunction(); // No error, works as expected!

  function myFunction() {
    console.log("Function is hoisted!");
  }
}

hoistWithFunction();
```

### Explanation:

- **Hoisting with Function Declarations:**
  - Function declarations are hoisted entirely, meaning both the function definition and the body are moved to the top of the scope.
  - As a result, calling `myFunction()` before it is declared works as expected without throwing any errors.

### Output:

```
Function is hoisted!
```

---

### Summary of Hoisting Behavior:

1. **Variables declared with `var`:**
   - The declaration is hoisted to the top of the scope and initialized to `undefined`. You can access the variable before the declaration, but it will be `undefined`.
2. **Variables declared with `let` and `const`:**
   - The declaration is hoisted, but they remain uninitialized until their actual line of declaration. Accessing them before their declaration results in a `ReferenceError` due to the **temporal dead zone** (TDZ).
3. **Function declarations:**
   - The entire function declaration (including the function body) is hoisted, so you can call the function before it's declared.

---

### Key Points to Remember:

- **Function declarations** are hoisted fully, including the function body.
- **Variables declared with `var`** are hoisted with an initial value of `undefined`.
- **Variables declared with `let` and `const`** are hoisted, but remain in the **temporal dead zone** until their actual initialization, leading to a `ReferenceError` if accessed before the declaration.

### 13. Write a function `testScope` that declares a variable inside an `if` block using `var` and another using `let`. Log both variables outside the block and explain the output.

### Example: Using `var` and `let` in an `if` block

In this example, we'll declare one variable inside an `if` block using `var` and another using `let`. Then we'll log both variables outside the block and explain the output.

### Code:

```javascript
function testScope() {
  if (true) {
    var varVariable = "I am declared with var inside an if block";
    let letVariable = "I am declared with let inside an if block";
  }

  console.log(varVariable); // Logs: I am declared with var inside an if block
  console.log(letVariable); // ReferenceError: letVariable is not defined
}

testScope();
```

### Explanation:

1. **`var` inside the `if` block:**

   - The variable `varVariable` is declared using `var`, which is **function-scoped** (or globally scoped if not inside a function).
   - Since `var` is not block-scoped, the variable `varVariable` is accessible outside the `if` block, within the function (or globally, if declared outside a function).
   - Therefore, `varVariable` can be accessed and logged after the `if` block.

2. **`let` inside the `if` block:**
   - The variable `letVariable` is declared using `let`, which is **block-scoped**.
   - This means that `letVariable` only exists inside the `if` block and cannot be accessed outside of it.
   - Attempting to log `letVariable` outside the `if` block results in a `ReferenceError` because it is not defined outside that block.

### Output:

```
I am declared with var inside an if block
Uncaught ReferenceError: letVariable is not defined
```

### Key Points:

- **`var`** is **function-scoped** (or globally scoped if not inside a function), so it is accessible outside the block.
- **`let`** is **block-scoped**, so it is not accessible outside the block in which it is declared.

### 14. How does strict mode (`'use strict'`) affect function scope? Write a function where you declare a variable without `var`, `let`, or `const` in both strict and non-strict modes.

### Strict Mode in JavaScript

**Strict mode** (`'use strict'`) was introduced in ECMAScript 5 to enforce a stricter set of rules for JavaScript code. One of the key differences between strict mode and non-strict mode is how variables are handled. In strict mode, declaring a variable without `var`, `let`, or `const` will throw an error. In non-strict mode, JavaScript will implicitly create a global variable.

### Key Differences in Function Scope:

1. **Non-strict mode:** When a variable is declared without `var`, `let`, or `const`, it becomes a global variable (if inside a function, it would be attached to the global object like `window` in browsers).
2. **Strict mode:** A variable must be declared with `var`, `let`, or `const`. Declaring a variable without one of these keywords will throw a `ReferenceError`.

---

### Example: Strict Mode vs Non-strict Mode

```javascript
// Non-strict mode example (default behavior in JS)
function nonStrictMode() {
  x = 10; // No 'var', 'let', or 'const' - implicitly creates a global variable
  console.log(x); // Logs: 10
}

nonStrictMode();
console.log(x); // Logs: 10 (x becomes a global variable)

// Strict mode example
function strictMode() {
  "use strict";
  y = 20; // Error: Uncaught ReferenceError: y is not defined
  console.log(y);
}

strictMode();
```

### Explanation:

1. **Non-strict mode:**

   - In `nonStrictMode()`, the variable `x` is assigned a value without using `var`, `let`, or `const`. JavaScript will implicitly create a global variable, even though it is declared inside a function.
   - After calling `nonStrictMode()`, the global variable `x` is accessible outside the function, so logging `x` outside the function works.

2. **Strict mode:**
   - In `strictMode()`, `'use strict'` is enabled, and when `y` is assigned a value without `var`, `let`, or `const`, a `ReferenceError` is thrown because strict mode requires all variables to be declared properly.
   - As a result, the function throws an error when trying to assign a value to `y` without using a declaration keyword, and it does not execute the `console.log(y)` line.

### Output:

```
10
Uncaught ReferenceError: y is not defined
```

### Summary of Effects of Strict Mode:

- **Non-strict mode:** Variables can be created without `var`, `let`, or `const`, and they become global variables.
- **Strict mode:** All variables must be declared with `var`, `let`, or `const`. If a variable is used without a declaration keyword, a `ReferenceError` will be thrown.

### 15. Write a function `counter` that uses function scope to maintain a private variable. The function should return another function to increment and log the private variable.

### Concept: Maintaining a Private Variable with Function Scope

In JavaScript, you can create private variables using **closures**. A closure allows a function to "remember" its lexical scope even when executed outside that scope. By defining a private variable inside a function and returning an inner function that can access it, you can maintain a private state that cannot be directly accessed or modified from outside the function.

### Example: `counter` function with a private variable

```javascript
function counter() {
  // Private variable to maintain the count
  let count = 0;

  // Inner function to increment and log the count
  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter(); // Create the counter instance

// Calling the returned function to increment the count
increment(); // Logs: 1
increment(); // Logs: 2
increment(); // Logs: 3

// Trying to access 'count' directly from outside the function will result in an error
// console.log(count); // ReferenceError: count is not defined
```

### Explanation:

1. **Private Variable (`count`):**
   - The variable `count` is declared inside the `counter` function. It is **private** because it is only accessible within the function scope of `counter` and cannot be accessed directly from outside.
2. **Closure:**

   - The function returned by `counter()` is a closure. It has access to the `count` variable from its outer scope (the `counter` function) even after the `counter` function has finished executing.

3. **Function Scope:**
   - Every time the returned function is called, it increments the `count` variable and logs it. The private `count` variable persists between calls, allowing it to act as a counter.

### Output:

```
1
2
3
```

### Key Points:

- The **private variable** `count` is not accessible from outside the `counter` function.
- The **returned inner function** can access and modify the private variable, demonstrating the concept of **closures**.
- This pattern can be useful when you need to create functions that maintain private state, which cannot be directly modified or accessed from the outside.
