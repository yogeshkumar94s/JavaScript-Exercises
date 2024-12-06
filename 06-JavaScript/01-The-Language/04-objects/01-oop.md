### **Part 1: Object-Oriented Concepts in JavaScript**

1. **Object Literals**  
   **Definition**:  
   An object literal is the simplest way to create an object in JavaScript. It is a collection of key-value pairs enclosed in curly braces.

   **Example**:

   ```javascript
   const car = {
     brand: "Toyota",
     model: "Corolla",
     year: 2021,
     drive: function () {
       console.log("Driving...");
     },
   };

   car.drive(); // Output: Driving...
   ```

   - Useful for small, static objects.
   - No reuse of structure or behavior; every object is independent.

---

2. **Constructor Function**  
   **Definition**:  
   A constructor function is a regular function used to create multiple objects of the same type. It acts as a blueprint for creating objects with similar properties and methods.

   **Example**:

   ```javascript
   function Car(brand, model, year) {
     this.brand = brand;
     this.model = model;
     this.year = year;
     this.drive = function () {
       console.log(`${this.brand} ${this.model} is driving...`);
     };
   }

   const car1 = new Car("Toyota", "Corolla", 2021);
   const car2 = new Car("Honda", "Civic", 2020);

   car1.drive(); // Output: Toyota Corolla is driving...
   car2.drive(); // Output: Honda Civic is driving...
   ```

   - Use `new` to create instances from the constructor.
   - Each instance gets its own copy of methods.

---

3. **Prototypes**  
   **Definition**:  
   Every JavaScript object has an internal prototype chain, which is a mechanism for sharing properties and methods between objects.

   **Why Use Prototypes?**

   - Reduces memory usage by sharing methods across instances instead of duplicating them.

   **Example**:

   ```javascript
   function Car(brand, model, year) {
     this.brand = brand;
     this.model = model;
     this.year = year;
   }

   Car.prototype.drive = function () {
     console.log(`${this.brand} ${this.model} is driving...`);
   };

   const car1 = new Car("Toyota", "Corolla", 2021);
   const car2 = new Car("Honda", "Civic", 2020);

   car1.drive(); // Output: Toyota Corolla is driving...
   car2.drive(); // Output: Honda Civic is driving...
   ```

   - `drive` is stored in the `Car.prototype` and shared among all instances.

---

4. **Classes**  
   **Definition**:  
   Classes provide a modern syntax for creating objects and working with inheritance. They are syntactic sugar over constructor functions and prototypes.

   **Example**:

   ```javascript
   class Car {
     constructor(brand, model, year) {
       this.brand = brand;
       this.model = model;
       this.year = year;
     }

     drive() {
       console.log(`${this.brand} ${this.model} is driving...`);
     }
   }

   const car1 = new Car("Toyota", "Corolla", 2021);
   const car2 = new Car("Honda", "Civic", 2020);

   car1.drive(); // Output: Toyota Corolla is driving...
   car2.drive(); // Output: Honda Civic is driving...
   ```

   - Cleaner and more intuitive syntax compared to constructor functions.
   - Supports advanced features like inheritance (covered below).

---

5. **Instances (`new`, `this`)**  
   **Definition**:  
   An instance is an object created from a class or constructor function using the `new` keyword. The `new` keyword:

   - Creates a new object.
   - Sets up the prototype chain.
   - Binds `this` to the newly created object.
   - Executes the constructor function.

   **Example**:

   ```javascript
   const car1 = new Car("Toyota", "Corolla", 2021);
   console.log(car1 instanceof Car); // Output: true
   ```

---

---

### **Part 2: Principles of Object-Oriented Programming**

1. **Abstraction**  
   **Definition**:  
   Hiding unnecessary details and exposing only the essential parts of an object.

   **Example**:

   ```javascript
   class Car {
     constructor(brand, model) {
       this.brand = brand;
       this.model = model;
     }

     start() {
       this._startEngine(); // Internal detail
       console.log("Car started!");
     }

     _startEngine() {
       console.log("Engine started...");
     }
   }

   const car = new Car("Toyota", "Corolla");
   car.start(); // Output: Engine started... Car started!
   // `_startEngine` is abstracted away and not meant to be used directly.
   ```

