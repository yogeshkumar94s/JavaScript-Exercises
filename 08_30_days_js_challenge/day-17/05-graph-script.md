Here's a script that implements a graph and performs a breadth-first search (BFS).

### Graph Implementation with BFS

```javascript
// Define the Graph class
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Method to add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Method to add an edge between two vertices
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // Assuming undirected graph
    }
  }

  // Method to perform breadth-first search (BFS)
  bfs(startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    const result = [];

    visited.add(startVertex);

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      const neighbors = this.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}

// Example usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

console.log("Breadth-First Search (starting from 'A'):");
console.log(graph.bfs("A"));
```

### Explanation

1. **Graph Class**:

   - **`constructor()`**: Initializes an empty graph represented as an adjacency list using a `Map`.
   - **`addVertex(vertex)`**: Adds a vertex to the graph. If the vertex does not already exist, it creates a new entry in the adjacency list with an empty array of neighbors.
   - **`addEdge(vertex1, vertex2)`**: Adds an undirected edge between two vertices. Adds each vertex to the other's adjacency list.
   - **`bfs(startVertex)`**: Performs breadth-first search starting from a given vertex. It uses a queue to explore nodes level by level. Nodes are added to a `visited` set to prevent re-processing, and the result of visited nodes is collected in an array.

2. **Example Usage**:
   - Creates a new `Graph` instance and adds vertices and edges to create a simple graph.
   - Performs a BFS starting from vertex 'A' and logs the order of visited nodes.

This script provides a basic implementation of an undirected graph and demonstrates BFS traversal. BFS is particularly useful for finding the shortest path in an unweighted graph and exploring all reachable nodes from a starting vertex.
