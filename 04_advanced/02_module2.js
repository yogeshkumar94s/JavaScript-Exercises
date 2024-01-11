// Module 2: Algorithms Basics
// 2.1 Introduction to Algorithms
//Algorithms are step-by-step procedures or instructions for solving problems. They are the building blocks of computer programs, providing a clear and systematic way to solve various computational tasks.

// --Definition:
// An algorithm is a set of well-defined instructions or a step-by-step procedure for solving a particular problem or accomplishing a specific task.

// Key Characteristics:
//1.0 Input and Output: An algorithm takes input, processes it, and produces an output.
//2.0 Definiteness: Each step of the algorithm must be precisely defined and unambiguous.
//3.0 Finiteness: The algorithm must terminate after a finite number of steps.
//4.0 Effectiveness: Every step must be executable and achievable using basic operations.

// Example: Linear Search Algorithm
//Objective: Find the index of a target value in an array.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const myArray = [1, 2, 3, 4, 5];
const targetValue = 3;
console.log(linearSearch(myArray, targetValue));

// 2.2 Time and Space Complexity Analysis

// Time Complexity Analysis:
// Definition: Time complexity is a measure of the amount of time an algorithm takes to complete as a function of the input size.

// Key Points:

//1.0 Input Size: Denoted as "n," representing the size of the input data.
//2.0 Asymptotic Notation: Big O Notation (O()) is commonly used to describe the upper bound of an algorithm's growth rate.

// Example: Linear Search Algorithm

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
      // Return the index if the target is found
    }
  }
  return -1;
  // Return -1 if the target is not found
}
// Time Complexity: O(n) where n is the size of the array.
// Explanation: In the worst case, the algorithm may need to iterate through the entire array to find the target element.

// Example: Binary Search Algorithm/*/*/
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
      // Return the index if the target is found
    } else if (arr[mid] < target) {
      left = mid + 1;
      // Discard the left half
    } else {
      right = mid - 1;
      // Discard the right half
    }
  }

  return -1;
  // Return -1 if the target is not found
}
// Time Complexity: O(log n) where n is the size of the sorted array.
// Explanation: Binary search efficiently halves the search space with each iteration, resulting in a logarithmic time complexity.

///*/*/*/*/*Space Complexity Analysis:/*/*//*

// Definition: Space complexity is a measure of the amount of memory an algorithm uses as a function of the input size.
// Key Points:

// Auxiliary Space: The extra space used by the algorithm beyond the input data.
// Example: Linear Search Algorithm
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
      // Return the index if the target is found
    }
  }
  return -1;
  // Return -1 if the target is not found
}
// Space Complexity: O(1) (Constant space)
// Explanation: The algorithm uses a constant amount of extra space, regardless of the input size. It only requires a few variables for bookkeeping.

// Example: Recursive Factorial Function
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// Space Complexity: O(n) where n is the size of the call stack.
// Explanation: Each recursive call adds a frame to the call stack, and the space complexity is proportional to the depth of the recursion.

// 2.3 Big O Notation

// Big O Notation is a mathematical notation used to describe the upper bound on the growth rate of an algorithm's time or space complexity. It provides a way to characterize how the performance of an algorithm scales with the size of the input.

// Key Concepts:

//1.0 Asymptotic Analysis: Big O focuses on the performance of an algorithm as the input size approaches infinity. It helps us understand how the algorithm behaves for large inputs.
//2.0 Upper Bound: Big O describes the worst-case scenario, providing an upper limit on the growth rate of an algorithm.

// Examples:
// 1. O(1) - Constant Time Complexity
function example1(arr) {
  return arr[0];
}
//- The time complexity is constant regardless of the array size.
//- It doesn't matter if the array has 10 elements or 1,000; the time taken remains constant.

// 2. O(n) - Linear Time Complexity
function example2(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
//- The time taken grows linearly with the size of the input array.
//- If the array has 10 elements, it takes roughly 10 units of time. For 1,000 elements, it takes roughly 1,000 units of time.

// 3. O(log n) - Logarithmic Time Complexity
function example3(arr) {
  let i = 1;
  while (i < arr.length) {
    console.log(arr[i]);
    i *= 2;
  }
}
//- Common in efficient search algorithms like binary search.
//- The time taken grows logarithmically with the size of the input.
//- For every doubling of the array size, the time taken increases by a constant factor.

// 4. O(n^2) - Quadratic Time Complexity
function example4(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
//- Common in nested loops where each loop iterates over the size of the input.
//- The time taken grows quadratically with the size of the input.

// 5. O(2^n) - Exponential Time Complexity
function example5(n) {
  if (n <= 1) {
    return n;
  } else {
    return example5(n - 1) + example5(n - 2);
  }
}
//- Common in recursive algorithms with branching.
//- The time taken doubles with each additional element in the input, leading to exponential growth.

// 2.4 Recursion

// Recursion is a programming concept where a function calls itself, either directly or indirectly, to solve a smaller instance of the same problem. It's a powerful and elegant technique commonly used in algorithm design and can simplify complex problems by breaking them down into smaller, more manageable subproblems.

// Key Concepts:
//1.0 Base Case: Every recursive algorithm must have a base case that defines the simplest, smallest instance of the problem that can be solved directly without further recursion.

//2.0 Recursive Case: The algorithm defines how to break down a larger problem into smaller subproblems and combines the solutions to these subproblems to solve the original problem.

// Example 1: Recursive Factorial Function
function factorial(n) {
  // Base case
  if (n <= 1) {
    return 1;
  }
  // Recursive case
  return n * factorial(n - 1);
}

// Example usage
const myNumber = 5;
console.log(factorial(myNumber));

// Explanation:
// Base case: If n is 1 or less, return 1.
// Recursive case: Otherwise, multiply n by the result of calling the factorial function with n - 1.
// This process continues until the base case is reached.

// Example 2: Recursive Fibonacci Function
function fibonacci(n) {
  // Base cases
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
const myIndex = 6;
console.log(fibonacci(myIndex));

// Explanation:
// Base cases: If n is 0 or 1, return 0 or 1, respectively.
// Recursive case: Otherwise, return the sum of the results of calling the fibonacci function with n - 1 and n - 2.

// Example 3: Recursive Binary Search

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
    // Base case: target not found
  }
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid;
    // Base case: target found
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right);
    // Recursive case: search right half
  } else {
    return binarySearch(arr, target, left, mid - 1);
    // Recursive case: search left half
  }
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetValue1 = 5;
console.log(binarySearch(sortedArray, targetValue1));

// Explanation:
// Base cases: If left exceeds right, the target is not found.
// If the middle element is the target, return its index.
// Recursive cases: Adjust the search range based on whether the target is greater or less than the middle element.
