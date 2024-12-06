//  Nested functions

/*

A function is called “nested” when it is created inside another function.

It is easily possible to do this with JavaScript.

We can use it to organize our code, like this:

function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  alert( "Hello, " + getFullName() );
  alert( "Bye, " + getFullName() );

}


Here the nested function getFullName() is made for convenience. It can access the outer variables and so can return the full name. Nested functions are quite common in JavaScript.

What’s much more interesting, a nested function can be returned: either as a property of a new object or as a result by itself. It can then be used somewhere else. No matter where, it still has access to the same outer variables.

Below, makeCounter creates the “counter” function that returns the next number on each invocation:

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2

Despite being simple, slightly modified variants of that code have practical uses, for instance, as a random number generator to generate random values for automated tests.

How does this work? If we create multiple counters, will they be independent? What’s going on with the variables here?

Understanding such things is great for the overall knowledge of JavaScript and beneficial for more complex scenarios. So let’s go a bit in-depth.

*/

//  Lexical Environment

/*

Step 1. Variables

In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.

The Lexical Environment object consists of two parts:

1. Environment Record – an object that stores all local variables as its properties (and some other information like the value of this).

2. A reference to the outer lexical environment, the one associated with the outer code.

A “variable” is just a property of the special internal object, Environment Record. “To get or change a variable” means “to get or change a property of that object”.

In this simple code without functions, there is only one Lexical Environment:

This is the so-called global Lexical Environment, associated with the whole script.


Rectangles on the right-hand side demonstrate how the global Lexical Environment changes during the execution:

1. When the script starts, the Lexical Environment is pre-populated with all declared variables.
  - Initially, they are in the “Uninitialized” state. That’s a special internal state, it means that the engine knows about the variable, but it cannot be referenced until it has been declared with let. It’s almost the same as if the variable didn’t exist.

2. Then let phrase definition appears. There’s no assignment yet, so its value is undefined. We can use the variable from this point forward.

3. phrase is assigned a value.

4. phrase changes the value.


Everything looks simple for now, right?

1. A variable is a property of a special internal object, associated with the currently executing block/function/script.
2. Working with variables is actually working with the properties of that object.


//--------------------------------------

Lexical Environment is a specification object

“Lexical Environment” is a specification object: it only exists “theoretically” in the language specification to describe how things work. We can’t get this object in our code and manipulate it directly.

JavaScript engines also may optimize it, discard variables that are unused to save memory and perform other internal tricks, as long as the visible behavior remains as described.

//--------------------------------------

*/

// Step 2. Function Declarations

/*

A function is also a value, like a variable.

The difference is that a Function Declaration is instantly fully initialized.

When a Lexical Environment is created, a Function Declaration immediately becomes a ready-to-use function (unlike let, that is unusable till the declaration).

That’s why we can use a function, declared as Function Declaration, even before the declaration itself.

Naturally, this behavior only applies to Function Declarations, not Function Expressions where we assign a function to a variable, such as let say = function(name)....



*/

// Step 3. Inner and outer Lexical Environment

/*


When a function runs, at the beginning of the call, a new Lexical Environment is created automatically to store local variables and parameters of the call.

During the function call we have two Lexical Environments: the inner one (for the function call) and the outer one (global):

1. The inner Lexical Environment corresponds to the current execution of say. It has a single property: name, the function argument. We called say("John"), so the value of the name is "John".

2. The outer Lexical Environment is the global Lexical Environment. It has the phrase variable and the function itself.

The inner Lexical Environment has a reference to the outer one.

When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one.

If a variable is not found anywhere, that’s an error in strict mode (without use strict, an assignment to a non-existing variable creates a new global variable, for compatibility with old code).

In this example the search proceeds as follows:

1. For the name variable, the alert inside say finds it immediately in the inner Lexical Environment.

2. When it wants to access phrase, then there is no phrase locally, so it follows the reference to the outer Lexical Environment and finds it there.

*/

// Step 4. Returning a function

/*


Let’s return to the makeCounter example.

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

At the beginning of each makeCounter() call, a new Lexical Environment object is created, to store variables for this makeCounter run.

What’s different is that, during the execution of makeCounter(), a tiny nested function is created of only one line: return count++. We don’t run it yet, only create.

All functions remember the Lexical Environment in which they were made. Technically, there’s no magic here: all functions have the hidden property named [[Environment]], that keeps the reference to the Lexical Environment where the function was created:

So, counter.[[Environment]] has the reference to {count: 0} Lexical Environment. That’s how the function remembers where it was created, no matter where it’s called. The [[Environment]] reference is set once and forever at function creation time.

Later, when counter() is called, a new Lexical Environment is created for the call, and its outer Lexical Environment reference is taken from counter.[[Environment]]:


Now when the code inside counter() looks for count variable, it first searches its own Lexical Environment (empty, as there are no local variables there), then the Lexical Environment of the outer makeCounter() call, where it finds and changes it.

A variable is updated in the Lexical Environment where it lives.

If we call counter() multiple times, the count variable will be increased to 2, 3 and so on, at the same place.


//------------------------------------------

Closure

There is a general programming term “closure”, that developers generally should know.

A closure is a function that remembers its outer variables and can access them. In some languages, that’s not possible, or a function should be written in a special way to make it happen. But as explained above, in JavaScript, all functions are naturally closures (there is only one exception, to be covered in The "new Function" syntax).

That is: they automatically remember where they were created using a hidden [[Environment]] property, and then their code can access outer variables.

When on an interview, a frontend developer gets a question about “what’s a closure?”, a valid answer would be a definition of the closure and an explanation that all functions in JavaScript are closures, and maybe a few more words about technical details: the [[Environment]] property and how Lexical Environments work.


//------------------------------------------

*/
