// Example 1: Mapping an Array of Numbers

const numbers = [1, 2, 3, 4, 5];

// Using arrow function with map to square each number
const squaredNumbers = numbers.map((number) => number ** 2);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Example 2: Filtering an Array

const ages = [22, 18, 35, 29, 16];

// Using arrow function with filter to get adults (age >= 18)
const adults = ages.filter((age) => age >= 18);

console.log(adults); // Output: [22, 18, 35, 29]

// Example 3: Summing Array Elements

const scores = [80, 90, 85, 92, 88];

// Using arrow function with reduce to calculate the total score
const totalScore = scores.reduce((total, score) => total + score, 0);

console.log(totalScore); // Output: 435

// Benefits of Arrow Functions:

// Conciseness: Arrow functions provide a more concise syntax compared to traditional function expressions.

// Implicit Return: If the arrow function has a single expression, the braces and the return keyword can be omitted.

// Lexical this: Arrow functions do not have their own this binding, making them especially useful in certain contexts, such as within callbacks.

// Considerations:

// Single Parameter Parentheses: If the function takes a single parameter, the parentheses can be omitted. However, they are required for functions with no parameters or multiple parameters.

// Implicit Return: If the arrow function has multiple statements, or if you want to explicitly return an object literal, you need to use braces and the return keyword.

// Summary:

// "Simplify Looping with Arrow Functions" introduces the use of arrow functions for concise and expressive syntax, particularly when working with array methods. Arrow functions are well-suited for situations where the function body is short and can enhance readability in certain scenarios.

// Write Shorter Loops with Array Methods

// Example 1: Filtering an Array

// Without Array Method:
const numbers1 = [1, 2, 3, 4, 5];
const evens = [];

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 === 0) {
    evens.push(numbers1[i]);
  }
}

console.log(evens); // Output: [2, 4]

// Using filter:
const numbers2 = [1, 2, 3, 4, 5];
const evens1 = numbers2.filter((number) => number % 2 === 0);

console.log(evens1); // Output: [2, 4]

// Example 2: Mapping an Array
// Without Array Method:
const numbers3 = [1, 2, 3, 4, 5];
const squaredNumbers1 = [];

for (let i = 0; i < numbers3.length; i++) {
  squaredNumbers.push(numbers3[i] ** 2);
}

console.log(squaredNumbers1); // Output: [1, 4, 9, 16, 25]

// Using map:
const numbers4 = [1, 2, 3, 4, 5];
const squaredNumbers2 = numbers4.map((number) => number ** 2);

console.log(squaredNumbers2); // Output: [1, 4, 9, 16, 25]

// Example 3: Summing Array Elements
// Without Array Method:
const numbers5 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers5.length; i++) {
  sum += numbers5[i];
}

console.log(sum); // Output: 15

// Using reduce:
const numbers6 = [1, 2, 3, 4, 5];
const sum1 = numbers6.reduce((total, number) => total + number, 0);

console.log(sum); // Output: 15

// Example 4: Checking if Any Element Satisfies a Condition
// Without Array Method:
const numbers7 = [1, 2, 3, 4, 5];
let hasEven = false;

for (let i = 0; i < numbers7.length; i++) {
  if (numbers7[i] % 2 === 0) {
    hasEven = true;
    break;
  }
}

console.log(hasEven); // Output: true

// Using some:
const numbers8 = [1, 2, 3, 4, 5];
const hasEven1 = numbers8.some((number) => number % 2 === 0);

console.log(hasEven); // Output: true

// Summary:
// Using array methods like map, filter, reduce, and some allows for shorter and more expressive code when working with arrays. These methods are part of the functional programming paradigm and provide a cleaner and often more readable way to perform operations on arrays.

// Create Arrays of a Similar Size with map()*************
// Example 1: Doubling the Elements of an Array
const numbers9 = [1, 2, 3, 4, 5];

