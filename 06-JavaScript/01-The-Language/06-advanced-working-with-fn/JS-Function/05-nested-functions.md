### **Nested Functions in JavaScript**

A **nested function** is a function defined inside another function. The inner function can access variables and parameters of the outer function due to **lexical scoping**.

---

### **Syntax**

```javascript
function outerFunction(outerParam) {
  const outerVar = "Outer Variable";

  function innerFunction(innerParam) {
    console.log(outerVar); // Access outer function variable
    console.log(outerParam); // Access outer function parameter
    console.log(innerParam); // Access inner function parameter
  }

  innerFunction("Inner Param");
}
outerFunction("Outer Param");
```

---

### **Use-Cases in Modern Web Development**

1. **Encapsulation**

   - Inner functions are private to the outer function, useful for creating helper functions that shouldn't be accessible outside.

   ```javascript
   function authenticateUser(username, password) {
     const isValidPassword = (pwd) => pwd === "secure123"; // Nested function

     if (isValidPassword(password)) {
       console.log(`${username} authenticated`);
     } else {
       console.log("Authentication failed");
     }
   }

   authenticateUser("Alice", "secure123"); // Output: Alice authenticated
   // isValidPassword is not accessible outside
   ```

2. **Closures**

   - Inner functions form closures, capturing variables from their enclosing scopes. This is handy for preserving state or creating factory functions.

   ```javascript
   function createCounter() {
     let count = 0; // State preserved by closure

     return function increment() {
       count++;
       return count;
     };
   }

   const counter = createCounter();
   console.log(counter()); // Output: 1
   console.log(counter()); // Output: 2
   ```

3. **Callbacks**

   - Nested functions can act as callbacks for event handlers, API calls, or other asynchronous operations.

   ```javascript
   function fetchData(url) {
     function handleResponse(response) {
       console.log("Data received:", response);
     }

     // Simulated API call
     setTimeout(() => handleResponse({ data: "Sample Data" }), 1000);
   }

   fetchData("/api/data");
   ```

4. **Composition of Logic**

   - Nested functions help structure code by separating different levels of logic.

   ```javascript
   function processUser(user) {
     function validate(user) {
       return user.name && user.age >= 18;
     }

     function save(user) {
       console.log("User saved:", user);
     }

     if (validate(user)) {
       save(user);
     } else {
       console.log("Invalid user");
     }
   }

   processUser({ name: "Alice", age: 20 }); // Output: User saved: {name: "Alice", age: 20}
   ```

5. **Event Handling in Web Development**

   - Useful for handling events or dynamically binding logic.

   ```javascript
   function attachEvent(buttonId) {
     const button = document.getElementById(buttonId);

     button.addEventListener("click", function handleClick() {
       console.log(`Button ${buttonId} clicked`);
     });
   }

   attachEvent("myButton");
   ```

---

### **Advanced Example: Modular Function Design**

Nested functions are often used in modular design to hide implementation details and expose only necessary functionality.

```javascript
function userModule() {
  const users = [];

  function addUser(name) {
    users.push(name);
    console.log(`${name} added`);
  }

  function listUsers() {
    console.log("Users:", users);
  }

  return {
    addUser,
    listUsers, // Expose only these functions
  };
}

const user = userModule();
user.addUser("Alice"); // Output: Alice added
user.listUsers(); // Output: Users: [ 'Alice' ]
```

---

### **Key Benefits**

1. **Encapsulation**: Keeps logic contained and prevents name collisions.
2. **Code Readability**: Helps organize code logically by nesting related logic.
3. **Closures**: Allows state persistence in functions.

---

Here are questions about **nested functions** in JavaScript, organized from basic to advanced:

---

### **Basic Questions**

1. What is a nested function in JavaScript? Provide an example of a function that contains another function.

### **What is a Nested Function in JavaScript?**

A nested function is a function defined inside another function. The inner function (nested function) has access to variables and parameters of the outer function due to **lexical scoping**. However, the outer function does not have access to variables defined inside the nested function.

---

### **Example: Nested Function**

Here’s an example demonstrating an outer function containing a nested function:

```javascript
function outerFunction(outerVariable) {
  const outerConstant = "Outer Constant";

  // Nested function
  function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Outer Constant: ${outerConstant}`);
    console.log(`Inner Variable: ${innerVariable}`);
  }

  // Calling the nested function
  innerFunction("Inner Value");
}

