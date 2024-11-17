function performArithmeticOperations(a, b) {
  let addition = a + b;
  let subtraction = a - b;
  let multiplication = a * b;
  let division = a / b;

  console.log(`Addition of ${a} and ${b} is: ${addition}`);
  console.log(`Subtraction of ${b} from ${a} is: ${subtraction}`);
  console.log(`Multiplication of ${a} and ${b} is: ${multiplication}`);
  console.log(`Division of ${a} by ${b} is: ${division}`);
}

// Test the function with two numbers
let num1 = 12;
let num2 = 4;

performArithmeticOperations(num1, num2);

// Test the function with other numbers
performArithmeticOperations(15, 3);
performArithmeticOperations(9, 0); // Note: Division by zero will result in Infinity
