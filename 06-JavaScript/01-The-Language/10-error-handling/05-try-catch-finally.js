// try…catch…finally

/*


Wait, that’s not all.

The try...catch construct may have one more code clause: finally.

If it exists, it runs in all cases:

1. after try, if there were no errors,
2. after catch, if there were errors.

The extended syntax looks like this:


try {
   ... try to execute the code ...
} catch (err) {
   ... handle errors ...
} finally {
   ... execute always ...
}


Try running this code:

try {
  alert( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (err) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}


The code has two ways of execution:

1. If you answer “Yes” to “Make an error?”, then try -> catch -> finally.
2. If you say “No”, then try -> finally.

The finally clause is often used when we start doing something and want to finalize it in any case of outcome.

For instance, we want to measure the time that a Fibonacci numbers function fib(n) takes. Naturally, we can start measuring before it runs and finish afterwards. But what if there’s an error during the function call? In particular, the implementation of fib(n) in the code below returns an error for negative or non-integer numbers.

The finally clause is a great place to finish the measurements no matter what.

Here finally guarantees that the time will be measured correctly in both situations – in case of a successful execution of fib and in case of an error in it:


let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "error occurred");

alert( `execution took ${diff}ms` );


You can check by running the code with entering 35 into prompt – it executes normally, finally after try. And then enter -1 – there will be an immediate error, and the execution will take 0ms. Both measurements are done correctly.

In other words, the function may finish with return or throw, that doesn’t matter. The finally clause executes in both cases.


//-----------------------------------------------------

/// Variables are local inside try...catch...finally

Please note that result and diff variables in the code above are declared before try...catch.

Otherwise, if we declared let in try block, it would only be visible inside of it.

//-----------------------------------------------------


//-----------------------------------------------------

/// finally and return

The finally clause works for any exit from try...catch. That includes an explicit return.

In the example below, there’s a return in try. In this case, finally is executed just before the control returns to the outer code.

// function func() {

//   try {
//     return 1;

//   } catch (err) {
//     /* ... */
// } finally {
//     alert( 'finally' );
//   }
// }

// alert( func() );

//-----------------------------------------------------

//***********//////////*********/*//////////-------------------- */ */

// try...finally

/*

The try...finally construct, without catch clause, is also useful. We apply it when we don’t want to handle errors here (let them fall through), but want to be sure that processes that we started are finalized.

function func() {
  // start doing something that needs completion (like measurements)
  try {
    // ...
  } finally {
    // complete that thing even if all dies
  }
}


In the code above, an error inside try always falls out, because there’s no catch. But finally works before the execution flow leaves the function.

*/