// Example usage
outerFunction("Outer Value");
```

---

### **Output**

When the above code is executed, it prints:

```
Outer Variable: Outer Value
Outer Constant: Outer Constant
Inner Variable: Inner Value
```

---

### **Explanation**

1. **Outer Function (`outerFunction`)**:

   - This function takes an argument `outerVariable` and defines a constant `outerConstant`.

2. **Inner Function (`innerFunction`)**:

   - This function is defined inside `outerFunction` and takes its own parameter `innerVariable`.
   - It can access:
     - Its own parameter `innerVariable`.
     - Variables and parameters of the outer function, i.e., `outerVariable` and `outerConstant`.

3. **Lexical Scoping**:
   - The `innerFunction` has access to the scope of `outerFunction` because it is defined within it.

---

### **Use Cases**

- Encapsulation of logic to avoid polluting the global scope.
- Creating closures where the nested function retains access to the outer function’s variables even after the outer function has returned.

2. Write a function `outer` that has a nested function `inner`. The `outer` function should call `inner` and return its result.

Here’s a simple implementation of a function `outer` containing a nested function `inner`, where `outer` calls `inner` and returns its result:

### Code

```javascript
function outer(outerParam) {
  // Nested function
  function inner(innerParam) {
    return `Outer parameter: ${outerParam}, Inner parameter: ${innerParam}`;
  }

  // Call the inner function and return its result
  return inner("Inner Value");
}

// Example usage
const result = outer("Outer Value");
console.log(result);
```

---

### Explanation

1. **Outer Function (`outer`)**:

   - Takes a parameter `outerParam`.
   - Defines the nested function `inner`.

2. **Inner Function (`inner`)**:

   - Takes its own parameter `innerParam`.
   - Uses both `innerParam` and `outerParam` (accessed via lexical scoping) to construct a result.

3. **Calling the Inner Function**:
   - The `outer` function calls `inner` with a specific value (`"Inner Value"`) and returns its result.

---

### Output

When you run the code, it prints:

```
Outer parameter: Outer Value, Inner parameter: Inner Value
```

---

### How It Works

- When `outer` is called with `"Outer Value"`, it creates the `inner` function within its scope.
- The `inner` function uses the `outerParam` from `outer` and its own `innerParam` to return a combined string.
- Finally, `outer` returns the result from `inner`.

3. Can a nested function access variables from its outer function? Write a code example to demonstrate this.

Yes, a nested function can access variables from its outer function due to **lexical scoping** in JavaScript. This means that a function can access variables defined in its own scope and any outer (parent) scopes where it is defined.

---

### **Code Example**

```javascript
function outerFunction() {
  const outerVariable = "I'm from the outer function!";

  function innerFunction() {
    console.log(outerVariable); // Accessing outer function's variable
  }

  innerFunction(); // Calling the inner function
}

// Example usage
outerFunction();
```

---

### **Output**

```
I'm from the outer function!
```

---

### **Explanation**

1. **Outer Function (`outerFunction`)**:

   - Defines a variable `outerVariable`.

2. **Inner Function (`innerFunction`)**:

   - Defined inside the `outerFunction`.
   - Can access the `outerVariable` because of **lexical scoping**. When `innerFunction` is executed, it looks for `outerVariable` first in its own scope. If not found, it searches in the enclosing (outer) scope, i.e., `outerFunction`.

3. **Function Call**:
   - The `outerFunction` is executed, which in turn calls `innerFunction`.
   - The `innerFunction` logs the `outerVariable` value from the `outerFunction`.

---

### **Key Points**

- **Scope Chain**: When a variable is not found in the local scope of the `innerFunction`, JavaScript moves up the scope chain to look for it in `outerFunction`.
- **Encapsulation**: The `innerFunction` has access to the variables of its outer function, but the reverse is not true.

---

### Advanced Example: Returning the Inner Function

```javascript
function outerFunction() {
  const outerVariable = "Outer Value";

  function innerFunction() {
    return `Accessing: ${outerVariable}`;
  }

  return innerFunction; // Returning the inner function
}

