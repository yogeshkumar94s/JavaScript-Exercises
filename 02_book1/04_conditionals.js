// Truthy and Falsy Values:

// In JavaScript, every value is inherently truthy or falsy when evaluated in a boolean context. Truthy values are considered true when used in a boolean context, and falsy values are considered false. The following are considered falsy:

// false: The boolean value false.
// 0: The number zero.
// '': An empty string.
// null: Represents the absence of any object value.
// undefined: Represents the absence of a value.
// NaN: Stands for "Not-a-Number," and is a result of an invalid mathematical operation.
// Conversely, values that are not falsy are considered truthy.

// How Truthy and Falsy Values Are Useful:

//1. Conditional Statements:

// In conditional statements, such as if statements, the condition is evaluated as either truthy or falsy, determining the flow of the program.

const number = 0;

if (number) {
  console.log("Truthy"); // This block won't be executed.
} else {
  console.log("Falsy"); // This block will be executed.
}

//2. Default Values:

// Truthy and falsy values are often used in providing default values. For example, in a function that takes a parameter, you might provide a default value if the parameter is not provided or is falsy.

function greet(name) {
  name = name || "Guest"; // If name is falsy, use 'Guest' as the default.
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!

// Now, let's move on to the next topic: "Shorten Conditionals with Falsy Values."

// Shorten Conditionals with Falsy Values:

// This topic likely refers to the practice of leveraging truthy and falsy values to write more concise and readable conditional code. Instead of explicitly checking for equality or inequality, you can use the truthy or falsy nature of values to simplify your code.

// Example:

// Traditional way
let result;

if (someCondition) {
  result = "Condition is true";
} else {
  result = "Condition is false";
}

// Instead of the above, you can use a shorter version leveraging truthy and falsy values:

// Shortened with falsy values
let result1 = someCondition ? "Condition is true" : "Condition is false";

// In this example, if someCondition is truthy, the result is set to 'Condition is true'; otherwise, it's set to 'Condition is false'. This approach is concise and can make the code more readable when the logic is simple.

// It's important to use this technique judiciously, keeping in mind that readability is crucial. Shortening conditionals with falsy values can be beneficial for simple cases, but in more complex scenarios, clarity should be prioritized over brevity.

// Ternary Operator
condition ? expressionIfTrue : expressionIfFalse;

// Example 1: Assigning a Value Based on a Condition

const age = 22;

const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: 'Adult'

// In this example, the value of status is determined based on whether age is greater than or equal to 18.

// Example 2: Checking for Truthy or Falsy Values

const userRole = "admin";

const message =
  userRole === "admin"
    ? "You have admin privileges"
    : "You do not have admin privileges";
console.log(message);
// Output: 'You have admin privileges'

// This example checks the value of userRole and assigns a message accordingly.

// Example 3: Handling Default Values

const userInput = ""; // Can be any user input, including falsy values like 0 or false

const username = userInput ? userInput : "Guest";
console.log(`Hello, ${username}!`);
// Output: 'Hello, Guest!' (if userInput is falsy)

// Here, if userInput is truthy, username is set to userInput; otherwise, it defaults to 'Guest'.

// Example 4: Shortening If-Else Chains

const score = 85;

const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(`Your grade is ${grade}`);
// Output: 'Your grade is B'

// In this example, the ternary operator is used to shorten an if-else chain for grading.

// Example 5: Multiple Conditions

const temperature = 25;
const isSunny = true;

const weather =
  isSunny && temperature > 20 ? "It's a sunny day!" : "Not a sunny day.";
console.log(weather);
// Output: 'It's a sunny day!'

// ******----Maximize Efficiency with Short Circuiting.********------

// Logical Operators in JavaScript:

//1. Logical AND (&&):

// The && operator returns the first falsy operand or the last operand if all are truthy. If the first operand is falsy, the subsequent operands are not evaluated because the overall result is already determined.

// Without short-circuiting
if (condition1) {
  if (condition2) {
    // Code here
  }
}

// Short-circuited
if (condition1 && condition2) {
  // Code here
}

//2. Logical OR (||):

// The || operator returns the first truthy operand or the last operand if all are falsy. If the first operand is truthy, the subsequent operands are not evaluated because the overall result is already determined.

// Without short-circuiting
if (!condition1) {
  if (!condition2) {
    // Code here
  }
}

// Short-circuited
if (!condition1 || !condition2) {
  // Code here
}

// Maximizing Efficiency:

//1. Conditional Assignment:

// Short-circuiting is often used for conditional assignment, allowing you to provide default values or perform assignments based on conditions.

// const username = inputUsername || 'Guest';

// Here, if inputUsername is truthy, username gets its value; otherwise, it defaults to 'Guest'.

//2. Guard Clauses:

// Short-circuiting is used to create guard clauses, allowing you to exit a function early if certain conditions are met.

function processInput(input) {
  if (!input) return; // Short-circuiting as a guard clause

  // Process input here
}

//3. Conditional Execution:

// Short-circuiting can be employed for conditional execution of code blocks based on specific conditions.

condition1 && condition2 && performAction();

// Here, performAction() is executed only if both condition1 and condition2 are truthy.

// Considerations:

// Readability vs. Efficiency:

// While short-circuiting can enhance efficiency, it's essential to balance it with readability. In some cases, explicit if statements may be clearer, especially in complex conditions.

// Avoid Side Effects:

// Be cautious with short-circuiting if it involves side effects. Side effects within conditions may lead to unexpected behavior.

// *****------Apply Consistent Actions with forEach()-------******

// forEach() Method:
// The forEach() method is an array method in JavaScript that allows you to iterate over the elements of an array and execute a provided function once for each array element.

// ******Applying Consistent Actions with forEach()********

// forEach() Method:

// The forEach() method is an array method in JavaScript that allows you to iterate over the elements of an array and execute a provided function once for each array element.

// Applying Consistent Actions:

const numbers = [1, 2, 3, 4, 5];

// Using forEach to apply a consistent action
numbers.forEach(function (number) {
  console.log(number * 2);
});

// Benefits:

// Consistency: forEach() ensures that the same action is applied to each element, promoting code consistency.

// Readability: The use of forEach() can make code more readable by clearly expressing the intention of applying an action to each element.

// Example: Updating Objects in an Array

const students = [
  { name: "Alice", grade: 80 },
  { name: "Bob", grade: 90 },
  { name: "Charlie", grade: 75 },
];

// Using forEach to update grades
students.forEach(function (student) {
  student.grade += 5;
});

console.log(students);

// Here, forEach() is used to iterate over an array of student objects and increase each student's grade by 5.

// Example: Logging Array Elements

const colors = ["red", "green", "blue"];

// Using forEach to log array elements
colors.forEach(function (color, index) {
  console.log(`Element at index ${index}: ${color}`);
});

// In this example, forEach() is used to log each element along with its index in the array.

// Considerations:

// No Return Value: The forEach() method does not return a new array; it's primarily used for its side effects (modifying the existing array or performing some action for each element).

// Arrow Function: You can use arrow functions for more concise syntax:

numbers.forEach((number) => console.log(number * 2));

// ************Transform Array Data with reduce()*********

// reduce() Method:

// The reduce() method is an array method in JavaScript that is used to reduce the elements of an array to a single value. It takes a callback function and an initial accumulator value as arguments.

// Transforming Array Data:

const numbers1 = [1, 2, 3, 4, 5];

// Using reduce to transform array data (summing the numbers)
const sum = numbers1.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
}, 0);

