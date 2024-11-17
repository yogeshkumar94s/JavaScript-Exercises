# Control Structure in JavaScript

## if-else statement

### Overview of `if-else` Statements in JavaScript

**`if-else` statements** are used for conditional execution in JavaScript. They allow you to execute different blocks of code based on whether a condition is true or false.

#### Basic Syntax

```javascript
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
```

#### Example

Here's a simple example to illustrate how `if-else` statements work:

```javascript
let number = 10;

if (number > 0) {
  console.log("The number is positive.");
} else {
  console.log("The number is zero or negative.");
}
```

### Explanation

1. **Condition**:

   - The `condition` in the `if` statement is an expression that evaluates to `true` or `false`.

2. **Code Block**:
   - If the `condition` evaluates to `true`, the code inside the `if` block is executed.
   - If the `condition` evaluates to `false`, the code inside the `else` block is executed.

### `if-else if-else` Ladder

You can chain multiple conditions using `else if`:

```javascript
let number = 20;

if (number > 0) {
  console.log("The number is positive.");
} else if (number === 0) {
  console.log("The number is zero.");
} else {
  console.log("The number is negative.");
}
```

### Explanation

- The `if` block is checked first. If the condition is true, it executes that block and skips the rest.
- If the `if` condition is false, the `else if` block is checked next.
- If none of the `if` or `else if` conditions are true, the `else` block is executed.

### Nesting `if-else` Statements

You can also nest `if-else` statements inside each other:

```javascript
let number = 15;

if (number >= 0) {
  if (number === 0) {
    console.log("The number is zero.");
  } else {
    console.log("The number is positive.");
  }
} else {
  console.log("The number is negative.");
}
```

### Explanation

- The outer `if-else` statement checks if the number is non-negative.
- Inside the non-negative block, there’s another `if-else` to distinguish between zero and positive numbers.

Here are the scripts for your tasks:

### Task 1: Check if a Number is Positive, Negative, or Zero

```javascript
function checkNumber(number) {
  if (number > 0) {
    console.log("The number is positive.");
  } else if (number === 0) {
    console.log("The number is zero.");
  } else {
    console.log("The number is negative.");
  }
}

// Test the function with different numbers
checkNumber(10); // Output: The number is positive.
checkNumber(0); // Output: The number is zero.
checkNumber(-5); // Output: The number is negative.
```

### Task 2: Check if a Person is Eligible to Vote

```javascript
function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("The person is eligible to vote.");
  } else {
    console.log("The person is not eligible to vote.");
  }
}

// Test the function with different ages
checkVotingEligibility(20); // Output: The person is eligible to vote.
checkVotingEligibility(17); // Output: The person is not eligible to vote.
```

### Explanation

1. **Task 1**:

   - The `checkNumber` function uses an `if-else if-else` ladder to determine if a number is positive, zero, or negative and logs the appropriate message.

2. **Task 2**:
   - The `checkVotingEligibility` function checks if the age is 18 or older to determine if the person is eligible to vote, logging the result accordingly.

## nestet if-else statements

### Overview of Nested `if-else` Statements in JavaScript

**Nested `if-else` statements** allow you to check multiple conditions in a hierarchical manner. This means you can have an `if` statement inside another `if` or `else` block, allowing for more complex decision-making.

#### Basic Syntax

```javascript
if (condition1) {
  if (condition2) {
    // Code to execute if both condition1 and condition2 are true
  } else {
    // Code to execute if condition1 is true and condition2 is false
  }
} else {
  // Code to execute if condition1 is false
}
```

#### Example

Here's an example to illustrate nested `if-else` statements:

```javascript
let age = 25;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("You are eligible to enter the club.");
  } else {
    console.log("You need an ID to enter the club.");
  }
} else {
  console.log("You are not old enough to enter the club.");
}
```

### Explanation

1. **Outer `if-else`**:

   - Checks if `age` is 18 or older. If true, it moves to the nested `if-else`.
   - If `age` is less than 18, the outer `else` block executes, indicating the person is not old enough.

2. **Inner `if-else`**:
   - Checks if the person has an ID (`hasID`).
   - If `hasID` is true, it logs that the person can enter the club.
   - If `hasID` is false, it logs that an ID is needed.

### Benefits of Nested `if-else` Statements

- **Hierarchical Decision-Making**: Allows you to make decisions based on multiple layers of conditions.
- **Complex Conditions**: Useful for scenarios where one condition depends on another.

### Example with More Layers

Here's a more complex example with multiple nested layers:

```javascript
let age = 22;
let hasID = true;
let isMember = false;

if (age >= 18) {
  if (hasID) {
    if (isMember) {
      console.log("Welcome back, member!");
    } else {
      console.log(
        "You are eligible to enter the club, but you are not a member."
      );
    }
  } else {
    console.log("You need an ID to enter the club.");
  }
} else {
  console.log("You are not old enough to enter the club.");
}
```

### Explanation

- The outer `if` checks the age.
- The second level checks for the ID.
- The third level checks membership status.

### Here's a JavaScript program that finds the largest of three numbers using nested if-else statements:

```javascript
function findLargestNumber(a, b, c) {
  if (a >= b) {
    if (a >= c) {
      console.log(`${a} is the largest number.`);
    } else {
      console.log(`${c} is the largest number.`);
    }
  } else {
    if (b >= c) {
      console.log(`${b} is the largest number.`);
    } else {
      console.log(`${c} is the largest number.`);
    }
  }
}

// Test the function with different values
findLargestNumber(10, 20, 30); // Output: 30 is the largest number.
findLargestNumber(15, 25, 20); // Output: 25 is the largest number.
findLargestNumber(5, 5, 5); // Output: 5 is the largest number.
```

### Explanation

1. **First Condition**:

   - The outer `if` checks if `a` is greater than or equal to `b`.

2. **Nested Condition 1**:

   - If `a` is greater than or equal to `b`, then it checks if `a` is also greater than or equal to `c`.
   - If true, `a` is the largest number.

3. **Nested Condition 2**:

   - If `a` is not greater than or equal to `c`, then `c` is the largest number.

4. **Else Block**:
   - If `a` is not greater than or equal to `b`, then it checks if `b` is greater than or equal to `c`.
   - If true, `b` is the largest number.
   - If not, `c` is the largest number.

---

## switch-case in js

### Overview of `switch-case` in JavaScript

The **`switch-case`** statement is used for multi-way branching based on the value of a variable or expression. It is often used as an alternative to multiple `if-else` statements when dealing with a large number of possible conditions.

#### Basic Syntax

```javascript
switch (expression) {
  case value1:
    // Code to execute if expression equals value1
    break;
  case value2:
    // Code to execute if expression equals value2
    break;
  // Add more cases as needed
  default:
    // Code to execute if expression doesn't match any cases
    break;
}
```

#### Example

Here's a simple example to illustrate how the `switch-case` statement works:

```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
    break;
}
```

### Explanation

1. **Expression**:

   - The `switch` statement evaluates the expression (in this case, the variable `day`).

2. **Case Blocks**:

   - Each `case` represents a potential match for the expression.
   - When a match is found, the corresponding block of code executes.

3. **Break Statement**:

   - The `break` statement exits the `switch` block, preventing the execution from falling through to subsequent cases.

4. **Default Case**:
   - The `default` case is optional and executes if none of the `case` values match the expression.

### Important Points

- **Strict Comparison**:

  - The `switch-case` statement uses strict comparison (`===`), so the types must match as well.

- **Fall-Through**:

  - If you omit the `break` statement, the execution will "fall through" to the next case, which might not always be desired.

- **No Fall-Through**:

  - If you want multiple cases to execute the same block of code, you can omit `break` statements between those cases:

    ```javascript
    switch (day) {
      case 1:
      case 2:
      case 3:
        console.log("First three days of the week");
        break;
      case 4:
      case 5:
        console.log("End of the workweek");
        break;
      default:
        console.log("Weekend");
        break;
    }
    ```

### Task 1: Determine the Day of the Week

Here's a program that uses a `switch-case` statement to determine the day of the week based on a number from 1 to 7:

```javascript
function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day number. Please enter a number between 1 and 7.");
      break;
  }
}

// Test the function with different values
getDayOfWeek(3); // Output: Wednesday
getDayOfWeek(7); // Output: Sunday
getDayOfWeek(10); // Output: Invalid day number. Please enter a number between 1 and 7.
```

### Task 2: Assign a Grade Based on a Score

Here's a program that uses a `switch-case` statement to assign a letter grade based on a score:

```javascript
function getGrade(score) {
  switch (true) {
    case score >= 90:
      console.log("Grade: A");
      break;
    case score >= 80:
      console.log("Grade: B");
      break;
    case score >= 70:
      console.log("Grade: C");
      break;
    case score >= 60:
      console.log("Grade: D");
      break;
    case score < 60:
      console.log("Grade: F");
      break;
    default:
      console.log("Invalid score. Please enter a score between 0 and 100.");
      break;
  }
}

// Test the function with different values
getGrade(85); // Output: Grade: B
getGrade(72); // Output: Grade: C
getGrade(50); // Output: Grade: F
```

### Explanation

#### Task 1

- The `switch-case` structure checks the value of `dayNumber` and logs the corresponding day of the week.
- The `default` case handles invalid numbers.

#### Task 2

- The `switch-case` uses `true` as the expression to enable range checking with `case` statements.
- Each `case` checks if the `score` falls within a particular range to assign a grade.
- The `default` case handles scores outside the expected range.

## conditional operator in js

### Conditional (Ternary) Operator in JavaScript

The **conditional (ternary) operator** is a concise way to perform a conditional operation. It's often used as a shorthand for `if-else` statements. It takes three operands and is typically used for simple conditions.

#### Syntax

```javascript
condition ? expr1 : expr2;
```

- **`condition`**: The condition to evaluate. If this condition is true, `expr1` is executed.
- **`expr1`**: The expression that is executed if the condition is true.
- **`expr2`**: The expression that is executed if the condition is false.

#### Example

Here's a basic example to illustrate its use:

