# Regular Expressions in JavaScript

## Basic Regular Expression

### Regular Expressions in JavaScript

**Regular expressions** (regex) are patterns used to match character combinations in strings. In JavaScript, regex can be created using:

1. **Literal notation:** `/pattern/flags`
2. **Constructor notation:** `new RegExp('pattern', 'flags')`

### Common Regex Methods

- `test()`: Tests for a match in a string. Returns `true` or `false`.
- `exec()`: Executes a search for a match in a string. Returns an array of information or `null`.
- String methods:
  - `match()`: Retrieves the matches.
  - `replace()`: Replaces matches.
  - `search()`: Searches for a match.
  - `split()`: Splits the string by matches.

### Flags

- `g`: Global search.
- `i`: Case-insensitive search.
- `m`: Multi-line search.
- `u`: Unicode search.
- `y`: Sticky search.

### Common Patterns

- `.`: Any character except newline.
- `\d`: Digit (0-9).
- `\D`: Non-digit.
- `\w`: Word character (alphanumeric + underscore).
- `\W`: Non-word character.
- `\s`: Whitespace character.
- `\S`: Non-whitespace character.
- `^`: Start of string.
- `$`: End of string.
- `*`: 0 or more.
- `+`: 1 or more.
- `?`: 0 or 1.
- `{n}`: Exactly n occurrences.
- `{n,}`: n or more occurrences.
- `{n,m}`: Between n and m occurrences.

### Examples

```javascript
// 1. Test if a string contains a digit
let regex1 = /\d/;
console.log(regex1.test("hello123")); // true

// 2. Find all word characters in a string
let regex2 = /\w+/g;
console.log("hello world!".match(regex2)); // ["hello", "world"]

// 3. Replace all digits in a string with '#'
let regex3 = /\d/g;
console.log("abc123xyz".replace(regex3, "#")); // "abc###xyz"

// 4. Validate an email address
let regex4 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(regex4.test("example@test.com")); // true

// 5. Split a string by whitespace
let regex5 = /\s+/;
console.log("split this string".split(regex5)); // ["split", "this", "string"]
```

### Tasks to Complete

1. **Email Validation Script:** Write a script that validates email addresses using a regular expression. Log whether each email is valid.
2. **Phone Number Extraction Script:** Write a script that extracts phone numbers from a string using a regular expression. Log the extracted phone numbers.

Here are the scripts to complete the tasks:

### Task 1: Match All Occurrences of the Word "JavaScript"

```javascript
// Script to match all occurrences of the word "JavaScript" in a string
const text1 =
  "JavaScript is a powerful language. Many developers love JavaScript because of its versatility.";

// Regular expression to match "JavaScript"
const regex1 = /JavaScript/g;

// Log the matches
const matches1 = text1.match(regex1);
console.log(matches1); // Output: ["JavaScript", "JavaScript"]
```

### Task 2: Match All Digits in a String

```javascript
// Script to match all digits in a string
const text2 =
  "The year 2024 has 365 days and 12 months. Contact me at 123-456-7890.";

// Regular expression to match all digits
const regex2 = /\d+/g;

// Log the matches
const matches2 = text2.match(regex2);
console.log(matches2); // Output: ["2024", "365", "12", "123", "456", "7890"]
```

---

## Character Classes and Quantifiers

### Character Classes

Character classes in regular expressions allow you to specify a set of characters to match. Here are some commonly used character classes:

- `\d`: Matches any digit (equivalent to `[0-9]`).
- `\D`: Matches any non-digit.
- `\w`: Matches any alphanumeric character including the underscore (equivalent to `[a-zA-Z0-9_]`).
- `\W`: Matches any non-word character.
- `\s`: Matches any whitespace character (spaces, tabs, line breaks).
- `\S`: Matches any non-whitespace character.
- `[abc]`: Matches any character a, b, or c.
- `[^abc]`: Matches any character except a, b, or c.

### Quantifiers

Quantifiers specify how many instances of a character, group, or character class must be present in the input for a match to be found:

- `*`: Matches 0 or more occurrences.
- `+`: Matches 1 or more occurrences.
- `?`: Matches 0 or 1 occurrence.
- `{n}`: Matches exactly n occurrences.
- `{n,}`: Matches n or more occurrences.
- `{n,m}`: Matches between n and m occurrences.

### Examples

#### Character Classes Example

Match all digits and non-digits in a string:

