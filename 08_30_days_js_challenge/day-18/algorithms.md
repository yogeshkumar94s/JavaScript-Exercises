# Algorithms in JavaScript

## Sorting Algorithms

Sorting algorithms are fundamental in computer science and essential for organizing data. Here are a few common sorting algorithms implemented in JavaScript, along with brief explanations:

### 1. Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

```javascript
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort(array));
```

### 2. Selection Sort

Selection Sort is an in-place comparison sorting algorithm. It divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items. Initially, the sorted sublist is empty, and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element, and moving the sublist boundaries one element to the right.

```javascript
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in the unsorted part of the array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found minimum element with the first element of the unsorted part
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

array = [64, 25, 12, 22, 11];
console.log("Selection Sort:", selectionSort(array));
```

### 3. Insertion Sort

Insertion Sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

```javascript
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

array = [12, 11, 13, 5, 6];
console.log("Insertion Sort:", insertionSort(array));
```

### 4. Merge Sort

Merge Sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm. Most implementations produce a stable sort, meaning that the order of equal elements is the same in the input and output. Merge Sort is a recursive algorithm that continuously splits the array in half until it cannot be further divided (each subarray has only one element), then merges those subarrays to produce a sorted array.

```javascript
function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

array = [38, 27, 43, 3, 9, 82, 10];
console.log("Merge Sort:", mergeSort(array));
```

### 5. Quick Sort

Quick Sort is an efficient sorting algorithm, serving as a systematic method for placing the elements of an array in order. Developed by Tony Hoare in 1959 and published in 1961, it is still a commonly used algorithm for sorting. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.

```javascript
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [],
    right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

array = [10, 7, 8, 9, 1, 5];
console.log("Quick Sort:", quickSort(array));
```

Here are the implementations for the Bubble Sort, Selection Sort, and Quicksort algorithms to sort an array of numbers in ascending order:

### Task 1: Implement Bubble Sort

```javascript
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let array1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort(array1));
```

### Task 2: Implement Selection Sort

```javascript
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in the unsorted part of the array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found minimum element with the first element of the unsorted part
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

let array2 = [64, 25, 12, 22, 11];
console.log("Selection Sort:", selectionSort(array2));
```

### Task 3: Implement Quicksort

```javascript
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [],
    right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

let array3 = [10, 7, 8, 9, 1, 5];
console.log("Quicksort:", quickSort(array3));
```

---

## Searching Algorithms

Searching algorithms are fundamental for finding elements within data structures. Here are two basic searching algorithms: Linear Search and Binary Search.

### Linear Search

Linear search is the simplest search algorithm. It checks each element of the list sequentially until the desired element is found or the list ends.

### Task: Implement Linear Search

```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index of the target element
    }
  }
  return -1; // Return -1 if the target element is not found
}

let array1 = [2, 3, 4, 10, 40];
let target1 = 10;
console.log("Linear Search:", linearSearch(array1, target1)); // Output: 3
```

### Binary Search

Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

### Task: Implement Binary Search

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Check if target is present at mid
    if (arr[mid] === target) {
      return mid; // Return the index of the target element
    }

    // If target greater, ignore left half
    if (arr[mid] < target) {
      left = mid + 1;
    }
    // If target is smaller, ignore right half
    else {
      right = mid - 1;
    }
  }

  return -1; // Return -1 if the target element is not found
}

let array2 = [2, 3, 4, 10, 40];
let target2 = 10;
console.log("Binary Search:", binarySearch(array2, target2)); // Output: 3
```

### Summary

- **Linear Search**: Checks each element until it finds the target. Useful for unsorted or small arrays.
- **Binary Search**: Efficiently finds an element in a sorted array by repeatedly dividing the search interval in half. Useful for larger, sorted arrays.

### Task 1: Implement Linear Search Algorithm

Linear search checks each element of the list sequentially until the desired element is found or the list ends.

```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index of the target element
    }
  }
  return -1; // Return -1 if the target element is not found
}

let array1 = [5, 3, 8, 4, 2];
let target1 = 4;
console.log("Linear Search Index:", linearSearch(array1, target1)); // Output: 3
```

### Task 2: Implement Binary Search Algorithm

Binary search efficiently finds an element in a sorted array by repeatedly dividing the search interval in half.

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index of the target element
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Return -1 if the target element is not found
}

let array2 = [2, 3, 4, 10, 40];
let target2 = 10;
console.log("Binary Search Index:", binarySearch(array2, target2)); // Output: 3
```

