### **5. Proxy and Reflect**

Proxies allow custom behavior for operations on objects, while Reflect provides default operations.

#### **Examples**:

1. **Proxy for Validation**:

   ```javascript
   const handler = {
     set(target, prop, value) {
       if (prop === "age" && value < 0) {
         throw new Error("Age must be positive");
       }
       target[prop] = value;
       return true;
     },
   };

   const person = new Proxy({}, handler);
   person.age = 25; // Works
   // person.age = -5; // Error
   ```

2. **Using Reflect**:

   ```javascript
   const handler = {
     set(target, prop, value) {
       console.log(`Setting ${prop} to ${value}`);
       return Reflect.set(target, prop, value);
     },
   };

   const obj = new Proxy({}, handler);
   obj.name = "Alice"; // Logs: Setting name to Alice
   ```

#### **Use Cases**:

- Logging, validation, and custom object behaviors.

---
