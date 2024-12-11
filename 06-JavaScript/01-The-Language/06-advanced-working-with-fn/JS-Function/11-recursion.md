### **What is Recursion in JavaScript?**

**Recursion** is a process where a function calls itself directly or indirectly to solve a problem. Each recursive call solves a smaller part of the problem, and the recursion continues until a **base case** is reached. A base case is the condition under which the recursion stops, preventing it from running infinitely.

Recursion is a powerful tool, especially for problems that can be broken down into similar sub-problems, such as tree traversal, factorials, Fibonacci numbers, and more.

---

### **How Recursion Works**

1. **Base Case**: This is the condition where the recursion stops. If this is not defined, the function will keep calling itself forever (infinite recursion).
2. **Recursive Case**: This is where the function calls itself with modified arguments that move the problem toward the base case.

### **General Structure of a Recursive Function**

```javascript
function recursiveFunction(parameters) {
  // Base case
  if (condition) {
    return value;
  }

  // Recursive case
  return recursiveFunction(modifiedParameters);
}
```

---

### **Example 1: Factorial (Recursive Function)**

The factorial of a number `n` is the product of all positive integers less than or equal to `n` (i.e., `n! = n * (n - 1) * (n - 2) * ... * 1`).

The base case for factorial is when `n = 1`, because `1! = 1`.

#### Code:

```javascript
function factorial(n) {
  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
```

In the example above:

- **Base case**: If `n` is 0 or 1, return 1.
- **Recursive case**: Multiply `n` by the result of `factorial(n - 1)`.

---

### **Example 2: Fibonacci Series**

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones (i.e., `F(n) = F(n-1) + F(n-2)`).

#### Code:

```javascript
function fibonacci(n) {
  // Base case
  if (n <= 1) {
    return n;
  }

  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5 (The Fibonacci sequence is 0, 1, 1, 2, 3, 5)
```

Here:

- **Base case**: If `n` is 0 or 1, return `n`.
- **Recursive case**: Sum the results of `fibonacci(n - 1)` and `fibonacci(n - 2)`.

---

### **Example 3: Sum of an Array (Recursive Function)**

You can use recursion to sum the elements of an array.

#### Code:

```javascript
function sumArray(arr) {
  // Base case: If the array is empty, return 0
  if (arr.length === 0) {
    return 0;
  }

  // Recursive case: Add the first element to the sum of the rest of the array
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10
```

In this example:

- **Base case**: If the array is empty, return `0`.
- **Recursive case**: Add the first element of the array to the result of `sumArray(arr.slice(1))`, which is the sum of the remaining elements.

---

### **Key Concepts of Recursion**

1. **Base Case**: Every recursive function needs a base case, which tells the function when to stop calling itself.
2. **Recursive Case**: This part of the function calls itself with modified parameters, gradually bringing the problem closer to the base case.
3. **Stack Overflow**: If the recursion doesn't reach a base case or runs for too long, it will cause a "stack overflow" error due to too many function calls piling up on the call stack.

---

### **Advantages of Recursion**

1. **Simplifies Code**: Recursion can make code more elegant and reduce the need for complex loops or state management.
2. **Breaks Down Complex Problems**: It’s helpful in problems that can be broken into similar subproblems (e.g., tree traversal, searching).
3. **Ease of Expression**: Some algorithms (like tree and graph traversal) are naturally easier to express using recursion.

---

### **Disadvantages of Recursion**

1. **Memory Usage**: Each recursive call adds a new frame to the call stack, leading to high memory usage. If recursion depth is too large, it may cause a **stack overflow**.
2. **Performance**: Recursive solutions might be less efficient than their iterative counterparts due to the overhead of function calls.
3. **Complexity**: If not carefully written, recursive functions can become hard to understand, especially with deeply nested recursion.

---

### **Tail Recursion Optimization**

