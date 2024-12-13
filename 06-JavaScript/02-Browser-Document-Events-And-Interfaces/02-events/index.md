### **High-Level Table of Contents: Events in JavaScript**

#### **1. Introduction to Browser Events**

- What Are Events?
- The Event-Driven Programming Model
- Common Event Types:
  - Mouse Events (`click`, `mousedown`, `mousemove`, etc.)
  - Keyboard Events (`keydown`, `keyup`)
  - Form Events (`submit`, `focus`, `blur`)
  - Window Events (`load`, `resize`, `scroll`)
- The `Event` Object and Its Properties

---

#### **2. Event Flow: Bubbling and Capturing**

- What Is the Event Propagation Mechanism?
- **Bubbling Phase**
  - Event Travel from Child to Ancestor
  - Use Cases and Examples
- **Capturing Phase**
  - Event Travel from Ancestor to Child
  - How to Use `addEventListener` with Capturing
- Stopping Propagation: `stopPropagation` vs `stopImmediatePropagation`

---

#### **3. Event Delegation**

- What Is Event Delegation?
- Benefits of Event Delegation:
  - Improved Performance
  - Dynamic Element Handling
- Implementing Event Delegation with Examples
  - Using `target` and `currentTarget` in the Event Object
- Practical Use Cases:
  - Handling Table Clicks
  - Managing Lists Dynamically

---

#### **4. Browser Default Actions**

- What Are Default Actions?
  - Example: Links Navigating, Forms Submitting
- Preventing Default Actions with `preventDefault`
- Combining `stopPropagation` and `preventDefault`
- Use Cases:
  - Custom Form Validation
  - Disabling Context Menus or Right-Click

---

#### **5. Dispatching Custom Events**

- What Are Custom Events?
- Using `CustomEvent` Constructor
  - Creating and Dispatching Events with `dispatchEvent`
  - Adding Data to Events via `detail` Property
- Listening to Custom Events
- Example:
  - Creating a Custom Event for a Component Lifecycle
