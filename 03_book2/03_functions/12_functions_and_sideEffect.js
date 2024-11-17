// In programming, a "side effect" refers to any observable change that a function makes outside of its own scope, such as modifying a global variable, manipulating the DOM, or performing input/output operations. Functions that have side effects are often contrasted with "pure functions," which do not produce side effects and only depend on their input parameters to produce a result.

// Functions without Side Effects (Pure Functions):

// Pure function: No side effects
function add(a, b) {
  return a + b;
}

let result = add(3, 4); // Result is predictable, and no external state is changed

//   In this example, the add function is pure because it only depends on its inputs (a and b) to produce a result, and it doesn't modify any external state.

// Functions with Side Effects:

// Function with side effect: Modifying a global variable
let globalVar = 10;

function modifyGlobalVar(value) {
  globalVar = value;
}

modifyGlobalVar(20);
console.log(globalVar); // Output: 20 (globalVar has been modified)

// In this example, modifyGlobalVar has a side effect because it changes the value of globalVar outside of its own scope.

// Side Effects and Immutability:

// Functional programming often encourages immutability to minimize side effects. Immutability means that once a data structure is created, it cannot be changed. Instead, new structures are created with the desired changes.

// Immutable version using spread operator
let immutableArray = [1, 2, 3];

function addToImmutableArray(arr, value) {
  return [...arr, value];
}

let newArray = addToImmutableArray(immutableArray, 4);
console.log(immutableArray); // Output: [1, 2, 3] (original array is unchanged)
console.log(newArray); // Output: [1, 2, 3, 4] (new array with the added value)

// Importance of Minimizing Side Effects:

//1.0 Predictability:
// Pure functions with no side effects are easier to reason about and predict. Given the same inputs, a pure function will always produce the same result.

//2.0 Testability:
// Pure functions are more straightforward to test because their behavior is determined solely by their inputs and not by external state.

//3.0 Concurrency:
// Code with minimal side effects is often more suitable for concurrent and parallel programming, where multiple operations are happening simultaneously.

//4.0 Debugging:
// Minimizing side effects can make debugging easier, as unexpected changes to external state are reduced.

// While side effects are sometimes necessary (e.g., for interacting with the external world), it's generally beneficial to minimize them and isolate them to specific parts of your codebase. This separation helps create more modular and maintainable code.
