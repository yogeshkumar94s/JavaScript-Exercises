// Write flexible Functions and function for  Testability.*-**-*-*-**-**
// 1. Use Parameters Effectively:

// Default Parameters: Provide default values for parameters to make your functions more flexible.
function greet(name = "Guest", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

greet(); // Output: 'Hello, Guest!'
greet("Alice", "Hi"); // Output: 'Hi, Alice!'

// Rest Parameters: Use the Rest Operator (...) to handle a variable number of arguments.
function calculateSum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(calculateSum(1, 2, 3, 4)); // Output: 10

// 2. Separation of Concerns:
// Break down your functions into smaller, focused functions. Each function should have a clear and specific responsibility.
function calculateTotalPrice(basePrice, taxRate, discount) {
  const totalBeforeDiscount = basePrice + basePrice * taxRate;
  return applyDiscount(totalBeforeDiscount, discount);
}

function applyDiscount(total, discount) {
  return total - total * (discount / 100);
}

// 3. Avoid Global State:
// Minimize reliance on global variables. Pass dependencies explicitly as parameters to promote encapsulation and easier testing.
// Avoid
let globalCounter = 0;

function incrementCounter() {
  globalCounter++;
}

// Prefer
function createCounter() {
  let localCounter = 0;

  return function incrementCounter() {
    localCounter++;
  };
}

const counter = createCounter();
counter(); // localCounter is now 1

// 4. Return Values:
// Ensure your functions return values instead of modifying global state whenever possible. This promotes immutability and testability.
// Avoid
let total = 0;

function addToTotal(value) {
  total += value;
}

// Prefer
function calculateTotal(values) {
  return values.reduce((acc, val) => acc + val, 0);
}

// 5. Dependency Injection:
// Inject dependencies into functions rather than relying on global state. This makes it easier to substitute dependencies during testing.
// Avoid
function fetchData() {
  return fetch("https://api.example.com/data");
}

// Prefer
function fetchData(fetchFunction) {
  return fetchFunction("https://api.example.com/data");
}

// 6. Functional Composition:
// Compose functions together to create more complex behavior. This promotes reusability and makes each function easier to test in isolation.
function square(x) {
  return x * x;
}

function double(x) {
  return x * 2;
}

const squareAndDouble = compose(double, square);
console.log(squareAndDouble(3)); // Output: 18

// 7. Mocking and Testing:
// Write functions with testing in mind. Ensure that your functions are easy to test by minimizing side effects and isolating logic.
function calculateTotalWithTaxAndDiscount(basePrice, taxRate, discount) {
  const totalBeforeDiscount = basePrice + basePrice * taxRate;
  return applyDiscount(totalBeforeDiscount, discount);
}

// Mocking in tests
const mockApplyDiscount = jest.fn(
  (total, discount) => total - total * (discount / 100)
);

// Test
test("calculateTotalWithTaxAndDiscount applies discount correctly", () => {
  const result = calculateTotalWithTaxAndDiscount(
    100,
    0.1,
    20,
    mockApplyDiscount
  );
  expect(mockApplyDiscount).toHaveBeenCalledWith(110, 20);
  expect(result).toEqual(90);
});

// Reduce Complexity with Arrow Functions*-*-*-*-*-*-*-*-***-*-*-

// 1. Shorter Syntax:
// Traditional Function:
function add(x, y) {
  return x + y;
}

// Arrow Function:
const add = (x, y) => x + y;

// 2. Implicit Return:
// Traditional Function:
function multiply(x, y) {
  return x * y;
}

// Arrow Function:
const multiply = (x, y) => x * y;

// With arrow functions, if there's only one statement in the function body, it's automatically treated as the return statement. This implicit return can further reduce the amount of boilerplate code.

// 3. No Binding of this:
// Arrow functions do not bind their own this value. They inherit the this value from the enclosing scope. This behavior can reduce complexity by avoiding the need for explicit binding or workarounds often required with traditional functions.

// Traditional Function:
function Person(name) {
  this.name = name;
  this.sayHello = function () {
    setTimeout(function () {
      console.log("Hello, " + this.name);
    }, 1000);
  };
}

const person = new Person("Alice");
person.sayHello(); // Outputs: 'Hello, undefined' (due to `this` binding issue)

// Arrow Function:
function Person(name) {
  this.name = name;
  this.sayHello = function () {
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 1000);
  };
}

// const person = new Person("Alice");
// person.sayHello(); // Outputs: 'Hello, Alice'

// The arrow function in this example preserves the this value from the Person function, preventing the common this binding issue.

// 4. Ease of Inline Usage:

// Arrow functions are well-suited for inline usage, such as passing functions as arguments to higher-order functions like map, filter, and reduce. Their concise syntax makes the code more readable in such scenarios.

// const numbers = [1, 2, 3, 4];
// // Traditional function
// const squared = numbers.map(function(num) {
//     return num * num;
// });
// // Arrow function
// const squared = numbers.map(num => num * num);

// 5. Clarity in Callbacks:

// Arrow functions can improve the readability of callbacks, especially in scenarios where this needs to be captured from the outer context.

