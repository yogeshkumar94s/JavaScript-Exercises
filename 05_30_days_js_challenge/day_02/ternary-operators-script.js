function checkNumberSign(num) {
  // Use the ternary operator to determine if the number is positive or negative
  let result = num >= 0 ? "Positive" : "Negative";

  // Log the result to the console
  console.log(`The number ${num} is ${result}.`);
}

// Test the function with different numbers
checkNumberSign(10); // Output: The number 10 is Positive.
checkNumberSign(-5); // Output: The number -5 is Negative.
checkNumberSign(0); // Output: The number 0 is Positive.
