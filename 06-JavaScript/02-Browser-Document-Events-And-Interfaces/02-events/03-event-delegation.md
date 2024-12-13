### **Event Delegation**

---

### **1. What Is Event Delegation?**

Event delegation is a technique in JavaScript where a parent element is used to handle events for its child elements, instead of attaching individual event listeners to each child.

#### **How It Works**:

- Events bubble up the DOM tree, from the target element to its ancestors.
- You attach a single event listener to a parent element, and determine which child triggered the event using the `target` property of the event object.

---

### **2. Benefits of Event Delegation**

#### **a. Improved Performance**

- **Fewer Event Listeners**: Instead of attaching an event listener to every child element, one listener on the parent handles all events.
- **Memory Efficiency**: Reduces memory usage by minimizing the number of event listeners.

#### **b. Dynamic Element Handling**

- **Handles Future Elements**: Automatically handles events on dynamically added child elements without needing to attach new listeners.

---

### **3. Implementing Event Delegation**

#### **Example**: Basic Event Delegation

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  const list = document.getElementById("list");

  // Event delegation: listener on the parent <ul>
  list.addEventListener("click", (event) => {
    // Check if the clicked element is an <li>
    if (event.target.tagName === "LI") {
      console.log(`You clicked: ${event.target.textContent}`);
    }
  });
</script>
```

##### **Output**:

Clicking on any `<li>` logs its text content to the console.

---

### **4. Using `target` and `currentTarget`**

- **`event.target`**: The element that triggered the event.
- **`event.currentTarget`**: The element to which the event listener is attached.

#### **Example**:

```html
<div id="parent">
  <button>Child Button</button>
</div>

<script>
  const parent = document.getElementById("parent");

  parent.addEventListener("click", (event) => {
    console.log(`Target: ${event.target.tagName}`); // The clicked element
    console.log(`CurrentTarget: ${event.currentTarget.tagName}`); // Always <div>
  });
</script>
```

---

### **5. Practical Use Cases**

#### **a. Handling Table Clicks**

Use event delegation to handle clicks on table rows dynamically.

```html
<table id="myTable">
  <tr>
    <td>Row 1</td>
  </tr>
  <tr>
    <td>Row 2</td>
  </tr>
</table>

<script>
  const table = document.getElementById("myTable");

  table.addEventListener("click", (event) => {
    const row = event.target.closest("tr"); // Find the closest <tr>
    if (row) {
      console.log(`Clicked on: ${row.textContent}`);
    }
  });
</script>
```

#### **b. Managing Lists Dynamically**

Handle clicks on dynamically added list items.

```html
<ul id="dynamicList"></ul>
<button id="addItem">Add Item</button>

<script>
  const list = document.getElementById("dynamicList");
  const addItem = document.getElementById("addItem");

  list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      console.log(`Clicked on: ${event.target.textContent}`);
    }
  });

  addItem.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
  });
</script>
```

---

### **6. Summary of Benefits and Usage**

| **Feature**          | **Event Delegation**                        |
| -------------------- | ------------------------------------------- |
| **Performance**      | Fewer event listeners reduce memory usage.  |
| **Dynamic Elements** | Automatically handle newly added elements.  |
| **Simplified Code**  | Centralizes event handling in one listener. |
