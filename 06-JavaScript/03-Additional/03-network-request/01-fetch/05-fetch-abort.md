### **Fetch: Abort**

The Fetch API allows you to cancel or abort ongoing requests using the `AbortController` API. This is particularly useful for:

- Preventing unnecessary requests when a user navigates away or cancels an action.
- Optimizing network usage and performance.
- Handling race conditions where only the latest request should be processed.

---

### **Key Concepts**

1. **`AbortController`**:

   - Provides an `AbortSignal` object to communicate cancellation.
   - Use the `abort()` method to cancel requests.

2. **`AbortSignal`**:
   - Passed to the Fetch API via the `signal` property in the request options.
   - Listens for the `abort` event to stop the request.

---

### **Basic Example: Abort a Fetch Request**

```javascript
const controller = new AbortController(); // Create an AbortController
const signal = controller.signal; // Get the AbortSignal

fetch("https://jsonplaceholder.typicode.com/posts", { signal })
  .then((response) => response.json())
  .then((data) => console.log("Data:", data))
  .catch((err) => {
    if (err.name === "AbortError") {
      console.log("Fetch aborted!");
    } else {
      console.error("Fetch error:", err);
    }
  });

// Abort the request after 2 seconds
setTimeout(() => controller.abort(), 2000);
```

---

### **Detailed Explanation**

1. **Create an `AbortController`**:

   - Use `new AbortController()` to create a controller.

2. **Pass `AbortSignal` to Fetch**:

   - Include the `signal` from the controller in the Fetch options.

3. **Abort the Request**:

   - Call `controller.abort()` to cancel the request.

4. **Handle the `AbortError`**:
   - The Fetch promise rejects with an `AbortError` when the request is aborted.

---

### **Use Case: Search with Cancellation**

In real-world applications, such as search-as-you-type, you may want to cancel previous requests if a new search is initiated.

```javascript
let currentController;

async function fetchSearchResults(query) {
  // Abort the previous request if it exists
  if (currentController) {
    currentController.abort();
  }

  // Create a new AbortController
  currentController = new AbortController();
  const signal = currentController.signal;

  try {
    const response = await fetch(`https://api.example.com/search?q=${query}`, {
      signal,
    });
    const data = await response.json();
    console.log("Search Results:", data);
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Previous search aborted!");
    } else {
      console.error("Fetch error:", err);
    }
  }
}

// Simulate user typing
fetchSearchResults("javascript");
setTimeout(() => fetchSearchResults("javascript fetch api"), 500); // Cancels the previous request
```

---

### **Use Case: Timeout for Fetch Requests**

You can use the `AbortController` to set a timeout for Fetch requests.

```javascript
function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const signal = controller.signal;

  // Set a timeout to abort the fetch
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  return fetch(url, { signal })
    .then((response) => {
      clearTimeout(timeoutId); // Clear the timeout if the request succeeds
      return response.json();
    })
    .catch((err) => {
      if (err.name === "AbortError") {
        console.log("Request timed out!");
      } else {
        console.error("Fetch error:", err);
      }
    });
}

// Usage
fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", 3000).then(
  (data) => console.log("Data:", data)
);
```

---

### **Advanced Example: Combining with UI Events**

Abort fetch requests when a user navigates away or closes a modal.

```html
<button id="start-btn">Start Fetch</button>
<button id="cancel-btn">Cancel Fetch</button>

<script>
  const startButton = document.getElementById("start-btn");
  const cancelButton = document.getElementById("cancel-btn");

  let controller;

  startButton.addEventListener("click", () => {
    // Abort any ongoing request
    if (controller) {
      controller.abort();
    }

    // Start a new fetch
    controller = new AbortController();
    const signal = controller.signal;

    fetch("https://jsonplaceholder.typicode.com/posts", { signal })
      .then((response) => response.json())
      .then((data) => console.log("Data:", data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted by user!");
        } else {
          console.error("Fetch error:", err);
        }
      });
  });

  cancelButton.addEventListener("click", () => {
    if (controller) {
      controller.abort();
    }
  });
</script>
```

---

### **Best Practices**

1. **Abort Unused Requests**:
   - Always abort ongoing requests when they are no longer needed.
2. **Graceful Fallback**:

   - Handle `AbortError` properly to ensure your application remains stable.

3. **Use in Search or Type-Ahead**:

   - Cancel previous requests for performance and resource optimization.

4. **Timeouts**:
   - Combine `AbortController` with timeouts to avoid hanging requests.

---

### **Task for You**

1. Create a script that:
   - Fetches data from `https://jsonplaceholder.typicode.com/comments`.
   - Cancels the request if it doesn’t complete within 3 seconds.
2. Enhance the script:
   - Allow the user to manually abort the request via a button click.

Let me know how it goes or if you have questions!
