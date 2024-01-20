// The conditional operator, often referred to as the ternary operator, is a concise way to write an if-else statement in a single line of code. It's frequently used to make code more compact and readable. The syntax of the conditional operator is as follows:

condition ? expressionIfTrue : expressionIfFalse;

// Condition:

// The condition is an expression that evaluates to either true or false.
// ExpressionIfTrue:

// If the condition is true, the expressionIfTrue is evaluated and returned.
// ExpressionIfFalse:

// If the condition is false, the expressionIfFalse is evaluated and returned.

const age = 25;
const isAdult = age >= 18 ? "Yes" : "No";

console.log(isAdult);
// Outputs: 'Yes' (because age is 25, which is greater than or equal to 18)

// Key Points:
// The conditional operator is an expression, meaning it produces a value.
// It's a shorthand way to express simple if-else statements.
// The expressions on both sides of : (colon) are evaluated lazily, depending on the condition.
// It's commonly used for assigning values based on conditions or for concise conditional rendering in JSX/React.