console.log(sum); // Output: 15

// In this example, the reduce() method is used to iterate over the numbers array, adding each element to an accumulator (sum). The initial value of the accumulator is set to 0. The result is the sum of all numbers in the array.

// Benefits:
// Versatility: reduce() is a versatile method that can be used for a variety of transformations, such as summing, averaging, filtering, or mapping data.

// Single Value: It condenses array elements into a single value, making it suitable for cases where you need a cumulative result.

// Example: Calculating the Product of Array Elements

const factors = [2, 3, 4, 5];

// Using reduce to calculate the product of array elements
const product = factors.reduce(function (accumulator, currentFactor) {
  return accumulator * currentFactor;
}, 1);

console.log(product); // Output: 120

// Here, the reduce() method is employed to calculate the product of elements in the factors array.

// Example: Transforming Array of Objects

const allStudents = [
  { name: "Alice", grade: 80 },
  { name: "Bob", grade: 90 },
  { name: "Charlie", grade: 75 },
];

// Using reduce to calculate the average grade
const averageGrade =
  allStudents.reduce(function (total, student) {
    return total + student.grade;
  }, 0) / allStudents.length;

console.log(averageGrade); // Output: 81.66666666666667

// In this example, reduce() is used to calculate the average grade of students from an array of objects.

// Considerations:

// Accumulator Initialization: Choose the appropriate initial value for the accumulator based on the transformation you are performing.

// Arrow Function: You can use arrow functions for a more concise syntax:

// const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);

// Summary:
// "Transform Array Data with reduce()" emphasizes the use of the reduce() method to efficiently transform or accumulate data from an array into a single value. This method is powerful and flexible, making it a valuable tool for various array manipulation tasks.