---

2. **Encapsulation**  
   **Definition**:  
   Bundling data (properties) and methods (functions) together while restricting direct access to some parts.  
   Use private fields (`#`) or conventions like `_property`.

   **Example**:

   ```javascript
   class BankAccount {
     #balance; // Private property

     constructor(initialBalance) {
       this.#balance = initialBalance;
     }

     deposit(amount) {
       if (amount > 0) this.#balance += amount;
     }

     getBalance() {
       return this.#balance;
     }
   }

   const account = new BankAccount(1000);
   account.deposit(500);
   console.log(account.getBalance()); // Output: 1500
   // account.#balance = 0; // Error: Private field cannot be accessed
   ```

---

3. **Inheritance**  
   **Definition**:  
   Mechanism where one class can inherit properties and methods from another.  
   The child (subclass) extends the parent (superclass).

   **Example**:

   ```javascript
   class Vehicle {
     constructor(type) {
       this.type = type;
     }

     move() {
       console.log(`${this.type} is moving...`);
     }
   }

   class Car extends Vehicle {
     constructor(brand, model) {
       super("Car"); // Calls the parent constructor
       this.brand = brand;
       this.model = model;
     }

     drive() {
       console.log(`${this.brand} ${this.model} is driving...`);
     }
   }

   const car = new Car("Toyota", "Corolla");
   car.move(); // Output: Car is moving...
   car.drive(); // Output: Toyota Corolla is driving...
   ```

---

4. **Polymorphism**  
   **Definition**:  
   The ability of a method to behave differently based on the object calling it. Achieved through method overriding.

   **Example**:

   ```javascript
   class Vehicle {
     move() {
       console.log("Vehicle is moving...");
     }
   }

   class Car extends Vehicle {
     move() {
       console.log("Car is driving...");
     }
   }

   class Bike extends Vehicle {
     move() {
       console.log("Bike is riding...");
     }
   }

   const vehicles = [new Car(), new Bike(), new Vehicle()];

   vehicles.forEach((vehicle) => vehicle.move());
   // Output:
   // Car is driving...
   // Bike is riding...
   // Vehicle is moving...
   ```

---

### **Comparison Table**

| **Concept**       | **Definition**                                              | **Example**                                                 |
| ----------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| **Abstraction**   | Hiding implementation details, showing only necessary info  | Hiding `_startEngine` in `start()`                          |
| **Encapsulation** | Restricting access to properties/methods, bundling together | Using private fields like `#balance`                        |
| **Inheritance**   | Reusing properties/methods by extending parent classes      | `Car` extends `Vehicle`                                     |
| **Polymorphism**  | Methods behaving differently based on the object instance   | `move()` in `Car`, `Bike`, and `Vehicle` behave differently |

---

---

### **Prototypal Inheritance in JavaScript**

**Prototypal inheritance** is a mechanism by which objects in JavaScript can inherit properties and methods from other objects. Instead of using classes (as in classical inheritance), JavaScript uses prototypes to share behavior among objects.

---

### **Key Concepts**

1. **Prototype**:  
   Every JavaScript object has an internal link (`[[Prototype]]`) to another object called its prototype.
   - You can access this prototype using `Object.getPrototypeOf(obj)` or through the `__proto__` property.
2. **Prototype Chain**:  
   When accessing a property or method on an object, JavaScript first looks for it on the object itself. If not found, it traverses up the prototype chain to look for it in the prototype.

---

### **How It Works**

#### Creating Prototypes Manually

```javascript
const animal = {
  eats: true,
  sleep() {
    console.log("Sleeping...");
  },
};

const dog = Object.create(animal); // Creates a new object with 'animal' as its prototype
dog.bark = function () {
  console.log("Woof!");
};

console.log(dog.eats); // Output: true (inherited from animal)
dog.bark(); // Output: Woof!
dog.sleep(); // Output: Sleeping...
```

- **`Object.create(proto)`** creates a new object and sets its prototype to `proto`.

---

### **Real-World Example: Object Hierarchies**

#### Scenario: A Vehicle Hierarchy

Imagine you’re designing a system for vehicles (e.g., cars, bikes).