const myInnerFunction = outerFunction();
console.log(myInnerFunction()); // Outputs: Accessing: Outer Value
```

In this example, even though the `outerFunction` has finished executing, the returned `innerFunction` retains access to `outerVariable` due to **closures**.

4. Create a nested function `calculate` where the outer function adds two numbers and the inner function multiplies the result by a third number.

Here's a function `calculate` with a nested function that performs the described operations:

### Code

```javascript
function calculate(num1, num2, multiplier) {
  // Outer function adds two numbers
  const sum = num1 + num2;

  // Nested function multiplies the sum by a third number
  function multiply() {
    return sum * multiplier;
  }

  // Call the nested function and return its result
  return multiply();
}

// Example usage
const result = calculate(5, 3, 4); // (5 + 3) * 4 = 32
console.log(`The result is: ${result}`);
```

---

### **Explanation**

1. **Outer Function (`calculate`)**:

   - Takes three parameters: `num1`, `num2`, and `multiplier`.
   - Adds `num1` and `num2` to get their sum.

2. **Inner Function (`multiply`)**:

   - Does not take any parameters but can access the `sum` and `multiplier` variables from the outer function due to **lexical scoping**.
   - Multiplies the `sum` by the `multiplier` and returns the result.

3. **Returning the Result**:
   - The outer function calls the nested function and returns its result.

---

### Output

For `num1 = 5`, `num2 = 3`, and `multiplier = 4`, the output will be:

```
The result is: 32
```

---

### Key Concepts

1. **Lexical Scoping**: The `multiply` function can access the `sum` and `multiplier` from the outer function.
2. **Encapsulation**: The nested function is encapsulated within the outer function and is not accessible directly from outside.

---

### **Intermediate Questions**

5. Explain **scope** in the context of nested functions. Write a function where the nested function modifies a variable from its outer function.

### **Scope in the Context of Nested Functions**

In JavaScript, **scope** refers to the accessibility of variables. When dealing with nested functions:

1. **Outer Scope**: Variables declared in the outer function are accessible to the nested (inner) function due to **lexical scoping**.
2. **Inner Scope**: Variables declared in the inner function are not accessible to the outer function.
3. **Global Scope**: Both the outer and inner functions can access variables declared in the global scope unless shadowed by local variables.

---

### **Example: Nested Function Modifying a Variable in the Outer Function**

Here’s a function where the nested function modifies a variable from its outer function:

```javascript
function outerFunction(initialValue) {
  let counter = initialValue; // Variable in the outer function

  function incrementCounter() {
    counter++; // Modifies the outer function's variable
    console.log(`Counter after increment: ${counter}`);
  }

  function resetCounter() {
    counter = 0; // Resets the counter to 0
    console.log(`Counter reset to: ${counter}`);
  }

  // Returning both inner functions for usage
  return { incrementCounter, resetCounter };
}

// Example usage
const counterFunctions = outerFunction(5);
counterFunctions.incrementCounter(); // Counter after increment: 6
counterFunctions.incrementCounter(); // Counter after increment: 7
counterFunctions.resetCounter(); // Counter reset to: 0
```

---

### **Explanation**

1. **Outer Function (`outerFunction`)**:

   - Declares a variable `counter` that starts with the value of `initialValue`.

2. **Nested Functions (`incrementCounter` and `resetCounter`)**:

   - Both functions access and modify the `counter` variable from the outer function:
     - `incrementCounter` increases its value by 1.
     - `resetCounter` resets its value to `0`.

3. **Returning the Nested Functions**:
   - The `outerFunction` returns an object containing the nested functions, allowing them to be called outside the outer function's scope while still maintaining access to `counter`.

---

### **Output**

For the above example:

```
Counter after increment: 6
Counter after increment: 7
Counter reset to: 0
```

---

### **Key Concepts Demonstrated**

- **Lexical Scoping**: The inner functions can access and modify the `counter` variable defined in the outer function.
- **Closures**: The inner functions retain access to the `counter` variable even after the `outerFunction` has finished executing.

6. Write a function `makeMultiplier` that contains a nested function `multiplier`. `makeMultiplier` should return the `multiplier` function to multiply any given number by a fixed value.  
   Example:

   ```javascript
   const double = makeMultiplier(2);
   console.log(double(5)); // Output: 10
   ```

Here’s the implementation of the `makeMultiplier` function, which contains a nested function `multiplier`. The `makeMultiplier` function returns the `multiplier` function to multiply any given number by a fixed value:

### Code

```javascript
function makeMultiplier(fixedValue) {
  // Nested function
  function multiplier(number) {
    return number * fixedValue; // Multiplies the given number by the fixed value
  }

  return multiplier; // Return the nested function
}

