// Expression:------------

//An expression is a piece of code that produces a value. It can be as simple as a literal value or as complex as a combination of operators and operands. Expressions can be used anywhere in your code where a value is expected, such as on the right side of an assignment or as an argument to a function.

// Numeric literal
42;

// String literal
("hello");

// Boolean literal
true;

// Assignment expression, also an expression
let x = 10;

// Binary expression, evaluates to a value
x + 5;

// Function call expression
Math.sqrt(25);

// Complex arithmetic expression
2 * (3 + 4);

// Statement:--------------
//A statement, on the other hand, is a standalone unit of code that performs an action. Unlike expressions, statements do not produce values. Instead, they typically represent some kind of operation or control flow in a program.

// Variable declaration statement
let a;

// Assignment statement
a = 10;

if (a > 5) {
  // Code block executed if condition is true
} else {
  // Code block executed if condition is false
}

for (let i = 0; i < 5; i++) {
  // Code block executed in each iteration
}

function myFunction() {
  // Code block of a function declaration
}

// key Differences

// Expression: Produces a value.
// Statement: Does not produce a value.

// Expression: Can be used anywhere a value is expected (e.g., in assignments, function calls, etc.).
// Statement: Represents actions or control flow and is used to structure the program.

// Expression: Can be part of a statement.
// Statement: Can include expressions.
