// Event handlers in JavaScript are functions that are used to respond to events triggered by user interactions or other activities in a web page. Events can include things like mouse clicks, keyboard inputs, page loading, or changes in the state of an HTML element. Event handlers allow you to define custom behavior that should occur in response to specific events.

// HTML Event Attributes:

// In HTML, you can attach event handlers directly to HTML elements using attributes like onclick, onmouseover, onchange, etc. These attributes point to JavaScript functions that will be executed when the corresponding event occurs.

{
  /* <button onclick="handleClick()">Click me</button>
<input type="text" oninput="handleInput()"> */
}

// DOM Level 0 Event Handlers:

// In JavaScript, you can assign event handlers directly to DOM elements using properties such as onclick, onmouseover, etc.

const button = document.getElementById("myButton");

button.onclick = function () {
  alert("Button clicked!");
};

// DOM Level 2 Event Listeners:

// The preferred way to handle events in modern JavaScript is by using the addEventListener method. This method allows you to attach multiple event listeners to a single element and provides more flexibility.

const button = document.getElementById("myButton");

button.addEventListener("click", function () {
  alert("Button clicked!");
});

// You can also remove event listeners if needed
// button.removeEventListener('click', functionName);

// Common Events and Event Types:
// click: Triggered when the element is clicked.
// mouseover/mouseout: Triggered when the mouse pointer enters/leaves the element.
// keydown/keyup: Triggered when a key on the keyboard is pressed/released.
// change: Triggered when the value of an input element changes.

// Event Object:*-*-**-

// When an event occurs, an event object is automatically passed to the event handler. This object contains information about the event, such as the type of event, the target element, and other details.

document.getElementById("myInput").addEventListener("input", function (event) {
  console.log("Input value:", event.target.value);
});

// Event Delegation:

// Event delegation is a technique where a single event listener is placed on a common ancestor of multiple elements. This can improve performance and simplify event management, especially for dynamically generated content.

{
  /* <ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      alert('Clicked on ' + event.target.textContent);
    }
  });
</script> */
}
