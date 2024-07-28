# Recursion in JavaScript

## Basic Recursion in JavaScript

Recursion is a programming technique where a function calls itself to solve a problem. In JavaScript, recursion can be used to break down complex problems into simpler ones. Here’s a brief overview of recursion with some examples:

#### Key Points of Recursion:

1. **Base Case**: This is the condition under which the recursion ends. Without a base case, the function would call itself indefinitely, leading to a stack overflow.
2. **Recursive Case**: This is the part of the function where it calls itself to break down the problem into smaller parts.

### Example 1: Factorial

The factorial of a number \( n \) (denoted as \( n! \)) is the product of all positive integers less than or equal to \( n \). It can be defined recursively as:

- \( 0! = 1 \) (base case)
- \( n! = n \times (n-1)! \) (recursive case)

Here’s how you can write a factorial function using recursion in JavaScript:

```javascript
function factorial(n) {
  // Base case
  if (n <= 1) {
    return 1;
  }
  // Recursive case
  return n * factorial(n - 1);
}

// Test the function
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
```

### Example 2: Fibonacci Sequence

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence can be defined recursively as:

- \( fib(0) = 0 \) (base case)
- \( fib(1) = 1 \) (base case)
- \( fib(n) = fib(n-1) + fib(n-2) \) (recursive case)

Here’s how you can write a Fibonacci function using recursion in JavaScript:

```javascript
function fibonacci(n) {
  // Base cases
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test the function
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
```

### Example 3: Sum of an Array

You can use recursion to calculate the sum of all elements in an array:

```javascript
function sumArray(arr) {
  // Base case
  if (arr.length === 0) {
    return 0;
  }
  // Recursive case
  return arr[0] + sumArray(arr.slice(1));
}

// Test the function
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([])); // Output: 0
```

### Explanation of Recursion

- **Base Case**: It’s crucial to define a base case to avoid infinite recursion. The base case determines when the recursion should stop.
- **Recursive Case**: This is where the function calls itself with a smaller or simpler input.

### Benefits and Drawbacks of Recursion

**Benefits**:

- Simplifies code for problems that have a naturally recursive structure, such as tree traversals and certain mathematical sequences.
- Can make code easier to read and understand for certain problems.

**Drawbacks**:

- Recursive solutions can be less efficient than iterative ones due to the overhead of function calls.
- Deep recursion can lead to stack overflow errors if the recursion depth exceeds the call stack limit.

Recursion is a powerful tool in JavaScript that, when used appropriately, can simplify the implementation of complex algorithms.

Sure! Here are the solutions for both tasks:

### Task 1: Recursive Function to Calculate Factorial

```javascript
// Recursive function to calculate the factorial of a number
function factorial(n) {
  // Base case
  if (n <= 1) {
    return 1;
  }
  // Recursive case
  return n * factorial(n - 1);
}

// Test cases
console.log(`Factorial of 5: ${factorial(5)}`); // Output: 120
console.log(`Factorial of 0: ${factorial(0)}`); // Output: 1
console.log(`Factorial of 7: ${factorial(7)}`); // Output: 5040
console.log(`Factorial of 10: ${factorial(10)}`); // Output: 3628800
```

### Task 2: Recursive Function to Calculate nth Fibonacci Number

```javascript
// Recursive function to calculate the nth Fibonacci number
function fibonacci(n) {
  // Base cases
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases
console.log(`Fibonacci of 5: ${fibonacci(5)}`); // Output: 5
console.log(`Fibonacci of 10: ${fibonacci(10)}`); // Output: 55
console.log(`Fibonacci of 0: ${fibonacci(0)}`); // Output: 0
console.log(`Fibonacci of 7: ${fibonacci(7)}`); // Output: 13
```

### Explanation

#### Factorial Function:

- **Base Case**: If `n` is less than or equal to 1, return 1. This stops the recursion.
- **Recursive Case**: Multiply `n` by the factorial of `n-1`.

#### Fibonacci Function:

- **Base Cases**: If `n` is 0, return 0. If `n` is 1, return 1.
- **Recursive Case**: Return the sum of the Fibonacci of `n-1` and `n-2`.

These recursive functions effectively demonstrate the principles of recursion in JavaScript.

---

## Recursion with Array

