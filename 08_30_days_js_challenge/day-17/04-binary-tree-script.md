Here's a script that implements a binary tree with methods for inserting nodes and performing in-order traversal.

### Binary Tree Implementation

```javascript
// Define the TreeNode class
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Define the BinaryTree class
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Method to insert a value into the binary tree
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertRecursively(this.root, newNode);
    }
  }

  // Helper method to insert a node recursively
  _insertRecursively(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertRecursively(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertRecursively(node.right, newNode);
      }
    }
  }

  // Method for in-order traversal
  inOrderTraversal() {
    const result = [];
    this._inOrderTraversalRecursively(this.root, result);
    return result;
  }

  // Helper method for in-order traversal recursively
  _inOrderTraversalRecursively(node, result) {
    if (node !== null) {
      this._inOrderTraversalRecursively(node.left, result);
      result.push(node.value);
      this._inOrderTraversalRecursively(node.right, result);
    }
  }
}

// Example usage
const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);

console.log("In-order Traversal:");
console.log(binaryTree.inOrderTraversal());
```

### Explanation

1. **TreeNode Class**:

   - Represents a node in the binary tree with `value`, `left`, and `right` properties.

2. **BinaryTree Class**:

   - **`constructor()`**: Initializes an empty tree.
   - **`insert(value)`**: Inserts a value into the tree. If the tree is empty, it sets the root to the new node. Otherwise, it uses the `_insertRecursively` method to find the correct location for the new node.
   - **`_insertRecursively(node, newNode)`**: Helper method to recursively insert a node into the correct position based on its value.
   - **`inOrderTraversal()`**: Public method that initiates in-order traversal of the tree and returns an array of values in sorted order.
   - **`_inOrderTraversalRecursively(node, result)`**: Helper method to perform the actual in-order traversal recursively and collect node values.

3. **Example Usage**:
   - Creates a new `BinaryTree` instance and inserts several values.
   - Performs in-order traversal to get a sorted array of the inserted values and logs it to the console.

This script provides a basic implementation of a binary tree with insertion and in-order traversal capabilities. The in-order traversal method visits nodes in ascending order, which is a common operation for binary search trees.