```javascript
const text = "Phone number: 123-456-7890";
const digitRegex = /\d/g; // Matches all digits
const nonDigitRegex = /\D/g; // Matches all non-digits

console.log(text.match(digitRegex)); // Output: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
console.log(text.match(nonDigitRegex)); // Output: ["P", "h", "o", "n", "e", " ", "n", "u", "m", "b", "e", "r", ":", " ", "-", "-", "-"]
```

#### Quantifiers Example

Match words with one or more characters and spaces with zero or more characters:

```javascript
const text = "Hello world!";
const wordRegex = /\w+/g; // Matches words with one or more characters
const spaceRegex = /\s*/g; // Matches spaces with zero or more characters

console.log(text.match(wordRegex)); // Output: ["Hello", "world"]
console.log(text.match(spaceRegex)); // Output: ["", "", "", "", "", "", "", "", "", "", "", ""]
```

### Combined Example

Find all sequences of digits with 2 to 4 digits long:

```javascript
const text = "12 123 1234 12345";
const regex = /\d{2,4}/g; // Matches sequences of digits with 2 to 4 digits

console.log(text.match(regex)); // Output: ["12", "123", "1234", "1234"]
```

### Task 1: Match All Words That Start with a Capital Letter

Here’s a regular expression to match all words in a string that start with a capital letter:

```javascript
const text = "This is a Test. JavaScript is Great for Learning.";
const capitalLetterWordRegex = /\b[A-Z][a-z]*\b/g; // Matches words starting with a capital letter

const matches = text.match(capitalLetterWordRegex);
console.log(matches); // Output: ["This", "Test", "JavaScript", "Great", "Learning"]
```

### Explanation

- `\b`: Word boundary.
- `[A-Z]`: Matches any capital letter.
- `[a-z]*`: Matches zero or more lowercase letters.
- `\b`: Word boundary.
- `g`: Global flag to find all matches.

### Task 2: Match All Sequences of One or More Digits

Here’s a regular expression to match all sequences of one or more digits in a string:

```javascript
const text = "My phone number is 123-456-7890 and my zip code is 98765.";
const digitSequenceRegex = /\d+/g; // Matches sequences of one or more digits

const digitMatches = text.match(digitSequenceRegex);
console.log(digitMatches); // Output: ["123", "456", "7890", "98765"]
```

### Explanation

- `\d`: Matches any digit.
- `+`: Matches one or more occurrences.
- `g`: Global flag to find all matches.

### Combined Script

```javascript
// Task 1
const text1 = "This is a Test. JavaScript is Great for Learning.";
const capitalLetterWordRegex = /\b[A-Z][a-z]*\b/g;
const capitalLetterMatches = text1.match(capitalLetterWordRegex);
console.log("Words starting with a capital letter:", capitalLetterMatches);

// Task 2
const text2 = "My phone number is 123-456-7890 and my zip code is 98765.";
const digitSequenceRegex = /\d+/g;
const digitMatches = text2.match(digitSequenceRegex);
console.log("Sequences of one or more digits:", digitMatches);
```

---

## Grouping and Capturing

### Grouping and Capturing in JavaScript Regular Expressions

Grouping and capturing in regular expressions allow you to:

1. Group parts of a pattern together so they can be treated as a single unit.
2. Capture matched substrings so they can be used later.

#### Syntax

- **Grouping**: `(...)` - Groups the enclosed pattern.
- **Capturing**: `(...)` - Captures the matched text of the enclosed pattern.
- **Non-Capturing Group**: `(?:...)` - Groups the enclosed pattern without capturing it.

### Example Tasks

1. **Write a regular expression to match a date in the format `YYYY-MM-DD` and capture the year, month, and day. Log the captures.**
2. **Write a regular expression to match email addresses and capture the username and domain separately. Log the captures.**

### Task 1: Match and Capture Date Components

Here’s a regular expression to match a date in the format `YYYY-MM-DD` and capture the year, month, and day:

```javascript
const dateText = "Today's date is 2024-07-31.";
const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;

const dateMatch = dateText.match(dateRegex);
if (dateMatch) {
  const [fullMatch, year, month, day] = dateMatch;
  console.log(`Full Match: ${fullMatch}`);
  console.log(`Year: ${year}`);
  console.log(`Month: ${month}`);
  console.log(`Day: ${day}`);
}
```

### Explanation

