## **Basic Questions**

### 1. **What is a class in JavaScript, and how does it differ from a function?**

In JavaScript, a **class** is a blueprint for creating objects with shared properties and methods. It was introduced in **ES6 (ECMAScript 2015)** as a more structured and formal way to create objects and handle inheritance. Before classes, functions were used to create objects and implement inheritance through prototypes.

### Class Syntax:

A class in JavaScript is defined using the `class` keyword, followed by the class name and a body containing a constructor and methods.

```javascript
class Animal {
  // Constructor method to initialize properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display information
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const dog = new Animal("Buddy", 3);
dog.speak(); // Buddy makes a noise.
```

### Key Differences Between a Class and a Function:

1. **Definition**:

   - **Function**: A function in JavaScript can be used to create objects through constructor functions.
     ```javascript
     function Animal(name, age) {
       this.name = name;
       this.age = age;
     }
     Animal.prototype.speak = function () {
       console.log(`${this.name} makes a noise.`);
     };
     ```
   - **Class**: A class uses the `class` keyword and has a more structured syntax for defining methods, including the `constructor()` for initializing properties and defining methods directly within the class body.

2. **Syntax**:

   - **Function**: Constructor functions can be invoked with `new` to create objects.
   - **Class**: Classes are also invoked with `new`, but the syntax is cleaner and easier to read.

3. **Inheritance**:

   - **Function**: Inheritance in functions is done using prototype chains.
     ```javascript
     function Dog(name, age) {
       Animal.call(this, name, age);
     }
     Dog.prototype = Object.create(Animal.prototype);
     Dog.prototype.constructor = Dog;
     ```
   - **Class**: Classes support inheritance using the `extends` keyword, which is more intuitive.

     ```javascript
     class Dog extends Animal {
       constructor(name, age, breed) {
         super(name, age); // Call the parent class constructor
         this.breed = breed;
       }

       speak() {
         console.log(`${this.name} barks.`);
       }
     }
     const dog = new Dog("Buddy", 3, "Labrador");
     dog.speak(); // Buddy barks.
     ```

4. **Prototype Chain**:

   - **Function**: Functions rely on the prototype chain to inherit methods and properties.
   - **Class**: Classes are syntactic sugar over prototype-based inheritance. Internally, they still use prototypes, but the syntax is much more structured.

5. **Use of `new`**:

   - **Function**: Constructor functions require `new` to create instances.
   - **Class**: Classes also require `new` for instantiation, but they enforce the creation of instances more rigorously. Trying to call a class without `new` will result in an error.

6. **Method Definitions**:

   - **Function**: Methods are added to the constructor's prototype manually.
     ```javascript
     function Animal(name) {
       this.name = name;
     }
     Animal.prototype.speak = function () {
       console.log(this.name + " makes a noise");
     };
     ```
   - **Class**: Methods are directly defined inside the class body.

     ```javascript
     class Animal {
       constructor(name) {
         this.name = name;
       }

       speak() {
         console.log(this.name + " makes a noise");
       }
     }
     ```

### Key Advantages of Classes:

1. **Cleaner Syntax**: Classes provide a more readable and organized way to define objects and handle inheritance.
2. **Better Inheritance Model**: The `extends` keyword simplifies inheritance compared to working with prototypes manually.
3. **Consistent Behavior**: Classes make it easier to understand how objects are instantiated and how inheritance works.

### Example Comparing Functions and Classes:

#### Using a Function (Constructor Function):

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hello, " + this.name);
};

const person1 = new Person("John", 30);
person1.greet(); // Hello, John
```

#### Using a Class:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, " + this.name);
  }
}

const person2 = new Person("Jane", 25);
person2.greet(); // Hello, Jane
```

### Summary:

- **Function**: A function, especially a constructor function, is used to create and initialize objects and manage inheritance via prototypes.
- **Class**: A class is a more structured, modern way to define objects and handle inheritance. Internally, it still uses prototypes, but the syntax is more declarative and user-friendly.

### 2. **How do you define a class in JavaScript?**

In JavaScript, you define a class using the `class` keyword, followed by the class name and a body that contains a constructor method and other methods for the class. The class is a blueprint for creating objects with shared properties and methods.

### Syntax:

```javascript
class ClassName {
  // Constructor method to initialize object properties
  constructor(parameter1, parameter2) {
    this.property1 = parameter1;
    this.property2 = parameter2;
  }

  // Class method
  methodName() {
    console.log("This is a method inside the class");
  }
}
```

- **`constructor()`**: This is a special method that is called when a new instance of the class is created. It is used to initialize the object's properties.
- **Methods**: You can define methods inside the class body to perform actions on the object.

### Example:

```javascript
class Animal {
  // Constructor to initialize name and age
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display the name of the animal
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Creating an instance of the Animal class
const dog = new Animal("Buddy", 3);

// Calling the speak method
dog.speak(); // Output: Buddy makes a sound.
```

### Key Points:

1. **Class Declaration**: The `class` keyword is used to declare a class.
2. **Constructor Method**: The `constructor` method is used to initialize the object's properties.
3. **Methods**: Methods defined within the class can be used by instances of the class.
4. **Instance Creation**: You can create an instance of the class using the `new` keyword, which automatically invokes the `constructor()` method.

### 3. **What is the purpose of the `constructor` method in a class?**

The `constructor` method in a class is a special method used to initialize the object when an instance of the class is created. It is automatically called when you create a new object using the `new` keyword. The purpose of the `constructor` is to set up the initial state of the object by defining and assigning values to its properties.

### Key Points about the `constructor` Method:

1. **Initialization of Object Properties**: The `constructor` method is typically used to initialize properties of the object.
2. **Automatic Invocation**: The `constructor` method is automatically called when an instance of the class is created using the `new` keyword.
3. **Single Constructor**: A class can only have one `constructor` method. If you try to define more than one, JavaScript will throw an error.
4. **Custom Parameters**: The `constructor` can accept parameters, allowing you to pass values to initialize the object's properties when creating an instance.

### Syntax:

```javascript
class ClassName {
  constructor(parameter1, parameter2) {
    // Initialize object properties
    this.property1 = parameter1;
    this.property2 = parameter2;
  }
}
```

### Example:

```javascript
class Person {
  // Constructor method to initialize name and age
  constructor(name, age) {
    this.name = name; // Initialize the 'name' property
    this.age = age; // Initialize the 'age' property
  }

  // Method to display greeting
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating an instance of the Person class
const person1 = new Person("John", 25);
person1.greet(); // Output: Hello, my name is John and I am 25 years old.
```

### Breakdown:

- The `constructor` method is invoked when `new Person('John', 25)` is called.
- The `name` and `age` properties are initialized with the values `'John'` and `25` respectively.
- The `greet()` method can now be called on the `person1` object to access these properties.

### Summary:

The `constructor` method's main purpose is to provide an initialization routine for the object, allowing you to set up its state (properties) when it is created. It is an essential part of object creation in JavaScript classes.

### 4. **How do you create an instance of a class?**

To create an instance of a class in JavaScript, you use the `new` keyword followed by the class name. This invokes the class's `constructor` method, which initializes the object's properties and methods.

### Syntax:

```javascript
const instance = new ClassName(arguments);
```

- `ClassName` is the name of the class.
- `arguments` are the values you pass to the `constructor` method of the class (if the constructor accepts parameters).

### Example:

```javascript
class Car {
  // Constructor to initialize properties
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to display car information
  displayInfo() {
    console.log(`${this.year} ${this.make} ${this.model}`);
  }
}

// Creating an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2021);

// Calling a method on the instance
myCar.displayInfo(); // Output: 2021 Toyota Corolla
```

### Breakdown:

- `new Car('Toyota', 'Corolla', 2021)` creates a new instance of the `Car` class.
- The `constructor` method is automatically called with the arguments `'Toyota'`, `'Corolla'`, and `2021`, initializing the properties `make`, `model`, and `year`.
- The method `displayInfo()` can be called on `myCar` to display the car's information.

### Key Points:

- **`new` keyword**: It creates a new object that inherits from the class's prototype and calls the `constructor` method.
- **Constructor invocation**: When you create an instance with `new`, the `constructor` method initializes the object's properties based on the arguments passed.
- **Instance methods**: After creating an instance, you can call methods defined in the class, like `displayInfo()` in the example.

### 5. **What is the difference between a class declaration and a class expression?**

In JavaScript, a **class declaration** and a **class expression** are two different ways to define a class, with a few key differences in syntax and behavior.

### 1. **Class Declaration**:

A class declaration is a named class definition that is defined in a standard way. It is hoisted to the top of its scope, meaning you can reference it after the declaration, but not before it.

### Syntax:

```javascript
class ClassName {
  constructor() {
    // Initialization code
  }
  // Methods
}
```

### Example:

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} says Woof!`);
  }
}

// Creating an instance
const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy says Woof!
```

- **Hoisting**: The class declaration is hoisted but cannot be used before its declaration line.

### 2. **Class Expression**:

A class expression is an anonymous or named class that is defined as part of an expression. It can be assigned to a variable, passed around as an argument, or used immediately in expressions. Like function expressions, class expressions are **not hoisted**, meaning they cannot be used before they are defined.

### Syntax:

```javascript
const ClassName = class {
  constructor() {
    // Initialization code
  }
  // Methods
};
```

You can also create a **named class expression**:

```javascript
const ClassName = class NamedClass {
  constructor() {
    // Initialization code
  }
  // Methods
};
```

### Example:

```javascript
const Car = class {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  displayInfo() {
    console.log(`${this.make} ${this.model}`);
  }
};

// Creating an instance
const car = new Car("Tesla", "Model S");
car.displayInfo(); // Output: Tesla Model S
```

- **No hoisting**: The class expression is only accessible after it is defined in the code.

### Key Differences:

| Feature      | **Class Declaration**                                                | **Class Expression**                                     |
| ------------ | -------------------------------------------------------------------- | -------------------------------------------------------- |
| **Syntax**   | `class ClassName {}`                                                 | `const ClassName = class {}`                             |
| **Hoisting** | Yes, the class is hoisted (but cannot be used before its definition) | No, the class expression is not hoisted                  |
| **Name**     | The class has a name that can be accessed (e.g., `Dog`)              | It can be anonymous or named (e.g., `NamedClass`)        |
| **Usage**    | Can be used throughout the entire scope (after declaration)          | Can only be used after the class expression is evaluated |
| **Example**  | `class Dog {}`                                                       | `const Dog = class {}`                                   |

### Summary:

- **Class Declaration**: A simple, named class that is hoisted to the top and can be used after the declaration.
- **Class Expression**: A class defined as part of an expression, which can be anonymous or named. It is **not hoisted**, meaning it must be used only after it is defined.

### 6. **What are instance methods in a class? How do you define them?**

**Instance methods** in a class are functions that are defined within the class and are intended to operate on instances (objects) created from that class. These methods are typically used to define behavior that each individual instance of the class can perform. They can access and modify the properties of the object they are called on.

### Key Points:

- **Instance Methods** are bound to an instance of the class, meaning they are called on individual objects created from the class.
- They are defined inside the class body but outside the constructor.
- They can access and modify instance properties using `this`.

### How to Define Instance Methods:

Instance methods are defined as normal methods inside the class. They do not need the `function` keyword, as the method syntax is implicit.

### Syntax:

```javascript
class ClassName {
  constructor() {
    // Initialization of properties
  }

  // Instance method
  methodName() {
    // Method logic
  }
}
```

### Example:

```javascript
class Person {
  constructor(name, age) {
    this.name = name; // Instance property
    this.age = age; // Instance property
  }

  // Instance method to greet the person
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  // Instance method to celebrate birthday
  celebrateBirthday() {
    this.age += 1;
    console.log(`Happy birthday! You are now ${this.age} years old.`);
  }
}

// Creating an instance of the Person class
const person1 = new Person("Alice", 30);

// Calling instance methods
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person1.celebrateBirthday(); // Output: Happy birthday! You are now 31 years old.
```

### Breakdown:

