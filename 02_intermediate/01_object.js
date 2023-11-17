// Object Manipulation

// Given an object, create a function to return the sum of all values in the object.

const myObject = {
  num1: 23,
  name: "yogesh",
  num2: 66,
  num3: 81,
};

const calculateObjectSum = (obj) => {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  return sum;
};

console.log(calculateObjectSum(myObject));

// Object Filtering

// Given an object, create a function to filter out values less than a specified threshold.
// The function should return a new object with only the values that meet the criteria.

const filterObjectValues = (obj, threshold) => {
  const filteredObject = {};

  for (let key in obj) {
    if (typeof obj[key] === "number" && obj[key] >= threshold) {
      filteredObject[key] = obj[key];
    }
  }

  return filteredObject;
};

const sampleObject = { a: 5, b: 12, c: 8, d: 3, e: 20 };
console.log(filterObjectValues(sampleObject, 10));

// Object Merging

// Write a function that takes two objects and merges them into a new object.
// If there are common keys, the values from the second object should overwrite the values from the first object.

const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const object1 = { a: 1, b: 2, c: 3 };
const object2 = { b: 4, c: 5, d: 6 };
console.log(mergeObjects(object1, object2));

// Object Transformation

// Given an object with key-value pairs, write a function to transform the object into an array of objects.
// Each object in the array should have a 'key' and 'value' property.

const transformObjectToArray = (obj) => {
  return Object.entries(obj).map(([key, value]) => ({ key, value }));
};

const myObject1 = { name: "John", age: 25, city: "New York" };
console.log(transformObjectToArray(myObject1));

// Object Deep Copy

// Write a function to create a deep copy of an object.
// The copied object should not reference the same objects in memory as the original.

const deepCopyObject = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const originalObject = { a: 1, b: { c: 2, d: { e: 3 } } };
const copiedObject = deepCopyObject(originalObject);

console.log(copiedObject);

// Object Comparison

// Write a function to compare two objects.
// Return true if they have the same properties and values, false otherwise.

const areObjectsEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

const objectA = { a: 1, b: 2, c: 3 };
const objectB = { a: 1, b: 2, c: 3 };
console.log(areObjectsEqual(objectA, objectB));

// Object Destructuring:
// Object destructuring allows you to extract properties from objects and assign them to variables.

const person = { name: "John", age: 30, city: "New York" };
const { name, age } = person;
console.log(name, age);

// Object Spread Operator:
// The spread operator (...) can be used to clone an object or merge multiple objects.

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// Object Methods:
// ES6 introduced shorthand syntax for defining methods in objects.

const person1 = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};
person1.greet();

// Object.entries() and Object.fromEntries():
// Object.entries() returns an array of a given object's key-value pairs, and Object.fromEntries() creates an object from an array of key-value pairs.

const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
console.log(entries);

const newObj = Object.fromEntries(entries);
console.log(newObj);

// Object.freeze() and Object.seal():
// Object.freeze() prevents the modification of existing properties and the addition of new properties, and Object.seal() prevents the addition of new properties.

const obj3 = { prop: 42 };
Object.freeze(obj3);
obj3.prop = 99; // This will not change the value of 'prop'

const sealedObj = { key: "value" };
Object.seal(sealedObj);
sealedObj.newKey = "new"; // This addition is not allowed

// Object.keys(), Object.values(), and Object.getOwnPropertyNames():
// These methods provide arrays of keys, values, and property names of an object, respectively.

const obj4 = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj4);
const values = Object.values(obj4);
const propNames = Object.getOwnPropertyNames(obj4);

console.log(keys); // Output: ['a', 'b', 'c']
console.log(values); // Output: [1, 2, 3]
console.log(propNames); // Output: ['a', 'b', 'c']
