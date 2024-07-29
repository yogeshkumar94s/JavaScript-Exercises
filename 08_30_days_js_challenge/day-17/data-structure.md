# Data-Structure

## Linked List

### Linked List in JavaScript

A linked list is a linear data structure where elements are not stored in contiguous memory locations. Instead, each element (called a node) contains a value and a reference (or pointer) to the next node in the sequence.

### Components of a Linked List:

1. **Node**:

   - Each node contains:
     - `value`: The data the node holds.
     - `next`: A reference to the next node in the list.

2. **LinkedList**:
   - A class to manage the linked list. Common operations include adding nodes, removing nodes, and traversing the list.

### Basic Implementation:

Here's a basic implementation of a singly linked list in JavaScript.

```javascript
// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add a node to the end of the list
  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Remove a node from the list
  remove(value) {
    if (this.head === null) return;

    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      while (current.next !== null && current.next.value !== value) {
        current = current.next;
      }
      if (current.next !== null) {
        current.next = current.next.next;
      }
    }
    this.size--;
  }

  // Print the list
  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Example usage
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log("Initial List:");
list.print();

list.remove(2);

console.log("List after removing 2:");
list.print();
```

### Explanation:

1. **Node Class**:

   - Represents a single node in the list.
   - The constructor initializes the `value` and sets `next` to `null`.

2. **LinkedList Class**:
   - Manages the linked list.
   - `head`: Points to the first node in the list.
   - `size`: Keeps track of the number of nodes in the list.
   - `add(value)`: Adds a new node with the given value to the end of the list.
   - `remove(value)`: Removes the node with the given value from the list.
   - `print()`: Traverses the list and prints each node's value.

### Operations:

- **Adding a Node**:

  - If the list is empty (`head` is `null`), the new node becomes the `head`.
  - Otherwise, traverse the list until the end and add the new node.

- **Removing a Node**:

  - If the list is empty, do nothing.
  - If the `head` node has the value to be removed, update the `head` to the next node.
  - Otherwise, traverse the list to find the node just before the one to be removed and update its `next` pointer.

- **Printing the List**:
  - Traverse the list from the `head` and print each node's value.

Sure! Let's complete the tasks step by step.

### Task 1: Implement a Node Class

The Node class represents an element in a linked list with properties `value` and `next`.

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

### Task 2: Implement a LinkedList Class

The LinkedList class will include methods to add a node to the end, remove a node from the end, and display all nodes.

```javascript
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Method to add a node to the end of the list
  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Method to remove a node from the end of the list
  remove() {
    if (this.head === null) return;

    if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      let previous = null;
      while (current.next !== null) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
    }
    this.size--;
  }

  // Method to display all nodes in the list
  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Example usage
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log("Initial List:");
list.display();

list.remove();

console.log("List after removing the last node:");
list.display();
```

### Explanation:

1. **Node Class**:

   - Represents a single node in the linked list.
   - The constructor initializes the `value` and sets `next` to `null`.

2. **LinkedList Class**:
   - Manages the linked list.
   - `head`: Points to the first node in the list.
   - `size`: Keeps track of the number of nodes in the list.
   - `add(value)`: Adds a new node with the given value to the end of the list.
   - `remove()`: Removes the node from the end of the list.
   - `display()`: Traverses the list and prints each node's value.

### Operations:

- **Adding a Node**:

  - If the list is empty (`head` is `null`), the new node becomes the `head`.
  - Otherwise, traverse the list until the end and add the new node.

- **Removing a Node**:

  - If the list is empty, do nothing.
  - If the `head` is the only node, set `head` to `null`.
  - Otherwise, traverse the list to find the node just before the last node and set its `next` pointer to `null`.

- **Displaying the List**:
  - Traverse the list from the `head` and print each node's value.

---

## Stack

A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed. The stack has two main operations:

1. **Push**: Add an element to the top of the stack.
2. **Pop**: Remove the element from the top of the stack.

### Implementing a Stack in JavaScript

