// Generators are a special type of function in JavaScript introduced in ECMAScript 2015 (ES6) that allows you to pause and resume the execution of a function. Unlike regular functions, generators can yield multiple values, and they provide a mechanism for creating iterators in a more readable and concise manner.

// Here's a basic overview of generators:

// Basic Syntax:

function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// Creating an iterator from the generator
const iterator = myGenerator();

// Accessing values using the iterator
console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { value: 3, done: false }
console.log(iterator.next()); // Output: { value: undefined, done: true }

// In this example:

// The function* syntax is used to define a generator function.
// The yield keyword is used to pause the execution of the generator and produce a value.
// The next method of the iterator is used to resume the execution and retrieve the next value.

// Yielding Multiple Values:
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

// Using the generator to iterate over values
for (const number of generateNumbers()) {
  console.log(number);
}
// Output:
// 1
// 2
// 3

// In this example, the generator function is used in a for...of loop to iterate over the yielded values.

// Passing Values to and from a Generator:

// Generators can both yield values and receive values from outside. This is done using the yield expression as a two-way communication channel.

function* twoWayGenerator() {
  const input = yield "Give me a value"; // Receiving a value
  yield `You gave me: ${input}`;
}

const iterator1 = twoWayGenerator();
console.log(iterator1.next()); // Output: { value: 'Give me a value', done: false }
console.log(iterator1.next("Hello")); // Output: { value: 'You gave me: Hello', done: false }
console.log(iterator1.next()); // Output: { value: undefined, done: true }

// In this example, the yield expression is used to both send and receive values between the generator and its caller.

// Infinite Generators:

// Generators can be used to create infinite sequences lazily, generating values only as needed.

function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const iterator2 = infiniteSequence();

console.log(iterator2.next().value); // Output: 0
console.log(iterator2.next().value); // Output: 1
console.log(iterator2.next().value); // Output: 2

// In this example, the infiniteSequence generator produces an infinite sequence of numbers.

// Generators are powerful for handling asynchronous operations, creating iterators, and implementing lazy evaluation in JavaScript. They provide a more readable and expressive way to work with sequences of values.
