// An empty object can be created using one of two syntaxes:

// let user = new Object(); // "object constructor" syntax
// let user1 = {}; // "object literal" syntax

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };

// console.log(user.name);
// user.greet();

// Q.1 What is the purpose of the user object in this code?

// The user object in this code is, a way to store the information about a specific user.Its like a digital profile card that holds details like user's name, age, and even defines actions the user can perform, such as greeting.

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };

// console.log(user.name);
// user.greet();

// Q.2 How would you add a new property, such as email, to the user object?

// To add a new property, such as email, to the user object, you can assign a value to the property name like this

// user.email = "yk@gmail.com";
// console.log(user);

//--------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };

// console.log(user.name);
// user.greet();

// Q.3 What does this.name refer to inside the greet method?

/*

Inside the greet method, this.name refers to the name property of the current object that the greet method is called on.

Here's the breakdown:

1. this: This keyword is a special keyword in JavaScript that refers to the current context of the function. In this case, the context is the object that the greet method is attached to.

2. user.name: Since greet is a method defined inside the user object, this refers to the user object itself.

3. this.name: Therefore, this.name is basically saying "get the name property of the current object (which is user in this case)".

*/

//------------------------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };

// console.log(user.name);
// user.greet();

// Q.4 What would happen if you replaced this.name with user.name? Would the output change?

/*

Replacing this.name with user.name inside the greet method wouldn't change the output in this specific case, but there are some subtle differences to consider:

Both this.name and user.name refer to the same property within the user object. So, the code would still print "Hello, my name is Alice!".

1. this.name: This is generally considered the more idiomatic way to access properties within object methods. It emphasizes that the method is working with the object's own properties.

2. user.name: While it works here, it's slightly less concise and might become less clear if the method were more complex or used in a different context.

*/

//-----------------------------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };

// console.log(user.name);
// user.greet();

// Q.5 What is the difference between defining a function normally and defining it as a method within an object?

/*

There are a few key differences between defining a function normally and defining it as a method within an object:

**1. Context and `this`:**

- **Normal function:** When you define a function outside of an object, the `this` keyword inside the function refers to the global object (usually `window` in a browser environment). This means that if you try to access properties of an object within the function, you'll need to pass that object as an argument.

- **Method:** When you define a function as a method within an object, the `this` keyword inside the method refers to the object itself. This allows you to directly access and modify the object's properties without needing to pass them as arguments.

**2. Object association:**

- **Normal function:** A normal function is not directly associated with any specific object. It can be called independently.

- **Method:** A method is inherently tied to the object it's defined within. It can only be called on instances of that object.

**3. Syntax:**

- **Normal function:** You define a normal function using the `function` keyword followed by the function name and parentheses for parameters.

- **Method:** You define a method by assigning a function expression to a property of an object.

As you can see, the method `greet` is specifically associated with the `user` object and can access its `name` property directly using `this.name`.

*/

//Here's an example to illustrate the differences:
// Normal function

// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// // Method within an object
// const user = {
//   name: "Alice",
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };

// // Calling the normal function
// greet("Bob");

// // Calling the method
// user.greet();

//-----------------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };

// console.log(user.name);
// user.greet();

// Q.6 How would you call the greet method using a dynamic reference to the user object?

// 1. Using a variable:

// let myUser = user;

// myUser.greet();

// 2. Using an array:

// const users = [user];
// users[0].greet();

// 3. Using an object property:

// const myObject = {
//   user: user,
// };
// myObject.user.greet();

//-------------------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };

// console.log(user.name);
// user.greet();

// Q.7- Why did the code use backticks (\``) and ${}in the console.log statement within the greet` method?

/*

The backticks () and ${} are used in JavaScript for template literals. They provide a more convenient and readable way to construct strings, especially when you need to embed variables or expressions within them.

In the greet method, the template literal is used to create a dynamic greeting message:

console.log(`Hello, my name is ${this.name}!`);

1. Backticks: The backticks enclose the entire string, allowing you to write it over multiple lines without using escape characters.

2. ${this.name}: This is a template literal expression. The ${} syntax allows you to embed the value of a variable or expression directly into the string. In this case, this.name is evaluated, and its value (the user's name) is inserted into the string.

So, when the greet method is called, the template literal is evaluated, and the final string is printed to the console, incorporating the user's name.

*/

//--------------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };

// console.log(user.name);
// user.greet();

// Q.8- Can you rewrite the greet method without using template literals but still achieving the same output?

// Yes, we can rewrite the greet method without using template literals. Here's how:

// console.log("Hello, my name is " + this.name + "!");

// In this version, we're concatenating strings using the + operator. We combine the fixed parts of the string ("Hello, my name is " and "!") with the dynamic part (this.name) using the + operator.

// While this approach works, it can be less readable and more error-prone, especially when dealing with more complex string constructions. Template literals offer a cleaner and more concise way to create dynamic strings.

//-----------------------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };

// console.log(user.name);
// user.greet();

// Q.9- What happens if you try to access a property that doesn’t exist in the user object (e.g., user.address)?

// If you try to access a property that doesn't exist in the user object, you'll get an error. Specifically, you'll get a TypeError with the message "Cannot read properties of undefined (reading 'address')".

//-----------------------------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };

// console.log(user.name);
// user.greet();

// Q.10- How would you dynamically access the name property if you only know its key at runtime?

// To dynamically access a property when you only know its key at runtime, you can use bracket notation:

// const propertyName = "name";
// console.log(user[propertyName]);

// We store the property name "name" in the propertyName variable.
// We use bracket notation user[propertyName] to access the property. This allows us to dynamically specify the property name based on the value of the propertyName variable.

//  another example:

// const cart = {
//   item1: "Apple",
//   item2: "Banana",
//   item3: "Orange",
// };

