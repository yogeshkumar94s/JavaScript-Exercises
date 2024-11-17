// Define an object
let person = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
  country: "Wonderland",
};

// Iterating over object properties using for...in loop
console.log("Using for...in loop:");
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    // Check if the property is an own property of the object
    console.log(`${key}: ${person[key]}`);
  }
}

// Iterating over object properties using Object.keys()
console.log("\nUsing Object.keys():");
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

// Iterating over object properties using Object.values()
console.log("\nUsing Object.values():");
Object.values(person).forEach((value) => {
  console.log(value);
});

// Iterating over object properties using Object.entries()
console.log("\nUsing Object.entries():");
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