JavaScript engines don't optimize recursion for tail calls (where the recursive call is the last operation in the function). This means recursion might cause stack overflow if the recursion depth is too large. However, some languages like Scheme and JavaScript (in strict mode) theoretically support **tail call optimization**, which avoids adding new frames to the stack.

---

### **Example of Tail Recursion**

In a tail-recursive function, the recursive call is the last operation of the function, and it doesn’t require maintaining the current function’s stack frame after the recursive call.

#### Tail-Recursive Factorial

```javascript
function factorialTail(n, accumulator = 1) {
  // Base case
  if (n <= 1) {
    return accumulator;
  }

  // Recursive case (tail call)
  return factorialTail(n - 1, accumulator * n);
}

console.log(factorialTail(5)); // Output: 120
```

In this version:

- The recursion is tail call optimized. The function passes the accumulated result as an argument, allowing the function to return the result immediately after the recursive call.

---

### **When to Use Recursion**

Recursion is ideal for:

- Problems that can be broken down into similar subproblems (e.g., tree traversal, searching).
- Situations where the solution involves repeatedly applying the same operation on a smaller problem (e.g., factorial, Fibonacci).
- Problems involving nested structures (e.g., parsing JSON, graph traversal).

### **Conclusion**

- **Recursion** is a powerful technique where a function calls itself to solve problems.
- It works best with problems that have a **recursive structure**, such as factorials, Fibonacci, tree traversal, etc.
- Always ensure you have a **base case** to prevent infinite recursion.

---

Here are questions about **Recursion** in JavaScript, from basic to advanced:

---

### **Basic Questions**

1. What is recursion in JavaScript? Explain the concept with a simple example.

2. Write a recursive function `factorial` that calculates the factorial of a number.  
   Example:

   ```javascript
   factorial(5); // Output: 120
   ```

3. What is the **base case** in a recursive function, and why is it important? Write an example of a recursive function that calculates the sum of numbers from 1 to `n`.

4. Write a recursive function `countdown` that logs numbers from `n` down to 1.  
   Example:

   ```javascript
   countdown(5); // Output: 5, 4, 3, 2, 1
   ```

5. How does a recursive function differ from an iterative approach? Provide an example where both approaches are used to find the sum of an array.

---

### **Intermediate Questions**

6. Write a recursive function `reverseString` that reverses a string.  
   Example:

   ```javascript
   reverseString("hello"); // Output: "olleh"
   ```

7. Explain **tail recursion** in JavaScript. Write a tail-recursive function `factorial` to calculate the factorial of a number.

8. What is the danger of **stack overflow** in recursion? Write an example where recursion might lead to a stack overflow error. How can it be prevented?

9. Write a recursive function `fibonacci` that calculates the `n`th Fibonacci number.  
   Example:

   ```javascript
   fibonacci(6); // Output: 8
   ```

10. How can recursion be used to traverse a nested object or array? Write a recursive function that sums all the numbers in a nested array.

---

## **Advanced Questions**

### 11. Write a recursive function `deepClone` that creates a deep copy of an object or array (i.e., copying all nested objects and arrays).

Here's a recursive function `deepClone` to create a deep copy of an object or array:

### **Code:**

```javascript
function deepClone(value) {
  // Check if the value is an object or array
  if (typeof value === "object" && value !== null) {
    // Handle array
    if (Array.isArray(value)) {
      return value.map((item) => deepClone(item));
    }

    // Handle object
    const clone = {};
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        clone[key] = deepClone(value[key]);
      }
    }
    return clone;
  }

  // If not an object or array, return the value (primitive types)
  return value;
}
```

---

### **Explanation:**

1. **Base Case**:

   - If the `value` is not an object (e.g., primitive types like `string`, `number`, `boolean`, or `null`), return the `value`.

2. **Recursive Case**:

   - If the `value` is an array:
     - Use `Array.map` to recursively deep clone each item.
   - If the `value` is an object:
     - Create an empty object `clone`.
     - Iterate over its properties using `for...in`.
     - Recursively call `deepClone` on each property.

