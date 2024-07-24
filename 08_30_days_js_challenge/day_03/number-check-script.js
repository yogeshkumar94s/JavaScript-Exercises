function checkNumber(number) {
  if (number > 0) {
    console.log(`${number} is positive.`);
  } else if (number < 0) {
    console.log(`${number} is negative.`);
  } else {
    console.log(`${number} is zero.`);
  }
}

// Test the function with different numbers
checkNumber(10); // Output: 10 is positive.
checkNumber(-5); // Output: -5 is negative.
checkNumber(0); // Output: 0 is zero.