### Summary

- **Linear Search**:

  - Time Complexity: O(n)
  - Suitable for unsorted or small arrays
  - Checks each element until it finds the target

- **Binary Search**:
  - Time Complexity: O(log n)
  - Suitable for larger, sorted arrays
  - Efficiently narrows down the search interval in a sorted list

---

## String Algorithms

### Brief Overview of String Algorithms in JavaScript

String algorithms are methods used to process and manipulate strings. Some common operations include searching, pattern matching, and transforming strings. Below are some key concepts and tasks to help you get started.

### Key Concepts

1. **String Searching**: Finding a substring within a string.
2. **Pattern Matching**: Using regular expressions to find patterns in strings.
3. **String Manipulation**: Transforming strings, such as reversing or replacing parts of a string.

### Tasks

1. **Search for a Substring**: Implement an algorithm to find a substring within a string.
2. **Pattern Matching with Regular Expressions**: Use regular expressions to match patterns in strings.
3. **String Manipulation**: Implement algorithms to reverse a string and replace characters in a string.

### Task 1: Search for a Substring

Implement an algorithm to find a substring within a string using the `indexOf` method.

```javascript
function searchSubstring(str, substring) {
  const index = str.indexOf(substring);
  return index;
}

let str1 = "Hello, world!";
let substring1 = "world";
console.log("Substring Index:", searchSubstring(str1, substring1)); // Output: 7
```

### Task 2: Pattern Matching with Regular Expressions

Use regular expressions to match patterns in strings.

```javascript
function matchPattern(str, pattern) {
  const regex = new RegExp(pattern);
  const match = str.match(regex);
  return match;
}

let str2 = "The quick brown fox jumps over the lazy dog.";
let pattern1 = "\\b\\w{5}\\b"; // Matches any word with exactly 5 letters
console.log("Pattern Match:", matchPattern(str2, pattern1)); // Output: [ 'quick', 'brown' ]
```

### Task 3: String Manipulation

1. **Reverse a String**: Implement a function to reverse a string.

```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

let str3 = "Hello, world!";
console.log("Reversed String:", reverseString(str3)); // Output: !dlrow ,olleH
```

2. **Replace Characters in a String**: Implement a function to replace characters in a string.

```javascript
function replaceCharacters(str, target, replacement) {
  return str.split(target).join(replacement);
}

let str4 = "Hello, world!";
let targetChar = "o";
let replacementChar = "0";
console.log(
  "Replaced String:",
  replaceCharacters(str4, targetChar, replacementChar)
); // Output: Hell0, w0rld!
```

### Summary

- **String Searching**: Use methods like `indexOf` to find substrings.
- **Pattern Matching**: Use regular expressions to match patterns within strings.
- **String Manipulation**: Reverse strings and replace characters using string methods.

### Task 1: Count Character Occurrences

Here's a function to count the occurrences of each character in a string and log the character counts:

```javascript
function countCharacterOccurrences(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

let str1 = "Hello, world!";
console.log("Character Counts:", countCharacterOccurrences(str1));
// Output: { H: 1, e: 1, l: 3, o: 2, ',': 1, ' ': 1, w: 1, r: 1, d: 1, '!': 1 }
```

### Task 2: Find Longest Substring Without Repeating Characters

Here's a function to find the longest substring without repeating characters and log the length of the substring:

```javascript
function longestSubstringWithoutRepeatingCharacters(str) {
  let maxLength = 0;
  let currentSubstring = "";
  let charIndexMap = new Map();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charIndexMap.has(char)) {
      i = charIndexMap.get(char);
      charIndexMap.clear();
      currentSubstring = "";
    } else {
      currentSubstring += char;
      charIndexMap.set(char, i);
      maxLength = Math.max(maxLength, currentSubstring.length);
    }
  }

  return maxLength;
}

let str2 = "abcabcbb";
console.log(
  "Length of Longest Substring Without Repeating Characters:",
  longestSubstringWithoutRepeatingCharacters(str2)
);
// Output: 3 (substring is "abc")
```

### Summary