Recursion can also be used to perform operations on arrays in JavaScript. Here are a couple of examples to illustrate how recursion can be applied to arrays:

### Task 1: Recursive Function to Sum Elements of an Array

```javascript
// Recursive function to sum elements of an array
function sumArray(arr) {
  // Base case: if the array is empty, return 0
  if (arr.length === 0) {
    return 0;
  }
  // Recursive case: sum the first element and the sum of the rest of the array
  return arr[0] + sumArray(arr.slice(1));
}

// Test cases
console.log(`Sum of [1, 2, 3, 4, 5]: ${sumArray([1, 2, 3, 4, 5])}`); // Output: 15
console.log(`Sum of []: ${sumArray([])}`); // Output: 0
console.log(`Sum of [10, -2, 7, 3]: ${sumArray([10, -2, 7, 3])}`); // Output: 18
```

### Task 2: Recursive Function to Find the Maximum Element in an Array

```javascript
// Recursive function to find the maximum element in an array
function maxArray(arr) {
  // Base case: if the array has one element, return that element
  if (arr.length === 1) {
    return arr[0];
  }
  // Recursive case: find the maximum between the first element and the maximum of the rest of the array
  return Math.max(arr[0], maxArray(arr.slice(1)));
}

// Test cases
console.log(`Max of [1, 2, 3, 4, 5]: ${maxArray([1, 2, 3, 4, 5])}`); // Output: 5
console.log(`Max of [-1, -5, -3, -4, -2]: ${maxArray([-1, -5, -3, -4, -2])}`); // Output: -1
console.log(`Max of [10, 20, 7, 8, 15]: ${maxArray([10, 20, 7, 8, 15])}`); // Output: 20
```

### Explanation

#### Sum Elements of an Array:

- **Base Case**: If the array is empty, return 0. This stops the recursion.
- **Recursive Case**: Add the first element of the array to the result of the recursive call with the rest of the array (`arr.slice(1)`).

#### Find the Maximum Element in an Array:

- **Base Case**: If the array has only one element, return that element.
- **Recursive Case**: Use `Math.max` to find the maximum between the first element and the maximum of the rest of the array (`arr.slice(1)`).

These examples demonstrate how recursion can be applied to solve problems involving arrays in JavaScript.

Sure! Let's complete these tasks with the recursive functions and log the results for a few test cases.

### Task 1: Recursive Function to Find the Sum of All Elements in an Array

```javascript
// Recursive function to find the sum of all elements in an array
function sumArray(arr) {
  // Base case: if the array is empty, return 0
  if (arr.length === 0) {
    return 0;
  }
  // Recursive case: sum the first element and the sum of the rest of the array
  return arr[0] + sumArray(arr.slice(1));
}

// Test cases
console.log(`Sum of [1, 2, 3, 4, 5]: ${sumArray([1, 2, 3, 4, 5])}`); // Output: 15
console.log(`Sum of []: ${sumArray([])}`); // Output: 0
console.log(`Sum of [10, -2, 7, 3]: ${sumArray([10, -2, 7, 3])}`); // Output: 18
```

### Task 2: Recursive Function to Find the Maximum Element in an Array

```javascript
// Recursive function to find the maximum element in an array
function maxArray(arr) {
  // Base case: if the array has one element, return that element
  if (arr.length === 1) {
    return arr[0];
  }
  // Recursive case: find the maximum between the first element and the maximum of the rest of the array
  return Math.max(arr[0], maxArray(arr.slice(1)));
}

// Test cases
console.log(`Max of [1, 2, 3, 4, 5]: ${maxArray([1, 2, 3, 4, 5])}`); // Output: 5
console.log(`Max of [-1, -5, -3, -4, -2]: ${maxArray([-1, -5, -3, -4, -2])}`); // Output: -1
console.log(`Max of [10, 20, 7, 8, 15]: ${maxArray([10, 20, 7, 8, 15])}`); // Output: 20
```

### Explanation

#### Sum of All Elements in an Array:

- **Base Case**: If the array is empty, return 0. This stops the recursion.
- **Recursive Case**: Add the first element of the array to the result of the recursive call with the rest of the array (`arr.slice(1)`).

#### Find the Maximum Element in an Array:

