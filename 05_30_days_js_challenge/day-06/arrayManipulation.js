// Create an array
let fruits = ["apple", "banana", "cherry"];
console.log("Initial array:", fruits); // Output: ["apple", "banana", "cherry"]

// Adding elements to the end of the array using push
fruits.push("orange");
console.log("After push:", fruits); // Output: ["apple", "banana", "cherry", "orange"]

// Removing the last element of the array using pop
let lastFruit = fruits.pop();
console.log("After pop:", fruits); // Output: ["apple", "banana", "cherry"]
console.log("Popped element:", lastFruit); // Output: "orange"

// Adding elements to the beginning of the array using unshift
fruits.unshift("kiwi");
console.log("After unshift:", fruits); // Output: ["kiwi", "apple", "banana", "cherry"]

// Removing the first element of the array using shift
let firstFruit = fruits.shift();
console.log("After shift:", fruits); // Output: ["apple", "banana", "cherry"]
console.log("Shifted element:", firstFruit); // Output: "kiwi"
