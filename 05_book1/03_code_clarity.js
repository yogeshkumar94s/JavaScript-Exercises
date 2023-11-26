// ***********Static Key-Value Lookups:**************

// Static key-value lookups refer to situations where you have a fixed set of keys and their corresponding values that do not change during the execution of your program.

// o Using Objects for Key-Value Pairs:
// Objects in JavaScript are a natural fit for static key-value pairs because they provide a quick and efficient way to look up values based on their keys.

// Example:

// Using objects for static key-value lookups
const colors = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};

console.log(colors.red); // Output: #FF0000
console.log(colors.green); // Output: #00FF00
console.log(colors.blue); // Output: #0000FF

// In this example, the colors object is used for static key-value lookups. You can quickly retrieve the hexadecimal color code for a specific color by using its key.

// Benefits:
// Efficiency: Objects provide constant time complexity (O(1)) for key-value lookups, making them very efficient.

// Readability: Using objects for static key-value pairs makes the code more readable and self-explanatory, especially when the keys have semantic meaning.

// Ease of Maintenance: If you need to update or add new key-value pairs, modifying the object is straightforward and doesn't require changing multiple lines of code.

// Considerations:
// Uniqueness of Keys: Object keys must be unique. If you have duplicate keys, the last one defined will overwrite the previous ones.

// Dynamic vs. Static: This advice is specifically for static key-value pairs. If your keys or values change dynamically during runtime, other data structures might be more appropriate.

// Alternatives:
// If you need dynamic lookups or if you need to iterate over keys/values in a specific order, other data structures like Maps might be more suitable.

// ************Mutations and Immutability:***********--------
// Mutation: Modifying the properties of an object directly is called mutation. It can make code harder to reason about and may lead to unintended side effects.

// Immutability: Creating a new object with the desired changes instead of modifying the original object is called immutability. This practice can enhance predictability and maintainability.

// Object.assign() for Immutability:
// The Object.assign() method is used to copy the values of all enumerable properties from one or more source objects to a target object. It creates a new object, preventing direct mutation of the source objects.

// Example:

// Creating objects without mutations using Object.assign()
const originalObject = { prop1: "value1", prop2: "value2" };
const myObj = { num1: "1", num2: "2" };

// Creating a new object with additional properties
const newObject = Object.assign({}, originalObject, myObj, { prop3: "value3" });

console.log(newObject);
// Output: { prop1: 'value1', prop2: 'value2', prop3: 'value3' }

console.log(originalObject);
// Output: { prop1: 'value1', prop2: 'value2' }

// In this example, Object.assign() is used to create a new object (newObject) with the properties from originalObject and an additional property (prop3). The originalObject remains unchanged.

// Benefits:
// Immutability: Object.assign() creates a new object, preserving the original object's state and preventing direct mutation.

// Multiple Sources: You can merge properties from multiple source objects into a single target object.

// Flexibility: It provides a flexible way to create objects with specific properties.

// Considerations:
// Shallow Copy: Object.assign() performs a shallow copy. If the properties are objects themselves, changes to the nested objects will affect both the original and the copied objects.
// Alternatives:
// Spread Operator: The spread operator (...) can also be used for creating shallow copies of objects in a more concise manner.

// ************Object Spread Syntax:-------/******* */
// The object spread syntax (...) is a feature in JavaScript that allows you to create a shallow copy of an object and simultaneously add or override properties. It's often used for updating information within objects while maintaining immutability.

// Updating Information with Object Spread:

// Updating information with object spread
const originalObject1 = { name: "John", age: 25, city: "New York" };

// Updating age and adding a new property
const updatedObject = { ...originalObject1, age: 26, occupation: "Developer" };

console.log(updatedObject);
// Output: { name: 'John', age: 26, city: 'New York', occupation: 'Developer' }

console.log(originalObject1);
// Output: { name: 'John', age: 25, city: 'New York' }

// In this example, the object spread syntax is used to create a new object (updatedObject) based on the originalObject. The age property is updated, and a new property (occupation) is added. The originalObject remains unchanged.

// Benefits:
// Immutability: Object spread creates a new object, preserving the original object's state and preventing direct mutation.

// Conciseness: Object spread offers a concise and readable syntax for updating objects.

// Multiple Updates: You can update multiple properties or add new ones in a single operation.

