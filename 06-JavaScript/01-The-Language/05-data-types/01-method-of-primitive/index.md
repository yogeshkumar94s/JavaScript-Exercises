## Methods of Primitive Data Types

### Basic Questions

1. **Can primitive data types have methods?**

```javascript
let str = "Hello, World!";
let num = 42;

console.log(str.length); // Output: 13
console.log(num.toFixed(2)); // Output: 42.00
```

**No, primitive data types themselves do not have methods.** However, in JavaScript, when you call a method on a primitive value, the JavaScript engine implicitly converts the primitive value into an object of the corresponding wrapper type (String, Number, or Boolean). This wrapper object has methods that can be called on the primitive value.

For example, when you call `str.length`, the JavaScript engine:

1. **Creates a temporary String object:** `new String("Hello, World!")`
2. **Calls the `length` property of the String object.**
3. **Discards the temporary object.**

This process is known as **autoboxing** or **implicit object coercion**. It allows you to use methods on primitive values as if they were objects.

Keep in mind that this is a behind-the-scenes mechanism. While it's convenient, it's important to be aware of the underlying process to avoid potential pitfalls and unexpected behavior.

2. **How do methods like `toUpperCase()` and `toLowerCase()` work on strings?**

```javascript
let str = "hello, world!";

let upperCaseStr = str.toUpperCase();
let lowerCaseStr = str.toLowerCase();

console.log(upperCaseStr); // Output: HELLO, WORLD!
console.log(lowerCaseStr); // Output: hello, world!
```

When you call methods like `toUpperCase()` and `toLowerCase()` on a string, JavaScript implicitly converts the string to a String object. These methods are defined on the String object's prototype, so they are available to all string instances.

**Here's a breakdown of how it works:**

1. **Implicit Conversion:** The JavaScript engine converts the string primitive to a String object.
2. **Method Call:** The method is called on the temporary String object.
3. **New String Creation:** The method returns a new string with the modified characters.
4. **Temporary Object Discarded:** The temporary String object is discarded.

**Key Points:**

- **Immutability:** String methods return new strings, leaving the original string unchanged.
- **Case Conversion:** `toUpperCase()` converts all characters to uppercase, and `toLowerCase()` converts all characters to lowercase.

3. **Explain the `trim()` method for strings.**

```javascript
let str = "   Hello, World!   ";

let trimmedStr = str.trim();

console.log(trimmedStr); // Output: "Hello, World!"
```

The `trim()` method removes whitespace from both ends of a string. It returns a new string without leading or trailing whitespace characters like spaces, tabs, and newline characters.

**Key Points:**

- **Whitespace Removal:** Removes whitespace characters from both ends of the string.
- **New String Creation:** Returns a new string, leaving the original string unchanged.
- **Common Use Cases:**
  - Cleaning user input.
  - Removing extra whitespace from formatted text.
  - Normalizing strings for comparison or processing.

4. **How does the `toFixed()` method work for numbers?**

```javascript
let num = 3.14159;

let fixedNum = num.toFixed(2);

console.log(fixedNum); // Output: "3.14"
```

The `toFixed()` method is used to format a number using fixed-point notation. It takes an integer argument, `digits`, which specifies the number of digits after the decimal point.

**How it works:**

1. **Rounds the Number:** The number is rounded to the specified number of decimal places.
2. **Formats the String:** The rounded number is formatted as a string with the specified number of decimal places.

**Key Points:**

- **Returns a String:** The `toFixed()` method returns a string representation of the number.
- **Fixed-Point Notation:** It ensures a fixed number of decimal places in the output.
- **Rounding:** The number is rounded to the specified decimal place using standard rounding rules.

5. **What is the purpose of the `parseInt()` and `parseFloat()` functions?**

```javascript
let str = "123.45";

let num1 = parseInt(str);
let num2 = parseFloat(str);

console.log(num1); // Output: 123
console.log(num2); // Output: 123.45
```

The `parseInt()` and `parseFloat()` functions are used to convert strings into numbers.

**`parseInt()`:**

- **Converts a string to an integer.**
- **Stops at the first non-numeric character.**
- **Optional radix parameter:** Specifies the base of the number (e.g., `parseInt("10", 2)` for binary).

**`parseFloat()`:**

- **Converts a string to a floating-point number.**
- **Parses the number until it encounters a non-numeric character.**

**Key Points:**

- **String to Number:** Both functions are essential for converting string representations of numbers into actual numbers.
- **Data Validation:** They can be used to validate user input or parse data from external sources.
- **Flexibility:** The `parseInt()` function allows you to parse numbers in different bases, while `parseFloat()` is specifically for floating-point numbers.

### Advanced Questions

6. **How can you convert a number to a string using the `toString()` method?**

```javascript
let num = 42;

let str = num.toString();

console.log(str); // Output: "42"
```

The `toString()` method is a versatile method that can be used to convert a number to a string representation.

**Key Points:**

- **Implicit Conversion:** In many cases, JavaScript implicitly converts numbers to strings when necessary, such as during string concatenation.
- **Custom Formatting:** You can use the `toString()` method with a radix parameter to specify the base of the number system (e.g., binary, octal, hexadecimal).
  ```javascript
  let binaryStr = (10).toString(2); // Output: "1010"
  ```
