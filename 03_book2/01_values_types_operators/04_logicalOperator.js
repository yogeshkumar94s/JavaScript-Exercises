// In JavaScript, logical operators are used to perform logical operations on boolean values. There are three primary logical operators: && (AND), || (OR), and ! (NOT). Here's a brief explanation with examples:

// AND (&&) Operator:

// The && operator returns true if both operands are true, otherwise, it returns false.

let isJavaScriptFun = true;
let isLearningEasy = false;

let andResult = isJavaScriptFun && isLearningEasy; // false

console.log("AND Result:", andResult);

// In this example, andResult is false because both isJavaScriptFun and isLearningEasy must be true for the result to be true.

// OR (||) Operator:

// The || operator returns true if at least one of the operands is true, otherwise, it returns false.

let isJavaScriptFun1 = true;
let isLearningEasy1 = false;

let orResult = isJavaScriptFun || isLearningEasy; // true

console.log("OR Result:", orResult);

// Here, orResult is true because only one of isJavaScriptFun or isLearningEasy needs to be true for the result to be true.

// NOT (!) Operator:

// The ! operator negates a boolean value. It returns true if the operand is false, and vice versa.

let isLearningEasy2 = false;

let notResult = !isLearningEasy; // true

console.log("NOT Result:", notResult);

// In this case, notResult is true because it negates the false value of isLearningEasy.

// Logical operators are often used in conditional statements and decision-making processes within your JavaScript code. They allow you to create more complex conditions based on the state of different variables or expressions.
