### **Object Properties Configuration in JavaScript**

In JavaScript, **object properties** have configurations beyond their values. These configurations determine how the properties behave and are managed. The two main topics to explore here are **Property Flags and Descriptors** and **Property Getters and Setters**.

---

### **1. Property Flags and Descriptors**

Every property in an object has a **property descriptor** that defines its attributes or flags.

#### **Key Property Flags**:

1. **`writable`**:

   - Determines if the value of the property can be changed.
   - Default: `true`.

2. **`enumerable`**:

   - Determines if the property appears in loops like `for...in` or `Object.keys()`.
   - Default: `true`.

3. **`configurable`**:
   - Determines if the property can be deleted or if its attributes (`writable`, `enumerable`, `configurable`) can be modified.
   - Default: `true`.

#### **Accessing Property Descriptors**:

Use `Object.getOwnPropertyDescriptor()` to view a property’s descriptor.

#### **Example**:

```javascript
const user = {
  name: "Alice",
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));
// Output:
// {
//   value: 'Alice',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```

---

#### **Modifying Property Flags**:

You can modify these flags using `Object.defineProperty()`.

#### **Example: Making a Property Read-Only**:

```javascript
const user = {};

Object.defineProperty(user, "name", {
  value: "Alice",
  writable: false, // Read-only
});

console.log(user.name); // "Alice"
user.name = "Bob"; // No effect in non-strict mode, throws error in strict mode
console.log(user.name); // "Alice"
```

#### **Example: Hiding a Property**:

```javascript
const user = {
  name: "Alice",
};

Object.defineProperty(user, "password", {
  value: "secret123",
  enumerable: false, // Hidden in loops
});

console.log(user); // { name: 'Alice' }
console.log(Object.keys(user)); // ["name"]
console.log(user.password); // "secret123"
```

#### **Preventing Deletions or Changes**:

```javascript
const user = {
  name: "Alice",
};

Object.defineProperty(user, "name", {
  configurable: false, // Cannot be deleted or reconfigured
});

delete user.name; // No effect
console.log(user.name); // "Alice"
```

---

#### **`Object.defineProperties()` and `Object.getOwnPropertyDescriptors()`**:

- Define or retrieve multiple properties at once.

#### **Example**:

```javascript
const user = {};

Object.defineProperties(user, {
  name: { value: "Alice", writable: true },
  age: { value: 30, enumerable: true },
});

console.log(Object.getOwnPropertyDescriptors(user));
// Output:
// {
//   name: { value: 'Alice', writable: true, enumerable: false, configurable: false },
//   age: { value: 30, writable: false, enumerable: true, configurable: false }
// }
```

---

### **2. Property Getters and Setters**

**Getters and setters** are special methods that allow controlled access to an object’s properties. They make properties behave like functions but are accessed like normal properties.

#### **Defining Getters and Setters**:

1. **Getter**: A method that returns a value.
2. **Setter**: A method that sets a value.

#### **Example**:

```javascript
const user = {
  firstName: "Alice",
  lastName: "Smith",

  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Setter
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

console.log(user.fullName); // "Alice Smith" (getter is called)
user.fullName = "Bob Brown"; // setter is called
console.log(user.firstName); // "Bob"
console.log(user.lastName); // "Brown"
```

---

#### **Dynamic Behavior with Getters**:

You can use getters to compute values dynamically based on other properties.

#### **Example**:

```javascript
const rectangle = {
  width: 10,
  height: 5,

  get area() {
    return this.width * this.height;
  },
};

console.log(rectangle.area); // 50 (computed dynamically)
rectangle.width = 20;
console.log(rectangle.area); // 100
```

---

#### **Combining Getters and Setters with `Object.defineProperty()`**:

You can also define getters and setters using `Object.defineProperty()`.

#### **Example**:

```javascript
const user = {};

Object.defineProperty(user, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
});

user.fullName = "Alice Brown";
console.log(user.firstName); // "Alice"
console.log(user.lastName); // "Brown"
console.log(user.fullName); // "Alice Brown"
```

---

### **Practical Use Cases for Getters and Setters**

1. **Data Validation**:
   Use setters to validate input.

   ```javascript
   const user = {
     set age(value) {
       if (value < 0) throw new Error("Age cannot be negative!");
       this._age = value;
     },
     get age() {
       return this._age;
     },
   };

   user.age = 25;
   console.log(user.age); // 25
   // user.age = -5; // Throws an error
   ```

2. **Lazy Computation**:
   Use getters to compute values only when accessed.

   ```javascript
   const user = {
     _largeData: null,
     get largeData() {
       if (!this._largeData) {
         console.log("Computing large data...");
         this._largeData = Array(100000).fill("data");
       }
       return this._largeData;
     },
   };

   console.log(user.largeData); // Computes the data
   console.log(user.largeData); // Uses cached data
   ```

3. **Encapsulation**:
   Hide internal properties while providing controlled access.

   ```javascript
   const bankAccount = {
     _balance: 1000,
     get balance() {
       return `Your balance is $${this._balance}`;
     },
     set balance(value) {
       console.log("You cannot set balance directly!");
     },
   };

   console.log(bankAccount.balance); // "Your balance is $1000"
   bankAccount.balance = 2000; // "You cannot set balance directly!"
   ```

---

### **Summary**

#### **Property Flags and Descriptors**:

- Allow fine-grained control over property behavior.
- Flags include `writable`, `enumerable`, and `configurable`.

#### **Property Getters and Setters**:

- Provide controlled access to properties.
- Use `get` and `set` for computed values, validation, or encapsulation.

---

### **Task for You**

1. Create an object with a non-enumerable, non-writable property.
2. Implement a `fullName` getter and setter for a user object.
3. Create a lazy-loading getter for a property that simulates a heavy computation.

---

Here’s a list of **basic to advanced questions** about Object Properties Configuration in JavaScript. Each question builds upon key concepts related to property descriptors and configurations.

---

## **Basic Questions**

### 1. **What are the different types of properties in JavaScript objects?**

In JavaScript, objects can have various types of properties. These properties can be categorized into the following types:

### 1. **Data Properties**

- **Definition**: These are the most common type of properties, where the value is directly stored.
- **Characteristics**:

  - **Value**: Holds the actual value (can be a primitive or another object).
  - **Writable**: Indicates whether the value can be modified.
  - **Enumerable**: Indicates whether the property will show up in loops like `for...in`.
  - **Configurable**: Indicates whether the property can be deleted or modified.

- **Example**:

  ```javascript
  const person = {
    name: "Alice", // Data property
    age: 30, // Data property
  };
  ```

- You can define or modify these properties using the assignment operator (`=`).

---

### 2. **Accessor Properties**

- **Definition**: These are properties where the value is computed via getter and setter functions instead of being stored directly.
- **Characteristics**:

  - **Getter**: A function that is called when the property is accessed.
  - **Setter**: A function that is called when the property is assigned a new value.
  - **Writable, Enumerable, and Configurable**: These attributes apply to the getter and setter methods as well.

- **Example**:

  ```javascript
  const person = {
    _name: "Alice", // private backing data
    get name() {
      // Getter method
      return this._name;
    },
    set name(value) {
      // Setter method
      this._name = value;
    },
  };

  console.log(person.name); // "Alice"
  person.name = "Bob"; // Calls setter
  console.log(person.name); // "Bob"
  ```

- Accessor properties allow you to control how a property is accessed or modified, giving you more flexibility compared to data properties.

---

### 3. **Prototype Properties (Inherited Properties)**

- **Definition**: These properties are inherited from an object's prototype chain. Every object in JavaScript is linked to a prototype object (except for `Object.prototype`).
- **Characteristics**:

  - Inherited from the prototype, meaning they can be accessed like regular properties, but are not directly part of the object itself.
  - These properties are shared among all instances of an object that shares the same prototype.