1. **Count Character Occurrences**: The function iterates through the string and counts each character's occurrences using an object.
2. **Find Longest Substring Without Repeating Characters**: The function uses a sliding window approach with a map to keep track of characters and their indices, ensuring the longest substring without repeating characters is found.

---

## Array Algorithms

### Array Algorithms in JavaScript

Array algorithms involve various operations that can be performed on arrays, such as searching, sorting, transforming, and more. Here are a few fundamental array algorithms:

1. **Finding the maximum and minimum elements**
2. **Reversing an array**
3. **Merging two sorted arrays**
4. **Removing duplicates from an array**

### Task 1: Find the Maximum and Minimum Elements in an Array

```javascript
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Max:", findMax(array1)); // Output: 9
console.log("Min:", findMin(array1)); // Output: 1
```

### Task 2: Reverse an Array

```javascript
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

const array2 = [1, 2, 3, 4, 5];
console.log("Reversed Array:", reverseArray(array2)); // Output: [5, 4, 3, 2, 1]
```

### Task 3: Merge Two Sorted Arrays

```javascript
function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];
console.log(
  "Merged Sorted Arrays:",
  mergeSortedArrays(sortedArray1, sortedArray2)
); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

### Task 4: Remove Duplicates from an Array

```javascript
function removeDuplicates(arr) {
  const unique = [];
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      unique.push(arr[i]);
      seen[arr[i]] = true;
    }
  }

  return unique;
}

const array3 = [1, 2, 2, 3, 4, 4, 5];
console.log("Array without Duplicates:", removeDuplicates(array3)); // Output: [1, 2, 3, 4, 5]
```

### Summary

1. **Finding Maximum and Minimum Elements**: These functions iterate through the array to find the largest and smallest elements.
2. **Reversing an Array**: This function iterates from the end of the array to the beginning, collecting elements in reverse order.
3. **Merging Two Sorted Arrays**: This function merges two sorted arrays into one sorted array by comparing elements from both arrays.
4. **Removing Duplicates**: This function iterates through the array and uses an object to keep track of seen elements, ensuring only unique elements are added to the result.

### Array Algorithms in JavaScript

### Task 1: Rotate an Array by k Positions

To rotate an array by `k` positions, you can slice the array and concatenate the parts in the desired order. Here's a function to achieve that:

```javascript
function rotateArray(arr, k) {
  // Ensure k is within the bounds of the array length
  k = k % arr.length;
  if (k < 0) k += arr.length;

  // Slice and concatenate the array
  const rotated = arr.slice(-k).concat(arr.slice(0, -k));
  return rotated;
}

const array1 = [1, 2, 3, 4, 5];
const k = 2;
console.log("Rotated Array:", rotateArray(array1, k)); // Output: [4, 5, 1, 2, 3]
```

### Task 2: Merge Two Sorted Arrays into One Sorted Array

To merge two sorted arrays into one sorted array, you can use a two-pointer technique to compare elements from both arrays and build the merged array. Here's how to do it:

```javascript
function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];
console.log(
  "Merged Sorted Arrays:",
  mergeSortedArrays(sortedArray1, sortedArray2)
); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

### Summary

1. **Rotating an Array by k Positions**: This function uses array slicing and concatenation to achieve the rotation. It ensures the value of `k` is within the bounds of the array length and handles negative values of `k`.

2. **Merging Two Sorted Arrays**: This function uses a two-pointer technique to efficiently merge two sorted arrays into one sorted array. It handles the case where one array might have remaining elements after the other array is exhausted.

---

## Dynamic Programming

### Introduction to Dynamic Programming in JavaScript

Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler subproblems. It is applicable when the problem has overlapping subproblems and optimal substructure properties.

1. **Overlapping Subproblems**: The problem can be broken down into subproblems which are reused several times.
2. **Optimal Substructure**: The optimal solution to the problem can be constructed from the optimal solutions of its subproblems.

### Key Concepts

- **Memoization**: Storing the results of expensive function calls and reusing them when the same inputs occur again.
- **Tabulation**: Using a bottom-up approach to solve the subproblems first and use their solutions to build up the solution to the original problem.

### Example Problems and Solutions

#### 1. Fibonacci Sequence

The Fibonacci sequence is a classic example of overlapping subproblems. Let's look at both the memoization and tabulation approaches.

##### Memoization

```javascript
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(10)); // Output: 55
```

##### Tabulation

