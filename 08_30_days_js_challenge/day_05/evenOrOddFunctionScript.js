// Function to check if a number is even or odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even.`);
  } else {
    console.log(`${number} is odd.`);
  }
}

// Example usage
checkEvenOdd(4); // Output: 4 is even.
checkEvenOdd(7); // Output: 7 is odd.
checkEvenOdd(0); // Output: 0 is even.
checkEvenOdd(-5); // Output: -5 is odd.
