### **7. WeakRef and FinalizationRegistry**

**WeakRef** allows holding weak references to objects, and **FinalizationRegistry** lets you register cleanup logic when objects are garbage-collected.

#### **Examples**:

1. **WeakRef**:

   ```javascript
   let obj = { name: "Alice" };
   const weakRef = new WeakRef(obj);

   console.log(weakRef.deref()); // { name: 'Alice' }

   obj = null;
   console.log(weakRef.deref()); // undefined (may vary)
   ```

2. **FinalizationRegistry**:

   ```javascript
   const registry = new FinalizationRegistry((heldValue) => {
     console.log(`${heldValue} was garbage-collected`);
   });

   let user = { name: "Alice" };
   registry.register(user, "user object");

   user = null; // Triggers finalization
   ```

#### **Use Cases**:

- Managing resources in libraries or complex systems.
- Avoiding memory leaks.

---

### **Summary Table**

| **Topic**                          | **Description**                                                              |
| ---------------------------------- | ---------------------------------------------------------------------------- |
| **Unicode and String Internals**   | Handle multilingual text, emojis, and special symbols.                       |
| **Reference Type**                 | Understand how objects are shared and copied.                                |
| **BigInt**                         | Represent very large integers.                                               |
| **Currying**                       | Transform multi-argument functions into chains of single-argument functions. |
| **Proxy and Reflect**              | Intercept and customize object behaviors.                                    |
| **Eval**                           | Execute code strings dynamically.                                            |
| **WeakRef & FinalizationRegistry** | Manage weak references and handle object cleanup.                            |

---

### **Practice Tasks**

1. Create a Proxy that logs all property access and mutations on an object.
2. Implement a curried function for summing multiple numbers.
3. Experiment with FinalizationRegistry to clean up resources in a simulation.
