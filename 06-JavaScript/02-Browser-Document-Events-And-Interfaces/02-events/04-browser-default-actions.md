### **Browser Default Actions**

---

### **1. What Are Default Actions?**

Default actions are predefined behaviors performed by the browser in response to certain events.

#### **Examples of Default Actions:**

- **Links**: Clicking a link (`<a>`) navigates to the URL specified in its `href`.
- **Forms**: Submitting a form (`<form>`) sends a request to the server.
- **Right-Click**: Right-clicking opens the browser’s context menu.
- **Text Selection**: Dragging the mouse selects text.

---

### **2. Preventing Default Actions with `preventDefault`**

The `event.preventDefault()` method stops the browser from executing the default action associated with an event.

#### **Example: Preventing Form Submission**

```html
<form id="myForm">
  <input type="text" name="name" placeholder="Enter name" required />
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the form from submitting
    console.log("Form submission prevented.");
  });
</script>
```

---

### **3. Combining `stopPropagation` and `preventDefault`**

- **`preventDefault`**: Stops the browser’s default action for the event.
- **`stopPropagation`**: Prevents the event from propagating further in the DOM tree.

#### **Example: Prevent Default and Stop Propagation**

```html
<div id="parent">
  <a href="https://example.com" id="link">Go to Example</a>
</div>

<script>
  const parent = document.getElementById("parent");
  const link = document.getElementById("link");

  parent.addEventListener("click", () => {
    console.log("Parent clicked!");
  });

  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default navigation
    event.stopPropagation(); // Stop event from bubbling to the parent
    console.log("Link click prevented and propagation stopped.");
  });
</script>
```

---

### **4. Use Cases**

#### **a. Custom Form Validation**

Prevent form submission until custom validation rules are met.

```html
<form id="customForm">
  <input
    type="email"
    name="email"
    id="email"
    placeholder="Enter email"
    required
  />
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById("customForm");

  form.addEventListener("submit", (event) => {
    const emailInput = document.getElementById("email");
    if (!emailInput.value.includes("@")) {
      event.preventDefault();
      alert("Please enter a valid email address.");
    }
  });
</script>
```

---

#### **b. Disabling Context Menus or Right-Click**

Prevent the default context menu from appearing on a right-click.

```html
<div id="noContextMenu" style="border: 1px solid black; padding: 20px;">
  Right-click is disabled here.
</div>

<script>
  const noContextMenu = document.getElementById("noContextMenu");

  noContextMenu.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Prevents the context menu from appearing
    alert("Right-click is disabled on this element.");
  });
</script>
```

---

### **5. Summary**

| **Scenario**            | **Default Action**  | **Use `preventDefault`?**  |
| ----------------------- | ------------------- | -------------------------- |
| Clicking a link (`<a>`) | Navigates to `href` | Yes, for custom behavior   |
| Submitting a form       | Sends form data     | Yes, for custom validation |
| Right-clicking          | Opens context menu  | Yes, to disable menu       |
| Text selection          | Highlights text     | Yes, for interactive apps  |
