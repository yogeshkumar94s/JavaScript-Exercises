// Array Destructuring
const numbers = [10, 20, 30, 40, 50];

// Extracting values from array
const [first, second, , fourth] = numbers;

console.log(first); // Output: 10
console.log(second); // Output: 20
console.log(fourth); // Output: 40

// Using rest operator to gather remaining elements
const [head, ...tail] = numbers;

console.log(head); // Output: 10
console.log(tail); // Output: [20, 30, 40, 50]

//------------------------------------------------------

// Object Destructuring
const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
  occupation: "Engineer",
};

// Extracting values from object
const { name, age, city } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 30
console.log(city); // Output: Wonderland

// Extracting with different variable names
const { name: personName, age: personAge } = person;

console.log(personName); // Output: Alice
console.log(personAge); // Output: 30

// Using rest operator to gather remaining properties
const { occupation, ...rest } = person;

console.log(occupation); // Output: Engineer
console.log(rest); // Output: { name: 'Alice', age: 30, city: 'Wonderland' }

//------------------------------------------------------------

// Combined Example: Array and Object Destructuring

const users = [
  {
    id: 1,
    name: "Alice",
    age: 30,
    city: "Wonderland",
  },
  {
    id: 2,
    name: "Bob",
    age: 25,
    city: "Builderland",
  },
];

// Destructuring array to extract objects
const [firstUser, secondUser] = users;

console.log(firstUser);
// Output: { id: 1, name: 'Alice', age: 30, city: 'Wonderland' }

console.log(secondUser);
// Output: { id: 2, name: 'Bob', age: 25, city: 'Builderland' }

// Destructuring object to extract properties
const { name: firstName, age: firstAge } = firstUser;
const { name: secondName, age: secondAge } = secondUser;

console.log(firstName, firstAge); // Output: Alice 30
console.log(secondName, secondAge); // Output: Bob 25
