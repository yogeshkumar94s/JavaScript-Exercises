function createUniqueIdGenerator() {
  // Private variable to hold the last generated ID
  let lastId = 0;

  return function () {
    // Increment the last ID and return the new ID
    lastId++;
    return lastId;
  };
}

// Create a new unique ID generator
const generateUniqueId = createUniqueIdGenerator();

// Generate unique IDs
console.log(generateUniqueId()); // Output: 1
console.log(generateUniqueId()); // Output: 2
console.log(generateUniqueId()); // Output: 3

// Create another unique ID generator to demonstrate independence
const anotherUniqueIdGenerator = createUniqueIdGenerator();
console.log(anotherUniqueIdGenerator()); // Output: 1
console.log(anotherUniqueIdGenerator()); // Output: 2
