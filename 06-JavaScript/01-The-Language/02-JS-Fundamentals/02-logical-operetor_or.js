// there are four logical operator in JavaScript || OR, && AND,  ! NOT,  ?? NULLISH COALESCING.

// although they are called logical, they can be applied to values of any type, not only boolean. Their result can also be any type.

// 1.0 || (or)

/*
 the or operator is represented with two vertical lines symbols.

 In classical programming, the logical OR is meant to manipulate boolean values only. If any of its values are true, it returns true, othervise it returns false.
 In JavaScript the operator is little bit trickier and more powerful....
*/

// **** First lets see what happen with boolean values

// There are four possible logical combinations.

// alert(true || true); // return true
// alert(false || true); // return true
// alert(true || false); // return true
// alert(false || false); // return false

/*
As we can see the result is always true except for the case when both operands are false.

If an operand is not a boolean, it is converted to a boolean for the evaluation.
For instance, the number 1 is treated as true, and number 0 as false.
*/

if (1 || 0) {
  console.log("truthy");
}

//----------------
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log("Office is closed!");
}

/*
"OR" || find the first truthy value.

The OR || operator does the following:
Evaluate the operands from left to right.
For each operand, converts if to boolean. If the result is true, stops and returns the original value of that operands.
If all operands have been evaluated, (all values are falshy), returns the last operand.

A value is returns in its original form, without the conversion.
In other words, a chain of 'OR' returns the first truthy value, or the last one if no truthy value found.
*/

// 1.0 Getting the first truthy value from a list of variables or expressions.

let fName = "";
let lName = "yogee";
let nickName = "";

console.log(fName || lName || nickName || "yogesh kumar");

// 2.0 Short-circuit evaluation.

/*
Another feature of OR || operator is so called "short-circuit" evaluation.

it means that || processes the arguments until the first truthy value is reached, and then the value is return immediately, without even touching the other arguments.

the importance of this feature become obvious if an operand isn't just a value, but an expression with a side effect, such a variable assignment or a function call.
*/

false || console.log("printed");

true || console.log("not printed");