```javascript
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.
```

### Explanation

- **Condition**: `age >= 18`
- **If True**: `'Yes, you can vote.'`
- **If False**: `'No, you cannot vote.'`

In this example, the ternary operator evaluates whether `age` is greater than or equal to 18. If true, it assigns `'Yes, you can vote.'` to `canVote`; otherwise, it assigns `'No, you cannot vote.'`.

### More Complex Example

You can also nest ternary operators for more complex conditions:

```javascript
let score = 85;
let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
console.log(grade); // Output: B
```

### Explanation

- If `score` is 85:
  - It does not satisfy `score >= 90`, so it moves to the next condition.
  - It satisfies `score >= 80`, so it assigns `'B'` to `grade`.

### Key Points

- The ternary operator is useful for simple conditional assignments.

- For more complex conditions, nesting ternary operators can become hard to read; in such cases, using `if-else` statements might be clearer.

- It's a concise way to write conditional logic but should be used judiciously to maintain code readability.

### Here’s a script that uses the ternary operator to check if a number is even or odd and logs the result to the console:

```javascript
function checkEvenOrOdd(number) {
  const result = number % 2 === 0 ? "Even" : "Odd";
  console.log(`${number} is ${result}`);
}

// Test the function with different numbers
checkEvenOrOdd(4); // Output: 4 is Even
checkEvenOrOdd(7); // Output: 7 is Odd
checkEvenOrOdd(0); // Output: 0 is Even
```

### Explanation

- **Condition**: `number % 2 === 0`
  - This checks if the number is divisible by 2 without a remainder (i.e., it's even).
- **True Case**: `'Even'`
  - If the condition is true, it means the number is even.
- **False Case**: `'Odd'`
  - If the condition is false, it means the number is odd.

---

## combining conditions in js

Combining conditions in JavaScript allows you to create more complex logical expressions. You can combine conditions using logical operators such as `&&` (AND), `||` (OR), and `!` (NOT). Here's a brief overview:

### 1. Logical AND (`&&`)

The logical AND operator returns `true` only if both conditions are true. If the first condition is false, it short-circuits and does not evaluate the second condition.

#### Syntax

```javascript
condition1 && condition2;
```

#### Example

```javascript
let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You can enter the club.");
} else {
  console.log("You cannot enter the club.");
}
// Output: You can enter the club.
```

In this example, both conditions must be true for the message to be logged.

### 2. Logical OR (`||`)

The logical OR operator returns `true` if at least one of the conditions is true. If the first condition is true, it short-circuits and does not evaluate the second condition.

#### Syntax

```javascript
condition1 || condition2;
```

#### Example

```javascript
let temperature = 30;
let isSunny = false;

if (temperature > 25 || isSunny) {
  console.log("It's a nice day.");
} else {
  console.log("It's not a nice day.");
}
// Output: It's a nice day.
```

In this example, if either condition is true, the message will be logged.

### 3. Logical NOT (`!`)

The logical NOT operator negates the condition. It returns `true` if the condition is false and `false` if the condition is true.

#### Syntax

```javascript
!condition;
```

#### Example

```javascript
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in.");
} else {
  console.log("Welcome back!");
}
// Output: Please log in.
```

In this example, the NOT operator negates `isLoggedIn`. Since `isLoggedIn` is `false`, `!isLoggedIn` becomes `true`, and the message is logged.

### Combining Conditions Example

Here's an example combining all three logical operators:

```javascript
let age = 20;
let hasTicket = true;
let isMember = false;

if ((age >= 18 && hasTicket) || isMember) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}
// Output: Access granted.
```

In this example:

- The user will have access if they are at least 18 and have a ticket, or if they are a member.

### Summary

- **`&&`**: Returns `true` if both conditions are true.
- **`||`**: Returns `true` if at least one condition is true.
- **`!`**: Returns `true` if the condition is false.

### Here's a JavaScript program to check if a year is a leap year using the specified conditions:

### Leap Year Conditions

1. A year is a leap year if it is divisible by 4.
2. However, if it is also divisible by 100, it is not a leap year unless it is also divisible by 400.

### Script

```javascript
function isLeapYear(year) {
  // Check if the year is divisible by 4
  const divisibleBy4 = year % 4 === 0;

  // Check if the year is divisible by 100
  const divisibleBy100 = year % 100 === 0;

  // Check if the year is divisible by 400
  const divisibleBy400 = year % 400 === 0;

  // Determine if it's a leap year
  if (divisibleBy4 && (!divisibleBy100 || divisibleBy400)) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
}

// Test the function with different years
isLeapYear(2024); // Output: 2024 is a leap year.
isLeapYear(1900); // Output: 1900 is not a leap year.
isLeapYear(2000); // Output: 2000 is a leap year.
isLeapYear(2023); // Output: 2023 is not a leap year.
```

### Explanation

- **Divisible by 4**: `year % 4 === 0`
- **Divisible by 100**: `year % 100 === 0`
- **Divisible by 400**: `year % 400 === 0`

The year is a leap year if:

- It is divisible by 4, and
- It is either not divisible by 100 or divisible by 400.
