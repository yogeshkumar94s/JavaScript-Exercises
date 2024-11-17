// control Flow
// Control flow in JavaScript refers to the order in which statements are executed in a script. JavaScript is a single-threaded, synchronous language, which means that code is executed sequentially, one statement at a time. However, control flow is often influenced by conditional statements and loops.

// Conditional Statements (if, else if, else):

// Conditional statements allow you to make decisions in your code based on certain conditions. The syntax for an if statement is as follows:

if (condition) {
  // code to be executed if the condition is true
} else if (anotherCondition) {
  // code to be executed if the first condition is false and this condition is true
} else {
  // code to be executed if none of the previous conditions are true
}

// Example:
let num = 10;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// Switch Statement:

// The switch statement is another way to handle multiple conditions more cleanly.

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  default:
    console.log("It's a regular day");
}

// Loops (for, while, do-while):

// Loops allow you to repeatedly execute a block of code as long as a specified condition is true. The most common loops in JavaScript are for, while, and do-while.

// For Loop:
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While Loop:
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Do-While Loop:
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);
