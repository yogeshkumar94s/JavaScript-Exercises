// Not all programs are straight roads. We many, for example, want to create a branching road, where the program takes the proper branch based on the situation at hand. This is called contitional execution.

// Conditional execution in JavaScript involves making decisions in your code based on certain conditions. This is typically done using if, else if, and else statements.

// Basic if Statement:

// The basic if statement allows you to execute a block of code if a specified condition is true.

let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}

// In this example, the code inside the block (console.log("You are an adult.")) will only be executed if the condition age >= 18 is true.

// if and else Statements:

// You can provide an alternative block of code to execute if the condition is false using the else statement.

let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else {
  console.log("It's not too hot today.");
}

// Here, the code inside the else block will be executed if the condition temperature > 30 is false.

// if, else if, and else Statements:

// You can chain multiple conditions using else if to handle different scenarios.

let grade = 85;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("Below C");
}

// In this example, the appropriate message will be logged based on the value of the grade variable.

// Ternary Operator:

// The ternary operator (condition ? expr1 : expr2) provides a concise way to express conditional statements.

let isRaining = true;

let action = isRaining ? "Take an umbrella" : "Enjoy the weather";
console.log(action);

// This is equivalent to writing an if-else statement based on the value of isRaining.

// *-*-*-*-*-*-**-*-**-*
let theNumber = Number(prompt("Pick a number"));

if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}

//1.0 let theNumber = Number(prompt("Pick a number"));:

// It prompts the user to enter a number using the prompt function.
// The entered value is then converted to a number using Number() and stored in the variable theNumber.

//2.0 if (!Number.isNaN(theNumber)) {:
// The if statement checks if the entered value is a valid number and not NaN (Not a Number).
// Number.isNaN(theNumber) returns true if theNumber is NaN and false otherwise.
// The ! (logical NOT) operator negates the result, so the block of code inside the if statement will be executed if theNumber is a valid number.

//3.0 console.log("Your number is the square root of " + theNumber * theNumber);:

// If the condition in the if statement is true, this line of code will be executed.
// It calculates the square of the entered number (theNumber * theNumber) and logs a message to the console stating that the entered number is the square root of the calculated value.
