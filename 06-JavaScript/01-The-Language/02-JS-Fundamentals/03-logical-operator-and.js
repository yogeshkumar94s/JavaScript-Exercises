// The AND operator is represented with two ampersands &&:

// Note: In classical programming, AND returns true if both operands are truthy and false otherwise:

console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

//An example with if:

let hour = 4;
let minute = 30;

if (hour == 4 && minute == 30) {
  console.log("The time is 4:30"); // The time is 4:30
}

/*
AND “&&” finds the first falsy value

The AND && operator does the following:

1. Evaluates operands from left to right.
2. For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
3. If all operands have been evaluated (i.e. all were truthy), returns the last operand.

In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.
*/

// if the first operand is truthy,
// AND returns the second operand:
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log(null && 5); // null
console.log(0 && "no matter what"); // 0

console.log(1 && 2 && null && 3); // null
console.log(1 && 2 && 3); // 3, the last one

/*
The precedence of AND && operator is higher than OR ||.

So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).


Don’t replace if with || or &&
Sometimes, people use the AND && operator as a “shorter way to write if”.

For instance:
*/

let x = 1;

x > 0 && console.log("Greater than zero!");

/*

The action in the right part of && would execute only if the evaluation reaches it. That is, only if (x > 0) is true.

So we basically have an analogue for:

*/

let x1 = 1;

if (x1 > 0) console.log("Greater than zero!");

/*
Although, the variant with && appears shorter, if is more obvious and tends to be a little bit more readable. So we recommend using every construct for its purpose: use if if we want if and use && if we want AND.
*/
