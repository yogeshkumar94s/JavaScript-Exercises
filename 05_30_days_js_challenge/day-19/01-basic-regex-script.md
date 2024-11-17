### Basic Regex Script

This script will use regular expressions to match simple patterns and log the matches. It will demonstrate matching words, digits, and specific patterns.

1. Match all occurrences of the word "JavaScript" in a string.
2. Match all digits in a string.
3. Match all words that start with a capital letter.
4. Match all sequences of one or more digits.

```javascript
const text =
  "JavaScript is a versatile language. JavaScript was created by Brendan Eich in 1995. The latest ECMAScript version is ECMAScript 2021.";

// 1. Match all occurrences of the word "JavaScript"
const jsRegex = /JavaScript/g;
const jsMatches = text.match(jsRegex);
console.log("Matches for 'JavaScript':", jsMatches);

// 2. Match all digits in a string
const digitRegex = /\d+/g;
const digitMatches = text.match(digitRegex);
console.log("Matches for digits:", digitMatches);

// 3. Match all words that start with a capital letter
const capitalWordRegex = /\b[A-Z][a-z]*\b/g;
const capitalWordMatches = text.match(capitalWordRegex);
console.log(
  "Matches for words starting with a capital letter:",
  capitalWordMatches
);

// 4. Match all sequences of one or more digits
const digitSequenceRegex = /\d+/g;
const digitSequenceMatches = text.match(digitSequenceRegex);
console.log(
  "Matches for sequences of one or more digits:",
  digitSequenceMatches
);
```

### Explanation

1. **Match all occurrences of the word "JavaScript"**:

   - Regular expression: `/JavaScript/g`
   - The `g` flag stands for global search, meaning it will find all occurrences in the text.
   - `text.match(jsRegex)` returns an array of all matches.

2. **Match all digits in a string**:

   - Regular expression: `/\d+/g`
   - `\d` matches any digit (0-9).
   - `+` means one or more occurrences.
   - The `g` flag stands for global search.
   - `text.match(digitRegex)` returns an array of all digit sequences.

3. **Match all words that start with a capital letter**:

   - Regular expression: `/\b[A-Z][a-z]*\b/g`
   - `\b` denotes a word boundary.
   - `[A-Z]` matches any uppercase letter.
   - `[a-z]*` matches zero or more lowercase letters.
   - The `g` flag stands for global search.
   - `text.match(capitalWordRegex)` returns an array of all matching words.

4. **Match all sequences of one or more digits**:
   - Regular expression: `/\d+/g`
   - `\d` matches any digit (0-9).
   - `+` means one or more occurrences.
   - The `g` flag stands for global search.
   - `text.match(digitSequenceRegex)` returns an array of all digit sequences.
