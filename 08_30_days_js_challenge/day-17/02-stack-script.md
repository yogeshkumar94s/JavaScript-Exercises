Here's a script that implements a stack and uses it to reverse a string. The script defines a `Stack` class with methods to push, pop, and peek elements. It then uses this stack to reverse a given string.

### Stack Implementation and String Reversal

```javascript
// Define the Stack class
class Stack {
  constructor() {
    this.items = [];
  }

  // Push an element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Pop an element off the stack
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  // Peek at the top element of the stack
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Print the stack
  print() {
    console.log(this.items.join(" "));
  }
}

// Function to reverse a string using a stack
function reverseString(str) {
  const stack = new Stack();

  // Push each character of the string onto the stack
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reversedStr = "";
  // Pop characters from the stack and build the reversed string
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

// Example usage
const originalString = "hello";
console.log("Original String:", originalString);

const reversedString = reverseString(originalString);
console.log("Reversed String:", reversedString);
```

### Explanation

1. **Stack Class**:

   - **`push(element)`**: Adds an element to the stack.
   - **`pop()`**: Removes and returns the top element of the stack. Returns `null` if the stack is empty.
   - **`peek()`**: Returns the top element of the stack without removing it. Returns `null` if the stack is empty.
   - **`isEmpty()`**: Checks if the stack is empty.
   - **`size()`**: Returns the number of elements in the stack.
   - **`print()`**: Prints the stack elements.

2. **`reverseString(str)` Function**:

   - Creates a new stack.
   - Pushes each character of the input string onto the stack.
   - Pops characters off the stack and builds the reversed string.
   - Returns the reversed string.

3. **Example Usage**:
   - Reverses the string "hello" using the `reverseString` function and logs the original and reversed strings.

This script demonstrates how to use a stack to reverse a string, highlighting the stack's Last-In-First-Out (LIFO) behavior.
