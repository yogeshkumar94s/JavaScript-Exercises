### **2. Reference Type**

JavaScript stores primitives (e.g., `number`, `string`) directly, but objects and arrays are stored as **references**.

#### **Key Concepts**:

- Assigning an object to a variable assigns its reference, not a copy.
- Changes to the object through one reference affect all references.

#### **Examples**:

1. **Object Reference**:

   ```javascript
   const obj1 = { name: "Alice" };
   const obj2 = obj1;

   obj2.name = "Bob";
   console.log(obj1.name); // Bob
   ```

2. **Copying Objects**:
   ```javascript
   const obj1 = { name: "Alice" };
   const obj2 = { ...obj1 }; // Shallow copy
   obj2.name = "Bob";
   console.log(obj1.name); // Alice
   ```

#### **Use Cases**:

- Understanding how variables share data is crucial for avoiding unintended mutations.

---
