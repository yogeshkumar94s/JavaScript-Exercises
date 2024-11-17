// Clean Up Parameters:***************

//1. Avoid Excessive Parameters:

// Functions with too many parameters can be hard to understand and maintain.
// Consider grouping related parameters into objects or using default values for optional parameters.

// Example with excessive parameters
function calculateTotal(price, taxRate, discount, shipping) {
  // Function logic...
}

// Cleaner version with an options object
function calculateTotal(options) {
  const { price, taxRate, discount, shipping } = options;
  // Function logic...
}

//2. Use Default Parameters:

// Default parameters help make function calls more concise and improve the readability of the code.
// Without default parameters
function greet(name, greeting) {
  greeting = greeting || "Hello";
  // Function logic...
}

// With default parameters
function greet(name, greeting = "Hello") {
  // Function logic...
}

//3. Destructure Complex Parameters:

// When a function takes an object with multiple properties as a parameter, use destructuring to access individual properties.

// Without destructuring
function printDetails(user) {
  console.log(user.name);
  console.log(user.age);
  // ...
}

// With destructuring
function printDetails({ name, age }) {
  console.log(name);
  console.log(age);
  // ...
}

// Clean Up Return Statements:**********
//1. Early Returns for Readability:

// Use early returns to handle edge cases or invalid input at the beginning of a function, improving readability.

function calculateArea(radius) {
  if (radius <= 0) {
    return 0;
  }
  // Calculate area...
}

//2. Consistent Return Types:

// Aim for consistent return types throughout a function to make it easier for developers to understand the expected result.
function fetchData(url) {
  if (url.startsWith("http")) {
    return fetch(url).then((response) => response.json());
  } else {
    return Promise.reject(new Error("Invalid URL"));
  }
}

//3. Named Returns for Clarity:

// Use named returns (returning an object) to provide clarity on the different values being returned.
function calculateValues(x, y) {
  const sum = x + y;
  const difference = x - y;
  return { sum, difference };
}

// Create Default Parameters:
// Basic Syntax:
function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // Function logic
}