3. **Handling Circular References**:
   - This implementation assumes no circular references. For circular references, you can use a `WeakMap` to track visited objects.

---

### **Usage Example:**

```javascript
const obj = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", { type: "sports", name: "soccer" }],
  address: {
    city: "Wonderland",
    zip: 12345,
  },
};

const clonedObj = deepClone(obj);

// Test deep cloning
console.log(clonedObj);
console.log(clonedObj === obj); // false (different references)
console.log(clonedObj.hobbies === obj.hobbies); // false (nested array cloned)
console.log(clonedObj.address === obj.address); // false (nested object cloned)
```

---

### **Edge Cases:**

1. **Null values**:
   - The function correctly handles `null` as it's not considered an object.
2. **Dates, Maps, and Sets**:

   - This implementation does not handle special types like `Date`, `Map`, or `Set`. Additional logic is needed to support these.

3. **Circular References**:
   - To handle circular references, you can enhance this function using a `WeakMap` to track already visited objects. Let me know if you'd like an example of that!

### 12. Explain how recursion is used in **divide and conquer** algorithms. Write a recursive function that implements **merge sort** to sort an array.

### **Recursion in Divide and Conquer Algorithms**

**Divide and Conquer** is a paradigm that breaks a problem into smaller sub-problems, solves them independently (often recursively), and combines their solutions to solve the original problem. Recursion is key to this approach because:

1. **Divide**:

   - Split the input problem into smaller, independent sub-problems.
   - Recursion naturally handles the repeated subdivision until the base case is reached.

2. **Conquer**:

   - Solve the smaller problems, typically using recursive calls.

3. **Combine**:
   - Merge the results of the solved sub-problems into a final solution.

### **Merge Sort Using Recursion**

**Merge Sort** is a classic example of the divide-and-conquer algorithm. It splits an array into halves recursively until each half contains a single element (base case). Then, it merges the sorted halves back together.

---

### **Code: Merge Sort**

```javascript
function mergeSort(arr) {
  // Base case: Arrays with 1 or 0 elements are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Step 1: Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Step 2: Recursively sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Step 3: Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  // Compare elements from both arrays and add the smaller one
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}
```

---

### **Explanation**

1. **Divide**:

   - `mergeSort` splits the input array into two halves using `slice` until arrays have at most one element (base case).

2. **Conquer**:

   - Recursively calls `mergeSort` on each half to sort them independently.

3. **Combine**:
   - Uses the `merge` function to combine the two sorted halves into a single sorted array.

---

### **Example Usage**

```javascript
const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);

console.log("Original Array:", arr);
console.log("Sorted Array:", sortedArr);
```

**Output**:

```
Original Array: [38, 27, 43, 3, 9, 82, 10]
Sorted Array: [3, 9, 10, 27, 38, 43, 82]
```

---

### **Key Points**

- **Recursion**: The function keeps dividing the array until the base case (array size ≤ 1).
- **Efficiency**: Merge Sort has a time complexity of \(O(n \log n)\) due to the recursive division and merging process.
- **Stability**: Merge Sort is a stable sorting algorithm, meaning it preserves the relative order of equal elements.

### 13. How does recursion play a role in solving problems with backtracking? Write a recursive function that finds all possible combinations of numbers that sum up to a target value.

### **Recursion and Backtracking**

**Backtracking** is a problem-solving technique that incrementally builds solutions and abandons (or backtracks) when it determines that the current solution cannot lead to a valid result. Recursion is central to backtracking because:

1. **Explore All Possibilities**:
   - Recursion allows traversal through all possible states of the solution space.
2. **Prune Invalid Paths**:
   - Recursive calls are abandoned (backtracked) when the current state does not satisfy the problem constraints.
3. **Combine Results**:
   - Recursive calls aggregate valid results or explore other branches of the solution tree.

---

### **Problem: Find All Combinations of Numbers that Sum to a Target**

#### **Steps:**

