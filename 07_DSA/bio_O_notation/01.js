// Why We Need Big O Notation

// Performance Measurement: It helps us compare the efficiency of different algorithms, especially when dealing with large inputs.
// Scalability: It shows how an algorithm's running time or space requirements grow as the input size increases.
// Optimization: It aids in identifying potential bottlenecks and optimizing code for better performance.

// # Common Big O Notations

// -----------------------------------------------------------------------------------------

// ## O(1) - Constant Time: The algorithm's running time does not change with the input size.

function isFirstElementEven(arr) {
  // Checking if the first element is even
  return arr[0] % 2 === 0;
}
// This operation is constant time because it always takes the same amount of time.

// -----------------------------------------------------------------------------------------

// ## O(n) - Linear Time: The running time increases linearly with the input size.

function printAllElements(arr) {
  // Looping through each element of the array
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// This operation is linear time because the time it takes is directly proportional to the size of the array.

// -----------------------------------------------------------------------------------------

// ##  O(n^2) - Quadratic Time: The running time increases quadratically with the input size.

function printAllPairs(arr) {
  // Nested loop to print all pairs of elements
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
// This operation is quadratic time because it involves a nested loop, causing the time to increase with the square of the array size.

// -----------------------------------------------------------------------------------

// ##  O(log n) - Logarithmic Time: The running time increases logarithmically with the input size.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // Target not found
}
// This operation is logarithmic time because the search range is halved with each iteration.

// -----------------------------------------------------------------------------------------------------

// O(1): Constant time - the operation takes the same time regardless of input size.
// O(n): Linear time - the operation time grows linearly with the input size.
// O(n^2): Quadratic time - the operation time grows quadratically with the input size.
// O(log n): Logarithmic time - the operation time grows logarithmically with the input size.
