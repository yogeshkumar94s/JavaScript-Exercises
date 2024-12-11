## **Some Exerciese**

### 2. Experiment with shallow and deep copying techniques.

## Experimenting with Shallow and Deep Copying

### Understanding Shallow Copy

A shallow copy creates a new object, but the objects within that object are still references to the original objects.

**Example:**

```javascript
const originalObject = {
  name: "Alice",
  age: 30,
  address: {
    street: "Main Street",
    city: "New York",
  },
};

// Shallow copy using Object.assign()
const shallowCopy = Object.assign({}, originalObject);

// Modify the original object
originalObject.age = 35;
originalObject.address.street = "Wall Street";

console.log(shallowCopy); // Output: { name: 'Alice', age: 35, address: { street: 'Wall Street', city: 'New York' } }
```

As you can see, modifying the `originalObject` also affects the `shallowCopy` because they share the same `address` object.

### Understanding Deep Copy

A deep copy creates a new object and recursively copies all nested objects, ensuring that the new object and its nested objects are independent of the original object.

**Example:**

```javascript
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    copy[key] = deepCopy(obj[key]);
  }

  return copy;
}

const deepCopy = deepCopy(originalObject);

// Modify the original object
originalObject.age = 40;
originalObject.address.street = "Broadway";

console.log(deepCopy); // Output: { name: 'Alice', age: 30, address: { street: 'Main Street', city: 'New York' } }
```

In this case, the `deepCopy` function recursively copies each nested object, ensuring that the `deepCopy` and `originalObject` are completely independent.

**Key Points:**

- **Shallow Copy:** Creates a new object but shares references to nested objects.
- **Deep Copy:** Creates a new object and recursively copies all nested objects.
- **Use Cases:** Shallow copies are often sufficient for simple objects, while deep copies are necessary for complex objects with nested structures to avoid unintended side effects.

### 3. Use optional chaining in a deeply nested object.

```javascript
const complexObject = {
  user: {
    profile: {
      name: "Alice",
      address: {
        street: "Main Street",
        city: "New York",
      },
    },
  },
};

// Accessing nested properties using optional chaining
const streetName = complexObject?.user?.profile?.address?.street;

console.log(streetName); // Output: Main Street
```

In this example:

- We have a complex object with nested properties.
- We use optional chaining to safely access the `street` property.
- If any part of the chain is `null` or `undefined`, the whole expression evaluates to `undefined`.

### 4. Create a constructor function to generate multiple objects.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log("Hello, my name is " + this.name);
  };
}

// Create multiple objects
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.greet(); // Output: Hello, my name is Alice
person2.greet(); // Output: Hello, my name is Bob
```

In this example:

1. **Constructor Function:** We define a constructor function `Person` that takes `name` and `age` as parameters.
2. **Property Assignment:** Inside the constructor, we assign the `name` and `age` properties to the object being created using the `this` keyword.
3. **Method Definition:** We define a `greet()` method on the prototype of the `Person` function, making it available to all instances of the `Person` object.
4. **Object Creation:** We create two objects, `person1` and `person2`, using the `new` operator and pass the necessary arguments to the constructor.
5. **Method Invocation:** We call the `greet()` method on both `person1` and `person2`, demonstrating that they have inherited the `greet()` method from the `Person` prototype.

### 5. Use symbols as property keys and try accessing them.

```javascript
const mySymbol = Symbol("mySymbol");

const obj = {
  [mySymbol]: "secret value",
};

console.log(obj[mySymbol]); // Output: secret value
```

**Explanation:**

1. **Symbol Creation:** We create a unique symbol using `Symbol('mySymbol')`. Symbols are unique identifiers.
2. **Property Assignment:** We use the symbol as a key to assign a value to the object.
3. **Property Access:** We can access the property using the same symbol.

**Key Points:**

- **Unique Identifiers:** Symbols are guaranteed to be unique, preventing property name collisions.
- **Private Properties:** Symbols can be used to create private properties that are not accessible from outside the object.
- **Unique Keys:** Symbols can be used as keys in objects to create unique identifiers for properties.

### 6. Write an object with `toString`, `valueOf`, and `Symbol.toPrimitive` methods.

```javascript
const myObject = {
  value: 42,

  toString() {
    return `String representation: ${this.value}`;
  },

  valueOf() {
    return this.value;
  },

  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return this.value;
    } else if (hint === "string") {
      return `String representation: ${this.value}`;
    } else {
      return this.value; // Default to number
    }
  },
};

console.log(myObject + 10); // Output: 52
console.log("The value is: " + myObject); // Output: The value is: String representation: 42
```

**Explanation:**

- **`toString()`:** This method is called when the object is converted to a string, such as during string concatenation.
- **`valueOf()`:** This method is called when the object is converted to a number, such as during arithmetic operations.
- **`Symbol.toPrimitive`:** This method provides more fine-grained control over object-to-primitive conversion. It takes a `hint` parameter that can be 'number', 'string', or 'default'.
