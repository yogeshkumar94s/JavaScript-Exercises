# operators in JavaScript

## Arithmetic Operators

Arithmetic operators in JavaScript are used to perform mathematical operations on numbers. Here's a brief overview of each of the basic arithmetic operators:

### Basic Arithmetic Operators

1. **Addition (`+`)**

   - Adds two numbers.

   ```javascript
   let a = 5;
   let b = 3;
   let result = a + b;
   console.log(result); // Output: 8
   ```

2. **Subtraction (`-`)**

   - Subtracts the second number from the first.

   ```javascript
   let a = 5;
   let b = 3;
   let result = a - b;
   console.log(result); // Output: 2
   ```

3. **Multiplication (`*`)**

   - Multiplies two numbers.

   ```javascript
   let a = 5;
   let b = 3;
   let result = a * b;
   console.log(result); // Output: 15
   ```

4. **Division (`/`)**

   - Divides the first number by the second.

   ```javascript
   let a = 6;
   let b = 3;
   let result = a / b;
   console.log(result); // Output: 2
   ```

5. **Modulus (`%`)**

   - Returns the remainder of the division of two numbers.

   ```javascript
   let a = 7;
   let b = 3;
   let result = a % b;
   console.log(result); // Output: 1
   ```

6. **Exponentiation (`**`)\*\*
   - Raises the first number to the power of the second number.
   ```javascript
   let a = 2;
   let b = 3;
   let result = a ** b;
   console.log(result); // Output: 8
   ```

### Examples and Usage

#### Addition

```javascript
let sum = 10 + 20;
console.log(sum); // Output: 30
```

#### Subtraction

```javascript
let difference = 20 - 10;
console.log(difference); // Output: 10
```

#### Multiplication

```javascript
let product = 10 * 3;
console.log(product); // Output: 30
```

#### Division

```javascript
let quotient = 20 / 5;
console.log(quotient); // Output: 4
```

#### Modulus

```javascript
let remainder = 10 % 3;
console.log(remainder); // Output: 1
```

#### Exponentiation

```javascript
let power = 2 ** 4;
console.log(power); // Output: 16
```

### Compound Assignment Operators

JavaScript also supports compound assignment operators, which combine an arithmetic operator with the assignment operator (`=`).

1. **Addition Assignment (`+=`)**

   ```javascript
   let a = 5;
   a += 3; // Equivalent to a = a + 3
   console.log(a); // Output: 8
   ```

2. **Subtraction Assignment (`-=`)**

   ```javascript
   let a = 5;
   a -= 3; // Equivalent to a = a - 3
   console.log(a); // Output: 2
   ```

3. **Multiplication Assignment (`*=`)**

   ```javascript
   let a = 5;
   a *= 3; // Equivalent to a = a * 3
   console.log(a); // Output: 15
   ```

4. **Division Assignment (`/=`)**

   ```javascript
   let a = 6;
   a /= 3; // Equivalent to a = a / 3
   console.log(a); // Output: 2
   ```

5. **Modulus Assignment (`%=`)**

   ```javascript
   let a = 7;
   a %= 3; // Equivalent to a = a % 3
   console.log(a); // Output: 1
   ```

6. **Exponentiation Assignment (`**=`)\*\*
   ```javascript
   let a = 2;
   a **= 3; // Equivalent to a = a ** 3
   console.log(a); // Output: 8
   ```

---

## Comparison Operators in JavaScript

Comparison operators in JavaScript are used to compare two values and return a boolean value (`true` or `false`). Here’s a brief overview of the comparison operators:

### Basic Comparison Operators

1. **Equal (`==`)**

   - Compares two values for equality, performing type conversion if necessary.

   ```javascript
   console.log(5 == "5"); // Output: true
   console.log(5 == 5); // Output: true
   console.log(5 == 6); // Output: false
   ```

2. **Strict Equal (`===`)**

   - Compares two values for equality without performing type conversion.

   ```javascript
   console.log(5 === "5"); // Output: false
   console.log(5 === 5); // Output: true
   ```

3. **Not Equal (`!=`)**

   - Compares two values for inequality, performing type conversion if necessary.

   ```javascript
   console.log(5 != "5"); // Output: false
   console.log(5 != 6); // Output: true
   ```

4. **Strict Not Equal (`!==`)**

   - Compares two values for inequality without performing type conversion.

   ```javascript
   console.log(5 !== "5"); // Output: true
   console.log(5 !== 5); // Output: false
   ```

5. **Greater Than (`>`)**

   - Checks if the left value is greater than the right value.

   ```javascript
   console.log(5 > 3); // Output: true
   console.log(3 > 5); // Output: false
   ```

6. **Greater Than or Equal (`>=`)**

   - Checks if the left value is greater than or equal to the right value.

   ```javascript
   console.log(5 >= 5); // Output: true
   console.log(3 >= 5); // Output: false
   ```

7. **Less Than (`<`)**

   - Checks if the left value is less than the right value.

   ```javascript
   console.log(3 < 5); // Output: true
   console.log(5 < 3); // Output: false
   ```

8. **Less Than or Equal (`<=`)**
   - Checks if the left value is less than or equal to the right value.
   ```javascript
   console.log(5 <= 5); // Output: true
   console.log(5 <= 3); // Output: false
   ```

### Examples

#### Equal (`==`)

```javascript
let x = 10;
let y = "10";
console.log(x == y); // Output: true
```

#### Strict Equal (`===`)

```javascript
let x = 10;
let y = "10";
console.log(x === y); // Output: false
```

#### Not Equal (`!=`)

```javascript
let x = 10;
let y = "10";
console.log(x != y); // Output: false
```

#### Strict Not Equal (`!==`)

```javascript
let x = 10;
let y = "10";
console.log(x !== y); // Output: true
```

