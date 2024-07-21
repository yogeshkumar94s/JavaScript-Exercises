# Array creation and access

You can create an array using array literal syntax '[]' or the the 'Arrat' constructor.

1. using array literal syntax

```javascript
let fruits = ["banana", "apple", "mango"];
```

2. using Array constructor

```javascript
let fruits1 = new Array("apple", "banana", "cherry");
```

> When to use: Useful if you need to set the array length or create an empty array with a specific length.

# Accessing Array values

1. Using indexes

When you know the position of the element you want to access.

```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Output: "apple"
```

2. Using loops

When you need to iterate over all elements in the array.

'for' loop

```javascript
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

'for...of' loop

```javascript
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

3. Using Array methods

When you want to perform an operation on each element of the array.

'forEach' method:

```javascript
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit));
```

'map' method (for transforming elements)

```javascript
let numbers = [1, 2, 3, 4];
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

'filter' method (for filtering elements)

```javascript
let numbers = [1, 2, 3, 4];
let evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // Output: [2, 4]
```

# Array Methods (Basic)

1. push()

Adds one or more elements to the end of an array and returns the new length of the array.

```javascript
let fruits = ["apple", "banana"];
fruits.push("cherry"); // Adds "cherry" to the end
console.log(fruits); // Output: ["apple", "banana", "cherry"]
```

2. pop()

Removes the last element from an array and returns that element.

```javascript
let fruits = ["apple", "banana", "cherry"];
let lastFruit = fruits.pop(); // Removes "cherry"
console.log(fruits); // Output: ["apple", "banana"]
console.log(lastFruit); // Output: "cherry"
```

3. shift()

Removes the first element from an array and returns that element.

```javascript
let fruits = ["apple", "banana", "cherry"];
let firstFruit = fruits.shift(); // Removes "apple"
console.log(fruits); // Output: ["banana", "cherry"]
console.log(firstFruit); // Output: "apple"
```

4. unshift()

Adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
let fruits = ["banana", "cherry"];
fruits.unshift("apple"); // Adds "apple" to the beginning
console.log(fruits); // Output: ["apple", "banana", "cherry"]
```

5. splice()

Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```javascript
let fruits = ["apple", "banana", "cherry"];
// Removes 1 element at index 1 and adds "orange" and "grape"
fruits.splice(1, 1, "orange", "grape");
console.log(fruits); // Output: ["apple", "orange", "grape", "cherry"]
```

6. slice()

Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

```javascript
let fruits = ["apple", "banana", "cherry", "orange"];
let citrus = fruits.slice(2, 4); // Copies elements from index 2 to 3
console.log(citrus); // Output: ["cherry", "orange"]
```

7. concat()

Merges two or more arrays. This method does not change the existing arrays but returns a new array.

```javascript
let fruits = ["apple", "banana"];
let moreFruits = ["cherry", "orange"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["apple", "banana", "cherry", "orange"]
```

8. join()

Joins all elements of an array into a string.

```javascript
let fruits = ["apple", "banana", "cherry"];
let fruitString = fruits.join(", ");
console.log(fruitString); // Output: "apple, banana, cherry"
```

9. reverse()

Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

```javascript
let fruits = ["apple", "banana", "cherry"];
fruits.reverse();
console.log(fruits); // Output: ["cherry", "banana", "apple"]
```

10. sort()

Sorts the elements of an array in place and returns the sorted array.

```javascript
let fruits = ["cherry", "banana", "apple"];
fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "cherry"]
```

# Array Methods (Intermediate)

1. map()

Creates a new array populated with the results of calling a provided function on every element in the calling array.

Use Case: When you need to transform each element in an array.

```javascript
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

2. filter()

Creates a new array with all elements that pass the test implemented by the provided function.

Use Case: When you need to filter out elements based on a condition.

```javascript
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // Output: [2, 4]
```

3. reduce()

Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

Use Case: When you need to accumulate a value based on the elements of an array.

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15
```

4. find()

Returns the value of the first element in the array that satisfies the provided testing function.

Use Case: When you need to find a single element that meets a condition.

```javascript
let numbers = [1, 2, 3, 4, 5];
let firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // Output: 2
```

5. findIndex()

Returns the index of the first element in the array that satisfies the provided testing function.

Use Case: When you need the index of the element that meets a condition.

```javascript
let numbers = [1, 2, 3, 4, 5];
let firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(firstEvenIndex); // Output: 1
```

6. some()

Tests whether at least one element in the array passes the test implemented by the provided function.

Use Case: When you need to check if any elements meet a condition.

```javascript
let numbers = [1, 2, 3, 4, 5];
let hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // Output: true
```

