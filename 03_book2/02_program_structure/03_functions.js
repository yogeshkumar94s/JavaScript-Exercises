// A function is a piece of program wrapped in a value. Such values can be applied in order to run the wrapped program.

// Executing a function is called invoking, calling, or applying it. You can call a function by putting parentheses after an expression that produces a function value.

// Return values Showing a dialog box or writing text to the screen is a side effect.

// A lot of functions are useful because of the side effects they produce.

// Functions may also produce values, in which case they don’t need to have a side effect to be useful. For example, the function Math.max takes any amount of number arguments and gives back the greatest.

console.log(Math.max(2, 4));
// // → 4
// When a function produces a value, it is said to return that value. Anything that produces a value is an expression in JavaScript, which means function calls can be used within larger expressions. Here a call to Math.min, which is the opposite of Math.max, is used as part of a plus expression:

console.log(Math.min(2, 4) + 100);
// → 102
