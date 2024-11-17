# modules in JavaScript

In JavaScript, especially when using ES6 (ECMAScript 2015) and later, modules allow you to organize your code into separate files and import/export functionality across these files. This makes your code more modular, reusable, and easier to maintain. Let's go through the basics of creating and exporting modules.

### Creating and Exporting Modules

1. **Creating a Module**:

   - You can create a module by writing a JavaScript file and exporting variables, functions, or classes from it.

2. **Exporting**:
   - There are two main types of exports: named exports and default exports.

### Named Exports

1. **Exporting Variables or Functions**:

   - You can export multiple variables or functions from a module.

   ```javascript
   // math.js
   export const add = (a, b) => a + b;
   export const subtract = (a, b) => a - b;
   ```

2. **Importing Named Exports**:

   - You can import the named exports using the `import` statement.

   ```javascript
   // main.js
   import { add, subtract } from "./math.js";

   console.log(add(2, 3)); // Output: 5
   console.log(subtract(5, 2)); // Output: 3
   ```

### Default Exports

1. **Exporting a Default Variable or Function**:

   - You can export a single default export from a module.

   ```javascript
   // greet.js
   const greet = (name) => `Hello, ${name}!`;
   export default greet;
   ```

2. **Importing Default Exports**:

   - You can import the default export using the `import` statement without curly braces.

   ```javascript
   // main.js
   import greet from "./greet.js";

   console.log(greet("Alice")); // Output: Hello, Alice!
   ```

### Combining Named and Default Exports

1. **Module with Both Named and Default Exports**:

   ```javascript
   // utils.js
   export const square = (x) => x * x;
   export const cube = (x) => x * x * x;
   const utils = {
     square,
     cube,
   };
   export default utils;
   ```

2. **Importing Both Named and Default Exports**:

   ```javascript
   // main.js
   import utils, { square, cube } from "./utils.js";

   console.log(square(3)); // Output: 9
   console.log(cube(2)); // Output: 8
   console.log(utils.square(4)); // Output: 16
   ```

### Practical Example

**1. Creating a Math Module (math.js)**

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
```

**2. Importing and Using the Math Module (main.js)**

```javascript
// main.js
import { add, subtract, multiply, divide } from "./math.js";

console.log(add(10, 5)); // Output: 15
console.log(subtract(10, 5)); // Output: 5
console.log(multiply(10, 5)); // Output: 50
console.log(divide(10, 5)); // Output: 2
console.log(divide(10, 0)); // Output: Cannot divide by zero
```

### Task 1: Create a module that exports a function to add two numbers, import, and use this module in another script.

**1. Create the `math.js` module:**

```javascript
// math.js
export const add = (a, b) => a + b;
```

**2. Create the `main.js` script to import and use the `add` function:**

```javascript
// main.js
import { add } from "./math.js";

const result = add(5, 3);
console.log(`The result of adding 5 and 3 is: ${result}`); // Output: The result of adding 5 and 3 is: 8
```

### Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

**1. Create the `person.js` module:**

```javascript
// person.js
const person = {
  name: "John Doe",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
  haveBirthday() {
    this.age += 1;
    return `Happy Birthday! I am now ${this.age} years old.`;
  },
};

export default person;
```

**2. Create the `main.js` script to import and use the `person` object:**

```javascript
// main.js
import person from "./person.js";

console.log(person.greet()); // Output: Hello, my name is John Doe and I am 30 years old.
console.log(person.haveBirthday()); // Output: Happy Birthday! I am now 31 years old.
console.log(person.greet()); // Output: Hello, my name is John Doe and I am 31 years old.
```

### Running the Scripts

To run these scripts, make sure you have a module-compatible environment, such as a modern web browser or Node.js with ES module support.

**Using Node.js:**

1. Create the files `math.js`, `person.js`, and `main.js` with the provided code.
2. Run the `main.js` file using Node.js:

```sh
node main.js
```

**Using HTML and a Web Browser:**

1. Create the files `math.js`, `person.js`, and `main.js` with the provided code.
2. Create an `index.html` file to include the `main.js` script:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Modules</title>
  </head>
  <body>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

3. Open the `index.html` file in a modern web browser.

### Task 1: Create a module that exports multiple functions using named exports, import and use these functions in another script.

**1. Create the `mathUtils.js` module:**

```javascript
// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
```

**2. Create the `main.js` script to import and use the functions:**

```javascript
// main.js
import { add, subtract, multiply, divide } from "./mathUtils.js";