1. Use recursion to explore all combinations of numbers.
2. Use backtracking to avoid invalid paths (e.g., exceeding the target value).
3. Add valid combinations to the result list.

---

### **Code**

```javascript
function findCombinations(nums, target) {
  const result = [];

  function backtrack(start, combination, currentSum) {
    // Base case: If the sum matches the target, add the combination to the result
    if (currentSum === target) {
      result.push([...combination]);
      return;
    }

    // If the sum exceeds the target, backtrack
    if (currentSum > target) {
      return;
    }

    // Explore possibilities starting from the current index
    for (let i = start; i < nums.length; i++) {
      // Include the current number in the combination
      combination.push(nums[i]);

      // Recurse with the updated sum and combination
      backtrack(i, combination, currentSum + nums[i]);

      // Backtrack by removing the last number
      combination.pop();
    }
  }

  // Start the backtracking process
  backtrack(0, [], 0);

  return result;
}
```

---

### **Explanation**

1. **Recursive Function (`backtrack`)**:

   - **Parameters**:
     - `start`: The starting index to avoid duplicate combinations.
     - `combination`: The current list of numbers in the combination.
     - `currentSum`: The sum of the current combination.
   - If `currentSum === target`, the combination is valid, so add it to `result`.
   - If `currentSum > target`, stop further exploration (pruning).

2. **For Loop**:

   - Iterates through possible numbers starting from `start` to allow reusing numbers.

3. **Backtracking**:
   - After recursion, undo the last choice (`pop`) to explore other possibilities.

---

### **Usage Example**

```javascript
const nums = [2, 3, 6, 7];
const target = 7;

const combinations = findCombinations(nums, target);

console.log("Combinations that sum to target:", combinations);
```

**Output**:

```
Combinations that sum to target: [[2, 2, 3], [7]]
```

---

### **Key Points**

1. **Recursive Exploration**:
   - Each recursive call explores one potential combination of numbers.
2. **Pruning**:
   - Stops recursion early if the sum exceeds the target.
3. **Backtracking**:
   - After exploring a path, it reverts to a previous state to try other combinations.
4. **Reusability**:
   - Numbers can be reused because the recursion starts from the current index (`i`).

---

### 14. Write a recursive function `binarySearch` to find the index of a target value in a sorted array.

### Recursive `binarySearch` Function

**Binary Search** is a divide-and-conquer algorithm used to find the position of a target value in a sorted array. It works by repeatedly dividing the array into halves and checking the middle element.

---

### **Steps**

1. **Base Case**:

   - If the target is found, return its index.
   - If the search range becomes invalid (start > end), return `-1` (target not found).

2. **Recursive Case**:
   - Compare the middle element with the target:
     - If equal, return the middle index.
     - If the target is smaller, search the left half.
     - If the target is larger, search the right half.

---

### **Code**

```javascript
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  // Base case: Target not found
  if (start > end) {
    return -1;
  }

  // Find the middle index
  const mid = Math.floor((start + end) / 2);

  // Check if the middle element is the target
  if (arr[mid] === target) {
    return mid;
  }

  // If the target is smaller, search the left half
  if (target < arr[mid]) {
    return binarySearch(arr, target, start, mid - 1);
  }

  // If the target is larger, search the right half
  return binarySearch(arr, target, mid + 1, end);
}
```

---

### **Example Usage**

```javascript
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;

const index = binarySearch(sortedArray, target);

console.log(`Index of ${target}:`, index);
```

**Output**:

```
Index of 7: 3
```

---

### **Explanation**

1. **Divide**:
   - The array is divided into two halves using the middle index.
2. **Conquer**:
   - Recursively call `binarySearch` on the appropriate half until the target is found or the range is invalid.
3. **Base Case**:
   - Ends when the target is found or when `start > end`.

---

### **Edge Cases**

1. **Target Not Found**:
   ```javascript
   console.log(binarySearch([1, 2, 3], 10)); // Output: -1
   ```
2. **Empty Array**:
   ```javascript
   console.log(binarySearch([], 5)); // Output: -1
   ```
