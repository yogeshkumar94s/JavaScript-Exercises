function createFunctionArray() {
  // Array to hold functions
  const functions = [];

  // Loop to create functions
  for (let i = 0; i < 10; i++) {
    // Create a function and push it to the array
    functions.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i)
    );
  }

  return functions;
}

// Create the array of functions
const functionArray = createFunctionArray();

// Call each function to log the correct index
for (let i = 0; i < functionArray.length; i++) {
  functionArray[i](); // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}
