// Q: Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

function calculateDifference(number) {
  const difference = Math.abs(number - 13);
  if (number > 13) {
    return number * 2;
  } else {
    return difference;
  }
}

const inputNumber = 5;

console.log(`The difference is ${calculateDifference(inputNumber)}`);
