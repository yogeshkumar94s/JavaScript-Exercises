// Automatic type conversion, also known as type coercion, is a feature in JavaScript where the interpreter automatically converts one data type to another, if needed, during certain operations. This can occur when performing operations between different data types, such as numbers and strings. Here's an explanation with examples:

// Numeric to String Conversion:

let numberValue = 42;
let stringValue = "The answer is " + numberValue;

console.log(stringValue); // "The answer is 42"

// In this example, the + operator is used for string concatenation. JavaScript automatically converts the numberValue from a number to a string so that it can be concatenated with the string.

// String to Numeric Conversion:

let numericString = "42";
let sum = 10 + numericString;

console.log(sum); // "1042"

// Here, the numericString is automatically converted to a number during the addition operation. The numeric value is then added to 10.

// Other Examples:

let value = true + 10;
console.log(value); // 11

// In this case, the boolean value true is automatically converted to the numeric value 1 during the addition operation.

let result = "5" * 2;
console.log(result); // 10

// Here, the string "5" is automatically converted to a number during the multiplication operation.

// It's important to be aware of automatic type conversion to avoid unexpected results. While JavaScript's type coercion can be convenient, it's essential to understand the rules governing these conversions to write robust and predictable code. If needed, you can use explicit type conversion functions like parseInt(), parseFloat(), Number(), String(), etc., to ensure the desired behavior.

// String Conversion
let num = 42;
let strNum = String(num);
console.log(strNum); // "42"

// Number Conversion
let str = "123";
let numFromStr = Number(str);
console.log(numFromStr); // 123

// Boolean Conversion
let truthyValue = "true";
let boolValue = Boolean(truthyValue);
console.log(boolValue); // true

// To Integer Conversion
let floatNum = 3.14;
let intNum = parseInt(floatNum);
console.log(intNum); // 3

// To Array Conversion
let iterable = "hello";
let charArray = Array.from(iterable);
console.log(charArray); // ["h", "e", "l", "l", "o"]

// To JSON Conversion
let person = { name: "John", age: 30 };
let jsonString = JSON.stringify(person);
console.log(jsonString); // '{"name":"John","age":30}'

// To Date Conversion
let dateString = "2023-11-27";
let dateObject = new Date(dateString);
console.log(dateObject); // Mon Nov 27 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