- `(\d{4})`: Captures the year (4 digits).
- `(\d{2})`: Captures the month (2 digits).
- `(\d{2})`: Captures the day (2 digits).

### Task 2: Match and Capture Email Components

Here’s a regular expression to match email addresses and capture the username and domain separately:

```javascript
const emailText = "Contact me at example.user@domain.com.";
const emailRegex = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;

const emailMatch = emailText.match(emailRegex);
if (emailMatch) {
  const [fullMatch, username, domain] = emailMatch;
  console.log(`Full Match: ${fullMatch}`);
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
}
```

### Explanation

- `([a-zA-Z0-9._%+-]+)`: Captures the username part of the email.
- `@`: Matches the `@` symbol.
- `([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})`: Captures the domain part of the email.

### Combined Script

```javascript
// Task 1: Date Matching and Capturing
const dateText = "Today's date is 2024-07-31.";
const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;

const dateMatch = dateText.match(dateRegex);
if (dateMatch) {
  const [fullMatch, year, month, day] = dateMatch;
  console.log(`Full Match: ${fullMatch}`);
  console.log(`Year: ${year}`);
  console.log(`Month: ${month}`);
  console.log(`Day: ${day}`);
}

// Task 2: Email Matching and Capturing
const emailText = "Contact me at example.user@domain.com.";
const emailRegex = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;

const emailMatch = emailText.match(emailRegex);
if (emailMatch) {
  const [fullMatch, username, domain] = emailMatch;
  console.log(`Full Match: ${fullMatch}`);
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
}
```

### Regular Expressions with Grouping and Capturing

Regular expressions are powerful tools for pattern matching and capturing specific parts of strings. Here we'll create regular expressions to capture components from a US phone number and an email address.

### Task 1: Capture Components of a US Phone Number

The format we'll use for the US phone number is `(123) 567-7890`.

#### Regular Expression

The regular expression to capture the area code, central office code, and line number is:

```regex
\((\d{3})\) (\d{3})-(\d{4})
```

- `\((\d{3})\)`: Matches the area code enclosed in parentheses and captures the 3 digits.
- `(\d{3})`: Matches and captures the central office code (3 digits).
- `-(\d{4})`: Matches the hyphen and captures the line number (4 digits).

#### Script

```javascript
const phoneText = "Contact me at (123) 567-7890.";
const phoneRegex = /\((\d{3})\) (\d{3})-(\d{4})/;

const phoneMatch = phoneText.match(phoneRegex);
if (phoneMatch) {
  const [fullMatch, areaCode, centralOfficeCode, lineNumber] = phoneMatch;
  console.log(`Full Match: ${fullMatch}`);
  console.log(`Area Code: ${areaCode}`);
  console.log(`Central Office Code: ${centralOfficeCode}`);
  console.log(`Line Number: ${lineNumber}`);
}
```

### Task 2: Capture Components of an Email Address

The format we'll use for the email address is `username@domain`.

#### Regular Expression

The regular expression to capture the username and domain is:

```regex
([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})
```

- `([a-zA-Z0-9._%+-]+)`: Matches and captures the username part of the email.
- `@`: Matches the `@` symbol.
- `([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})`: Matches and captures the domain part of the email.

#### Script

```javascript
const emailText = "Contact me at example.user@domain.com.";
const emailRegex = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;

const emailMatch = emailText.match(emailRegex);
if (emailMatch) {
  const [fullMatch, username, domain] = emailMatch;
  console.log(`Full Match: ${fullMatch}`);
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
}
```

### Combined Script

```javascript
// Task 1: Phone Number Matching and Capturing
const phoneText = "Contact me at (123) 567-7890.";
const phoneRegex = /\((\d{3})\) (\d{3})-(\d{4})/;

const phoneMatch = phoneText.match(phoneRegex);
if (phoneMatch) {
  const [fullMatch, areaCode, centralOfficeCode, lineNumber] = phoneMatch;
  console.log(`Full Match: ${fullMatch}`);
  console.log(`Area Code: ${areaCode}`);
  console.log(`Central Office Code: ${centralOfficeCode}`);
  console.log(`Line Number: ${lineNumber}`);
}

// Task 2: Email Matching and Capturing
const emailText = "Contact me at example.user@domain.com.";
const emailRegex = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;

const emailMatch = emailText.match(emailRegex);
if (emailMatch) {
  const [fullMatch, username, domain] = emailMatch;
  console.log(`Full Match: ${fullMatch}`);
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
}
```