- **`greet()`** and **`celebrateBirthday()`** are instance methods defined inside the `Person` class.
- They can access instance properties (`this.name`, `this.age`) and modify them.
- These methods are called on instances of the class (`person1.greet()`, `person1.celebrateBirthday()`).

### Benefits of Instance Methods:

1. **Encapsulation**: They allow the behavior of an object to be encapsulated within the object itself, making it easier to manage state and behavior.
2. **Reusability**: Methods defined inside the class can be reused by all instances of the class.
3. **Access to Instance State**: They can directly access and modify the instance properties using `this`.

### Summary:

Instance methods are functions that are associated with objects created from a class. They define actions or behaviors that instances of the class can perform. You define them inside the class body, and they can access the properties and other methods of the object through `this`.

### 7. **How do you define a method in a class that is shared among all instances?**

In JavaScript, you can define a **shared method** that is available to all instances of a class by placing the method in the **prototype** of the class. By default, when you define a method inside the class body, it is automatically added to the class's **prototype**, meaning it is shared across all instances of the class rather than being duplicated for each instance.

### How to Define a Shared Method:

- You define the method in the class body, and JavaScript will automatically add it to the class's prototype.
- This method will be available to all instances of the class, and all instances will share the same method (instead of each instance having its own copy).

### Syntax:

```javascript
class ClassName {
  constructor() {
    // Initialization of properties
  }

  // Shared method (added to prototype)
  methodName() {
    // Method logic
  }
}
```

### Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Shared method (added to prototype)
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Creating instances of the Animal class
const dog = new Animal("Dog");
const cat = new Animal("Cat");

// Both instances share the same `speak` method
dog.speak(); // Output: Dog makes a noise.
cat.speak(); // Output: Cat makes a noise.
```

### Breakdown:

- **`speak()`** is defined inside the `Animal` class.
- This method is available to all instances (`dog`, `cat`) of the `Animal` class, and they all share the same method (it’s not recreated for each instance).
- This shared method is stored on the **prototype** of the `Animal` class.

### Key Points:

- When you define a method in a class, it is automatically placed on the **prototype** of the class.
- **All instances** of the class will **share** the same method.
- This is more memory-efficient than having a separate copy of the method for each instance.

### Why Use Shared Methods?

- **Memory Efficiency**: Shared methods are only stored once on the prototype, not on each instance.
- **Consistency**: All instances of the class have access to the same method, ensuring that all objects of the class behave in the same way.

### Example with Prototypes:

You can manually add methods to the prototype if needed, but in a class, the method is automatically added to the prototype.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

// Adding a shared method to the prototype manually
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.greet(); // Output: Hello, my name is Alice
person2.greet(); // Output: Hello, my name is Bob
```

In this example, the `greet` method is shared by all instances of `Person` via the prototype.

### Summary:

Methods defined in the class body are shared across all instances because they are automatically added to the **prototype** of the class. This means all instances of that class will have access to the same method, ensuring memory efficiency and consistency.

---

## **Intermediate Questions**

### 8. **What is the purpose of the `extends` keyword in JavaScript classes?**

The `extends` keyword in JavaScript is used to create a **subclass** that inherits from a **superclass** (parent class). It allows you to define a class that builds upon the functionality of an existing class by inheriting properties and methods. This is a key feature of **inheritance** in object-oriented programming, which enables code reuse and extension of existing behavior.

### Purpose of `extends`:

1. **Inheritance**: The `extends` keyword allows a subclass to inherit the properties and methods of a superclass, so you don't have to redefine the same logic in every subclass.
2. **Code Reusability**: By inheriting from another class, you can reuse and extend functionality without duplicating code.
3. **Subclassing**: It enables you to create specialized classes that inherit from a more general class.

### How It Works:

- When you create a subclass using the `extends` keyword, the subclass automatically inherits the constructor and methods from the superclass.
- The subclass can also add its own methods or override methods from the superclass.
- You can use the `super()` method to call the constructor or methods of the superclass.

### Syntax:

```javascript
class ChildClass extends ParentClass {
  constructor() {
    super(); // Calls the constructor of the parent class
    // Child-specific initialization
  }
}
```

### Example:

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
  constructor(name, breed) {
    super(name); // Call the constructor of Animal class
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }

  showBreed() {
    console.log(`Breed: ${this.breed}`);
  }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak(); // Output: Rex barks.
dog.showBreed(); // Output: Breed: German Shepherd
```

### Breakdown:

- **`Animal`** is the parent class (superclass).
- **`Dog`** is the subclass, which extends `Animal` using `extends`.
- The `Dog` class inherits the `name` property and `speak()` method from `Animal`, but it overrides the `speak()` method to provide a custom implementation.
- The `super(name)` inside the `Dog` constructor calls the `Animal` class's constructor to initialize the `name` property.

### Key Concepts:

1. **Inheritance**: The `Dog` class inherits properties and methods from `Animal`, such as the `name` property and `speak()` method.
2. **Method Overriding**: The `speak()` method in `Dog` overrides the one from `Animal`, providing a new implementation.
3. **Calling the Superclass Constructor**: `super(name)` is used in the subclass constructor to call the constructor of the superclass (`Animal`).

### Summary:

The `extends` keyword is used to create a subclass in JavaScript, allowing the subclass to inherit the properties and methods of its superclass. It facilitates inheritance, code reuse, and subclassing, making it easier to create specialized classes based on a general class.

### 9. **How does inheritance work with classes in JavaScript?**

In JavaScript, inheritance with classes allows one class (the **subclass**) to inherit properties and methods from another class (the **superclass** or **parent class**). This allows for the reuse of code and the creation of more specialized or extended behavior without rewriting the same functionality.

### How Inheritance Works in JavaScript Classes

1. **Superclass (Parent Class)**: The superclass is the base class that defines common properties and methods.
2. **Subclass (Child Class)**: The subclass inherits from the superclass and can extend or override its properties and methods.

### Key Concepts of Inheritance:

- **`extends`**: Used in the subclass to inherit from the superclass.
- **`super()`**: A method used in the constructor of the subclass to call the constructor of the superclass, ensuring that the superclass's properties are properly initialized.

### Steps in Class Inheritance:

1. **Defining the Superclass**: The superclass defines common properties and methods that can be inherited.
2. **Defining the Subclass**: The subclass uses the `extends` keyword to inherit from the superclass and optionally override or add new methods.
3. **Calling `super()`**: If the subclass needs to access or extend the functionality of the superclass constructor, it uses the `super()` function.

### Example of Inheritance:

```javascript
// Superclass
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Subclass
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls the constructor of Animal
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }

  showBreed() {
    console.log(`Breed: ${this.breed}`);
  }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak(); // Output: Rex barks.
dog.showBreed(); // Output: Breed: German Shepherd
```

### Breakdown:

1. **Superclass `Animal`**: This class defines a constructor to initialize the `name` property and a method `speak()`.
2. **Subclass `Dog`**: This class inherits from `Animal` using the `extends` keyword. It calls the superclass's constructor with `super(name)` to set up the `name` property. The `speak()` method is overridden to provide a custom implementation for `Dog` objects. It also introduces a new method, `showBreed()`.
3. **Inheritance in Action**:
   - `Dog` objects inherit the `name` property and `speak()` method from `Animal`.
   - The `speak()` method is overridden in `Dog` to customize its behavior.
   - The `showBreed()` method is specific to the `Dog` class.

### Key Points:

- **Subclassing with `extends`**: The subclass can inherit methods and properties from the superclass.
- **Calling the Superclass Constructor with `super()`**: The subclass constructor can call `super()` to invoke the constructor of the superclass and initialize inherited properties.
- **Method Overriding**: The subclass can override methods from the superclass by defining a method with the same name.
- **Adding New Methods**: The subclass can define its own methods that are not present in the superclass.

### Example: Inheriting from a Class Without Constructor

If the superclass doesn't have a constructor, the subclass doesn't need to call `super()` explicitly:

```javascript
class Animal {
  speak() {
    console.log("Animal makes a noise.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks.");
  }
}

const dog = new Dog();
dog.speak(); // Output: Dog barks.
```

### Example: Using `super()` to Access Methods of the Superclass

You can also use `super` to call methods from the superclass directly, even if you override them in the subclass:

```javascript
class Animal {
  speak() {
    console.log("Animal makes a noise.");
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // Call the speak() method of the superclass
    console.log("Dog barks.");
  }
}

const dog = new Dog();
dog.speak(); // Output: Animal makes a noise. Dog barks.
```

### Summary:

In JavaScript, inheritance allows a subclass to inherit properties and methods from a superclass using the `extends` keyword. The subclass can call the superclass's constructor using `super()`, and can also override or add new methods. This allows you to build upon existing functionality, promoting code reuse and extensibility.

### 10. **What is the role of the `super` keyword in a subclass?**

The `super` keyword in JavaScript plays an essential role in **subclasses** (child classes) when they inherit from a **superclass** (parent class). It is used to interact with the parent class in two main ways: calling the parent class's constructor and accessing or calling methods that belong to the parent class. It enables a subclass to extend or customize the behavior of its parent class.

### Roles of the `super` Keyword:

1. **Calling the Parent Class Constructor**:

   - When creating an instance of a subclass, `super()` is used in the subclass's constructor to call the constructor of the parent class and initialize inherited properties.
   - It must be called before using `this` in the subclass constructor.

2. **Accessing Methods in the Parent Class**:
   - The `super` keyword can also be used to call methods from the parent class, even if the subclass overrides them. This allows you to extend the functionality of the parent's method, rather than replacing it entirely.

### Examples:

#### 1. **Calling the Parent Class Constructor (`super()`)**

When a subclass inherits from a parent class, it can call the parent class's constructor using `super()`. This is necessary for initializing the properties of the parent class.

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
  constructor(name, breed) {
    super(name); // Calls the constructor of Animal
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex", "German Shepherd");
console.log(dog.name); // Output: Rex
dog.speak(); // Output: Rex barks.
```

- **Explanation**: In the `Dog` class, `super(name)` is called in the constructor to invoke the `Animal` class's constructor. This initializes the `name` property inherited from `Animal`.

#### 2. **Calling Parent Class Methods (`super.methodName()`)**

You can use `super.methodName()` to call a method from the parent class. This is useful if you want to override a method in the subclass but still call the parent's version of the method.

```javascript
class Animal {
  speak() {
    console.log("Animal makes a noise.");
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // Calls the speak() method of Animal
    console.log("Dog barks.");
  }
}

const dog = new Dog();
dog.speak();
// Output:
// Animal makes a noise.
// Dog barks.
```

- **Explanation**: In the `Dog` class, `super.speak()` is used to call the `speak()` method from the `Animal` class before adding additional behavior (the "Dog barks." message).

### Key Points:

1. **Calling the Parent Constructor**: In a subclass, you must call `super()` in the constructor before you can use `this` because the parent class's constructor must first initialize the object.
   - `super()` must be called in the **constructor** of the subclass if the subclass has one.
2. **Accessing Parent Class Methods**: The `super` keyword can also be used to call methods from the parent class, even if they have been overridden in the subclass.

3. **Method Overriding and Extension**: By using `super`, a subclass can override a method and still call the original method from the parent class.

### Summary:

The `super` keyword in JavaScript is a crucial tool for inheritance in classes. It allows a subclass to:

- Call the parent class's constructor to initialize inherited properties.
- Access and call methods from the parent class, even when they have been overridden in the subclass.
  This makes it possible for subclasses to extend or customize the behavior of their parent classes while still maintaining the core functionality.

### 11. **What happens if you forget to call `super()` in a subclass constructor?**

If you forget to call `super()` in a subclass constructor, it will result in a **runtime error** when you try to create an instance of the subclass. This is because in JavaScript, a subclass constructor must always call `super()` before it can use `this`. The `super()` call is required to initialize the parent class and set up the `this` context.

### Why is `super()` Required?

- In a subclass, the `constructor` function must initialize the parent class before accessing or assigning properties to `this`. This is done through the `super()` call.
- If you don't call `super()` in the constructor of a subclass, the `this` keyword will not be properly initialized, and JavaScript will throw an error indicating that you cannot use `this` before calling `super()`.

### Example of an Error:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    // Forgot to call super() here
    this.breed = breed; // Error: "this is not defined"
  }
}