// You want to access the value of an item dynamically, based on a variable that stores the item's key. For instance, you might have a variable currentItem that holds the key "item2":

// const currentItem = "item2";

// To access the value of the item with the key stored in currentItem, you can use bracket notation:

// console.log(cart[currentItem]);

// Steps:

/*
1. cart[currentItem]: The cart object is followed by square brackets [].

2. currentItem: Inside the brackets, we place the variable currentItem, which holds the string "item2".

3. Dynamic Access: This syntax tells JavaScript to access the property of the cart object whose key matches the value of currentItem. In this case, it's the "item2" property.


This is particularly useful when you don't know the exact property name beforehand or when you need to iterate over object properties.
*/

//---------------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };

// console.log(user.name);
// user.greet();

// Q.11- How would you add a new property address with the value "544 JSR, Meerut" to the user object?

// to add a new property "address" with the value "544 JSR, Meerut", you can simply assign the value to the property name like this.

// user.address = "544 JSR, Meerut";
// console.log(user);

//---------------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };

// console.log(user.name);
// user.greet();

// Q.12- Can you add a new method, getAge(), that returns the age of the user? How would you do it?

// to add a new method getAge() that returns the age of the user, we can simply define it as a property of the user object, assigning it as a function expression.

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
//   getAge() {
//     return this.age;
//   },
// };

// console.log(user.name);
// user.greet();
// console.log(user.getAge());

//--------------------------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
//   getAge() {
//     return this.age;
//   },
// };

// console.log(user.name);
// user.greet();
// console.log(user.getAge());

// Q.13- How would you add a new property dynamically using a variable as the key?

// to add a new property dynamically using a variable as the key, use can use bracket notation

// const newProperty = "address";
// const address = "544 JSR, Meerut";
// user[newProperty] = address;

// console.log(user);

// Variable for Property Name: We create a variable newProperty to store the desired property name, which is "address" in this case.
// Variable for Property Value: Similarly, we create a variable address to store the value for the new property, which is "544 JSR, Meerut".
// Bracket Notation: We use bracket notation user[newProperty] to access the property dynamically. The value of newProperty is used as the key to add the new property to the user object.
// Assigning Value: We assign the value from address to the property using the = operator.

//----------------------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
//   getAge() {
//     return this.age;
//   },
// };

// console.log(user.name);
// user.greet();
// console.log(user.getAge());

// Q.14- How can you update the name property of the user object to "Ajay"?

// to update the name property of the user object to the "Ajay". You can simply assign the new value to the property

// user.name = "Ajay";
// console.log(user);

//---------------------------------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
//   getAge() {
//     return this.age;
//   },
// };

// console.log(user.name);
// user.greet();
// console.log(user.getAge());

// Q.15- If you want to change the greet method to include the age in its output, how would you do it?

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}! , and my age is ${this.age}`);
//   },
//   getAge() {
//     return this.age;
//   },
// };

// console.log(user.name);
// user.greet();
// console.log(user.getAge());

//-----------------------------------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
//   getAge() {
//     return this.age;
//   },
// };

// console.log(user.name);
// user.greet();
// console.log(user.getAge());

// Q.16- What happens if you reassign user.greet to a completely new function? How would you write it?

// If you reassign user.greet to a completely new function, you'll effectively overwrite the original greet method. The new function will then be used whenever you call user.greet().

// user.greet = function () {
//   console.log("Hello, world!");
// };

// user.greet();

// Now, when you call user.greet(), it will print "Hello, world!" instead of the original greeting message.

// This technique allows you to dynamically change the behavior of an object's methods at runtime. However, it's important to use this practice judiciously, as it can sometimes make code more complex and less predictable.

//------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
//   getAge() {
//     return this.age;
//   },
// };

// console.log(user.name);
// user.greet();
// console.log(user.getAge());

// Q.17- Is it possible to delete a property added using Object.defineProperty()? Why or why not?

// No, you cannot delete a property added using Object.defineProperty() if it was defined as non-configurable.

// When you use Object.defineProperty() to add a property to an object, you can specify various attributes for that property, including configurable. If you set configurable to false, the property becomes immutable, meaning it cannot be deleted or reconfigured.

//----------------------------------------------------------

// Q.18- If you accidentally remove a property or method, how can you restore it?

// Unfortunately, once you've accidentally removed a property or method from an object, there's no direct way to restore it.

//---------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
//   getAge() {
//     return this.age;
//   },
// };

// console.log(user.name);
// user.greet();
// console.log(user.getAge());

// Q.19- How can you check if a property like name exists in the user object before attempting to access it?

// To check if a property like name exists in the user object before accessing it, you can use the in operator:

// if ("name" in user) {
//   console.log("name exists in the user");
// } else {
//   console.log("name does not exists in the user");
// }

//--------------------------------------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
//   getAge() {
//     return this.age;
//   },
// };

// console.log(user.name);
// user.greet();
// console.log(user.getAge());

// Q.20- Can you write code to iterate over all properties and methods of the user object?

// Here's a code snippet to iterate over all properties and methods of the user object:

// for (const property in user) {
//   console.log(`${property}: ${user[property]}`);
// }

/*
1. for...in loop: This loop iterates over the enumerable properties of an object.

2. property variable: In each iteration, the property variable holds the name of the current property.

3. Accessing property values: user[property] accesses the value of the property using bracket notation.

4. Logging property and value: The console.log statement prints the property name and its corresponding value.

Note: This approach will iterate over both properties and methods. If you want to distinguish between them, you can use the typeof operator to check the type of each property:
*/

// for (const property in user) {
//   if (typeof user[property] === "function") {
//     console.log(`${property} is a method`);
//   } else {
//     console.log(`${property}: ${user[property]}`);
//   }
// }
