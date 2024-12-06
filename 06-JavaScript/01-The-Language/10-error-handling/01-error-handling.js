// Error handling, "try...catch"

/*

No matter how great we are at programming, sometimes our scripts have errors. They may occur because of our mistakes, an unexpected user input, an erroneous server response, and for a thousand other reasons.

Usually, a script “dies” (immediately stops) in case of an error, printing it to console.

But there’s a syntax construct try...catch that allows us to “catch” errors so the script can, instead of dying, do something more reasonable.

The “try…catch” syntax
The try...catch construct has two main blocks: try, and then catch:

try {

  // code...

} catch (err) {

  // error handling

}

It works like this:

1. First, the code in try {...} is executed.
2. If there were no errors, then catch (err) is ignored: the execution reaches the end of try and goes on, skipping catch.
3. If an error occurs, then the try execution is stopped, and control flows to the beginning of catch (err). The err variable (we can use any name for it) will contain an error object with details about what happened.


So, an error inside the try {...} block does not kill the script – we have a chance to handle it in catch.

Let’s look at some examples.

1. An errorless example: shows alert (1) and (2):

try {

  alert('Start of try runs');  // (1) <--

  // ...no errors here

  alert('End of try runs');   // (2) <--

} catch (err) {

  alert('Catch is ignored, because there are no errors'); // (3)

}


2. An example with an error: shows (1) and (3):

try {

  alert('Start of try runs');  // (1) <--

  lalala; // error, variable is not defined!

  alert('End of try (never reached)');  // (2)

} catch (err) {

  alert(`Error has occurred!`); // (3) <--

}


//-----------------------------------------------------------------------

///  try...catch only works for runtime errors

For try...catch to work, the code must be runnable. In other words, it should be valid JavaScript.

It won’t work if the code is syntactically wrong, for instance it has unmatched curly braces:


try {
  {{{{{{{{{{{{
} catch (err) {
  alert("The engine can't understand this code, it's invalid");
}




The JavaScript engine first reads the code, and then runs it. The errors that occur on the reading phase are called “parse-time” errors and are unrecoverable (from inside that code). That’s because the engine can’t understand the code.

So, try...catch can only handle errors that occur in valid code. Such errors are called “runtime errors” or, sometimes, “exceptions”.

//-----------------------------------------------------------------------


//-----------------------------------------------------------------------

/// try...catch works synchronously

If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:

try {
  setTimeout(function() {
    noSuchVariable; // script will die here
  }, 1000);
} catch (err) {
  alert( "won't work" );
}

That’s because the function itself is executed later, when the engine has already left the try...catch construct.

To catch an exception inside a scheduled function, try...catch must be inside that function:

setTimeout(function() {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    alert( "error is caught here!" );
  }
}, 1000);

//-----------------------------------------------------------------------





*/