Let's implement a stack class in JavaScript:

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // Push method to add an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Pop method to remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Peek method to view the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty method to check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // size method to get the number of elements in the stack
  size() {
    return this.items.length;
  }

  // print method to display all elements in the stack
  print() {
    console.log(this.items.toString());
  }
}

// Example usage
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("Initial Stack:");
stack.print();

console.log("Top element:", stack.peek());

console.log("Popped element:", stack.pop());
console.log("Stack after popping an element:");
stack.print();

console.log("Is stack empty?", stack.isEmpty());
console.log("Stack size:", stack.size());
```

### Explanation:

1. **Constructor**:

   - Initializes an empty array to hold the stack elements.

2. **Push Method**:

   - Adds a new element to the top of the stack using the `push` method of the array.

3. **Pop Method**:

   - Removes and returns the top element of the stack using the `pop` method of the array.
   - If the stack is empty, it returns a message indicating that the stack is empty.

4. **Peek Method**:

   - Returns the top element of the stack without removing it.
   - If the stack is empty, it returns a message indicating that the stack is empty.

5. **isEmpty Method**:

   - Checks if the stack is empty by comparing the length of the `items` array to 0.

6. **Size Method**:

   - Returns the number of elements in the stack by returning the length of the `items` array.

7. **Print Method**:
   - Prints the elements of the stack as a string.

### Usage:

- **Push**: Adds elements 1, 2, and 3 to the stack.
- **Peek**: Displays the top element (3) without removing it.
- **Pop**: Removes and returns the top element (3), then displays the stack with elements 1 and 2.
- **isEmpty**: Checks if the stack is empty.
- **Size**: Returns the number of elements in the stack (2).
- **Print**: Displays the elements of the stack.

Let's start by implementing the `Stack` class with the required methods: `push`, `pop`, and `peek`. Then, we'll use this `Stack` class to reverse a string.

### Task 1: Implement a Stack Class

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // Method to add an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Method to remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Method to view the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("Initial Stack:");
console.log(stack.items);

console.log("Top element:", stack.peek());

console.log("Popped element:", stack.pop());
console.log("Stack after popping an element:");
console.log(stack.items);

console.log("Is stack empty?", stack.isEmpty());
console.log("Stack size:", stack.items.length);
```

### Task 2: Use the Stack Class to Reverse a String

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // Method to add an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Method to remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Method to view the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

function reverseString(inputString) {
  const stack = new Stack();

  // Push all characters of the string onto the stack
  for (let char of inputString) {
    stack.push(char);
  }

  // Pop all characters from the stack to reverse the string
  let reversedString = "";
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}

// Example usage
const originalString = "hello";
const reversed = reverseString(originalString);

console.log("Original string:", originalString);
console.log("Reversed string:", reversed);
```

### Explanation:

1. **Stack Class**:

   - `push(element)`: Adds an element to the top of the stack.
   - `pop()`: Removes and returns the top element of the stack. If the stack is empty, it returns a message indicating that the stack is empty.
   - `peek()`: Returns the top element of the stack without removing it. If the stack is empty, it returns a message indicating that the stack is empty.
   - `isEmpty()`: Checks if the stack is empty by comparing the length of the `items` array to 0.

2. **reverseString Function**:
   - Pushes each character of the input string onto the stack.
   - Pops each character from the stack to form the reversed string.

---

## Queue

A queue is a linear data structure that follows the First In First Out (FIFO) principle. In a queue, the first element added is the first one to be removed. Queues are commonly used in scenarios where you need to manage items in the order they were added, such as task scheduling or handling requests.

### Basic Operations of a Queue

1. **Enqueue**: Add an element to the end of the queue.
2. **Dequeue**: Remove an element from the front of the queue.
3. **Front**: Get the front element of the queue without removing it.
4. **IsEmpty**: Check if the queue is empty.

### Implementing a Queue in JavaScript

Here’s how you can implement a simple `Queue` class in JavaScript:

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  // Method to add an element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Method to remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Method to get the front element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Method to get the size of the queue
  size() {
    return this.items.length;
  }

  // Method to print the elements of the queue
  printQueue() {
    return this.items.join(" ");
  }
}

// Example usage
const queue = new Queue();

// Adding elements to the queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue after enqueue operations:");
console.log(queue.printQueue()); // Output: 1 2 3

// Removing an element from the queue
console.log("Dequeued element:", queue.dequeue()); // Output: 1
console.log("Queue after dequeue operation:");
console.log(queue.printQueue()); // Output: 2 3

// Getting the front element of the queue
console.log("Front element:", queue.front()); // Output: 2

// Checking if the queue is empty
console.log("Is queue empty?", queue.isEmpty()); // Output: false

// Getting the size of the queue
console.log("Queue size:", queue.size()); // Output: 2
```

