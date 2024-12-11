### **Objects in JavaScript**

JavaScript **objects** are collections of properties and methods. They allow you to store related data and functionality in a structured way.

### **1. Basics of Objects**

#### **Definition**:

An object is a standalone entity, with properties (key-value pairs) and methods (functions associated with keys).

#### **Example**:

```javascript
const user = {
  name: "Alice", // Property
  age: 25, // Property
  greet() {
    // Method
    console.log(`Hello, my name is ${this.name}!`);
  },
};

console.log(user.name); // Accessing property -> "Alice"
user.greet(); // Calling method -> "Hello, my name is Alice!"
```

Some questions about this code snippet to deepen the understanding of JavaScript concepts:

### **1. Object Basics**

- What is the purpose of the `user` object in this code?
- How would you add a new property, such as `email`, to the `user` object?

### **2. `this` Keyword**

- What does `this.name` refer to inside the `greet` method?
- What would happen if you replaced `this.name` with `user.name`? Would the output change?

### **3. Methods in Objects**

- What is the difference between defining a function normally and defining it as a method within an object?
- How would you call the `greet` method using a dynamic reference to the `user` object?

### **4. Template Literals**

- Why did the code use backticks (` \``) and  `${}`in the`console.log`statement within the`greet` method?
- Can you rewrite the `greet` method without using template literals but still achieving the same output?

### **5. Accessing Object Properties**

- What happens if you try to access a property that doesn’t exist in the `user` object (e.g., `user.address`)?
- How would you dynamically access the `name` property if you only know its key at runtime?

Additional questions focusing on modifying properties and methods in the `user` object:

### **Adding Properties and Methods**

1. How would you add a new property `email` with the value `"alice@example.com"` to the `user` object?
2. Can you add a new method, `getAge()`, that returns the `age` of the user? How would you do it?
3. How would you add a new property dynamically using a variable as the key?

### **Changing Properties and Methods**

4. How can you update the `name` property of the `user` object to `"Bob"`?
5. If you want to change the `greet` method to include the `age` in its output, how would you do it?
6. What happens if you reassign `user.greet` to a completely new function? How would you write it?

### **Deleting Properties and Methods**

7. How would you remove the `age` property from the `user` object?
8. If you delete the `greet` method, what happens when you try to call `user.greet()`?
9. Is it possible to delete a property added using `Object.defineProperty()`? Why or why not?

### **Other Scenarios**

10. If you accidentally remove a property or method, how can you restore it?
11. How can you check if a property like `name` exists in the `user` object before attempting to access it?
12. Can you write code to iterate over all properties and methods of the `user` object?

---
