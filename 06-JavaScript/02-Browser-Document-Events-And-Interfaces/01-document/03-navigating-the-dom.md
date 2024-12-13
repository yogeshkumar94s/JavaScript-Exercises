### **Navigating the DOM**

---

#### **1. Walking the DOM**

Walking the DOM means navigating through the DOM tree to access parent, child, or sibling nodes. JavaScript provides multiple properties and methods for this.

---

##### **a. Parent, Child, and Sibling Nodes**

| **Property**                                    | **Description**                                           | **Example**                  |
| ----------------------------------------------- | --------------------------------------------------------- | ---------------------------- |
| `parentNode`                                    | Accesses the immediate parent of a node.                  | `<div>` containing an `<h1>` |
| `childNodes`                                    | Returns all child nodes (including text and comments).    | `<h1>Hello</h1>` (text node) |
| `children`                                      | Returns element children only (ignores text/comments).    | `<ul>` containing `<li>`     |
| `firstChild` / `lastChild`                      | Access the first/last child of a node (can include text). | `<h1>Hello</h1>` (text node) |
| `nextSibling` / `previousSibling`               | Access the next/previous sibling of a node.               | `<li>` items in a list       |
| `nextElementSibling` / `previousElementSibling` | Same as above, but excludes text/comments.                | `<div>` siblings only        |

##### Example:

```html
<div id="container">
  <h1>Title</h1>
  <p>Paragraph</p>
</div>
<script>
  const container = document.getElementById("container");

  // Parent node
  console.log(container.parentNode); // <body>

  // Child nodes
  console.log(container.childNodes); // NodeList (h1, text, p)
  console.log(container.children); // HTMLCollection [h1, p]

  // Sibling nodes
  const title = container.children[0];
  console.log(title.nextElementSibling); // <p>Paragraph</p>
</script>
```

---

##### **b. Traversing Up, Down, and Sideways**

To navigate between nodes:

- **Upwards:** Use `parentNode` or `parentElement`.
- **Downwards:** Use `childNodes`, `children`, `firstChild`, or `lastChild`.
- **Sideways:** Use `nextSibling`, `previousSibling`, `nextElementSibling`, or `previousElementSibling`.

##### Example:

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<script>
  const secondItem = document.getElementById("list").children[1];

  // Traversing up
  console.log(secondItem.parentNode); // <ul id="list">

  // Traversing sideways
  console.log(secondItem.previousElementSibling); // <li>Item 1</li>
  console.log(secondItem.nextElementSibling); // <li>Item 3</li>
</script>
```

---

#### **2. Node Properties: Type, Tag, and Contents**

---

##### **a. `nodeType`**

Indicates the type of a node. Common values include:

- `1` for element nodes (e.g., `<div>`).
- `3` for text nodes (e.g., `"Hello"`).
- `8` for comment nodes (e.g., `<!-- comment -->`).

##### Example:

```html
<p id="para">Hello</p>
<script>
  const para = document.getElementById("para");
  console.log(para.nodeType); // 1 (Element)
  console.log(para.firstChild.nodeType); // 3 (Text)
</script>
```

---

##### **b. `nodeName`**

Returns the name of the node in uppercase (e.g., `DIV`, `P`, `#text`).

##### Example:

```html
<p id="para">Hello</p>
<script>
  const para = document.getElementById("para");
  console.log(para.nodeName); // "P"
  console.log(para.firstChild.nodeName); // "#text"
</script>
```

---

##### **c. `innerHTML`, `textContent`, and `outerHTML`**

| **Property**  | **Description**                                                    | **Example**                                 |
| ------------- | ------------------------------------------------------------------ | ------------------------------------------- |
| `innerHTML`   | Returns or sets HTML content inside an element.                    | `<div><p>Text</p></div>` → `<p>Text</p>`    |
| `textContent` | Returns or sets the text content inside an element (ignores tags). | `<div><p>Text</p></div>` → `"Text"`         |
| `outerHTML`   | Returns or sets HTML content including the element itself.         | `<div><p>Text</p></div>` → `<div>...</div>` |

##### Example:

```html
<div id="box">
  <p>Hello, <strong>world</strong>!</p>
</div>
<script>
  const box = document.getElementById("box");

  // Inner HTML
  console.log(box.innerHTML); // "<p>Hello, <strong>world</strong>!</p>"

  // Text Content
  console.log(box.textContent); // "Hello, world!"

  // Outer HTML
  console.log(box.outerHTML); // "<div id="box">...</div>"
</script>
```

---

### **Key Takeaways**

- DOM traversal allows you to navigate through the tree, both up/down (parent/child) and sideways (siblings).
- Node properties like `nodeType`, `nodeName`, and content-related properties (`innerHTML`, `textContent`, `outerHTML`) are crucial for interacting with and manipulating DOM elements.
- Using the correct property depends on whether you need the structure (HTML) or raw text.
