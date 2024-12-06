// Global catch

/*

Environment-specific
The information from this section is not a part of the core JavaScript.

*/

/*

Let’s imagine we’ve got a fatal error outside of try...catch, and the script died. Like a programming error or some other terrible thing.

Is there a way to react on such occurrences? We may want to log the error, show something to the user (normally they don’t see error messages), etc.

There is none in the specification, but environments usually provide it, because it’s really useful. For instance, Node.js has process.on("uncaughtException") for that. And in the browser we can assign a function to the special window.onerror property, that will run in case of an uncaught error.

The syntax:

window.onerror = function(message, url, line, col, error) {
  // ...
};

message
Error message.

url
URL of the script where error happened.

line, col
Line and column numbers where error happened.

error
Error object.


For instance:

<script>
  window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
  };

  function readData() {
    badFunc(); // Whoops, something went wrong!
  }

  readData();
</script>


The role of the global handler window.onerror is usually not to recover the script execution – that’s probably impossible in case of programming errors, but to send the error message to developers.

There are also web-services that provide error-logging for such cases, like https://errorception.com or https://www.muscula.com.

They work like this:

1. We register at the service and get a piece of JS (or a script URL) from them to insert on pages.
2. That JS script sets a custom window.onerror function.
3. When an error occurs, it sends a network request about it to the service.
4. We can log in to the service web interface and see errors.


*/

/*

// Summary

The try...catch construct allows to handle runtime errors. It literally allows to “try” running the code and “catch” errors that may occur in it.

The syntax is:

try {
  // run this code
} catch (err) {
  // if an error happened, then jump here
  // err is the error object
} finally {
  // do in any case after try/catch
}

There may be no catch section or no finally, so shorter constructs try...catch and try...finally are also valid.

Error objects have following properties:

1. message – the human-readable error message.
2. name – the string with error name (error constructor name).
3. stack (non-standard, but well-supported) – the stack at the moment of error creation.


If an error object is not needed, we can omit it by using catch { instead of catch (err) {.

We can also generate our own errors using the throw operator. Technically, the argument of throw can be anything, but usually it’s an error object inheriting from the built-in Error class. More on extending errors in the next chapter.

Rethrowing is a very important pattern of error handling: a catch block usually expects and knows how to handle the particular error type, so it should rethrow errors it doesn’t know.

Even if we don’t have try...catch, most environments allow us to setup a “global” error handler to catch errors that “fall out”. In-browser, that’s window.onerror.

*/
