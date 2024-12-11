### **Deep Dive into Advanced JavaScript Topics**

Below is an in-depth exploration of the requested topics, presented in an order that builds foundational understanding before diving into more complex ideas.

---

### **1. Unicode and String Internals**

JavaScript strings are sequences of Unicode characters, which allows for diverse language and symbol representation.

#### **Key Concepts**:

- **Unicode Code Points**:
  - Each character is represented by a unique code point (e.g., `'A'` = `U+0041`).
- **Surrogate Pairs**:
  - Characters outside the Basic Multilingual Plane (BMP, `U+0000` to `U+FFFF`) use two 16-bit code units.

#### **Examples**:

1. **Basic Unicode**:

   ```javascript
   const smile = "😊";
   console.log(smile.length); // 2 (stored as surrogate pairs)
   console.log(smile.codePointAt(0)); // 128522 (actual Unicode code point)
   ```

2. **Iterating Through Characters**:

   ```javascript
   const text = "A😊B";
   for (const char of text) {
     console.log(char); // A, 😊, B
   }
   ```

3. **Normalization**:
   Unicode supports multiple representations for some characters.
   ```javascript
   const char1 = "\u00E9"; // é
   const char2 = "e\u0301"; // e + ´
   console.log(char1 === char2); // false
   console.log(char1.normalize() === char2.normalize()); // true
   ```

#### **Use Cases**:

- Handling multilingual text.
- Correctly working with emojis or special symbols in applications.

---
