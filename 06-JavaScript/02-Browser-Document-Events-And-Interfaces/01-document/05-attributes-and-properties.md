### **Attributes and Properties in the DOM**

The **DOM** allows us to interact with HTML elements using **attributes** and **properties**, but they are distinct concepts.

---

#### **1. Difference Between Attributes and Properties**

| **Aspect**     | **Attributes**                                                 | **Properties**                                                    |
| -------------- | -------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Definition** | Defined in the HTML markup.                                    | Represented as JavaScript properties of DOM objects.              |
| **Access**     | Accessed using methods like `getAttribute` and `setAttribute`. | Accessed directly via JavaScript properties (`element.property`). |
| **Scope**      | Reflects initial state from the HTML source.                   | Reflects current state in the DOM object.                         |
| **Examples**   | `<input type="text">` has the `type` attribute.                | Access the `value` property of an `<input>`.                      |

---

#### **2. Working with Attributes**

Attributes represent the initial state of an element as specified in the HTML.

##### **a. `getAttribute`**

Retrieves the value of an attribute.

##### Example:

```html
<input id="username" type="text" value="JohnDoe" />
<script>
  const input = document.getElementById("username");
  console.log(input.getAttribute("type")); // "text"
  console.log(input.getAttribute("value")); // "JohnDoe"
</script>
```

---

##### **b. `setAttribute`**

Sets or updates an attribute value.

##### Example:

```html
<input id="username" type="text" />
<script>
  const input = document.getElementById("username");
  input.setAttribute("value", "NewUser");
  console.log(input.getAttribute("value")); // "NewUser"
</script>
```

---

##### **c. Removing Attributes**

You can use `removeAttribute` to delete an attribute.

##### Example:

```html
<input id="username" type="text" value="JohnDoe" />
<script>
  const input = document.getElementById("username");
  input.removeAttribute("value");
  console.log(input.getAttribute("value")); // null
</script>
```

---

#### **3. Modifying Properties of Elements**

Properties are tied to the DOM object and reflect the current state of the element.

##### Example:

```html
<input id="username" type="text" value="JohnDoe" />
<script>
  const input = document.getElementById("username");

  // Modifying a property directly
  input.value = "ChangedValue";

  console.log(input.value); // "ChangedValue"
  console.log(input.getAttribute("value")); // "JohnDoe" (attribute remains unchanged)
</script>
```

---

#### **Key Differences in Action**

The attribute reflects the initial state, while the property reflects the live state. Changes to properties do not always update attributes.

##### Example:

```html
<input id="checkbox" type="checkbox" checked />
<script>
  const checkbox = document.getElementById("checkbox");

  // Remove the "checked" property
  checkbox.checked = false;
  console.log(checkbox.checked); // false
  console.log(checkbox.getAttribute("checked")); // "" (attribute still exists)

  // Remove the "checked" attribute
  checkbox.removeAttribute("checked");
  console.log(checkbox.checked); // false
  console.log(checkbox.getAttribute("checked")); // null
</script>
```

---

#### **Tips for Using Attributes and Properties**

1. **Attributes** are best used for:

   - Reading or modifying initial configuration or custom data (`data-*` attributes).
   - Example: `<div data-user="123"></div>`

2. **Properties** are ideal for:

   - Interacting with the current state of an element.
   - Example: Changing the `value` of an input field or toggling `checked` on a checkbox.

3. Always remember:
   - Attributes are accessed using `getAttribute`/`setAttribute`.
   - Properties are accessed and modified directly using dot notation.
