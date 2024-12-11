### **4. Currying**

Currying is the process of transforming a function with multiple arguments into a sequence of functions each taking one argument.

#### **Examples**:

1. **Basic Currying**:

   ```javascript
   function multiply(a) {
     return function (b) {
       return a * b;
     };
   }

   const double = multiply(2);
   console.log(double(5)); // 10
   ```

2. **Using Arrow Functions**:
   ```javascript
   const add = (a) => (b) => a + b;
   console.log(add(3)(4)); // 7
   ```

#### **Use Cases**:

- Function composition in functional programming.
- Creating reusable and partial functions.

---