// Traditional Function:
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  console.log("Button clicked!");
  // `this` is bound to the button element
});

// Arrow Function:

const button1 = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
  // `this` is inherited from the outer scope
});

// In the arrow function example, there's no need for additional work to preserve the value of this.

// Conclusion:

// Arrow functions can simplify your code by providing a more concise syntax, implicit returns, and avoiding binding complexities related to this. However, it's important to use them judiciously and be aware of their behavior, especially when dealing with complex or asynchronous scenarios.

// Some more Examples*-*-*-**-*-**-****-***-*-**-*-*-***-*-*-*
// 1. Array Manipulation:
// Using map to square each element in an array:

// Traditional function
const squared = [1, 2, 3].map(function (num) {
  return num * num;
});

// Arrow function
const squared1 = [1, 2, 3].map((num) => num * num);

// 2. Filtering Elements:
// Filtering even numbers from an array:
// Traditional function
const evens = [1, 2, 3, 4].filter(function (num) {
  return num % 2 === 0;
});

// Arrow function
const evens1 = [1, 2, 3, 4].filter((num) => num % 2 === 0);

// 3. Object Mapping:
// Transforming an array of objects:

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

// Traditional function
const names = people.map(function (person) {
  return person.name;
});

// Arrow function
const names1 = people.map((person) => person.name);

// 4. Asynchronous Code:
// Using arrow functions with Promises:

// Traditional function
const fetchData = function () {
  return new Promise(function (resolve, reject) {
    // Async logic...
  });
};

// Arrow function
const fetchData = () =>
  new Promise((resolve, reject) => {
    // Async logic...
  });

// 5. Event Handling:
// Handling events in the browser:
const button2 = document.getElementById("myButton");

// Traditional function
button.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// 6. Higher-Order Functions:
// Using arrow functions with reduce:
const numbers = [1, 2, 3, 4];

// Traditional function
const sum = numbers.reduce(function (acc, num) {
  return acc + num;
}, 0);

// Arrow function
const sum1 = numbers.reduce((acc, num) => acc + num, 0);

// 7. React Components:
// Arrow functions are commonly used for concise function components in React:

// Traditional function component
function MyComponent(props) {
  return <div>{props.message}</div>;
}

// Arrow function component
const MyComponent = (props) => <div>{props.message}</div>;

// 8. Immediately Invoked Function Expressions (IIFE):
// Creating a simple IIFE:

// Traditional function
(function () {
  console.log("IIFE using traditional function");
})();

// Arrow function
(() => {
  console.log("IIFE using arrow function");
})();

// These examples showcase situations where arrow functions can lead to more readable and concise code. However, it's essential to be mindful of their behavior, especially in cases involving this binding and when dealing with complex scenarios where traditional functions might be more appropriate.

// Maintain Single Responsibility Parameters with Partially Applied Functions*-*-*-*-**-*-*-*-**-*-*-*-*

// Single Responsibility Parameters:

// Maintaining single responsibility parameters implies that a function should ideally have a clear and singular purpose. It should take the necessary input parameters to perform its task without being burdened with excessive responsibilities.

// Example of a function with single responsibility parameters
function calculateTotalPrice(basePrice, taxRate, discount) {
  const totalBeforeDiscount = basePrice + basePrice * taxRate;
  return applyDiscount(totalBeforeDiscount, discount);
}

function applyDiscount(total, discount) {
  return total - total * (discount / 100);
}

// In this example, calculateTotalPrice focuses on calculating the total price based on the provided parameters, and applyDiscount handles the discount logic.

// Partially Applied Functions:

// Partially applied functions involve creating a new function by fixing some of the parameters of an existing function. This can lead to more flexible and reusable code.

// Example of a partially applied function
function multiply(x, y) {
  return x * y;
}
// Partially applying the multiply function
const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// Here, multiply.bind(null, 2) creates a new function double where the first parameter is fixed at 2. This allows for the creation of specialized functions with specific parameters pre-set.

// Combining Partial Application with Single Responsibility Parameters:*-*-*-**-*-**-**-*-*-

// Let's combine these concepts to create a flexible and modular function.

// Example: Partially applied function for calculating discounted total
function calculateDiscountedTotal(basePrice, taxRate) {
  return function (discount) {
    const totalBeforeDiscount = basePrice + basePrice * taxRate;
    return applyDiscount(totalBeforeDiscount, discount);
  };
}

function applyDiscount(total, discount) {
  return total - total * (discount / 100);
}

// Usage
const calculateTotalWithTax = calculateDiscountedTotal(100, 0.1);
const finalTotal = calculateTotalWithTax(20); // Apply a 20% discount
console.log(finalTotal); // Output: 90

// In this example, calculateDiscountedTotal is a partially applied function that takes basePrice and taxRate as initial parameters and returns a new function. This returned function, when called with a discount, calculates the final total. This approach keeps the parameters focused and allows for greater flexibility in applying discounts to different base prices and tax rates.

