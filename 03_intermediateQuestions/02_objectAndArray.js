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
console.log(car);

// Convert an object to an array of key-value pairs.
function objectToArrays(obj) {
  return Object.entries(obj);
}

const convertedValue = objectToArrays(car);
console.log(convertedValue);
// Merge two objects into a new object.
const bike = {
  make1: "Hero Motocorp",
  model1: "Super",
  year1: "2024",
};

const mergedObject = { ...car, ...bike };
console.log(mergedObject);
// Write a function to flatten a nested object.
// Implement a function to find the most common element in an array.
// Remove duplicates from an array without using Set.
