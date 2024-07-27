function createCounter() {
  // Private variable to hold the counter value
  let count = 0;

  return {
    // Function to increment the counter
    increment: function () {
      count++;
    },
    // Function to get the current counter value
    get: function () {
      return count;
    },
  };
}

// Create a new counter
const counter = createCounter();

// Use the counter
counter.increment();
console.log(counter.get()); // Output: 1

counter.increment();
counter.increment();
console.log(counter.get()); // Output: 3

// Demonstrating the privacy of the count variable
console.log(counter.count); // Output: undefined