const a = 10;
const b = 5;

console.log(`Add: ${add(a, b)}`); // Output: Add: 15
console.log(`Subtract: ${subtract(a, b)}`); // Output: Subtract: 5
console.log(`Multiply: ${multiply(a, b)}`); // Output: Multiply: 50
console.log(`Divide: ${divide(a, b)}`); // Output: Divide: 2
```

### Task 2: Create a module that exports a single function using default export, import and use this function in another script.

**1. Create the `greet.js` module:**

```javascript
// greet.js
const greet = (name) => `Hello, ${name}!`;
export default greet;
```

**2. Create the `main.js` script to import and use the `greet` function:**

```javascript
// main.js
import greet from "./greet.js";

const name = "Alice";
console.log(greet(name)); // Output: Hello, Alice!
```

### Running the Scripts

To run these scripts, you need a module-compatible environment, such as a modern web browser or Node.js with ES module support.

**Using Node.js:**

1. Create the files `mathUtils.js`, `greet.js`, and `main.js` with the provided code.
2. Run the `main.js` file using Node.js:

```sh
node main.js
```

**Using HTML and a Web Browser:**

1. Create the files `mathUtils.js`, `greet.js`, and `main.js` with the provided code.
2. Create an `index.html` file to include the `main.js` script:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Modules</title>
  </head>
  <body>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

3. Open the `index.html` file in a modern web browser.

---

## Importing entire module

### Creating the Module

**1. Create the `mathUtils.js` module:**

```javascript
// mathUtils.js
export const PI = 3.14159;
export const E = 2.718;

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
```

### Importing the Entire Module

**2. Create the `main.js` script to import and use the entire module:**

```javascript
// main.js
import * as mathUtils from "./mathUtils.js";

const a = 10;
const b = 5;

console.log(`PI: ${mathUtils.PI}`); // Output: PI: 3.14159
console.log(`E: ${mathUtils.E}`); // Output: E: 2.718

console.log(`Add: ${mathUtils.add(a, b)}`); // Output: Add: 15
console.log(`Subtract: ${mathUtils.subtract(a, b)}`); // Output: Subtract: 5
console.log(`Multiply: ${mathUtils.multiply(a, b)}`); // Output: Multiply: 50
console.log(`Divide: ${mathUtils.divide(a, b)}`); // Output: Divide: 2
```

### Running the Scripts

To run these scripts, you need a module-compatible environment, such as a modern web browser or Node.js with ES module support.

**Using Node.js:**

1. Create the files `mathUtils.js` and `main.js` with the provided code.
2. Run the `main.js` file using Node.js:

```sh
node main.js
```

**Using HTML and a Web Browser:**

1. Create the files `mathUtils.js` and `main.js` with the provided code.
2. Create an `index.html` file to include the `main.js` script:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Modules</title>
  </head>
  <body>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

3. Open the `index.html` file in a modern web browser.

---

## Third-party module

### Task 1: Install and Use Lodash

#### Step 1: Initialize a Node.js Project

First, you need to initialize a Node.js project if you haven't already.

```sh
npm init -y
```

#### Step 2: Install Lodash

Install Lodash using npm:

```sh
npm install lodash
```

#### Step 3: Create a Script to Use Lodash

Create a script `lodashExample.js`:

```javascript
// lodashExample.js
const _ = require("lodash");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = _.filter(numbers, (num) => num % 2 === 0);

console.log("Even numbers:", evens);
```

#### Step 4: Run the Script

Run the script using Node.js:

```sh
node lodashExample.js
```

### Task 2: Install and Use Axios

#### Step 1: Install Axios

Install Axios using npm:

```sh
npm install axios
```

#### Step 2: Create a Script to Use Axios

Create a script `axiosExample.js`:

```javascript
// axiosExample.js
const axios = require("axios");

async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("Data:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```

#### Step 3: Run the Script

Run the script using Node.js:

```sh
node axiosExample.js
```

### Summary

1. **Installing Lodash:**

   - Initialize a project: `npm init -y`
   - Install Lodash: `npm install lodash`
   - Use Lodash in a script: `lodashExample.js`

2. **Installing Axios:**
   - Install Axios: `npm install axios`
   - Use Axios in a script to make a network request: `axiosExample.js`
