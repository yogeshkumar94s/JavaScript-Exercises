## Object Sealing in JavaScript

**Object sealing** is a technique in JavaScript that prevents the addition of new properties to an object. Once an object is sealed, you can still modify the values of existing properties, but you cannot add or delete properties.

### How to Seal an Object:

You can seal an object using the `Object.seal()` method:

```javascript
const person = {
  name: "Alice",
  age: 30,
};

Object.seal(person);

// Attempt to add a new property
person.city = "New York";

console.log(person); // Output: { name: 'Alice', age: 30 }
```

As you can see, the `city` property was not added to the `person` object because it's been sealed.

### Key Points about Object Sealing:

- **Existing Properties:** You can still modify the values of existing properties.
- **New Properties:** You cannot add new properties to the object.
- **Property Deletion:** You cannot delete existing properties.
- **Prototype Chain:** The prototype chain of a sealed object remains unaffected.

### Why Use Object Sealing?

- **Preventing Accidental Modifications:** You can protect objects from unintentional changes, especially in large codebases.
- **Enforcing Immutability:** In functional programming, immutability is often preferred. Sealing objects can help achieve this goal.
- **Security:** By sealing objects, you can restrict access to certain properties and prevent malicious modifications.

### Limitations of Object Sealing:

- **Partial Immutability:** While object sealing prevents the addition of new properties, it doesn't prevent the modification of existing properties.
- **Deep Freezing:** To achieve deeper immutability, you might need to recursively seal nested objects.

### Example: Creating an Immutable Configuration Object

```javascript
const defaultConfig = {
  theme: "light",
  fontSize: 16,
};

const config = Object.seal(defaultConfig);

// Attempt to modify the configuration
config.theme = "dark";
config.newProperty = "test";

console.log(config); // Output: { theme: 'light', fontSize: 16 }
```

In this example, the `config` object is sealed, preventing any modifications to its properties. This can be useful for ensuring that certain settings remain consistent throughout your application.

## Object Sealing Quiz

### Basic Questions:

1. **What is object sealing in JavaScript?**

```javascript
const person = {
  name: "Alice",
  age: 30,
};

Object.seal(person);

person.name = "Bob"; // Allowed: Modifying existing property
person.age = 35; // Allowed: Modifying existing property
person.city = "New York"; // Not allowed: Adding a new property
delete person.age; // Not allowed: Deleting an existing property

console.log(person); // Output: { name: 'Bob', age: 35 }
```

**Object sealing** is a technique in JavaScript that prevents the addition or deletion of properties from an object. Once an object is sealed, you can still modify the values of existing properties, but you cannot add or remove properties.

**Key points:**

- **Existing Properties:** Can be modified.
- **New Properties:** Cannot be added.
- **Property Deletion:** Cannot be deleted.
- **Prototype Chain:** The prototype chain remains unaffected.

**Use Cases:**

- **Preventing Accidental Modifications:** To protect objects from unintentional changes.
- **Enforcing Immutability:** To create immutable data structures.
- **Security:** To restrict access to certain properties and prevent malicious modifications.

2. **How do you seal an object using JavaScript's built-in methods?**

```javascript
const person = {
  name: "Alice",
  age: 30,
};

Object.seal(person);

// Attempt to modify the object
person.name = "Bob"; // Allowed
person.city = "New York"; // Not allowed
delete person.age; // Not allowed

console.log(person); // Output: { name: 'Bob', age: 30 }
```

To seal an object, you use the `Object.seal()` method. This method takes an object as its argument and prevents any further modifications to the object's structure.

Once an object is sealed, you can still modify the values of its existing properties, but you cannot add or delete properties. This helps in maintaining the integrity of the object and preventing accidental changes.

3. **What are the limitations of object sealing?**

```javascript
const person = {
  name: "Alice",
  age: 30,
};

Object.seal(person);

person.name = "Bob"; // Allowed: Modifying existing property
person.city = "New York"; // Not allowed: Adding a new property
delete person.age; // Not allowed: Deleting an existing property

console.log(person); // Output: { name: 'Bob', age: 30 }
```

While object sealing is a powerful technique, it has some limitations:

1. **Partial Immutability:** Object sealing only prevents the addition and deletion of properties. You can still modify the values of existing properties.

2. **Nested Objects:** To achieve deep immutability, you need to recursively seal nested objects.

3. **Prototype Chain:** Sealing an object doesn't affect its prototype chain. Changes to the prototype can still impact instances of the object.

### Advanced Questions:

4. **How does object sealing differ from object freezing?**

```javascript
const person = {
  name: "Alice",
  age: 30,
};

// Sealing the object
Object.seal(person);

// Freezing the object
Object.freeze(person);
```

**Object Sealing** and **Object Freezing** are techniques to make objects immutable in JavaScript, but they have distinct differences:

**Object Sealing:**

- Prevents the addition or deletion of properties.
- Allows modification of existing property values.

**Object Freezing:**

- Prevents both the addition or deletion of properties.
- Prevents the modification of existing property values.

**In essence:**

- **Sealing** locks the object's structure, preventing changes to its shape.
- **Freezing** locks both the structure and the content of the object, making it completely immutable.

**Choosing the Right Technique:**

- Use **sealing** when you want to prevent accidental changes to an object's structure while allowing modifications to existing properties.
- Use **freezing** when you want to create a completely immutable object, ensuring that its state remains unchanged throughout its lifecycle.

5. **Can you seal a prototype object to prevent modifications to its methods and properties?**

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

// Sealing the prototype
Object.seal(Person.prototype);