// Example usage
const double = makeMultiplier(2); // Create a multiplier that doubles numbers
console.log(double(5)); // Output: 10

const triple = makeMultiplier(3); // Create a multiplier that triples numbers
console.log(triple(5)); // Output: 15
```

---

### Explanation

1. **Outer Function (`makeMultiplier`)**:

   - Takes one parameter, `fixedValue`, which is the multiplier factor (e.g., 2 for doubling, 3 for tripling).
   - Returns the nested `multiplier` function.

2. **Nested Function (`multiplier`)**:

   - Takes one parameter, `number`, which is the number to be multiplied.
   - Multiplies `number` by the `fixedValue` from the outer function, using **lexical scoping** to access `fixedValue`.

3. **Usage**:
   - `makeMultiplier(2)` returns a `multiplier` function configured to double any number.
   - `makeMultiplier(3)` returns a `multiplier` function configured to triple any number.

---

### Output

```plaintext
10
15
```

---

### Key Concepts

- **Closures**: The returned `multiplier` function retains access to the `fixedValue` variable from its outer function even after `makeMultiplier` has finished executing.
- **Reusability**: This approach allows creating multiple multiplier functions (e.g., double, triple) with different fixed values.

7. Can nested functions be returned from their parent functions? Write an example demonstrating this concept.

Yes, nested functions can be returned from their parent functions in JavaScript. This is commonly used in concepts like closures, where the returned function retains access to variables from its parent scope.

Here’s an example:

```javascript
function createMultiplier(multiplier) {
  // Nested function
  return function (value) {
    return value * multiplier; // Accesses 'multiplier' from the parent function
  };
}

// Using the parent function
const double = createMultiplier(2); // Returns a function that multiplies by 2
const triple = createMultiplier(3); // Returns a function that multiplies by 3

// Testing the returned functions
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

### Explanation:

1. The `createMultiplier` function accepts a `multiplier` as an argument.
2. It returns a nested function that takes a `value` and multiplies it by the `multiplier`.
3. When `createMultiplier(2)` is called, it returns a function that doubles a number.
4. Similarly, `createMultiplier(3)` returns a function that triples a number.

5. Write a nested function `authenticate` where the outer function accepts a username and password, and the inner function checks if the password matches a predefined value.

Here’s an example of a nested function `authenticate` that achieves this:

```javascript
function authenticate(username, password) {
  const predefinedPassword = "secure123"; // Predefined password

  // Nested function to check the password
  function verify() {
    if (password === predefinedPassword) {
      return `Welcome, ${username}! Authentication successful.`;
    } else {
      return `Authentication failed for user: ${username}.`;
    }
  }

  // Call the nested function and return the result
  return verify();
}

// Testing the authenticate function
console.log(authenticate("Alice", "secure123")); // Output: Welcome, Alice! Authentication successful.
console.log(authenticate("Bob", "wrongpassword")); // Output: Authentication failed for user: Bob.
```

### How it works:

1. The `authenticate` function accepts `username` and `password` as arguments.
2. Inside, there’s a predefined password (`predefinedPassword`) for comparison.
3. The nested `verify` function checks whether the provided password matches the predefined one.
4. The `authenticate` function calls the `verify` function and returns the result.

This structure ensures the password verification logic is encapsulated within the `authenticate` function.

### **Advanced Questions**

9. Explain **closure** and how it relates to nested functions. Write a nested function that uses closure to maintain a counter across multiple calls.

### What is a Closure?

A **closure** in JavaScript is a feature where a function "remembers" the variables from its lexical scope even after the outer function has finished executing. Closures allow nested functions to retain access to their parent function's variables, enabling persistent states or encapsulated functionality.

### How Closures Relate to Nested Functions

Nested functions naturally create closures because they can access variables defined in their parent function's scope. When a nested function is returned or assigned to a variable, it retains a reference to the variables in its parent scope.

### Example: Counter Using Closure

Here’s a nested function that uses closure to maintain a counter:

