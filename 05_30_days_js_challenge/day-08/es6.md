# es6 features

ES6 (ECMAScript 2015) introduced many new features and improvements to JavaScript. Here are some of the key features along with examples to help you understand and use them effectively:

## template literals

Template literals, introduced in ES6, are a new way to create strings in JavaScript. They provide a more powerful and flexible syntax compared to traditional string literals. Here are the key features and usage examples of template literals:

Syntax:
Template literals are enclosed by backticks (`) instead of single (') or double (") quotes.

Key Features:--

1. Multi-line Strings:

Template literals allow for the creation of multi-line strings without the need for escape characters.

2. Expression Interpolation:

You can embed expressions inside template literals using ${} syntax. This makes it easy to include variables and expressions within strings.

3. Tagged Templates:

Template literals can be used with a function known as a "tag" to perform more advanced operations on the string, such as escaping HTML, formatting text, or other custom processing.

### Examples

1. Multi-line Strings

With template literals, you can create strings that span multiple lines easily.

```javascript
const multiLineString = `This is a string
that spans multiple
lines.`;

console.log(multiLineString);
// Output:
// This is a string
// that spans multiple
// lines.
```

2. Expression Interpolation

You can embed variables and expressions directly within template literals using ${}.

```javascript
const name = "Alice";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting);
// Output: Hello, my name is Alice and I am 30 years old.

const a = 5;
const b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
// Output: The sum of 5 and 3 is 8.
```

3. Nested Template Literals

You can nest template literals inside other template literals.

```javascript
const user = {
  name: "Alice",
  details: {
    age: 30,
    city: "Wonderland",
  },
};

const userInfo = `User Info:
Name: ${user.name}
Age: ${user.details.age}
City: ${user.details.city}`;

console.log(userInfo);
// Output:
// User Info:
// Name: Alice
// Age: 30
// City: Wonderland
```

4. Tagged Templates

A tagged template allows you to modify the output of a template literal by passing it to a function. The function receives the string parts and the values of the interpolated expressions as arguments.

```javascript
// Define a tag function
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    return `${result}${string}<mark>${values[i] || ""}</mark>`;
  }, "");
}

const name = "Alice";
const age = 30;
const city = "Wonderland";

const taggedOutput = highlight`Name: ${name}, Age: ${age}, City: ${city}`;

console.log(taggedOutput);
// Output: Name: <mark>Alice</mark>, Age: <mark>30</mark>, City: <mark>Wonderland</mark>
```

## Destructuring

Destructuring is a convenient way to extract values from arrays or properties from objects into distinct variables. This feature, introduced in ES6, makes working with complex data structures more straightforward and readable.

### Array Destructuring

Array destructuring allows you to unpack values from arrays into separate variables.

1. Basic Example...

```javascript
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```

2. Skipping Elements

You can skip elements by leaving gaps in the destructuring pattern.

```javascript
const numbers = [1, 2, 3, 4];
const [first, , third] = numbers;

console.log(first); // Output: 1
console.log(third); // Output: 3
```

3. Default Values

You can provide default values that will be used if the array elements are undefined.

```javascript
const numbers = [1];
const [a, b = 2] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
```

4. Swapping Variables

Destructuring can be used to swap the values of variables.

```javascript
let x = 1;
let y = 2;

[x, y] = [y, x];

console.log(x); // Output: 2
console.log(y); // Output: 1
```

### Object Destructuring

Object destructuring allows you to unpack properties from objects into separate variables.

1. Basic Example

```javascript
const person = {
  name: "Alice",
  age: 30,
};

const { name, age } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 30
```

2. Renaming Variables

You can rename variables while destructuring.

```javascript
const person = {
  name: "Alice",
  age: 30,
};

const { name: personName, age: personAge } = person;

console.log(personName); // Output: Alice
console.log(personAge); // Output: 30
```

3. Default Values

You can provide default values for object properties.

```javascript
const person = {
  name: "Alice",
};