// Using map to create a new array with doubled elements
const doubledNumbers = numbers9.map((number) => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Creating an Array of Squares
const numbers10 = [1, 2, 3, 4, 5];

// Using map to create a new array with squared elements
const squaredNumbers3 = numbers10.map((number) => number ** 2);

console.log(squaredNumbers3); // Output: [1, 4, 9, 16, 25]

// Example 3: Generating an Array of Strings
const names = ["Alice", "Bob", "Charlie"];

// Using map to create a new array with greetings
const greetings = names.map((name) => `Hello, ${name}!`);

console.log(greetings);
// Output: ['Hello, Alice!', 'Hello, Bob!', 'Hello, Charlie!']

// Example 4: Creating an Array of Objects
const fruits = ["apple", "banana", "orange"];

// Using map to create an array of objects with additional properties
const fruitObjects = fruits.map((fruit) => ({
  name: fruit,
  length: fruit.length,
}));

console.log(fruitObjects);
// Output: [ { name: 'apple', length: 5 }, { name: 'banana', length: 6 }, { name: 'orange', length: 6 } ]

// Example 5: Filling an Array with Default Values
const length = 5;

// Using map to create an array of default values
const defaultArray = Array.from({ length }, (_, index) => index + 1);

console.log(defaultArray); // Output: [1, 2, 3, 4, 5]

// Summary:
// Using map() is a powerful and concise way to create new arrays by applying a transformation to each element of an existing array. It is a fundamental tool in functional programming for generating arrays of a similar size with modified or derived values.

// Pull Out Subsets of Data with filter() and find()********

// filter() Method:

// The filter() method creates a new array containing only the elements of the original array that satisfy a specified condition.

// Example: Filtering Even Numbers
const numbers11 = [1, 2, 3, 4, 5, 6];

// Using filter to get an array of even numbers
const evens2 = numbers11.filter((number) => number % 2 === 0);

console.log(evens); // Output: [2, 4, 6]

// In this example, filter() is used to create a new array (evens) containing only the even numbers from the original array.

// find() Method:

// The find() method returns the first element in the array that satisfies a specified condition. It stops searching once it finds such an element.

// Example: Finding a Specific Element
const fruits2 = ["apple", "banana", "orange", "kiwi"];

// Using find to get the first fruit with more than five letters
const result = fruits2.find((fruit) => fruit.length > 5);

console.log(result); // Output: 'banana'

// Here, find() is employed to retrieve the first fruit with more than five letters from the array.

// Comparison:

// filter():
// Creates a new array with all elements that meet the specified condition.
// Returns an array, even if it's empty.
// Useful when you want all elements that satisfy a condition.

// find():
// Returns the first element that meets the specified condition.
// Returns undefined if no matching element is found.
// Useful when you only need the first matching element.

// Common Use Cases:
// Example 1: Filtering Objects Based on a Property
const students = [
  { name: "Alice", grade: 80 },
  { name: "Bob", grade: 90 },
  { name: "Charlie", grade: 75 },
];

// Using filter to get students with grades above 80
const highGrades = students.filter((student) => student.grade > 80);

console.log(highGrades);
// Output: [ { name: 'Bob', grade: 90 } ]

// In this example, filter() is applied to create a new array (highGrades) containing only students with grades above 80.

// Example 2: Finding a Specific Object
const books = [
  { title: "JavaScript: The Good Parts", author: "Douglas Crockford" },
  { title: "Clean Code", author: "Robert C. Martin" },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
];

// Using find to get the book with a specific title
const book = books.find((book) => book.title === "Clean Code");

console.log(book);
// Output: { title: 'Clean Code', author: 'Robert C. Martin' }

// Here, find() is used to retrieve the first book object with the title 'Clean Code' from the array.

// Summary:
// Use filter() when you want all elements that satisfy a condition, resulting in a new array.
// Use find() when you only need the first element that satisfies a condition, stopping the search once found.

// Apply Consistent Actions with forEach().**************

// Applying consistent actions with forEach() is a common practice in JavaScript when you want to perform a specific operation on each element of an array. The forEach() method allows you to iterate over the elements of an array and apply a provided function to each element.

// Example: Logging Each Element
const fruits3 = ["apple", "banana", "orange"];

// Using forEach to log each fruit
fruits3.forEach((fruit) => console.log(fruit));
// Output:
// 'apple'
// 'banana'
// 'orange'

// In this example, the forEach() method is used to iterate over the fruits array and log each fruit to the console. The provided function (fruit => console.log(fruit)) is applied consistently to each element.

// Example: Modifying Array Elements
const numbers12 = [1, 2, 3, 4, 5];

// Using forEach to square each number in-place
numbers12.forEach((number, index, array) => (array[index] = number ** 2));

console.log(numbers12); // Output: [1, 4, 9, 16, 25]

// In this example, forEach() is used to square each number in the numbers array in-place. The array is modified directly, and the provided function is consistently applied to each element.

// Example: Updating Objects in an Array
const students3 = [
  { name: "Alice", grade: 80 },
  { name: "Bob", grade: 90 },
  { name: "Charlie", grade: 75 },
];

// Using forEach to increase the grade of each student
students3.forEach((student) => (student.grade += 5));

console.log(students3);
// Output:
// [ { name: 'Alice', grade: 85 },
//   { name: 'Bob', grade: 95 },
//   { name: 'Charlie', grade: 80 } ]

// Here, forEach() is applied to increase the grade of each student in the students array by 5.

// Benefits of forEach():
// Consistency: forEach() ensures that the same action is applied to each element, promoting code consistency.

// Readability: It makes the code more readable by clearly expressing the intention of applying an action to each element.

// In-Place Modifications: You can modify the original array elements in-place, making it suitable for certain scenarios.

// Considerations:
// Side Effects: While forEach() is useful for performing actions on each element, be cautious with side effects, especially when modifying the array in-place.

// Return Value: forEach() returns undefined, so it's primarily used for its side effects.

// Summary:
// "Apply Consistent Actions with forEach()" encourages the use of the forEach() method when you want to perform a consistent action on each element of an array. It is a simple and effective way to iterate over array elements and apply a specified operation.

// Transform Array Data with reduce()********************
// Transforming array data with reduce() is a powerful concept in JavaScript. The reduce() method is used to accumulate or transform the elements of an array into a single value. It takes a callback function and an initial accumulator value as arguments.

// Example 1: Summing Array Elements
const numbers13 = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of array elements
const sum3 = numbers13.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber,
  0
);