- **Example**:

  ```javascript
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}`;
  };

  const person = new Person("Alice", 30);
  console.log(person.greet()); // Inherited from Person.prototype
  ```

- **Note**: The `greet` method is not a direct property of the `person` object, but is inherited from the `Person.prototype`.

---

### 4. **Non-enumerable Properties**

- **Definition**: Properties that are not returned in `for...in` loops or `Object.keys()`. These properties are still part of the object, but they are "hidden" from such iteration.
- **Characteristics**:

  - Can be defined using `Object.defineProperty()` or `Object.defineProperties()`.
  - Commonly used for internal methods or properties that should not be accessed directly.

- **Example**:

  ```javascript
  const person = {};

  Object.defineProperty(person, "name", {
    value: "Alice",
    enumerable: false, // This property is not enumerable
  });

  console.log(person.name); // "Alice"
  console.log(Object.keys(person)); // [] - 'name' is not included
  ```

---

### 5. **Non-configurable Properties**

- **Definition**: Properties that cannot be deleted or modified (such as changing the property's descriptor attributes).
- **Characteristics**:

  - Set using `Object.defineProperty()` with `{ configurable: false }`.
  - Once set as non-configurable, the property cannot be reconfigured.

- **Example**:

  ```javascript
  const person = {};
  Object.defineProperty(person, "name", {
    value: "Alice",
    configurable: false, // Cannot be deleted or redefined
  });

  delete person.name; // This will fail silently (no effect)
  console.log(person.name); // "Alice"
  ```

---

### 6. **Writable Properties**

- **Definition**: Properties whose value can be changed after they are initially set.
- **Characteristics**:

  - If `writable: true`, the value of the property can be modified.
  - If `writable: false`, attempts to change the value of the property will fail silently (in non-strict mode) or throw a `TypeError` (in strict mode).

- **Example**:

  ```javascript
  const person = {};
  Object.defineProperty(person, "name", {
    value: "Alice",
    writable: false, // Value cannot be changed
  });

  person.name = "Bob"; // This won't change the value
  console.log(person.name); // "Alice"
  ```

---

### Summary of Property Types:

1. **Data Properties**: Stores values directly (can be primitive types or other objects).
2. **Accessor Properties**: Uses getter and setter methods to compute the value.
3. **Prototype Properties**: Inherited from the object's prototype chain.
4. **Non-enumerable Properties**: Properties not included in `for...in` or `Object.keys()`.
5. **Non-configurable Properties**: Properties that cannot be deleted or modified.
6. **Writable Properties**: Properties that can have their values changed.

Each property type offers different behaviors and can be controlled for specific use cases like data encapsulation, internal methods, or ensuring immutability in JavaScript objects.

### 2. **What is the default configuration of a property added using dot notation (e.g., `obj.prop = value`)?**

When you add a property to an object using **dot notation** (e.g., `obj.prop = value`), the property is created with the following **default configuration**:

### Default Configuration:

1. **Writable**:
   - By default, the property is **writable**. This means that its value can be changed after it is initially set.
2. **Enumerable**:
   - By default, the property is **enumerable**, which means it will appear when you loop over the object using methods like `for...in`, `Object.keys()`, or `Object.getOwnPropertyNames()`.
3. **Configurable**:
   - By default, the property is **configurable**, which means you can delete it or modify its descriptor (e.g., change its `writable`, `enumerable`, or `configurable` attributes) later using methods like `Object.defineProperty()`.

### Example:

```javascript
const obj = {};

// Adding a property using dot notation
obj.prop = "Hello";

// Default configurations of the property
console.log(Object.getOwnPropertyDescriptor(obj, "prop"));
// Output:
// {
//   value: "Hello",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```

### Explanation:

- **`writable: true`**: You can modify the value of `obj.prop`.
- **`enumerable: true`**: The property will show up when iterating over the object.
- **`configurable: true`**: You can delete or redefine the property.

Thus, when you add properties using dot notation, they are **writable, enumerable, and configurable by default**. However, you can change these characteristics later using `Object.defineProperty()` or `Object.defineProperties()`.

### 3. **How do you check if a property exists in an object?**

In JavaScript, there are multiple ways to check if a property exists in an object. Here are some of the most commonly used methods:

### 1. **Using the `in` Operator**

The `in` operator checks whether the property exists in the object or anywhere in its prototype chain.

- **Syntax**: `property in object`
- **Returns**: `true` if the property exists, otherwise `false`.

#### Example:

```javascript
const person = { name: "Alice", age: 30 };

console.log("name" in person); // true
console.log("gender" in person); // false
```

### 2. **Using `hasOwnProperty()` Method**

The `hasOwnProperty()` method checks if the property exists directly on the object (not on its prototype chain). It will return `false` for properties inherited from the prototype chain.

- **Syntax**: `object.hasOwnProperty(property)`
- **Returns**: `true` if the property exists directly on the object, otherwise `false`.

#### Example:

```javascript
const person = { name: "Alice", age: 30 };

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("gender")); // false

// Inherited property example
console.log(person.hasOwnProperty("toString")); // false, since `toString` is inherited from Object prototype
```

### 3. **Using `undefined` Check**

You can also check if a property exists by checking if it is `undefined`. If a property is not present, accessing it will return `undefined`. However, this method will not distinguish between a property that does not exist and a property that explicitly has the value `undefined`.

- **Syntax**: `object.property === undefined`
- **Returns**: `true` if the property is `undefined`, otherwise `false`.

#### Example:

```javascript
const person = { name: "Alice", age: 30 };

console.log(person.name === undefined); // false
console.log(person.gender === undefined); // true
```

### 4. **Using `Object.hasOwn()` (ES2022 and later)**

The `Object.hasOwn()` method is a more modern and cleaner alternative to `hasOwnProperty()`. It checks if the object has the property directly (not inherited).

- **Syntax**: `Object.hasOwn(object, property)`
- **Returns**: `true` if the property exists directly on the object, otherwise `false`.

#### Example:

```javascript
const person = { name: "Alice", age: 30 };

console.log(Object.hasOwn(person, "name")); // true
console.log(Object.hasOwn(person, "gender")); // false
```

---

### Summary:

- Use the **`in` operator** if you want to check for the existence of a property in both the object and its prototype chain.
- Use **`hasOwnProperty()`** if you only care about whether the property exists on the object itself.
- Use the **`undefined` check** if you want a quick and simple method, but keep in mind it doesn't differentiate between a property being absent and a property explicitly set to `undefined`.
- Use **`Object.hasOwn()`** for a cleaner, modern way to check if a property exists on the object itself.

### 4. **What is a property descriptor in JavaScript?**

A **property descriptor** in JavaScript is an object that defines the characteristics of a property on an object. It describes how a property behaves in terms of its value, mutability, and accessibility. Each property of an object has an associated descriptor, which controls how that property can be accessed or modified.

### Key Attributes of a Property Descriptor:

A property descriptor can contain one or more of the following attributes:

1. **value**:

   - The actual value of the property. This can be any valid JavaScript value, such as a string, number, array, or function.
   - **Default**: For regular data properties, this attribute holds the value of the property.

2. **writable**:

   - A boolean indicating whether the property's value can be changed.
   - **Default**: `true` for data properties, `false` for accessor properties (getter/setter).

3. **enumerable**:

   - A boolean indicating whether the property will show up in loops like `for...in`, `Object.keys()`, or `Object.getOwnPropertyNames()`.
   - **Default**: `true` for regular properties added directly to the object.

4. **configurable**:

   - A boolean indicating whether the property can be deleted or modified (e.g., whether you can change its `writable`, `enumerable`, or `configurable` attributes).
   - **Default**: `true` for regular properties.

5. **get** (for accessor properties):

   - A function that is called when the property is accessed. It does not require a `value` attribute. If defined, it allows you to define a computed or dynamic property.
   - **Default**: `undefined`.

6. **set** (for accessor properties):
   - A function that is called when the property is assigned a value. If defined, it allows you to control how the property is modified.
   - **Default**: `undefined`.

### Example of Property Descriptor:

```javascript
const obj = {};

// Define a data property with a property descriptor
Object.defineProperty(obj, "name", {
  value: "Alice",
  writable: true,
  enumerable: true,
  configurable: true,
});

// Define an accessor property with a getter and setter
Object.defineProperty(obj, "greeting", {
  get() {
    return `Hello, ${this.name}`;
  },
  set(newName) {
    this.name = newName;
  },
  enumerable: true,
  configurable: true,
});

// Using the property
console.log(obj.greeting); // "Hello, Alice"
obj.greeting = "Bob";
console.log(obj.greeting); // "Hello, Bob"
console.log(obj.name); // "Bob"
```

In the example above:

- The **`name`** property is a **data property** with a value, and it is **writable**, **enumerable**, and **configurable**.
- The **`greeting`** property is an **accessor property** with a **getter** and **setter** that allows dynamic access and modification of the `name` property.

### Viewing the Property Descriptor:

You can retrieve a property descriptor using `Object.getOwnPropertyDescriptor()`:

```javascript
const descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);
/* Output:
{
  value: "Alice",
  writable: true,
  enumerable: true,
  configurable: true
}
*/
```

### Summary:

A **property descriptor** defines the behavior of an object property. It allows you to control how the property is accessed, modified, and iterated. Descriptors are particularly useful when you need to define properties with specific access control, like with getter and setter methods or when defining read-only or write-protected properties.

### 5. **How can you retrieve the property descriptor of a specific property in an object?**

To retrieve the **property descriptor** of a specific property in an object, you can use the `Object.getOwnPropertyDescriptor()` method. This method returns the descriptor of the property if it exists on the object, or `undefined` if the property doesn't exist.

### Syntax:

```javascript
Object.getOwnPropertyDescriptor(obj, property);
```

- **`obj`**: The object from which you want to retrieve the property descriptor.
- **`property`**: The name of the property whose descriptor you want to retrieve.

### Example:

```javascript
const obj = {
  name: "Alice",
  age: 30,
};

// Retrieve the property descriptor for the "name" property
const descriptor = Object.getOwnPropertyDescriptor(obj, "name");

console.log(descriptor);
```

### Output:

