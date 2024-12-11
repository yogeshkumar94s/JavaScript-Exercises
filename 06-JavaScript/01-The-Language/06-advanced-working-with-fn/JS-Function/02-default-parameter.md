### **Default Parameters in JavaScript**

Default parameters allow you to set default values for function parameters. If no value is passed for that parameter when the function is called, the default value is used.

---

### **Syntax**

```javascript
function functionName(param1 = defaultValue) {
  // Function body
}
```

---

### **Examples**

#### 1. Basic Example

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
```

---

#### 2. Default Parameter Based on Another Parameter

You can use one parameter to define the default value of another.

```javascript
function calculatePrice(price, tax = price * 0.1) {
  return price + tax;
}

console.log(calculatePrice(100)); // Output: 110
console.log(calculatePrice(100, 20)); // Output: 120
```

---

#### 3. Functions as Default Parameters

You can use a function as a default parameter.

```javascript
function generateID() {
  return Math.floor(Math.random() * 1000);
}

function createUser(name = "Anonymous", id = generateID()) {
  return { name, id };
}

console.log(createUser()); // Output: { name: 'Anonymous', id: some_random_number }
console.log(createUser("Alice")); // Output: { name: 'Alice', id: some_random_number }
```

---

#### 4. Avoiding `undefined` for Missing Arguments

Before default parameters, you had to use a conditional inside the function.

```javascript
// Without default parameters
function greet(name) {
  name = name || "Guest"; // Fallback if no value is provided
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
```

With default parameters, this becomes cleaner:

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
```

---

#### **Key Points**

1. Default parameters are only used if the argument is `undefined`.

   ```javascript
   function example(x = 10) {
     console.log(x);
   }

   example(undefined); // 10
   example(null); // null (not default because null is a value)
   ```

2. You can combine default parameters with destructuring.

   ```javascript
   function displayUser({ name = "Guest", age = 18 } = {}) {
     console.log(`Name: ${name}, Age: ${age}`);
   }

   displayUser(); // Output: Name: Guest, Age: 18
   displayUser({ name: "Alice" }); // Output: Name: Alice, Age: 18
   ```

## Questions focused on **default parameters** in JavaScript.

---

### **Basic Questions**

1. What are default parameters in JavaScript? Provide a simple example.

### **Default Parameters in JavaScript**

Default parameters allow you to initialize a function's parameters with default values if no argument is passed or if `undefined` is explicitly passed for that parameter. They were introduced in ES6.

### **Syntax**:

```javascript
function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // Function body
}
```

### **Example**:

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

// Example calls
greet(); // No argument passed, default value is used
greet("Alice"); // Argument passed, overrides default value
```

### **Output**:

```
Hello, Guest!
Hello, Alice!
```

### **Explanation**:

1. **Without Argument**: When the function is called without passing a `name`, it uses the default value `"Guest"`.
2. **With Argument**: When an argument (e.g., `"Alice"`) is passed, it overrides the default value.

### **Key Points**:

- Default parameters work with `undefined`. If `null` is passed, the default is not used.
- Default values can be expressions or even the result of function calls.

Example with expressions:

```javascript
function add(a = 0, b = a * 2) {
  return a + b;
}

console.log(add()); // Output: 0 (0 + 0*2)
console.log(add(3)); // Output: 9 (3 + 3*2)
console.log(add(3, 4)); // Output: 7 (3 + 4)
```

2. Rewrite the following function to include a default parameter for `name` with the value `'Guest'`:

   ```javascript
   function greet(name) {
     return `Hello, ${name}!`;
   }
   ```

Here is the rewritten function with a default parameter for `name`:

### Updated Code:

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Example usage:
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!
```

### Changes Made:

- Added a default value of `'Guest'` to the `name` parameter in the function definition: `name = 'Guest'`.
- Now, if the function is called without passing a `name`, it will use the default value.

3. What happens if a function with a default parameter is called without providing an argument for that parameter? Demonstrate with code.

If a function with a default parameter is called without providing an argument for that parameter, the parameter is initialized with its default value.

### Example Code:

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Call the function without an argument
console.log(greet()); // Default parameter is used: "Guest"

// Call the function with an argument
console.log(greet("Alice")); // Argument overrides the default: "Alice"
```

### Output:

```
Hello, Guest!
Hello, Alice!
```

### Explanation:

1. **When Called Without Argument**:
   - The parameter `name` takes its default value, `"Guest"`.
2. **When Called With Argument**:
   - The provided argument (`"Alice"`) overrides the default value.

---

### **Intermediate Questions**

4. Create a function `calculateArea` that accepts two parameters: `length` and `width`. Assign a default value of 10 to `width` and calculate the area. Test the function with:

   - Only one argument
   - Two arguments

Here’s how you can implement the `calculateArea` function with a default value for `width`:

### Code:

```javascript
function calculateArea(length, width = 10) {
  return length * width;
}

// Test cases:
// Only one argument
console.log(calculateArea(5)); // Uses default width: 5 * 10 = 50

// Two arguments
console.log(calculateArea(5, 20)); // Overrides default width: 5 * 20 = 100
```

### Explanation:

1. **Default Parameter**:
   - The `width` parameter is assigned a default value of `10`.
   - If no `width` is provided, it defaults to `10`.
2. **Test Cases**:
   - When only one argument (`5`) is passed, the default value of `width` is used, resulting in an area of `50`.
   - When two arguments (`5` and `20`) are passed, the provided value (`20`) overrides the default, and the area is calculated as `100`.

### Output:

```
50
100
```

5. Can default parameters use the value of a previously defined parameter in the same function? Write an example to test this behavior.

Yes, default parameters can use the value of a previously defined parameter in the same function. The parameters are evaluated in order, so earlier parameters can be referenced by later ones.

### Example:

```javascript
function calculateTotal(price, quantity = 1, discount = price * 0.1) {
  return price * quantity - discount;
}

// Test cases:
// Default quantity and discount
console.log(calculateTotal(100)); // (100 * 1) - (100 * 0.1) = 90

// Custom quantity, default discount
console.log(calculateTotal(100, 2)); // (100 * 2) - (100 * 0.1) = 190

// Custom quantity and discount
console.log(calculateTotal(100, 2, 30)); // (100 * 2) - 30 = 170
```

### Explanation:

1. **`price`**: Required parameter, used to calculate `discount`.
2. **`quantity`**: Defaults to `1` if not provided.
3. **`discount`**: Defaults to `price * 0.1`, referencing the value of `price`.

### Output:

```
90
190
170
```

6. Rewrite the following function to use default parameters instead of checking for `undefined` inside the function body:
   ```javascript
   function multiply(a, b) {
     b = b === undefined ? 1 : b;
     return a * b;
   }
   ```

You can rewrite the function to use default parameters directly, eliminating the need for the `undefined` check inside the function body:

### Updated Code:

```javascript
function multiply(a, b = 1) {
  return a * b;
}

// Test cases:
console.log(multiply(5)); // Uses default value for `b`: 5 * 1 = 5
console.log(multiply(5, 3)); // Overrides default value: 5 * 3 = 15
```

### Explanation:

- The default value for `b` is set to `1` in the function definition (`b = 1`).
- If `b` is not provided when the function is called, it will automatically take the default value of `1`.
- This removes the need for the conditional check inside the function, simplifying the code.

### Output:

```
5
15
```

---

### **Advanced Questions**

7. Write a function `createUser` that takes three parameters: `name`, `age`, and `isAdmin`, with default values of `'Anonymous'`, `0`, and `false`, respectively. Use destructuring to pass arguments as an object.

Here's the `createUser` function using destructuring to handle arguments passed as an object:

### Code:

```javascript
function createUser({ name = "Anonymous", age = 0, isAdmin = false } = {}) {
  return {
    name,
    age,
    isAdmin,
  };
}

// Example Usage:
const user1 = createUser({ name: "Alice", age: 25, isAdmin: true });
console.log(user1); // { name: 'Alice', age: 25, isAdmin: true }

const user2 = createUser({ name: "Bob", age: 30 });
console.log(user2); // { name: 'Bob', age: 30, isAdmin: false }

const user3 = createUser();
console.log(user3); // { name: 'Anonymous', age: 0, isAdmin: false }
```

### Explanation:

1. The function takes a single object as its parameter.
2. Destructuring is used to extract `name`, `age`, and `isAdmin` from the input object, assigning default values if they are not provided.
3. The function returns an object containing the provided or default values.

The default value for the parameter is an empty object (`{}`), ensuring the function works even if no arguments are passed.

8. Explain the difference between `undefined` and `null` when used with default parameters. Write a function and test it by passing both `undefined` and `null` as arguments.

### Explanation of `undefined` vs. `null` with Default Parameters:

1. **`undefined`:**

   - When a parameter is explicitly passed as `undefined`, the default parameter value is used.
   - This behavior aligns with JavaScript's rules for default values.

2. **`null`:**
   - When a parameter is explicitly passed as `null`, it is treated as a valid value.
   - The default parameter value is **not** used, and `null` is assigned to the parameter.

### Example Code:

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Test cases
console.log(greet()); // Default value is used: "Hello, Guest!"
console.log(greet(undefined)); // Default value is used: "Hello, Guest!"
console.log(greet(null)); // Explicit value 'null': "Hello, null!"
console.log(greet("Alice")); // Provided value: "Hello, Alice!"
```

### Key Observations:

1. When `undefined` is passed or the parameter is omitted, the default value (`'Guest'`) is used.
2. When `null` is passed, the function uses `null` directly, treating it as a valid value.

This distinction is important in scenarios where you want to differentiate between "no value provided" (`undefined`) and "intentionally empty value" (`null`).

9. Can a default parameter reference another function or variable declared outside the function? Write an example where a default parameter is set to the result of another function.

Yes, a default parameter can reference another function or variable declared outside the function. The default parameter is evaluated at runtime, so it can call functions or use variables accessible in its scope.

### Example

```javascript
// A helper function to generate a default name
function generateDefaultName() {
  return "Guest-" + Math.floor(Math.random() * 1000);
}

// Function using a default parameter referencing the helper function
function createUser(name = generateDefaultName(), age = 18) {
  return { name, age };
}

// Example usage
const user1 = createUser(); // Name will be generated dynamically
console.log(user1);

const user2 = createUser("Alice", 25); // Name and age are provided explicitly
console.log(user2);

const user3 = createUser(undefined, 30); // Default name, explicit age
console.log(user3);
```

### Explanation:

1. The `generateDefaultName` function generates a random name.
2. The `name` parameter in `createUser` defaults to the result of `generateDefaultName` when no value is provided or `undefined` is passed.
3. Default values are calculated at the time of the function call, ensuring the logic is executed dynamically.

### Output:

The output will vary because the `generateDefaultName` function generates a random name, e.g.:

```javascript
{ name: 'Guest-487', age: 18 }
{ name: 'Alice', age: 25 }
{ name: 'Guest-102', age: 30 }
```

10. Write a recursive function `factorial` that uses a default parameter to specify the base case (default to 1). Ensure it works correctly when the base case is overridden.

Here's the recursive `factorial` function with a default parameter for the base case:

### Code:

```javascript
function factorial(n, base = 1) {
  if (n <= base) {
    return 1; // Base case: factorial(base) = 1
  }
  return n * factorial(n - 1, base);
}

// Example usage:

console.log(factorial(5)); // Default base = 1: 5 * 4 * 3 * 2 * 1 = 120
console.log(factorial(5, 2)); // Base = 2: 5 * 4 * 3 = 60
console.log(factorial(3)); // Default base = 1: 3 * 2 * 1 = 6
console.log(factorial(3, 3)); // Base = 3: factorial(3, 3) = 1
```

### Explanation:

1. **Parameters:**

   - `n`: The number whose factorial is to be calculated.
   - `base`: The base case for the recursion. Defaults to `1` if not provided.

2. **Recursive Logic:**

   - If `n` is less than or equal to `base`, the function returns `1`.
   - Otherwise, it multiplies `n` by the result of `factorial(n - 1, base)`.

3. **Customization:**
   - By overriding the `base` parameter, you can change the behavior of the base case. For example, setting `base = 2` calculates a "partial factorial" starting at `2` instead of `1`.

### Output:

For the given inputs, the function works correctly with both default and overridden base cases.
