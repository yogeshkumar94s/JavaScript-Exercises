# DOM MANIPULATION

Selecting and manipulating elements in the DOM (Document Object Model) is a fundamental part of web development. Here's a brief overview with examples:

## Selecting Elements

1. getElementById

Selects an element by its ID.
Returns a single element.

```javascript
const element = document.getElementById("myElement");
console.log(element);
```

2. getElementsByClassName

Selects elements by their class name.
Returns a live HTMLCollection (array-like object).

```javascript
const elements = document.getElementsByClassName("myClass");
console.log(elements);
```

3. getElementsByTagName

Selects elements by their tag name.
Returns a live HTMLCollection.

```javascript
const elements = document.getElementsByTagName("div");
console.log(elements);
```

4. querySelector

Selects the first element that matches a CSS selector.
Returns a single element.

```javascript
const element = document.querySelector(".myClass");
console.log(element);
```

5. querySelectorAll

Selects all elements that match a CSS selector.
Returns a static NodeList (array-like object).

```javascript
const elements = document.querySelectorAll(".myClass");
console.log(elements);
```

## Manipulating Elements

1. Changing Content

> innerHTML

Gets or sets the HTML content of an element.

```javascript
const element = document.getElementById("myElement");
element.innerHTML = "<p>New content</p>";
```

> textContent

Gets or sets the text content of an element.

```javascript
const element = document.getElementById("myElement");
element.textContent = "New text content";
```

2. Changing Styles

> Inline Styles

Modify the style property to change inline styles.

```javascript
const element = document.getElementById("myElement");
element.style.color = "blue";
element.style.fontSize = "20px";
```

> CSS Classes

Use classList to add, remove, or toggle CSS classes.

```javascript
const element = document.getElementById("myElement");
element.classList.add("newClass");
element.classList.remove("oldClass");
element.classList.toggle("activeClass");
```

3. Attributes

> getAttribute and setAttribute

Get or set the value of an attribute.

```javascript
const element = document.getElementById("myElement");
const id = element.getAttribute("id");
element.setAttribute("data-info", "someData");
```

> Direct Property Access

Some attributes can be accessed directly as properties.

```javascript
const element = document.getElementById("myElement");
const src = element.src;
element.href = "https://example.com";
```

---

## Creating and appending elements

Creating and appending elements to the DOM is a fundamental part of web development. Here’s a brief overview of how to create and append elements using JavaScript:

### Creating Elements

To create an element in the DOM, use the document.createElement method. This method creates an HTML element specified by the tag name you provide.

```javascript
const newElement = document.createElement("div"); // Creates a <div> element
```

### Appending Elements

To append a created element to the DOM, use methods like appendChild, append, prepend, and insertBefore.

1. appendChild

Appends an element as the last child of a parent element.

```javascript
const parentElement = document.getElementById("parent");
const newElement = document.createElement("div");
newElement.textContent = "This is a new div";
parentElement.appendChild(newElement);
```

2. append

Appends one or more nodes or strings as the last children of a parent element.

```javascript
const parentElement = document.getElementById("parent");
const newElement = document.createElement("div");
newElement.textContent = "This is a new div";
parentElement.append(newElement, " and some text");
```

3. prepend

Inserts an element as the first child of a parent element.

```javascript
const parentElement = document.getElementById("parent");
const newElement = document.createElement("div");
newElement.textContent = "This is a new div";
parentElement.prepend(newElement);
```

4. insertBefore

Inserts an element before another specified child of a parent element.

```javascript
const parentElement = document.getElementById("parent");
const newElement = document.createElement("div");
newElement.textContent = "This is a new div";
const referenceElement = document.getElementById("reference");
parentElement.insertBefore(newElement, referenceElement);
```

---

## Removing Elements

1. removeChild

Removes a child element from a specified parent element.

```javascript
const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");
parentElement.removeChild(childElement);
```

2. remove

Removes an element directly.

```javascript
const element = document.getElementById("elementToRemove");
element.remove();
```

3. innerHTML

Setting innerHTML to an empty string can remove all child elements from a parent element.

```javascript
const parentElement = document.getElementById("parent");
parentElement.innerHTML = "";
```

---

## Modifying attributes and classes

Modifying attributes and classes of elements in the DOM is essential for dynamic web applications. Here’s a brief overview of how to modify attributes and classes using JavaScript:

### Modifying Attributes

1. getAttribute

Retrieves the value of a specified attribute from an element.

```javascript
const element = document.getElementById("myElement");
const attrValue = element.getAttribute("src");
console.log(attrValue);
```

2. setAttribute

Sets the value of a specified attribute on an element.

```javascript
const element = document.getElementById("myElement");
element.setAttribute("src", "newImage.jpg");
```

3. removeAttribute

Removes a specified attribute from an element.

```javascript
const element = document.getElementById("myElement");
element.removeAttribute("src");
```

4. Direct Property Access

Some attributes can be accessed and modified directly as properties.

```javascript
const element = document.getElementById("myElement");
element.src = "anotherImage.jpg";
console.log(element.src);
```

### Modifying Classes

1. classList.add

Adds one or more class names to an element.

```javascript
const element = document.getElementById("myElement");
element.classList.add("newClass");
```

2. classList.remove

Removes one or more class names from an element.

```javascript
const element = document.getElementById("myElement");
element.classList.remove("oldClass");
```

3. classList.toggle

Toggles a class name on an element (adds the class if it doesn't exist, removes it if it does).

```javascript
const element = document.getElementById("myElement");
element.classList.toggle("toggleClass");
```

4. classList.contains

Checks if an element has a specified class name.

```javascript
const element = document.getElementById("myElement");
const hasClass = element.classList.contains("someClass");
console.log(hasClass);
```

5. className Property

Gets or sets the entire class attribute as a string.

```javascript
const element = document.getElementById("myElement");
element.className = "class1 class2";
console.log(element.className);
```

---

## Event handling

Event handling in JavaScript allows you to execute code in response to user interactions with the web page, such as clicks, key presses, or mouse movements. Here's a brief overview of how to handle events in the DOM:

### Adding Event Listeners

1. Using addEventListener

This method attaches an event handler to an element without overwriting existing event handlers.

```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

2. Inline Event Handlers

You can add event handlers directly in the HTML, though this method is generally not recommended for separation of concerns.

```javascript
<button id="myButton" onclick="handleClick()">Click me</button>
<script>
  function handleClick() {
    console.log('Button clicked!');
  }
</script>

```

3. Using Event Properties

You can assign an event handler directly to an element's event property, but this will overwrite any existing handler.

```javascript
const button = document.getElementById("myButton");
button.onclick = () => {
  console.log("Button clicked!");
};
```

### Common Events

1. Click Event

Triggered when an element is clicked.

```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

2. Mouse Events

Includes mouseover, mouseout, mousedown, mouseup, etc.

```javascript
const box = document.getElementById("myBox");
box.addEventListener("mouseover", () => {
  console.log("Mouse over the box!");
});
```

3. Keyboard Events

Includes keydown, keyup, keypress.

```javascript
document.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});
```

4. Form Events

Includes submit, change, focus, blur.

```javascript
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting
  console.log("Form submitted!");
});
```

### Event Object

The event object provides information about the event and the element that triggered it.

```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", (event) => {
  console.log("Button clicked!");
  console.log("Event type:", event.type);
  console.log("Target element:", event.target);
});
```