```javascript
function fib(n) {
  if (n <= 1) return n;
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(fib(10)); // Output: 55
```

#### 2. Longest Common Subsequence (LCS)

Given two sequences, find the length of their longest common subsequence.

##### Memoization

```javascript
function lcs(str1, str2, m = str1.length, n = str2.length, memo = {}) {
  if (m === 0 || n === 0) return 0;
  if (memo[`${m},${n}`]) return memo[`${m},${n}`];

  if (str1[m - 1] === str2[n - 1]) {
    memo[`${m},${n}`] = 1 + lcs(str1, str2, m - 1, n - 1, memo);
  } else {
    memo[`${m},${n}`] = Math.max(
      lcs(str1, str2, m, n - 1, memo),
      lcs(str1, str2, m - 1, n, memo)
    );
  }
  return memo[`${m},${n}`];
}

console.log(lcs("abcde", "ace")); // Output: 3 ("ace")
```

##### Tabulation

```javascript
function lcs(str1, str2) {
  let m = str1.length,
    n = str2.length;
  let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(lcs("abcde", "ace")); // Output: 3 ("ace")
```

#### 3. Knapsack Problem

Given weights and values of `n` items, put these items in a knapsack of capacity `W` to get the maximum total value in the knapsack.

##### Memoization

```javascript
function knapSack(W, wt, val, n, memo = {}) {
  if (n === 0 || W === 0) return 0;
  if (memo[`${n},${W}`]) return memo[`${n},${W}`];

  if (wt[n - 1] > W) {
    memo[`${n},${W}`] = knapSack(W, wt, val, n - 1, memo);
  } else {
    memo[`${n},${W}`] = Math.max(
      val[n - 1] + knapSack(W - wt[n - 1], wt, val, n - 1, memo),
      knapSack(W, wt, val, n - 1, memo)
    );
  }

  return memo[`${n},${W}`];
}

const val = [60, 100, 120];
const wt = [10, 20, 30];
const W = 50;
const n = val.length;
console.log(knapSack(W, wt, val, n)); // Output: 220
```

##### Tabulation

```javascript
function knapSack(W, wt, val, n) {
  let dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (wt[i - 1] <= w) {
        dp[i][w] = Math.max(
          val[i - 1] + dp[i - 1][w - wt[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][W];
}

console.log(knapSack(W, wt, val, n)); // Output: 220
```

### Summary

- **Memoization**: Top-down approach, storing results of subproblems to avoid recomputation.
- **Tabulation**: Bottom-up approach, solving subproblems first and building up the solution.

Sure, let's complete the tasks involving Dynamic Programming for Fibonacci sequence and the Knapsack problem.

### Task 1: Fibonacci Sequence Using Dynamic Programming

We will implement the Fibonacci sequence using the tabulation (bottom-up) approach.

```javascript
function fibonacci(n) {
  if (n <= 1) return n;

  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// Log the Fibonacci numbers for first 10 numbers
for (let i = 0; i <= 10; i++) {
  console.log(`Fibonacci(${i}) = ${fibonacci(i)}`);
}
```

### Task 2: Knapsack Problem Using Dynamic Programming

We will solve the 0/1 Knapsack problem using the tabulation (bottom-up) approach.

```javascript
function knapSack(W, wt, val, n) {
  let dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (wt[i - 1] <= w) {
        dp[i][w] = Math.max(
          val[i - 1] + dp[i - 1][w - wt[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][W];
}

// Example values and weights
const val = [60, 100, 120];
const wt = [10, 20, 30];
const W = 50;
const n = val.length;

console.log(`Maximum value in Knapsack: ${knapSack(W, wt, val, n)}`); // Output: 220
```

### Explanation

- **Fibonacci Sequence**:

  - The `fibonacci` function uses a bottom-up approach to fill an array `dp` where `dp[i]` contains the `i`-th Fibonacci number.
  - It iterates from 2 to `n`, filling each `dp[i]` as the sum of the previous two Fibonacci numbers.

- **Knapsack Problem**:
  - The `knapSack` function initializes a 2D array `dp` with dimensions `(n+1) x (W+1)`, where `n` is the number of items and `W` is the capacity of the knapsack.
  - It iterates through each item and weight, updating the `dp` array based on whether including the current item offers a greater value than excluding it.
  - The maximum value that can be obtained with the given capacity is stored in `dp[n][W]`.
