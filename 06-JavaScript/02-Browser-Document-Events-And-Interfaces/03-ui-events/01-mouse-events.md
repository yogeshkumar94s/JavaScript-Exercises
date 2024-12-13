### **Mouse Events**

---

### **1. Common Mouse Events**

Mouse events are triggered by user interactions with the mouse, such as clicking, moving, or pressing buttons.

| **Event Type** | **Description**                                                               |
| -------------- | ----------------------------------------------------------------------------- |
| `click`        | Fires when a mouse button is clicked and released on an element.              |
| `dblclick`     | Fires when a mouse button is double-clicked on an element.                    |
| `mousedown`    | Fires when a mouse button is pressed down on an element.                      |
| `mouseup`      | Fires when a mouse button is released after pressing down.                    |
| `mousemove`    | Fires when the mouse is moved over an element.                                |
| `contextmenu`  | Fires when the right mouse button is clicked, usually to show a context menu. |

#### **Example: Mouse Events**

```javascript
const box = document.getElementById("box");

box.addEventListener("click", () => console.log("Box clicked!"));
box.addEventListener("mousedown", () =>
  console.log("Mouse button down on box.")
);
box.addEventListener("mouseup", () => console.log("Mouse button released."));
box.addEventListener("mousemove", () =>
  console.log("Mouse is moving over the box.")
);
box.addEventListener("contextmenu", (event) => {
  event.preventDefault(); // Prevent default context menu
  console.log("Right-click context menu opened.");
});
```

---

### **2. Understanding the Event Object in Mouse Events**

The `Event` object contains useful properties for handling mouse interactions.

| **Property**         | **Description**                                                    |
| -------------------- | ------------------------------------------------------------------ |
| `button`             | Indicates the mouse button pressed (0: left, 1: middle, 2: right). |
| `buttons`            | Indicates which buttons are pressed (bitmask for multiple).        |
| `clientX`, `clientY` | Coordinates of the mouse pointer relative to the viewport.         |
| `pageX`, `pageY`     | Coordinates relative to the full page (including scroll).          |
| `screenX`, `screenY` | Coordinates relative to the screen.                                |

#### **Example: Mouse Event Properties**

```javascript
document.addEventListener("click", (event) => {
  console.log(`Button pressed: ${event.button}`);
  console.log(`Client position: (${event.clientX}, ${event.clientY})`);
  console.log(`Page position: (${event.pageX}, ${event.pageY})`);
});
```

---

### **3. Handling Different Mouse Buttons**

The `button` property of the `Event` object specifies which mouse button was pressed.

| **Button Value** | **Mouse Button** |
| ---------------- | ---------------- |
| `0`              | Left button      |
| `1`              | Middle button    |
| `2`              | Right button     |

#### **Example: Detecting Mouse Buttons**

```javascript
document.addEventListener("mousedown", (event) => {
  switch (event.button) {
    case 0:
      console.log("Left button pressed.");
      break;
    case 1:
      console.log("Middle button pressed.");
      break;
    case 2:
      console.log("Right button pressed.");
      break;
    default:
      console.log("Unknown button pressed.");
  }
});
```

---

### **4. Example: Creating a Simple Click Counter**

#### **Code:**

```html
<div
  id="clickBox"
  style="width: 100px; height: 100px; background-color: lightblue; text-align: center; line-height: 100px;"
>
  Click me!
</div>
<p id="counter">Click count: 0</p>

<script>
  const box = document.getElementById("clickBox");
  const counterDisplay = document.getElementById("counter");
  let clickCount = 0;

  box.addEventListener("click", () => {
    clickCount++;
    counterDisplay.textContent = `Click count: ${clickCount}`;
  });
</script>
```

#### **Output:**

- Clicking the blue box increments and displays the click count.

---

### **5. Summary**

Mouse events enable a variety of interactions with users, from simple clicks to complex drag-and-drop functionality. Key concepts include:

- **Common Events**: `click`, `mousedown`, `mousemove`, etc.
- **Event Object Properties**: Access event details like coordinates and button states.
- **Handling Buttons**: Use the `button` property to differentiate left, middle, or right clicks.
- **Practical Application**: Implement features like click counters or custom context menus.