// By combining partially applied functions with single responsibility parameters, you create modular and reusable code that remains flexible to changes in requirements. This approach aligns with the principles of functional programming and helps in writing maintainable and understandable code.

// *-*-**-*-*-*-*-*-*Combine Currying and Array Methods for Partial Application*-*-***-*-*-**-*-*-*-*-*-*-

// Currying and array methods can be combined to achieve powerful partial application and create more flexible and reusable functions. Let's explore how you can use currying in combination with array methods like map and reduce for partial application:

// Currying:

// Currying is a technique where a function is transformed to take multiple arguments into a sequence of functions, each taking a single argument. It allows for partial application by creating new functions with some arguments pre-set.

// Currying function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

// Example function
function add(x, y, z) {
  return x + y + z;
}

// Using currying
const curriedAdd = curry(add);
const partiallyApplied = curriedAdd(2)(3); // Returns a new function waiting for the final argument
const result = partiallyApplied(5); // Output: 10

// Combining Currying and Array Methods:*-*-***-*-

// Now, let's see how we can combine currying with array methods for partial application:
// Currying function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

// Example function
function calculateTotal(basePrice, taxRate, discount) {
  const totalBeforeDiscount = basePrice + basePrice * taxRate;
  return totalBeforeDiscount - totalBeforeDiscount * (discount / 100);
}

// Currying the function
const curriedCalculateTotal = curry(calculateTotal);

// Using array methods for partial application
const prices = [100, 0.1]; // basePrice and taxRate
const discounts = [10, 20, 30]; // Different discount rates

const calculateTotals = discounts.map((discount) =>
  curriedCalculateTotal(...prices, discount)
);

console.log(calculateTotals); // Outputs an array of functions waiting for the final argument

// In this example, curry is used to create a curried version of the calculateTotal function. The array method map is then employed to create an array of partially applied functions, each waiting for the final discount argument. This results in an array of functions representing different total calculation scenarios.

// This combination of currying and array methods allows you to create reusable and versatile functions that can be easily adapted to different use cases by providing specific sets of arguments.

// *-*-**-**-****-*-*-*-*-*-Prevent Context Confusion with Arrow Functions*-*-*-*-*-*-**-*-*-*-*-*

// Arrow functions in JavaScript provide a concise and convenient syntax, but one of their notable features is that they don't bind their own this value. Instead, they inherit this from the enclosing scope. This behavior can help prevent context confusion, especially in situations where traditional functions might exhibit unexpected behavior. Let's explore how arrow functions can be used to avoid context-related issues.

// 1. Traditional Function vs. Arrow Function:

// Consider a scenario where you want to use a function as an event handler. Traditional functions can have context-related issues:

// Traditional function with context issues
function handleClick() {
  console.log(this); // `this` might not refer to what you expect
}

const button3 = document.getElementById("myButton");
button3.addEventListener("click", handleClick);

// In this case, the context (this) within handleClick might not be what you expect, especially if it's used as an event handler.

// Now, let's rewrite this using an arrow function:

// Arrow function with inherited context
const handleClick = () => {
  console.log(this); // `this` inherits from the surrounding scope
};

const button4 = document.getElementById("myButton");
button4.addEventListener("click", handleClick);

// With an arrow function, this is inherited from the surrounding scope, and you avoid unexpected context issues.

// 2. Avoiding Constructor Context Confusion:

// In traditional functions, you might encounter context-related problems when using them as constructors:

// Traditional function as a constructor

// function Person(name) {
//     this.name = name;
// }

// const person = new Person('Alice');
// console.log(person.name); // Output: 'Alice'

// const { name } = person;
// console.log(name); // Output: 'Alice'

// // However, this might lead to context confusion in certain scenarios
// const getName = person.getName;
// console.log(getName()); // Throws an error (this is undefined)

// Now, using an arrow function:**-*-*-*-*-

// Arrow function as a constructor
// const Person = name => {
//     return {
//         name,
//         getName: () => this.name // `this` inherits from the surrounding scope
//     };
// };

// const person = Person('Bob');
// console.log(person.name); // Output: 'Bob'

// const { name } = person;
// console.log(name); // Output: 'Bob'

// // No context confusion with arrow function
// const getName = person.getName;
// console.log(getName()); // Output: 'Bob'

// The arrow function in this example ensures that there is no context confusion when accessing this.name within getName, even when it's used outside the original context.

// 3. React Component Methods:

// In React components, class methods can sometimes exhibit context issues. Arrow functions are often used to avoid this:

class MyComponent extends React.Component {
  handleClick() {
    // `this` in handleClick might not refer to the component instance
  }

  // Arrow function avoids context issues
  handleArrowClick = () => {
    // `this` is correctly bound to the component instance
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

// By using an arrow function for the handleArrowClick method, you ensure that this is correctly bound to the component instance, avoiding potential context confusion.

// Conclusion:
// Arrow functions, by inheriting this from the surrounding scope, help prevent context confusion and simplify the handling of context-related issues in various scenarios. They are particularly useful in scenarios like event handlers, constructor functions, and React component methods where unexpected context behavior might lead to bugs and errors.