3. **Single Element Array**:
   ```javascript
   console.log(binarySearch([5], 5)); // Output: 0
   console.log(binarySearch([5], 10)); // Output: -1
   ```

---

### **Time Complexity**

- **Best Case**: \( O(1) \) (target is the middle element).
- **Average/Worst Case**: \( O(\log n) \) (halves the search space on each recursive call).

---

### 15. How can recursion be used to solve problems involving tree data structures? Write a recursive function to find the depth of a binary tree.

### Using Recursion for Tree Data Structures

Recursion is a natural fit for problems involving tree data structures because tree operations often involve processing a node and then recursively processing its children. Each recursive call can handle a subtree, making it easier to manage the hierarchical structure.

### **Problem: Find the Depth of a Binary Tree**

The depth (or height) of a binary tree is the number of edges from the root to the deepest leaf. To find the depth recursively:

1. **Base Case**:

   - If the node is `null`, return `0` (an empty tree has a depth of 0).

2. **Recursive Case**:
   - Recursively find the depth of the left and right subtrees.
   - The depth of the tree rooted at the current node is `1 + max(leftDepth, rightDepth)`.

### **Code**

```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findDepth(root) {
  // Base case: If the tree is empty, return 0
  if (root === null) {
    return 0;
  }

  // Recursively find the depth of the left and right subtrees
  const leftDepth = findDepth(root.left);
  const rightDepth = findDepth(root.right);

  // The depth of the tree is 1 plus the greater of the two subtree depths
  return 1 + Math.max(leftDepth, rightDepth);
}
```

### **Example Usage**

```javascript
// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Find the depth of the binary tree
const depth = findDepth(root);

console.log("Depth of the binary tree:", depth);
```

**Output**:

```
Depth of the binary tree: 3
```

### **Explanation**

1. **TreeNode Class**:

   - A simple class to represent each node in the binary tree, with `value`, `left`, and `right` properties.

2. **findDepth Function**:
   - **Base Case**:
     - If `root` is `null`, the function returns `0`.
   - **Recursive Case**:
     - The function calls itself for the left and right children of the current node.
     - It computes the depth as `1 + Math.max(leftDepth, rightDepth)`.

### **Edge Cases**

1. **Empty Tree**:

   ```javascript
   console.log(findDepth(null)); // Output: 0
   ```

2. **Single Node Tree**:

   ```javascript
   const singleNode = new TreeNode(1);
   console.log(findDepth(singleNode)); // Output: 1
   ```

3. **Tree with One Child**:
   ```javascript
   const oneChild = new TreeNode(1);
   oneChild.left = new TreeNode(2);
   console.log(findDepth(oneChild)); // Output: 2
   ```

### **Time Complexity**

- The time complexity is \( O(n) \), where \( n \) is the number of nodes in the tree, since each node is visited exactly once.

### **Space Complexity**

- The space complexity is \( O(h) \), where \( h \) is the height of the tree, due to the recursion stack.

---

Recursion simplifies many tree-based problems by allowing you to focus on a single node and its children at each step. This approach is particularly effective for operations like traversal, depth calculation, and checking properties of the tree.

### 16. Can recursion be used to solve problems related to dynamic programming? Write a recursive function to compute the nth number in the **tribonacci sequence** (where each number is the sum of the previous three numbers).

### Using Recursion for Dynamic Programming Problems

Recursion is a core technique for solving many dynamic programming problems. It breaks a problem into smaller overlapping subproblems and solves them recursively. To optimize recursion, we often use **memoization** to store the results of previously solved subproblems, avoiding redundant computations.

---

### **Problem: Tribonacci Sequence**

The Tribonacci sequence is defined as:

- \( T(0) = 0 \)
- \( T(1) = 1 \)
- \( T(2) = 1 \)
- \( T(n) = T(n-1) + T(n-2) + T(n-3) \) for \( n > 2 \)