const { name, age = 25 } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 25
```

4. Nested Objects

You can destructure nested objects easily.

```javascript
const person = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};

const {
  name,
  address: { city, zip },
} = person;

console.log(name); // Output: Alice
console.log(city); // Output: Wonderland
console.log(zip); // Output: 12345
```

### Function Parameters

Destructuring can be used directly in function parameters to extract specific values.

1. Array Destructuring in Functions

```javascript
function sum([a, b]) {
  return a + b;
}

console.log(sum([1, 2])); // Output: 3
```

2. Object Destructuring in Functions

```javascript
function greet({ name, age }) {
  return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet({ name: "Alice", age: 30 })); // Output: Hello, Alice! You are 30 years old.
```

### Rest in Destructuring

The rest syntax (...) can be used to collect the remaining elements in an array or the remaining properties in an object.

1. Array Rest Destructuring

```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

2. Object Rest Destructuring

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
};

const { name, ...rest } = person;

console.log(name); // Output: Alice
console.log(rest); // Output: { age: 30, city: "Wonderland" }
```

---

## Spread and rest operators

The spread and rest operators, both represented by ..., are versatile features introduced in ES6 that enhance how we handle arrays and objects in JavaScript. Their functionality depends on the context in which they are used. Let's explore each operator with examples.

### Spread Operator

The spread operator allows an iterable (like an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or to spread the properties of an object.

1. Array Expansion

The spread operator can be used to expand an array into individual elements.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combining arrays
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Copying an array
const copiedArr = [...arr1];
console.log(copiedArr); // Output: [1, 2, 3]
```

2. Function Arguments

The spread operator can be used to pass elements of an array as arguments to a function.

```javascript
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;

console.log(sum(...numbers)); // Output: 6
```

3. Object Expansion

The spread operator can be used to spread the properties of one object into another.

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Combining objects
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Copying an object
const copiedObj = { ...obj1 };
console.log(copiedObj); // Output: { a: 1, b: 2 }
```

### Rest Operator

The rest operator allows you to represent an indefinite number of elements as an array. It is used in function parameters and destructuring assignments to collect the remaining elements/properties into an array/object.

1. Function Parameters

The rest operator can be used to handle functions with a variable number of arguments.

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

2. Array Destructuring

The rest operator can be used to collect the remaining elements of an array into a new array.

```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

3. Object Destructuring

The rest operator can be used to collect the remaining properties of an object into a new object.

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
  occupation: "Engineer",
};

const { name, age, ...rest } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 30
console.log(rest); // Output: { city: "Wonderland", occupation: "Engineer" }
```

---

## Default parameter

Default parameters in JavaScript allow you to initialize function parameters with default values if no value or undefined is passed. This feature, introduced in ES6, makes your functions more robust and reduces the need for additional checks and assignments within the function body.

### Syntax and Usage

To use default parameters, you simply assign a default value to a parameter in the function definition.

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!
```

### Key Points

1. Default Values:

If a parameter is not provided or is undefined, the default value will be used.

2. Evaluation of Default Values:

Default values can be expressions, including function calls and operations.

3. Order of Parameters:

Parameters with default values do not need to be at the end of the parameter list, but it's common practice to place them at the end to avoid unintended results.

4. undefined vs. null:

Default values are only applied when a parameter is undefined. If a parameter is explicitly passed as null, the default value will not be used.

### Examples

1. Basic Default Parameters

```javascript
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // Output: 5 (5 * 1)
console.log(multiply(5, 2)); // Output: 10 (5 * 2)
```

2. Default Parameters with Expressions

Default values can be the result of expressions or even other function calls.

```javascript
function add(a, b = a) {
  return a + b;
}

console.log(add(3)); // Output: 6 (3 + 3)
console.log(add(3, 2)); // Output: 5 (3 + 2)
```

3. Using Functions as Default Values

```javascript
function getDefault() {
  return 5;
}

function add(a, b = getDefault()) {
  return a + b;
}

console.log(add(3)); // Output: 8 (3 + 5)
console.log(add(3, 2)); // Output: 5 (3 + 2)
```

