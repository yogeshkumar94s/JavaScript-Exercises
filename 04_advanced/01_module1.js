// Module 1: Introduction to DSA
// 1.1 Understanding the Importance of DSA in Web Development

// Data Structures and Algorithms are the backbone of computer science and play a crucial role in web development. They provide efficient solutions to complex problems and are essential for writing optimized, scalable, and maintainable code.

// 1.2 Common Data Structures Overview

// Example 1.1: Creating an array
let myArray = [1, 2, 3, 4, 5];

// Example 1.2: Accessing and modifying array elements
console.log(myArray[2]); // Output: 3
myArray[2] = 10;
console.log(myArray); // Output: [1, 2, 10, 4, 5]

// Example 1.3: Using array methods
myArray.push(6); // Adds an element to the end
myArray.pop(); // Removes the last element
console.log(myArray); // Output: [1, 2, 10, 4, 5]

// --------    Dynamic Array in JavaScript
let dynamicArray = [1, 2, 3];
dynamicArray.push(4); // Dynamic resizing
console.log(dynamicArray); // Output: [1, 2, 3, 4]

// Static Array (using fixed size)
let staticArray = new Array(3); // Creating an array with size 3
staticArray[0] = 1;
staticArray[1] = 2;
staticArray[2] = 3;
// staticArray[3] = 4; // Uncommenting this line would result in an error
console.log(staticArray); // Output: [1, 2, 3]