```javascript
{
  value: "Alice",
  writable: true,
  enumerable: true,
  configurable: true
}
```

### Explanation:

- **`value`**: The actual value of the property (`"Alice"` in this case).
- **`writable`**: Indicates whether the property's value can be changed (it is `true`).
- **`enumerable`**: Indicates whether the property shows up during enumeration of the object (it is `true`).
- **`configurable`**: Indicates whether the property can be deleted or its descriptor modified (it is `true`).

### Accessor Property Descriptor:

If the property is an accessor property (with `get` and `set` methods), the descriptor will include the `get` and `set` functions.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// Retrieve the property descriptor for the "fullName" accessor property
const descriptor = Object.getOwnPropertyDescriptor(person, "fullName");

console.log(descriptor);
```

### Output:

```javascript
{
  get: [Function: get fullName],
  set: undefined,
  enumerable: true,
  configurable: true
}
```

### Notes:

- **`Object.getOwnPropertyDescriptor()`** only retrieves descriptors for properties that are **directly** on the object, not in its prototype chain. If the property is inherited from the prototype, this method will return `undefined`.
- If a property is defined using `Object.defineProperty()` with a custom descriptor, you can use this method to retrieve the custom descriptor.

---

## **Intermediate Questions**

### 6. **What do the `configurable`, `enumerable`, `writable`, and `value` attributes of a property descriptor mean?**

The attributes **`configurable`**, **`enumerable`**, **`writable`**, and **`value`** are key components of a **property descriptor** in JavaScript. These attributes define how the property behaves when it is accessed, modified, or iterated over.

### 1. **`configurable`**:

- **Definition**: This attribute specifies whether the property descriptor can be changed and whether the property can be deleted.
- **Values**:

  - `true`: The property can be deleted or its descriptor can be modified.
  - `false`: The property cannot be deleted and its descriptor cannot be modified (e.g., you cannot change its `writable`, `enumerable`, or `configurable` attributes).

- **Example**:

  ```javascript
  const obj = {};
  Object.defineProperty(obj, "name", {
    value: "Alice",
    configurable: false,
  });

  // Trying to modify the descriptor later will throw an error
  Object.defineProperty(obj, "name", { writable: true }); // Throws TypeError
  ```

### 2. **`enumerable`**:

- **Definition**: This attribute specifies whether the property will show up during object enumeration (e.g., in `for...in` loops or when using `Object.keys()`).
- **Values**:

  - `true`: The property will be included in enumeration (e.g., for `for...in` and `Object.keys()`).
  - `false`: The property will be **not** included in enumeration.

- **Example**:

  ```javascript
  const obj = {};
  Object.defineProperty(obj, "name", {
    value: "Alice",
    enumerable: false,
  });

  // This will not list the 'name' property
  for (let key in obj) {
    console.log(key); // No output
  }

  console.log(Object.keys(obj)); // [] (empty array)
  ```

### 3. **`writable`**:

- **Definition**: This attribute determines whether the value of the property can be changed.
- **Values**:
  - `true`: The property’s value can be modified.
  - `false`: The property’s value cannot be modified (it is **read-only**).
- **Example**:

  ```javascript
  const obj = {};
  Object.defineProperty(obj, "name", {
    value: "Alice",
    writable: false,
  });

  // Attempting to change the value will fail in strict mode
  obj.name = "Bob"; // The value will not be changed
  console.log(obj.name); // 'Alice'
  ```

### 4. **`value`**:

- **Definition**: This attribute holds the actual value of the property for **data properties** (as opposed to accessor properties, which use `get` and `set` methods).
- **Values**: Any valid JavaScript value (e.g., number, string, object, function).
- **Default**: The `value` is used to define the property's value when the property is created.

- **Example**:

  ```javascript
  const obj = {};
  Object.defineProperty(obj, "name", {
    value: "Alice",
    writable: true,
  });

  console.log(obj.name); // 'Alice'
  obj.name = "Bob"; // The value is changed
  console.log(obj.name); // 'Bob'
  ```

### Summary of Property Descriptor Attributes:

| Attribute      | Description                                                     | Possible Values      | Default Value (for regular data properties) |
| -------------- | --------------------------------------------------------------- | -------------------- | ------------------------------------------- |
| `value`        | The value of the property.                                      | Any JavaScript value | Depends on how the property is defined      |
| `writable`     | Whether the property's value can be modified.                   | `true` or `false`    | `true`                                      |
| `enumerable`   | Whether the property shows up in enumerations (like `for...in`) | `true` or `false`    | `true`                                      |
| `configurable` | Whether the property descriptor can be modified or deleted.     | `true` or `false`    | `true`                                      |

### Example of Full Property Descriptor:

```javascript
const obj = {};