console.log(sum); // Output: 15

// In this example, the reduce() method is used to sum up all elements in the numbers array, starting with an initial accumulator value of 0.

// Example 2: Concatenating Strings
const words = ["Hello", " ", "World", "!"];

// Using reduce to concatenate array elements into a string
const sentence = words.reduce(
  (accumulator, currentWord) => accumulator + currentWord,
  ""
);

console.log(sentence); // Output: 'Hello World!'

// Here, reduce() is applied to concatenate the elements of the words array into a single string.

// Example 3: Calculating the Product of Array Elements
const factors = [2, 3, 4, 5];

// Using reduce to calculate the product of array elements
const product = factors.reduce(
  (accumulator, currentFactor) => accumulator * currentFactor,
  1
);

console.log(product); // Output: 120

// In this example, the reduce() method is employed to calculate the product of elements in the factors array.

// Example 4: Transforming Array of Objects
const students2 = [
  { name: "Alice", grade: 80 },
  { name: "Bob", grade: 90 },
  { name: "Charlie", grade: 75 },
];

// Using reduce to calculate the average grade
const averageGrade =
  students2.reduce((total, student) => total + student.grade, 0) /
  students.length;

console.log(averageGrade); // Output: 81.66666666666667

// Here, reduce() is used to calculate the average grade of students from an array of objects.

// Example 5: Flattening Nested Arrays
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// Using reduce to flatten nested arrays
const flattenedArray = nestedArray.reduce(
  (accumulator, currentArray) => accumulator.concat(currentArray),
  []
);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// In this example, reduce() is applied to flatten a nested array into a single-level array.

// Benefits of reduce():
// Accumulation: reduce() allows you to accumulate values or transform array elements into a single result.

// Versatility: It is versatile and can be used for a wide range of transformations and calculations.

// Conciseness: reduce() can often lead to more concise code compared to traditional loop constructs.

// Considerations:

// Accumulator Initialization: Choose the appropriate initial value for the accumulator based on the transformation you are performing.

// Arrow Function: You can use arrow functions for a more concise syntax:
const sum4 = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber,
  0
);

// Summary:
// "Transform Array Data with reduce()" emphasizes the use of the reduce() method to efficiently transform or accumulate data from an array into a single value. It is a versatile and powerful tool for various array manipulation tasks.

// Reduce Loop Clutter with for...in and for...each***********
