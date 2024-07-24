# loops in JavaScript

## for loop

The `for` loop in JavaScript is a control flow statement that allows code to be executed repeatedly based on a given boolean condition. It consists of three main parts: the initialization, the condition, and the final expression. Here's the basic syntax:

```javascript
for (initialization; condition; finalExpression) {
  // code to be executed
}
```

### Components

1. **Initialization**: Executed once before the loop starts. Used to initialize the loop counter variable.
2. **Condition**: Checked before each iteration. If it evaluates to `true`, the loop continues; if `false`, the loop stops.
3. **Final Expression**: Executed after each iteration. Usually used to update the loop counter.

### Example

Here's a simple example of a `for` loop that prints numbers from 1 to 5:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

- **Initialization**: `let i = 1` (initializes `i` to 1).
- **Condition**: `i <= 5` (the loop runs as long as `i` is less than or equal to 5).
- **Final Expression**: `i++` (increments `i` by 1 after each iteration).

### Detailed Example

Here’s another example that sums the numbers from 1 to 10:

```javascript
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("The sum of numbers from 1 to 10 is:", sum);
```

### Explanation

- **Initialization**: `let i = 1` (initializes `i` to 1).
- **Condition**: `i <= 10` (the loop runs as long as `i` is less than or equal to 10).
- **Final Expression**: `i++` (increments `i` by 1 after each iteration).
- **Loop Body**: `sum += i` (adds `i` to `sum` during each iteration).

This loop iterates from 1 to 10, adding each number to the `sum` variable. Finally, it logs the total sum.

Sure! Here are the two programs:

### 1. Program to Print Numbers from 1 to 10 Using a For Loop

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

### 2. Program to Print the Multiplication Table of 5 Using a For Loop

```javascript
const number = 5; // number to generate the multiplication table for

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
```

### Explanation

**Program 1**:

- The `for` loop initializes `i` to 1.
- The condition checks if `i` is less than or equal to 10.
- The loop increments `i` by 1 in each iteration.
- Inside the loop, it logs the value of `i`.

**Program 2**:

- The `for` loop initializes `i` to 1.
- The condition checks if `i` is less than or equal to 10.
- The loop increments `i` by 1 in each iteration.
- Inside the loop, it logs the product of `number` (which is 5) and `i`, forming the multiplication table.

## while loop

The `while` loop in JavaScript is a control flow statement that allows code to be executed repeatedly based on a given boolean condition. The loop will continue to execute as long as the condition evaluates to `true`. Here's the basic syntax:

```javascript
while (condition) {
  // code to be executed
}
```

### Components

1. **Condition**: Checked before each iteration. If it evaluates to `true`, the loop continues; if `false`, the loop stops.

### Example

Here's a simple example of a `while` loop that prints numbers from 1 to 5:

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

### Detailed Example

Here’s another example that sums the numbers from 1 to 10:

```javascript
let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}

console.log("The sum of numbers from 1 to 10 is:", sum);
```

### Explanation

- **Initialization**: `let i = 1` (initializes `i` to 1).
- **Condition**: `i <= 10` (the loop runs as long as `i` is less than or equal to 10).
- **Loop Body**:
  - `sum += i` (adds `i` to `sum` during each iteration).
  - `i++` (increments `i` by 1 after each iteration).

This loop iterates from 1 to 10, adding each number to the `sum` variable. Finally, it logs the total sum.

Sure! Here are the two programs using `while` loops:

### 1. Program to Calculate the Sum of Numbers from 1 to 10 Using a While Loop

```javascript
let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}

console.log("The sum of numbers from 1 to 10 is:", sum);
```

### Explanation:

- **Initialization**: `let i = 1` (initializes `i` to 1).
- **Condition**: `i <= 10` (the loop runs as long as `i` is less than or equal to 10).
- **Loop Body**:
  - `sum += i` (adds `i` to `sum` during each iteration).
  - `i++` (increments `i` by 1 after each iteration).
- The program calculates the sum of numbers from 1 to 10 and logs the result.

### 2. Program to Print Numbers from 10 to 1 Using a While Loop

