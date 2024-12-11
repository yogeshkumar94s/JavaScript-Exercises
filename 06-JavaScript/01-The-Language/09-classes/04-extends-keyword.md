### **Understanding the `extends` Keyword in JavaScript**

The `extends` keyword in JavaScript is used in class declarations to create a class that **inherits** from another class. It establishes a parent-child relationship, where the child class inherits properties and methods from the parent class.

---

### **Key Points About `extends`**

1. **Inheritance**:

   - The child class inherits all properties and methods from the parent class, but can also define its own properties and methods.

2. **Constructor Behavior**:

   - If the child class defines a `constructor`, it must call `super()` (the parent's constructor) **before using `this`**.

3. **Method Overriding**:

   - The child class can override methods from the parent class. You can also use the `super` keyword to call the parent class’s methods.

4. **Static Members**:
   - Static properties and methods are also inherited by the child class.

---

### **Syntax**

```javascript
class Parent {
  // Parent class code
}

class Child extends Parent {
  // Child class code
}
```

---

### **Example 1: Basic Inheritance**

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks.
```

**Explanation**:

- The `Dog` class extends `Animal`, inheriting the `name` property and the `speak` method.
- The `Dog` class overrides the `speak` method to provide its own behavior.

---

### **Example 2: Using `super` to Access Parent Methods**

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I am ${this.name}.`);
  }
}

class Employee extends Person {
  constructor(name, jobTitle) {
    super(name); // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  greet() {
    super.greet(); // Call the parent class's greet method
    console.log(`I work as a ${this.jobTitle}.`);
  }
}

const emp = new Employee("Alice", "Software Developer");
emp.greet();
// Output:
// Hello, I am Alice.
// I work as a Software Developer.
```

**Explanation**:

- The `Employee` class calls the parent constructor using `super` to initialize `name`.
- It overrides the `greet` method, extending its functionality by calling `super.greet()` and adding additional behavior.

---

### **Example 3: Static Members with `extends`**

```javascript
class Shape {
  static getDefaultColor() {
    return "blue";
  }
}

class Circle extends Shape {}

console.log(Circle.getDefaultColor()); // Output: blue
```

**Explanation**:

- The static method `getDefaultColor` in the `Shape` class is inherited by the `Circle` class.

---

### **Example 4: Extending Built-in Classes**

The `extends` keyword can be used to extend built-in JavaScript classes like `Array`, `Error`, etc.

#### **Extending Array**

```javascript
class CustomArray extends Array {
  getFirst() {
    return this[0];
  }
}

const arr = new CustomArray(1, 2, 3);
console.log(arr.getFirst()); // Output: 1
console.log(arr instanceof Array); // true
```

**Explanation**:

- The `CustomArray` class extends the `Array` class and adds a new method `getFirst`.

#### **Extending Error**

```javascript
class CustomError extends Error {
  constructor(message, errorCode) {
    super(message); // Call the Error constructor
    this.errorCode = errorCode;
  }
}

try {
  throw new CustomError("Something went wrong!", 404);
} catch (err) {
  console.log(err.message); // Output: Something went wrong!
  console.log(err.errorCode); // Output: 404
}
```

---

### **Example 5: Abstract Parent Class**

You can use a parent class to define shared behavior for subclasses without instantiating the parent directly.

```javascript
class Vehicle {
  constructor(type) {
    if (new.target === Vehicle) {
      throw new Error("Cannot instantiate abstract class Vehicle directly.");
    }
    this.type = type;
  }

  move() {
    console.log(`${this.type} is moving.`);
  }
}

class Car extends Vehicle {
  constructor() {
    super("Car");
  }
}

const car = new Car();
car.move(); // Output: Car is moving.

const vehicle = new Vehicle(); // Error: Cannot instantiate abstract class Vehicle directly.
```

**Explanation**:

- `Vehicle` acts as an abstract class and cannot be instantiated directly.
- Only subclasses like `Car` can use its behavior.

---

### **When to Use `extends`**

1. **Code Reusability**:

   - Share common functionality between multiple classes.

2. **Polymorphism**:

   - Use parent classes as a base to implement shared behavior while allowing subclasses to customize or extend functionality.

3. **Extending Built-in Classes**:
   - Create custom versions of built-in classes like `Array` or `Error`.

---

### **Best Practices**

1. **Avoid Deep Inheritance**:

   - Keep inheritance hierarchies shallow. Deep hierarchies are hard to manage and debug.

2. **Use `super` Appropriately**:

   - Always call `super` in the constructor before accessing `this` in the child class.

3. **Prefer Composition Over Inheritance**:
   - In some cases, composition (using objects within a class) is more flexible than inheritance.