```javascript
function createCounter() {
  let count = 0; // Variable in the outer function's scope

  // Nested function
  return function () {
    count++; // Increments the counter
    return count; // Returns the updated count
  };
}

// Create a counter instance
const counter = createCounter();

// Test the counter
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// Create another counter instance to show independent state
const anotherCounter = createCounter();
console.log(anotherCounter()); // Output: 1
console.log(anotherCounter()); // Output: 2
```

### Explanation:

1. **Outer Function (`createCounter`)**:

   - Declares the `count` variable.
   - Returns the nested function, which can access `count`.

2. **Nested Function**:

   - Updates the `count` variable each time it is called.
   - Retains access to `count` even after `createCounter` has finished execution, thanks to closure.

3. **Persistence Across Calls**:

   - Every time the returned function (`counter`) is called, it uses the same `count` variable, demonstrating closure.

4. **Independent Closures**:

   - Each call to `createCounter` creates a new instance of the closure with its own `count` variable. Thus, `counter` and `anotherCounter` maintain separate states.

5. Write a nested function that uses the `arguments` object of the outer function. How does it differ when using arrow functions for the nested function?

The `arguments` object is an array-like object that holds all the arguments passed to a function. In JavaScript, the `arguments` object is only available in **regular functions** (not arrow functions).

When you use arrow functions for nested functions, they do not have their own `arguments` object; instead, they inherit the `arguments` object from their **enclosing (non-arrow) function**.

### Example Using a Nested Function with `arguments`

```javascript
function outerFunction() {
  // Accessing arguments of the outer function
  console.log("Outer function arguments:", arguments);

  // Nested function (regular function)
  function innerFunction() {
    // Accessing outer function's arguments
    console.log("Inner function accessing outer arguments:", arguments[0]);
  }

  innerFunction();
}

// Calling the outer function
outerFunction("First Argument", "Second Argument");
```

#### Output:

```
Outer function arguments: [Arguments] { '0': 'First Argument', '1': 'Second Argument' }
Inner function accessing outer arguments: First Argument
```

---

### Example Using an Arrow Function for the Nested Function

```javascript
function outerFunction() {
  // Accessing arguments of the outer function
  console.log("Outer function arguments:", arguments);

  // Nested function (arrow function)
  const innerFunction = () => {
    // Arrow functions do not have their own arguments; they inherit from the outer function
    console.log("Arrow function accessing outer arguments:", arguments[0]);
  };

  innerFunction();
}

// Calling the outer function
outerFunction("First Argument", "Second Argument");
```

#### Output:

```
Outer function arguments: [Arguments] { '0': 'First Argument', '1': 'Second Argument' }
Arrow function accessing outer arguments: First Argument
```

---

### Key Differences Between Regular and Arrow Functions with `arguments`:

1. **Regular Function**:

   - The nested function can access its own `arguments` object if called with parameters.
   - If the `arguments` object is accessed without parameters, it references the outer function’s `arguments`.

2. **Arrow Function**:
   - Does **not** have its own `arguments` object.
   - Inherits the `arguments` object from the closest enclosing regular function.

This makes arrow functions useful when you need to work with the outer function's arguments explicitly, but unsuitable if you need a distinct `arguments` object for the inner function.

11. Implement a function `calculator` with two nested functions, `add` and `subtract`. The outer function should take an operation string (`"add"` or `"subtract"`) and return the result based on the chosen operation.

Here's the implementation of a `calculator` function with two nested functions, `add` and `subtract`:

```javascript
function calculator(operation) {
  // Nested function to add two numbers
  function add(a, b) {
    return a + b;
  }

  // Nested function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }

  // Returning a function based on the operation
  return function (a, b) {
    if (operation === "add") {
      return add(a, b); // Call the add function
    } else if (operation === "subtract") {
      return subtract(a, b); // Call the subtract function
    } else {
      throw new Error("Invalid operation. Use 'add' or 'subtract'.");
    }
  };
}

// Example usage:
const addOperation = calculator("add");
console.log(addOperation(10, 5)); // Output: 15

const subtractOperation = calculator("subtract");
console.log(subtractOperation(10, 5)); // Output: 5

try {
  const invalidOperation = calculator("multiply");
  console.log(invalidOperation(10, 5)); // This will throw an error
} catch (error) {
  console.error(error.message); // Output: Invalid operation. Use 'add' or 'subtract'.
}
```

