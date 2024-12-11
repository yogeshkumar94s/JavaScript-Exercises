### **XMLHttpRequest (XHR)**

**XMLHttpRequest (XHR)** is an older API for making network requests in JavaScript. While it has been largely replaced by the more modern **Fetch API**, it is still important to understand as it remains in use for compatibility and legacy reasons.

XHR provides a way to interact with servers using:

- HTTP methods like `GET`, `POST`, `PUT`, `DELETE`.
- Asynchronous or synchronous requests (asynchronous is recommended).

---

### **Key Features of XHR**

1. **Request Lifecycle**:
   - XHR uses events to track the state of a request.
2. **Compatibility**:
   - Supported in all modern browsers and useful for older ones.
3. **Data Handling**:
   - Supports different response formats like `text`, `JSON`, `XML`, or binary data.

---

### **Basic Syntax**

1. Create an instance:
   ```javascript
   const xhr = new XMLHttpRequest();
   ```
2. Open a connection:
   ```javascript
   xhr.open("METHOD", "URL", true); // true indicates async
   ```
3. Send the request:
   ```javascript
   xhr.send(data);
   ```
4. Handle the response:
   ```javascript
   xhr.onload = function () {
     if (xhr.status === 200) {
       console.log(xhr.responseText);
     }
   };
   ```

---

### **Examples**

#### **1. GET Request**

Fetch data from a public API using XHR:

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log("Response:", data);
  } else {
    console.error("Error:", xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error("Network error");
};

xhr.send();
```

---

#### **2. POST Request**

Send data to a server:

```javascript
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = function () {
  if (xhr.status === 201) {
    console.log("Data saved:", JSON.parse(xhr.responseText));
  } else {
    console.error("Error:", xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error("Network error");
};

const data = JSON.stringify({
  title: "foo",
  body: "bar",
  userId: 1,
});

xhr.send(data);
```

---

#### **3. Handling Progress Events**

Track the progress of a download or upload.

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://via.placeholder.com/600", true);

xhr.onprogress = function (event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
    console.log(`Downloaded: ${percentComplete.toFixed(2)}%`);
  }
};

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log("Download complete");
  } else {
    console.error("Error:", xhr.statusText);
  }
};

xhr.send();
```

---

#### **4. Aborting a Request**

You can cancel an ongoing request using the `abort()` method.

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log("Response:", JSON.parse(xhr.responseText));
  }
};

xhr.onerror = function () {
  console.error("Network error");
};

xhr.send();

// Abort the request after 1 second
setTimeout(() => {
  xhr.abort();
  console.log("Request aborted");
}, 1000);
```

---

#### **5. Handling Binary Data**

Download binary files using XHR.

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://via.placeholder.com/600", true);
xhr.responseType = "blob"; // Set the response type to blob

xhr.onload = function () {
  if (xhr.status === 200) {
    const blob = xhr.response;
    const url = URL.createObjectURL(blob);
    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
  }
};

xhr.send();
```

---

### **Advantages of XMLHttpRequest**

1. **Wide Compatibility**:
   - Supported in all browsers, even older ones.
2. **Advanced Features**:
   - Supports progress tracking (`onprogress`), aborting requests, and handling binary data.
3. **Synchronous Mode** (not recommended):
   - Useful in specific cases (e.g., blocking execution), but it can freeze the UI.

---

### **Drawbacks of XMLHttpRequest**

1. **Verbosity**:
   - Requires more boilerplate code compared to the Fetch API.
2. **Callback Hell**:
   - No built-in support for promises or async/await, leading to complex code.
3. **Limited Flexibility**:
   - Fetch provides a cleaner, modern API for network requests.

---

### **Best Practices**

1. **Avoid Synchronous Mode**:

   - Always use asynchronous requests to avoid freezing the UI.

2. **Handle Errors Gracefully**:

   - Use `onerror` to handle network errors and check `status` for server errors.

3. **Use Fetch for Modern Applications**:
   - Prefer the Fetch API unless working with older browsers or legacy code.

---

### **Task for You**

1. Create an XHR script to:
   - Fetch a list of posts from `https://jsonplaceholder.typicode.com/posts`.
   - Display the posts in an HTML list.
2. Add a progress bar to track the download progress.
3. Bonus: Handle network errors and display a retry button.

Let me know if you need help implementing this!