7. every()

Tests whether all elements in the array pass the test implemented by the provided function.

Use Case: When you need to check if all elements meet a condition.

```javascript
let numbers = [1, 2, 3, 4, 5];
let allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // Output: false
```

8. flat()

Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

Use Case: When you need to flatten nested arrays.

```javascript
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattened = nestedArray.flat(2);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]
```

9. flatMap()

First maps each element using a mapping function, then flattens the result into a new array.

Use Case: When you need to map and flatten an array in one step.

```javascript
let numbers = [1, 2, 3];
let mappedAndFlattened = numbers.flatMap((num) => [num, num * 2]);
console.log(mappedAndFlattened); // Output: [1, 2, 2, 4, 3, 6]
```

# Array Iteration

1. for loop

A traditional loop that gives you complete control over the iteration process.

Use Case: When you need to perform complex operations on each iteration or need the index for operations.

```javascript
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// apple
// banana
// cherry
```

2. for...of loop

A modern loop that iterates over iterable objects (including arrays) and returns values.

Use Case: When you only need the values from the array.

```javascript
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// cherry
```

3. forEach() method

Executes a provided function once for each array element.

Use Case: When you need to execute a function for each element without needing to return a new array.

```javascript
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit));
// Output:
// apple
// banana
// cherry
```

4. some() method

Tests whether at least one element in the array passes the test implemented by the provided function.

Use Case: When you need to check if any elements meet a condition.

```javascript
let numbers = [1, 2, 3, 4, 5];
let hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // Output: true
```

5. every() method

Tests whether all elements in the array pass the test implemented by the provided function.

Use Case: When you need to check if all elements meet a condition.

```javascript
let numbers = [1, 2, 3, 4, 5];
let allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // Output: false
```

6. for...in loop

Iterates over the enumerable properties of an object, including arrays.

Use Case: Not recommended for arrays because it iterates over all enumerable properties, including inherited ones.

```javascript
let fruits = ["apple", "banana", "cherry"];
for (let index in fruits) {
  console.log(fruits[index]);
}
// Output:
// apple
// banana
// cherry
```

# Multi-dimensional Arrays

## Creating Multi-dimensional Arrays

## Two-dimensional Array

A multi-dimensional array is essentially an array that contains other arrays as its elements.

A two-dimensional array can be visualized as a table or grid with rows and columns.

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

## Accessing Elements

You can access elements in a multi-dimensional array using multiple indices. The first index accesses the row, and the second index accesses the column within that row.

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][2]); // Output: 6
console.log(matrix[2][1]); // Output: 8
```

## Iterating Over Multi-dimensional Arrays

You can use nested loops to iterate over multi-dimensional arrays.

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
```

## Adding Elements

You can add elements to a multi-dimensional array just like you would with a one-dimensional array.

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

// Adding a new row
matrix.push([7, 8, 9]);
console.log(matrix);
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Adding an element to an existing row
matrix[0].push(4);
console.log(matrix);
// Output: [[1, 2, 3, 4], [4, 5, 6], [7, 8, 9]]
```

## Removing Elements

You can remove elements from a multi-dimensional array using methods like pop(), shift(), or splice().

```javascript
let matrix = [
  [1, 2, 3, 4],
  [4, 5, 6],
  [7, 8, 9],
];

// Removing the last row
matrix.pop();
console.log(matrix);
// Output: [[1, 2, 3, 4], [4, 5, 6]]

// Removing the last element of the first row
matrix[0].pop();
console.log(matrix);
// Output: [[1, 2, 3], [4, 5, 6]]
```

### Practical Example: Matrix Addition

```javascript
let matrixA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let matrixB = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];

let result = [];

for (let i = 0; i < matrixA.length; i++) {
  let row = [];
  for (let j = 0; j < matrixA[i].length; j++) {
    row.push(matrixA[i][j] + matrixB[i][j]);
  }
  result.push(row);
}

console.log(result);
// Output: [[10, 10, 10], [10, 10, 10], [10, 10, 10]]
```

## Three-dimensional Array

A three-dimensional array can be visualized as an array of 2D arrays.

```javascript
let cube = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log(cube[0][0][1]); // Output: 2
console.log(cube[1][1][2]); // Output: 12
```

### Iterating Over Three-dimensional Arrays

You can use nested loops to iterate over three-dimensional arrays as well.

```javascript
let cube = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

for (let i = 0; i < cube.length; i++) {
  for (let j = 0; j < cube[i].length; j++) {
    for (let k = 0; k < cube[i][j].length; k++) {
      console.log(cube[i][j][k]);
    }
  }
}
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
```
