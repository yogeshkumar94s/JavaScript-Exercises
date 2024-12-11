### **URL Objects**

The `URL` class in JavaScript provides an easy way to construct, parse, and manipulate URLs. It is especially helpful for handling dynamic URLs or extracting specific parts of a URL.

#### Why Use URL Objects?

- Programmatic manipulation of URLs (e.g., changing query parameters).
- Avoid string concatenation, which can lead to errors.
- Works seamlessly with web APIs like Fetch.

---

### **Creating a URL Object**

You can create a `URL` object using the `URL` constructor:

```javascript
const myUrl = new URL("https://example.com/path?name=John&age=30");
console.log(myUrl); // URL object representation
```

#### Important Properties of a URL Object

1. **`href`**: The full URL as a string.
2. **`protocol`**: The protocol (e.g., `https:` or `http:`).
3. **`hostname`**: The domain name.
4. **`pathname`**: The path after the domain.
5. **`search`**: The query string.
6. **`searchParams`**: An object to manipulate query parameters.
7. **`hash`**: The fragment identifier (part after `#`).

---

### **Examples**

#### 1. Accessing Parts of a URL

```javascript
const myUrl = new URL(
  "https://example.com:8080/path?name=John&age=30#section1"
);

console.log(myUrl.href); // "https://example.com:8080/path?name=John&age=30#section1"
console.log(myUrl.protocol); // "https:"
console.log(myUrl.hostname); // "example.com"
console.log(myUrl.port); // "8080"
console.log(myUrl.pathname); // "/path"
console.log(myUrl.search); // "?name=John&age=30"
console.log(myUrl.hash); // "#section1"
```

---

#### 2. Modifying the Query Parameters

The `searchParams` property allows you to add, update, or delete query parameters.

```javascript
const myUrl = new URL("https://example.com/path");

myUrl.searchParams.append("name", "John");
myUrl.searchParams.append("age", "30");
console.log(myUrl.href); // "https://example.com/path?name=John&age=30"

myUrl.searchParams.set("name", "Jane"); // Update 'name'
console.log(myUrl.href); // "https://example.com/path?name=Jane&age=30"

myUrl.searchParams.delete("age"); // Remove 'age'
console.log(myUrl.href); // "https://example.com/path?name=Jane"
```

---

#### 3. Iterating Through Query Parameters

The `searchParams` property supports iteration, which is useful for working with all parameters.

```javascript
const myUrl = new URL("https://example.com/path?name=John&age=30");

for (const [key, value] of myUrl.searchParams) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: John
// age: 30
```

---

#### 4. Using URLs with Relative Paths

The `URL` constructor can resolve relative paths based on a base URL.

```javascript
const base = "https://example.com/folder/";
const relative = "../file.txt";
const resolvedUrl = new URL(relative, base);
console.log(resolvedUrl.href); // "https://example.com/file.txt"
```

---

### **Practical Use Case**

#### Generate a Dynamic URL for an API Request

```javascript
const apiUrl = new URL("https://api.example.com/data");
apiUrl.searchParams.append("type", "user");
apiUrl.searchParams.append("id", "123");

console.log(apiUrl.href);
// "https://api.example.com/data?type=user&id=123"

// Use it in a Fetch request
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));
```

---

### **Task for You**

1. Create a `URL` object for `https://example.com/products?category=electronics&sort=price`.

   - Add a query parameter `discount` with the value `10`.
   - Modify `sort` to `rating`.
   - Delete the `category` parameter.
   - Print the final URL.

2. Create a relative URL for `/images/logo.png` with the base `https://mywebsite.com/assets/`. Print the resolved URL.

Let me know when you're done, or if you have questions!