// Considerations:
// Shallow Copy: Like Object.assign(), object spread performs a shallow copy. Nested objects will still be shared between the original and updated objects.
// Alternatives:
// Object.assign(): Similar to object spread, Object.assign() can also be used for updating objects.
// .
// .
// .
// ***********Key-Value Data and Maps:********-----------

// Key-value data refers to a collection of pairs, where each key is associated with a specific value. In JavaScript, the Map object is designed to handle key-value pairs, providing an efficient way to manage and update such data.

// Updating Key-Value Data with Maps:

// Updating key-value data with Maps
let dataMap = new Map([
  ["name", "John"],
  ["age", 25],
  ["city", "New York"],
]);

// Updating age and adding a new property
dataMap.set("age", 26);
dataMap.set("occupation", "Developer");

console.log(dataMap.get("name")); // Output: John
console.log(dataMap.get("age")); // Output: 26
console.log(dataMap.get("city")); // Output: New York
console.log(dataMap.get("occupation")); // Output: Developer

// In this example, a Map (dataMap) is created with initial key-value pairs. The set method is then used to update the value of an existing key (age) and add a new key-value pair (occupation).

// Benefits:
// Clarity: Maps provide a clear and expressive syntax for working with key-value pairs.

// Dynamic Updates: You can easily update or add key-value pairs without the need for complex syntax.

// Built-in Methods: Maps offer built-in methods for common operations, making the code more readable.

// Considerations:
// Object Comparison: Unlike objects, keys in a Map can be any data type, providing more flexibility.
// Alternatives:
// Objects: While objects are commonly used for key-value data, Maps provide additional features and are well-suited for scenarios where keys can be non-string values.

// ****Iterate Over Key-Value Data with Map and the Spread -----Operator///******* */

// Iterating over key-value data with Map and the Spread Operator
let dataMap1 = new Map([
  ["name", "John"],
  ["age", 25],
  ["city", "New Yorkk"],
]);

// Using the spread operator to convert Map entries to an array
const entriesArray = [...dataMap1];

// Iterating over the array of key-value pairs
for (const [key, value] of entriesArray) {
  console.log(`${key}: ${value}`);
}

// A Map (dataMap) is created with initial key-value pairs.
// The spread operator (...) is used to convert the Map entries into an array of key-value pairs (entriesArray).
// The array is then iterated over using a for...of loop, and each key-value pair is logged.
// Benefits:
// Conversion to Array: The spread operator simplifies the conversion of Map entries to an array, making it easy to work with iterable structures.

// Destructuring: Destructuring in the for...of loop allows convenient access to both the key and the value in each iteration.

// Considerations:
// Order of Insertion: The order of key-value pairs in a Map is preserved, so iteration follows the order of insertion.
// Alternatives:
// Map.prototype.forEach(): The forEach method of the Map object is an alternative way to iterate over key-value pairs.

// *******---Create Maps Without Side Effects*****---*//// */

// Creating Maps without side effects
const originalMap = new Map([
  ["name", "John"],
  ["age", 25],
  ["city", "New York"],
]);

// Creating a new Map with additional property
const newMap = new Map(originalMap);
newMap.set("occupation", "Developer");

console.log(originalMap);
// Output: Map { 'name' => 'John', 'age' => 25, 'city' => 'New York' }

console.log(newMap);
// Output: Map { 'name' => 'John', 'age' => 25, 'city' => 'New York', 'occupation' => 'Developer' }

// The originalMap is created with initial key-value pairs.
// A new Map (newMap) is created by copying the entries from the originalMap and adding a new key-value pair (occupation).
// The originalMap remains unchanged.
// Benefits:
// Immutability: Creating a new Map prevents direct modification of the original Map, ensuring immutability.

// Clarity: The intent to create a new Map without side effects is explicit in the code.

// Considerations:
// Shallow Copy: This approach performs a shallow copy, meaning nested objects will be shared between the original and the new Map.
// Alternatives:
// Object.assign(): If you are working with plain objects, Object.assign() can also be used for creating a shallow copy.

// Keep Unique Values with Set

const dogs = [
  {
    name: "max",
    size: "small",
    breed: "boston terrier",
    color: "black",
  },
  {
    name: "don",
    size: "large",
    breed: "labrador",
    color: "black",
  },
  {
    name: "shadow",
    size: "medium",
    breed: "labrador",
    color: "chocolate",
  },
];

// Extract unique colors using Set and map
const uniqueColors = new Set(dogs.map((dog) => dog.color));

console.log(uniqueColors);
// Output: Set { 'black', 'chocolate' }