```javascript
let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}
```

### Explanation:

- **Initialization**: `let i = 10` (initializes `i` to 10).
- **Condition**: `i >= 1` (the loop runs as long as `i` is greater than or equal to 1).
- **Loop Body**:
  - `console.log(i)` (prints the value of `i` during each iteration).
  - `i--` (decrements `i` by 1 after each iteration).
- The program prints numbers from 10 to 1.

---

## do...while loop

The `do...while` loop in JavaScript is similar to the `while` loop, but with one key difference: the `do...while` loop will always execute the block of code once before checking the condition. This guarantees that the loop body runs at least once, even if the condition is false at the start.

### Syntax

```javascript
do {
  // code to be executed
} while (condition);
```

### Components

1. **Code Block**: The block of code inside the `do` section that will be executed once unconditionally.
2. **Condition**: The `while` condition that is checked after the code block has executed. If it evaluates to `true`, the loop repeats; if `false`, the loop stops.

### Example

Here's a simple example of a `do...while` loop that prints numbers from 1 to 5:

```javascript
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

### Explanation

- **Initialization**: `let i = 1` (initializes `i` to 1).
- **Loop Body**:
  - `console.log(i)` (prints the value of `i`).
  - `i++` (increments `i` by 1).
- **Condition**: `i <= 5` (the loop continues as long as `i` is less than or equal to 5).

### Detailed Example

Here’s another example that ensures the loop runs at least once:

```javascript
let i = 5;

do {
  console.log("The value of i is:", i);
  i++;
} while (i < 5);
```

### Explanation

- **Initialization**: `let i = 5` (initializes `i` to 5).
- **Loop Body**:
  - `console.log("The value of i is:", i)` (prints the value of `i`).
  - `i++` (increments `i` by 1).
- **Condition**: `i < 5` (the loop checks if `i` is less than 5 after executing the code block).

In this example, even though `i` is initially 5, the loop body executes once and prints the message because the condition is checked after the loop body has executed.

Sure! Here are the solutions for the two activities:

### Activity 1: Print Numbers from 1 to 5 using a `do...while` loop

```javascript
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

### Explanation

- **Initialization**: `let i = 1` (initializes `i` to 1).
- **Loop Body**:
  - `console.log(i)` (prints the value of `i`).
  - `i++` (increments `i` by 1).
- **Condition**: `i <= 5` (the loop continues as long as `i` is less than or equal to 5).

### Activity 2: Calculate the Factorial of a Number using a `do...while` loop

```javascript
function calculateFactorial(num) {
  let factorial = 1;
  let i = num;

  do {
    factorial *= i;
    i--;
  } while (i > 0);

  return factorial;
}

// Example usage
const number = 5;
const result = calculateFactorial(number);
console.log(`The factorial of ${number} is ${result}`);
```

### Explanation

- **Function Definition**: `function calculateFactorial(num)` defines a function to calculate the factorial of a number.
- **Initialization**:
  - `let factorial = 1` (initializes `factorial` to 1).
  - `let i = num` (initializes `i` to the input number).
- **Loop Body**:
  - `factorial *= i` (multiplies `factorial` by `i`).
  - `i--` (decrements `i` by 1).
- **Condition**: `i > 0` (the loop continues as long as `i` is greater than 0).
- **Return Statement**: `return factorial` returns the calculated factorial.

The example usage calculates the factorial of 5 and logs the result:

```
The factorial of 5 is 120
```

---

## nested loop

### Nested Loops in JavaScript

Nested loops are loops inside other loops. They are useful for iterating over multi-dimensional data structures like matrices (2D arrays). The inner loop runs completely every time the outer loop runs once.

#### Example: Multiplication Table

Here's a basic example of nested loops in JavaScript to generate a multiplication table:

```javascript
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("----------"); // Separates different rows
}
```

#### Explanation

- **Outer Loop**: `for (let i = 1; i <= 5; i++)`

  - Runs 5 times (for values 1 through 5).
  - Represents the first number in the multiplication.

