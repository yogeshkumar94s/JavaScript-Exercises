// Variables to use in the object
const propName = "dynamicProperty";
const methodName = "dynamicMethod";

const firstName = "John";
const lastName = "Doe";

// Enhanced object literal
const person = {
  // Shorthand property names
  firstName,
  lastName,

  // Computed property name
  [propName]: "This is a dynamic property",

  // Shorthand method definition
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Computed property name for method
  [methodName]() {
    return `This is a dynamic method`;
  },
};

// Logging the object and its methods
console.log(person);
// Output:
// {
//   firstName: 'John',
//   lastName: 'Doe',
//   dynamicProperty: 'This is a dynamic property',
//   fullName: [Function: fullName],
//   dynamicMethod: [Function: dynamicMethod]
// }

console.log(person.fullName()); // Output: John Doe
console.log(person.dynamicMethod()); // Output: This is a dynamic method

// Accessing computed property
console.log(person[propName]); // Output: This is a dynamic property