---

## Assertions and Boundaries

### Assertions and Boundaries in Regular Expressions

Assertions and boundaries are advanced concepts in regular expressions that allow for more precise pattern matching by specifying conditions that must be met for a match to occur.

#### Assertions

Assertions specify conditions that must be true for a match to occur but do not consume any characters in the input string.

1. **Lookahead Assertions (`?=` and `?!`)**:

   - **Positive Lookahead (`?=`)**: Asserts that what follows the current position in the string matches the given pattern.
   - **Negative Lookahead (`?!`)**: Asserts that what follows the current position in the string does not match the given pattern.

2. **Lookbehind Assertions (`?<=` and `?<!`)**:
   - **Positive Lookbehind (`?<=`)**: Asserts that what precedes the current position in the string matches the given pattern.
   - **Negative Lookbehind (`?<!`)**: Asserts that what precedes the current position in the string does not match the given pattern.

#### Boundaries

Boundaries are used to match positions in the string rather than actual characters.

1. **Word Boundary (`\b`)**: Matches the position between a word character (alphanumeric or underscore) and a non-word character.
2. **Non-word Boundary (`\B`)**: Matches the position between two word characters or two non-word characters.
3. **Start of String (`^`)**: Matches the position at the start of the string.
4. **End of String (`$`)**: Matches the position at the end of the string.

### Examples and Tasks

Let's look at some examples and tasks to understand these concepts better.

#### Example 1: Positive Lookahead

Match the word "JavaScript" only if it is followed by the word "is".

```javascript
const text = "JavaScript is awesome. I love JavaScript.";
const regex = /JavaScript(?= is)/g;

const matches = text.match(regex);
console.log(matches); // Output: [ 'JavaScript' ]
```

#### Example 2: Negative Lookahead

Match the word "JavaScript" only if it is not followed by the word "is".

```javascript
const text = "JavaScript is awesome. I love JavaScript.";
const regex = /JavaScript(?! is)/g;

const matches = text.match(regex);
console.log(matches); // Output: [ 'JavaScript' ]
```

#### Example 3: Word Boundary

Match whole words "Java" and "Script" but not parts of words like "JavaScript".

```javascript
const text =
  "JavaScript is a programming language. Java and Script are parts of it.";
const regex = /\b(Java|Script)\b/g;

const matches = text.match(regex);
console.log(matches); // Output: [ 'Java', 'Script' ]
```

#### Example 4: Start and End of String

Match a string that starts with "Hello" and ends with "World".

```javascript
const text = "Hello, World! Hello World.";
const regex = /^Hello.*World$/;

const matches = text.match(regex);
console.log(matches); // Output: null (no match because the string contains extra characters)
```

### Tasks

#### Task 1: Use a Positive Lookahead to Match Digits Followed by a Space

Write a regular expression to match all digits in a string that are followed by a space. Log the matches.

```javascript
const text = "123 456 7890";
const regex = /\d(?= )/g;

const matches = text.match(regex);
console.log(matches); // Output: [ '3', '6' ] (only digits followed by a space)
```

#### Task 2: Use a Word Boundary to Match Words Starting with "A"

Write a regular expression to match all words in a string that start with the letter "A". Log the matches.

```javascript
const text = "Apples are amazing and Ants are annoying.";
const regex = /\bA\w*/g;

const matches = text.match(regex);
console.log(matches); // Output: [ 'Apples', 'are', 'amazing', 'Ants', 'are', 'annoying' ]
```

### Combined Script

```javascript
// Example 1: Positive Lookahead
const text1 = "JavaScript is awesome. I love JavaScript.";
const regex1 = /JavaScript(?= is)/g;
const matches1 = text1.match(regex1);
console.log(matches1); // Output: [ 'JavaScript' ]

// Example 2: Negative Lookahead
const text2 = "JavaScript is awesome. I love JavaScript.";
const regex2 = /JavaScript(?! is)/g;
const matches2 = text2.match(regex2);
console.log(matches2); // Output: [ 'JavaScript' ]

// Example 3: Word Boundary
const text3 =
  "JavaScript is a programming language. Java and Script are parts of it.";
const regex3 = /\b(Java|Script)\b/g;
const matches3 = text3.match(regex3);
console.log(matches3); // Output: [ 'Java', 'Script' ]

// Example 4: Start and End of String
const text4 = "Hello, World! Hello World.";
const regex4 = /^Hello.*World$/;
const matches4 = text4.match(regex4);
console.log(matches4); // Output: null

// Task 1: Positive Lookahead to Match Digits Followed by a Space
const text5 = "123 456 7890";
const regex5 = /\d(?= )/g;
const matches5 = text5.match(regex5);
console.log(matches5); // Output: [ '3', '6' ]

// Task 2: Word Boundary to Match Words Starting with "A"
const text6 = "Apples are amazing and Ants are annoying.";
const regex6 = /\bA\w*/g;
const matches6 = text6.match(regex6);
console.log(matches6); // Output: [ 'Apples', 'Ants' ]
```