#### Greater Than (`>`)

```javascript
let x = 10;
let y = 5;
console.log(x > y); // Output: true
```

#### Greater Than or Equal (`>=`)

```javascript
let x = 10;
let y = 10;
console.log(x >= y); // Output: true
```

#### Less Than (`<`)

```javascript
let x = 5;
let y = 10;
console.log(x < y); // Output: true
```

#### Less Than or Equal (`<=`)

```javascript
let x = 10;
let y = 10;
console.log(x <= y); // Output: true
```

### Summary

- **`==`** and **`!=`** perform type conversion before comparison.

- **`===`** and **`!==`** do not perform type conversion and compare both value and type.

- **`>`**, **`>=`**, **`<`**, and **`<=`** are used for numerical comparisons.

---

## Logical Operators in JavaScript

Logical operators in JavaScript are used to combine or invert boolean values and expressions. Here’s a brief overview of the logical operators:

### Logical Operators

1. **Logical AND (`&&`)**

   - Returns `true` if both operands are `true`. Otherwise, returns `false`.
   - Short-circuits: if the first operand is `false`, the second operand is not evaluated.

   ```javascript
   console.log(true && true); // Output: true
   console.log(true && false); // Output: false
   console.log(false && true); // Output: false
   console.log(false && false); // Output: false
   ```

2. **Logical OR (`||`)**

   - Returns `true` if at least one of the operands is `true`. Otherwise, returns `false`.
   - Short-circuits: if the first operand is `true`, the second operand is not evaluated.

   ```javascript
   console.log(true || true); // Output: true
   console.log(true || false); // Output: true
   console.log(false || true); // Output: true
   console.log(false || false); // Output: false
   ```

3. **Logical NOT (`!`)**
   - Inverts the boolean value of the operand.
   ```javascript
   console.log(!true); // Output: false
   console.log(!false); // Output: true
   ```

### Examples and Usage

#### Logical AND (`&&`)

```javascript
let a = true;
let b = false;
let c = true;
console.log(a && b); // Output: false
console.log(a && c); // Output: true
```

#### Logical OR (`||`)

```javascript
let a = true;
let b = false;
let c = true;
console.log(a || b); // Output: true
console.log(b || b); // Output: false
```

#### Logical NOT (`!`)

```javascript
let a = true;
let b = false;
console.log(!a); // Output: false
console.log(!b); // Output: true
```

### Combining Logical Operators

Logical operators can be combined to form complex logical expressions.

```javascript
let a = true;
let b = false;
let c = true;

console.log((a && b) || c); // Output: true
console.log(!(a && b) || c); // Output: true
console.log(a && (b || c)); // Output: true
console.log(a || (b && c)); // Output: true
```

### Short-Circuit Evaluation

Logical operators use short-circuit evaluation, meaning they stop evaluating as soon as the result is determined.

```javascript
let a = false;
let b = true;

console.log(a && b); // Output: false (b is not evaluated)
console.log(a || b); // Output: true (b is not evaluated)
```

### Summary

- **Logical AND (`&&`)**: Returns `true` if both operands are `true`; otherwise, `false`.

- **Logical OR (`||`)**: Returns `true` if at least one operand is `true`; otherwise, `false`.

- **Logical NOT (`!`)**: Inverts the boolean value of the operand.

- Logical operators are essential for combining multiple conditions and controlling the flow of code based on complex boolean logic.

---

## Ternary Operators in JavaScript

The ternary operator in JavaScript is a concise way to perform conditional checks. It is also known as the conditional operator and uses the syntax `condition ? expressionIfTrue : expressionIfFalse`.

### Syntax

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

- `condition`: An expression that evaluates to `true` or `false`.
- `expressionIfTrue`: The expression that is executed if the condition is `true`.
- `expressionIfFalse`: The expression that is executed if the condition is `false`.

### Examples

#### Basic Example

```javascript
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes
```

In this example, the condition `age >= 18` is checked. If it is `true`, `canVote` is assigned the value `'Yes'`; otherwise, it is assigned `'No'`.

#### Nested Ternary Operator

Ternary operators can be nested for more complex conditions. However, readability can become an issue, so use with caution.

```javascript
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // Output: B
```

In this example, the ternary operator is nested to assign a grade based on the score.

### Using the Ternary Operator for Function Returns

The ternary operator can also be used to return values from functions based on a condition.

```javascript
function checkEligibility(age) {
  return age >= 18 ? "Eligible" : "Not Eligible";
}

console.log(checkEligibility(20)); // Output: Eligible
console.log(checkEligibility(16)); // Output: Not Eligible
```

### Comparison with `if...else`

The ternary operator is a shorter alternative to `if...else` statements. Here is a comparison:

#### Using `if...else`

```javascript
let age = 20;
let canVote;
if (age >= 18) {
  canVote = "Yes";
} else {
  canVote = "No";
}
console.log(canVote); // Output: Yes
```

#### Using Ternary Operator

```javascript
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes
```

### Summary

- The ternary operator is a concise way to handle conditional logic.

- It follows the syntax `condition ? expressionIfTrue : expressionIfFalse`.

- While useful for simple conditions, overuse or nesting can make code harder to read.

- It is a shorter alternative to `if...else` statements and can improve code brevity.

### a simple program that uses the ternary operator to check if a number is positive or negative and logs the result to the console.

```javascript
function checkNumber(num) {
  let result = num >= 0 ? "Positive" : "Negative";
  console.log(`The number ${num} is ${result}.`);
}

// Test the function with different numbers
checkNumber(10); // Output: The number 10 is Positive.
checkNumber(-5); // Output: The number -5 is Negative.
checkNumber(0); // Output: The number 0 is Positive.
```
