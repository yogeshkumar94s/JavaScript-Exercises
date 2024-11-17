# Basics of variables and data types in JavaScript.

### Variables

In JavaScript, you can declare variables using `var`, `let`, and `const`.

- **`var`**: Declares a variable that can be re-assigned. It has function scope or global scope.
- **`let`**: Declares a block-scoped variable that can be re-assigned.
- **`const`**: Declares a block-scoped variable that cannot be re-assigned. The value it holds can be mutable (e.g., objects or arrays), but the reference cannot be changed.

```javascript
// Using var
var name = "John";
console.log(name); // Output: John
name = "Jane";
console.log(name); // Output: Jane

// Using let
let age = 30;
console.log(age); // Output: 30
age = 31;
console.log(age); // Output: 31

// Using const
const country = "India";
console.log(country); // Output: India
// country = "USA"; // Error: Assignment to constant variable
```

### Data Types

JavaScript has several data types, divided into primitive and non-primitive types.

#### Primitive Data Types

1. **Number**: Represents both integer and floating-point numbers.

   ```javascript
   let num = 42;
   let pi = 3.14;
   ```

2. **String**: Represents sequences of characters.

   ```javascript
   let greeting = "Hello, World!";
   ```

3. **Boolean**: Represents true or false values.

   ```javascript
   let isActive = true;
   ```

4. **Null**: Represents an intentional absence of any value.

   ```javascript
   let emptyValue = null;
   ```

5. **Undefined**: Represents a variable that has been declared but not yet assigned a value.

   ```javascript
   let notAssigned;
   console.log(notAssigned); // Output: undefined
   ```

6. **Symbol**: Represents a unique identifier.

   ```javascript
   let uniqueId = Symbol("id");
   ```

7. **BigInt**: Represents integers with arbitrary precision.
   ```javascript
   let bigNumber = BigInt(9007199254740991);
   ```

#### Non-Primitive Data Types

1. **Object**: Represents collections of key-value pairs.

   ```javascript
   let person = {
     name: "John",
     age: 30,
   };
   ```

2. **Array**: Represents ordered collections of values.
   ```javascript
   let fruits = ["Apple", "Banana", "Cherry"];
   ```

### Example Script

Here's an example script demonstrating the use of different variable declarations and data types:

```javascript
// Primitive types
let name = "Alice";
let age = 25;
let isStudent = true;
let height = null;
let weight;
let uniqueSymbol = Symbol("unique");
let largeNumber = BigInt(12345678901234567890);

console.log(name); // Output: Alice
console.log(age); // Output: 25
console.log(isStudent); // Output: true
console.log(height); // Output: null
console.log(weight); // Output: undefined
console.log(uniqueSymbol); // Output: Symbol(unique)
console.log(largeNumber); // Output: 12345678901234567890n

// Non-primitive types
let person = {
  name: "Bob",
  age: 30,
};

let colors = ["Red", "Green", "Blue"];

console.log(person); // Output: { name: 'Bob', age: 30 }
console.log(colors); // Output: [ 'Red', 'Green', 'Blue' ]

// Using const with objects
const car = {
  make: "Toyota",
  model: "Corolla",
};
car.model = "Camry"; // Allowed because the object itself is mutable
console.log(car); // Output: { make: 'Toyota', model: 'Camry' }
```

### Summary

- **Variables**: Declared using `var`, `let`, and `const`.
- **Primitive Data Types**: Number, String, Boolean, Null, Undefined, Symbol, BigInt.
- **Non-Primitive Data Types**: Object, Array.

Each data type has its own characteristics and use cases.

---

## constant declaration

basics of constant declarations in JavaScript.

### Constant Declaration (`const`)

In JavaScript, you can declare constants using the `const` keyword. A constant is a variable that, once assigned a value, cannot be reassigned to a different value. However, the contents of objects and arrays assigned to constants can be modified.

#### Characteristics of `const`

