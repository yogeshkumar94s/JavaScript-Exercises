## Object.keys, Object.values, Object.entries

### Basic Questions

1. **What is Object.keys()?**

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'city']
```

**Object.keys()** is a built-in JavaScript function that returns an array of an object's own enumerable property names. It's useful for iterating over an object's properties or extracting the keys for further processing.

**Key Points:**

- **Enumerable Properties:** Only enumerable properties are included in the returned array.
- **Order of Keys:** The order of keys in the returned array is not guaranteed to be the same as the order of declaration.
- **Prototype Properties:** Properties inherited from the object's prototype chain are not included.

2. **How do you use Object.keys() to get an array of an object's keys?**

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'city']
```

To get an array of an object's keys:

1. **Call Object.keys():** Pass the object as an argument to the `Object.keys()` function.
2. **Store the Result:** The function returns an array containing the object's keys.

3. **What is Object.values()?**

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const values = Object.values(person);
console.log(values); // Output: ['Alice', 30, 'New York']
```

**Object.values()** is a built-in JavaScript function that returns an array of an object's own enumerable property values. It's useful for extracting the values of an object's properties without the need for explicit key access.

**Key Points:**

- **Enumerable Properties:** Only enumerable properties are included in the returned array.
- **Order of Values:** The order of values in the returned array is not guaranteed to be the same as the order of declaration.
- **Prototype Properties:** Properties inherited from the object's prototype chain are not included.

4. **How do you use Object.values() to get an array of an object's values?**

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const values = Object.values(person);
console.log(values); // Output: ['Alice', 30, 'New York']
```

To get an array of an object's values:

1. **Call Object.values():** Pass the object as an argument to the `Object.values()` function.
2. **Store the Result:** The function returns an array containing the object's values.

3. **What is Object.entries()?**

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const entries = Object.entries(person);
console.log(entries); // Output: [['name', 'Alice'], ['age', 30], ['city', 'New York']]
```

**Object.entries()** is a built-in JavaScript function that returns an array of key-value pairs for an object's own enumerable properties. Each key-value pair is represented as an array with two elements: the key and the corresponding value.

**Key Points:**

- **Enumerable Properties:** Only enumerable properties are included in the returned array.
- **Order of Entries:** The order of entries in the returned array is not guaranteed to be the same as the order of declaration.
- **Prototype Properties:** Properties inherited from the object's prototype chain are not included.

### Advanced Questions

6. **How can you use Object.keys(), Object.values(), and Object.entries() together to iterate over an object's properties?**

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// Using Object.keys()
for (const key of Object.keys(person)) {
  console.log(`${key}: ${person[key]}`);
}

// Using Object.values()
for (const value of Object.values(person)) {
  console.log(value);
}

// Using Object.entries()
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
```

**Using `Object.keys()`:**

1. **Iterate over keys:** Get an array of keys using `Object.keys()`.
2. **Access values:** Use the key to access the corresponding value from the object.

**Using `Object.values()`:**

1. **Iterate over values:** Get an array of values using `Object.values()`.
2. **Process values:** Directly work with the values without needing to access keys.

**Using `Object.entries()`:**

1. **Iterate over key-value pairs:** Get an array of key-value pairs using `Object.entries()`.
2. **Destructure keys and values:** Use destructuring to easily access the key and value in each iteration.

3. **What are the performance implications of using these methods?**

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// Object.keys()
const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']

// Object.values()
const values = Object.values(person);
console.log(values); // ['Alice', 30, 'New York']

// Object.entries()
const entries = Object.entries(person);
console.log(entries); // [['name', 'Alice'], ['age', 30], ['city', 'New York']]
```

**Performance Implications:**

While these methods are generally efficient, there are a few considerations:

- **Object Size:** For large objects, creating a new array with keys, values, or key-value pairs might have a slight performance impact, especially if the array is not immediately used.
- **Iteration Overhead:** Iterating over the returned arrays might introduce some overhead, especially compared to traditional `for...in` loops.

However, in most practical scenarios, the performance difference is negligible and the convenience and readability of these methods often outweigh the potential performance overhead.

**Tips for Optimal Performance:**

- **Avoid Unnecessary Iterations:** If you need to access a specific property, use direct property access (e.g., `person.name`) instead of iterating over the keys or values.
- **Consider `for...in` for Simple Iteration:** For simple iterations, a `for...in` loop can be more efficient than using `Object.keys()` or `Object.entries()`.
- **Profile Your Code:** Use profiling tools to identify performance bottlenecks and optimize accordingly.

4. **How can you use these methods to create a shallow copy of an object?**

```javascript
const originalObject = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// Using Object.assign()
const shallowCopy1 = Object.assign({}, originalObject);

// Using the spread operator
const shallowCopy2 = { ...originalObject };

console.log(shallowCopy1); // Output: { name: 'Alice', age: 30, city: 'New York' }
console.log(shallowCopy2); // Output: { name: 'Alice', age: 30, city: 'New York' }
```

**Using `Object.assign()`:**

1. **Create an empty object:** Create an empty object to hold the copied properties.
2. **Copy properties:** Use `Object.assign()` to copy the properties of the original object to the empty object.

**Using the Spread Operator:**

1. **Create a new object:** Create a new object literal.
2. **Spread the original object:** Use the spread operator (`...`) to expand the properties of the original object into the new object.

**Important Note:** Both methods create a shallow copy. This means that if the original object contains nested objects, the nested objects will be shared by both the original and the copy. To create a deep copy, you'll need to use techniques like recursion or libraries that handle deep copying.

5. **How can you use these methods with destructuring to extract specific properties from an object?**

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// Using Object.keys() and destructuring
const { name, age } = person;
console.log(name, age); // Output: Alice 30

// Using Object.entries() and destructuring
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
```

**Destructuring with `Object.keys()`:**

1. **Get an array of keys:** Use `Object.keys()` to get an array of the object's keys.
2. **Destructure the array:** Directly assign the desired keys to variables.

**Destructuring with `Object.entries()`:**

1. **Get an array of key-value pairs:** Use `Object.entries()` to get an array of key-value pairs.
2. **Destructure each pair:** Destructure each pair in the loop to access the key and value.

3. **What are some common use cases for Object.keys(), Object.values(), and Object.entries()?**

**Common Use Cases:**

1. **Iterating Over Object Properties:**

   - **Object.keys()**: Iterate over each key and access the corresponding value.
   - **Object.values()**: Iterate over each value directly.
   - **Object.entries()**: Iterate over both keys and values simultaneously.

2. **Creating New Objects:**

   - **Filtering Properties:** Create a new object with only specific properties.
   - **Mapping Values:** Create a new object with transformed values.
   - **Cloning Objects:** Create a shallow copy of an object.

3. **Data Serialization and Deserialization:**

   - **JSON Serialization:** Convert an object to JSON format.
   - **Form Data:** Construct form data for HTTP requests.

4. **Functional Programming:**

   - Use these methods with higher-order functions like `map`, `filter`, and `reduce` to perform functional operations on objects.

5. **Dynamic Property Access and Manipulation:**
   - Access and modify object properties dynamically based on variables or computed values.

**Example: Filtering Object Properties**

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const filteredObject = {};
Object.keys(person).forEach((key) => {
  if (key !== "age") {
    filteredObject[key] = person[key];
  }
});

console.log(filteredObject); // Output: { name: 'Alice', city: 'New York' }
```
