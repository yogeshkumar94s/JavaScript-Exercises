### **7. Symbol Type**

**Symbols** are unique and immutable values used as object property keys to avoid naming conflicts.

#### **Creating Symbols**:

```javascript
const sym1 = Symbol("description");
const sym2 = Symbol("description");

console.log(sym1 === sym2); // false (each symbol is unique)
```

#### **Using Symbols as Keys**:

```javascript
const id = Symbol("id");
const user = {
  name: "Alice",
  [id]: 123, // Symbol key
};

console.log(user[id]); // 123
console.log(Object.keys(user)); // ["name"] (Symbol keys are not listed)
```
