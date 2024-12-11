## Object Destructuring

## Basic Understanding

### 1. **What is object destructuring in JavaScript?**

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// Destructuring
const { name, age, city } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 30
console.log(city); // Output: New York
```

**Object destructuring** is a JavaScript syntax that allows you to extract properties from an object and assign them to variables directly. This can make your code more concise and readable.

### 2. **How do you destructure properties from an object?**

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// Destructuring
const { name, age, city } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 30
console.log(city); // Output: New York
```

**Steps to destructure properties:**

1. **Create a destructuring assignment:** Use curly braces `{}` on the left-hand side of an assignment to create a destructuring pattern.
2. **Match property names:** Inside the curly braces, list the variable names you want to use to hold the extracted values.
3. **Assign the object:** On the right-hand side, assign the object you want to destructure.

**Key points:**

- The variable names must match the property names of the object.
- You can destructure any number of properties from an object.
- The destructured variables will be assigned the values of the corresponding properties.

### 3. **What is the syntax for destructuring nested objects?**

```javascript
const user = {
  name: "Alice",
  address: {
    street: "Main Street",
    city: "New York",
  },
};

// Destructuring nested properties
const {
  name,
  address: { street, city },
} = user;

console.log(name); // Output: Alice
console.log(street); // Output: Main Street
console.log(city); // Output: New York
```

**To destructure nested objects:**

1. **Nested Destructuring:** Use nested curly braces to destructure properties within nested objects.
2. **Property Renaming:** You can rename properties during destructuring by using a different variable name. For example: `const { name: userName } = user;`

**Example with Renaming:**

```javascript
const user = {
  firstName: "Alice",
  lastName: "Johnson",
};

const { firstName: name, lastName: surname } = user;

console.log(name); // Output: Alice
console.log(surname); // Output: Johnson
```

## Advanced Usage

### 4. **How can you use default values for destructured properties?**

```javascript
const person = {
  name: "Alice",
  age: 30,
};

// Destructuring with default values
const { name, age, city = "Unknown" } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 30
console.log(city); // Output: Unknown (since 'city' is not defined in the object)
```

**To use default values for destructured properties:**

1. **Specify Default Values:** After the property name, use the `=` operator followed by the default value.
2. **Assignment:** If the property exists in the object, its value is assigned to the variable.
3. **Default Value Usage:** If the property is missing or `undefined`, the default value is assigned.

**Example with Multiple Default Values:**

```javascript
const config = {
  theme: "light",
};

const { theme = "dark", fontSize = 16 } = config;

console.log(theme); // Output: light
console.log(fontSize); // Output: 16
```

### 5. **Explain the concept of rest syntax in object destructuring.**

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
  job: "Engineer",
};

// Destructuring with rest syntax
const { name, age, ...rest } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 30
console.log(rest); // Output: { city: 'New York', job: 'Engineer' }
```

**Rest syntax (`...`)** in object destructuring allows you to capture remaining properties of an object into a single object.

**How it works:**

1. **Property Extraction:** The specified properties (`name` and `age` in the example) are extracted from the object.
2. **Rest Object:** The remaining properties are collected into a new object and assigned to the `rest` variable.

**Key points:**

- The rest object must be the last element in the destructuring pattern.
- It's a convenient way to extract specific properties while keeping the rest of the object intact.
- You can use the rest object to access the remaining properties or pass them to other functions.

### 6. **How can you combine object destructuring with function parameters?**

```javascript
function greet({ name, age }) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

const person = {
  name: "Alice",
  age: 30,
};

greet(person); // Output: Hello, Alice! You are 30 years old.
```

**Combining object destructuring with function parameters** allows you to:

1. **Destructure the object directly in the function parameter:** This makes the function more concise and readable.
2. **Extract specific properties:** You can destructure only the properties you need within the function.
3. **Handle default values:** You can use default values for destructured parameters.

**Example with default values:**

```javascript
function greet({ name, age = 25 }) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob", age: 30 };

greet(person1); // Output: Hello, Alice! You are 25 years old.
greet(person2); // Output: Hello, Bob! You are 30 years old.
```

## Practical Applications

### 7. **Given an object `person` with properties `name`, `age`, and `city`, destructure these properties into separate variables.**

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// Destructuring
const { name, age, city } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 30
console.log(city); // Output: New York
```

In this example, we've destructured the `name`, `age`, and `city` properties from the `person` object into separate variables with the same names. You can now use these variables directly within your code.

### 8. **Create a function that takes an object as an argument and destructures its properties to use within the function.**

```javascript
function greetPerson({ name, age }) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

const person = {
  name: "Alice",
  age: 30,
};

greet(person); // Output: Hello, Alice! You are 30 years old.
```

In this example:

1. We define a function `greetPerson` that takes an object as an argument.
2. Inside the function, we destructure the `name` and `age` properties from the object.
3. The destructured properties are then used within the function to log a greeting message.

### 9. **Demonstrate how to use object destructuring to extract specific properties from a complex object.**

```javascript
const user = {
  name: "Alice",
  email: "alice@example.com",
  address: {
    street: "Main Street",
    city: "New York",
  },
};

// Destructuring specific properties
const {
  name,
  address: { street },
} = user;

console.log(name); // Output: Alice
console.log(street); // Output: Main Street
```

In this example:

1. We have a complex object `user` with nested properties.
2. We destructure the `name` property directly.
3. We destructure the `street` property from the nested `address` object.
