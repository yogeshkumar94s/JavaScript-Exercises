// In JavaScript, the nullish coalescing operator (??) is a logical operator that provides a concise way to handle default values for variables that may be null or undefined. It is specifically designed to address some of the quirks of the logical OR (||) operator when dealing with falsy values.

const result = valueToCheck ?? defaultValue;

// Here, valueToCheck is the expression whose value needs to be checked for nullishness, and defaultValue is the value returned if valueToCheck is null or undefined.

//1.0 Nullish Coalescing:
// The operator only considers null or undefined as nullish values. It does not treat other falsy values (such as 0, false, '', etc.) as nullish.

//2.0 Comparison with Logical OR (||):
// Unlike the logical OR (||) operator, the nullish coalescing operator does not use the right operand (defaultValue) if the left operand (valueToCheck) is a falsy value other than null or undefined.
// This prevents unintentional overriding of non-nullish falsy values.

//3.0 Use Case - Providing Default Values:
// It is commonly used to provide default values for variables, especially in scenarios where falsy values are considered valid.

// Example 1
const fname = null;
const defaultName = "John Doe";
// Using nullish coalescing operator
const printName = fname ?? defaultName;
console.log(printName); // Outputs: 'John Doe'

// Example 2
const count = 0;
const defaultCount = 42;
// Using nullish coalescing operator
const number = count ?? defaultCount;
console.log(number); // Outputs: 0 (because 0 is not nullish)

// Example 3
const message = "";
const defaultMessage = "Hello, World!";
// Using logical OR (not recommended for default values)
const sayHello = message || defaultMessage;
console.log(sayHello); // Outputs: 'Hello, World!' (logical OR would override empty string)

// The nullish coalescing operator is particularly useful in scenarios where you want to differentiate between null/undefined and other falsy values, ensuring that default values are only applied when the value to be checked is explicitly nullish.
