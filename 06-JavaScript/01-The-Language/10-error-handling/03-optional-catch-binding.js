// Optional “catch” binding

/*


If we don’t need error details, catch may omit it:

try {
  // ...
} catch { // <-- without (err)
  // ...
}

*/

// Using “try…catch”

/*

Let’s explore a real-life use case of try...catch.

As we already know, JavaScript supports the JSON.parse(str) method to read JSON-encoded values.

Usually it’s used to decode data received over the network, from the server or another source.

We receive it and call JSON.parse like this:

let json = '{"name":"John", "age": 30}'; // data from the server

let user = JSON.parse(json); // convert the text representation to JS object

// now user is an object with properties from the string
alert( user.name ); // John
alert( user.age );  // 30


You can find more detailed information about JSON in the JSON methods, toJSON chapter.

If json is malformed, JSON.parse generates an error, so the script “dies”.

Should we be satisfied with that? Of course not!

This way, if something’s wrong with the data, the visitor will never know that (unless they open the developer console). And people really don’t like when something “just dies” without any error message.

Let’s use try...catch to handle the error:


let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  alert( user.name ); // doesn't work

} catch (err) {
  // ...the execution jumps here
  alert( "Our apologies, the data has errors, we'll try to request it one more time." );
  alert( err.name );
  alert( err.message );
}

Here we use the catch block only to show the message, but we can do much more: send a new network request, suggest an alternative to the visitor, send information about the error to a logging facility, … . All much better than just dying.

*/