- **Base Case**: If the array has only one element, return that element.
- **Recursive Case**: Use `Math.max` to find the maximum between the first element and the maximum of the rest of the array (`arr.slice(1)`).

These examples demonstrate how recursion can be used to solve problems involving arrays in JavaScript.

---

## String Manipulation with Recursion

Manipulating strings with recursion in JavaScript involves using a function that calls itself to perform operations on a string. Here are a few common tasks that can be solved using recursive functions:

1. **Reversing a string**
2. **Checking if a string is a palindrome**

Let's go through each of these tasks with explanations and examples.

### Task 1: Reversing a String

To reverse a string using recursion, we'll take the first character of the string and place it at the end, then recursively call the function with the rest of the string.

```javascript
// Recursive function to reverse a string
function reverseString(str) {
  // Base case: if the string is empty, return an empty string
  if (str === "") {
    return "";
  }
  // Recursive case: take the first character and add it to the reversed rest of the string
  return reverseString(str.slice(1)) + str[0];
}

// Test cases
console.log(`Reversed 'hello': ${reverseString("hello")}`); // Output: 'olleh'
console.log(`Reversed 'world': ${reverseString("world")}`); // Output: 'dlrow'
console.log(`Reversed 'recursion': ${reverseString("recursion")}`); // Output: 'noisrucer'
```

### Task 2: Checking if a String is a Palindrome

To check if a string is a palindrome (reads the same forwards and backwards), we'll compare the first and last characters of the string. If they are the same, we recursively check the substring without the first and last characters.

```javascript
// Recursive function to check if a string is a palindrome
function isPalindrome(str) {
  // Base case: if the string is empty or has one character, it's a palindrome
  if (str.length <= 1) {
    return true;
  }
  // Check if the first and last characters are the same
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  // Recursive case: check the substring without the first and last characters
  return isPalindrome(str.slice(1, str.length - 1));
}

// Test cases
console.log(`'racecar' is a palindrome: ${isPalindrome("racecar")}`); // Output: true
console.log(`'hello' is a palindrome: ${isPalindrome("hello")}`); // Output: false
console.log(`'madam' is a palindrome: ${isPalindrome("madam")}`); // Output: true
```

### Explanation

#### Reversing a String:

- **Base Case**: If the string is empty, return an empty string. This stops the recursion.
- **Recursive Case**: Call the function with the rest of the string (`str.slice(1)`) and add the first character (`str[0]`) to the end of the result.

#### Checking if a String is a Palindrome:

- **Base Case**: If the string is empty or has only one character, it is a palindrome.
- **Recursive Case**: Compare the first and last characters of the string. If they are the same, call the function with the substring without the first and last characters (`str.slice(1, str.length - 1)`).

These examples demonstrate how to manipulate strings using recursion in JavaScript.

Sure, let's complete the tasks.

### Task 1: Recursive Function to Reverse a String

```javascript
// Recursive function to reverse a string
function reverseString(str) {
  // Base case: if the string is empty, return an empty string
  if (str === "") {
    return "";
  }
  // Recursive case: take the first character and add it to the reversed rest of the string
  return reverseString(str.slice(1)) + str[0];
}

// Test cases
console.log(`Reversed 'hello': ${reverseString("hello")}`); // Output: 'olleh'
console.log(`Reversed 'world': ${reverseString("world")}`); // Output: 'dlrow'
console.log(`Reversed 'recursion': ${reverseString("recursion")}`); // Output: 'noisrucer'
console.log(`Reversed 'JavaScript': ${reverseString("JavaScript")}`); // Output: 'tpircSavaJ'
```

### Task 2: Recursive Function to Check if a String is a Palindrome

```javascript
// Recursive function to check if a string is a palindrome
function isPalindrome(str) {
  // Base case: if the string is empty or has one character, it's a palindrome
  if (str.length <= 1) {
    return true;
  }
  // Check if the first and last characters are the same
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  // Recursive case: check the substring without the first and last characters
  return isPalindrome(str.slice(1, str.length - 1));
}

// Test cases
console.log(`'racecar' is a palindrome: ${isPalindrome("racecar")}`); // Output: true
console.log(`'hello' is a palindrome: ${isPalindrome("hello")}`); // Output: false
console.log(`'madam' is a palindrome: ${isPalindrome("madam")}`); // Output: true
console.log(`'level' is a palindrome: ${isPalindrome("level")}`); // Output: true
console.log(`'javascript' is a palindrome: ${isPalindrome("javascript")}`); // Output: false
```

