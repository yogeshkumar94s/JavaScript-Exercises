A script that includes two functions: one to count character occurrences in a string and another to find the longest substring without repeating characters.

```javascript
// Function to count occurrences of each character in a string
function countCharacterOccurrences(str) {
  const counts = {};
  for (let char of str) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
}

// Function to find the longest substring without repeating characters
function longestUniqueSubstring(str) {
  let longest = "";
  let currentSubstring = "";
  const seen = new Set();

  for (let char of str) {
    while (seen.has(char)) {
      seen.delete(currentSubstring[0]);
      currentSubstring = currentSubstring.slice(1);
    }
    seen.add(char);
    currentSubstring += char;
    if (currentSubstring.length > longest.length) {
      longest = currentSubstring;
    }
  }

  return longest;
}

// Test the functions
let testString = "ababcbb";

let charCounts = countCharacterOccurrences(testString);
console.log("Character Occurrences:", charCounts);

let longestSubstring = longestUniqueSubstring(testString);
console.log("Longest Unique Substring:", longestSubstring);
```

### Explanation

1. **Character Occurrence Count**:

   - **Function**: `countCharacterOccurrences`
   - **Logic**:
     - Iterates over each character in the string.
     - Uses an object to keep track of the count of each character.
     - Returns an object with characters as keys and their counts as values.

2. **Longest Substring Without Repeating Characters**:
   - **Function**: `longestUniqueSubstring`
   - **Logic**:
     - Uses a sliding window approach with a set to track seen characters.
     - Iterates through each character, maintaining a window of unique characters.
     - Updates the longest substring whenever a longer unique substring is found.
     - Returns the longest substring without repeating characters.

This script will log the count of each character in the given string and the longest substring with unique characters.
