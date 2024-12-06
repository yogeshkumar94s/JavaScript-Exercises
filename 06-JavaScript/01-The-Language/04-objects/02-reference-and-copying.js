// Object references and copying

/*
One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

Let’s start with a primitive, such as a string.
Here we put a copy of message into phrase:
*/

let message = "Hello!";
let phrase = message;

// As a result we have two independent variables, each one storing the string "Hello!".

//****** */ Note: Objects are not like that.********

/*
A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
*/

//ex.

let user = {
  name: "yogee",
  age: 25,
};

/*
When an object variable is copied, the reference is copied, but the object itself is not duplicated.
*/

let user1 = { name: "John" };

let admin = user1; // copy the reference

// Now we have two variables, each storing a reference to the same object:
