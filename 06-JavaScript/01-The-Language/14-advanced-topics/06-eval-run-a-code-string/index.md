### **6. Eval: Run a Code String**

The `eval()` function evaluates JavaScript code in a string.

#### **Examples**:

1. **Basic Usage**:

   ```javascript
   const code = "2 + 2";
   console.log(eval(code)); // 4
   ```

2. **Dynamic Function Creation**:
   ```javascript
   const func = eval('() => "Hello, World!"');
   console.log(func()); // Hello, World!
   ```

#### **Use Cases**:

- Rarely used due to security and performance concerns. Avoid unless absolutely necessary.

---