const dog = new Dog("Rex", "German Shepherd");
```

**Error:**

```
TypeError: Cannot set property 'breed' of undefined
```

### Correct Version:

You need to call `super()` in the constructor before accessing `this`.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Correctly calling the parent constructor
    this.breed = breed;
  }
}

const dog = new Dog("Rex", "German Shepherd");
console.log(dog.name); // Output: Rex
console.log(dog.breed); // Output: German Shepherd
```

### Key Points:

1. **Parent Class Initialization**: The `super()` call is responsible for initializing the parent class. Without it, `this` is not properly set up, which leads to errors.
2. **Must be called before `this`**: In a subclass constructor, you **must** call `super()` before using `this`. If you attempt to use `this` before calling `super()`, a `ReferenceError` will occur.
3. **For class expressions**: This rule applies even if you're defining a subclass using a class expression.

### Conclusion:

Always call `super()` in the constructor of a subclass before using `this`. It ensures that the parent class constructor is executed and that `this` is properly initialized. Failing to do so will result in a runtime error.

### 12. **What are `static` methods, and how do they differ from instance methods?**

In JavaScript, **static methods** are methods that belong to the class itself, rather than to instances of the class. They are called on the **class** directly, not on an instance (object) of the class.

On the other hand, **instance methods** are methods that belong to the **instances** of the class, and they are called on objects created from the class.

### Key Differences Between Static Methods and Instance Methods:

1. **Where they are called**:

   - **Static methods**: Called directly on the **class**, not on instances of the class.
   - **Instance methods**: Called on instances (objects) of the class.

2. **Usage**:

   - **Static methods** are generally used for functionality that is related to the class itself, not any individual object. They don't have access to instance properties (because they are not tied to an instance).
   - **Instance methods** typically operate on instance data (i.e., properties defined in the constructor) and are used for behavior related to individual instances.

3. **Accessing properties**:
   - **Static methods** do not have access to the `this` keyword that refers to the instance of the class. They only have access to static properties and methods.
   - **Instance methods** have access to the instance (`this` refers to the instance of the class), meaning they can access instance properties and methods.

### Example of Static and Instance Methods:

```javascript
class Person {
  constructor(name, age) {
    this.name = name; // Instance property
    this.age = age; // Instance property
  }

  // Instance method
  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  // Static method
  static greet() {
    console.log("Hello, world!");
  }
}

// Creating an instance of the Person class
const person1 = new Person("Alice", 30);

// Calling the instance method
person1.introduce(); // Output: Hello, my name is Alice and I am 30 years old.

// Calling the static method
Person.greet(); // Output: Hello, world!

// Trying to call the static method on an instance (will throw an error)
person1.greet(); // Error: person1.greet is not a function
```

### Breakdown:

1. **Static Method**:

   - `greet()` is a static method. It is called on the `Person` class, not on an instance. You access it using `Person.greet()`.
   - Static methods cannot access instance properties (like `this.name` or `this.age`) because they are not associated with an instance.

2. **Instance Method**:
   - `introduce()` is an instance method. It is called on an instance of the `Person` class, like `person1.introduce()`.
   - Instance methods have access to instance properties (like `this.name` and `this.age`), so they can operate on individual objects.

### When to Use Static Methods:

- **Utility functions**: Static methods are useful for utility functions or methods that operate on data not specific to an instance of the class.
- **Factory methods**: You might also use static methods for creating instances of the class in specific ways (like a factory pattern).

### Conclusion:

- **Static methods** are used when the functionality is related to the class itself and doesn't depend on any instance properties.
- **Instance methods** are used when the functionality is tied to a specific instance of the class and works with instance data.

### 13. **How can you define and access `static` properties and methods in a class?**

In JavaScript, **static** properties and methods are associated with the **class itself**, rather than instances of the class. Static properties and methods are defined using the `static` keyword. They can be accessed directly on the class itself, not on individual instances.

### Defining Static Properties:

Static properties are defined in a class using the `static` keyword, similar to static methods. These properties are shared across all instances of the class and are not part of the instance.

### Example of Static Properties and Methods:

```javascript
class Person {
  // Static property
  static species = "Homo sapiens";

  // Instance property
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method
  introduce() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }

  // Static method
  static greet() {
    console.log("Hello from the Person class!");
  }
}

// Accessing static property
console.log(Person.species); // Output: Homo sapiens

// Accessing static method
Person.greet(); // Output: Hello from the Person class!

// Creating an instance
const person1 = new Person("Alice", 30);

// Accessing instance method
person1.introduce(); // Output: Hi, I am Alice and I am 30 years old.

// Trying to access static property via instance (will throw an error)
console.log(person1.species); // Error: person1.species is undefined

// Trying to access static method via instance (will throw an error)
person1.greet(); // Error: person1.greet is not a function
```

### Key Points:

1. **Static Properties**:
   - Defined using the `static` keyword.
   - Accessed directly on the class (`ClassName.propertyName`).
   - Cannot be accessed via instances of the class.
2. **Static Methods**:
   - Also defined using the `static` keyword.
   - Called on the class itself (`ClassName.methodName()`).
   - Cannot be called on instances of the class.

### Use Cases for Static Properties and Methods:

1. **Shared Data**: Static properties are used to store data that should be shared across all instances of a class, such as configuration settings or constants.
   - Example: A class `Car` might have a static property `wheels` that represents the number of wheels all cars have.
2. **Utility Methods**: Static methods are useful for utility functions or actions that do not require access to instance data, such as logging, calculations, or creating instances in a specific way (e.g., factory methods).
3. **Factory Methods**: Static methods are often used as factory methods, which can create and return instances of the class.

   ```javascript
   class Rectangle {
     constructor(width, height) {
       this.width = width;
       this.height = height;
     }

     static createSquare(sideLength) {
       return new Rectangle(sideLength, sideLength);
     }
   }

   const square = Rectangle.createSquare(5);
   console.log(square); // Output: Rectangle { width: 5, height: 5 }
   ```

### Conclusion:

- **Static properties and methods** belong to the **class itself** and are accessed directly from the class (using `ClassName.property` or `ClassName.method()`).
- They are useful for sharing data across all instances or for utility functions that do not require instance-specific information.

### 14. **What is the difference between prototype-based inheritance and class-based inheritance in JavaScript?**

In JavaScript, both **prototype-based inheritance** and **class-based inheritance** are mechanisms used to allow objects to inherit properties and methods from other objects. However, there are key differences in how these two approaches work.

### 1. **Prototype-Based Inheritance**

In **prototype-based inheritance**, objects directly inherit from other objects. Each object in JavaScript has an internal property called `[[Prototype]]` (often accessible through `__proto__`), which points to another object. This forms a chain of prototypes, known as the **prototype chain**, where an object can inherit properties and methods from its prototype, and its prototype can inherit from another prototype, and so on.

#### Key Points:

- **Objects directly inherit from other objects**.
- There is no class or constructor function required.
- **Prototypes** allow properties and methods to be shared between objects.

#### Example of Prototype-Based Inheritance:

```javascript
// Creating a person object
const person = {
  greet() {
    console.log("Hello, " + this.name);
  },
};

// Creating another object that inherits from 'person'
const john = Object.create(person);
john.name = "John";

// Calling a method from the prototype
john.greet(); // Output: Hello, John

// john inherits 'greet' method from 'person'
console.log(john.__proto__ === person); // Output: true
```

In the above example:

- `john` inherits the `greet` method from the `person` object via its prototype chain.

### 2. **Class-Based Inheritance**

**Class-based inheritance** is a more structured and formal way of creating objects and inheritance. JavaScript introduced **classes** in ECMAScript 6 (ES6), which provide a syntactical sugar over the existing prototype-based inheritance mechanism. Classes are a way to define **blueprints** for creating objects with shared properties and methods, where inheritance works in a more traditional manner similar to other object-oriented programming languages.

#### Key Points:

- **Classes** act as blueprints for creating objects.
- Classes use **constructor functions** and `extends` to define inheritance between classes.
- Methods in classes are shared by all instances of the class.

#### Example of Class-Based Inheritance:

```javascript
// Define a class called Person
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello, " + this.name);
  }
}

// Define a class called Employee that inherits from Person
class Employee extends Person {
  constructor(name, job) {
    super(name); // Call the parent class's constructor
    this.job = job;
  }

  greet() {
    console.log("Hello, I am " + this.name + " and I work as a " + this.job);
  }
}

// Create an instance of Employee
const jane = new Employee("Jane", "Engineer");

// Calling the greet method from Employee class
jane.greet(); // Output: Hello, I am Jane and I work as a Engineer
```

In the above example:

- The `Employee` class **inherits** from the `Person` class using the `extends` keyword.
- The `super()` function is used to call the constructor of the parent class (`Person`).
- Methods like `greet` can be overridden in the subclass (`Employee`).

### Comparison Between Prototype-Based and Class-Based Inheritance

| **Aspect**        | **Prototype-Based Inheritance**                                              | **Class-Based Inheritance**                                                  |
| ----------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Mechanism**     | Objects directly inherit from other objects via prototypes.                  | Objects are created using classes, which are blueprints for object creation. |
| **Syntax**        | Uses `Object.create()` and `[[Prototype]]` (or `__proto__`) for inheritance. | Uses the `class`, `constructor`, `extends`, and `super` keywords.            |
| **Inheritance**   | Inheritance is based on the prototype chain.                                 | Inheritance is defined using `extends` and `super` (class syntax).           |
| **Methods**       | Methods are added to the prototype object and are shared across instances.   | Methods are defined within the class body and are shared across instances.   |
| **Flexibility**   | More flexible and dynamic (can change prototypes at runtime).                | More structured and less flexible (although still based on prototypes).      |
| **Use of `this`** | `this` refers to the instance of the object created using a constructor.     | `this` refers to the instance of the class created with `new`.               |

### Conclusion:

- **Prototype-based inheritance** is the underlying mechanism in JavaScript, where objects directly inherit properties from other objects via the prototype chain.
- **Class-based inheritance** is a more recent, syntactical sugar introduced in ES6 that allows developers to define object blueprints (classes) and inheritance in a way that is more familiar to developers from class-based OOP languages like Java or C++.

Though **class-based inheritance** provides a clearer and more structured way of defining inheritance, it's still ultimately based on **prototype-based inheritance** behind the scenes.

### 15. **Can you override a method from the parent class in the child class? How?**

Yes, you can **override** a method from the parent class in the child class in JavaScript. This is done by defining a method with the same name in the child class. When a method is overridden in the child class, it will replace the method of the same name from the parent class for instances of the child class.

To override a method:

1. Define a method with the same name in the child class.
2. Optionally, you can use the `super` keyword inside the child method to call the parent class's method if you need to extend or customize the parent behavior.

### Example of Method Overriding:

```javascript
// Parent class
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

// Child class that overrides the speak method
class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

// Creating an instance of the child class
const myDog = new Dog();
myDog.speak(); // Output: Dog barks
```

In the example above:

- The `Dog` class overrides the `speak` method of the `Animal` class.
- When `myDog.speak()` is called, it calls the `speak` method defined in the `Dog` class, overriding the method from the `Animal` class.

### Using `super` to Extend Parent Behavior:

If you want to call the parent class's method inside the overridden method in the child class, you can use the `super` keyword.

```javascript
// Parent class
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

// Child class that overrides the speak method
class Dog extends Animal {
  speak() {
    super.speak(); // Call the parent class's speak method
    console.log("Dog barks");
  }
}

// Creating an instance of the child class
const myDog = new Dog();
myDog.speak();
// Output:
// Animal makes a sound
// Dog barks
```

In this case:

- The `Dog` class first calls the `speak` method from the `Animal` class using `super.speak()`, and then adds its own behavior (`"Dog barks"`).

### Summary:

- **Overriding** a method in JavaScript is done by defining a method with the same name in the child class.
- You can use `super` to call the parent class's method if you need to extend or modify its behavior within the child class.

---

## **Advanced Questions**

### 16. **What is the difference between `super.method()` and `this.method()` in a subclass?**

