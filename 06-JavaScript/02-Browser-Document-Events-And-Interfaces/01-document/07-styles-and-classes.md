### **Styles and Classes**

In JavaScript, you can dynamically manipulate the appearance of elements using inline styles or classes. Here's a detailed breakdown:

---

### **1. Modifying Inline Styles**

The `style` property is used to modify an element's inline CSS styles. Inline styles directly apply CSS rules to an element and override styles defined in external or internal stylesheets.

##### **Syntax:**

```javascript
element.style.property = value;
```

##### **Example:**

```javascript
const box = document.getElementById("box");
box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "blue";
```

##### **Important Notes:**

- Use camelCase for CSS properties (e.g., `backgroundColor` instead of `background-color`).
- The `style` property only applies to inline styles and cannot read styles from external stylesheets.

---

### **2. Working with Classes**

Classes allow you to apply predefined styles from a stylesheet. The `className` and `classList` properties are commonly used to manipulate classes.

---

#### **a. `className`**

The `className` property sets or gets the complete list of classes for an element as a single string.

##### **Example:**

```javascript
const box = document.getElementById("box");

// Set classes
box.className = "large red-box";

// Overwrite existing classes
box.className = "blue-box";
```

---

#### **b. `classList`**

The `classList` property provides methods to add, remove, toggle, or check for specific classes.

##### **Methods:**

1. `add(className)`: Adds a class.
2. `remove(className)`: Removes a class.
3. `toggle(className)`: Toggles a class on or off.
4. `contains(className)`: Checks if a class exists.

##### **Example:**

```javascript
const box = document.getElementById("box");

// Add a class
box.classList.add("highlight");

// Remove a class
box.classList.remove("red-box");

// Toggle a class
box.classList.toggle("hidden");

// Check if a class exists
if (box.classList.contains("highlight")) {
  console.log("Highlight class is applied.");
}
```

---

### **3. Computed Styles**

The `getComputedStyle` method retrieves the current computed styles of an element. Computed styles are the final styles applied to an element after resolving all CSS rules, including those from external stylesheets and inherited styles.

##### **Syntax:**

```javascript
const styles = getComputedStyle(element);
```

##### **Example:**

```javascript
const box = document.getElementById("box");
const styles = getComputedStyle(box);

// Access specific properties
console.log(styles.width); // Example: "200px"
console.log(styles.backgroundColor); // Example: "rgb(0, 0, 255)"
```

##### **Note:**

- The returned styles are read-only.
- Values are always in absolute units (e.g., `px`, `em` converted to `px`).

---

### **Example: Modifying Styles and Classes**

```html
<div id="box" class="red-box">Hello</div>

<style>
  .red-box {
    background-color: red;
    color: white;
    width: 100px;
    height: 100px;
  }
  .blue-box {
    background-color: blue;
  }
  .hidden {
    display: none;
  }
</style>

<script>
  const box = document.getElementById("box");

  // Modify inline styles
  box.style.border = "2px solid black";

  // Add a class
  box.classList.add("blue-box");

  // Remove a class
  box.classList.remove("red-box");

  // Toggle visibility
  box.classList.toggle("hidden");

  // Get computed styles
  const styles = getComputedStyle(box);
  console.log(`Width: ${styles.width}`);
  console.log(`Background Color: ${styles.backgroundColor}`);
</script>
```

---

### **Key Differences: `className` vs `classList`**

| Feature         | `className`                           | `classList`                                  |
| --------------- | ------------------------------------- | -------------------------------------------- |
| **Description** | Sets or gets the entire class string. | Provides methods for class manipulation.     |
| **Usage**       | Overwrites all classes.               | Add, remove, or toggle specific classes.     |
| **Flexibility** | Less flexible.                        | More flexible and safer for dynamic updates. |

---

### **Best Practices:**

1. **Prefer `classList` over `className`** for dynamic updates.
2. Use classes for reusable styles; reserve inline styles for unique, one-off rules.
3. Avoid frequent DOM manipulations to maintain performance.
4. Use `getComputedStyle` to debug or retrieve final rendered styles.
