// Memoization function
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log(`Fetching from cache for arguments: ${args}`);
      return cache[key];
    } else {
      console.log(`Calculating result for arguments: ${args}`);
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

// Factorial function
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Memoized factorial function
const memoizedFactorial = memoize(factorial);

// Demonstration
console.log(memoizedFactorial(5)); // Calculating result for arguments: 5
console.log(memoizedFactorial(6)); // Calculating result for arguments: 6 (note: uses result from 5!)
console.log(memoizedFactorial(5)); // Fetching from cache for arguments: 5
console.log(memoizedFactorial(6)); // Fetching from cache for arguments: 6
console.log(memoizedFactorial(7)); // Calculating result for arguments: 7 (note: uses result from 6!)