### How It Works:

1. **Outer Function (`calculator`)**:

   - Accepts a string (`"add"` or `"subtract"`) to determine the operation.
   - Returns a function that performs the chosen operation.

2. **Nested Functions (`add` and `subtract`)**:

   - `add`: Adds two numbers.
   - `subtract`: Subtracts the second number from the first.

3. **Returned Function**:
   - Based on the `operation` string, it calls the appropriate nested function (`add` or `subtract`).
   - If the operation is invalid, it throws an error.

This structure separates concerns by keeping the logic for addition and subtraction encapsulated within the nested functions, and it provides flexibility to handle operations dynamically.

12. Write a nested function that demonstrates recursion. For example, calculate the power of a number using a nested recursive function.

Here’s a nested function implementation that demonstrates recursion to calculate the power of a number:

```javascript
function power(base, exponent) {
  // Nested recursive function
  function calculate(currentBase, currentExponent) {
    // Base case: any number raised to the power of 0 is 1
    if (currentExponent === 0) {
      return 1;
    }
    // Recursive case: multiply the base by the result of calculate for (exponent - 1)
    return currentBase * calculate(currentBase, currentExponent - 1);
  }

  // Call the nested function with the provided arguments
  return calculate(base, exponent);
}

// Example usage:
console.log(power(2, 3)); // Output: 8 (2^3 = 2 * 2 * 2)
console.log(power(5, 0)); // Output: 1 (5^0 = 1)
console.log(power(3, 4)); // Output: 81 (3^4 = 3 * 3 * 3 * 3)
```

### Explanation:

1. **Outer Function (`power`)**:

   - Takes the `base` and `exponent` as arguments.
   - Calls the nested function to compute the power.

2. **Nested Recursive Function (`calculate`)**:

   - Uses recursion to multiply the base by itself `exponent` times.
   - **Base Case**: Stops recursion when `currentExponent` is 0 and returns `1`.
   - **Recursive Case**: Calls itself with `currentExponent - 1` and multiplies the result by `currentBase`.

3. **Example**:

   - To calculate \(2^3\), the recursive calls are:
     ```
     calculate(2, 3) = 2 * calculate(2, 2)
     calculate(2, 2) = 2 * calculate(2, 1)
     calculate(2, 1) = 2 * calculate(2, 0)
     calculate(2, 0) = 1
     ```
     Final result: \(2 \times 2 \times 2 = 8\).

4. Explain **lexical scoping** in nested functions. Write a code example where a nested function accesses a variable defined in the parent function's scope but not the global scope.

### What is Lexical Scoping?

**Lexical scoping** means that the scope of a variable is determined by its position in the source code. In JavaScript, functions are executed using the scope in which they were defined, not the scope from where they are called.

When using nested functions, the inner function has access to:

- Its own scope.
- The scope of its parent functions.
- The global scope.

However, the inner function does **not** have access to variables outside of these scopes unless explicitly passed as arguments.

---

### Code Example: Lexical Scoping in Nested Functions

```javascript
const globalVar = "I am global";

function outerFunction() {
  const outerVar = "I am in the outer function";

  function innerFunction() {
    // Accessing the variable from the parent function's scope
    console.log(outerVar); // Output: I am in the outer function

    // Accessing the global variable
    console.log(globalVar); // Output: I am global
  }

  innerFunction();
}

outerFunction();
```

---

### Code Example: Inner Function Accessing Parent Scope but Not Global Scope

```javascript
function outerFunction() {
  const outerVar = "Outer Scope Variable";

  function innerFunction() {
    console.log(outerVar); // Can access outerVar from the parent scope
  }

  innerFunction();
}

// This will work because innerFunction is lexically scoped to outerFunction
outerFunction();

// Trying to access outerVar or innerFunction outside the outerFunction will fail
try {
  console.log(outerVar); // Error: outerVar is not defined
} catch (error) {
  console.log(error.message);
}

try {
  innerFunction(); // Error: innerFunction is not defined
} catch (error) {
  console.log(error.message);
}
```

---

### Explanation:

1. **Outer Function Scope**:

   - The variable `outerVar` is defined in the scope of `outerFunction`.
   - `innerFunction` has access to `outerVar` because of lexical scoping.

