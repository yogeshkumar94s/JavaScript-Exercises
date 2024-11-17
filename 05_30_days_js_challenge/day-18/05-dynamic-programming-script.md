A script that demonstrates dynamic programming solutions for both the Fibonacci sequence and the knapsack problem:

```javascript
// Function to solve the Fibonacci sequence using dynamic programming
function fibonacci(n) {
  if (n <= 1) return n;

  // Create an array to store the Fibonacci numbers
  let dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;

  // Fill the dp array using the Fibonacci recurrence relation
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// Function to solve the knapsack problem using dynamic programming
function knapsack(weights, values, capacity) {
  const n = weights.length;
  // Create a 2D array to store the maximum values for subproblems
  let dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  // Build the dp array
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        // Option 1: Include the item
        // Option 2: Exclude the item
        dp[i][w] = Math.max(
          dp[i - 1][w],
          values[i - 1] + dp[i - 1][w - weights[i - 1]]
        );
      } else {
        // Cannot include the item
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

// Test the Fibonacci function
let n = 10;
console.log(`Fibonacci number at position ${n} is ${fibonacci(n)}`);

// Test the Knapsack function
let weights = [1, 2, 3, 8, 7, 4];
let values = [20, 5, 10, 40, 15, 25];
let capacity = 10;
console.log(
  `Maximum value in Knapsack with capacity ${capacity} is ${knapsack(
    weights,
    values,
    capacity
  )}`
);
```

### Explanation

1. **Fibonacci Sequence (Dynamic Programming)**:

   - **Function**: `fibonacci`
   - **Parameter**: `n` (position in the Fibonacci sequence).
   - **Logic**:
     - Use an array `dp` to store Fibonacci numbers up to `n`.
     - Initialize the first two values of the sequence.
     - Fill the `dp` array iteratively based on the recurrence relation `dp[i] = dp[i - 1] + dp[i - 2]`.
     - Return the value at `dp[n]`.

2. **Knapsack Problem (Dynamic Programming)**:
   - **Function**: `knapsack`
   - **Parameters**:
     - `weights`: Array of item weights.
     - `values`: Array of item values.
     - `capacity`: Maximum capacity of the knapsack.
   - **Logic**:
     - Use a 2D array `dp` where `dp[i][w]` represents the maximum value that can be obtained with the first `i` items and capacity `w`.
     - Iterate through each item and each possible capacity to fill the `dp` table.
     - Use the recurrence relation to decide whether to include or exclude each item.
     - Return the value at `dp[n][capacity]` where `n` is the number of items and `capacity` is the knapsack capacity.