// Example 1: Simple Default Values
function greet(name, greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

greet("Alice"); // Output: 'Hello, Alice!'
greet("Bob", "Greetings"); // Output: 'Greetings, Bob!'

// In this example, the greeting parameter has a default value of 'Hello'. If the caller doesn't provide a specific greeting, the default value is used.

// Example 2: Complex Default Values
function createPerson(name, age = getDefaultAge()) {
  console.log(`Creating person ${name} with age ${age}`);
}

function getDefaultAge() {
  return 25;
}

createPerson("Alice"); // Output: 'Creating person Alice with age 25'
createPerson("Bob", 30); // Output: 'Creating person Bob with age 30'

// Here, the age parameter has a default value set to the result of the getDefaultAge() function. If the caller doesn't provide an age, the default value is the result of the function call.

// Benefits of Default Parameters:---------------

//1. Concise Function Calls:

// Default parameters reduce the need for repetitive or unnecessary arguments during function calls.

//2. Fallback Values:

// They provide a way to set fallback or default values for parameters, ensuring that the function can handle missing or undefined values.

//3. Readability:

// Default parameters improve the readability of function declarations by clearly indicating the expected values.

// Important Considerations:---------------

//1. Position Matters:

// Default parameters should be placed at the end of the parameter list to avoid ambiguity.
// Valid
function example(a, b, c = 0) {
  /* ... */
}

// Invalid (SyntaxError)
function example(a = 1, b, c) {
  /* ... */
}

//2. Scope of Default Values:

// Default values are evaluated at the time the function is called, not when the function is defined. This means you can use variables or functions as default values.
let defaultName = "Guest";

function greet(name = defaultName) {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: 'Hello, Guest!'

// By creating default parameters, you make your functions more flexible and resilient to different usage scenarios, providing default values when needed without requiring the caller to explicitly pass every parameter.

// Access Object Properties with Destructuring*****************/////////////

// Destructuring in JavaScript is a powerful feature that allows you to extract values from objects and arrays in a concise and readable way. Let's explore some real-world examples of how to access object properties using destructuring:

// Example 1: Function Parameters
// Without destructuring
function printPersonDetails(person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

// With destructuring
function printPersonDetails({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}

const person = { firstName: "John", lastName: "Doe", age: 30 };
printPersonDetails(person); // Output: 'John Doe'

// Destructuring is used in the function parameters to directly extract firstName and lastName from the person object.

// Example 2: Renaming Variables
const user = { name: "Alice", email: "alice@example.com" };

// Without destructuring
const username = user.name;
const userEmail = user.email;

// With destructuring and variable renaming
const { name: username1, email: userEmail1 } = user;

console.log(username1); // Output: 'Alice'
console.log(userEmail1); // Output: 'alice@example.com'

// Destructuring allows you to rename variables during extraction, providing a clearer assignment.

// Example 3: Nested Objects
const student = {
  name: "Bob",
  details: {
    age: 20,
    grades: {
      math: 90,
      science: 85,
    },
  },
};

// Without destructuring
const studentName = student.name;
const mathGrade = student.details.grades.math;

// With destructuring
const {
  name: studentName1,
  details: {
    grades: { math: mathGrade1 },
  },
} = student;

console.log(studentName); // Output: 'Bob'
console.log(mathGrade); // Output: 90

// Destructuring simplifies the extraction of values from nested objects.

// Example 4: Providing Default Values
// const user = { name: 'Charlie' };

// // Without destructuring
// const username = user.name || 'Guest';

// // With destructuring and default value
// const { name: username = 'Guest' } = user;

// console.log(username); // Output: 'Charlie'

// Destructuring allows you to provide default values for properties that may be undefined.

// Example 5: Extracting Properties in a Loop
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// Without destructuring
for (const user of users) {
  console.log(user.name);
}

// With destructuring
for (const { name } of users) {
  console.log(name);
}

// Destructuring in a loop simplifies the extraction of specific properties from objects within an array.

// Simplify Key-Value Assignment************----------------

// Example 1: Object Properties to Variables
// const person = { firstName: 'John', lastName: 'Doe', age: 30 };

// // Without destructuring
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

// // With destructuring
// const { firstName, lastName, age } = person;

// console.log(firstName, lastName, age); // Output: 'John Doe 30'

// Destructuring allows you to assign object properties to variables with the same names in a single line.

// Example 2: Default Values
// const user = { name: 'Alice' };

// // Without destructuring
// const name = user.name || 'Guest';

// // With destructuring and default value
// const { name: userName = 'Guest' } = user;

// console.log(userName); // Output: 'Alice'

// Destructuring with default values simplifies handling undefined properties by providing a default value.

// Example 3: Swapping Values
let a = 5;
let b = 10;

// Without destructuring
const temp = a;
a = b;
b = temp;

// With destructuring
[a, b] = [b, a];

console.log(a, b); // Output: '10 5'

// Destructuring makes it concise to swap values between variables without using a temporary variable.

// Example 4: Function Parameters
function printUserDetails({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const user1 = { name: "Bob", age: 25 };

// Passing the object directly
printUserDetails(user1);

// Destructuring in the function call
printUserDetails({ name: "Charlie", age: 30 });

// Destructuring in function parameters simplifies passing objects to functions by extracting values directly.

// Example 5: Extracting Specific Properties
const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
};

// Without destructuring
const title = book.title;
const author = book.author;

// // With destructuring for specific properties
// const { title, author } = book;

console.log(title, author); // Output: 'JavaScript: The Good Parts Douglas Crockford'

// Destructuring allows you to extract only the properties you need from an object.

// Pass a Variable Number of Arguments with the Rest Operator**********-----------------------------------

// Passing a variable number of arguments to a function can be achieved using the Rest Operator (...). The Rest Operator allows a function to accept an indefinite number of arguments as an array. Let's explore some examples:

// Example 1: Summing Numbers
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(10, 20, 30)); // Output: 60

// The Rest Operator ...numbers collects all the arguments into an array called numbers, allowing the function to handle a variable number of arguments.

// Example 2: Concatenating Strings
function concatenate(separator, ...strings) {
  return strings.join(separator);
}

console.log(concatenate("-", "apple", "orange", "banana")); // Output: 'apple-orange-banana'
console.log(concatenate(" ", "Hello", "World!")); // Output: 'Hello World!'

// Here, the Rest Operator gathers all the strings after the first argument (separator) into an array called strings.

// Example 3: Logging Messages
function logMessages(level, ...messages) {
  console.log(`[${level}] ${messages.join(" ")}`);
}

logMessages("INFO", "Application", "started."); // Output: '[INFO] Application started.'
logMessages("ERROR", "Unexpected", "error", "occurred."); // Output: '[ERROR] Unexpected error occurred.'

// The Rest Operator allows the function to accept a variable number of messages, which are then joined together for logging.

// Example 4: Dynamic Average Calculation
function calculateAverage(...numbers) {
  const total = numbers.reduce((sum, number) => sum + number, 0);
  return total / numbers.length;
}

console.log(calculateAverage(10, 20, 30)); // Output: 20
console.log(calculateAverage(1, 2, 3, 4, 5)); // Output: 3

// The Rest Operator is used to gather any number of arguments, making it easy to calculate the average.

// Example 5: Combining Rest Parameters with Regular Parameters
function printDetails(firstName, lastName, ...otherDetails) {
  console.log(`Name: ${firstName} ${lastName}`);
  console.log("Other Details:", otherDetails);
}

printDetails("John", "Doe", "Age: 30", "Country: USA", "Occupation: Developer");
// Output:
// 'Name: John Doe'
// 'Other Details: [ 'Age: 30', 'Country: USA', 'Occupation: Developer' ]'

// The Rest Operator can be combined with regular parameters, and it collects the remaining arguments into an array.
