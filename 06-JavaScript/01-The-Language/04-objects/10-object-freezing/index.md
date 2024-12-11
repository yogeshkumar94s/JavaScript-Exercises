## Object Freezing Exercises

**Object Freezing** is a technique in JavaScript to make an object immutable, meaning its properties cannot be changed, added, or deleted.

### Basic Exercises

1. **Freeze an Object:**

   - Create a simple object with a few properties.
   - Freeze the object using `Object.freeze()`.
   - Try to modify the object's properties and log the results.

```javascript
// Create a simple object
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// Freeze the object
Object.freeze(person);

// Try to modify the object's properties
person.name = "Bob";
person.age = 35;
delete person.city;

console.log(person); // Output: { name: "Alice", age: 30, city: "New York" }
```

**Explanation:**

1. We create a simple object `person` with three properties.
2. We use `Object.freeze()` to make the object immutable.
3. We attempt to modify the object's properties by assigning new values and deleting a property.
4. When we log the object, we'll see that the modifications have not taken effect. The object remains unchanged.

5. **Freezing Nested Objects:**
   - Create an object with nested objects.
   - Freeze both the outer object and the inner objects.
   - Attempt to modify properties of both the outer and inner objects.

```javascript
const person = {
  name: "Alice",
  age: 30,
  address: {
    street: "Main Street",
    city: "New York",
  },
};

// Freeze the outer object and its nested object
Object.freeze(person);
Object.freeze(person.address);

// Try to modify properties of both the outer and inner objects
person.name = "Bob";
person.address.street = "Wall Street";
delete person.address.city;

console.log(person); // Output: { name: "Alice", age: 30, address: { street: "Main Street", city: "New York" } }
```

**Explanation:**

1. We create a `person` object with a nested `address` object.
2. We use `Object.freeze()` to freeze both the `person` object and its `address` object.
3. We attempt to modify properties of both the outer and inner objects.
4. When we log the object, we'll see that the modifications have not taken effect. Both the outer and inner objects remain unchanged.

### Advanced Exercises

3. **Deep Freezing:**

   - Write a function `deepFreeze` that recursively freezes an object and all its nested objects.
   - Test this function with various complex object structures.

```javascript
function deepFreeze(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  Object.freeze(obj);

  for (const key in obj) {
    deepFreeze(obj[key]);
  }

  return obj;
}

const person = {
  name: "Alice",
  age: 30,
  address: {
    street: "Main Street",
    city: "New York",
  },
};

deepFreeze(person);

// Try to modify properties
person.name = "Bob";
person.address.street = "Wall Street";

console.log(person); // Output: { name: "Alice", age: 30, address: { street: "Main Street", city: "New York" } }
```

**Explanation:**

1. **Recursive Freezing:** The `deepFreeze` function recursively freezes an object and all its nested objects.
2. **Base Case:** If the object is not an object or is null, it's returned as is.
3. **Freezing the Object:** The `Object.freeze()` method is used to freeze the current object.
4. **Recursive Call:** The function is called recursively for each property of the object to ensure deep freezing.

5. **Freezing Arrays:**

   - Create an array and freeze it.
   - Try to modify the array's elements and log the results.
   - Discuss the limitations of freezing arrays.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Freeze the array
Object.freeze(numbers);

// Try to modify the array
numbers[0] = 10;
numbers.push(6);
numbers.pop();

console.log(numbers); // Output: [1, 2, 3, 4, 5]
```

**Explanation:**

1. We create an array `numbers` with some elements.
2. We use `Object.freeze()` to freeze the array.
3. We attempt to modify the array by changing an element, adding an element, and removing an element.
4. When we log the array, we see that the modifications have not taken effect. The array remains unchanged.

**Limitations of Freezing Arrays:**

While freezing an array prevents direct modification of its elements, it doesn't prevent modifications to the elements themselves if they are mutable objects. For example, if the array contains objects, you can still modify the properties of those objects.

5. **Freezing Prototypes:**
   - Create a constructor function and freeze its prototype.
   - Create objects using this constructor and try to add new methods to the prototype.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

// Freeze the prototype
Object.freeze(Person.prototype);

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Try to add a new method to the prototype
Person.prototype.sayHello = function () {
  console.log("Hello!");
};

person1.greet(); // Output: Hello, my name is Alice
person2.sayHello(); // This will throw an error
```

**Explanation:**

1. We define a `Person` constructor function with a `greet()` method on its prototype.
2. We freeze the `Person.prototype` to prevent any modifications to its properties and methods.
3. We create two `Person` objects, `person1` and `person2`.
4. We attempt to add a new method `sayHello()` to the `Person.prototype`.

Since the prototype is frozen, the attempt to add a new method will fail, and `person2` will not have access to the `sayHello()` method.

### Real-World Application

6. **Immutable Configuration Object:**

   - Create a configuration object with default settings.
   - Freeze the object to prevent accidental modifications.
   - Use this object in different parts of your application.

```javascript
const defaultConfig = {
  theme: "light",
  fontSize: 16,
  language: "en",
};

// Freeze the default configuration
const config = Object.freeze(defaultConfig);

// Use the configuration object in different parts of your application
function renderUI() {
  // Use config.theme, config.fontSize, etc. to style the UI
  // ...
}

function handleLanguageChange() {
  // You cannot modify the config object, so you'll need to create a new configuration object
  // with the desired changes.
  const newConfig = { ...config, language: "fr" };
  // Use newConfig to update the UI or other parts of your application
}
```

**Explanation:**

1. **Create an Immutable Configuration Object:**

   - We define a `defaultConfig` object with default settings.
   - We use `Object.freeze()` to make the `config` object immutable.

2. **Using the Configuration Object:**

   - The `renderUI()` function can directly use the `config` object to access the theme, font size, and language settings.
   - Since the `config` object is immutable, we can be sure that these settings won't be accidentally modified.

3. **Handling Configuration Changes:**

   - If we need to change the configuration, we create a new object using the spread operator (`...`) to copy the existing properties and then modify the desired property.
   - This ensures that the original `config` object remains unchanged.

4. **Preventing Data Mutation in Libraries:**
   - Consider how you might use object freezing to prevent unintentional modifications to objects passed as arguments to library functions.

```javascript
function processData(data) {
  // Prevent accidental modifications to the original data
  const immutableData = Object.freeze(JSON.parse(JSON.stringify(data)));

  // Process the immutable data
  // ...

  return processedData;
}
```

**Explanation:**

1. **Deep Cloning:** We create a deep copy of the `data` object using `JSON.parse(JSON.stringify(data))`. This ensures that any modifications made to the `immutableData` object will not affect the original `data` object.
2. **Freezing the Copy:** We use `Object.freeze()` to make the `immutableData` object immutable. This prevents any accidental or intentional modifications to the data within the function.

**Benefits of this approach:**

- **Data Integrity:** By freezing the data, we protect it from unintended changes, ensuring data consistency.
- **Functional Programming Principles:** This approach aligns with functional programming principles, where functions are pure and don't modify their input data.
- **Library Design:** This technique can be used in library functions to prevent side effects and ensure that the original data remains unchanged.
