// Higher-order function to apply a given function multiple times
function applyMultipleTimes(func, times, value) {
  let result = value;
  for (let i = 0; i < times; i++) {
    result = func(result);
  }
  return result;
}

// Example function to be applied
const increment = (num) => num + 1;

// Example usage
const initialValue = 5;
const times = 3;
const result = applyMultipleTimes(increment, times, initialValue);
console.log(
  `Applying the function ${times} times to ${initialValue} results in ${result}.`
); // Output: Applying the function 3 times to 5 results in 8.

// Example function to double a number
const double = (num) => num * 2;

// Example usage with the double function
const initialDoubleValue = 2;
const doubleTimes = 4;
const doubleResult = applyMultipleTimes(
  double,
  doubleTimes,
  initialDoubleValue
);
console.log(
  `Applying the function ${doubleTimes} times to ${initialDoubleValue} results in ${doubleResult}.`
); // Output: Applying the function 4 times to 2 results in 32.