2. **Inner Function**:

   - Can access `outerVar` because it is within its lexical scope.
   - Cannot access variables defined outside of `outerFunction` unless they are in the global scope.

3. **Global Scope**:

   - The variable `globalVar` is accessible by both `outerFunction` and `innerFunction`.

4. **Encapsulation**:

   - Variables inside `outerFunction` (like `outerVar`) are not accessible from outside, showcasing how lexical scoping helps in encapsulation and data protection.

5. Can nested functions be used as callback functions? Write a function `processArray` that takes an array and a callback (nested function) to process each element.

Yes, nested functions can be used as callback functions in JavaScript. A callback function is simply a function passed as an argument to another function, which can then call the callback during its execution. You can define the callback as a nested function inside the parent function.

Here’s an example with a `processArray` function:

```javascript
function processArray(arr) {
  // Nested callback function
  function callback(element) {
    return element * 2; // Example: Multiply each element by 2
  }

  // Use Array.map to apply the callback to each element
  return arr.map(callback);
}

// Example usage:
const numbers = [1, 2, 3, 4];
const processed = processArray(numbers);
console.log(processed); // Output: [2, 4, 6, 8]
```

---

### Explanation:

1. **Outer Function (`processArray`)**:

   - Accepts an array `arr` as an argument.
   - Defines a **nested function** `callback` that processes each element of the array.

2. **Nested Callback Function (`callback`)**:

   - Multiplies each element of the array by 2.

3. **Using `Array.map`**:
   - The `callback` function is passed to `arr.map`, which applies it to every element of the array.

---

### Customizable Version:

You can also allow the user to pass a callback function as an argument and define a default callback function nested inside:

```javascript
function processArray(arr, callback) {
  // Default callback function
  function defaultCallback(element) {
    return element + 1; // Default: Add 1 to each element
  }

  // Use the provided callback or the default one
  return arr.map(callback || defaultCallback);
}

// Example usage:
const numbers = [1, 2, 3, 4];
console.log(processArray(numbers)); // Output: [2, 3, 4, 5] (default callback)
console.log(processArray(numbers, (num) => num * 3)); // Output: [3, 6, 9, 12] (custom callback)
```

---

### Key Points:

- Nested functions can serve as default callbacks.
- If you pass an external callback function, it overrides the nested function.
- This pattern is flexible and keeps your code modular.

15. Write a nested function `fetchData` where the outer function performs a setup and the inner function is an asynchronous function (using `async/await`) to fetch data from an API.

Here's an example of a `fetchData` function that demonstrates using a nested asynchronous function to fetch data from an API. The outer function is used for setup, such as defining the API URL, and the inner function performs the actual data fetching asynchronously:

```javascript
function fetchData(apiUrl) {
  // Outer function for setup
  async function fetchFromApi() {
    try {
      const response = await fetch(apiUrl); // Fetching data from the API
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json(); // Parsing the JSON response
      console.log("Fetched Data:", data);
      return data; // Return the fetched data
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return null; // Return null if there was an error
    }
  }

  // Call the nested async function and return the Promise
  return fetchFromApi();
}

// Example usage:
fetchData("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => {
    if (data) {
      console.log("Processed Data:", data); // Do something with the data
    }
  })
  .catch((error) => {
    console.error("Unhandled Error:", error.message);
  });
```

---

### How It Works:

1. **Outer Function (`fetchData`)**:

   - Accepts the API URL as an argument for setup.
   - Defines the inner asynchronous function.

2. **Inner Function (`fetchFromApi`)**:

   - Uses `fetch` to send a request to the API.
   - Handles the response using `await` to parse it as JSON.
   - Includes error handling with `try-catch` to gracefully handle network or API errors.

3. **Returning the Promise**:
   - The `fetchFromApi` function is called inside `fetchData`, and since it’s `async`, it returns a `Promise`.
   - The returned `Promise` can be handled using `.then()` and `.catch()` when calling `fetchData`.

---

### Example Output:

For the given API URL (`https://jsonplaceholder.typicode.com/posts/1`), the output might look like:

```
Fetched Data: { userId: 1, id: 1, title: "some title", body: "some body content" }
Processed Data: { userId: 1, id: 1, title: "some title", body: "some body content" }
```