We aim to compute the \( n \)-th Tribonacci number efficiently using recursion with memoization.

---

### **Code**

```javascript
function tribonacci(n, memo = {}) {
  // Base cases
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  // Check if the result is already computed
  if (memo[n] !== undefined) {
    return memo[n];
  }

  // Recursive computation with memoization
  memo[n] =
    tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
  return memo[n];
}
```

---

### **Example Usage**

```javascript
console.log(tribonacci(4)); // Output: 4
console.log(tribonacci(10)); // Output: 149
console.log(tribonacci(25)); // Output: 1389537
```

---

### **Explanation**

1. **Base Cases**:

   - \( T(0) = 0 \), \( T(1) = 1 \), \( T(2) = 1 \) are directly returned for \( n = 0, 1, 2 \).

2. **Recursive Case**:

   - The function recursively computes \( T(n-1) + T(n-2) + T(n-3) \).

3. **Memoization**:
   - A `memo` object stores previously computed results. Before making a recursive call, the function checks if the result is already in `memo`.

---

### **Advantages of Memoization**

- **Avoids Repeated Work**:
  - Without memoization, the function would recompute the same values multiple times, leading to exponential time complexity.
- **Efficient**:
  - Memoization reduces the time complexity to \( O(n) \), as each value is computed only once.

---

### **Without Memoization**

The naive recursive solution (without memoization) would look like this:

```javascript
function tribonacciNaive(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  return (
    tribonacciNaive(n - 1) + tribonacciNaive(n - 2) + tribonacciNaive(n - 3)
  );
}
```

However, this solution has **exponential time complexity** (\( O(3^n) \)), making it impractical for larger \( n \).

---

### **Testing Edge Cases**

```javascript
console.log(tribonacci(0)); // Output: 0
console.log(tribonacci(1)); // Output: 1
console.log(tribonacci(2)); // Output: 1
console.log(tribonacci(3)); // Output: 2
console.log(tribonacci(35)); // Output: 615693474
```

---

### **Dynamic Programming Iterative Solution**

For better space efficiency (\( O(1) \)), we can also compute the Tribonacci sequence iteratively:

```javascript
function tribonacciIterative(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let a = 0,
    b = 1,
    c = 1;
  for (let i = 3; i <= n; i++) {
    const temp = a + b + c;
    a = b;
    b = c;
    c = temp;
  }
  return c;
}
```

This avoids the recursion stack and is faster for very large \( n \).

---

### 17. Write a recursive function `flattenArray` that flattens a deeply nested array into a single-level array.

    Example:

```javascript
flattenArray([1, [2, 3], [4, [5, 6]]]); // Output: [1, 2, 3, 4, 5, 6]
```

Here’s how you can write a recursive function `flattenArray` to flatten a deeply nested array into a single-level array:

### **Code**

```javascript
function flattenArray(arr) {
  // Base case: if the array is empty, return an empty array
  if (arr.length === 0) {
    return [];
  }

  // Recursive case
  return arr.reduce((flattened, item) => {
    if (Array.isArray(item)) {
      // If the item is an array, recursively flatten it
      return flattened.concat(flattenArray(item));
    } else {
      // If the item is not an array, add it directly
      return flattened.concat(item);
    }
  }, []);
}
```

---

### **Example Usage**

```javascript
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattened = flattenArray(nestedArray);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]
```

---

### **Explanation**

1. **Base Case**:

   - If the input array is empty, return an empty array `[]`.

2. **Recursive Case**:

   - Use `Array.prototype.reduce` to iterate through the elements of the array.
   - For each element:
     - If it’s an array, recursively flatten it by calling `flattenArray` on it.
     - If it’s not an array, append it to the result.

3. **Combine Results**:
   - Use `Array.prototype.concat` to merge the flattened results into a single array.

---

### **Edge Cases**

```javascript
console.log(flattenArray([])); // Output: []
console.log(flattenArray([1, 2, 3])); // Output: [1, 2, 3]
console.log(flattenArray([[[[[[1]]]]]])); // Output: [1]
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]
```