1. **Base Object (Vehicle):**

   ```javascript
   const vehicle = {
     start() {
       console.log("Starting vehicle...");
     },
     stop() {
       console.log("Stopping vehicle...");
     },
   };
   ```

2. **Car Object (Inherits from Vehicle):**

   ```javascript
   const car = Object.create(vehicle);
   car.drive = function () {
     console.log("Driving a car...");
   };
   ```

3. **Bike Object (Inherits from Vehicle):**

   ```javascript
   const bike = Object.create(vehicle);
   bike.ride = function () {
     console.log("Riding a bike...");
   };
   ```

4. **Using the Objects:**

   ```javascript
   car.start(); // Output: Starting vehicle... (inherited from vehicle)
   car.drive(); // Output: Driving a car...

   bike.start(); // Output: Starting vehicle... (inherited from vehicle)
   bike.ride(); // Output: Riding a bike...
   ```

---

### **Defining Methods on Prototypes**

Instead of duplicating methods on every instance, you can define them on the prototype.

#### Constructor Function with Prototypal Inheritance

```javascript
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.start = function () {
  console.log(`${this.type} is starting...`);
};

const car = new Vehicle("Car");
const bike = new Vehicle("Bike");

car.start(); // Output: Car is starting...
bike.start(); // Output: Bike is starting...
```

- **Why use prototypes?**  
   Methods like `start` are shared across all instances, saving memory.

---

### **Prototype Chain in Action**

1. **Prototype Lookup**

   ```javascript
   console.log(car.hasOwnProperty("start")); // Output: false
   console.log(car.__proto__.hasOwnProperty("start")); // Output: true
   ```

2. **Shadowing Properties**

   - If an object has its own property with the same name as one on its prototype, it shadows the prototype's property.

   ```javascript
   car.start = function () {
     console.log("Custom start for car...");
   };

   car.start(); // Output: Custom start for car...
   delete car.start; // Remove shadowing property
   car.start(); // Output: Car is starting... (prototype method is used)
   ```

---

### **Advanced Use Cases**

#### 1. **Dynamic Behavior Addition**

```javascript
const animal = {
  sound() {
    console.log("Some generic sound...");
  },
};

const dog = Object.create(animal);
dog.sound = function () {
  console.log("Woof!");
};

const cat = Object.create(animal);
cat.sound = function () {
  console.log("Meow!");
};

dog.sound(); // Output: Woof!
cat.sound(); // Output: Meow!
```

#### 2. **Prototype Methods for Arrays**

You can extend built-in prototypes (not recommended for production code).

```javascript
Array.prototype.first = function () {
  return this[0];
};

const numbers = [1, 2, 3];
console.log(numbers.first()); // Output: 1
```

---

### **Prototypal Inheritance vs Classical Inheritance**

| **Feature**        | **Prototypal Inheritance**                   | **Classical Inheritance**               |
| ------------------ | -------------------------------------------- | --------------------------------------- |
| **Flexibility**    | Objects inherit directly from other objects. | Classes define strict blueprints.       |
| **Memory Usage**   | Shared methods via prototype.                | Can result in method duplication.       |
| **Syntax**         | Dynamic and flexible.                        | More structured and formal (e.g., ES6). |
| **Implementation** | `Object.create` or `__proto__`.              | `class` and `extends` keywords.         |

---

### **Best Practices for Prototypal Inheritance**

1. **Use `Object.create` for Prototypal Patterns**:
   - Cleaner and avoids pitfalls of `new`.
2. **Avoid Modifying Built-In Prototypes**:
   - Can lead to unexpected behavior and bugs.
3. **Encapsulate Shared Behavior in Prototypes**:
   - Define shared methods in prototypes to optimize memory usage.
4. **Understand the Prototype Chain**:
   - Be cautious when shadowing properties or methods.

---

### **Real-World Analogy**

Think of prototypes like blueprints or templates:

- **Vehicle blueprint**: Common behaviors (start, stop).
- **Car**: Specific vehicle with extra features (drive).
- **Bike**: Another vehicle with unique features (ride).

Instead of copying the blueprint for every vehicle, the blueprint is shared and only extended where necessary. This reduces redundancy and improves maintainability.

---