### Explanation

1. **enqueue(element)**: Adds an element to the end of the queue using the `push` method.
2. **dequeue()**: Removes and returns the front element of the queue using the `shift` method. If the queue is empty, it returns a message indicating that the queue is empty.
3. **front()**: Returns the front element of the queue without removing it. If the queue is empty, it returns a message indicating that the queue is empty.
4. **isEmpty()**: Checks if the queue is empty by comparing the length of the `items` array to 0.
5. **size()**: Returns the number of elements in the queue.
6. **printQueue()**: Returns a string representation of the queue elements, joined by a space.

Queues are widely used in computer science for various applications such as scheduling algorithms, breadth-first search in graphs, and buffering data streams. Understanding how to implement and use a queue in JavaScript will help you manage data structures efficiently in your applications.

Sure! Let's start by implementing the `Queue` class with the necessary methods, and then we'll create a simple printer queue simulation using this class.

### Task 1: Implement a Queue Class

Here’s the implementation of the `Queue` class with `enqueue`, `dequeue`, and `front` methods:

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  // Method to add an element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Method to remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Method to get the front element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Method to get the size of the queue
  size() {
    return this.items.length;
  }

  // Method to print the elements of the queue
  printQueue() {
    return this.items.join(" ");
  }
}

// Example usage
const queue = new Queue();

// Adding elements to the queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue after enqueue operations:");
console.log(queue.printQueue()); // Output: 1 2 3

// Removing an element from the queue
console.log("Dequeued element:", queue.dequeue()); // Output: 1
console.log("Queue after dequeue operation:");
console.log(queue.printQueue()); // Output: 2 3

// Getting the front element of the queue
console.log("Front element:", queue.front()); // Output: 2

// Checking if the queue is empty
console.log("Is queue empty?", queue.isEmpty()); // Output: false

// Getting the size of the queue
console.log("Queue size:", queue.size()); // Output: 2
```

### Task 2: Simulate a Simple Printer Queue

Now let's use the `Queue` class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

```javascript
class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  // Method to add a print job to the queue
  addPrintJob(job) {
    this.queue.enqueue(job);
    console.log(`Added print job: ${job}`);
  }

  // Method to process the next print job in the queue
  processPrintJob() {
    if (this.queue.isEmpty()) {
      console.log("No print jobs in the queue.");
      return;
    }
    const job = this.queue.dequeue();
    console.log(`Processing print job: ${job}`);
  }

  // Method to view the next print job without removing it
  viewNextPrintJob() {
    const job = this.queue.front();
    console.log(`Next print job: ${job}`);
  }

  // Method to display all print jobs in the queue
  displayQueue() {
    console.log(`Current print queue: ${this.queue.printQueue()}`);
  }
}

// Example usage
const printerQueue = new PrinterQueue();

// Adding print jobs to the queue
printerQueue.addPrintJob("Job 1");
printerQueue.addPrintJob("Job 2");
printerQueue.addPrintJob("Job 3");

// Displaying the current print queue
printerQueue.displayQueue(); // Output: Current print queue: Job 1 Job 2 Job 3

