// Objects and Arrays:

// Create an object representing a car with properties like make, model, and year.

const car = {
  make: "Tata",
  model: "Punch",
  year: "2024",
  location: "llps",
};

// Write a function to get the length of an object.

const getObjectLength = (obj) => {
  const length = Object.keys(obj).length;
  return length;
};

const objectLength = getObjectLength(car);
// console.log("the length of this object is:", objectLength);

// Check if a key exists in an object.

if (car.hasOwnProperty("make")) {
  console.log("yes, it has");
} else {
  console.log("Sorry");
}

// Write a function to remove a property from an object.

function deleteObjectProperty(obj, props) {
  if (obj.hasOwnProperty(props)) {
    delete obj[props];
    console.log("the props has been deleted");
  } else {
    console.log("Sorry, the Props does not exist");
  }
}

deleteObjectProperty(car, "model");
// console.log(car);

// Convert an object to an array of key-value pairs.

function objectToArrays(obj) {
  return Object.entries(obj);
}

const convertedValue = objectToArrays(car);
// console.log(convertedValue);

// Merge two objects into a new object.

const bike = {
  make1: "Hero Motocorp",
  model1: "Super",
  year1: "2024",
};

const mergedObject = { ...car, ...bike };
// console.log(mergedObject);

// Write a function to flatten a nested object.*-***//*///*/*/*/*/*/*/***-*-*-**-

const input = {
  name: "Yogesh Kumar",
  age: 25,
  department: {
    name: "Full Stack Web Developer",
    section: "Technical",
    branch: {
      name: "Noida",
      timezone: "IST",
    },
  },
  company: {
    name: "SAP",
    customers: ["Ford", "Nestle"],
  },
  skills: ["javascript", "node.js", "react"],
};

// Function to Flatten this Object

function flattenObject(obj, parentKey = "") {
  let result = {};

  // Iterate through each key in the object
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Create the new key by appending the current key to the parent key (if any)
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      // Check if the value is an object and not null
      if (typeof obj[key] === "object" && obj[key] !== null) {
        // Recursively flatten nested objects
        const flattenedNestedObject = flattenObject(obj[key], newKey);
        // Merge the flattened nested object into the result
        result = { ...result, ...flattenedNestedObject };
      } else {
        // Assign non-object values directly to the result
        result[newKey] = obj[key];
      }
    }
  }

  return result;
}

const flattenedObject = flattenObject(input);

// console.log(flattenedObject);

// Implement a function to find the most common element in an array.*//*/*/*/*

function findMostCommonElement(arr) {
  // Create an object to store the frequency of each element
  const elementFrequency = {};

  // Iterate through the array and count the frequency of each element
  arr.forEach((element) => {
    elementFrequency[element] = (elementFrequency[element] || 0) + 1;
  });

  // Find the element with the highest frequency
  let mostCommonElement;
  let highestFrequency = 0;

  for (const element in elementFrequency) {
    if (elementFrequency.hasOwnProperty(element)) {
      if (elementFrequency[element] > highestFrequency) {
        mostCommonElement = element;
        highestFrequency = elementFrequency[element];
      }
    }
  }

  return mostCommonElement;
}

// Example usage:
const myArray = [1, 2, 3, 4, 2, 2, 3, 1, 4, 4, 4];
const mostCommon = findMostCommonElement(myArray);

// console.log(`The most common element is: ${mostCommon}`);

// Remove duplicates from an array without using Set.

function removeDuplicates(arr) {
  const uniqueArray = [];

  arr.forEach((element) => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  });

  return uniqueArray;
}

// Example usage:
const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5, 1, 6];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);

// console.log(arrayWithoutDuplicates);
