// Creating a two-dimensional array (3x3 matrix)
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Initial matrix:");
console.log(matrix);
// Output:
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// Accessing elements in the two-dimensional array
console.log("Element at (0, 0):", matrix[0][0]); // Output: 1
console.log("Element at (1, 2):", matrix[1][2]); // Output: 6
console.log("Element at (2, 1):", matrix[2][1]); // Output: 8

// Adding a new row to the matrix
let newRow = [10, 11, 12];
matrix.push(newRow);

console.log("Matrix after adding a new row:");
console.log(matrix);
// Output:
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12]
// ]

// Adding a new column to the matrix
for (let i = 0; i < matrix.length; i++) {
  matrix[i].push(matrix[i].reduce((sum, value) => sum + value, 0));
}

console.log("Matrix after adding a new column (sum of each row):");
console.log(matrix);
// Output:
// [
//   [1, 2, 3, 6],
//   [4, 5, 6, 15],
//   [7, 8, 9, 24],
//   [10, 11, 12, 33]
// ]

// Iterating over the two-dimensional array
console.log("Iterating over the matrix:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`Element at (${i}, ${j}):`, matrix[i][j]);
  }
}
// Output:
// Element at (0, 0): 1
// Element at (0, 1): 2
// Element at (0, 2): 3
// Element at (0, 3): 6
// Element at (1, 0): 4
// Element at (1, 1): 5
// Element at (1, 2): 6
// Element at (1, 3): 15
// Element at (2, 0): 7
// Element at (2, 1): 8
// Element at (2, 2): 9
// Element at (2, 3): 24
// Element at (3, 0): 10
// Element at (3, 1): 11
// Element at (3, 2): 12
// Element at (3, 3): 33