The difference between `super.method()` and `this.method()` in a subclass lies in **which method is called** and **how the method is resolved** in the prototype chain. Here's a detailed breakdown:

---

### **`super.method()`**

- **What It Does**: Calls the method from the **parent class** (superclass) directly, bypassing any overrides in the current class or subclasses.
- **How It Works**: Refers to the parent class's prototype directly. It does not look at methods defined in the current class.

#### Key Points:

1. `super.method()` is used to explicitly call the parent class's version of a method.
2. It is typically used in overridden methods to extend or reuse the behavior of the parent class.
3. Must be used inside methods of a subclass.

#### Example:

```javascript
class Parent {
  greet() {
    return "Hello from Parent!";
  }
}

class Child extends Parent {
  greet() {
    return `${super.greet()} And hello from Child!`;
  }
}

const child = new Child();
console.log(child.greet());
// Output: "Hello from Parent! And hello from Child!"
```

Here, `super.greet()` calls the `greet` method defined in the `Parent` class.

---

### **`this.method()`**

- **What It Does**: Calls the method on the current instance. This includes:
  - The method defined in the current class, if available.
  - Any inherited method from the prototype chain, if not overridden in the current class.
- **How It Works**: Resolves the method dynamically at runtime based on the instance's prototype chain.

#### Key Points:

1. `this.method()` is used to call the method on the current object (instance), including any overridden version in the subclass.
2. It respects polymorphism, meaning if a method is overridden in the subclass, that version will be called.

#### Example:

```javascript
class Parent {
  greet() {
    return "Hello from Parent!";
  }
}

class Child extends Parent {
  greet() {
    return "Hello from Child!";
  }

  callGreet() {
    return this.greet(); // Calls the current class's greet method
  }
}

const child = new Child();
console.log(child.callGreet());
// Output: "Hello from Child!"
```

Here, `this.greet()` calls the overridden `greet` method in the `Child` class.

---

### **Differences at a Glance**

| Feature                | `super.method()`                                | `this.method()`                                   |
| ---------------------- | ----------------------------------------------- | ------------------------------------------------- |
| **Which Method**       | Calls the parent class's version of the method. | Calls the method on the current instance.         |
| **Overridden Methods** | Bypasses overridden methods in the subclass.    | Calls the overridden method if it exists.         |
| **Context**            | Used to refer to parent class functionality.    | Used to refer to the current instance's behavior. |
| **When to Use**        | When extending or reusing the parent's method.  | When calling methods specific to the instance.    |

---

### **Combined Example**

```javascript
class Parent {
  describe() {
    return "I am the Parent class.";
  }
}

class Child extends Parent {
  describe() {
    return `${super.describe()} I am the Child class.`;
  }

  callParentDescribe() {
    return super.describe(); // Parent method
  }

  callChildDescribe() {
    return this.describe(); // Child method (overrides Parent)
  }
}

const child = new Child();

console.log(child.callParentDescribe());
// Output: "I am the Parent class."

console.log(child.callChildDescribe());
// Output: "I am the Parent class. I am the Child class."
```

---

### **Use Cases**

1. **Use `super.method()`**:

   - When you want to reuse or extend the functionality of the parent class's method.
   - In overridden methods where you need to include the parent's behavior.

2. **Use `this.method()`**:
   - When you want to call the method as it is defined in the current instance, including any overridden version.
   - For general instance method calls.

### 17. **Can you extend built-in objects like `Array` or `Error` in JavaScript? How?**

Yes, you can extend built-in objects like `Array` or `Error` in JavaScript. This became much easier and more consistent with the introduction of ES6 (ECMAScript 2015) classes, which support inheritance using the `extends` keyword.

---

### **Extending Built-In Objects**

When you extend a built-in object:

1. Your custom class inherits all properties and methods of the built-in object.
2. You can add custom methods or properties to enhance or modify the behavior of the built-in object.

---

### **Extending `Array`**

You can create a subclass of `Array` to add custom functionality while retaining all `Array` methods.

#### Example: Custom Array with Additional Behavior

```javascript
class CustomArray extends Array {
  // Add a method to get unique values
  getUnique() {
    return [...new Set(this)];
  }
}

const numbers = new CustomArray(1, 2, 2, 3, 3, 4);

console.log(numbers instanceof Array); // true
console.log(numbers.getUnique()); // [1, 2, 3, 4]

// Retains standard Array methods
numbers.push(5);
console.log(numbers); // CustomArray(7) [1, 2, 2, 3, 3, 4, 5]
```

#### Key Points:

- The subclassed `CustomArray` retains all native `Array` functionality (e.g., `.push()`, `.filter()`).
- You can add new methods like `getUnique()` to extend functionality.

---

### **Extending `Error`**

Extending the `Error` class is commonly used to create custom error types for more descriptive error handling.

#### Example: Custom Error Class

```javascript
class CustomError extends Error {
  constructor(message, errorCode) {
    super(message); // Call the parent class constructor (Error)
    this.name = "CustomError"; // Set a custom name
    this.errorCode = errorCode; // Add a custom property
  }
}

try {
  throw new CustomError("Something went wrong!", 404);
} catch (err) {
  console.log(err.name); // "CustomError"
  console.log(err.message); // "Something went wrong!"
  console.log(err.errorCode); // 404
  console.log(err instanceof Error); // true
}
```

#### Key Points:

- The `super()` call invokes the constructor of the parent `Error` class.
- The `message` property is automatically set by `Error`, while you can add custom properties like `errorCode`.

---

### **Technical Considerations**

#### 1. **Prototype Chains**

When you extend a built-in object, the prototype chain is updated to link your subclass to the built-in object:

```javascript
const customArr = new CustomArray();
console.log(customArr instanceof CustomArray); // true
console.log(customArr instanceof Array); // true
```

#### 2. **Special Handling for `Error`**

When extending `Error`, you must use `super(message)` to ensure the `message` property and stack trace are properly initialized.

#### 3. **Constructor Behavior**

For some built-in objects, the `constructor` behaves differently:

- The `Array` constructor is special because it dynamically adjusts its length property.
- The `Error` constructor includes stack-trace generation in most modern environments.

#### 4. **Browser/Engine Compatibility**

Extending built-in objects is supported in modern JavaScript engines (like V8, SpiderMonkey, etc.). For very old environments, the behavior might be inconsistent.

---

### **Best Practices**

1. **Use Subclassing Judiciously**:

   - Extend built-in objects only when you have a clear need for additional functionality.
   - Avoid unnecessary subclassing that can make the code harder to read or maintain.

2. **Name Custom Classes Clearly**:

   - Use descriptive names like `CustomArray` or `ValidationError` for clarity.

3. **Preserve Parent Functionality**:
   - Always call `super()` to ensure the parent class's behavior is correctly inherited.

---

### **Example: Combining Array and Error Extensions**

```javascript
class ValidationError extends Error {
  constructor(message, fields) {
    super(message);
    this.name = "ValidationError";
    this.fields = fields; // Array of invalid fields
  }
}

const invalidFields = new CustomArray("username", "email");

try {
  throw new ValidationError("Invalid form submission", invalidFields);
} catch (err) {
  console.log(err.name); // "ValidationError"
  console.log(err.message); // "Invalid form submission"
  console.log(err.fields); // CustomArray ["username", "email"]
  console.log(err.fields.getUnique()); // ["username", "email"]
}
```

### 18. **How do private fields and methods work in JavaScript classes?**

### **Private Fields and Methods in JavaScript Classes**

Private fields and methods in JavaScript were introduced in ECMAScript 2022 to provide true encapsulation for class members. These private members are accessible only within the class they are defined in and are not visible or accessible from outside the class, including subclasses.

---

### **Syntax for Private Fields and Methods**

Private fields and methods are declared by prefixing their names with a `#`.

#### **Private Fields**

- Private fields store data that can only be accessed within the class.
- Defined using `#fieldName`.

#### **Private Methods**

- Private methods define behavior that can only be called within the class.
- Defined using `#methodName()`.

---

### **Key Features of Private Members**

1. **Encapsulation**: Private fields and methods are not accessible or modifiable from outside the class.
2. **No Prototypes**: Private fields and methods do not exist on the prototype of the class.
3. **Runtime Enforcement**: The privacy of these members is enforced by the language itself, unlike conventionally "private" members (e.g., `_fieldName`).

---

### **Example: Using Private Fields**

```javascript
class BankAccount {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance; // Accessing the private field
  }

  // Public method to get the balance
  getBalance() {
    return this.#balance;
  }

  // Public method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  // Public method to withdraw money
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}`);
    } else {
      console.log("Invalid withdraw amount.");
    }
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // 1000
account.deposit(500); // Deposited: $500
account.withdraw(300); // Withdrew: $300
console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
```

---

### **Example: Using Private Methods**

```javascript
class PasswordManager {
  #password; // Private field

  constructor(password) {
    this.#password = password;
  }

  // Public method
  verifyPassword(inputPassword) {
    return this.#comparePasswords(inputPassword);
  }

  // Private method
  #comparePasswords(inputPassword) {
    return this.#password === inputPassword;
  }
}

const manager = new PasswordManager("securePassword123");