- **Inner Loop**: `for (let j = 1; j <= 5; j++)`

  - Runs 5 times for each iteration of the outer loop.
  - Represents the second number in the multiplication.

- **Logging**: `console.log(`${i} x ${j} = ${i \* j}`)`

  - Prints the product of `i` and `j`.

- **Separator**: `console.log('----------')`
  - Prints a separator after each row for clarity.

#### Example: 2D Array Traversal

Here's an example of how you can use nested loops to traverse and print a 2D array:

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
  }
}
```

#### Explanation

- **2D Array**: `const matrix = [...]`

  - A 3x3 array (matrix).

- **Outer Loop**: `for (let row = 0; row < matrix.length; row++)`

  - Iterates over each row of the matrix.

- **Inner Loop**: `for (let col = 0; col < matrix[row].length; col++)`

  - Iterates over each element in the current row.

- **Logging**: `console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`)`
  - Prints the value of each element in the matrix with its indices.

Sure, let's write a program to print a pattern using nested for loops. We'll create a simple pattern of asterisks (`*`) in the shape of a right triangle.

### Program to Print a Right Triangle Pattern

```javascript
// Number of rows for the pattern
const numRows = 5;

for (let i = 1; i <= numRows; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }

  console.log(pattern);
}
```

### Explanation

1. **Outer Loop**: `for (let i = 1; i <= numRows; i++)`

   - Controls the number of rows in the pattern.
   - `i` goes from 1 to `numRows` (5 in this case).

2. **Inner Loop**: `for (let j = 1; j <= i; j++)`

   - Controls the number of asterisks in each row.
   - `j` goes from 1 to `i`, meaning each row will have as many asterisks as the row number.

3. **Pattern Construction**: `pattern += '* ';`

   - Adds an asterisk followed by a space to the `pattern` string for each iteration of the inner loop.

4. **Printing**: `console.log(pattern);`
   - Prints the constructed pattern for the current row.

### Output

The output will be:

```
*
* *
* * *
* * * *
* * * * *
```

## loop control statement

Loop control statements in JavaScript allow you to change the flow of loops. The main loop control statements are `break` and `continue`.

### `break` Statement

The `break` statement terminates the current loop and transfers control to the statement immediately following the loop.

#### Example

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i is 5
  }
  console.log(i);
}
```

**Output:**

```
1
2
3
4
```

### `continue` Statement

The `continue` statement skips the current iteration of the loop and moves to the next iteration.

#### Example

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // Skip the rest of the loop when i is 5
  }
  console.log(i);
}
```

**Output:**

```
1
2
3
4
6
7
8
9
10
```

### Explanation

1. **`break` Statement**:

   - In the first example, the loop prints numbers from 1 to 4.
   - When `i` is 5, the `break` statement is executed, which exits the loop, so the numbers 5 to 10 are not printed.

2. **`continue` Statement**:
   - In the second example, the loop prints numbers from 1 to 10, except for 5.
   - When `i` is 5, the `continue` statement is executed, which skips the rest of the loop body for that iteration, so the number 5 is not printed.

### Additional Notes

- The `break` statement can be used in loops (`for`, `while`, `do...while`) and switch statements.
- The `continue` statement can be used in loops (`for`, `while`, `do...while`).

These control statements are useful for managing the flow of loops, especially when you need to exit a loop early or skip certain iterations based on specific conditions.

Sure! Here are the solutions for both activities:

### 1. Print Numbers from 1 to 10, Skipping the Number 5 Using the `continue` Statement

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // Skip the iteration when i is 5
  }
  console.log(i);
}
```

**Output:**

```
1
2
3
4
6
7
8
9
10
```

### Explanation

- The `continue` statement is used to skip the rest of the code inside the loop for the current iteration when `i` is 5. The loop continues with the next iteration.

### 2. Print Numbers from 1 to 10, Stopping the Loop When the Number is 7 Using the `break` Statement

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break; // Exit the loop when i is 7
  }
  console.log(i);
}
```

**Output:**

```
1
2
3
4
5
6
```

### Explanation

- The `break` statement is used to exit the loop completely when `i` is 7. As a result, numbers from 7 onwards are not printed.