### Tasks

#### Task 1: Match a Word Only if It is at the Beginning of a String

To match a word only if it is at the beginning of a string, you can use the `^` anchor, which denotes the start of a string.

```javascript
const text1 = "Hello, this is a test. Hello again.";
const regex1 = /^Hello/g;

const matches1 = text1.match(regex1);
console.log(matches1); // Output: [ 'Hello' ]
```

#### Task 2: Match a Word Only if It is at the End of a String

To match a word only if it is at the end of a string, you can use the `$` anchor, which denotes the end of a string.

```javascript
const text2 = "This is a test. End";
const regex2 = /End$/g;

const matches2 = text2.match(regex2);
console.log(matches2); // Output: [ 'End' ]
```

### Combined Script

Here's a script that completes both tasks and logs the matches:

```javascript
// Task 1: Match a Word Only if It is at the Beginning of a String
const text1 = "Hello, this is a test. Hello again.";
const regex1 = /^Hello/g;
const matches1 = text1.match(regex1);
console.log(matches1); // Output: [ 'Hello' ]

// Task 2: Match a Word Only if It is at the End of a String
const text2 = "This is a test. End";
const regex2 = /End$/g;
const matches2 = text2.match(regex2);
console.log(matches2); // Output: [ 'End' ]
```

These regular expressions make use of the `^` and `$` anchors to match words only if they are at the beginning or end of a string, respectively.

---

### Practical Applications

### Task 1: Validate a Simple Password

A valid password must include:

- At least one uppercase letter
- At least one lowercase letter
- At least one digit
- At least one special character

Here's the regular expression for this validation:

```javascript
const password = "Password123!";
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const isPasswordValid = passwordRegex.test(password);
console.log(`Is the password valid? ${isPasswordValid}`); // Output: true or false
```

### Task 2: Validate a URL

A simple regular expression to validate a URL:

```javascript
const url = "https://www.example.com";
const urlRegex =
  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([/\w \.-]*)*\/?$/;

const isUrlValid = urlRegex.test(url);
console.log(`Is the URL valid? ${isUrlValid}`); // Output: true or false
```

### Combined Script

Here's a script that completes both tasks and logs whether the password and URL are valid:

```javascript
// Task 1: Validate a Simple Password
const password = "Password123!";
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const isPasswordValid = passwordRegex.test(password);
console.log(`Is the password valid? ${isPasswordValid}`); // Output: true or false

// Task 2: Validate a URL
const url = "https://www.example.com";
const urlRegex =
  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([/\w \.-]*)*\/?$/;

const isUrlValid = urlRegex.test(url);
console.log(`Is the URL valid? ${isUrlValid}`); // Output: true or false
```

### Explanation

1. **Password Validation Regular Expression**:

   - `^(?=.*[a-z])` - Asserts that the string contains at least one lowercase letter.
   - `(?=.*[A-Z])` - Asserts that the string contains at least one uppercase letter.
   - `(?=.*\d)` - Asserts that the string contains at least one digit.
   - `(?=.*[@$!%*?&])` - Asserts that the string contains at least one special character.
   - `[A-Za-z\d@$!%*?&]{8,}$` - Asserts that the string contains only allowed characters and is at least 8 characters long.

2. **URL Validation Regular Expression**:
   - `^(https?:\/\/)?` - Matches the protocol (http or https) which is optional.
   - `([\da-z\.-]+)` - Matches the domain name.
   - `\.([a-z\.]{2,6})` - Matches the top-level domain (e.g., .com, .net).
   - `([/\w \.-]*)*\/?$` - Matches the rest of the URL, including optional path, query, and fragment.
