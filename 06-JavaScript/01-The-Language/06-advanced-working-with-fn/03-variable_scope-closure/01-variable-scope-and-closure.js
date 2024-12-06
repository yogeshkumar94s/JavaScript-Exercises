// Variable scope, closure

/*

JavaScript is a very function-oriented language. It gives us a lot of freedom. A function can be created at any moment, passed as an argument to another function, and then called from a totally different place of code later.

We already know that a function can access variables outside of it (“outer” variables).

But what happens if outer variables change since a function is created? Will the function get newer values or the old ones?

And what if a function is passed along as an argument and called from another place of code, will it get access to outer variables at the new place?

Let’s expand our knowledge to understand these scenarios and more complex ones.

//------------------------------------------

We’ll talk about let/const variables here

In JavaScript, there are 3 ways to declare a variable: let, const (the modern ones), and var (the remnant of the past).

1. In this article we’ll use let variables in examples.
2. Variables, declared with const, behave the same, so this article is about const too.
3. The old var has some notable differences, they will be covered in the article The old "var".

//------------------------------------------


*/

//  Code blocks

/*

If a variable is declared inside a code block {...}, it’s only visible inside that block.

For example:

{
  // do some job with local variables that should not be seen outside

  let message = "Hello"; // only visible in this block

  alert(message); // Hello
}

alert(message); // Error: message is not defined

We can use this to isolate a piece of code that does its own task, with variables that only belong to it:

{
  // show message
  let message = "Hello";
  alert(message);
}

{
  // show another message
  let message = "Goodbye";
  alert(message);
}


//-----------------------------

There’d be an error without blocks

Please note, without separate blocks there would be an error, if we use let with the existing variable name:

// show message
let message = "Hello";
alert(message);

// show another message
let message = "Goodbye"; // Error: variable already declared
alert(message);

//-----------------------------

For if, for, while and so on, variables declared in {...} are also only visible inside:

if (true) {
  let phrase = "Hello!";

  alert(phrase); // Hello!
}

alert(phrase); // Error, no such variable!


Here, after if finishes, the alert below won’t see the phrase, hence the error.

That’s great, as it allows us to create block-local variables, specific to an if branch.

The similar thing holds true for for and while loops:

for (let i = 0; i < 3; i++) {
  // the variable i is only visible inside this for
  alert(i); // 0, then 1, then 2
}

alert(i); // Error, no such variable

Visually, let i is outside of {...}. But the for construct is special here: the variable, declared inside it, is considered a part of the block.






*/