### Explanation

#### Reversing a String:

- **Base Case**: If the string is empty, return an empty string. This stops the recursion.
- **Recursive Case**: Call the function with the rest of the string (`str.slice(1)`) and add the first character (`str[0]`) to the end of the result.

#### Checking if a String is a Palindrome:

- **Base Case**: If the string is empty or has only one character, it is a palindrome.
- **Recursive Case**: Compare the first and last characters of the string. If they are the same, call the function with the substring without the first and last characters (`str.slice(1, str.length - 1)`).

These scripts demonstrate how to reverse a string and check for palindromes using recursion in JavaScript.

---

## Recursive Search in JavaScript

### Recursive Search in JavaScript

Recursive search involves using recursion to traverse and search through data structures, such as arrays, trees, or objects. Recursion is particularly useful for nested data structures where iterative solutions might be complex or less intuitive.

### Example Tasks:

1. **Recursive Function to Find an Element in a Nested Array**:
   - Write a function that searches for a specific value in a nested array and returns true if found, otherwise false.
2. **Recursive Function to Find a Key in a Nested Object**:
   - Write a function that searches for a specific key in a deeply nested object and returns the value if found, otherwise returns undefined.

### Task 1: Recursive Function to Find an Element in a Nested Array

```javascript
// Recursive function to find an element in a nested array
function findElementInNestedArray(arr, target) {
  for (let element of arr) {
    // If the element is an array, recursively search within it
    if (Array.isArray(element)) {
      if (findElementInNestedArray(element, target)) {
        return true;
      }
    } else if (element === target) {
      // If the element matches the target, return true
      return true;
    }
  }
  // If the target is not found, return false
  return false;
}

// Test cases
const nestedArray = [1, [2, 3, [4, 5]], 6, [7, 8, [9, 10]]];
console.log(
  `Finding 5 in nested array: ${findElementInNestedArray(nestedArray, 5)}`
); // Output: true
console.log(
  `Finding 11 in nested array: ${findElementInNestedArray(nestedArray, 11)}`
); // Output: false
```

### Task 2: Recursive Function to Find a Key in a Nested Object

```javascript
// Recursive function to find a key in a nested object
function findKeyInNestedObject(obj, key) {
  for (let k in obj) {
    // If the key matches, return the value
    if (k === key) {
      return obj[k];
    }
    // If the value is an object, recursively search within it
    if (typeof obj[k] === "object" && obj[k] !== null) {
      const result = findKeyInNestedObject(obj[k], key);
      if (result !== undefined) {
        return result;
      }
    }
  }
  // If the key is not found, return undefined
  return undefined;
}

// Test cases
const nestedObject = {
  a: 1,
  b: { c: 2, d: { e: 3, f: { g: 4 } } },
  h: 5,
};

console.log(
  `Finding key 'g' in nested object: ${findKeyInNestedObject(
    nestedObject,
    "g"
  )}`
); // Output: 4
console.log(
  `Finding key 'z' in nested object: ${findKeyInNestedObject(
    nestedObject,
    "z"
  )}`
); // Output: undefined
```

### Explanation

#### Finding an Element in a Nested Array:

- **Iterate**: Loop through each element of the array.
- **Check for Nested Array**: If the element is an array, call the function recursively.
- **Match**: If the element matches the target, return true.
- **Base Case**: If the loop completes without finding the target, return false.

#### Finding a Key in a Nested Object:

- **Iterate**: Loop through each key in the object.
- **Match**: If the key matches, return the corresponding value.
- **Check for Nested Object**: If the value is an object, call the function recursively.
- **Base Case**: If the loop completes without finding the key, return undefined.

These examples illustrate how to use recursion to search through nested data structures in JavaScript.

### Task 1: Recursive Binary Search

Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