1. **Block Scope**: `const` declarations are block-scoped, meaning they are only accessible within the block in which they are declared.
2. **Immutability**: The variable identifier cannot be reassigned. However, if the variable is an object or an array, its properties or elements can still be changed.
3. **Declaration and Initialization**: `const` declarations must be initialized at the time of declaration.

#### Example Usage

```javascript
// Declaring a constant
const pi = 3.14159;
console.log(pi); // Output: 3.14159

// Attempting to reassign a constant throws an error
// pi = 3.14; // Uncaught TypeError: Assignment to constant variable

// Declaring a constant object
const person = {
  name: "Alice",
  age: 30,
};

// Modifying the properties of the object is allowed
person.age = 31;
console.log(person); // Output: { name: 'Alice', age: 31 }

// Attempting to reassign the constant object throws an error
// person = { name: "Bob", age: 25 }; // Uncaught TypeError: Assignment to constant variable

// Declaring a constant array
const colors = ["Red", "Green", "Blue"];

// Modifying the elements of the array is allowed
colors.push("Yellow");
console.log(colors); // Output: ["Red", "Green", "Blue", "Yellow"]

// Attempting to reassign the constant array throws an error
// colors = ["Purple", "Pink"]; // Uncaught TypeError: Assignment to constant variable

// Block scope example
if (true) {
  const greeting = "Hello, World!";
  console.log(greeting); // Output: Hello, World!
}
// console.log(greeting); // Uncaught ReferenceError: greeting is not defined
```

### Key Points

1. **Initialization Required**: You must initialize a constant at the time of declaration.

   ```javascript
   const a; // SyntaxError: Missing initializer in const declaration
   ```

2. **Block Scope**: Constants are block-scoped, similar to variables declared with `let`.

   ```javascript
   {
     const b = 10;
     console.log(b); // Output: 10
   }
   // console.log(b); // Uncaught ReferenceError: b is not defined
   ```

3. **Immutable Identifier**: The value assigned to a `const` cannot be changed, but objects and arrays are mutable.

   ```javascript
   const obj = { key: "value" };
   obj.key = "newValue"; // This is allowed
   // obj = { newKey: "newValue" }; // Uncaught TypeError: Assignment to constant variable
   ```

4. **Best Practices**: Use `const` for variables that should not be reassigned to a new value, which can help prevent bugs and make your code easier to understand.

### Summary

- **`const`**: Declares a block-scoped constant that cannot be reassigned.
- **Immutability**: The identifier cannot be reassigned, but the contents of objects or arrays can be modified.
- **Initialization**: Constants must be initialized at the time of declaration.
- **Block Scope**: Constants are block-scoped, similar to `let`.

---

## Data types in JavaScript

Sure! Let's go over the basic data types in JavaScript. JavaScript has several data types that can be categorized into two main groups: primitive types and non-primitive types (also known as reference types).

### Primitive Data Types

1. **Number**: Represents both integer and floating-point numbers.

   ```javascript
   let age = 25;
   let price = 19.99;
   ```

2. **String**: Represents sequences of characters, used for text.

   ```javascript
   let greeting = "Hello, World!";
   ```

3. **Boolean**: Represents logical values: `true` or `false`.

   ```javascript
   let isStudent = true;
   ```

4. **Null**: Represents the intentional absence of any object value.

   ```javascript
   let emptyValue = null;
   ```

5. **Undefined**: Represents a variable that has been declared but not assigned a value.

   ```javascript
   let notAssigned;
   console.log(notAssigned); // Output: undefined
   ```

6. **Symbol**: Represents a unique and immutable value, often used as identifiers for object properties.

   ```javascript
   let uniqueId = Symbol("id");
   ```

7. **BigInt**: Represents integers with arbitrary precision, useful for very large numbers.
   ```javascript
   let bigNumber = BigInt(9007199254740991);
   ```

### Non-Primitive Data Types

1. **Object**: Represents collections of key-value pairs. Objects can store data and functions, making them the most versatile data type.

   ```javascript
   let person = {
     name: "John",
     age: 30,
     greet: function () {
       console.log("Hello, " + this.name);
     },
   };
   ```

