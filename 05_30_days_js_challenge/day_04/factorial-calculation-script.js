let number = 5; // Number for which factorial is to be calculated
let factorial = 1; // Initialize factorial to 1 (0! = 1)

// Calculate factorial using do...while loop
do {
  factorial *= number; // Multiply factorial by the current number
  number--; // Decrement the number
} while (number > 0); // Continue the loop as long as number is greater than 0

console.log("The factorial is:", factorial);
