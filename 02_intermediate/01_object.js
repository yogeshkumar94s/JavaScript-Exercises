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