// Viewing the next print job
printerQueue.viewNextPrintJob(); // Output: Next print job: Job 1

// Processing print jobs
printerQueue.processPrintJob(); // Output: Processing print job: Job 1
printerQueue.processPrintJob(); // Output: Processing print job: Job 2

// Displaying the current print queue
printerQueue.displayQueue(); // Output: Current print queue: Job 3

// Viewing the next print job
printerQueue.viewNextPrintJob(); // Output: Next print job: Job 3

// Processing the remaining print job
printerQueue.processPrintJob(); // Output: Processing print job: Job 3

// Trying to process a print job when the queue is empty
printerQueue.processPrintJob(); // Output: No print jobs in the queue.
```

### Explanation

1. **Queue Class**: Implements basic queue operations (`enqueue`, `dequeue`, `front`, `isEmpty`, `size`, and `printQueue`).
2. **PrinterQueue Class**: Uses the `Queue` class to manage print jobs.
   - `addPrintJob(job)`: Adds a new print job to the queue.
   - `processPrintJob()`: Processes the next print job in the queue.
   - `viewNextPrintJob()`: Views the next print job without removing it.
   - `displayQueue()`: Displays all print jobs in the queue.

This setup simulates a simple printer queue where jobs are added, viewed, and processed in the order they were received.

---

## Binary Tree

A binary tree is a data structure in which each node has at most two children, referred to as the left child and the right child. In JavaScript, you can create a binary tree by defining a `Node` class and a `BinaryTree` class.

Here’s a brief overview of binary trees in JavaScript, followed by some example tasks to help you understand how to implement and work with them.

### Binary Tree Basics

#### Node Class

Each node in a binary tree typically contains a value, a reference to the left child, and a reference to the right child.

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

#### Binary Tree Class

A binary tree class can manage the nodes and provide methods for insertion, traversal, etc.

```javascript
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Method to insert a new value into the binary tree
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to recursively insert a node into the tree
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Method for in-order traversal of the tree
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  // Method to calculate the depth of the tree
  calculateDepth(node) {
    if (node === null) {
      return 0;
    }
    const leftDepth = this.calculateDepth(node.left);
    const rightDepth = this.calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
}
```

### Tasks

#### 1. Insert Nodes and Perform In-Order Traversal

Write a script to insert nodes into the binary tree and perform an in-order traversal.

```javascript
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log("In-Order Traversal:");
tree.inOrderTraversal(tree.root); // Output should be 2 3 4 5 6 7 8
```

#### 2. Calculate the Depth of the Tree

Write a script to calculate the depth of the binary tree.

```javascript
const depth = tree.calculateDepth(tree.root);
console.log("Depth of the tree:", depth); // Output should be 3
```

### Explanation

1. **Node Class**: Represents each node in the binary tree, with `value`, `left`, and `right` properties.
2. **BinaryTree Class**: Manages the binary tree, including methods for insertion, in-order traversal, and depth calculation.
   - `insert(value)`: Inserts a new value into the binary tree.
   - `insertNode(node, newNode)`: Helper method to recursively insert a node.
   - `inOrderTraversal(node)`: Performs an in-order traversal of the tree, logging node values in sorted order.
   - `calculateDepth(node)`: Calculates the depth of the binary tree.

These examples demonstrate how to create and work with a basic binary tree in JavaScript, including inserting nodes, performing traversals, and calculating the depth of the tree.

Sure! Let's break down the implementation of both the `TreeNode` and `BinaryTree` classes.

### Task 1: Implement a TreeNode Class

The `TreeNode` class will represent a node in a binary tree with properties `value`, `left`, and `right`.

```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

### Task 2: Implement a BinaryTree Class

The `BinaryTree` class will include methods for inserting values and performing in-order traversal to display nodes.

```javascript
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Method to insert a new value into the binary tree
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to recursively insert a node into the tree
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Method for in-order traversal of the tree
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}

// Example usage:

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log("In-Order Traversal:");
tree.inOrderTraversal(tree.root); // Output should be 2 3 4 5 6 7 8
```