```javascript
// Recursive function to perform a binary search on a sorted array
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  // Base case: If the range is invalid, the target is not in the array
  if (start > end) {
    return -1;
  }

  // Calculate the middle index
  const mid = Math.floor((start + end) / 2);

  // If the middle element is the target, return its index
  if (arr[mid] === target) {
    return mid;
  }

  // If the target is less than the middle element, search in the left half
  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  }

  // If the target is greater than the middle element, search in the right half
  return binarySearch(arr, target, mid + 1, end);
}

// Test cases
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(`Index of 7: ${binarySearch(sortedArray, 7)}`); // Output: 3
console.log(`Index of 4: ${binarySearch(sortedArray, 4)}`); // Output: -1
console.log(`Index of 19: ${binarySearch(sortedArray, 19)}`); // Output: 9
```

### Task 2: Recursive Function to Count Occurrences of an Element in an Array

```javascript
// Recursive function to count the occurrences of a target element in an array
function countOccurrences(arr, target, index = 0) {
  // Base case: If the index is beyond the array length, return 0
  if (index >= arr.length) {
    return 0;
  }

  // Check if the current element matches the target
  const count = arr[index] === target ? 1 : 0;

  // Recursively count in the rest of the array and add the current count
  return count + countOccurrences(arr, target, index + 1);
}

// Test cases
const array = [1, 2, 3, 4, 2, 2, 5, 6, 2];
console.log(`Occurrences of 2: ${countOccurrences(array, 2)}`); // Output: 4
console.log(`Occurrences of 3: ${countOccurrences(array, 3)}`); // Output: 1
console.log(`Occurrences of 7: ${countOccurrences(array, 7)}`); // Output: 0
```

### Explanation

#### Binary Search

1. **Base Case**: If the starting index is greater than the ending index, the target is not found.
2. **Mid Calculation**: Calculate the middle index.
3. **Check Middle Element**: If the middle element is the target, return its index.
4. **Left Half Search**: If the target is less than the middle element, search in the left half of the array.
5. **Right Half Search**: If the target is greater than the middle element, search in the right half of the array.

#### Count Occurrences

1. **Base Case**: If the index is beyond the array length, return 0.
2. **Check Current Element**: If the current element matches the target, count it.
3. **Recursive Count**: Recursively count the occurrences in the rest of the array and add the current count.

These tasks demonstrate how recursion can be effectively used for searching and counting elements in arrays in JavaScript.

---

## Tree Traversal in JavaScript

### Tree Traversal in JavaScript

Tree traversal refers to the process of visiting all the nodes in a tree data structure. There are several ways to traverse a tree, and the common types include:

1. **In-order Traversal** (Left, Root, Right)
2. **Pre-order Traversal** (Root, Left, Right)
3. **Post-order Traversal** (Left, Right, Root)
4. **Level-order Traversal** (Breadth-First Search)

Let's go through each type with examples using a simple binary tree structure.

### Example Tree Structure

```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Creating a sample tree:
//      1
//     / \
//    2   3
//   / \   \
//  4   5   6

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
```

### In-order Traversal

In in-order traversal, we visit the left subtree first, then the root node, and finally the right subtree.

```javascript
function inOrderTraversal(node) {
  if (node === null) return;
  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}

console.log("In-order Traversal:");
inOrderTraversal(root);
// Output: 4 2 5 1 3 6
```

### Pre-order Traversal

In pre-order traversal, we visit the root node first, then the left subtree, and finally the right subtree.

```javascript
function preOrderTraversal(node) {
  if (node === null) return;
  console.log(node.value);
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
}

console.log("Pre-order Traversal:");
preOrderTraversal(root);
// Output: 1 2 4 5 3 6
```

### Post-order Traversal

In post-order traversal, we visit the left subtree first, then the right subtree, and finally the root node.

```javascript
function postOrderTraversal(node) {
  if (node === null) return;
  postOrderTraversal(node.left);
  postOrderTraversal(node.right);
  console.log(node.value);
}

console.log("Post-order Traversal:");
postOrderTraversal(root);
// Output: 4 5 2 6 3 1
```

### Level-order Traversal (Breadth-First Search)

In level-order traversal, we visit nodes level by level from left to right.

```javascript
function levelOrderTraversal(node) {
  if (node === null) return;
  const queue = [node];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current.value);
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
}

console.log("Level-order Traversal:");
levelOrderTraversal(root);
// Output: 1 2 3 4 5 6
```

### Summary