console.log(manager.verifyPassword("securePassword123")); // true
console.log(manager.verifyPassword("wrongPassword")); // false
console.log(manager.#comparePasswords("securePassword123")); // SyntaxError: Private field '#comparePasswords' must be declared in an enclosing class
```

---

### **Important Considerations**

#### **1. Privacy Scope**

Private fields and methods are scoped to the class definition. They cannot be accessed:

- From outside the class.
- From subclasses, even if the subclass extends the parent class.

```javascript
class Parent {
  #privateField = "I am private";
}

class Child extends Parent {
  accessParentPrivateField() {
    console.log(this.#privateField); // SyntaxError
  }
}
```

#### **2. Cannot Be Dynamically Accessed**

Private fields and methods cannot be accessed dynamically via `this[name]` or bracket notation.

```javascript
class Example {
  #privateField = 42;

  accessPrivate(name) {
    console.log(this[name]); // undefined
    console.log(this.#privateField); // 42
  }
}
```

#### **3. No Interaction with Prototypes**

Private fields and methods are not added to the class prototype, meaning they are unique to each instance and cannot be shared or overridden.

---

### **Benefits of Private Members**

1. **Encapsulation**: Prevent accidental or unauthorized access to internal details.
2. **Clean Interface**: Expose only public methods or fields that users of the class need.
3. **Improved Readability**: Clear intent to other developers that private members are strictly internal.

---

### **Limitations**

1. **No Access Outside Class**: Debugging or testing private fields/methods requires special handling (e.g., public getters/setters or `Proxy` objects).
2. **Memory Usage**: Because private fields are per-instance (not on the prototype), they may consume more memory in some cases.

---

### **Conclusion**

Private fields (`#field`) and methods (`#method()`) provide a robust way to enforce encapsulation in JavaScript classes, ensuring that sensitive data and logic are not accessible or modifiable from outside the class. They are a valuable tool for creating cleaner and more maintainable code.

### 19. **What are computed property names in a class, and how do you use them?**

### **Computed Property Names in a Class**

In JavaScript, **computed property names** allow you to dynamically define property names for objects or class methods using expressions. They are enclosed in square brackets (`[]`) and can be used in class declarations to define **dynamic property names** for methods or fields.

---

### **How Computed Property Names Work**

1. **Dynamic Naming**: The property name is determined by evaluating an expression inside the brackets.
2. **Flexibility**: Allows property or method names to be based on variables, function results, or other expressions.

---

### **Syntax in Classes**

#### 1. **Defining Methods with Computed Names**

You can define methods in a class where the method name is derived from an expression.

```javascript
const dynamicMethodName = "sayHello";

class Greeter {
  [dynamicMethodName]() {
    console.log("Hello, world!");
  }
}

const greeter = new Greeter();
greeter.sayHello(); // Output: "Hello, world!"
```

#### 2. **Defining Static Methods**

Static methods can also use computed property names.

```javascript
const methodName = "getStaticMessage";

class Utility {
  static [methodName]() {
    return "This is a static method!";
  }
}

console.log(Utility.getStaticMessage()); // Output: "This is a static method!"
```

#### 3. **Defining Fields with Computed Names**

Both public and private fields can have computed names.

```javascript
const fieldName = "greeting";

class Message {
  [fieldName] = "Hello, dynamic world!";
}

const message = new Message();
console.log(message.greeting); // Output: "Hello, dynamic world!"
```

---

### **Practical Example: Using Computed Names**

#### **Dynamic Event Handler Names**

```javascript
class EventHandler {
  constructor(eventType) {
    this.eventType = eventType;
  }

  // Dynamically named method
  [this.eventType]() {
    console.log(`Handling ${this.eventType} event`);
  }
}

const clickHandler = new EventHandler("onClick");
clickHandler.onClick(); // Output: "Handling onClick event"
```

#### **Dynamic Key Mapping**

```javascript
const keys = ["key1", "key2", "key3"];

class KeyMapper {
  constructor(values) {
    keys.forEach((key, index) => {
      this[key] = values[index];
    });
  }
}

const mapper = new KeyMapper(["value1", "value2", "value3"]);
console.log(mapper.key1); // Output: "value1"
console.log(mapper.key2); // Output: "value2"
console.log(mapper.key3); // Output: "value3"
```

---

### **Key Points**

1. **When to Use**:

   - When you need dynamic property or method names based on runtime values.
   - Useful for creating flexible APIs or working with variable-driven logic.

2. **Expressions Allowed**:

   - Any valid JavaScript expression can be used inside `[]`.

3. **Compatibility**:
   - Computed property names are supported in modern JavaScript environments, including ES6 and later.

---

### **Limitations**

1. **Complexity**: Overusing dynamic names can make code harder to read and maintain.
2. **Name Conflicts**: If computed names overlap with other class members, it may lead to unexpected behavior.

---

### **Conclusion**

Computed property names in classes provide a powerful way to define dynamic behavior by allowing method or field names to be determined at runtime. While they enhance flexibility, use them judiciously to avoid reducing code clarity.

### 20. **What is the difference between `static` methods and instance methods in terms of `this` context?**

The difference between **`static` methods** and **instance methods** in terms of the `this` context lies in **what `this` refers to** when the method is called.

---

### **Instance Methods**

- Instance methods are associated with an individual object created from a class.
- The `this` keyword in an instance method refers to the **instance of the class** that calls the method.

#### Example

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  // Instance method
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Alice");
person1.greet(); // "Hello, my name is Alice"

const person2 = new Person("Bob");
person2.greet(); // "Hello, my name is Bob"
```

- `this.name` refers to the `name` property of the specific instance (`person1` or `person2`).

---

### **`static` Methods**

- `static` methods belong to the class itself, not to any instance of the class.
- The `this` keyword inside a `static` method refers to the **class itself**, not an instance.

#### Example

```javascript
class Utility {
  static printMessage() {
    console.log(`This is a static method. Class name: ${this.name}`);
  }
}

Utility.printMessage(); // "This is a static method. Class name: Utility"

// Attempting to call a static method on an instance will result in an error
const utilInstance = new Utility();
// utilInstance.printMessage(); // TypeError: utilInstance.printMessage is not a function
```

- Here, `this.name` refers to the name of the class (`Utility`).

---

### **Key Differences**

| Feature                     | Instance Method                                        | `static` Method                       |
| --------------------------- | ------------------------------------------------------ | ------------------------------------- |
| **Binding of `this`**       | Refers to the instance of the class.                   | Refers to the class itself.           |
| **Access**                  | Called on class instances.                             | Called on the class itself.           |
| **Access to Instance Data** | Can access instance properties and methods via `this`. | Cannot access instance properties.    |
| **Purpose**                 | Used for behavior specific to an instance.             | Used for utility or helper functions. |

---

### **Combined Example**

```javascript
class Calculator {
  constructor(value) {
    this.value = value;
  }

  // Instance method
  add(number) {
    this.value += number;
    return this.value;
  }

  // Static method
  static subtract(a, b) {
    return a - b;
  }
}

const calc = new Calculator(10);
console.log(calc.add(5)); // 15 (instance-specific operation)
console.log(Calculator.subtract(7, 2)); // 5 (general operation, no instance required)
```

---

### **Practical Implications**

1. **Utility Methods**:
   - Use `static` methods for operations that don’t rely on instance data, like utility functions (`Math.max`, `Date.now`, etc.).
2. **Instance-Specific Logic**:
   - Use instance methods when you need to manipulate or access data tied to a specific object.

### 21. **How can you enforce a class to be non-extendable?**

To make a class non-extendable in JavaScript, you can use the **`Object.freeze()`** method or the **`final` pattern** to enforce the restriction.

---

### **1. Using `Object.freeze()`**

- You can freeze the constructor of a class to prevent it from being extended.
- Freezing makes the constructor immutable and prevents any subclassing.

#### Example

```javascript
class FinalClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

// Freeze the class to prevent extension
Object.freeze(FinalClass);

class AnotherClass extends FinalClass {} // TypeError: Cannot extend a frozen class
```

#### How It Works:

- `Object.freeze(FinalClass)` makes the constructor immutable.
- When the `extends` keyword tries to create a subclass, it fails because the frozen class cannot be altered.

---

### **2. Using the `final` Pattern**

- You can manually throw an error inside the constructor of the class if it detects being extended.
- This pattern uses the `new.target` property to check if the class is being directly instantiated or subclassed.

#### Example

```javascript
class FinalClass {
  constructor() {
    if (new.target !== FinalClass) {
      throw new Error("This class cannot be extended.");
    }
  }

  greet() {
    console.log("Hello, this is a final class!");
  }
}

class AnotherClass extends FinalClass {} // Error: This class cannot be extended
```

#### How It Works:

- `new.target` refers to the constructor that was directly invoked.
- If `new.target` is not equal to `FinalClass`, the constructor knows it is being subclassed and throws an error.

---

### **3. Prevent Adding Methods to Prototypes**

To make a class non-extendable, ensure its prototype is also immutable. You can use `Object.freeze()` on the class's prototype.

#### Example

```javascript
class FinalClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

// Freeze the prototype to prevent extension
Object.freeze(FinalClass.prototype);

class AnotherClass extends FinalClass {} // TypeError: Cannot modify frozen prototype
```

---

### **4. Combination Approach**

For robust non-extensibility, you can combine multiple techniques:

- Freeze the class.
- Freeze the prototype.
- Use `new.target` to detect subclassing.

#### Example

```javascript
class FinalClass {
  constructor() {
    if (new.target !== FinalClass) {
      throw new Error("This class cannot be extended.");
    }
  }

  greet() {
    console.log("Hello, this is a final class!");
  }
}

// Freeze both the class and its prototype
Object.freeze(FinalClass);
Object.freeze(FinalClass.prototype);

class AnotherClass extends FinalClass {} // Error: This class cannot be extended
```

---

### **Summary**

| Method                | Technique                              | Use Case                           |
| --------------------- | -------------------------------------- | ---------------------------------- |
| **`Object.freeze()`** | Freezes the class and/or prototype     | Prevents extension at runtime.     |
| **`final` Pattern**   | Checks `new.target` in the constructor | Enforces at runtime with an error. |
| **Combined Approach** | Uses both freezing and `new.target`    | Ensures robust enforcement.        |

### 22. **What are getters and setters in a class, and how are they used?**

### **Getters and Setters in JavaScript Classes**

Getters and setters are **special methods** in JavaScript that allow you to define custom behavior for **getting** or **setting** a property in a class. They provide a way to control access to an object's properties, enabling encapsulation and validation.

---

### **1. Syntax**

#### Defining a Getter

A getter is defined using the `get` keyword. It is called when you access the property.

#### Defining a Setter

A setter is defined using the `set` keyword. It is called when you assign a value to the property.

#### Example

```javascript
class Person {
  constructor(name) {
    this._name = name; // Private-like property (by convention)
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(newName) {
    if (newName.length < 3) {
      console.log("Name must be at least 3 characters long.");
    } else {
      this._name = newName;
    }
  }
}

const person = new Person("Alice");

console.log(person.name); // Getter: "Alice"
person.name = "Bo"; // Setter: "Name must be at least 3 characters long."
person.name = "Bob"; // Setter: Updates the name
console.log(person.name); // Getter: "Bob"
```

---

### **2. Key Points**

1. **Encapsulation**: Use getters and setters to control access and enforce rules on properties.
2. **Private-like Properties**: By convention, use an underscore (`_`) or private fields (`#`) to store the actual data.
3. **Validation**: Perform checks or transformations in the setter before assigning a value.

---

### **3. Practical Examples**

#### **Derived Property**

Use getters to compute properties dynamically.

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter for area
  get area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50 (computed dynamically)
```

---

#### **Immutable Property**

Use a getter to make a property read-only.

```javascript
class ReadOnly {
  constructor(value) {
    this._value = value;
  }

  // Read-only property
  get value() {
    return this._value;
  }
}

const obj = new ReadOnly(42);
console.log(obj.value); // 42
// obj.value = 100;      // Error: Cannot set property
```

---

#### **Advanced Example: Data Validation**

```javascript
class Account {
  constructor(balance) {
    this._balance = balance;
  }

  // Getter
  get balance() {
    return `$${this._balance.toFixed(2)}`;
  }

  // Setter with validation
  set balance(amount) {
    if (amount < 0) {
      console.log("Balance cannot be negative.");
    } else {
      this._balance = amount;
    }
  }
}

const account = new Account(100);
console.log(account.balance); // "$100.00"

account.balance = -50; // "Balance cannot be negative."
console.log(account.balance); // "$100.00"

account.balance = 200;
console.log(account.balance); // "$200.00"
```

---

### **4. Benefits of Getters and Setters**

1. **Encapsulation**: Control how properties are accessed and modified.
2. **Validation**: Add checks to ensure data integrity.
3. **Abstraction**: Hide the internal implementation details.
4. **Dynamic Computation**: Compute property values on demand (e.g., derived properties).

---

### **5. Restrictions**

1. **Cannot Have Same Name**:

   - A getter and setter must have the same name to act on the same property.
   - You cannot define a getter and setter with different names for the same property.

2. **Cannot Be Overloaded**:
   - JavaScript does not allow function overloading, so you cannot have multiple getters or setters with the same name.

---

### **Conclusion**

Getters and setters provide a powerful way to manage and control access to properties in JavaScript classes. They enhance **readability**, **maintainability**, and ensure that your class follows principles like encapsulation and data integrity. Use them when you need additional logic for property access or mutation.

### 23. **Can you mix class-based and prototype-based inheritance in JavaScript?**

Yes, you can mix **class-based** and **prototype-based** inheritance in JavaScript, but it requires a good understanding of how JavaScript handles both.

JavaScript's inheritance mechanism is based on **prototype-based inheritance**, where objects inherit directly from other objects, rather than classes. However, ES6 introduced **class-based syntax** which provides a more familiar and structured way to define inheritance, but under the hood, it's still using prototype-based inheritance.

### **1. Class-based Inheritance (ES6 Classes)**

In class-based inheritance, classes are introduced with the `class` keyword, and you use `extends` to create subclasses.

#### Example:

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

const dog = new Dog("Rex");
dog.speak(); // "Rex barks."
```

Here, `Dog` inherits from `Animal`, and the `speak` method is overridden.

### **2. Prototype-based Inheritance (Pre-ES6)**

In prototype-based inheritance, you directly manipulate the prototype of objects to create inheritance.

#### Example:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
  Animal.call(this, name); // Call the parent constructor
}

// Set Dog's prototype to be an instance of Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Fix the constructor reference

Dog.prototype.speak = function () {
  console.log(`${this.name} barks.`);
};

const dog = new Dog("Rex");
dog.speak(); // "Rex barks."
```

Here, `Dog` inherits from `Animal` by modifying its prototype.

### **Mixing Class-based and Prototype-based Inheritance**

Since classes are just syntactic sugar over prototype-based inheritance, it is possible to mix the two. For example, you can create a class and then modify its prototype, or mix in prototype-based behavior into class instances.

#### Example: Combining Both

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Create a class instance
const dog = new Animal("Rex");

// Mix prototype-based method after class definition
Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};

dog.speak(); // "Rex makes a noise."
dog.eat(); // "Rex is eating."
```

In this example:

- We created a class `Animal`.
- After creating the class, we added a method `eat` directly to its prototype, and it was available to all instances of `Animal`.

### **Combining Classes and Prototype-based Methods**

You can also combine **class inheritance** with **prototype-based inheritance** to create more complex inheritance structures.

#### Example: Extending a Class and Modifying Prototype

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

function Dog(name) {
  Animal.call(this, name); // Call the parent constructor
}

Dog.prototype = Object.create(Animal.prototype); // Set prototype chain
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} barks loudly.`);
};

const dog = new Dog("Rex");
dog.speak(); // "Rex makes a noise."
dog.bark(); // "Rex barks loudly."
```

In this example:

- We use a **class** for `Animal` and create a constructor function `Dog`.
- We modify the prototype of `Dog` to include methods from `Animal` and add `bark` using prototype-based inheritance.

### **Practical Example: Extending a Class and Adding Prototype Methods**

You can add prototype-based methods after a class definition to enhance or modify behavior.

```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log(`Driving a ${this.make} ${this.model}`);
  }
}

// Add a prototype method after the class is defined
Car.prototype.honk = function () {
  console.log(`${this.make} ${this.model} honks!`);
};

const myCar = new Car("Toyota", "Corolla");
myCar.drive(); // "Driving a Toyota Corolla"
myCar.honk(); // "Toyota Corolla honks!"
```

### **Key Takeaways**

- **Class-based inheritance** in JavaScript is essentially syntactic sugar over **prototype-based inheritance**.
- Both **classes** and **constructor functions** work by manipulating the prototype chain.
- You can mix both **class syntax** and **prototype manipulation** as needed.
- **Prototype-based inheritance** provides more flexibility, while **class syntax** offers a more structured and familiar approach.

### 24. **How does JavaScript handle multiple inheritance (e.g., mixins)?**

JavaScript does not support **multiple inheritance** directly in the traditional sense, as a class can only extend one other class. However, you can achieve similar functionality using **mixins**. Mixins allow you to mix behavior from multiple sources into a single class or object.

---

### **What are Mixins?**

A **mixin** is a reusable chunk of code that you can add to multiple classes or objects without the constraints of single inheritance. They are commonly implemented as plain objects with methods that can be copied into or applied to other classes.

---

### **How JavaScript Handles Multiple Inheritance Using Mixins**

1. **Object Composition**:

   - JavaScript encourages composition over inheritance, where you combine behaviors from different objects into one.

2. **Mixin Implementation**:
   - Use `Object.assign()` or similar techniques to copy properties and methods from one or more objects into another.

---

### **Example: Implementing Mixins**

Here’s how you can simulate multiple inheritance using mixins:

#### Example 1: Adding Methods to a Class

```javascript
// Define a mixin with shared behavior
const CanFly = {
  fly() {
    console.log(`${this.name} is flying!`);
  },
};

const CanSwim = {
  swim() {
    console.log(`${this.name} is swimming!`);
  },
};

// A class that uses the mixins
class Bird {
  constructor(name) {
    this.name = name;
  }
}

// Mix in the behaviors
Object.assign(Bird.prototype, CanFly, CanSwim);

// Create an instance
const duck = new Bird("Duck");
duck.fly(); // Output: Duck is flying!
duck.swim(); // Output: Duck is swimming!
```

---

#### Example 2: Dynamic Mixin Application

You can dynamically apply mixins to add functionality at runtime.

```javascript
function applyMixins(target, mixins) {
  mixins.forEach((mixin) => Object.assign(target.prototype, mixin));
}

// Define mixins
const CanRun = {
  run() {
    console.log(`${this.name} is running!`);
  },
};

const CanJump = {
  jump() {
    console.log(`${this.name} is jumping!`);
  },
};

// Define a base class
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Dynamically apply mixins
applyMixins(Animal, [CanRun, CanJump]);

const rabbit = new Animal("Rabbit");
rabbit.run(); // Output: Rabbit is running!
rabbit.jump(); // Output: Rabbit is jumping!
```

---

### **Why Use Mixins?**

1. **Reuse Code**:

   - Share common functionality across unrelated classes without duplicating code.

2. **Avoid Deep Inheritance**:

   - JavaScript encourages composition to keep code modular and easier to manage.

3. **Flexibility**:
   - Dynamically add or modify behavior without needing to refactor the class hierarchy.

---

### **Limitations of Mixins**

1. **Name Clashes**:

   - If multiple mixins have methods or properties with the same name, one will overwrite the other.

   ```javascript
   const MixinA = { action: () => console.log("MixinA Action") };
   const MixinB = { action: () => console.log("MixinB Action") };

   const obj = {};
   Object.assign(obj, MixinA, MixinB); // MixinB overwrites MixinA
   obj.action(); // Output: MixinB Action
   ```

2. **Complex Debugging**:

   - Tracing issues in deeply mixed behaviors can become challenging.

3. **No Direct Support for Super Calls**:
   - Mixins do not inherently support `super` calls, requiring manual handling.

---

### **Advanced Mixins with Classes**

You can use mixins with classes by extending the base class dynamically.

```javascript
function mixin(Base, ...mixins) {
  return mixins.reduce((acc, mixin) => mixin(acc), Base);
}

const CanBark = (Base) =>
  class extends Base {
    bark() {
      console.log(`${this.name} is barking!`);
    }
  };

const CanPlay = (Base) =>
  class extends Base {
    play() {
      console.log(`${this.name} is playing!`);
    }
  };

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Combine mixins with the base class
const PlayfulDog = mixin(Dog, CanBark, CanPlay);

const dog = new PlayfulDog("Buddy");
dog.bark(); // Output: Buddy is barking!
dog.play(); // Output: Buddy is playing!
```

---

### **When to Use Mixins**

1. **Cross-Cutting Concerns**:
   - Logging, event handling, or other utilities.
2. **Shared Behaviors**:
   - Adding functionality like movement (e.g., fly, swim, run).
3. **Avoiding Inheritance**:
   - Use mixins to share code when inheritance isn't viable or desired.

---

## **Expert-Level Questions**

### 25. **What happens under the hood when you use the `new` keyword with a class?**

When you use the `new` keyword with a class in JavaScript, several steps happen under the hood to create and initialize a new object instance. Let’s break it down step by step:

---

### **Steps the `new` Keyword Performs**

Here’s what happens when you do `const obj = new ClassName(args)`:

1. **Create a New Object**:

   - A new empty object is created, equivalent to using `Object.create()` with the class prototype as its prototype.

   ```javascript
   const obj = Object.create(ClassName.prototype);
   ```

2. **Set the Prototype**:

   - The new object’s internal `[[Prototype]]` is set to the `prototype` property of the constructor function (`ClassName` in this case).

3. **Call the Constructor**:

   - The constructor function of the class is called with the newly created object as its `this` context, and any arguments passed to `new` are forwarded to the constructor.

   ```javascript
   const result = ClassName.call(obj, ...args);
   ```

4. **Return the Object**:

   - If the constructor explicitly returns an object, that object is returned as the result of the `new` expression.
   - Otherwise, the newly created object is returned.

   ```javascript
   return typeof result === "object" && result !== null ? result : obj;
   ```

---

### **Under the Hood Example**

Let’s simulate what happens when you use `new` with a class.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

// Using the `new` keyword
const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice.
```

**Equivalent Behavior Without `new`:**

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

// Simulating `new`
function simulateNew(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype); // Step 1 & 2
  const result = Constructor.apply(obj, args); // Step 3
  return typeof result === "object" && result !== null ? result : obj; // Step 4
}

const person2 = simulateNew(Person, "Alice", 25);
person2.greet(); // Output: Hello, my name is Alice.
```

---

### **Key Points About `new` with Classes**

1. **`this` Binding**:

   - Inside the constructor, `this` refers to the new object being created.

2. **Prototype Chain**:

   - The new object’s prototype is linked to the constructor’s `prototype` object.

3. **Default Behavior**:

   - If no constructor is defined in a class, a default constructor is used, which simply calls `super()` in derived classes or does nothing in base classes.

   ```javascript
   class Animal {}
   const a = new Animal(); // Works fine because of the default constructor.
   ```

4. **Explicit Return in Constructor**:

   - If the constructor explicitly returns an object, that object is returned instead of the new instance.

   ```javascript
   class Example {
     constructor() {
       return { message: "This replaces the instance" };
     }
   }

   const instance = new Example();
   console.log(instance); // Output: { message: "This replaces the instance" }
   ```

---

### **Why `new` is Important**

Without `new`, the constructor would not create a new object or bind `this` correctly, leading to unexpected behavior:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const person = Person("Alice"); // Forgot `new`
console.log(person); // undefined, as `this` is not bound to an object
```

Using `new` ensures proper initialization and linkage of the prototype chain.

---

### **Summary**

The `new` keyword:

1. Creates a new object.
2. Links it to the class prototype.
3. Calls the constructor with the new object as `this`.
4. Returns the object (or another explicitly returned object).

### 26. **How can you use `Symbol.species` in a subclass to customize object creation?**

The `Symbol.species` property in JavaScript allows a class to specify what constructor should be used when creating derived objects during certain operations. It is particularly useful when subclassing built-in objects like `Array`, `Map`, or `Promise`, and you want to control the type of objects returned from methods like `.slice()`, `.map()`, or `.then()`.

---

### **Default Behavior**

When methods of a built-in class create a new instance, they typically use the constructor of the current instance. For example:

```javascript
class MyArray extends Array {}

const myArr = new MyArray(1, 2, 3);
const sliced = myArr.slice(0, 2);

console.log(sliced instanceof MyArray); // true
console.log(sliced instanceof Array); // true
```

Here, the `slice` method of `Array` creates an instance of the same class (`MyArray`), not the parent `Array`.

---

### **Using `Symbol.species`**

You can customize this behavior by defining a static getter for `Symbol.species` in the subclass. The value returned by `Symbol.species` determines which constructor will be used for creating derived objects.

#### Example: Customizing with `Symbol.species`

```javascript
class MyArray extends Array {
  // Override Symbol.species to use Array instead of MyArray
  static get [Symbol.species]() {
    return Array;
  }
}

const myArr = new MyArray(1, 2, 3);
const sliced = myArr.slice(0, 2);

console.log(sliced instanceof MyArray); // false
console.log(sliced instanceof Array); // true
```

In this example:

- The `slice` method of `MyArray` uses `Array` (defined by `Symbol.species`) to create the new array.
- The result is a plain `Array`, not a `MyArray`.

---

### **Why Use `Symbol.species`?**

1. **Control Output Type**:

   - If your subclass adds specific behavior or data that doesn't make sense to include in derived objects, you can use `Symbol.species` to fall back to the parent class or another type.

2. **Prevent Unintended Subclass Instances**:
   - Ensures that methods like `.slice()` or `.map()` return instances of the expected base type, avoiding surprises when working with libraries or extending built-in objects.

---

### **Another Example: Custom Promise Subclass**

```javascript
class CustomPromise extends Promise {
  static get [Symbol.species]() {
    return Promise; // Use the default Promise for derived promises
  }
}

const custom = new CustomPromise((resolve) => resolve(42));
const chained = custom.then((value) => value + 1);

console.log(chained instanceof CustomPromise); // false
console.log(chained instanceof Promise); // true
```

Here:

- `then` creates a new `Promise` instead of a `CustomPromise`.
- This avoids unexpected behavior if `CustomPromise` has special logic that shouldn't propagate.

---

### **How It Works**

1. **Built-in Methods Look for `Symbol.species`**:

   - When creating derived objects, methods like `slice`, `map`, or `then` check for the `Symbol.species` property on the constructor.

2. **If `Symbol.species` is Not Defined**:

   - The default behavior is to use the current constructor.

3. **When `Symbol.species` is Defined**:
   - The value returned by `Symbol.species` determines the constructor for derived objects.

---

### **Key Points**

- `Symbol.species` must be a static getter in the class.
- It is useful when you subclass a built-in object and want to control the type of derived objects.
- Methods like `.map()`, `.slice()`, and `.then()` respect `Symbol.species`.

---

### 27. **How does the `instanceof` operator work with classes and inheritance?**

The `instanceof` operator in JavaScript checks if an object is an instance of a specific constructor (class or function) or any of its parent constructors in the prototype chain. It is primarily used to determine the relationship between an object and a class, especially in the context of inheritance.

---

### **How `instanceof` Works**

The syntax is:

```javascript
object instanceof Constructor;
```

1. **Prototype Chain Check**:

   - `instanceof` checks if the prototype of the constructor (`Constructor.prototype`) appears anywhere in the prototype chain of the object.

2. **Returns a Boolean**:

   - `true` if the object is an instance of the constructor or a subclass of the constructor.
   - `false` otherwise.

3. **Customizable Behavior**:
   - If the constructor has a custom `Symbol.hasInstance` method, `instanceof` calls that method to determine the result.

---

### **Basic Example**

```javascript
class Animal {}
class Dog extends Animal {}

const dog = new Dog();

console.log(dog instanceof Dog); // true (dog is an instance of Dog)
console.log(dog instanceof Animal); // true (Dog inherits from Animal)
console.log(dog instanceof Object); // true (all objects inherit from Object)
console.log(dog instanceof Array); // false (dog is not related to Array)
```

---

### **Prototype Chain Under the Hood**

Here's how `instanceof` works internally:

1. Start with the prototype of the object being checked.
2. Traverse the prototype chain.
3. Return `true` if the `Constructor.prototype` is found in the chain.
4. If the end of the chain is reached (`null`), return `false`.

Example:

```javascript
class A {}
class B extends A {}

const obj = new B();

// obj instanceof B works like this:
let proto = Object.getPrototypeOf(obj);
while (proto) {
  if (proto === B.prototype) return true;
  proto = Object.getPrototypeOf(proto);
}
return false;
```

---

### **Customizing `instanceof` with `Symbol.hasInstance`**

The `Symbol.hasInstance` method allows you to customize the behavior of `instanceof` for a class.

```javascript
class CustomCheck {
  static [Symbol.hasInstance](instance) {
    return instance.hasOwnProperty("customProperty");
  }
}

const obj = { customProperty: true };
console.log(obj instanceof CustomCheck); // true

const obj2 = {};
console.log(obj2 instanceof CustomCheck); // false
```

In this example:

- `instanceof` doesn't rely on the prototype chain.
- Instead, it uses the logic defined in `Symbol.hasInstance`.

---

### **Special Cases**

1. **With Primitive Values**:

   - `instanceof` always returns `false` for primitive values, except for objects explicitly created using constructors like `new String()` or `new Number()`.

   ```javascript
   console.log(42 instanceof Number); // false
   console.log(new Number(42) instanceof Number); // true
   ```

2. **Inheritance and Subclasses**:

   - If a subclass doesn't explicitly define a constructor, it still inherits from its parent class.

   ```javascript
   class Parent {}
   class Child extends Parent {}

   const child = new Child();
   console.log(child instanceof Child); // true
   console.log(child instanceof Parent); // true
   ```

3. **`Object` and `null`**:

   - Everything except `null` and `undefined` is considered an instance of `Object`.

   ```javascript
   console.log({} instanceof Object); // true
   console.log([] instanceof Object); // true
   console.log(null instanceof Object); // false
   ```

4. **Cross-Realm Issues**:
   - If an object comes from a different JavaScript context (e.g., an iframe), its prototype may not match the expected constructor's prototype, causing `instanceof` to behave unexpectedly.

---

### **When to Use `instanceof`**

1. **Type Checking**:

   - To verify if an object is an instance of a specific class or its subclass.

2. **Polymorphism**:

   - To execute specific logic based on the object's type in an inheritance hierarchy.

3. **Custom Behaviors**:
   - Combine `Symbol.hasInstance` with `instanceof` for tailored instance checks.

---

### **Comparison with `typeof` and `Object.prototype.toString`**

- **`typeof`**:

  - Checks for primitive types but has limited utility for objects.

  ```javascript
  console.log(typeof []); // "object"
  console.log(typeof null); // "object" (quirk)
  ```

- **`Object.prototype.toString`**:
  - Provides detailed type information but is less flexible and requires more setup.
  ```javascript
  console.log(Object.prototype.toString.call([])); // "[object Array]"
  ```

---

### 28. **How can you create an abstract class in JavaScript?**

JavaScript doesn't have built-in support for abstract classes like some other programming languages (e.g., Java, C#). However, you can simulate abstract classes using a combination of techniques such as base classes, throwing errors for unimplemented methods, and documentation conventions.

Here’s how you can create and use an "abstract class" in JavaScript:

---

### **1. Using Base Class with Unimplemented Methods**

You can define a base class and throw an error if a subclass does not implement required methods.

#### Example:

```javascript
class AbstractShape {
  constructor() {
    if (new.target === AbstractShape) {
      throw new Error("Cannot instantiate an abstract class directly.");
    }
  }

  // Abstract method
  calculateArea() {
    throw new Error("Method 'calculateArea()' must be implemented.");
  }

  // Abstract method
  calculatePerimeter() {
    throw new Error("Method 'calculatePerimeter()' must be implemented.");
  }
}

// Subclass implementing the abstract methods
class Rectangle extends AbstractShape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Subclass
class Circle extends AbstractShape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Usage
try {
  const shape = new AbstractShape(); // Error: Cannot instantiate an abstract class directly.
} catch (e) {
  console.error(e.message);
}

const rect = new Rectangle(10, 5);
console.log(rect.calculateArea()); // Output: 50
console.log(rect.calculatePerimeter()); // Output: 30

const circle = new Circle(7);
console.log(circle.calculateArea()); // Output: 153.93804002589985
console.log(circle.calculatePerimeter()); // Output: 43.982297150257104
```

---

### **2. Enforcing Abstract Methods with `Symbol`**

You can use a `Symbol` to define "abstract" methods that must be implemented in subclasses.

#### Example:

```javascript
const calculateArea = Symbol("calculateArea");

class AbstractShape {
  constructor() {
    if (new.target === AbstractShape) {
      throw new Error("Cannot instantiate an abstract class directly.");
    }
    if (typeof this[calculateArea] !== "function") {
      throw new Error("Must implement abstract method 'calculateArea'.");
    }
  }
}

// Subclass
class Triangle extends AbstractShape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  [calculateArea]() {
    return 0.5 * this.base * this.height;
  }

  calculateArea() {
    return this[calculateArea]();
  }
}

const triangle = new Triangle(10, 5);
console.log(triangle.calculateArea()); // Output: 25
```

---

### **3. Abstract Class with ES6 Static Method**

You can add static methods or properties to enforce rules for subclasses.

#### Example:

```javascript
class AbstractShape {
  static isAbstract() {
    if (this === AbstractShape) {
      throw new Error("Cannot instantiate an abstract class directly.");
    }
  }

  constructor() {
    AbstractShape.isAbstract.call(this.constructor);
  }

  calculateArea() {
    throw new Error("Must implement method 'calculateArea()'.");
  }
}

// Subclass
class Square extends AbstractShape {
  constructor(side) {
    super();
    this.side = side;
  }

  calculateArea() {
    return this.side ** 2;
  }
}

const square = new Square(4);
console.log(square.calculateArea()); // Output: 16
```

---

### **Key Points to Remember**

1. **Abstract Classes Can't Be Instantiated**:

   - Use a constructor check (`new.target`) to prevent direct instantiation.

2. **Abstract Methods**:

   - Define methods that throw an error if they are not implemented by subclasses.

3. **Documentation**:

   - Clearly document your abstract class and methods so that developers understand their purpose and usage.

4. **Optional Tools**:
   - Use `TypeScript` for stricter enforcement of abstract classes and methods. TypeScript provides built-in `abstract` keyword support.

---

### **Why Use Abstract Classes in JavaScript?**

- To enforce consistent behavior across subclasses.
- To define a template for subclasses, reducing redundant code.
- To support polymorphism in object-oriented designs.

### 29. **What are the differences between ES5 constructor functions and ES6 classes in terms of inheritance and the prototype chain?**

The primary difference between **ES5 constructor functions** and **ES6 classes** lies in their syntax and some underlying mechanics, particularly regarding inheritance and the prototype chain. Here's a detailed comparison:

---

### **1. Syntax Differences**

- **ES5 Constructor Functions**:
  - Functions are used to create objects.
  - Prototype methods are added manually using `Function.prototype`.

```javascript
// Constructor function
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a noise.`;
};
```

- **ES6 Classes**:
  - Introduced as syntactic sugar over ES5's prototypal inheritance.
  - Classes use the `class` keyword, and methods are defined within the class body.

```javascript
// ES6 Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}
```

---

### **2. Inheritance**

#### **In ES5: Prototypal Inheritance**

- Inheritance is achieved by setting the prototype of a constructor to an instance of another constructor using `Object.create` or manually linking prototypes.

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a noise.`;
};

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // Set prototype chain
Dog.prototype.constructor = Dog; // Restore constructor

Dog.prototype.bark = function () {
  return `${this.name} barks!`;
};

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.speak()); // Buddy makes a noise.
console.log(dog.bark()); // Buddy barks!
```

#### **In ES6: Class Inheritance**

- Inheritance is simpler and more intuitive using the `extends` keyword.
- The `super` keyword calls the parent class constructor or methods.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  bark() {
    return `${this.name} barks!`;
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.speak()); // Buddy makes a noise.
console.log(dog.bark()); // Buddy barks!
```

---

### **3. Prototype Chain**

- **ES5 Constructor Functions**:

  - The prototype chain is manually linked using `Object.create` or by explicitly setting `prototype`.

- **ES6 Classes**:
  - The prototype chain is established automatically when using `extends`.

**Example:**

```javascript
// ES5
function A() {}
function B() {}
B.prototype = Object.create(A.prototype);
console.log(B.prototype.__proto__ === A.prototype); // true

// ES6
class A {}
class B extends A {}
console.log(Object.getPrototypeOf(B.prototype) === A.prototype); // true
```

---

### **4. Method Definitions**

- **ES5 Constructor Functions**:
  - Methods must be explicitly added to the constructor's prototype.

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a noise.`;
};
```

- **ES6 Classes**:
  - Methods are defined directly within the class body and are non-enumerable.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}
```