### 18. What is **memoization**, and how can it optimize recursive functions? Write a recursive function for computing Fibonacci numbers using memoization.

### **What is Memoization?**

Memoization is an optimization technique used to improve the performance of recursive functions. It involves storing the results of expensive function calls and returning the cached result when the same inputs occur again. This prevents redundant calculations and significantly reduces time complexity.

---

### **How Memoization Optimizes Recursive Functions**

1. **Avoids Repeated Work**:
   - Instead of recalculating the result for the same input multiple times, memoization retrieves it from a cache.
2. **Improves Efficiency**:
   - For problems like Fibonacci numbers, which involve overlapping subproblems, memoization reduces the exponential time complexity \( O(2^n) \) to linear \( O(n) \).

---

### **Recursive Fibonacci with Memoization**

Here’s how to compute Fibonacci numbers using memoization:

#### **Code**

```javascript
function fibonacci(n, memo = {}) {
  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Check if the result is already in the memo
  if (memo[n] !== undefined) {
    return memo[n];
  }

  // Compute the result and store it in the memo
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}
```

---

### **Example Usage**

```javascript
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(20)); // Output: 6765
```

---

### **How It Works**

1. **Base Cases**:

   - For \( n = 0 \) and \( n = 1 \), return \( 0 \) and \( 1 \) respectively.

2. **Memo Lookup**:

   - Before making a recursive call, check if the value for \( n \) is already stored in `memo`.

3. **Recursive Calculation**:
   - If not cached, calculate \( fibonacci(n - 1) + fibonacci(n - 2) \) and store the result in `memo`.

---

### **Advantages of Memoization**

1. **Reduces Time Complexity**:

   - Without memoization, the naive recursive Fibonacci function has exponential complexity \( O(2^n) \).
   - With memoization, the complexity reduces to \( O(n) \), as each value is computed only once.

2. **Saves Computation**:
   - Prevents recomputing results for the same inputs.

---

### **Comparison with Naive Recursion**

#### **Naive Recursive Fibonacci**

```javascript
function fibonacciNaive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacciNaive(n - 1) + fibonacciNaive(n - 2);
}
```

For large \( n \), this function is slow because it repeatedly calculates the same subproblems.

---

### **Testing Performance**

```javascript
console.time("Naive Fibonacci");
fibonacciNaive(40); // Takes a long time
console.timeEnd("Naive Fibonacci");

console.time("Memoized Fibonacci");
fibonacci(40); // Much faster
console.timeEnd("Memoized Fibonacci");
```

Memoization makes recursive solutions efficient and practical for real-world problems.

### 19. Write a recursive function `power` that calculates the result of a number raised to a power (e.g., `x^n`).

Here's a recursive function `power` that calculates the result of \( x^n \) (x raised to the power n):

---

### **Code**

```javascript
function power(base, exponent) {
  // Base case: any number raised to the power of 0 is 1
  if (exponent === 0) {
    return 1;
  }

  // Recursive case: multiply the base with the result of base^(exponent - 1)
  return base * power(base, exponent - 1);
}
```

---

### **Example Usage**

```javascript
console.log(power(2, 0)); // Output: 1
console.log(power(2, 3)); // Output: 8 (2 * 2 * 2)
console.log(power(5, 4)); // Output: 625 (5 * 5 * 5 * 5)
console.log(power(3, 2)); // Output: 9 (3 * 3)
```

---

### **How It Works**

1. **Base Case**:

   - When \( n = 0 \), return 1. This is because any number raised to the power of 0 equals 1.

2. **Recursive Case**:

   - Multiply the base by the result of calling `power` with the same base and \( n-1 \) as the exponent.

