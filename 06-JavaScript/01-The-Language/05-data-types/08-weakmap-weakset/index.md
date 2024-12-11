## WeakMap and WeakSet in JavaScript

### Basic Questions

1. **What is a WeakMap?**

```javascript
const weakMap = new WeakMap();
weakMap.set(obj1, "value1");
```

A **WeakMap** is a special type of Map where the keys are weak references. This means that if there are no other strong references to the key object, the key-value pair can be garbage collected, even if the WeakMap itself is still alive.

**Key Points:**

- **Weak References:** Keys are held as weak references, allowing for automatic garbage collection.
- **No Iteration:** WeakMaps cannot be iterated over directly.
- **Limited Operations:** You can only use `get()`, `set()`, `has()`, and `delete()` methods on WeakMaps.

2. **How do you create a WeakMap?**

```javascript
const weakMap = new WeakMap();
```

To create a WeakMap, you simply use the `WeakMap()` constructor. This creates an empty WeakMap object, ready to store key-value pairs.

Once you have a WeakMap, you can add key-value pairs using the `set()` method. For example:

```javascript
const obj1 = {};
weakMap.set(obj1, "value1");
```

3. **What is the key difference between a WeakMap and a regular Map?**

```javascript
const weakMap = new WeakMap();
const regularMap = new Map();

let obj = {};

weakMap.set(obj, "value");
regularMap.set(obj, "value");

// Remove all strong references to obj
obj = null;

// The key-value pair in the weakMap will be garbage collected
// The key-value pair in the regularMap will still exist
```

The key difference between a WeakMap and a regular Map lies in the nature of their keys:

**WeakMap:**

- **Weak References:** The keys are held as weak references.
- **Garbage Collection:** If there are no other strong references to a key, the key-value pair can be garbage collected, even if the WeakMap itself is still alive.
- **Limited Operations:** You can only use `get()`, `set()`, `has()`, and `delete()` methods on WeakMaps.
- **No Iteration:** WeakMaps cannot be iterated over.

**Regular Map:**

- **Strong References:** The keys are held as strong references.
- **No Automatic Garbage Collection:** Key-value pairs remain in the Map until they are explicitly removed.
- **Full Set of Operations:** You can use a wider range of operations on regular Maps, including iteration, `clear()`, and more.

4. **What is a WeakSet?**

```javascript
const weakSet = new WeakSet();
weakSet.add(obj1);
weakSet.add(obj2);
```

A **WeakSet** is a data structure that stores unique objects as weak references. Similar to WeakMaps, if there are no other strong references to an object in a WeakSet, it can be garbage collected.

**Key Points:**

- **Weak References:** Objects in a WeakSet are held as weak references.
- **Unique Objects:** WeakSets only store unique objects.
- **No Iteration:** WeakSets cannot be iterated over directly.
- **Limited Operations:** You can only use `add()`, `has()`, and `delete()` methods on WeakSets.

5. **How do you create a WeakSet?**

```javascript
const weakSet = new WeakSet();
```

To create a WeakSet, you simply use the `WeakSet()` constructor. This creates an empty WeakSet object, ready to store unique objects.

Once you have a WeakSet, you can add objects to it using the `add()` method. For example:

```javascript
const obj1 = {};
const obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);
```

### Advanced Questions

6. **Explain the concept of weak references and garbage collection in JavaScript.**

**Weak References and Garbage Collection in JavaScript**

In JavaScript, garbage collection is an automatic process that frees up memory occupied by objects that are no longer needed. The garbage collector identifies and reclaims memory that is no longer referenced.

**Weak References:**
A weak reference is a reference to an object that doesn't prevent it from being garbage collected. If an object is only held by weak references, the garbage collector can reclaim its memory.

**WeakMap and WeakSet:**
WeakMaps and WeakSets are data structures that use weak references for their keys or values. This means that if an object is no longer referenced strongly, it can be garbage collected, even if it's still present in the WeakMap or WeakSet.

**Example:**

```javascript
const weakMap = new WeakMap();
const obj = {};

weakMap.set(obj, "value");

// If there are no other strong references to obj,
// it can be garbage collected, and the key-value pair
// in the WeakMap will also be removed.
```

**Key Points:**

- **Memory Management:** Weak references help prevent memory leaks by allowing objects to be garbage collected when they are no longer needed.
- **Temporary Associations:** WeakMaps are often used to create temporary associations between objects, such as caching or storing temporary data.
- **Privacy and Security:** WeakMaps can be used to implement private data structures, as the keys can be garbage collected, making the data inaccessible.

