// Short-circuiting is a behavior in logical operations where the interpreter stops evaluating the expression as soon as the result is known. This can be particularly useful when dealing with complex conditions involving logical AND (&&) and OR (||) operators. Here's an explanation with examples:

// Logical AND (&&) Short-Circuiting:

// The && operator short-circuits when the first operand is false. If the first operand is false, the overall result will be false, regardless of the value of the second operand.

let result = false && someFunction(); // Short-circuits, someFunction() is not called

console.log(result); // false

// In this example, someFunction() is not called because the first operand (false) already determines that the overall result will be false.

// Logical OR (||) Short-Circuiting:

// The || operator short-circuits when the first operand is true. If the first operand is true, the overall result will be true, regardless of the value of the second operand.

let result1 = true || someFunction(); // Short-circuits, someFunction() is not called

console.log(result1); // true

// Here, someFunction() is not called because the first operand (true) already determines that the overall result will be true.

// Short-Circuiting for Efficiency:

// Short-circuiting is often used for efficiency, especially when dealing with conditional statements. For example:

let isValid =
  userInput !== undefined && userInput !== null && userInput.trim() !== "";

// In this case, if userInput is undefined or null, the subsequent checks (userInput.trim() !== "") will not be executed, improving performance.

// Understanding short-circuiting can lead to more efficient and concise code, especially in scenarios where further evaluation is unnecessary based on the initial conditions.

// Real case example of short-circuiting with logical AND*-*-*-*-**-*-
function greetUser(username) {
  // Using short-circuiting to provide a default value if username is undefined or null
  const greeting = "Hello, " + (username && username.toLowerCase()) + "!";
  console.log(greeting);
}

// Example usages:
greetUser("John"); // Output: Hello, john!
greetUser(); // Output: Hello, undefined!

// Real case example of short-circuiting with logical OR*-*-*-*-**-***-*
function getUserDetails(user) {
  // Using short-circuiting to provide a default name if user name is not provided
  const displayName = user.name || "Guest";

  // Using short-circuiting to provide a default age if age is not provided or is not a number
  const userAge = user.age || 25;

  console.log("Display Name:", displayName);
  console.log("User Age:", userAge);
}

// Example usages:
getUserDetails({ name: "John", age: 30 });
// Output: Display Name: John
//         User Age: 30

getUserDetails({ age: 28 });
// Output: Display Name: Guest
//         User Age: 28

getUserDetails({});
// Output: Display Name: Guest
//         User Age: 25
