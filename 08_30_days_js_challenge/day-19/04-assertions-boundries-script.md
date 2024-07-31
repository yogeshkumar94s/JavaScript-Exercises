### Assertions and Boundaries Script

This script demonstrates how to use regular expressions with assertions and boundaries to match words at specific positions in a string. Assertions and boundaries help in identifying patterns based on their positions (beginning or end of the string, word boundaries, etc.).

Here’s how you can create a script to match words only if they are at the beginning or end of a string:

```javascript
const text = `
    The quick brown fox jumps over the lazy dog.
    A quick fox jumps over the lazy dog quickly.
    The fox jumps over the lazy dog.
`;

// 1. Match a word only if it is at the beginning of a string
const startOfStringRegex = /^The/g;

console.log("Words at the Beginning of the String:");
let match;
while ((match = startOfStringRegex.exec(text)) !== null) {
  console.log(`Match: ${match[0]}`);
}

// 2. Match a word only if it is at the end of a string
const endOfStringRegex = /dog\.$/gm;

console.log("\nWords at the End of the String:");
while ((match = endOfStringRegex.exec(text)) !== null) {
  console.log(`Match: ${match[0]}`);
}
```

### Explanation

1. **Match a word only if it is at the beginning of a string**:

   - Regular expression: `/^The/g`
   - `^` asserts the position at the start of the string.
   - This regular expression matches the word "The" only if it is at the very beginning of a line (due to the `^` anchor) in the provided text.
   - The `g` flag stands for global search, so it finds all matches in the text.

2. **Match a word only if it is at the end of a string**:
   - Regular expression: `/dog\.$/gm`
   - `dog\.` matches the literal word "dog" followed by a period (escaped with `\`).
   - `$` asserts the position at the end of a line.
   - The `g` flag is for global search, and the `m` flag (multiline) allows `^` and `$` to match the start and end of each line within the string.
