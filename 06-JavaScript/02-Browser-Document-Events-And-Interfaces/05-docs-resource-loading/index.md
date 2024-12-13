### **High-Level Table of Contents: Document and Resource Loading in JavaScript**

#### **1. Page Events: `DOMContentLoaded`, `load`, `beforeunload`, `unload`**

- **`DOMContentLoaded` Event:**
  - When It Fires: After the DOM Tree Is Fully Constructed
  - How It Differs from `load`
  - Use Cases: Initializing Scripts That Do Not Depend on External Resources
  - Example: Setting Up Event Listeners After DOM Is Ready
- **`load` Event:**
  - When It Fires: After the Entire Page (Including Resources) Is Fully Loaded
  - Use Cases: Starting Animations, Tracking Page Load Times
- **`beforeunload` Event:**
  - When It Fires: Right Before the User Leaves the Page
  - Warning Users About Unsaved Changes
  - Browser Support and Limitations
  - Example: Prompting the User to Confirm Navigation
- **`unload` Event:**
  - When It Fires: After the User Leaves the Page
  - Limitations of Using `unload` for Tracking or Cleanup
  - Modern Alternatives: Service Workers for Persistent Behavior

---

#### **2. Scripts: `async` and `defer`**

- **The Default Behavior of Script Loading:**
  - Blocking Nature of `<script>` Tags
  - Parsing the DOM vs. Script Execution
- **`async` Attribute:**
  - How It Loads Scripts Independently of the DOM
  - Execution Order (Unpredictable)
  - Best for Analytics and Non-DOM Dependent Scripts
  - Example: Adding an Analytics Script with `async`
- **`defer` Attribute:**
  - How It Loads Scripts in Parallel with DOM Parsing
  - Guaranteed Execution Order (After DOMContentLoaded)
  - Best for DOM-Dependent Scripts
  - Example: Optimizing Multiple Script Loads with `defer`

---

#### **3. Resource Loading: `onload` and `onerror`**

- **`onload` Event:**
  - Triggering When a Resource (Image, Script, or Stylesheet) Is Successfully Loaded
  - Attaching Handlers for Images, Scripts, or Other Resources
  - Example: Lazy Loading Images
- **`onerror` Event:**
  - Detecting Resource Load Failures
  - Use Cases for Error Handling:
    - Providing Fallback Images
    - Logging Issues to the Server
  - Example: Replacing a Broken Image Source