2. **Array**: Represents ordered collections of values, which can be of any type. Arrays are a special type of object.
   ```javascript
   let fruits = ["Apple", "Banana", "Cherry"];
   ```

### Examples and Usage

#### Numbers

```javascript
let a = 5; // Integer
let b = 3.14; // Floating-point number
let c = a + b; // Arithmetic operations
console.log(c); // Output: 8.14
```

#### Strings

```javascript
let firstName = "Alice";
let lastName = "Smith";
let fullName = firstName + " " + lastName; // String concatenation
console.log(fullName); // Output: Alice Smith
```

#### Booleans

```javascript
let isAvailable = true;
let isSoldOut = false;
console.log(isAvailable && isSoldOut); // Output: false
```

#### Null

```javascript
let data = null;
console.log(data); // Output: null
```

#### Undefined

```javascript
let variable;
console.log(variable); // Output: undefined
```

#### Symbols

```javascript
let sym1 = Symbol("identifier");
let sym2 = Symbol("identifier");
console.log(sym1 === sym2); // Output: false
```

#### BigInt

```javascript
let bigInt1 = BigInt(12345678901234567890);
let bigInt2 = BigInt("12345678901234567890");
console.log(bigInt1 === bigInt2); // Output: true
```

#### Objects

```javascript
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  displayInfo: function () {
    console.log(`${this.make} ${this.model} (${this.year})`);
  },
};
car.displayInfo(); // Output: Toyota Corolla (2021)
```

#### Arrays

```javascript
let colors = ["Red", "Green", "Blue"];
colors.push("Yellow"); // Adding an element
console.log(colors); // Output: ["Red", "Green", "Blue", "Yellow"]
```

### Summary

- **Primitive Types**: Number, String, Boolean, Null, Undefined, Symbol, BigInt.
- **Non-Primitive Types**: Object, Array.

---

## reassigning variable in JavaScript

In JavaScript, reassigning variables refers to the process of assigning a new value to an existing variable. This can be done with variables declared using the `var` and `let` keywords, but not with `const` (since `const` declares constants, which cannot be reassigned).

### Using `var`

The `var` keyword can be used to declare variables that can be reassigned. However, `var` has function scope, meaning it is scoped to the nearest function block.

```javascript
var x = 10;
console.log(x); // Output: 10

x = 20; // Reassigning the variable
console.log(x); // Output: 20
```

### Using `let`

The `let` keyword also allows variables to be reassigned, but `let` has block scope, meaning it is scoped to the nearest enclosing block (such as a function, loop, or if statement).

```javascript
let y = 30;
console.log(y); // Output: 30

y = 40; // Reassigning the variable
console.log(y); // Output: 40
```

### Using `const`

The `const` keyword is used to declare constants. A constant cannot be reassigned once it has been initialized.

```javascript
const z = 50;
console.log(z); // Output: 50

// z = 60; // Uncaught TypeError: Assignment to constant variable.
```

### Examples

#### Reassigning with `var`

```javascript
var name = "Alice";
console.log(name); // Output: Alice

name = "Bob"; // Reassigning the variable
console.log(name); // Output: Bob
```

#### Reassigning with `let`

```javascript
let age = 25;
console.log(age); // Output: 25

age = 26; // Reassigning the variable
console.log(age); // Output: 26
```

#### Block Scope with `let`

```javascript
let count = 1;

if (true) {
  let count = 2; // Different variable, scoped to this block
  console.log(count); // Output: 2
}

console.log(count); // Output: 1
```

#### Attempting to Reassign a `const`

```javascript
const pi = 3.14;
console.log(pi); // Output: 3.14

// pi = 3.14159; // Uncaught TypeError: Assignment to constant variable.
```

### Summary

- **`var`**: Variables can be reassigned. Scoped to the nearest function block.
- **`let`**: Variables can be reassigned. Scoped to the nearest enclosing block.
- **`const`**: Variables cannot be reassigned. Scoped to the nearest enclosing block.

Using `let` and `const` is generally preferred over `var` due to their block-scoping behavior, which reduces the chances of unintended variable reassignments and scope-related bugs.
