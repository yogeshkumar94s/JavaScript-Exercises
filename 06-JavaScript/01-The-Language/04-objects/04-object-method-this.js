// Object methods, "this"

// Objects are usually created to represent entities of the real world, like users, orders and so on:

let user = {
  name: "John",
  age: 30,
};

// A function that is a property of an object is called its method.

// Object-oriented programming
/*
When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”.

OOP is a big thing, an interesting science of its own. How to choose the right entities? How to organize the interaction between them? That’s architecture, and there are great books on that topic, like “Design Patterns: Elements of Reusable Object-Oriented Software” by E. Gamma, R. Helm, R. Johnson, J. Vissides or “Object-Oriented Analysis and Design with Applications” by G. Booch, and more.
*/

// “this” in methods
/*
It’s common that an object method needs to access the information stored in the object to do its job.

For instance, the code inside user.sayHi() may need the name of the user.

To access the object, a method can use the this keyword.

The value of this is the object “before dot”, the one used to call the method.
*/

let user1 = {
  name: "yogee",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
  },
};

user1.sayHi();

// “this” is not bound

/*
In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.
*/

function sayHi() {
  alert(this.name);
}

/*
The value of this is evaluated during the run-time, depending on the context.

For instance, here the same function is assigned to two different objects and has different “this” in the calls:
*/

let user2 = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert(this.name);
}

// use the same function in two objects
user2.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user2.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin["f"](); // Admin (dot or square brackets access the method – doesn't matter)

//The rule is simple: if obj.f() is called, then this is obj during the call of f. So it’s either user or admin in the example above.

// NOTE: Calling without an object: this == undefined

// Arrow functions have no “this”
/*
Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

For instance, here arrow() uses this from the outer user.sayHi() method:
*/

let user3 = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};

user3.sayHi(); // Ilya
