// Q:  Write a JavaScript program to calculate multiplication and division of two numbers

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Division by zero is not allowed.";
  }
}

const number1 = 10;
const number2 = 5;

const multiplicationResult = multiply(number1, number2);
const divisionResult = divide(number1, number2);

console.log(
  `Multiplication: ${number1} * ${number2} = ${multiplicationResult}`
);
console.log(`Division: ${number1} / ${number2} = ${divisionResult}`);
