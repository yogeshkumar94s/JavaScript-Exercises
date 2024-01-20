// Handling Variable Number of Arguments:
// To handle a variable number of arguments, you can use the arguments object or the rest parameters (...).

// Using the arguments Object:

function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

const result = sum(2, 3, 5, 8);
console.log(result);

// Using Rest Parameters:

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const result1 = sum(2, 3, 5, 8);
console.log(result1);

// In both examples, the functions can handle any number of arguments, whether more or fewer, by using the arguments object or rest parameters.

// Understanding how JavaScript handles arguments in functions is essential for writing robust and flexible code, especially when dealing with functions that may receive varying numbers of arguments.