---

### **5. `new` Behavior**

- Both **ES5** and **ES6** require `new` to create instances, but:

  - **ES5**: Calling a constructor function without `new` doesn't throw an error but may lead to incorrect behavior.

    ```javascript
    function Animal(name) {
      this.name = name;
    }
    const animal = Animal("Buddy"); // Missing `new`
    console.log(animal); // undefined
    console.log(window.name); // "Buddy" (global context in browsers)
    ```

  - **ES6 Classes**: Classes throw an error if called without `new`.
    ```javascript
    class Animal {
      constructor(name) {
        this.name = name;
      }
    }
    const animal = Animal("Buddy"); // TypeError: Class constructor Animal cannot be invoked without 'new'
    ```

---

### **6. Static Methods**

- Both support static methods, but ES6 provides a more straightforward syntax.

```javascript
// ES5
function Animal() {}
Animal.getClassName = function () {
  return "Animal";
};
console.log(Animal.getClassName()); // Animal

// ES6
class Animal {
  static getClassName() {
    return "Animal";
  }
}
console.log(Animal.getClassName()); // Animal
```

---

### **7. Differences in Behavior**

| Feature                  | ES5 Constructor Functions          | ES6 Classes                         |
| ------------------------ | ---------------------------------- | ----------------------------------- |
| Syntax                   | Function-based                     | Class-based                         |
| Inheritance              | Manual setup using `Object.create` | Automatic with `extends`            |
| Prototype Chain Setup    | Explicit                           | Implicit                            |
| `new` Enforcement        | No error without `new`             | Throws an error if `new` is omitted |
| Static Methods           | Explicit definition                | Built-in `static` keyword           |
| Enumerability of Methods | Enumerable                         | Non-enumerable                      |

