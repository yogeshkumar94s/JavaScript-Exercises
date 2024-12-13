### **High-Level Table of Contents: UI Events in JavaScript**

#### **1. Mouse Events**

- **Common Mouse Events:**
  - `click`, `dblclick`
  - `mousedown`, `mouseup`
  - `mousemove`, `contextmenu`
- Understanding the Event Object in Mouse Events:
  - Properties like `button`, `buttons`, `clientX`, `clientY`
- Handling Different Mouse Buttons:
  - Left, Right, and Middle Buttons
- Example: Creating a Simple Click Counter

---

#### **2. Moving the Mouse**

- **`mouseover` and `mouseout`:**
  - Triggering When the Mouse Enters or Leaves an Element
  - Event Bubbling in `mouseover` and `mouseout`
- **`mouseenter` and `mouseleave`:**
  - Non-Bubbling Versions of `mouseover` and `mouseout`
  - Use Cases for `mouseenter` and `mouseleave`
- Example: Highlighting Menu Items on Hover

---

#### **3. Drag and Drop with Mouse Events**

- Overview of Drag-and-Drop API
- Key Events in Drag-and-Drop:
  - `dragstart`, `drag`, `dragend`
  - `dragenter`, `dragover`, `dragleave`, `drop`
- Using `dataTransfer` in Drag-and-Drop
- Example: Building a Drag-and-Drop File Uploader

---

#### **4. Pointer Events**

- What Are Pointer Events?
- Pointer Event Types:
  - `pointerdown`, `pointerup`, `pointermove`, `pointercancel`
- Advantages Over Mouse Events:
  - Handling Touch, Stylus, and Mouse Inputs Uniformly
- Pointer Lock API for Advanced Interactions
- Example: Drawing on a Canvas Using Pointer Events

---

#### **5. Keyboard Events**

- **Keydown and Keyup:**
  - Triggering at the Start and End of Keypresses
  - Understanding the Event Object:
    - `key`, `code`, `shiftKey`, `ctrlKey`, `altKey`, `metaKey`
  - Detecting Modifier Keys
- Handling Special Keys (e.g., Enter, Escape)
- Example: Creating a Keyboard Shortcut Handler

---

#### **6. Scrolling**

- Detecting Scroll Events:
  - Using the `scroll` Event
  - Throttling and Debouncing Scroll Events for Performance
- Programmatic Scrolling:
  - Methods: `scrollTo`, `scrollBy`, `scrollIntoView`
  - Smooth Scrolling with `behavior: 'smooth'`
- Detecting Scroll Position:
  - Properties: `scrollTop`, `scrollLeft`, `scrollHeight`, `clientHeight`
- Example: Infinite Scrolling Implementation