7. **How can you use WeakMaps to implement private data in JavaScript objects?**

```javascript
function Person(name) {
  const _privateData = new WeakMap();
  _privateData.set(this, { name });

  this.getName = function () {
    return _privateData.get(this).name;
  };
}

const person = new Person("Alice");
console.log(person.getName()); // Output: Alice
// Accessing private data directly will be undefined
console.log(person._privateData); // Output: undefined
```

**WeakMaps for Private Data:**

1. **Create a WeakMap:** Inside the constructor, create a WeakMap to store private data.
2. **Store Data:** Use the `set()` method of the WeakMap to associate the `this` keyword (referring to the current object instance) with the private data.
3. **Access Private Data:** Define public methods that access the private data using the `get()` method of the WeakMap.

**Key Points:**

- **Privacy:** The private data is not directly accessible from outside the object.
- **Memory Management:** If the object is no longer referenced, the WeakMap and its associated data will be garbage collected.
- **Encapsulation:** WeakMaps help enforce encapsulation by keeping data private within the object's scope.

8. **What are the limitations of WeakMaps and WeakSets?**

```javascript
const weakMap = new WeakMap();
const weakSet = new WeakSet();

// WeakMap limitations
// Cannot iterate over keys or values
// Cannot use methods like size, keys(), values(), entries()

// WeakSet limitations
// Cannot iterate over elements
// Cannot use methods like size, has(), delete()
```

**WeakMaps:**

- **No Iteration:** You cannot iterate over the key-value pairs of a WeakMap.
- **Limited Operations:** You can only use `get()`, `set()`, `has()`, and `delete()` methods.
- **No Size Property:** You cannot directly determine the number of key-value pairs in a WeakMap.

**WeakSets:**

- **No Iteration:** You cannot iterate over the elements of a WeakSet.
- **Limited Operations:** You can only use `add()`, `has()`, and `delete()` methods.
- **No Size Property:** You cannot directly determine the number of elements in a WeakSet.

**Key Limitation:**

The primary limitation of WeakMaps and WeakSets is their lack of direct iteration and size information. This is because their primary purpose is to create weak references to objects and manage memory efficiently, rather than providing a general-purpose data structure for storing and manipulating data.

9. **When should you use a WeakMap or a WeakSet over a regular Map or Set?**

```javascript
// WeakMap:
const cache = new WeakMap(); // Store temporary data associated with objects

// WeakSet:
const uniqueObjects = new WeakSet(); // Track unique objects without preventing garbage collection
```

**WeakMap:**

- **Temporary Associations:** When you need to associate temporary data with objects that may be garbage collected.
- **Private Data:** Implementing private data for objects without polluting the global namespace.
- **Caching:** Caching data associated with objects, where the cache entries can be garbage collected when the objects are no longer needed.

**WeakSet:**

- **Tracking Unique Objects:** Keeping track of unique objects without preventing them from being garbage collected.
- **Memory Management:** Avoiding memory leaks by ensuring that objects are garbage collected when no longer needed.

**Key Considerations:**

- **Memory Efficiency:** Use WeakMaps and WeakSets to prevent memory leaks, especially when dealing with large numbers of objects or long-running applications.
- **Temporary Associations:** If you need to associate data with objects for a limited time, WeakMaps are a good choice.
- **Unique Object Tracking:** If you need to keep track of unique objects without affecting their garbage collection, WeakSets are suitable.

10. **How can you use WeakMaps to create memory-efficient caches?**

```javascript
const cache = new WeakMap();

function fetchData(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }

  const data = fetch(url);
  cache.set(url, data);
  return data;
}
```

**WeakMaps for Memory-Efficient Caches:**

1. **Key-Value Store:** Use the WeakMap to store the fetched data as the value and the URL as the key.
2. **Cache Check:** Before fetching the data, check if it's already cached using the `has()` method.
3. **Cache Update:** If the data is not found in the cache, fetch it and store it in the WeakMap.
4. **Garbage Collection:** When the URL object is no longer referenced, the corresponding cache entry will be garbage collected.

**Advantages:**

- **Memory Efficiency:** The cache entries are automatically cleaned up when the associated URLs are no longer needed.
- **Avoids Memory Leaks:** Prevents memory leaks by ensuring that cache entries are released when they are no longer necessary.
- **Simple Implementation:** The WeakMap provides a straightforward way to implement a cache with automatic cleanup.