- **In-order Traversal**: Left, Root, Right
- **Pre-order Traversal**: Root, Left, Right
- **Post-order Traversal**: Left, Right, Root
- **Level-order Traversal**: Breadth-First Search (Level by Level)

Each traversal method serves different purposes and can be used based on the specific requirements of the problem at hand.

### Task 1: Recursive In-order Traversal

In-order traversal for a binary tree visits the nodes in the following order: Left subtree, Root node, Right subtree.

Here is a recursive function to perform in-order traversal and log the nodes as they are visited:

```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Creating a sample tree:
//      1
//     / \
//    2   3
//   / \   \
//  4   5   6

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

function inOrderTraversal(node) {
  if (node === null) return;
  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}

console.log("In-order Traversal:");
inOrderTraversal(root);
// Output: 4 2 5 1 3 6
```

### Task 2: Recursive Function to Calculate the Depth of a Binary Tree

The depth (or height) of a binary tree is the length of the longest path from the root node down to the farthest leaf node. Here is a recursive function to calculate the depth of a binary tree:

```javascript
function calculateDepth(node) {
  if (node === null) return 0;
  const leftDepth = calculateDepth(node.left);
  const rightDepth = calculateDepth(node.right);
  return Math.max(leftDepth, rightDepth) + 1;
}

// Test cases
const depth1 = calculateDepth(root);
console.log("Depth of the tree:", depth1); // Output: 3

const anotherRoot = new TreeNode(1);
anotherRoot.left = new TreeNode(2);
anotherRoot.left.left = new TreeNode(3);
anotherRoot.left.left.left = new TreeNode(4);

const depth2 = calculateDepth(anotherRoot);
console.log("Depth of another tree:", depth2); // Output: 4
```

### Summary

1. **In-order Traversal**:

   - Uses recursion to visit the left subtree, root node, and then the right subtree.
   - Logs the node values in in-order sequence.

2. **Calculate Depth of Binary Tree**:
   - Uses recursion to calculate the depth of left and right subtrees.
   - Returns the maximum of the depths of the two subtrees plus one (to include the current node).
   - Logs the calculated depth for test cases.

---

### Scripts:---

### Factorial and Fibonacci Script

This script includes recursive functions to calculate the factorial of a number and the nth Fibonacci number. It logs the results for a few test cases.

```javascript
// Factorial function
function factorial(n) {
  if (n < 0) return undefined; // Factorial is not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Fibonacci function
function fibonacci(n) {
  if (n < 0) return undefined; // Fibonacci is not defined for negative indices
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases for factorial
console.log("Factorial Test Cases:");
console.log(`Factorial of 5: ${factorial(5)}`); // Output: 120
console.log(`Factorial of 0: ${factorial(0)}`); // Output: 1
console.log(`Factorial of 7: ${factorial(7)}`); // Output: 5040

// Test cases for fibonacci
console.log("\nFibonacci Test Cases:");
console.log(`Fibonacci of 5: ${fibonacci(5)}`); // Output: 5
console.log(`Fibonacci of 0: ${fibonacci(0)}`); // Output: 0
console.log(`Fibonacci of 7: ${fibonacci(7)}`); // Output: 13
```

### Explanation:

1. **Factorial Function**:

   - Base cases:
     - If `n < 0`, it returns `undefined` since factorial is not defined for negative numbers.
     - If `n === 0` or `n === 1`, it returns `1` since 0! and 1! are both `1`.
   - Recursive case:
     - For `n > 1`, it returns `n * factorial(n - 1)`.

2. **Fibonacci Function**:

   - Base cases:
     - If `n < 0`, it returns `undefined` since Fibonacci is not defined for negative indices.
     - If `n === 0`, it returns `0`.
     - If `n === 1`, it returns `1`.
   - Recursive case:
     - For `n > 1`, it returns `fibonacci(n - 1) + fibonacci(n - 2)`.

3. **Test Cases**:
   - Logs the results of the factorial and Fibonacci calculations for a few values.

---

### Array Recursion Script

This script includes recursive functions to find the sum and the maximum element of an array. It logs the results for a few test cases.

