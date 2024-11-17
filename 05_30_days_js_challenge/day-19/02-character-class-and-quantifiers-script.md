### Character Classes and Quantifiers Script

This script will use regular expressions with character classes and quantifiers to match words with specific characteristics and log the matches. Here are a few examples:

1. Match all words in a string that start with a capital letter.
2. Match all sequences of one or more digits.
3. Match words that contain only letters (both uppercase and lowercase).
4. Match words that contain at least one lowercase letter, one uppercase letter, and one digit.

```javascript
const text = `
    Hello World! This is a Test123. We have some Examples like JavaScript, Regex, and 1234. 
    Notice that 42 and abc are in this text. Also, Hello123 should be included, but not 123abc.
`;

// 1. Match all words that start with a capital letter
const capitalWordRegex = /\b[A-Z][a-z]*\b/g;
const capitalWordMatches = text.match(capitalWordRegex);
console.log("Words starting with a capital letter:", capitalWordMatches);

// 2. Match all sequences of one or more digits
const digitSequenceRegex = /\d+/g;
const digitSequenceMatches = text.match(digitSequenceRegex);
console.log("Sequences of one or more digits:", digitSequenceMatches);

// 3. Match words that contain only letters (both uppercase and lowercase)
const lettersOnlyRegex = /\b[A-Za-z]+\b/g;
const lettersOnlyMatches = text.match(lettersOnlyRegex);
console.log("Words containing only letters:", lettersOnlyMatches);

// 4. Match words that contain at least one lowercase letter, one uppercase letter, and one digit
const complexWordRegex = /\b(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+\b/g;
const complexWordMatches = text.match(complexWordRegex);
console.log(
  "Words with at least one lowercase letter, one uppercase letter, and one digit:",
  complexWordMatches
);
```

### Explanation

1. **Match all words that start with a capital letter**:

   - Regular expression: `/\b[A-Z][a-z]*\b/g`
   - `\b` denotes a word boundary.
   - `[A-Z]` matches an uppercase letter.
   - `[a-z]*` matches zero or more lowercase letters following the uppercase letter.
   - The `g` flag stands for global search.
   - `text.match(capitalWordRegex)` returns an array of words starting with a capital letter.

2. **Match all sequences of one or more digits**:

   - Regular expression: `/\d+/g`
   - `\d` matches any digit (0-9).
   - `+` means one or more occurrences.
   - The `g` flag stands for global search.
   - `text.match(digitSequenceRegex)` returns an array of digit sequences.

3. **Match words that contain only letters (both uppercase and lowercase)**:

   - Regular expression: `/\b[A-Za-z]+\b/g`
   - `\b` denotes a word boundary.
   - `[A-Za-z]+` matches one or more letters (both uppercase and lowercase).
   - The `g` flag stands for global search.
   - `text.match(lettersOnlyRegex)` returns an array of words with only letters.

4. **Match words that contain at least one lowercase letter, one uppercase letter, and one digit**:
   - Regular expression: `/\b(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+\b/g`
   - `(?=.*[a-z])` is a positive lookahead to ensure at least one lowercase letter.
   - `(?=.*[A-Z])` is a positive lookahead to ensure at least one uppercase letter.
   - `(?=.*\d)` is a positive lookahead to ensure at least one digit.
   - `[A-Za-z\d]+` matches one or more letters or digits.
   - The `g` flag stands for global search.
   - `text.match(complexWordRegex)` returns an array of words meeting the criteria.
