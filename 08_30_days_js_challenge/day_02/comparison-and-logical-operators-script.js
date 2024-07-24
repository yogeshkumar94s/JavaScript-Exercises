function compareNumbers(num1, num2) {
  // Comparison Operators
  let isEqual = num1 === num2;
  let isNotEqual = num1 !== num2;
  let isGreaterThan = num1 > num2;
  let isLessThan = num1 < num2;
  let isGreaterOrEqual = num1 >= num2;
  let isLessOrEqual = num1 <= num2;

  // Logical Operators
  let andCondition = num1 > 0 && num2 > 0; // Both numbers are positive
  let orCondition = num1 > 0 || num2 > 0; // At least one number is positive
  let notCondition = !(num1 < 0); // num1 is not negative

  console.log(`Comparing ${num1} and ${num2}:`);
  console.log(`${num1} === ${num2}: ${isEqual}`);
  console.log(`${num1} !== ${num2}: ${isNotEqual}`);
  console.log(`${num1} > ${num2}: ${isGreaterThan}`);
  console.log(`${num1} < ${num2}: ${isLessThan}`);
  console.log(`${num1} >= ${num2}: ${isGreaterOrEqual}`);
  console.log(`${num1} <= ${num2}: ${isLessOrEqual}`);

  console.log(`Logical Operations:`);
  console.log(`${num1} > 0 && ${num2} > 0: ${andCondition}`);
  console.log(`${num1} > 0 || ${num2} > 0: ${orCondition}`);
  console.log(`!(${num1} < 0): ${notCondition}`);
}

// Test the function with different pairs of numbers
compareNumbers(10, 5);
compareNumbers(-3, 7);
compareNumbers(0, 0);
