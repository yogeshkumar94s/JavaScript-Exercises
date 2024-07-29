Here's a script that implements a basic linked list with methods to add, remove, and display nodes. The script defines a `Node` class for the elements of the linked list and a `LinkedList` class to manage the list operations.

### Linked List Implementation

```javascript
// Define the Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define the LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a node to the end of the list
  add(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      // If the list is empty, set head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, append the new node to the end and update tail
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // Remove a node from the end of the list
  remove() {
    if (this.size === 0) {
      console.log("List is empty");
      return;
    }

    if (this.size === 1) {
      // If there's only one node, clear the list
      this.head = null;
      this.tail = null;
    } else {
      // Traverse to the second last node
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }

      // Remove the last node and update tail
      current.next = null;
      this.tail = current;
    }

    this.size--;
  }

  // Display all nodes in the list
  display() {
    if (this.size === 0) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    result += "null"; // Indicate end of the list

    console.log(result);
  }
}

// Example Usage
const list = new LinkedList();

// Add nodes
list.add(10);
list.add(20);
list.add(30);
list.add(40);

// Display nodes
console.log("List after adding nodes:");
list.display();

// Remove a node
list.remove();

// Display nodes after removal
console.log("List after removing a node:");
list.display();
```

### Explanation

1. **Node Class**:

   - Represents an individual node in the linked list with `value` and `next` properties.

2. **LinkedList Class**:

   - **`add(value)`**: Adds a new node with the specified value to the end of the list.
   - **`remove()`**: Removes the last node from the list.
   - **`display()`**: Logs the entire list to the console, showing node values in order.

3. **Example Usage**:
   - Demonstrates how to create a linked list, add nodes, display the list, remove a node, and display the updated list.

This script provides a basic implementation of a singly linked list, with methods to manipulate and display the list. You can further extend this implementation to include more features as needed.
