### **High-Level Table of Contents: Forms and Controls in JavaScript**

#### **1. Form Properties and Methods**

- Accessing Form Elements
  - The `form` Collection
  - Accessing Form Inputs by Name or Index
- Common Form Properties:
  - `value`, `checked`, `selectedIndex`
  - `elements` (for accessing all controls in the form)
- Form Methods:
  - `reset()`: Resetting a Form
  - `submit()`: Programmatically Submitting a Form
- Example: Iterating Over All Form Inputs

---

#### **2. Focusing: `focus` and `blur`**

- What Are `focus` and `blur` Events?
- Programmatically Setting Focus: `element.focus()`
- Removing Focus: `element.blur()`
- Handling Focus Events:
  - `onfocus`, `onblur`
  - Event Delegation for Focus Management
- Example: Highlighting Input Fields on Focus

---

#### **3. Events: `change`, `input`, `cut`, `copy`, `paste`**

- **`change` Event:**
  - When It Fires (on Losing Focus or Confirming Input)
  - Use Cases for Dropdowns and Checkboxes
- **`input` Event:**
  - Real-Time Input Handling
  - Difference Between `change` and `input`
- **Clipboard Events: `cut`, `copy`, `paste`**
  - Detecting Clipboard Actions
  - Accessing Clipboard Data Using `event.clipboardData`
- Example:
  - Building a Character Counter with `input` Event
  - Preventing Paste in Password Fields

---

#### **4. Forms: `submit` Event and `submit()` Method**

- The `submit` Event:
  - Capturing Form Submissions
  - Preventing Default Submission with `preventDefault`
  - Validating Form Data Before Submitting
- Using the `submit()` Method:
  - Programmatically Triggering Submission
  - Customizing Behavior Before Submission
- Example:
  - Building a Custom Form Validation and Submission Handler