- **Formatting Options:** You can also use the `toLocaleString()` method to format numbers according to specific locales and formatting options.

7. **What are the different radix values that can be used with `parseInt()`?**

```javascript
let binaryStr = "1010";
let octalStr = "20";
let hexStr = "F";

let binaryNum = parseInt(binaryStr, 2);
let octalNum = parseInt(octalStr, 8);
let hexNum = parseInt(hexStr, 16);

console.log(binaryNum); // Output: 10
console.log(octalNum); // Output: 16
console.log(hexNum); // Output: 15
```

The `parseInt()` function accepts an optional second argument, the `radix`, which specifies the base of the number to be parsed. The most common radix values are:

- **2 (binary):** Numbers are represented using 0s and 1s.
- **8 (octal):** Numbers are represented using digits from 0 to 7.
- **10 (decimal):** The default radix, representing decimal numbers.
- **16 (hexadecimal):** Numbers are represented using digits from 0 to 9 and letters A to F.

By specifying the correct radix, you can accurately parse numbers in different bases. If the radix is not specified, `parseInt()` will try to guess the base based on the input string. However, it's always recommended to explicitly specify the radix to avoid potential parsing errors.

8. **How can you format numbers using the `toLocaleString()` method?**

```javascript
let num = 1234567.89;

// Format as US English
let usFormatted = num.toLocaleString("en-US");
console.log(usFormatted); // Output: 1,234,567.89

// Format as German German
let deFormatted = num.toLocaleString("de-DE");
console.log(deFormatted); // Output: 1.234.567,89

// Format as Japanese Japanese
let jpFormatted = num.toLocaleString("ja-JP");
console.log(jpFormatted); // Output: 1,234,567.89
```

The `toLocaleString()` method is a powerful tool for formatting numbers according to specific locales. It takes an optional locale string as an argument, which specifies the desired language and region.

**Key Points:**

- **Locale-Specific Formatting:** The method applies locale-specific formatting rules, including separators, decimal points, and currency symbols.
- **Custom Formatting:** You can customize the formatting using additional options, such as `minimumFractionDigits`, `maximumFractionDigits`, `currency`, and `style`.
- **Internationalization:** It's essential for creating applications that can adapt to different languages and regions.

9. **Explain the concept of coercion in JavaScript and how it relates to primitive data types.**

```javascript
let num = 10;
let str = "20";

console.log(num + str); // Output: 1020
```

In the above example, we are adding a number and a string. To perform this operation, JavaScript implicitly converts the number `10` to a string `'10'`. This process of converting one data type to another is called **coercion**.

**Coercion in JavaScript:**

- **Type Conversion:** JavaScript automatically converts data types to perform operations.
- **Implicit and Explicit:** Coercion can be implicit (automatic) or explicit (using functions like `Number()`, `String()`, or `Boolean()`).
- **Common Coercions:**
  - **Number to String:** When a number is concatenated with a string.
  - **String to Number:** When a string is used in arithmetic operations.
  - **Boolean to Number:** `true` becomes `1` and `false` becomes `0`.

**Coercion with Primitive Data Types:**

- **String Concatenation:** When a string is concatenated with a number, the number is converted to a string.
- **Arithmetic Operations:** When a string is used in an arithmetic operation, it's converted to a number.
- **Boolean Context:** In conditional statements and logical operations, non-zero numbers and non-empty strings are treated as `true`, while `0`, `""`, `null`, `undefined`, and `NaN` are treated as `false`.

**Important Considerations:**

- **Unexpected Behavior:** Implicit coercion can sometimes lead to unexpected results, especially when comparing values or performing complex operations.
- **Explicit Conversion:** To avoid unintended coercion, it's often better to use explicit conversion functions like `Number()`, `String()`, and `Boolean()` to ensure the desired data type.

10. **How can you create custom methods for primitive data types using prototypes?**

```javascript
String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

let str = "hello";
console.log(str.reverse()); // Output: "olleh"
```

**While primitive data types themselves don't have prototypes, JavaScript's autoboxing mechanism allows us to effectively extend their functionality.**

**Here's how it works:**

1. **Implicit Object Creation:** When you call a method on a primitive value, JavaScript creates a temporary object of the corresponding wrapper type (String, Number, or Boolean).
2. **Method Execution:** The method is executed on this temporary object.
3. **Primitive Value Returned:** The result of the method is often a new primitive value, and the temporary object is discarded.

**In the example above:**

1. The `str.reverse()` call implicitly creates a `String` object.
2. The `reverse()` method, defined on the `String.prototype`, is called on this temporary object.
3. The method reverses the string and returns a new string.
4. The temporary `String` object is discarded.

**Key Points:**

- **Prototype Extension:** You can extend the functionality of primitive data types by adding methods to their respective prototype objects.
- **Temporary Object:** The process involves creating temporary objects, which might have performance implications in certain scenarios.
- **Careful Consideration:** Use custom methods judiciously, as they can potentially impact performance and code readability.