---

### **When to Use Which?**

- **Use ES6 classes** for most modern JavaScript development:

  - Cleaner syntax.
  - Easier inheritance with `extends`.
  - Better support for `new` enforcement and `super`.

- **Use ES5 constructor functions** only for:
  - Compatibility with legacy codebases.
  - Environments where ES6 is not fully supported.

---

### 30. **How do decorators work in JavaScript classes (if available in your environment)?**

Decorators in JavaScript are a **stage 3 ECMAScript proposal** and may not be fully supported in all JavaScript environments. However, they are available in environments like TypeScript and with transpilers such as Babel.

Decorators provide a way to **annotate and modify classes, methods, or properties** at design time. They are essentially functions applied to classes or their members to extend or customize behavior.

---

### **How Decorators Work**

A decorator is a function that is called with specific metadata about the class or class member it decorates. It can modify or replace the target it decorates.

#### **Basic Syntax**

```javascript
@decorator
class MyClass {}
```

Decorators are applied using the `@` symbol, followed by the decorator function name. They can be used on:

1. **Class**: Modify or annotate the class.
2. **Class Methods**: Extend or override the method's behavior.
3. **Class Properties**: Manipulate how properties behave.
4. **Accessors (Getters/Setters)**: Customize behavior.

---

### **Decorator Usage Examples**