// Attempt to modify the prototype
Person.prototype.sayHello = function () {
  console.log("Hello!");
};

const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice
person1.sayHello(); // This will throw an error
```

**Yes, you can seal a prototype object to prevent modifications to its methods and properties.**

By sealing the `Person.prototype`, we prevent any further modifications to its properties or methods. This ensures that all instances of the `Person` object will have the same behavior and that the prototype cannot be accidentally or maliciously changed.

This can be useful in libraries and frameworks where you want to maintain a consistent API and prevent unexpected behavior.

6. **How can object sealing be used to create immutable data structures in JavaScript?**

```javascript
const immutableConfig = Object.seal({
  theme: "light",
  fontSize: 16,
});

// Attempt to modify the configuration
immutableConfig.theme = "dark";
immutableConfig.newProperty = "test";

console.log(immutableConfig); // Output: { theme: 'light', fontSize: 16 }
```

Object sealing can be used to create immutable data structures by preventing any modifications to the object's properties. This is particularly useful for configuration objects, settings, or any data that should remain constant throughout the application.

**Key benefits of using object sealing for immutable data structures:**

- **Predictability:** Immutable objects are easier to reason about, as their state remains unchanged.
- **Error Prevention:** Accidental modifications to the object are prevented, reducing the likelihood of bugs and unexpected behavior.
- **Parallelism and Concurrency:** Immutable objects are thread-safe and can be safely shared between different parts of an application.

7. **What are the potential performance implications of object sealing?**

```javascript
const largeObject = {
  // ... many properties
};

Object.seal(largeObject);
```

While object sealing can be a valuable tool for creating immutable data structures, it's important to be aware of potential performance implications:

**1. Memory Overhead:**

- Sealing an object doesn't immediately free up memory, as the object and its properties still exist in memory.
- In large-scale applications, repeatedly creating and sealing objects can lead to increased memory usage.

**2. Performance Overhead:**

- The `Object.seal()` method itself incurs a small performance overhead, especially when dealing with large objects.
- However, the performance impact is usually negligible in most practical scenarios.

**Best Practices:**

- **Balance Immutability and Performance:** Use object sealing judiciously, especially for objects that need to be immutable for a long time.
- **Consider Alternative Approaches:** For large data structures, consider using techniques like immutability libraries or functional programming principles to achieve immutability without significant performance overhead.
- **Profile Your Code:** If performance is critical, use profiling tools to identify potential bottlenecks and optimize your code accordingly.

### Practical Application:

8. **Create an object representing a person with properties like `name`, `age`, and `address`. Seal the object and try to modify its properties. What happens?**

```javascript
const person = {
  name: "Alice",
  age: 30,
  address: "123 Main St",
};

// Seal the object
Object.seal(person);

// Try to modify properties
person.name = "Bob";
person.age = 35;
person.city = "New York"; // Adding a new property
delete person.age; // Deleting an existing property

console.log(person); // Output: { name: 'Bob', age: 35, address: '123 Main St' }
```

**Explanation:**

1. **Object Creation:** We create a `person` object with properties `name`, `age`, and `address`.
2. **Object Sealing:** We use `Object.seal()` to seal the `person` object.
3. **Modification Attempts:** We try to modify existing properties (`name` and `age`), add a new property (`city`), and delete an existing property (`age`).

**Result:**

- **Modifying existing properties:** Allowed. The `name` and `age` properties are successfully modified.
- **Adding new properties:** Not allowed. The `city` property is not added to the object.
- **Deleting properties:** Not allowed. The `age` property is not deleted.

The output will be:

```javascript
{ name: 'Bob', age: 35, address: '123 Main St' }
```

As you can see, the `city` property was not added, and the `age` property was not deleted, demonstrating the limitations of object sealing. While it prevents the addition or deletion of properties, it allows the modification of existing properties.

9. **Create a configuration object for a web application and seal it to prevent accidental changes. Discuss the advantages of this approach.**

```javascript
const defaultConfig = {
  theme: "light",
  fontSize: 16,
  language: "en",
};

const config = Object.seal(defaultConfig);

// Attempt to modify the configuration
config.theme = "dark";
config.newProperty = "test";

console.log(config); // Output: { theme: 'light', fontSize: 16, language: 'en' }
```

**Advantages of Sealing a Configuration Object:**

1. **Preventing Accidental Changes:** By sealing the configuration object, we ensure that its properties cannot be modified accidentally. This helps maintain the integrity of the application's settings.
2. **Enforcing Consistency:** Sealing the configuration object guarantees that the same configuration settings are used throughout the application, reducing the risk of inconsistencies and bugs.
3. **Improving Code Reliability:** Immutable objects make code more predictable and easier to reason about, as their state cannot change unexpectedly.
4. **Facilitating Testing:** Immutable objects simplify testing, as you can be confident that the configuration won't change during test execution.

5. **Write a function that takes an object as input and returns a sealed copy of that object.**

```javascript
function createImmutableObject(obj) {
  const immutableObj = Object.assign({}, obj);
  Object.seal(immutableObj);
  return immutableObj;
}

const originalObject = {
  name: "Alice",
  age: 30,
};

const immutableObject = createImmutableObject(originalObject);

// Trying to modify the immutable object
immutableObject.name = "Bob";
immutableObject.city = "New York";

console.log(immutableObject); // Output: { name: 'Alice', age: 30 }
```

**Explanation:**

1. **Create a Copy:** The `Object.assign()` method creates a shallow copy of the original object.
2. **Seal the Copy:** `Object.seal()` is used to make the copied object immutable.
3. **Return the Immutable Object:** The function returns the sealed copy of the original object.
