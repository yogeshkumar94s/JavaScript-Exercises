/// Throwing our own errors

/*


What if json is syntactically correct, but doesn’t have a required name property?

Like this:

let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors
  alert( user.name ); // no name!

} catch (err) {
  alert( "doesn't execute" );
}

Here JSON.parse runs normally, but the absence of name is actually an error for us.

To unify error handling, we’ll use the throw operator.


*/

// “Throw” operator

/*

The throw operator generates an error.

The syntax is:

throw <error object>

Technically, we can use anything as an error object. That may be even a primitive, like a number or a string, but it’s better to use objects, preferably with name and message properties (to stay somewhat compatible with built-in errors).

JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others. We can use them to create error objects as well.

Their syntax is:

let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...


For built-in errors (not for any objects, just for errors), the name property is exactly the name of the constructor. And message is taken from the argument.

For instance:

let error = new Error("Things happen o_O");

alert(error.name); // Error
alert(error.message); // Things happen o_O


Let’s see what kind of error JSON.parse generates:

try {
  JSON.parse("{ bad json o_O }");
} catch (err) {
  alert(err.name); // SyntaxError
  alert(err.message); // Unexpected token b in JSON at position 2
}


As we can see, that’s a SyntaxError.

And in our case, the absence of name is an error, as users must have a name.

So let’s throw it:

let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert( user.name );

} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}


In the line (*), the throw operator generates a SyntaxError with the given message, the same way as JavaScript would generate it itself. The execution of try immediately stops and the control flow jumps into catch.

Now catch became a single place for all error handling: both for JSON.parse and other cases.


*/

/// Rethrowing

/*


In the example above we use try...catch to handle incorrect data. But is it possible that another unexpected error occurs within the try {...} block? Like a programming error (variable is not defined) or something else, not just this “incorrect data” thing.

For example:

let json = '{ "age": 30 }'; // incomplete data

try {
  user = JSON.parse(json); // <-- forgot to put "let" before user

  // ...
} catch (err) {
  alert("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (no JSON Error actually)
}


Of course, everything’s possible! Programmers do make mistakes. Even in open-source utilities used by millions for decades – suddenly a bug may be discovered that leads to terrible hacks.

In our case, try...catch is placed to catch “incorrect data” errors. But by its nature, catch gets all errors from try. Here it gets an unexpected error, but still shows the same "JSON Error" message. That’s wrong and also makes the code more difficult to debug.

To avoid such problems, we can employ the “rethrowing” technique. The rule is simple:

Catch should only process errors that it knows and “rethrow” all others.

The “rethrowing” technique can be explained in more detail as:

1. Catch gets all errors.
2. In the catch (err) {...} block we analyze the error object err.
3. If we don’t know how to handle it, we do throw err.


Usually, we can check the error type using the instanceof operator:

*/

// try {
//   user = {
//     /*...*/
//   };
// } catch (err) {
//   if (err instanceof ReferenceError) {
//     alert("ReferenceError"); // "ReferenceError" for accessing an undefined variable
//   }
// }

/*

We can also get the error class name from err.name property. All native errors have it. Another option is to read err.constructor.name.

In the code below, we use rethrowing so that catch only handles SyntaxError:

let json = '{ "age": 30 }'; // incomplete data
try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // unexpected error

  alert( user.name );

} catch (err) {

  if (err instanceof SyntaxError) {
    alert( "JSON Error: " + err.message );
  } else {
    throw err; // rethrow (*)
  }

}


The error throwing on line (*) from inside catch block “falls out” of try...catch and can be either caught by an outer try...catch construct (if it exists), or it kills the script.

So the catch block actually handles only errors that it knows how to deal with and “skips” all others.

The example below demonstrates how such errors can be caught by one more level of try...catch:


function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // error!
  } catch (err) {
    // ...
    if (!(err instanceof SyntaxError)) {
      throw err; // rethrow (don't know how to deal with it)
    }
  }
}

try {
  readData();
} catch (err) {
  alert( "External catch got: " + err ); // caught it!
}

Here readData only knows how to handle SyntaxError, while the outer try...catch knows how to handle everything.

*/