#### **1. Class Decorator**

A class decorator takes the target class as its argument and can modify it or add new functionality.

```javascript
function logClass(target) {
  console.log(`Class "${target.name}" is being decorated.`);
}

@logClass
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

**Output:**

```
Class "Person" is being decorated.
```

---

#### **2. Method Decorator**

A method decorator can be used to log method calls, add validation, or modify behavior.

```javascript
function logMethod(target, propertyKey, descriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args) {
    console.log(`Method ${propertyKey} called with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Calculator {
  @logMethod
  add(a, b) {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3)); // Logs: Method add called with arguments: 2,3
// Output: 5
```

---

#### **3. Property Decorator**

Property decorators can modify how a property is defined but cannot directly access its value. They receive metadata about the property.

```javascript
function readonly(target, propertyKey) {
  Object.defineProperty(target, propertyKey, {
    writable: false,
    configurable: false,
  });
}

class Person {
  @readonly
  name = "John Doe";
}

const person = new Person();
person.name = "Jane"; // Error in strict mode: Cannot assign to read-only property
```

---

#### **4. Accessor Decorator**

Decorators can be applied to getters and setters to add extra behavior.

```javascript
function logAccessor(target, propertyKey, descriptor) {
  const originalGetter = descriptor.get;

  descriptor.get = function () {
    console.log(`Getter for ${propertyKey} called`);
    return originalGetter.call(this);
  };

  return descriptor;
}

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  @logAccessor
  get radius() {
    return this._radius;
  }
}

const circle = new Circle(5);
console.log(circle.radius); // Logs: Getter for radius called
// Output: 5
```

---

### **Decorator Arguments**

Decorators can accept arguments to make them more dynamic by wrapping the decorator function in another function.

```javascript
function logWithPrefix(prefix) {
  return function (target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
      console.log(`${prefix}: Method ${propertyKey} called`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

class Logger {
  @logWithPrefix("INFO")
  logMessage(message) {
    console.log(message);
  }
}

const logger = new Logger();
logger.logMessage("Hello, World!"); // Logs: INFO: Method logMessage called
// Output: Hello, World!
```

---

### **Order of Execution**

Multiple decorators are applied in reverse order of declaration. For example:

```javascript
function decoratorA(target) {
  console.log("Decorator A");
}

function decoratorB(target) {
  console.log("Decorator B");
}

@decoratorA
@decoratorB
class MyClass {}
```

**Output:**

```
Decorator B
Decorator A
```

---

### **Advantages of Decorators**

1. **Code Reusability**: Extract and reuse common logic across classes or members.
2. **Separation of Concerns**: Keeps logic separate from the core implementation.
3. **Readable Syntax**: Cleaner than manually modifying prototypes.

---

### **Limitations**

1. **Experimental**: Native support is limited and may vary between environments.
2. **Not Fully Standardized**: Although at Stage 3, decorators are still evolving.
3. **Performance Overhead**: Can add slight overhead due to the extra layer of abstraction.

---

### **Environment Setup**

To use decorators in JavaScript today, you might need a transpiler like **Babel** or **TypeScript** with the appropriate configuration:

#### Babel:

Install the plugin:

```bash
npm install @babel/plugin-proposal-decorators --save-dev
```

Add the plugin to your Babel configuration:

```json
{
  "plugins": [["@babel/plugin-proposal-decorators", { "version": "2023-05" }]]
}
```

#### TypeScript:

Enable the feature in your `tsconfig.json`:

```json
{
  "experimentalDecorators": true
}
```

---

### 31. **How do you implement a singleton class in JavaScript?**

A **singleton class** in JavaScript is a design pattern that ensures a class has only **one instance** throughout the application's lifecycle and provides a global access point to that instance.

---

### **Implementation of a Singleton Class in JavaScript**

#### **1. Using a Static Property**

The most straightforward way to implement a singleton is by using a static property to store the single instance.

```javascript
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    // Initialize properties
    this.data = "I am the only instance!";
    Singleton.instance = this;

    return this;
  }

  getData() {
    return this.data;
  }

  setData(newData) {
    this.data = newData;
  }
}

// Create instances
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
console.log(instance1.getData()); // "I am the only instance!"

instance2.setData("Modified instance!");
console.log(instance1.getData()); // "Modified instance!" (same instance)
```

---

#### **2. Using an Immediately Invoked Function Expression (IIFE)**

You can wrap the class in an IIFE to encapsulate the singleton instance.

```javascript
const Singleton = (function () {
  let instance;

  class Singleton {
    constructor() {
      if (instance) {
        return instance;
      }

      this.data = "I am the only instance!";
      instance = this;

      return this;
    }

    getData() {
      return this.data;
    }

    setData(newData) {
      this.data = newData;
    }
  }

  return Singleton;
})();

// Create instances
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
console.log(instance1.getData()); // "I am the only instance!"
```

---

#### **3. Using a Module (Closure-based Singleton)**

Modules are naturally suited for singletons since they create a private scope.

```javascript
const Singleton = (() => {
  let instance;

  return {
    getInstance: () => {
      if (!instance) {
        instance = {
          data: "I am the only instance!",
          getData() {
            return this.data;
          },
          setData(newData) {
            this.data = newData;
          },
        };
      }
      return instance;
    },
  };
})();

// Access the instance
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true
console.log(instance1.getData()); // "I am the only instance!"

instance2.setData("Updated via second reference");
console.log(instance1.getData()); // "Updated via second reference"
```

---

### **4. Using ES6 Modules**

ES6 modules are inherently singletons. When you `import` a module, it is evaluated only once, and the same instance is shared across imports.

#### **singleton.js**

```javascript
class Singleton {
  constructor() {
    this.data = "I am the only instance!";
  }

  getData() {
    return this.data;
  }

  setData(newData) {
    this.data = newData;
  }
}

const instance = new Singleton();
export default instance;
```

#### **main.js**

```javascript
import instance1 from "./singleton.js";
import instance2 from "./singleton.js";

console.log(instance1 === instance2); // true
console.log(instance1.getData()); // "I am the only instance!"

instance2.setData("Changed data");
console.log(instance1.getData()); // "Changed data"
```

---

### **When to Use Singleton Pattern**

1. **Global Configuration**: Managing application-wide settings or configurations.
2. **Shared Resources**: Managing connections like database or API clients.
3. **State Management**: Storing state that should persist across different parts of the application.

---

### **Advantages of Singleton**

1. Ensures there’s only one instance of the class.
2. Provides a global access point to the instance.
3. Can reduce memory usage by sharing the same instance.

---

### **Disadvantages of Singleton**

1. Can introduce **global state**, which might make testing harder.
2. Can violate the **Single Responsibility Principle (SRP)** by combining instance management with functionality.
3. Can make the codebase harder to refactor or scale if not used cautiously.

---

### **Key Notes**

- Ensure that your singleton implementation is thread-safe if used in a multi-threaded environment.
- Always weigh the trade-offs of using singletons in large-scale applications.

### 32. **What is the role of `Object.getPrototypeOf()` in debugging class inheritance issues?**

`Object.getPrototypeOf()` is a JavaScript method used to retrieve the **prototype** of a given object. It plays a vital role in debugging and understanding **class inheritance issues**, as it allows developers to inspect the prototype chain and verify how objects inherit properties and methods.

---

### **Role of `Object.getPrototypeOf()` in Debugging Inheritance**

1. **Inspecting the Prototype Chain**

   - Inheritance in JavaScript relies on the prototype chain. `Object.getPrototypeOf()` lets you examine the prototype of an object to understand from where it is inheriting its properties and methods.
   - Misconfigured or broken prototypes can lead to unexpected behavior, which can be debugged using this method.

2. **Verifying Constructor Relationships**

   - For classes, the prototype should be linked correctly to their constructors. By using `Object.getPrototypeOf()`, you can ensure that the inheritance is set up correctly.

3. **Debugging Prototype Overrides**

   - Accidental or intentional overwrites of prototypes may cause issues. `Object.getPrototypeOf()` helps confirm if the prototype is what you expect it to be.

4. **Resolving `instanceof` Issues**
   - The `instanceof` operator checks if an object is in a constructor's prototype chain. If `instanceof` gives unexpected results, `Object.getPrototypeOf()` helps trace the chain to diagnose where the issue occurs.

---

### **Example: Debugging Class Inheritance Issues**

#### **Code Example**

```javascript
class Animal {
  speak() {
    return "I am an animal.";
  }
}

class Dog extends Animal {
  bark() {
    return "Woof!";
  }
}

// Creating an instance of Dog
const myDog = new Dog();

// Inspecting prototypes
console.log(Object.getPrototypeOf(myDog) === Dog.prototype); // true
console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype); // true
console.log(Object.getPrototypeOf(Animal.prototype) === Object.prototype); // true

// Debugging a broken prototype chain
Object.setPrototypeOf(Dog.prototype, null); // Break the inheritance

console.log(Object.getPrototypeOf(myDog) === Dog.prototype); // true
console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype); // false
```

#### **Explanation**

1. Initially, the prototype chain is correctly set up: `myDog -> Dog.prototype -> Animal.prototype -> Object.prototype`.
2. When `Object.setPrototypeOf(Dog.prototype, null)` is called, the chain breaks, causing inheritance issues.
3. By inspecting the prototype using `Object.getPrototypeOf()`, we identify where the break occurs and can fix it.

---

### **Use Cases**

#### **1. Diagnosing Missing Methods**

```javascript
class Vehicle {
  drive() {
    console.log("Driving...");
  }
}

class Car extends Vehicle {}

const myCar = new Car();
console.log(myCar.drive()); // Works

Object.setPrototypeOf(Car.prototype, null); // Breaks the inheritance
console.log(myCar.drive()); // Error: myCar.drive is not a function

// Debugging
console.log(Object.getPrototypeOf(myCar)); // Logs Car.prototype
console.log(Object.getPrototypeOf(Car.prototype)); // Logs null (broken chain)
```

Here, `Object.getPrototypeOf()` identifies that `Car.prototype` no longer inherits from `Vehicle.prototype`.

---

#### **2. Verifying Class Relationships**

```javascript
class Parent {}
class Child extends Parent {}

const childInstance = new Child();

console.log(Object.getPrototypeOf(childInstance) === Child.prototype); // true
console.log(Object.getPrototypeOf(Child.prototype) === Parent.prototype); // true
console.log(Object.getPrototypeOf(Parent.prototype) === Object.prototype); // true
```

If these checks fail, it indicates a problem with inheritance setup.

---

### **Comparison to `.__proto__`**

- `Object.getPrototypeOf(obj)` is the **standard, reliable way** to access an object's prototype.
- `obj.__proto__` provides similar functionality but is considered **deprecated** and not recommended for use.

---

### **Best Practices**

- Always validate inheritance chains using `Object.getPrototypeOf()` when debugging unexpected behavior in classes or objects.
- Use `Object.setPrototypeOf()` cautiously, as it can cause performance issues and break inheritance unintentionally.

---
