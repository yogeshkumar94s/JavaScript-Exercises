// Constructor, operator "new"

/*
The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

That can be done using constructor functions and the "new" operator.
*/

/* 
--Constructor function--

1. They are named with capital letter first.
2. They should be executed only with "new" operator.

*/

function User(name) {
  this.fName = name;
  this.isAdmin = false;
}

let user = new User("Jack");

console.log(user.fName);
console.log(user.isAdmin);

/*
When a function is executed with new, it does the following steps:

1. A new empty object is created and assigned to this.
2. The function body executes. Usually it modifies this, adds new properties to it.
3. The value of this is returned.

In other words, new User(...) does something like:
*/

function User1(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

// So let user = new User("Jack") gives the same result as:

let user2 = {
  name: "Jack",
  isAdmin: false,
};

/*
Now if we want to create other users, we can call new User("Ann"), new User("Alice") and so on. Much shorter than using literals every time, and also easy to read.

That’s the main purpose of constructors – to implement reusable object creation code.

Let’s note once again – technically, any function (except arrow functions, as they don’t have this) can be used as a constructor. It can be run with new, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.
*/

/* NOTE:
new function() { … }

If we have many lines of code all about creation of a single complex object, we can wrap them in an immediately called constructor function, like this:

// create a function and immediately call it with new
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
};

This constructor can’t be called again, because it is not saved anywhere, just created and called. So this trick aims to encapsulate the code that constructs the single object, without future reuse.

*/