Object.defineProperty(obj, "name", {
  value: "Alice",
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// Output:
// {
//   value: 'Alice',
//   writable: false,
//   enumerable: true,
//   configurable: false
// }
```

In this example:

- **`value`** is set to `'Alice'`.
- **`writable`** is `false`, so the value cannot be modified.
- **`enumerable`** is `true`, so the property will show up in object enumeration.
- **`configurable`** is `false`, so the property cannot be deleted or its descriptor modified.

### 7. **What happens if you set the `writable` attribute of a property to `false`?**

When you set the **`writable`** attribute of a property to `false`, it makes the property **read-only**, meaning its value **cannot be changed** after it's been set. Attempting to assign a new value to the property will have no effect. In **strict mode**, attempting to change the value will throw an error.

### Key Points:

- The **`writable: false`** setting ensures that the property’s value cannot be modified.
- If the property is set as **`writable: false`**, any attempt to modify it using an assignment will fail silently in non-strict mode.
- In **strict mode**, attempting to change a read-only property will throw a `TypeError`.

### Example 1: Non-strict Mode

```javascript
const obj = {};
Object.defineProperty(obj, "name", {
  value: "Alice",
  writable: false,
});

console.log(obj.name); // 'Alice'

// Trying to modify the value
obj.name = "Bob"; // No error, but the value remains 'Alice'
console.log(obj.name); // 'Alice'
```

In this example, the `name` property is set with `writable: false`. When you try to modify `obj.name`, the change is ignored, and the value remains `"Alice"`.

### Example 2: Strict Mode

```javascript
"use strict"; // Enabling strict mode

const obj = {};
Object.defineProperty(obj, "name", {
  value: "Alice",
  writable: false,
});

console.log(obj.name); // 'Alice'

// Trying to modify the value will throw an error in strict mode
obj.name = "Bob"; // Throws TypeError: Cannot assign to read only property 'name' of object
```

In strict mode, attempting to assign a new value to a **non-writable** property causes a `TypeError` to be thrown, making it more explicit that the property cannot be modified.

### Why Use `writable: false`?

Setting `writable: false` is useful for:

1. **Creating constants**: If you want a property that cannot be modified after being set (e.g., a constant value).
2. **Immutability**: Ensuring that certain object properties cannot be changed after they are defined, which can help in protecting the integrity of the object's state.
3. **Object freezing**: By combining `writable: false` with `configurable: false` and `enumerable: false`, you can create an immutable property. This is similar to "freezing" an object.

Example of a frozen property:

```javascript
const obj = {};
Object.defineProperty(obj, "name", {
  value: "Alice",
  writable: false,
  configurable: false,
  enumerable: true,
});

console.log(obj.name); // 'Alice'

// Attempts to change the value will be ignored
obj.name = "Bob";
console.log(obj.name); // 'Alice'

// The property cannot be deleted or modified
delete obj.name; // No effect, property remains on the object
console.log(obj.name); // 'Alice'
```

In this case, the property is both **non-writable** and **non-configurable**, meaning it cannot be changed or deleted after being defined.

### 8. **How can you define a property with custom attributes in JavaScript?**

In JavaScript, you can define a property with custom attributes (such as `writable`, `enumerable`, and `configurable`) using the `Object.defineProperty()` method. This method allows you to specify detailed configurations for an object property.

### Syntax:

```javascript
Object.defineProperty(obj, prop, descriptor);
```

- **`obj`**: The object where the property will be defined.
- **`prop`**: The name of the property to define.
- **`descriptor`**: An object that contains the custom attributes (also called **property descriptor**).

### Property Descriptor Attributes:

1. **`value`**: The value associated with the property (for data properties).
2. **`writable`**: A boolean indicating whether the property’s value can be changed.
3. **`enumerable`**: A boolean indicating whether the property will show up during enumeration (like `for...in` or `Object.keys()`).
4. **`configurable`**: A boolean indicating whether the property descriptor can be changed and whether the property can be deleted.
5. **`get`**: A function that returns the property’s value when accessed (for accessor properties).
6. **`set`**: A function that sets the property’s value when modified (for accessor properties).

### Example 1: Define a Data Property with Custom Attributes

```javascript
const obj = {};

// Define a property with custom attributes
Object.defineProperty(obj, "name", {
  value: "Alice", // The value of the property
  writable: false, // The value cannot be changed
  enumerable: true, // The property is enumerable
  configurable: true, // The property descriptor can be modified
});

console.log(obj.name); // 'Alice'

obj.name = "Bob"; // Attempting to modify the value
console.log(obj.name); // 'Alice' (value is not changed because writable is false)
```

### Example 2: Define an Accessor Property (with `get` and `set`)

```javascript
const person = {};

// Define an accessor property with custom `get` and `set`
Object.defineProperty(person, "fullName", {
  get() {
    return this.firstName + " " + this.lastName;
  },
  set(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
  enumerable: true, // The property will appear in enumeration
  configurable: true, // The property descriptor can be modified
});

// Set the values using the setter
person.fullName = "John Doe";

console.log(person.firstName); // 'John'
console.log(person.lastName); // 'Doe'
console.log(person.fullName); // 'John Doe'
```

### Example 3: Define a Non-Configurable Property

```javascript
const obj = {};

Object.defineProperty(obj, "immutable", {
  value: "This cannot be changed",
  writable: false, // The value cannot be modified
  configurable: false, // The property cannot be deleted or redefined
  enumerable: true, // The property can be enumerated
});

console.log(obj.immutable); // 'This cannot be changed'

// Trying to modify or delete will have no effect
obj.immutable = "New value"; // The value will not change
console.log(obj.immutable); // 'This cannot be changed'

delete obj.immutable; // The property cannot be deleted
console.log(obj.immutable); // 'This cannot be changed'
```

### Summary of Common Property Descriptor Attributes:

| Attribute      | Description                                                                             | Possible Values           | Default Value (for regular data properties) |
| -------------- | --------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------- |
| `value`        | The actual value of the property.                                                       | Any JavaScript value      | Depends on how the property is defined      |
| `writable`     | Whether the property's value can be modified.                                           | `true` or `false`         | `true`                                      |
| `enumerable`   | Whether the property appears in object enumeration (e.g., `for...in`, `Object.keys()`). | `true` or `false`         | `true`                                      |
| `configurable` | Whether the property can be deleted or modified.                                        | `true` or `false`         | `true`                                      |
| `get`          | A getter function that returns the value of the property.                               | A function or `undefined` | `undefined`                                 |
| `set`          | A setter function that sets the value of the property.                                  | A function or `undefined` | `undefined`                                 |

### Conclusion:

By using `Object.defineProperty()`, you can create highly customizable properties on objects, allowing for fine-grained control over behavior such as mutability, visibility in enumeration, and configurability. This is particularly useful for implementing getters and setters or ensuring the integrity of object properties.

### 9. **What is the difference between `Object.defineProperty` and `Object.defineProperties`?**

The main difference between `Object.defineProperty` and `Object.defineProperties` in JavaScript is that they allow you to define properties on an object, but they differ in how they accept the properties to be defined:

### 1. **`Object.defineProperty`**:

- **Purpose**: Defines a **single** property on an object.
- **Syntax**:
  ```javascript
  Object.defineProperty(obj, prop, descriptor);
  ```
  - **`obj`**: The object where the property will be defined.
  - **`prop`**: The name of the property to define.
  - **`descriptor`**: An object containing property attributes such as `value`, `writable`, `enumerable`, and `configurable`.

#### Example of `Object.defineProperty`:

```javascript
const person = {};
Object.defineProperty(person, "name", {
  value: "Alice",
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(person.name); // 'Alice'
```

### 2. **`Object.defineProperties`**:

- **Purpose**: Defines **multiple** properties on an object at once.
- **Syntax**:
  ```javascript
  Object.defineProperties(obj, descriptors);
  ```
  - **`obj`**: The object where the properties will be defined.
  - **`descriptors`**: An object where each key is a property name, and each value is a property descriptor (just like the `descriptor` parameter in `Object.defineProperty`).

#### Example of `Object.defineProperties`:

```javascript
const person = {};
Object.defineProperties(person, {
  name: {
    value: "Alice",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 30,
    writable: false,
    enumerable: true,
    configurable: true,
  },
});

console.log(person.name); // 'Alice'
console.log(person.age); // 30
```

### Key Differences:

| Feature                  | `Object.defineProperty`                                 | `Object.defineProperties`                                                         |
| ------------------------ | ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Number of properties** | Defines **one** property at a time.                     | Defines **multiple** properties at once.                                          |
| **Parameters**           | Takes three arguments: `obj`, `prop`, and `descriptor`. | Takes two arguments: `obj` and `descriptors` (an object of multiple descriptors). |
| **Use case**             | When you need to define or modify a single property.    | When you need to define or modify multiple properties at once.                    |
| **Return value**         | Returns the modified object `obj`.                      | Returns the modified object `obj`.                                                |

### Summary:

- Use **`Object.defineProperty`** when you want to define a single property with custom descriptors.
- Use **`Object.defineProperties`** when you need to define or modify multiple properties at once with custom descriptors. This method simplifies the code when you need to handle multiple properties simultaneously.

### 10. **How do you prevent adding new properties to an object?**

In JavaScript, you can prevent adding new properties to an object by using `Object.preventExtensions()`. This method ensures that no new properties can be added to the object, but it does not affect the ability to modify or delete existing properties.

### Methods to Prevent Adding New Properties:

1. **`Object.preventExtensions()`**: Prevents adding new properties, but existing properties can still be modified or deleted.
2. **`Object.seal()`**: Prevents adding or deleting properties, but existing properties can still be modified if they are writable.
3. **`Object.freeze()`**: Prevents adding, deleting, or modifying any properties, making the object completely immutable.

### 1. **`Object.preventExtensions()`**:

This method prevents the addition of new properties to an object but does not affect existing properties. You can still modify or delete existing properties.

#### Example:

```javascript
const obj = { name: "Alice" };

// Prevent adding new properties
Object.preventExtensions(obj);

console.log(Object.isExtensible(obj)); // false

// Existing properties can still be modified
obj.name = "Bob";
console.log(obj.name); // 'Bob'

// New properties cannot be added
obj.age = 30; // This will not add 'age' to the object
console.log(obj.age); // undefined
```

### 2. **`Object.seal()`**:

This method prevents new properties from being added and also prevents existing properties from being deleted. However, it does not prevent existing properties from being modified if they are writable.

#### Example:

```javascript
const obj = { name: "Alice" };

// Seal the object: Prevent adding or deleting properties
Object.seal(obj);

console.log(Object.isSealed(obj)); // true

// Modify existing properties
obj.name = "Bob"; // This is allowed
console.log(obj.name); // 'Bob'

// New properties cannot be added
obj.age = 30; // This will not add 'age' to the object
console.log(obj.age); // undefined

// Properties cannot be deleted
delete obj.name; // This will not delete the 'name' property
console.log(obj.name); // 'Bob'
```

### 3. **`Object.freeze()`**:

This method prevents adding, deleting, or modifying properties, making the object completely immutable.

#### Example:

```javascript
const obj = { name: "Alice" };

// Freeze the object: Prevent any modifications, additions, or deletions
Object.freeze(obj);

console.log(Object.isFrozen(obj)); // true

// Modify existing properties (not allowed)
obj.name = "Bob"; // This will not change the 'name' property
console.log(obj.name); // 'Alice'

// New properties cannot be added
obj.age = 30; // This will not add 'age' to the object
console.log(obj.age); // undefined

// Properties cannot be deleted
delete obj.name; // This will not delete the 'name' property
console.log(obj.name); // 'Alice'
```

### Summary:

- **`Object.preventExtensions(obj)`**: Prevents adding new properties to the object but allows modification and deletion of existing properties.
- **`Object.seal(obj)`**: Prevents adding or deleting properties but allows modification of existing writable properties.
- **`Object.freeze(obj)`**: Prevents adding, deleting, or modifying properties, making the object completely immutable.

If your goal is simply to prevent new properties from being added while allowing modification of existing properties, `Object.preventExtensions()` is the appropriate method. If you want to ensure that no properties can be added or deleted, but modifications to existing properties are still allowed, use `Object.seal()`. For complete immutability, use `Object.freeze()`.

---

## **Advanced Questions**

### 11. **What does the `get` and `set` in a property descriptor do?**

In JavaScript, the `get` and `set` properties in a **property descriptor** allow you to define **getter** and **setter** methods for an object property. These methods control how a property is accessed and modified.

### 1. **`get` (Getter)**:

The `get` method is a function that is invoked when the property is read. It allows you to define custom logic to return a value whenever the property is accessed.

### 2. **`set` (Setter)**:

The `set` method is a function that is invoked when a value is assigned to the property. It allows you to define custom logic to modify the value of a property when it is set.

### Example:

```javascript
const person = {};

Object.defineProperty(person, "name", {
  get() {
    return this._name; // Custom getter: returns the value of the private '_name' property
  },
  set(value) {
    if (value.length > 3) {
      this._name = value; // Custom setter: only allows names longer than 3 characters
    } else {
      console.log("Name must be longer than 3 characters");
    }
  },
  enumerable: true,
  configurable: true,
});

// Using the getter
person.name = "John"; // Invokes the setter
console.log(person.name); // Invokes the getter, Output: 'John'

person.name = "Al"; // Invokes the setter
console.log(person.name); // Output: 'Name must be longer than 3 characters' and no change in 'name'
```

### Explanation:

- **Getter (`get`)**: The `get` function is called when you access the property `person.name`. In this example, the getter returns the value of the private `_name` property.
- **Setter (`set`)**: The `set` function is called when you assign a value to `person.name`. Here, the setter checks if the name is longer than 3 characters before allowing the assignment.

### Key Points:

- **Getter (`get`)**: Defines custom logic for reading the property value.
- **Setter (`set`)**: Defines custom logic for writing a new value to the property.

These methods give you more control over how object properties are accessed or modified. You can use them to add validation, compute values on the fly, or maintain private/internal properties while exposing only specific behavior to the outside world.

### 12. **Can a property have both `value` and `get`/`set` attributes? Why or why not?**

No, a property **cannot** have both `value` and `get`/`set` attributes in its descriptor.

### Why?

- The `value` attribute is used to define a **static value** for the property, while the `get` and `set` attributes define **getter** and **setter** methods for the property.
- These two mechanisms are mutually exclusive:
  - If you define a `value` attribute, it directly sets the value of the property.
  - If you define a `get` and/or `set`, you're defining custom functions that control how the value of the property is retrieved or set, making the `value` attribute unnecessary or contradictory.

### Behavior:

- If you define a `value` attribute in the property descriptor, the `get` and `set` attributes will be ignored.
- Conversely, if you define `get` or `set` attributes, the property will act as a **getter** or **setter** property, and the `value` attribute will have no effect.

### Example:

```javascript
const obj = {};

Object.defineProperty(obj, "name", {
  value: "Alice",
  writable: true,
  enumerable: true,
  configurable: true,
  get() {
    return "Getter is overriding the value";
  },
});

console.log(obj.name); // 'Getter is overriding the value'
```

### Explanation:

- In this example, although `value: 'Alice'` is set, the presence of the `get()` method overrides the `value` and causes the getter function to be invoked when `obj.name` is accessed.
- The `value` attribute is ignored when a `get` or `set` method is defined because the property is no longer a simple value property but behaves as a dynamic property with a getter and/or setter.

### Conclusion:

- You cannot have both `value` and `get`/`set` because they serve different purposes: `value` is for setting a static value, while `get`/`set` is for defining dynamic behavior. When `get`/`set` is defined, it completely replaces the `value` attribute, and vice versa.

### 13. **What happens when you set `configurable` to `false` for a property?**

When you set the `configurable` attribute of a property descriptor to `false`, it makes the property **non-configurable**. This means that the property cannot be:

1. **Deleted**: The property cannot be removed from the object.
2. **Modified**: The property’s attributes (such as `writable`, `enumerable`, or `configurable` itself) cannot be changed.
3. **Reconfigured**: The property cannot be redefined using `Object.defineProperty()`.

### Key Points:

- Once a property is made non-configurable (`configurable: false`), its configuration is locked, and you cannot modify or delete it.
- **Non-configurable properties** can still be modified (if `writable: true`), accessed, and enumerated (if `enumerable: true`), but the property itself cannot be redefined or deleted.

### Example:

```javascript
const obj = {};

Object.defineProperty(obj, "name", {
  value: "Alice",
  writable: true,
  enumerable: true,
  configurable: false,
});

console.log(obj.name); // 'Alice'

// Trying to delete the property (fails because configurable is false)
delete obj.name;
console.log(obj.name); // 'Alice' (the property is still there)

// Trying to modify the property descriptor (fails because configurable is false)
Object.defineProperty(obj, "name", {
  value: "Bob",
}); // TypeError: Cannot redefine property: name

// Trying to modify writable (fails because configurable is false)
Object.defineProperty(obj, "name", {
  writable: false,
}); // TypeError: Cannot redefine property: name
```

### Explanation:

- The property `name` is made **non-configurable** by setting `configurable: false`.
- **Deleting** the property with `delete obj.name` has no effect because the property is non-configurable.
- Trying to **redefine** or change the property descriptor using `Object.defineProperty()` results in a `TypeError`, because the property is non-configurable, and thus its configuration cannot be changed.

### Summary:

Setting `configurable: false` on a property ensures that the property cannot be deleted, redefined, or have its attributes changed (including `configurable` itself). This is useful for preventing accidental or malicious changes to important properties in an object.

### 14. **How can you make an object immutable?**

To make an object **immutable** in JavaScript, you need to prevent modifications to the object's properties. This can be done using a combination of **`Object.freeze()`**, **`Object.seal()`**, and **`Object.preventExtensions()`** methods, each of which offers different levels of immutability.

### 1. **`Object.freeze()`**: Makes the object and its properties **completely immutable**.

- **Prevents** adding, deleting, or modifying properties.
- It also applies immutability to nested objects, but only at the top level. Nested objects are still mutable unless frozen individually.

#### Example:

```javascript
const obj = { name: "Alice", age: 30 };

Object.freeze(obj);

// Attempting to modify properties
obj.name = "Bob"; // This will not change the value
obj.age = 25; // This will not change the value
console.log(obj.name); // 'Alice'
console.log(obj.age); // 30

// Attempting to delete a property
delete obj.name; // This will not delete the property
console.log(obj.name); // 'Alice'

// Attempting to add a new property
obj.gender = "female"; // This will not add a new property
console.log(obj.gender); // undefined

// Attempting to modify a nested object
obj.address = { city: "New York" };
Object.freeze(obj.address); // Freeze the nested object
obj.address.city = "Los Angeles"; // This will not change the value
console.log(obj.address.city); // 'New York'
```

### 2. **`Object.seal()`**: Prevents new properties from being added or deleted but allows modification of existing properties.

- **Prevents** adding or deleting properties.
- **Allows** modification of writable properties.

#### Example:

```javascript
const obj = { name: "Alice", age: 30 };

Object.seal(obj);

// Attempting to add new properties
obj.gender = "female"; // This will not add a new property
console.log(obj.gender); // undefined

// Attempting to delete properties
delete obj.name; // This will not delete the property
console.log(obj.name); // 'Alice'

// Modifying existing properties is still allowed
obj.age = 25; // This will update the 'age' property
console.log(obj.age); // 25
```

### 3. **`Object.preventExtensions()`**: Prevents adding new properties, but existing properties can still be modified or deleted.

- **Prevents** new properties from being added, but does not prevent modification or deletion of existing properties.

#### Example:

```javascript
const obj = { name: "Alice", age: 30 };

Object.preventExtensions(obj);

// Attempting to add new properties
obj.gender = "female"; // This will not add a new property
console.log(obj.gender); // undefined

// Modifying existing properties is still allowed
obj.name = "Bob"; // This will change the 'name' property
console.log(obj.name); // 'Bob'

// Deleting existing properties is still allowed
delete obj.age; // This will delete the 'age' property
console.log(obj.age); // undefined
```

### Combining Methods for Full Immutability:

To make an object completely immutable, including its nested properties, you can combine **`Object.freeze()`** with a recursive function that freezes all nested objects as well.

#### Example:

```javascript
const deepFreeze = (obj) => {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach((prop) => {
    if (obj[prop] && typeof obj[prop] === "object") {
      deepFreeze(obj[prop]); // Recursively freeze nested objects
    }
  });
};

const obj = { name: "Alice", address: { city: "New York", zip: "10001" } };

deepFreeze(obj);

// Attempting to modify top-level properties
obj.name = "Bob"; // This will not change the value
console.log(obj.name); // 'Alice'

// Attempting to modify nested properties
obj.address.city = "Los Angeles"; // This will not change the value
console.log(obj.address.city); // 'New York'
```

### Summary of Differences:

- **`Object.freeze()`**: Completely prevents modification, deletion, or addition of properties (including nested objects, but not deeply).
- **`Object.seal()`**: Prevents property addition or deletion but allows modification of existing properties.
- **`Object.preventExtensions()`**: Prevents adding new properties but allows modification or deletion of existing ones.

### 15. **What is the difference between `Object.preventExtensions`, `Object.seal`, and `Object.freeze`?**

The `Object.preventExtensions()`, `Object.seal()`, and `Object.freeze()` methods in JavaScript all provide ways to control how objects can be modified, but they differ in the extent of restrictions they impose. Here's a detailed comparison:

### 1. **`Object.preventExtensions()`**

- **Purpose**: Prevents new properties from being added to an object.
- **Allowed Operations**:
  - You can still **modify** existing properties (if they are writable).
  - You can still **delete** existing properties (if they are configurable).
- **Restrictions**:
  - No new properties can be added to the object.
- **Use Case**: Use when you want to prevent further addition of new properties but still want to allow modification and deletion of existing properties.

#### Example:

```javascript
const obj = { name: "Alice" };
Object.preventExtensions(obj);

obj.age = 25; // This will not add the property 'age'
console.log(obj.age); // undefined

obj.name = "Bob"; // This will update the 'name' property
console.log(obj.name); // 'Bob'

delete obj.name; // This will delete the 'name' property
console.log(obj.name); // undefined
```

### 2. **`Object.seal()`**

- **Purpose**: Prevents new properties from being added and makes all existing properties **non-deletable**.
- **Allowed Operations**:
  - You can still **modify** existing properties if they are writable.
  - You **cannot** delete existing properties.
- **Restrictions**:
  - No new properties can be added.
  - Existing properties cannot be deleted.
  - The attributes of existing properties (e.g., `writable`, `enumerable`, `configurable`) cannot be modified, but the values of writable properties can still be changed.
- **Use Case**: Use when you want to ensure that no properties are deleted, and no new properties can be added, but still allow changes to existing property values.

#### Example:

```javascript
const obj = { name: "Alice" };
Object.seal(obj);

obj.age = 25; // This will not add the property 'age'
console.log(obj.age); // undefined

obj.name = "Bob"; // This will update the 'name' property
console.log(obj.name); // 'Bob'

delete obj.name; // This will not delete the property
console.log(obj.name); // 'Bob'
```

### 3. **`Object.freeze()`**

- **Purpose**: Makes the object and its properties **immutable**.
- **Allowed Operations**:
  - You cannot modify any properties.
  - You cannot delete any properties.
  - You cannot add new properties.
- **Restrictions**:
  - No new properties can be added.
  - Existing properties cannot be modified (whether writable or not).
  - Existing properties cannot be deleted.
- **Use Case**: Use when you want to make an object completely immutable, including its properties (though it doesn't apply to nested objects unless you explicitly freeze them).

#### Example:

```javascript
const obj = { name: "Alice" };
Object.freeze(obj);

obj.name = "Bob"; // This will not change the 'name' property
console.log(obj.name); // 'Alice'

obj.age = 25; // This will not add the 'age' property
console.log(obj.age); // undefined

delete obj.name; // This will not delete the 'name' property
console.log(obj.name); // 'Alice'
```

### Summary of Differences:

| Method                           | Adds New Properties | Deletes Properties | Modifies Existing Properties | Modifies Property Attributes |
| -------------------------------- | ------------------- | ------------------ | ---------------------------- | ---------------------------- |
| **`Object.preventExtensions()`** | No                  | Yes                | Yes                          | No                           |
| **`Object.seal()`**              | No                  | No                 | Yes                          | No                           |
| **`Object.freeze()`**            | No                  | No                 | No                           | No                           |

### Key Takeaways:

- **`Object.preventExtensions()`**: Stops new properties from being added, but properties can still be modified or deleted.
- **`Object.seal()`**: Stops new properties from being added and prevents deletion of existing properties, but allows modification of writable properties.
- **`Object.freeze()`**: Completely freezes the object: no additions, deletions, or modifications (including nested objects unless explicitly frozen).

---

## **Expert-Level Questions**

### 16. **How can you implement lazy property initialization using getters?**

Lazy property initialization is a technique where the value of a property is not computed until it is actually needed. In JavaScript, you can implement lazy property initialization using **getters** in object literals or **`Object.defineProperty()`**. The idea is to delay the computation or initialization of a property until the first time it is accessed.

Here’s how you can implement lazy initialization using getters:

### Example 1: Lazy Initialization Using Getter in Object Literals

In this example, the property `expensiveData` will only be computed when it is accessed for the first time.

```javascript
const obj = {
  _expensiveData: null,

  // Getter for 'expensiveData' that initializes the data lazily
  get expensiveData() {
    if (this._expensiveData === null) {
      console.log("Initializing expensive data...");
      // Simulate an expensive operation (e.g., a complex calculation)
      this._expensiveData = { value: Math.random() * 100 }; // Dummy expensive calculation
    }
    return this._expensiveData;
  },
};

// The expensive data is initialized only when accessed
console.log(obj.expensiveData); // "Initializing expensive data..." followed by the computed value
console.log(obj.expensiveData); // No initialization, just return the cached value
```

### Explanation:

- **Lazy Initialization**: The property `expensiveData` is initialized only when accessed for the first time. Initially, it's set to `null` in the private `_expensiveData` field.
- **Getter**: The getter checks if the value has already been initialized. If it hasn’t, it performs the expensive operation and assigns the result to `_expensiveData`. After that, it simply returns the cached value.

### Example 2: Lazy Initialization Using `Object.defineProperty()`

You can also use `Object.defineProperty()` to achieve lazy initialization of a property. This allows you to define custom getter logic for any object property.

```javascript
const obj = {
  _expensiveData: null,
};

// Define a getter for 'expensiveData' using Object.defineProperty
Object.defineProperty(obj, "expensiveData", {
  get() {
    if (this._expensiveData === null) {
      console.log("Initializing expensive data...");
      // Simulate an expensive operation (e.g., complex calculation)
      this._expensiveData = { value: Math.random() * 100 }; // Dummy expensive calculation
    }
    return this._expensiveData;
  },
  enumerable: true, // Optional: makes the property enumerable
  configurable: true, // Optional: allows reconfiguration later
});

// The expensive data is initialized only when accessed
console.log(obj.expensiveData); // "Initializing expensive data..." followed by the computed value
console.log(obj.expensiveData); // No initialization, just return the cached value
```

### Advantages of Lazy Initialization:

1. **Performance Optimization**: Expensive operations are deferred until they are actually needed, potentially saving resources.
2. **Resource Efficiency**: If the property is never accessed, the initialization code is never executed, improving the efficiency of your application.

### Key Points:

- **Getters** allow you to define the logic to initialize or compute the value only when it is needed.
- **Caching** can be implemented inside the getter to store the result and avoid recalculating it on subsequent accesses.
- This approach is useful when the initialization or computation of a property is expensive and you want to delay it until the value is actually required.

### 17. **What are the differences in property behavior between regular objects and `Object.create(null)` objects?**

The primary difference between regular objects and objects created with `Object.create(null)` lies in their prototype chain and the behavior of inherited properties. Here's a breakdown of how these two types of objects differ in terms of property behavior:

### 1. **Prototype Chain**

- **Regular Objects**: Regular objects created using object literals (`{}`) or `new Object()` inherit from `Object.prototype`. This means they have access to properties and methods like `toString()`, `hasOwnProperty()`, `isPrototypeOf()`, etc., that are inherited from `Object.prototype`.

  Example:

  ```javascript
  const regularObject = {};
  console.log(regularObject.hasOwnProperty); // Inherited from Object.prototype
  ```

- **Objects Created with `Object.create(null)`**: Objects created with `Object.create(null)` do **not** inherit from `Object.prototype`. As a result, they do not have any of the methods or properties (such as `toString()` or `hasOwnProperty()`) that are typically available on regular objects. This makes them **prototype-less** and effectively have a clean, "blank slate."

  Example:

  ```javascript
  const objWithNullPrototype = Object.create(null);
  console.log(objWithNullPrototype.hasOwnProperty); // undefined, as no prototype exists
  ```

### 2. **Inherited Methods and Properties**

- **Regular Objects**: Inherited methods and properties from `Object.prototype` are accessible in regular objects, which may lead to issues if those properties conflict with keys in the object itself.

  Example:

  ```javascript
  const regularObject = {
    toString: "someValue",
  };
  console.log(regularObject.toString); // 'someValue', overwrites the inherited method
  ```

- **Objects Created with `Object.create(null)`**: Since these objects have no prototype, they do not inherit properties like `toString` or `hasOwnProperty`. This means you don’t have to worry about naming conflicts with inherited properties, which can be useful when creating objects to be used as "maps" or for working with data where you don’t want to accidentally overwrite or access prototype properties.

  Example:

  ```javascript
  const objWithNullPrototype = Object.create(null);
  objWithNullPrototype.toString = "someValue";
  console.log(objWithNullPrototype.toString); // 'someValue', no inherited method to override
  ```

### 3. **Key Names and Property Conflicts**

- **Regular Objects**: Regular objects can potentially have property names that collide with those found in `Object.prototype`. For example, you could accidentally overwrite `toString`, `hasOwnProperty`, or other prototype methods.

  Example:

  ```javascript
  const obj = {
    toString: "Custom toString method",
  };
  console.log(obj.toString); // 'Custom toString method'
  console.log(obj.hasOwnProperty); // inherited from Object.prototype, still accessible
  ```

- **Objects Created with `Object.create(null)`**: Since these objects do not inherit from `Object.prototype`, there’s no risk of colliding with built-in properties or methods. This makes them safer to use when the keys you want to store are arbitrary and could potentially conflict with those on the prototype.

  Example:

  ```javascript
  const objWithNullPrototype = Object.create(null);
  objWithNullPrototype.toString = "Custom toString method";
  console.log(objWithNullPrototype.toString); // 'Custom toString method'
  // No inherited methods, so no conflict with Object.prototype methods
  ```

### 4. **Use Cases**

- **Regular Objects**: Ideal for general-purpose objects where inheritance from `Object.prototype` provides useful functionality, like having access to `toString()`, `hasOwnProperty()`, and other methods from `Object.prototype`.

- **Objects Created with `Object.create(null)`**: Useful when you want an object to function purely as a **dictionary** or **map** and avoid any inherited properties. It's commonly used in scenarios like building hash maps or key-value stores where the object properties should not be affected by inherited properties or methods.

### 5. **Property Enumeration**

- **Regular Objects**: When you enumerate properties of regular objects, inherited properties from `Object.prototype` are also included unless they are filtered out.

  Example:

  ```javascript
  const obj = {
    key: "value",
  };
  for (let key in obj) {
    console.log(key); // Will log 'key' (the own property) and inherited properties like 'toString'
  }
  ```

- **Objects Created with `Object.create(null)`**: Only the properties that are directly added to the object will be enumerated. Since there's no prototype chain, it will not include any inherited properties.

  Example:

  ```javascript
  const objWithNullPrototype = Object.create(null);
  objWithNullPrototype.key = "value";
  for (let key in objWithNullPrototype) {
    console.log(key); // Will log 'key' only, no inherited properties like 'toString'
  }
  ```

### Summary of Differences

| Behavior                                    | Regular Object (e.g., `{}`)                        | Object created with `Object.create(null)`                       |
| ------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------- |
| **Prototype Chain**                         | Inherits from `Object.prototype`                   | No prototype, direct prototype is `null`                        |
| **Inherited Properties**                    | Includes methods like `toString`, `hasOwnProperty` | No inherited properties                                         |
| **Key Conflicts with Inherited Properties** | Can conflict with inherited properties             | No conflict, clean object                                       |
| **Use Case**                                | General-purpose objects, with inherited methods    | Key-value stores, hash maps, or when inheritance is not desired |
| **Property Enumeration**                    | Includes both own and inherited properties         | Only enumerates own properties                                  |

In conclusion, **`Object.create(null)`** provides a clean object without any inherited properties, making it ideal for cases where you want to store arbitrary keys without worrying about name conflicts with prototype methods. Regular objects, on the other hand, are more general-purpose and come with the benefits of inherited methods from `Object.prototype`.

### 18. **Why might you use `Object.defineProperty` instead of regular assignment for creating properties?**

Using `Object.defineProperty` instead of regular assignment (`obj.property = value`) to create properties on an object offers several key advantages, particularly when you need more control over the behavior of those properties. Here are the primary reasons why `Object.defineProperty` is used:

### 1. **Control Over Property Attributes (Configurable, Writable, Enumerable)**

By default, when you use regular assignment (`obj.property = value`), the property has default attributes:

- **Writable**: The property is writable (can be changed).
- **Enumerable**: The property will be enumerated when using `for...in` loops or `Object.keys()`.
- **Configurable**: The property can be deleted or modified.

Using `Object.defineProperty`, you can customize these attributes to make the property:

- **Non-writable** (`writable: false`) to prevent it from being modified after assignment.
- **Non-enumerable** (`enumerable: false`) to prevent it from showing up in loops or methods like `Object.keys()`.
- **Non-configurable** (`configurable: false`) to make the property immutable or prevent its deletion or reconfiguration.

### Example: Using `Object.defineProperty` to set custom property attributes

```javascript
const obj = {};

// Define a non-writable, non-enumerable property
Object.defineProperty(obj, "name", {
  value: "John Doe",
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(obj.name); // 'John Doe'

obj.name = "Jane Doe"; // Will not modify the property because it's non-writable
console.log(obj.name); // Still 'John Doe'

for (let key in obj) {
  console.log(key); // Will not log 'name' because it's non-enumerable
}

delete obj.name; // Will not delete because it's non-configurable
```

### 2. **Getters and Setters**

`Object.defineProperty` allows you to define **custom getters** and **setters** for a property. This means you can execute custom logic when a property is accessed or modified.

- **Getter**: Defines the logic that runs when the property is read.
- **Setter**: Defines the logic that runs when the property is written to.

### Example: Defining a property with a getter and setter

```javascript
const obj = {};

// Define a property with a getter and setter
Object.defineProperty(obj, "age", {
  get() {
    return this._age;
  },
  set(value) {
    if (value < 0) {
      console.log("Age cannot be negative");
    } else {
      this._age = value;
    }
  },
});

obj.age = 25; // Calls setter
console.log(obj.age); // Calls getter, outputs 25

obj.age = -5; // Will log: 'Age cannot be negative'
```

### 3. **Creating Private or Protected Properties**

With `Object.defineProperty`, you can define properties that are not directly accessible, or modify how properties behave when accessed. This is especially useful for creating **private** or **protected** properties in JavaScript.

### Example: Creating a private property

```javascript
const person = {};
let _name = ""; // Private variable

Object.defineProperty(person, "name", {
  get() {
    return _name;
  },
  set(value) {
    _name = value;
  },
});

person.name = "Alice";
console.log(person.name); // 'Alice' - Accesses via the getter
```

### 4. **Preventing Deletion of Properties**

By default, properties created through regular assignment can be deleted using the `delete` operator. If you want to prevent the deletion of a property, you can use `Object.defineProperty` with the `configurable: false` attribute.

### Example: Preventing deletion of a property

```javascript
const obj = {};

Object.defineProperty(obj, "id", {
  value: 123,
  configurable: false,
});

console.log(obj.id); // 123

delete obj.id; // Will not work, as 'id' is not configurable
console.log(obj.id); // 123 (property is still there)
```

### 5. **Defining Computed Properties**

With `Object.defineProperty`, you can define **computed properties** that depend on other properties or dynamic calculations. This is not possible using regular assignment.

### Example: Defining a computed property

```javascript
const obj = {
  _x: 10,
  _y: 20,
};

Object.defineProperty(obj, "sum", {
  get() {
    return this._x + this._y;
  },
});

console.log(obj.sum); // 30 (computed dynamically when accessed)
```

### 6. **Ensuring Consistency and Encapsulation**

`Object.defineProperty` can be used to ensure that an object's properties are set and accessed in a controlled way. For example, by defining setters, you can validate or transform data before it's stored in the object.

### Example: Ensuring data consistency with setters

```javascript
const person = {};

Object.defineProperty(person, "age", {
  set(value) {
    if (typeof value !== "number") {
      throw new Error("Age must be a number");
    }
    this._age = value;
  },
  get() {
    return this._age;
  },
});

person.age = 25; // Works fine
console.log(person.age); // 25

person.age = "abc"; // Throws error: Age must be a number
```

### Summary of Benefits of `Object.defineProperty`:

1. **Control over property attributes**: Set `writable`, `enumerable`, and `configurable` flags for precise control over the property behavior.
2. **Custom getters and setters**: Define logic for getting and setting property values.
3. **Encapsulation**: Create private or protected properties and define access control.
4. **Computed properties**: Create properties that return calculated values when accessed.
5. **Prevent deletion**: Make sure properties are not deleted by setting `configurable: false`.

In general, `Object.defineProperty` is used when you need more control over an object's properties than what is offered by regular assignment. It is essential for cases like defining custom accessors, creating immutable properties, or managing how properties are modified or accessed.

### 19. **How can you dynamically intercept and control access to object properties using proxies?**

In JavaScript, you can use **`Proxy`** to dynamically intercept and control access to object properties. A **Proxy** object allows you to define custom behavior for fundamental operations (such as reading, writing, deleting properties, etc.) on an object.

A **Proxy** is created by passing an object (called the "target") and a handler object to the `new Proxy()` constructor. The handler object contains traps (special methods) that can intercept various operations on the target object, such as `get`, `set`, `deleteProperty`, etc.

### Basic Syntax of `Proxy`

```javascript
const proxy = new Proxy(target, handler);
```

- `target`: The original object you want to proxy.
- `handler`: An object that defines the traps to intercept specific operations.

### Example: Intercepting Property Access with `get` Trap

The `get` trap is triggered when a property of the target object is accessed.

```javascript
const target = {
  name: "John",
  age: 30,
};

const handler = {
  get: function (target, prop, receiver) {
    if (prop in target) {
      console.log(`Getting property: ${prop}`);
      return target[prop]; // Return the value of the property
    } else {
      console.log(`Property ${prop} not found.`);
      return undefined; // Return undefined if the property doesn't exist
    }
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // Output: Getting property: name\nJohn
console.log(proxy.age); // Output: Getting property: age\n30
console.log(proxy.address); // Output: Property address not found.
```

### Example: Intercepting Property Assignment with `set` Trap

The `set` trap is triggered when a property is assigned a value.

```javascript
const target = {};

const handler = {
  set: function (target, prop, value, receiver) {
    console.log(`Setting property ${prop} to ${value}`);
    target[prop] = value; // Assign the value to the target
    return true; // Indicate that the assignment was successful
  },
};

const proxy = new Proxy(target, handler);

proxy.name = "Alice"; // Output: Setting property name to Alice
console.log(target.name); // Output: Alice
```

### Example: Intercepting Property Deletion with `deleteProperty` Trap

The `deleteProperty` trap is triggered when a property is deleted.

```javascript
const target = {
  name: "John",
};

const handler = {
  deleteProperty: function (target, prop) {
    if (prop in target) {
      console.log(`Deleting property: ${prop}`);
      delete target[prop]; // Delete the property from the target
      return true; // Indicate that the deletion was successful
    } else {
      console.log(`Property ${prop} not found.`);
      return false; // Indicate that the deletion failed
    }
  },
};

const proxy = new Proxy(target, handler);

delete proxy.name; // Output: Deleting property: name
console.log(target.name); // Output: undefined
delete proxy.address; // Output: Property address not found.
```

### Example: Validating Data with `set` Trap

You can use a `Proxy` to validate or transform data before it is set on an object.

```javascript
const target = {};

const handler = {
  set: function (target, prop, value, receiver) {
    if (prop === "age" && (typeof value !== "number" || value < 0)) {
      console.log("Invalid age value");
      return false; // Reject the assignment
    }
    target[prop] = value; // Set the property
    return true;
  },
};

const proxy = new Proxy(target, handler);

proxy.name = "Alice"; // Allowed
proxy.age = 25; // Allowed
console.log(target); // { name: 'Alice', age: 25 }

proxy.age = -5; // Invalid age value
console.log(target); // { name: 'Alice', age: 25 }

proxy.age = "twenty"; // Invalid age value
console.log(target); // { name: 'Alice', age: 25 }
```

### Example: Logging Access to Object Properties

You can use a `Proxy` to log whenever a property is accessed or modified.

```javascript
const target = {
  name: "John",
  age: 30,
};

const handler = {
  get: function (target, prop) {
    console.log(`Accessing property: ${prop}`);
    return prop in target ? target[prop] : undefined;
  },
  set: function (target, prop, value) {
    console.log(`Setting property: ${prop} to ${value}`);
    target[prop] = value;
    return true;
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // Output: Accessing property: name\nJohn
proxy.age = 35; // Output: Setting property: age to 35
```

### Example: Preventing Adding New Properties with `set` Trap

You can use a `Proxy` to prevent new properties from being added to an object by intercepting assignments to undefined properties.

```javascript
const target = {
  name: "John",
};

const handler = {
  set: function (target, prop, value) {
    if (prop in target) {
      target[prop] = value; // Existing properties can still be set
      return true;
    } else {
      console.log(`Cannot add new property: ${prop}`);
      return false; // Reject the assignment
    }
  },
};

const proxy = new Proxy(target, handler);

proxy.name = "Alice"; // Allowed
console.log(target.name); // Alice

proxy.age = 30; // Cannot add new property: age
console.log(target.age); // undefined
```

### Summary of Proxy Traps

Here are some common traps you can use in `Proxy` to intercept various operations:

- **`get(target, prop)`**: Intercepts property access.
- **`set(target, prop, value)`**: Intercepts property assignment.
- **`deleteProperty(target, prop)`**: Intercepts property deletion.
- **`has(target, prop)`**: Intercepts the `in` operator to check if a property exists.
- **`ownKeys(target)`**: Intercepts `Object.keys()` and similar operations.
- **`getPrototypeOf(target)`**: Intercepts `Object.getPrototypeOf()`.
- **`setPrototypeOf(target, proto)`**: Intercepts `Object.setPrototypeOf()`.

### Why Use Proxies?

- **Data validation and transformation**: Ensure data is valid before modifying object properties.
- **Logging and debugging**: Monitor property accesses and mutations.
- **Access control**: Restrict which properties can be set or accessed.
- **Custom behavior**: Define custom logic for standard operations on objects, such as preventing the addition of new properties.

Proxies provide powerful tools for intercepting and controlling behavior at runtime, making them useful for various advanced scenarios in JavaScript.

### 20. **How do property descriptors interact with inheritance in JavaScript?**

In JavaScript, **property descriptors** define the attributes of an object's properties, such as whether they can be modified, enumerated, or deleted. These descriptors play a crucial role in how properties behave, especially in the context of inheritance.

When you use inheritance in JavaScript, the child object can inherit properties from its prototype chain, which may include properties that have specific descriptors. Understanding how property descriptors interact with inheritance can help you control and customize the behavior of inherited properties.

### Key Property Descriptors:

1. **`configurable`**: Determines whether the property can be deleted or modified (e.g., changing the value or altering attributes).
2. **`enumerable`**: Determines whether the property appears in `for...in` loops or `Object.keys()`.
3. **`writable`**: Determines whether the property value can be changed.
4. **`value`**: Holds the value of the property.

### Inheritance and Property Descriptors

When an object inherits a property, it does not directly copy the property descriptor from the prototype object; instead, it inherits the behavior of the property based on the descriptor defined in the prototype. However, you can override the inherited properties and change their descriptors.

#### Example 1: Inherited Property Descriptors

Consider the following example where we define a property with a custom descriptor in the prototype:

```javascript
const parent = {};

Object.defineProperty(parent, "name", {
  value: "John",
  writable: false,
  enumerable: true,
  configurable: true,
});

const child = Object.create(parent);

console.log(child.name); // Output: John
child.name = "Alice"; // Attempt to change the property value
console.log(child.name); // Output: John (because writable is false)

for (let prop in child) {
  console.log(prop); // Output: name (because enumerable is true)
}

delete child.name; // Attempt to delete the property
console.log(child.name); // Output: John (because configurable is true)
```

### Behavior:

- **Writable**: The `name` property in the `parent` object is non-writable (`writable: false`), meaning that the `child` object inherits this behavior, and you cannot change its value in `child`.
- **Enumerable**: The `name` property is enumerable, meaning it appears when iterating over `child`'s properties in a `for...in` loop.
- **Configurable**: The `name` property is configurable, meaning you can still delete or modify it from `child` even though it is inherited from the prototype. However, in this case, the deletion won't work because the property is inherited and doesn't exist directly in the `child` object.

### Example 2: Overriding Inherited Property Descriptors

You can override the inherited property descriptors to modify how a property behaves in the child object.

```javascript
const parent = {};

Object.defineProperty(parent, "age", {
  value: 40,
  writable: true,
  enumerable: true,
  configurable: true,
});

const child = Object.create(parent);

console.log(child.age); // Output: 40

// Overriding the inherited property descriptor
Object.defineProperty(child, "age", {
  value: 30, // Override the value
  writable: false, // Make it non-writable
  enumerable: false, // Make it non-enumerable
  configurable: false, // Make it non-configurable
});

console.log(child.age); // Output: 30
child.age = 25; // Attempt to change the value (fails because writable is false)
console.log(child.age); // Output: 30 (value doesn't change)

for (let prop in child) {
  console.log(prop); // No output because enumerable is false
}

delete child.age; // Attempt to delete (fails because configurable is false)
console.log(child.age); // Output: 30
```

### Behavior:

- **Overriding Property Value**: In this case, we override the `age` property in the `child` object, changing its value to `30`. The `child` object now has its own property `age` with a modified descriptor.
- **Writable**: The `writable: false` setting makes the property value immutable in the `child` object.
- **Enumerable**: Setting `enumerable: false` makes the `age` property not show up in enumeration loops.
- **Configurable**: Setting `configurable: false` prevents the property from being deleted or having its descriptor modified in the `child` object.

### Inheritance Chain and Property Descriptors

When you access a property on an object, JavaScript first looks for the property in the object itself. If it doesn't find the property, it then looks up the prototype chain. When accessing a property, the descriptor of that property is retrieved from the prototype chain, not copied. So, if the property descriptor is changed on the prototype, it can affect the behavior of inherited properties.

However, **overriding** the property on the child object will change the property’s descriptor only for that object, leaving the prototype’s descriptor unaffected.

### Example: Prototype Chain and Descriptor Inheritance

```javascript
const person = {};
Object.defineProperty(person, "firstName", {
  value: "John",
  writable: false,
  enumerable: true,
  configurable: false,
});

const employee = Object.create(person);

console.log(employee.firstName); // Output: John

Object.defineProperty(employee, "firstName", {
  value: "Alice", // Override the value
  writable: true, // Make it writable
  enumerable: false, // Make it non-enumerable
  configurable: true, // Make it configurable
});

console.log(employee.firstName); // Output: Alice
for (let prop in employee) {
  console.log(prop); // No output, because enumerable is false
}

delete employee.firstName; // Deleting the property succeeds because configurable is true
console.log(employee.firstName); // Output: undefined
```

### Conclusion:

1. **Inheritance of Property Descriptors**: When you inherit a property from a prototype, the property descriptor (such as `writable`, `enumerable`, `configurable`) is inherited, and the behavior of the property is controlled by the descriptor.
2. **Overriding Descriptors**: You can override inherited property descriptors using `Object.defineProperty` to change how properties behave in the child object.
3. **Prototype Chain**: Property descriptors are not copied to the child object. Instead, they are retrieved from the prototype chain when accessing the property, unless overridden.
