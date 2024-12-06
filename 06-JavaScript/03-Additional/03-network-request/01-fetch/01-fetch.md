### **Fetch API in JavaScript**

The Fetch API provides a modern, flexible way to make HTTP requests in JavaScript. It’s part of the browser's native API and replaces older techniques like `XMLHttpRequest`.

---

### **Key Features of Fetch API**

1. **Promise-based**: Returns a promise that resolves once the response is available.
2. **Readable Stream**: Provides access to the response body as a stream, which can be parsed as text, JSON, blob, etc.
3. **Configurable**: Supports various HTTP methods (`GET`, `POST`, etc.), headers, and other options.
4. **Cross-Origin Requests**: Supports CORS (Cross-Origin Resource Sharing), but requests to other origins must be explicitly allowed by the server.

---

### **Basic Syntax**

```javascript
fetch(url, options)
  .then((response) => {
    // Handle the response object
  })
  .catch((error) => {
    // Handle any errors
  });
```

- **`url`**: The endpoint you want to fetch.
- **`options`**: Optional configuration object for the request (e.g., method, headers, body).

---

### **Making a Basic GET Request**

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse JSON from response body
  })
  .then((data) => {
    console.log(data); // Handle the parsed data
  })
  .catch((error) => {
    console.error("Error fetching data:", error.message);
  });
```

---

### **Making a POST Request**

For sending data to a server (e.g., submitting a form):

```javascript
fetch("https://api.example.com/create", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "John", age: 30 }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data created:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

---

### **Advanced Features**

#### **Custom Headers**

```javascript
fetch("https://api.example.com/data", {
  headers: {
    Authorization: "Bearer my-token",
    Accept: "application/json",
  },
});
```

#### **Using FormData for File Upload**

```javascript
const formData = new FormData();
formData.append("file", fileInput.files[0]);

fetch("https://api.example.com/upload", {
  method: "POST",
  body: formData,
});
```

#### **Handling Streams**

```javascript
fetch("https://api.example.com/stream")
  .then((response) => response.body.getReader())
  .then((reader) => {
    return reader.read().then(function processStream({ done, value }) {
      if (done) {
        console.log("Stream complete");
        return;
      }
      console.log("Received chunk:", value);
      return reader.read().then(processStream);
    });
  });
```

---

### **Execution Context Around `fetch`**

Understanding the execution context of `fetch` helps clarify how it works asynchronously in JavaScript.

#### **1. Event Loop and Microtasks**

- **`fetch` runs asynchronously**:
  - The Fetch API starts a network request in a non-blocking way.
  - It returns a **promise** that resolves or rejects based on the network response.
- **Callback Placement**:
  - The `.then()` or `.catch()` callbacks are queued as **microtasks**, meaning they run after the current synchronous code but before other queued tasks (like `setTimeout`).

Example:

```javascript
console.log("Start");

fetch("https://api.example.com/data").then((response) =>
  console.log("Fetch completed")
);

console.log("End");
```

Output:

```
Start
End
Fetch completed
```

- The `fetch` request does not block the `console.log("End")`. The `.then()` callback is executed later when the fetch is complete.

---

#### **2. Scope and Closures**

- Variables declared in the same function as `fetch` remain accessible within its promise chain due to closures.

Example:

```javascript
function fetchData() {
  const apiEndpoint = "https://api.example.com/data";
  fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => console.log("Data from:", apiEndpoint, data));
}

fetchData();
```

Here, `apiEndpoint` is accessible within the `.then()` chain because of closures.

---

#### **3. Handling Errors**

- Fetch only rejects on **network-level errors** (e.g., server unreachable).
- **HTTP status errors** (e.g., 404, 500) do not cause rejection. You must manually check `response.ok`.

```javascript
fetch("https://api.example.com/404")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => console.error(error.message));
```

---

#### **4. Combining with Async/Await**

Async/await simplifies fetch operations while keeping the same execution context principles.

```javascript
const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Fetch Error:", error.message);
  }
};

fetchData();
```

---

### **Best Practices**

1. **Always Check `response.ok`**:
   - Ensure HTTP status errors are handled explicitly.
2. **Use Timeouts for Long Requests**:
   - Combine `fetch` with `Promise.race` for timeouts.
3. **Centralized Error Handling**:
   - Create a wrapper function to handle common fetch patterns and errors.
4. **Optimize Network Usage**:
   - Cache frequently used data when appropriate.
5. **Use AbortController for Cancellations**:
   - Allows you to cancel fetch requests when no longer needed.

Example:

```javascript
const controller = new AbortController();
const signal = controller.signal;

fetch("https://api.example.com/data", { signal })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => {
    if (err.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.error(err.message);
    }
  });

// Cancel the fetch after 1 second
setTimeout(() => controller.abort(), 1000);
```

---

## Fetch