```javascript
// Recursive function to find the sum of elements in an array
function arraySum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + arraySum(arr.slice(1));
}

// Recursive function to find the maximum element in an array
function arrayMax(arr) {
  if (arr.length === 1) return arr[0];
  const maxOfRest = arrayMax(arr.slice(1));
  return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

// Test cases for arraySum
console.log("Array Sum Test Cases:");
console.log(`Sum of [1, 2, 3, 4, 5]: ${arraySum([1, 2, 3, 4, 5])}`); // Output: 15
console.log(`Sum of [10, -2, 34, 7, -5]: ${arraySum([10, -2, 34, 7, -5])}`); // Output: 44
console.log(`Sum of []: ${arraySum([])}`); // Output: 0

// Test cases for arrayMax
console.log("\nArray Max Test Cases:");
console.log(`Max of [1, 2, 3, 4, 5]: ${arrayMax([1, 2, 3, 4, 5])}`); // Output: 5
console.log(`Max of [10, -2, 34, 7, -5]: ${arrayMax([10, -2, 34, 7, -5])}`); // Output: 34
console.log(`Max of [5]: ${arrayMax([5])}`); // Output: 5
```

### Explanation:

1. **arraySum Function**:

   - Base case:
     - If the array is empty (`arr.length === 0`), it returns `0`.
   - Recursive case:
     - For non-empty arrays, it returns the first element of the array (`arr[0]`) plus the sum of the remaining elements (`arraySum(arr.slice(1))`).

2. **arrayMax Function**:

   - Base case:
     - If the array contains only one element (`arr.length === 1`), it returns that element.
   - Recursive case:
     - For arrays with more than one element, it calculates the maximum of the rest of the array (`arrayMax(arr.slice(1))`) and then compares it with the first element of the array (`arr[0]`). It returns the larger of the two.

3. **Test Cases**:
   - Logs the results of the sum and maximum calculations for a few arrays.

---

### String Recursion Script

This script includes recursive functions to reverse a string and check if a string is a palindrome. It logs the results for a few test cases.

```javascript
// Recursive function to reverse a string
function reverseString(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}

// Recursive function to check if a string is a palindrome
function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}

// Test cases for reverseString
console.log("Reverse String Test Cases:");
console.log(`Reverse of 'hello': ${reverseString("hello")}`); // Output: 'olleo'
console.log(`Reverse of 'world': ${reverseString("world")}`); // Output: 'dlrow'
console.log(`Reverse of '': ${reverseString("")}`); // Output: ''

// Test cases for isPalindrome
console.log("\nPalindrome Check Test Cases:");
console.log(`Is 'madam' a palindrome? ${isPalindrome("madam")}`); // Output: true
console.log(`Is 'hello' a palindrome? ${isPalindrome("hello")}`); // Output: false
console.log(`Is 'racecar' a palindrome? ${isPalindrome("racecar")}`); // Output: true
console.log(`Is 'a' a palindrome? ${isPalindrome("a")}`); // Output: true
console.log(`Is '' a palindrome? ${isPalindrome("")}`); // Output: true
```

### Explanation:

1. **reverseString Function**:

   - Base case:
     - If the string length is less than or equal to 1 (`str.length <= 1`), it returns the string itself.
   - Recursive case:
     - For longer strings, it returns the reverse of the substring from the second character to the end (`reverseString(str.slice(1))`) and appends the first character (`str[0]`) to the end.

2. **isPalindrome Function**:

   - Base case:
     - If the string length is less than or equal to 1 (`str.length <= 1`), it returns `true` since a single character or an empty string is a palindrome.
   - If the first and last characters of the string are not equal (`str[0] !== str[str.length - 1]`), it returns `false`.
   - Recursive case:
     - For other cases, it checks the substring excluding the first and last characters (`str.slice(1, str.length - 1)`) to see if it is a palindrome.

3. **Test Cases**:
   - Logs the results of reversing strings and checking if strings are palindromes for a few test cases.

---

### Recursive Search Script

This script includes recursive functions to perform a binary search on a sorted array and to count the occurrences of a target element in an array. It logs the results for a few test cases.