4. Avoiding Issues with undefined

If a parameter is explicitly passed as undefined, the default value will still be used.

```javascript
function sayHello(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(sayHello(undefined)); // Output: Hello, Guest!
console.log(sayHello(null)); // Output: Hello, null!
```

## Enhance object literales

Enhanced object literals, introduced in ES6, make it easier and more concise to create and work with objects in JavaScript. These enhancements include shorthand property names, method definitions, computed property names, and more.

### Key Features

1. Shorthand Property Names:

When the property name and the variable name are the same, you can omit the property name.

```javascript
const name = "Alice";
const age = 30;

const person = {
  name, // Shorthand for name: name
  age, // Shorthand for age: age
};

console.log(person); // Output: { name: 'Alice', age: 30 }
```

2. Shorthand Method Names:

You can define methods in an object without using the function keyword.

```javascript
const person = {
  name: "Alice",
  greet() {
    // Shorthand method definition
    return `Hello, my name is ${this.name}`;
  },
};

console.log(person.greet()); // Output: Hello, my name is Alice
```

3. Computed Property Names:

You can use expressions as property names enclosed in square brackets.

```javascript
const propName = "age";
const person = {
  name: "Alice",
  [propName]: 30, // Computed property name
};

console.log(person); // Output: { name: 'Alice', age: 30 }
```

4. Object Property Assignment:

You can create a new object by copying properties from existing objects using the spread operator.

```javascript
const person = {
  name: "Alice",
  age: 30,
};

const updatedPerson = {
  ...person,
  city: "Wonderland", // Adding new property
};

console.log(updatedPerson); // Output: { name: 'Alice', age: 30, city: 'Wonderland' }
```

### Examples

1. Shorthand Property Names

```javascript
const firstName = "John";
const lastName = "Doe";

const user = {
  firstName, // Shorthand for firstName: firstName
  lastName, // Shorthand for lastName: lastName
};

console.log(user); // Output: { firstName: 'John', lastName: 'Doe' }
```

2. Shorthand Method Names

```javascript
const calculator = {
  add(a, b) {
    // Shorthand method definition
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

console.log(calculator.add(2, 3)); // Output: 5
console.log(calculator.subtract(5, 2)); // Output: 3
```

3. Computed Property Names

```javascript
const dynamicKey = "dynamicValue";
const obj = {
  [dynamicKey]: "This is dynamic!", // Computed property name
};

console.log(obj); // Output: { dynamicValue: 'This is dynamic!' }
```

4. Using Spread Operator for Objects

```javascript
const person = {
  name: "Alice",
  age: 30,
};

const additionalInfo = {
  city: "Wonderland",
  occupation: "Engineer",
};

const completePerson = {
  ...person, // Copy properties from person
  ...additionalInfo, // Copy properties from additionalInfo
  country: "Neverland", // Add new property
};

console.log(completePerson);
// Output: { name: 'Alice', age: 30, city: 'Wonderland', occupation: 'Engineer', country: 'Neverland' }
```

### Combining Enhanced Object Literal Features

Here's an example that combines shorthand property names, shorthand method names, computed property names, and the spread operator:

```javascript
const firstName = "John";
const lastName = "Doe";
const dynamicKey = "occupation";

const user = {
  firstName, // Shorthand property name
  lastName,
  [dynamicKey]: "Engineer", // Computed property name
  greet() {
    // Shorthand method name
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am an ${this.occupation}.`;
  },
};

const additionalInfo = {
  age: 28,
  country: "Neverland",
};

const completeUser = {
  ...user, // Spread operator to copy properties from user
  ...additionalInfo, // Spread operator to copy properties from additionalInfo
};

console.log(completeUser.greet()); // Output: Hello, my name is John Doe and I am an Engineer.
console.log(completeUser);
// Output: { firstName: 'John', lastName: 'Doe', occupation: 'Engineer', greet: [Function: greet], age: 28, country: 'Neverland' }
```
