// Mutability in programming refers to whether an object's state or value can be changed after it is created. In JavaScript, some data types and structures are mutable, while others are immutable.

// Mutable Objects in JavaScript:

//1.0 Arrays:
// Arrays in JavaScript are mutable. You can change their length, add or remove elements, and modify existing elements.

let myArray = [1, 2, 3];
myArray.push(4); // Modifies the array by adding a new element

//2.0 Objects:
// Objects are also mutable. You can add, remove, or modify properties of an object.

let myObject = { name: "John", age: 30 };
myObject.age = 31; // Modifies the value of the 'age' property

// Immutable Objects in JavaScript:*-**-*

//1.0 Strings:
// Strings in JavaScript are immutable. Operations that seem to modify a string actually create a new string.

let myString = "Hello";
myString = myString + " World"; // Creates a new string, does not modify the original

//2.0 Numbers:
// Numbers are immutable in JavaScript. Mathematical operations on numbers create new values.

let num = 5;
num = num + 3; // Creates a new value, does not modify the original

//3.0 Immutable Data Structures:
// Some libraries and languages provide immutable data structures (e.g., Immutable.js in JavaScript) for collections like lists and maps. Operations on these structures return new instances, preserving the original data.

// Using Immutable.js
const { List } = require("immutable");
let myList = List([1, 2, 3]);
let newList = myList.push(4); // Returns a new List with the added element

// Pros and Cons:*-**-*-*
//Pros of Mutability:

// Efficiency:
// Mutable objects can be more memory-efficient and performant in certain scenarios, as they allow in-place modifications.

//Cons of Mutability:
// Predictability:

// Mutable objects can lead to unexpected behavior, especially in concurrent or asynchronous environments, where multiple parts of the program might be modifying the same object.

// Debugging:
// Debugging can be more challenging when an object's state can change at any point in the program.

//Pros of Immutability:
//Predictability:
//--Immutable objects are predictable and make it easier to reason about the state of the program at any given point.

// Concurrency:
//--Immutability facilitates safer concurrent programming, as there are no race conditions related to shared mutable state.

//Cons of Immutability:
//Performance:
//--Immutability can introduce overhead, as it often involves creating new instances of data structures instead of modifying existing ones.

//Memory Usage:
//--In some cases, immutable data structures can lead to increased memory usage due to the creation of new instances.

// The choice between mutability and immutability depends on the specific requirements and characteristics of the program. Many modern programming paradigms, including functional programming, emphasize immutability for its benefits in terms of predictability and safety. Libraries and tools that provide immutable data structures can help strike a balance between the advantages of immutability and the performance considerations of mutability.