3. **Example Walkthrough** for `power(2, 3)`:

   - \( power(2, 3) \) = \( 2 \times power(2, 2) \)
   - \( power(2, 2) \) = \( 2 \times power(2, 1) \)
   - \( power(2, 1) \) = \( 2 \times power(2, 0) \)
   - \( power(2, 0) \) = \( 1 \) (base case)

   Multiply the results as the recursion unwinds:

   - \( 2 \times 1 = 2 \)
   - \( 2 \times 2 = 4 \)
   - \( 2 \times 4 = 8 \)

---

### **Edge Cases**

1. Negative Exponent:

   - This implementation does not handle negative exponents. To support them, you can modify the function to compute the reciprocal:

   ```javascript
   if (exponent < 0) {
     return 1 / power(base, -exponent);
   }
   ```

2. Zero Base:
   - For \( base = 0 \) and \( exponent = 0 \), mathematically it's undefined, but usually, \( 0^0 = 1 \) is returned in programming.

---

### **Optimized Recursive Version (Exponentiation by Squaring)**

For larger exponents, you can optimize the function using exponentiation by squaring, which reduces the number of recursive calls:

```javascript
function power(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent % 2 === 0) {
    const half = power(base, exponent / 2);
    return half * half;
  } else {
    return base * power(base, exponent - 1);
  }
}
```

### 20. Explain the concept of **recursion depth** and how it can impact performance. Write a recursive function to print all permutations of a string and discuss the time complexity.

### **What is Recursion Depth?**

Recursion depth refers to the number of nested recursive calls made before reaching a base case. It represents the "height" of the call stack at the deepest level of recursion.

- **Impact on Performance**:
  - **Memory Usage**: Each recursive call consumes stack memory to store the function's state. Deep recursion can lead to a stack overflow if the recursion depth exceeds the system's stack size.
  - **Time Complexity**: For each recursive call, computational overhead is introduced, and excessive depth can significantly impact execution time.

---

### **Recursive Function to Print Permutations of a String**

Here’s a function that prints all permutations of a given string using recursion:

#### **Code**

```javascript
function getPermutations(str, prefix = "") {
  // Base case: when the string is empty, print the prefix
  if (str.length === 0) {
    console.log(prefix);
    return;
  }

  // Recursive case: iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    const remaining = str.slice(0, i) + str.slice(i + 1);
    getPermutations(remaining, prefix + str[i]);
  }
}
```

---

### **Example Usage**

```javascript
getPermutations("abc");
```

#### **Output**:

```
abc
acb
bac
bca
cab
cba
```

---

### **Explanation**

1. **Base Case**:

   - When the input string `str` is empty, the current prefix contains a complete permutation, so it is printed.

2. **Recursive Case**:

   - For each character in the string:
     - Remove the character from the string (to avoid reusing it).
     - Add the character to the `prefix`.
     - Recursively call the function with the updated `str` and `prefix`.

3. **Process** for `"abc"`:
   - Prefix: `""`, Remaining: `"abc"`.
   - First call: `prefix = "a"`, Remaining: `"bc"`.
   - Second call: `prefix = "ab"`, Remaining: `"c"`.
   - Third call: `prefix = "abc"`, Remaining: `""` → Prints `"abc"`.
   - The function backtracks and explores other combinations.

---

### **Time Complexity**

The function generates all possible permutations of the string, which means \( n! \) permutations for a string of length \( n \). For each permutation, there are \( O(n) \) recursive calls, making the total complexity:

- **Time Complexity**: \( O(n \times n!) \).

### **Space Complexity**

- **Call Stack**: The depth of the recursion is proportional to the length of the string, so the space complexity is \( O(n) \).

---

### **Recursion Depth and Performance**

1. **For Small Strings**:

   - Permutations of strings with fewer than 8-10 characters are manageable, as the recursion depth is limited and \( n! \) grows moderately.

2. **For Large Strings**:
   - Strings with more than 10 characters result in very deep recursion and high \( n! \) permutations, leading to potential **stack overflow** and exponential time consumption.

---

### **Optimized Iterative Solution**

To handle larger strings, you can use an iterative algorithm like Heap's Algorithm to generate permutations without recursion.