```javascript
// Recursive function for binary search
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return -1; // Target not found

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) return mid; // Target found
  if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  return binarySearch(arr, target, mid + 1, end);
}

// Recursive function to count occurrences of a target element in an array
function countOccurrences(arr, target, index = 0, count = 0) {
  if (index >= arr.length) return count;

  if (arr[index] === target) count++;
  return countOccurrences(arr, target, index + 1, count);
}

// Test cases for binarySearch
console.log("Binary Search Test Cases:");
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Index of 5 in sortedArray: ${binarySearch(sortedArray, 5)}`); // Output: 4
console.log(`Index of 11 in sortedArray: ${binarySearch(sortedArray, 11)}`); // Output: -1
console.log(`Index of 1 in sortedArray: ${binarySearch(sortedArray, 1)}`); // Output: 0
console.log(`Index of 10 in sortedArray: ${binarySearch(sortedArray, 10)}`); // Output: 9

// Test cases for countOccurrences
console.log("\nCount Occurrences Test Cases:");
const arrayWithDuplicates = [1, 2, 3, 2, 4, 2, 5, 2];
console.log(
  `Occurrences of 2 in arrayWithDuplicates: ${countOccurrences(
    arrayWithDuplicates,
    2
  )}`
); // Output: 4
console.log(
  `Occurrences of 3 in arrayWithDuplicates: ${countOccurrences(
    arrayWithDuplicates,
    3
  )}`
); // Output: 1
console.log(
  `Occurrences of 6 in arrayWithDuplicates: ${countOccurrences(
    arrayWithDuplicates,
    6
  )}`
); // Output: 0
```

### Explanation:

1. **binarySearch Function**:

   - Base case:
     - If `start` is greater than `end`, it means the target is not found in the array, so it returns `-1`.
   - Recursive case:
     - It calculates the midpoint (`mid`) of the current segment of the array.
     - If the target is found at the midpoint (`arr[mid] === target`), it returns the index of the midpoint.
     - If the target is less than the midpoint value (`arr[mid] > target`), it searches in the left half of the array (`start` to `mid - 1`).
     - If the target is greater than the midpoint value, it searches in the right half of the array (`mid + 1` to `end`).

2. **countOccurrences Function**:

   - Base case:
     - If `index` is greater than or equal to the length of the array, it means the entire array has been traversed, so it returns the `count`.
   - Recursive case:
     - If the current element matches the target (`arr[index] === target`), it increments the `count`.
     - It recursively calls itself with the next index (`index + 1`) and the updated `count`.

3. **Test Cases**:
   - Logs the results of performing a binary search and counting occurrences for a few test cases.

### Tree Traversal Script

This script includes recursive functions to perform an in-order traversal of a binary tree and to calculate the depth of a binary tree. It logs the results for a few test cases.

```javascript
// Define the Node class for the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Recursive function for in-order traversal
function inOrderTraversal(node) {
  if (node === null) return;

  inOrderTraversal(node.left); // Traverse the left subtree
  console.log(node.value); // Visit the node
  inOrderTraversal(node.right); // Traverse the right subtree
}

// Recursive function to calculate the depth of a binary tree
function calculateDepth(node) {
  if (node === null) return 0;

  const leftDepth = calculateDepth(node.left);
  const rightDepth = calculateDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

// Creating a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Test cases for in-order traversal
console.log("In-order Traversal:");
inOrderTraversal(root); // Output: 4 2 5 1 6 3 7

// Test cases for depth calculation
console.log("\nTree Depth Calculation:");
console.log(`Depth of the tree: ${calculateDepth(root)}`); // Output: 3
```

### Explanation:

1. **Node Class**:

   - This class is used to create nodes for the binary tree, where each node has a value, a left child, and a right child.

2. **inOrderTraversal Function**:

   - This function performs an in-order traversal of the binary tree.
   - Base case:
     - If the current node is `null`, the function returns (ends the current recursion).
   - Recursive case:
     - First, it recursively traverses the left subtree.
     - Then, it prints the value of the current node.
     - Finally, it recursively traverses the right subtree.

3. **calculateDepth Function**:

   - This function calculates the depth of the binary tree.
   - Base case:
     - If the current node is `null`, it returns `0` (no depth).
   - Recursive case:
     - It calculates the depth of the left and right subtrees recursively.
     - It returns the greater of the two depths plus one (for the current node).

4. **Test Cases**:
   - **In-order Traversal**:
     - Logs the node values as they are visited in in-order traversal (left, root, right).
   - **Tree Depth Calculation**:
     - Logs the depth of the sample binary tree.