### Explanation

1. **TreeNode Class**:

   - The `TreeNode` class is used to create nodes for the binary tree.
   - Each node has a `value`, a `left` child, and a `right` child, all initialized to `null`.

2. **BinaryTree Class**:
   - The `BinaryTree` class manages the binary tree operations.
   - The `insert(value)` method creates a new node and inserts it into the correct position in the tree.
   - The `insertNode(node, newNode)` helper method is used to recursively find the correct position for the new node.
   - The `inOrderTraversal(node)` method performs an in-order traversal, which visits nodes in the following order: left child, current node, right child.

By running the example usage, you will see the in-order traversal of the binary tree, which will print the node values in ascending order.

---

## Graph in JavaScript

Graphs are a fundamental data structure used to represent relationships between different elements. In JavaScript, you can implement graphs using various representations, such as adjacency lists or adjacency matrices. Let's briefly go over the basics of graphs and then implement a simple graph using an adjacency list.

### Basics of Graphs

1. **Vertices (Nodes)**: The fundamental units of the graph.
2. **Edges**: Connections between the vertices.
3. **Directed Graph**: Edges have a direction (from one vertex to another).
4. **Undirected Graph**: Edges do not have a direction (they simply connect two vertices).
5. **Weighted Graph**: Edges have weights (values) associated with them.
6. **Unweighted Graph**: Edges do not have weights.

### Adjacency List Representation

An adjacency list represents a graph as an array of lists. Each index of the array represents a vertex, and the list at that index contains the adjacent vertices (i.e., vertices connected by an edge).

### Implementation

Let's implement a simple unweighted, undirected graph using an adjacency list in JavaScript.

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1); // Since it's an undirected graph
    }
  }

  // Remove an edge between two vertices
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // Remove a vertex and all its edges
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // Display the graph
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
    }
  }
}

// Example usage:

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log("Graph:");
graph.display();

graph.removeEdge("A", "B");
console.log("Graph after removing the edge between A and B:");
graph.display();

graph.removeVertex("D");
console.log("Graph after removing vertex D:");
graph.display();
```

### Explanation

1. **Graph Class**:
   - The `Graph` class has an `adjacencyList` property, which is an object where each key represents a vertex, and the corresponding value is an array of adjacent vertices.
   - The `addVertex(vertex)` method adds a new vertex to the graph.
   - The `addEdge(vertex1, vertex2)` method adds an undirected edge between two vertices.
   - The `removeEdge(vertex1, vertex2)` method removes the edge between two vertices.
   - The `removeVertex(vertex)` method removes a vertex and all its edges from the graph.
   - The `display()` method logs the graph's adjacency list to the console.

By running the example usage, you can see how the graph is built, modified, and displayed. This simple implementation demonstrates the basics of working with graphs in JavaScript.

Here's how you can implement a `Graph` class in JavaScript and use it to represent a simple network and perform BFS:

### Task 1: Implement a Graph Class

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }
  }

  // Perform Breadth-First Search (BFS)
  bfs(start) {
    const queue = [start];
    const visited = new Set();
    const result = [];

    visited.add(start);

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

// Example Usage
const graph = new Graph();

// Adding vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

// Adding edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

// Perform BFS
const bfsResult = graph.bfs("A");
console.log("BFS result:", bfsResult);
```

### Task 2: Use the Graph Class to Represent a Simple Network and Perform BFS

In the example usage, we created a graph with 5 vertices and 5 edges, forming a simple network. We performed a BFS starting from vertex `'A'`, which logs the order in which nodes are visited.

#### Explanation:

1. **Graph Class**: Contains methods to add vertices and edges. The `bfs` method performs a breadth-first search.
2. **Adding Vertices and Edges**: Vertices are added first, and then edges are defined to connect them.
3. **BFS Execution**: The BFS starts from a given vertex and explores all reachable vertices level by level.

You can modify the graph structure or the starting vertex to suit different scenarios and test different network configurations.
