## **Basic Questions**

## 1. **What is a network request in JavaScript?**

### Explain how a network request works in JavaScript, and briefly describe its purpose in web development.

### Network Requests in JavaScript

A network request in JavaScript allows web applications to communicate with external resources, such as APIs, databases, or servers, over the internet. These requests can be made to retrieve data, send data, or perform other operations on a remote server. The most common way to make network requests in JavaScript is using the **`fetch` API** or older methods like **XMLHttpRequest**.

#### **Purpose of Network Requests in Web Development**

- **Retrieve Data**: Fetching dynamic content, such as user information, posts, products, etc.
- **Send Data**: Submitting data like form inputs, updates, or user activity (e.g., logging in, posting a comment).
- **API Integration**: Communicating with backend services or third-party APIs (e.g., weather data, authentication, payments).

### How Network Requests Work

1. **Client-Side Request**:
   - The browser or client-side JavaScript code sends a request to a server for a specific resource (e.g., API data, file, etc.).
2. **Server Response**:

   - The server processes the request and sends back a response, which may include the requested data or a status message.

3. **Handling Responses**:
   - Once the client receives the response, the data is processed (typically as JSON, XML, or plain text) and displayed to the user or used within the application.

### **Making a Network Request with the `fetch` API**

The **`fetch`** function is modern and widely used in JavaScript to make network requests. It returns a promise, which resolves when the request is completed.

#### **Basic Fetch Example**

```javascript
// Example: Fetching data from an API
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the JSON data
  })
  .then((data) => {
    console.log(data); // Handle the data from the response
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error); // Handle errors
  });
```

- **URL**: The endpoint you want to send the request to.
- **Response**: The server's reply, which can be accessed through the `.then()` handler.
- **`.json()`**: Method to parse JSON responses.
- **`.catch()`**: Handles any errors during the request.

#### **Making a POST Request with Fetch**

For sending data (e.g., creating a new resource), you use a POST request.

```javascript
// Example: Sending data with a POST request
const data = {
  username: "user1",
  password: "securePassword123",
};

fetch("https://api.example.com/login", {
  method: "POST", // HTTP method
  headers: {
    "Content-Type": "application/json", // Indicate the type of data being sent
  },
  body: JSON.stringify(data), // Convert data object to JSON string
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Login successful:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

- **`method: 'POST'`**: Specifies the HTTP method.
- **`headers`**: Information about the request (such as content type).
- **`body`**: Data being sent to the server, typically serialized as JSON.

### **XMLHttpRequest (Older Method)**

Before `fetch`, **`XMLHttpRequest`** was the standard way to make network requests. It has a more complex API, but is still supported in older codebases.

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();
```

### **Purpose of Network Requests in Web Development**

- **Fetching Data**: You can retrieve data from remote servers or APIs (e.g., showing posts, news, weather, etc.).
- **Submitting Data**: Sending form data, user inputs, or data to a server (e.g., login, registration).
- **Dynamic Content**: Allows the website to fetch and update content without refreshing the page (this is the basis of AJAX).
- **Third-party APIs**: Many modern web applications interact with third-party services (such as payment gateways, social media APIs, or cloud storage).

### Summary

In web development, network requests enable your application to interact with external data and services. Using JavaScript's `fetch` API, you can send and receive data asynchronously, providing a dynamic user experience without needing to reload the entire page. This process is essential for tasks like authentication, displaying live data, and submitting forms in modern web applications.

## 2. **What is the **`fetch()`** API in JavaScript?**

### Write a simple example of using **`fetch()`** to make a **GET** request to an API and log the response data.

Here's a simple example of using **`fetch()`** to make a **GET** request to an API and log the response data:

```javascript
// Example: Making a GET request to an API using fetch()
fetch("https://jsonplaceholder.typicode.com/posts") // Replace with the API URL
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the JSON response
  })
  .then((data) => {
    console.log("Data fetched from the API:", data); // Log the data to the console
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error); // Handle any errors
  });
```

### Explanation:

1. **`fetch()`**: Sends a GET request to the specified URL (`https://jsonplaceholder.typicode.com/posts` in this case).
2. **`response.json()`**: Parses the response as JSON if the response is successful.
3. **`.then()`**: Handles the promise when the request is successful. It logs the fetched data.
4. **`.catch()`**: Handles any errors that may occur during the fetch operation (e.g., network issues, invalid response).

### Output (in case of success):

```json
Data fetched from the API: [{ "userId": 1, "id": 1, "title": "Title 1", "body": "Post content..." }, ...]
```

## 3. **What are the HTTP methods used in network requests?**

### List and explain the common HTTP methods (e.g., **GET**, **POST**, **PUT**, **DELETE**) and their usage in a network request.

### Common HTTP Methods and Their Usage

HTTP methods are used to specify the action that should be performed on the specified resource when making a network request. Below are the most commonly used HTTP methods:

### 1. **GET**

- **Purpose**: Retrieve data from the server.
- **Usage**: Used when you want to fetch information or resources from a server without making any changes to the server's data.
- **Characteristics**:
  - Safe: It does not modify any data on the server.
  - Idempotent: Calling the same GET request multiple times will always return the same result.
- **Example**: Fetching a list of blog posts from an API.

```javascript
fetch("https://api.example.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

### 2. **POST**

- **Purpose**: Send data to the server to create a new resource.
- **Usage**: Typically used to submit form data or create a new resource (e.g., creating a new user account or submitting a comment).
- **Characteristics**:
  - Non-idempotent: Multiple POST requests will create multiple resources.
  - May include a body to send data (e.g., form fields or JSON data).
- **Example**: Submitting a new blog post to a server.

```javascript
const postData = {
  title: "New Blog Post",
  content: "This is the content of the new blog post.",
};

fetch("https://api.example.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(postData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

### 3. **PUT**

- **Purpose**: Update an existing resource on the server.
- **Usage**: Used to replace a current resource with the updated one, or to update a resource with new data (e.g., updating user information or editing a blog post).
- **Characteristics**:
  - Idempotent: Calling the same PUT request multiple times will always have the same effect.
  - The entire resource is typically replaced, though some servers may allow partial updates.
- **Example**: Updating a user's profile information.

```javascript
const updatedData = {
  name: "John Doe",
  email: "john.doe@example.com",
};

fetch("https://api.example.com/users/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(updatedData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

### 4. **DELETE**

- **Purpose**: Delete a resource from the server.
- **Usage**: Used when you want to remove a resource from the server (e.g., deleting a post or removing a user account).
- **Characteristics**:
  - Idempotent: Calling the same DELETE request multiple times will always result in the resource being removed (or no action if the resource was already deleted).
- **Example**: Deleting a blog post from the server.

```javascript
fetch("https://api.example.com/posts/1", {
  method: "DELETE",
})
  .then((response) => {
    if (response.ok) {
      console.log("Post deleted successfully");
    } else {
      console.error("Failed to delete the post");
    }
  })
  .catch((error) => console.error("Error:", error));
```

### 5. **PATCH**

- **Purpose**: Partially update a resource on the server.
- **Usage**: Used when you need to update only specific fields of a resource, rather than replacing the entire resource.
- **Characteristics**:
  - Non-idempotent: Can have different results depending on the data being updated.
  - Typically used to update small parts of a resource (e.g., changing a user's password or email).
- **Example**: Partially updating a user's profile (e.g., changing only their email).

```javascript
const patchData = { email: "new.email@example.com" };

fetch("https://api.example.com/users/1", {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(patchData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

### 6. **HEAD**

- **Purpose**: Retrieve the headers of a resource without the body.
- **Usage**: Used when you need metadata about a resource, such as checking if a resource exists or checking modification timestamps, without downloading the full resource.
- **Characteristics**:
  - Similar to GET but without the response body.
- **Example**: Checking if a resource exists.

```javascript
fetch("https://api.example.com/posts/1", { method: "HEAD" })
  .then((response) => {
    if (response.ok) {
      console.log("Resource exists");
    } else {
      console.log("Resource not found");
    }
  })
  .catch((error) => console.error("Error:", error));
```

### 7. **OPTIONS**

- **Purpose**: Retrieve the allowed HTTP methods for a resource.
- **Usage**: Used to determine which HTTP methods (GET, POST, etc.) are supported by a server for a particular resource.
- **Characteristics**:
  - Typically used in preflight requests for CORS (Cross-Origin Resource Sharing).
- **Example**: Checking allowed methods for a resource.

```javascript
fetch("https://api.example.com/posts", { method: "OPTIONS" })
  .then((response) => {
    console.log("Allowed methods:", response.headers.get("allow"));
  })
  .catch((error) => console.error("Error:", error));
```

---

### Summary of HTTP Methods:

| HTTP Method | Purpose                            | Characteristics                                      |
| ----------- | ---------------------------------- | ---------------------------------------------------- |
| **GET**     | Retrieve data                      | Safe, idempotent, does not modify data               |
| **POST**    | Send data to create a new resource | Non-idempotent, used to submit data (e.g., forms)    |
| **PUT**     | Update an existing resource        | Idempotent, replaces resource with new data          |
| **DELETE**  | Delete a resource                  | Idempotent, removes a resource from the server       |
| **PATCH**   | Partially update a resource        | Non-idempotent, updates specific parts of a resource |
| **HEAD**    | Retrieve headers without body      | Similar to GET but only retrieves headers            |
| **OPTIONS** | Retrieve allowed HTTP methods      | Used to query allowed methods for a resource         |

These HTTP methods form the foundation of how web browsers and servers communicate in RESTful APIs, enabling actions such as reading, creating, updating, and deleting resources.

## 4. **What is a **Promise** in JavaScript?**

### Explain how **Promises** are used to handle asynchronous operations like network requests. Provide an example of handling the **fetch()** API's **Promise** with `.then()` and `.catch()`.

### Promises in JavaScript: Handling Asynchronous Operations

A **Promise** in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation. It is used to handle operations that take time, like **network requests**, **reading files**, or any other tasks that don't execute immediately.

A promise can be in one of the following states:

- **Pending**: The operation is still ongoing.
- **Resolved (Fulfilled)**: The operation was successful, and the promise is fulfilled.
- **Rejected**: The operation failed, and the promise was rejected.

### **How Promises Work**

When an asynchronous task is initiated (e.g., a network request), a **Promise** is returned. You can then **attach handlers** using `.then()` and `.catch()` to deal with the outcome when the task completes:

- **`.then()`**: Used to handle the **successful completion** (resolved state) of a promise.
- **`.catch()`**: Used to handle any **errors** or **rejections** that occur during the operation.

### **Example: Handling Fetch API's Promise**

The **`fetch()`** API is used to make network requests and returns a **Promise**. Here's an example of how to handle it using `.then()` and `.catch()`:

#### Example: Fetching Data from an API

```javascript
// Making a GET request using fetch()
fetch("https://jsonplaceholder.typicode.com/posts") // URL of the API
  .then((response) => {
    if (!response.ok) {
      // If the response is not successful (status code 200-299)
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the JSON from the response body
  })
  .then((data) => {
    console.log("Fetched data:", data); // Handle the data from the response
  })
  .catch((error) => {
    console.error("There was an error with the fetch operation:", error); // Handle errors
  });
```

### **Explanation of the Code**

1. **`fetch()`**: The `fetch()` function initiates a network request to the provided URL (`https://jsonplaceholder.typicode.com/posts`).

   - It returns a **Promise** that will either resolve (with the response) or reject (if an error occurs during the request).

2. **`.then(response => response.json())`**:

   - Once the network request completes, the first `.then()` block checks if the response is successful (status code 200-299). If it's successful, it converts the response body into **JSON format** using `response.json()`.
   - The `.json()` method also returns a **Promise**, which resolves to the parsed data.

3. **`.then(data => {...})`**:

   - This second `.then()` block handles the data once it has been parsed from the JSON response. Here, we log the fetched data to the console.

4. **`.catch(error => {...})`**:
   - If any error occurs during the request (e.g., network failure, non-2xx response, or an issue with JSON parsing), the `.catch()` block will be triggered, and we handle the error (e.g., logging it to the console).

### **How Promises Help with Asynchronous Operations**

- Promises make it easier to **handle asynchronous operations** in JavaScript.
- They allow for **cleaner, more readable code** compared to traditional callback functions (which can lead to "callback hell").
- Promises provide a way to **chain multiple asynchronous operations** using `.then()` to handle results, and `.catch()` to handle errors.

### Summary

Promises simplify handling asynchronous code by allowing you to handle success and failure separately. In the case of a network request with `fetch()`, the **Promise** returned is resolved when the data is successfully fetched and parsed, or rejected when there’s an error (e.g., no network or an invalid response). Using `.then()` and `.catch()` provides a clear way to deal with these two outcomes.

## 5. **How do you handle JSON responses in **fetch()**?**

### Write an example of making a **GET** request using **`fetch()`**, parsing the JSON response, and logging the data to the console.

Here's an example of making a **GET** request using **`fetch()`**, parsing the JSON response, and logging the data to the console:

```javascript
// Making a GET request using fetch
fetch("https://jsonplaceholder.typicode.com/posts") // API URL
  .then((response) => {
    // Check if the response is successful (status 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the JSON from the response body
  })
  .then((data) => {
    // Log the parsed data to the console
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    // Handle any errors (network issues, invalid response, etc.)
    console.error("There was an error with the fetch operation:", error);
  });
```

### Explanation:

1. **`fetch()`**: Sends a GET request to the specified URL (`https://jsonplaceholder.typicode.com/posts`).
2. **`.then(response => response.json())`**:
   - Checks if the response is successful using `response.ok`.
   - If the response is valid, it parses the response body as JSON using `response.json()`.
3. **`.then(data => {...})`**: Logs the parsed data (JSON) to the console.
4. **`.catch(error => {...})`**: Handles any errors, such as network failure or invalid response.

### Output:

The `console.log()` will output the fetched data from the API in the console:

```json
Fetched data: [
  { "userId": 1, "id": 1, "title": "Title 1", "body": "Content of post 1" },
  { "userId": 1, "id": 2, "title": "Title 2", "body": "Content of post 2" },
  // More posts...
]
```

## **Intermediate Questions**

## 6. **What are the differences between **fetch()** and **XMLHttpRequest**?**

### Compare the usage of **fetch()** and **XMLHttpRequest** (XHR) for making network requests, highlighting the advantages of **fetch()**.

### **Comparison of `fetch()` and `XMLHttpRequest` (XHR)**

Both **`fetch()`** and **`XMLHttpRequest` (XHR)** are used to make network requests in JavaScript, but `fetch()` is more modern and comes with several advantages. Let's compare them:

### **1. Simplicity and Syntax**

- **`fetch()`**:

  - Returns a **Promise**, making it simpler to work with asynchronous code (using `.then()`, `.catch()`, or async/await).
  - More readable and concise syntax, reducing the complexity of the code.

  **Example using `fetch()`**:

  ```javascript
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
  ```

- **`XMLHttpRequest`**:

  - Uses **callbacks** for handling responses, which can lead to more complex code (especially with nested callbacks).
  - Requires more code to handle the request and the response.

  **Example using `XMLHttpRequest`**:

  ```javascript
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
  ```

### **2. Promise-based vs Callback-based**

- **`fetch()`**:

  - **Promise-based**: Makes it easier to chain operations and handle success/failure with `.then()` and `.catch()`. This provides a more readable and maintainable way to handle asynchronous code.
  - **Supports async/await**: You can use async/await syntax, which makes the code even cleaner and more synchronous-looking.

  **Async/Await with `fetch()`**:

  ```javascript
  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  fetchData();
  ```

- **`XMLHttpRequest`**:
  - **Callback-based**: Uses event-driven callbacks for different stages of the request (e.g., `onreadystatechange`), which can result in callback hell if you need to handle multiple requests or steps.
  - No support for async/await.

### **3. Handling JSON Responses**

- **`fetch()`**:

  - The `.json()` method is built-in to parse the response body as JSON, making it much easier to handle JSON data.
  - It works directly with promises, so you can chain the response and easily handle it.

- **`XMLHttpRequest`**:
  - You must manually parse the response (e.g., `JSON.parse(xhr.responseText)`) and handle the response as a string before converting it to JSON.

### **4. Handling Errors**

- **`fetch()`**:

  - **Better error handling**: `fetch()` does not automatically reject on HTTP errors (like 404 or 500). You have to explicitly check `response.ok` or `response.status` to handle errors.
  - It catches network-level errors (e.g., no internet connection) in the `.catch()` block.

- **`XMLHttpRequest`**:
  - Error handling is more complex, as you have to handle `onreadystatechange` and check the `status` code manually. Network errors are generally handled by the `onerror` event handler.

### **5. CORS (Cross-Origin Resource Sharing)**

- **`fetch()`**:

  - Supports **CORS** by default, which makes it easier to handle requests across different domains (though you still need to ensure that the server allows it).
  - Supports `mode: 'cors'`, `mode: 'no-cors'`, etc., for handling CORS policy.

- **`XMLHttpRequest`**:
  - **CORS** support exists but is more complicated to set up and manage.
  - Requires additional handling for preflight requests and complex headers.

### **6. Streaming**

- **`fetch()`**:

  - Supports **streaming responses**, which allows you to process large responses incrementally (e.g., for downloading files).
  - `response.body` is a readable stream, so it can be handled progressively as the data arrives.

- **`XMLHttpRequest`**:
  - Does not support streaming out-of-the-box, making it less suitable for handling large or progressive data like files or video streams.

### **7. Support for Other HTTP Methods**

- **`fetch()`**:

  - Works with all HTTP methods (`GET`, `POST`, `PUT`, `DELETE`, etc.) by passing them as options in the request.

  **Example with `POST`**:

  ```javascript
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "New Post", body: "Content of the post" }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
  ```

- **`XMLHttpRequest`**:
  - Also supports all HTTP methods, but requires more configuration (e.g., `xhr.open()` and manually setting request headers).

### **8. Response Types**

- **`fetch()`**:
  - Supports multiple response types like `text()`, `json()`, `blob()`, and `formData()` by chaining methods after the response object.
- **`XMLHttpRequest`**:
  - Requires manually setting the response type (`xhr.responseType = 'json'`) and then working with `xhr.response`.

---

### **Summary: Advantages of `fetch()` over `XMLHttpRequest`**

| Feature               | **`fetch()`**                                  | **`XMLHttpRequest` (XHR)**                                      |
| --------------------- | ---------------------------------------------- | --------------------------------------------------------------- |
| **Syntax**            | Cleaner, promise-based, async/await support    | Callback-based, more verbose                                    |
| **Error Handling**    | Simplified with `.catch()` and `response.ok`   | Requires manual error checks                                    |
| **Response Parsing**  | `.json()`, `.text()`, etc., directly available | Must manually parse JSON (e.g., `JSON.parse(xhr.responseText)`) |
| **Network Errors**    | Handles network errors in `.catch()`           | Requires `onerror` callback                                     |
| **Streaming Support** | Supports streaming responses                   | No native support for streaming                                 |
| **CORS**              | Built-in support for CORS                      | CORS handling requires more setup                               |
| **Code Readability**  | More readable and maintainable                 | More complex, especially with callbacks                         |
| **Promise Support**   | Promise-based, supports async/await            | No native promise support                                       |

### **Conclusion**

`fetch()` is the modern, preferred choice for making network requests due to its simplicity, support for promises, better error handling, and streaming capabilities. It makes asynchronous code much easier to write and read compared to `XMLHttpRequest`, which is older, callback-based, and more cumbersome to work with.

## 7. **How do you handle HTTP request headers in **fetch()**?**

### Write an example where you make a **POST** request with custom headers, such as **Content-Type** and **Authorization**.

Here's an example of making a **POST** request with **custom headers** (`Content-Type` and `Authorization`) using the **`fetch()`** API:

### Example: Making a POST Request with Custom Headers

```javascript
// The data we want to send in the POST request
const postData = {
  title: "New Post",
  body: "This is the body of the new post.",
  userId: 1,
};

// The endpoint where we are sending the POST request
const url = "https://jsonplaceholder.typicode.com/posts";

// Making the POST request using fetch
fetch(url, {
  method: "POST", // Specify the HTTP method (POST)
  headers: {
    "Content-Type": "application/json", // Specify the content type as JSON
    Authorization: "Bearer yourAccessTokenHere", // Authorization header for secure API access
  },
  body: JSON.stringify(postData), // Convert the JavaScript object to JSON format
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response body as JSON
  })
  .then((data) => {
    console.log("Success:", data); // Handle the data received from the server
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors that occur
  });
```

### **Explanation:**

1. **POST Request (`method: 'POST'`)**:

   - The method is set to `POST` because we are sending data to the server.

2. **Custom Headers (`headers`)**:

   - **`Content-Type: application/json`**: This tells the server that the data being sent is in JSON format.
   - **`Authorization: Bearer <token>`**: This is a typical authorization header used for sending a bearer token (e.g., an API token) for authentication or authorization purposes. Replace `'yourAccessTokenHere'` with an actual token for real API calls.

3. **Request Body (`body`)**:

   - **`body: JSON.stringify(postData)`**: The JavaScript object `postData` is converted into a JSON string before being sent in the request body.

4. **Response Handling**:

   - The response is checked to see if it is successful (`response.ok`), and the response body is parsed as JSON.
   - The resulting data is logged to the console.

5. **Error Handling**:
   - If any error occurs (network issue, invalid response, etc.), it's caught in the `.catch()` block, and an error message is logged.

### **Output:**

The success message will be logged with the response data (including the new post's details):

```json
Success: {
  "title": "New Post",
  "body": "This is the body of the new post.",
  "userId": 1,
  "id": 101
}
```

### **Key Points:**

- The **`Content-Type`** header is required to tell the server how to interpret the data in the request body (in this case, as JSON).
- The **`Authorization`** header is used to pass a token or credentials for secure access to the API.
- Always remember to replace `yourAccessTokenHere` with a valid token when using real APIs that require authentication.

## 8. **What is CORS (Cross-Origin Resource Sharing), and how does it affect network requests?**

### Explain how CORS works and what happens when a browser blocks a request due to CORS. How can you handle CORS issues in a JavaScript application?

### **What is CORS (Cross-Origin Resource Sharing)?**

**CORS (Cross-Origin Resource Sharing)** is a security feature implemented by browsers that prevents malicious websites from making requests to domains that are different from the origin of the requesting website. This security mechanism is in place to prevent cross-site scripting (XSS) attacks and other malicious actions.

In web development, an **origin** consists of the combination of the **protocol**, **domain**, and **port**. For example:

- `https://example.com:443` is a different origin from `https://api.example.com:443`.

By default, browsers block requests made from one origin (e.g., your website) to another origin (e.g., an external API) unless the server allows it. This is where **CORS** comes into play.

### **How Does CORS Work?**

When a web page tries to make a request to a server on a different origin (cross-origin request), the browser sends an **HTTP request** with an `Origin` header indicating the origin of the request. The server must respond with specific CORS headers to indicate whether the request is allowed.

#### Key CORS Headers:

1. **`Access-Control-Allow-Origin`**: This header specifies which origins are allowed to access the resource. For example:

   - `Access-Control-Allow-Origin: *` (Allows any origin to access the resource).
   - `Access-Control-Allow-Origin: https://example.com` (Only allows the `https://example.com` origin).

2. **`Access-Control-Allow-Methods`**: Specifies which HTTP methods (GET, POST, PUT, DELETE) are allowed for cross-origin requests.

3. **`Access-Control-Allow-Headers`**: Lists which headers can be used when making the actual request.

4. **`Access-Control-Allow-Credentials`**: Specifies whether or not the response to the request can expose credentials (cookies, HTTP authentication) to the frontend.

5. **`Access-Control-Expose-Headers`**: Allows the server to expose certain headers to the client-side JavaScript.

#### Preflight Request:

For **non-simple requests** (e.g., methods other than GET/POST or custom headers), the browser sends an **OPTIONS request** (preflight request) to the server to ask if it is safe to send the actual request. The server must respond to this preflight request with the appropriate CORS headers. If the server does not allow the cross-origin request, the browser will block the request.

### **What Happens When a Browser Blocks a Request Due to CORS?**

When a browser blocks a request due to CORS, it does not send the request to the server, and it does not allow the client-side application (JavaScript) to access the response.

If CORS is violated, the following occurs:

1. The browser sends the request to the server.
2. The server does not include the appropriate CORS headers in its response.
3. The browser detects this missing or incorrect CORS header and blocks access to the response, logging an error to the console.

**Example of CORS error in the browser console**:

```
Access to fetch at 'https://example.com/api' from origin 'https://your-website.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

### **How to Handle CORS Issues in a JavaScript Application?**

CORS issues need to be resolved either on the server side (by allowing CORS) or on the client side using workarounds. Below are some common ways to handle CORS issues:

#### 1. **Server-Side Fix (Preferred)**:

The best way to resolve CORS issues is to configure the server to allow cross-origin requests from your web application. You can set the appropriate **CORS headers** in the server's responses.

For example, on the server (using Node.js/Express):

```javascript
const express = require("express");
const app = express();

// Allow all origins (in production, specify your domain)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res) => {
  res.json({ message: "Data fetched successfully" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

In this example, the server explicitly allows cross-origin requests from any domain (`'*'`).

#### 2. **Using a Proxy Server (Workaround for Client-Side)**:

If you cannot change the server’s CORS settings (e.g., you are calling a third-party API), you can set up a proxy server that forwards the requests to the API. The proxy server will add the appropriate CORS headers in its response, bypassing the CORS restriction.

For example, you can use a service like [CORS Anywhere](https://cors-anywhere.herokuapp.com/) to proxy your requests:

```javascript
fetch("https://cors-anywhere.herokuapp.com/https://example.com/api", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

_Note: Free services like CORS Anywhere may have rate limits, and it is recommended to use your own proxy server in production for better control and security._

#### 3. **Using JSONP (For GET Requests Only)**:

JSONP (JSON with Padding) is a technique used to overcome CORS limitations by exploiting the `<script>` tag's ability to load resources from a different origin. However, JSONP only supports GET requests and is not recommended for modern web development because it introduces security risks.

#### 4. **Cross-Origin Resource Sharing (CORS) Browser Extensions**:

For development purposes, browser extensions like **CORS Everywhere** or **Allow CORS** can be used to temporarily bypass CORS restrictions. This is not recommended for production, as it only affects the developer’s environment and is not a long-term solution.

#### 5. **Handling CORS Errors Gracefully**:

In the case where CORS is blocked and you cannot control the server or use a proxy, you can handle errors in your JavaScript code to inform users or fall back to an alternative approach.

```javascript
fetch("https://example.com/api")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === "TypeError" && error.message.includes("CORS")) {
      console.error(
        "CORS issue detected. Please check the API server configuration."
      );
    } else {
      console.error("An error occurred:", error);
    }
  });
```

### **Conclusion:**

- **CORS** is a security feature implemented by browsers to prevent unauthorized cross-origin requests.
- CORS errors occur when the server does not allow cross-origin requests by not sending the appropriate CORS headers.
- The **best way to handle CORS issues** is by configuring the server to allow requests from specific origins.
- If you cannot control the server, workarounds like using a **proxy server** or **JSONP** can be considered for certain use cases.
- Always ensure you handle CORS errors properly in your JavaScript code to provide a smooth user experience.

## 9. **How do you send data in the body of a **POST** request using **fetch()**?**

### Write an example of sending JSON data in the body of a **POST** request using **`fetch()`**.

Here’s an example of how to send JSON data in the body of a **POST** request using **`fetch()`**:

### Example: Sending JSON Data in a POST Request

```javascript
// Data to be sent in the request body
const jsonData = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};

// The endpoint to which the POST request will be sent
const url = "https://example.com/api/user";

// Sending the POST request using fetch
fetch(url, {
  method: "POST", // HTTP method set to POST
  headers: {
    "Content-Type": "application/json", // Specify the content type as JSON
  },
  body: JSON.stringify(jsonData), // Convert the JavaScript object to JSON string
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    console.log("Success:", data); // Handle the response data
  })
  .catch((error) => {
    console.error("Error:", error); // Handle errors
  });
```

### **Explanation:**

1. **Data (jsonData)**: We define a JavaScript object `jsonData` that contains the data we want to send in the request body (e.g., name, age, email).

2. **fetch()**:

   - The **`method`** is set to `POST`, indicating we are sending data to the server.
   - The **`headers`** include `Content-Type: application/json`, which tells the server that the body of the request is in JSON format.
   - The **`body`** is the actual data to be sent. We use `JSON.stringify(jsonData)` to convert the JavaScript object into a JSON string.

3. **Response Handling**:
   - We use `.then()` to handle the response. If the response is successful (`response.ok`), we parse the response as JSON using `response.json()`.
   - The parsed JSON data is logged to the console.
   - Any errors (network issues, invalid JSON, etc.) are caught in the `.catch()` block and logged.

### **Expected Output (Example)**:

If the server responds successfully, you might see a response like this in the console:

```json
{
  "id": 123,
  "name": "John Doe",
  "age": 30,
  "email": "johndoe@example.com"
}
```

### **Key Points**:

- **`Content-Type: application/json`**: This header is necessary to inform the server that the request body contains JSON data.
- **`JSON.stringify()`**: Converts the JavaScript object into a JSON string so it can be sent in the body of the request.

## 10. **How do you handle errors in network requests with **fetch()**?**

### Write an example of how to catch and handle network errors such as connection issues or a non-2xx status code when using **`fetch()`**.

Here’s an example of how to catch and handle network errors, including connection issues or non-2xx HTTP status codes, when using **`fetch()`**:

### Example: Handling Network Errors and Non-2xx Status Codes with `fetch()`

```javascript
// The endpoint URL for making the request
const url = "https://example.com/api/data";

// Sending a GET request using fetch
fetch(url)
  .then((response) => {
    if (!response.ok) {
      // Handle non-2xx status codes
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the JSON data if the status is OK
  })
  .then((data) => {
    console.log("Data received:", data); // Handle the successful response
  })
  .catch((error) => {
    // Handle network errors or other unexpected errors
    if (error.name === "TypeError") {
      // This typically occurs with network errors (e.g., no internet connection)
      console.error("Network error or request failed:", error.message);
    } else {
      // This handles other errors like non-2xx status codes
      console.error("Error:", error.message);
    }
  });
```

### **Explanation:**

1. **`fetch(url)`**:
   - Makes a network request to the provided URL.
2. **`response.ok`**:

   - Checks if the HTTP status code is in the 2xx range (e.g., 200, 201). If not, it throws an error.
   - This is important because a successful fetch does not necessarily mean the request was successful—non-2xx status codes (like 404 or 500) are still considered "successful" fetch requests, but you may want to handle them differently.
   - If the response is not OK, it throws an error with the status code.

3. **`.then(response => response.json())`**:

   - If the response status is OK, it parses the response body as JSON.

4. **`.catch(error)`**:

   - Catches both **network errors** (e.g., no internet connection) and **application errors** (e.g., non-2xx status codes).
   - **Network errors** generally throw a `TypeError`, such as when the browser cannot reach the server (e.g., no internet connection, DNS lookup failed).
   - **Non-2xx status codes** (like 404, 500, etc.) are handled by the `.then()` block (via `response.ok`), but if the status is not OK, the error is thrown and caught in the `.catch()` block.

5. **Error Handling**:
   - **Network errors** (like connection issues or DNS resolution failures) throw a `TypeError` and are logged with the message `"Network error or request failed"`.
   - **HTTP errors** (like 404 or 500 status codes) are thrown manually by checking `response.ok` and logged with the specific status code message.

### **Example Output**:

#### **1. Successful Response (Status 200)**:

```json
{
  "id": 1,
  "name": "Item 1",
  "description": "This is the item description"
}
```

#### **2. Non-2xx Status Code (e.g., 404 - Not Found)**:

```text
Error: HTTP error! Status: 404
```

#### **3. Network Error (e.g., No Internet Connection)**:

```text
Network error or request failed: Failed to fetch
```

### **Key Points**:

- **Network errors** (e.g., DNS lookup failure, no connection) will trigger a `TypeError` and should be handled separately in the `.catch()` block.
- **Non-2xx HTTP status codes** (e.g., 404, 500) are handled by checking the `response.ok` property, and you can throw custom errors for them.
- Always ensure proper error handling for network and status code issues to prevent unexpected application crashes.

---

## **Advanced Questions**

## 11. **How do you make a **PUT** or **DELETE** request using **fetch()**?**

### Write examples of both a **PUT** and a **DELETE** request using the **`fetch()`** API. Discuss when and why you would use these methods in an API.

### **PUT Request Example**:

A **PUT** request is used to update an existing resource on the server. It typically replaces the current resource with the new data provided in the request body.

#### Example of a PUT Request:

```javascript
// Data to be updated
const updatedData = {
  name: "John Doe",
  age: 31,
};

// The endpoint where the resource will be updated
const url = "https://example.com/api/user/123"; // Assume user ID is 123

// Sending a PUT request using fetch
fetch(url, {
  method: "PUT", // Set the method to PUT for updating a resource
  headers: {
    "Content-Type": "application/json", // Specify that the body is JSON
  },
  body: JSON.stringify(updatedData), // Convert the JavaScript object to a JSON string
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to update the user. Status: ${response.status}`);
    }
    return response.json(); // Parse the response body as JSON
  })
  .then((data) => {
    console.log("Updated data:", data); // Handle the updated data from the server
  })
  .catch((error) => {
    console.error("Error:", error); // Handle errors, if any
  });
```

### **DELETE Request Example**:

A **DELETE** request is used to delete a resource from the server. It is typically used when you want to remove a specific item or resource.

#### Example of a DELETE Request:

```javascript
// The endpoint where the resource will be deleted
const url = "https://example.com/api/user/123"; // Assume user ID is 123

// Sending a DELETE request using fetch
fetch(url, {
  method: "DELETE", // Set the method to DELETE for removing a resource
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to delete the user. Status: ${response.status}`);
    }
    return response.json(); // Parse the response (usually a success message)
  })
  .then((data) => {
    console.log("Delete confirmation:", data); // Handle the response from the server
  })
  .catch((error) => {
    console.error("Error:", error); // Handle errors, if any
  });
```

---

### **When and Why You Would Use PUT and DELETE Methods**:

#### **PUT Method**:

- **Purpose**: The **PUT** method is used when you want to **update** an existing resource with new data.
- **Usage**: You would use **PUT** when you need to completely replace an existing resource, such as updating a user's profile information, replacing a document, or changing the details of an item in an inventory.
- **Example**: You have a user profile and you want to update their information, such as changing their name or age. Instead of adding new data, you overwrite the existing data entirely.
- **Idempotency**: **PUT** is idempotent, meaning that making the same PUT request multiple times will result in the same outcome. The resource will be the same regardless of how many times you send the PUT request.

#### **DELETE Method**:

- **Purpose**: The **DELETE** method is used to **remove** a resource from the server.
- **Usage**: You would use **DELETE** when you want to remove something, such as deleting a user, a blog post, or a file.
- **Example**: You have a user account, and you want to delete it. A DELETE request would remove the user from the system entirely.
- **Idempotency**: **DELETE** is also idempotent in practice. Once the resource is deleted, sending a DELETE request again to the same resource will have no further effect (it will return a status like 404 - Not Found).

### **Summary**:

- **PUT** is for **updating** or **replacing** a resource with new data, and it is used when the client wants to send updated information to the server.
- **DELETE** is for **removing** a resource, such as deleting an item, user, or any other entity from the server.

## 12. **What is the role of **async/await** in handling network requests?**

### Rewrite a **GET** request example using **`fetch()`** and **async/await** instead of **`.then()`**.

Here’s how you can rewrite a **GET** request using **`fetch()`** with **async/await** instead of using `.then()`:

### Example: GET Request Using **async/await**:

```javascript
// The endpoint URL for making the GET request
const url = "https://jsonplaceholder.typicode.com/posts/1"; // Example API

// Async function to handle the GET request
async function fetchData() {
  try {
    const response = await fetch(url); // Wait for the fetch request to complete
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`); // Handle non-2xx status codes
    }
    const data = await response.json(); // Parse the JSON data from the response
    console.log("Data received:", data); // Handle the fetched data
  } catch (error) {
    console.error("Error:", error); // Catch and handle errors
  }
}

// Call the function to fetch the data
fetchData();
```

### **Explanation:**

1. **`async` Function**: The `fetchData` function is defined as `async`, which allows you to use the `await` keyword inside it. This makes the asynchronous code behave more like synchronous code, making it easier to read and manage.
2. **`await fetch(url)`**: We use `await` to wait for the `fetch` request to complete. The execution pauses here until the promise resolves or rejects, making it easier to handle.

3. **Check `response.ok`**: After getting the response, we check if it’s OK (status code in the 2xx range). If it's not, we throw an error with the status code.

4. **`await response.json()`**: If the response is OK, we use `await` again to parse the response as JSON. This also returns a promise, so we wait until it's resolved.

5. **Error Handling**: Errors (either from the network or from invalid status codes) are caught in the `catch` block and logged to the console.

### **Advantages of async/await**:

- **Readability**: The code looks cleaner and more sequential, making it easier to understand and maintain.
- **Error Handling**: With `try/catch`, error handling becomes straightforward and similar to synchronous code.

## 13. **How do you handle multiple network requests concurrently in JavaScript?**

### Explain how to make multiple network requests at the same time using **`Promise.all()`** or **`Promise.allSettled()`**. Provide an example where you make multiple **GET** requests and process the results.

### **Making Multiple Network Requests Using `Promise.all()` or `Promise.allSettled()`**

When making multiple network requests simultaneously, you can use **`Promise.all()`** or **`Promise.allSettled()`**. These methods allow you to handle multiple promises at once and wait for all of them to resolve or reject.

#### **1. Using `Promise.all()`**:

`Promise.all()` accepts an array of promises and returns a single promise that resolves when all of the input promises resolve. If any promise rejects, `Promise.all()` immediately rejects with the reason of the first rejected promise.

##### **Example with `Promise.all()`**:

```javascript
// URLs for making multiple GET requests
const url1 = "https://jsonplaceholder.typicode.com/posts/1";
const url2 = "https://jsonplaceholder.typicode.com/posts/2";
const url3 = "https://jsonplaceholder.typicode.com/posts/3";

// Function to fetch data from a URL
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
}

// Making multiple GET requests using Promise.all
async function fetchMultipleData() {
  try {
    // Use Promise.all to fetch all URLs concurrently
    const [data1, data2, data3] = await Promise.all([
      fetchData(url1),
      fetchData(url2),
      fetchData(url3),
    ]);
    console.log("Data from first request:", data1);
    console.log("Data from second request:", data2);
    console.log("Data from third request:", data3);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch data from multiple sources
fetchMultipleData();
```

### **Explanation of `Promise.all()`**:

1. **`Promise.all()`** takes an array of promises and resolves when all promises are resolved.
2. If any promise rejects, the entire `Promise.all()` will immediately reject.
3. **`await Promise.all([..])`** waits for all the promises to resolve and returns an array of results. Each result corresponds to the promise at the same position in the input array.
4. If any request fails (e.g., non-2xx status code or network error), it will be caught in the `catch` block.

#### **2. Using `Promise.allSettled()`**:

`Promise.allSettled()` returns a promise that resolves after all input promises have settled, whether they were resolved or rejected. It gives an array of objects describing the outcome of each promise.

##### **Example with `Promise.allSettled()`**:

```javascript
// URLs for making multiple GET requests
const url1 = "https://jsonplaceholder.typicode.com/posts/1";
const url2 = "https://jsonplaceholder.typicode.com/posts/2";
const url3 = "https://jsonplaceholder.typicode.com/posts/invalid"; // Invalid URL

// Function to fetch data from a URL
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
}

// Making multiple GET requests using Promise.allSettled
async function fetchMultipleData() {
  const results = await Promise.allSettled([
    fetchData(url1),
    fetchData(url2),
    fetchData(url3),
  ]);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Data from request ${index + 1}:`, result.value);
    } else {
      console.error(`Error in request ${index + 1}:`, result.reason);
    }
  });
}

// Call the function to fetch data from multiple sources
fetchMultipleData();
```

### **Explanation of `Promise.allSettled()`**:

1. **`Promise.allSettled()`** is used when you want to wait for all promises to settle, regardless of whether they are resolved or rejected.
2. It returns an array of objects, where each object contains the status (`fulfilled` or `rejected`) and either the value or reason of the promise.
3. Even if some requests fail (e.g., `url3` in this case is invalid), the other requests will still be processed, and their results will be available.

### **Key Differences**:

- **`Promise.all()`**:
  - Resolves when all promises resolve.
  - Rejects immediately if any promise rejects.
  - Best when you need all requests to succeed.
- **`Promise.allSettled()`**:
  - Resolves when all promises settle (either resolved or rejected).
  - Does not short-circuit on the first rejection.
  - Best when you need the results of all requests, even if some of them fail.

### **When to Use Each Method**:

- Use **`Promise.all()`** when you need to make concurrent requests and all of them need to succeed. For example, when you're fetching multiple related resources where failure of one might invalidate the whole process.
- Use **`Promise.allSettled()`** when you want to make concurrent requests but you want to handle individual successes and failures separately. This is useful when making requests where each response is independent and failure of one doesn't stop the others from executing.

## 14. **How can you implement **retry logic** in case a network request fails?**

### Write an example of a network request that retries a failed request using a recursive function or a loop. Explain the benefits of implementing retry logic.

### **Example of a Network Request with Retry Logic**

You can implement retry logic using either recursion or a loop. In this example, I'll use a loop to retry the request a certain number of times before giving up. If the request fails, it will be retried after a delay.

#### **Retry Logic Using a Loop:**

```javascript
// URL for the network request
const url = "https://jsonplaceholder.typicode.com/posts/1";

// Function to fetch data with retry logic
async function fetchDataWithRetry(url, retries = 3, delay = 1000) {
  let attempts = 0;

  while (attempts < retries) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Data fetched successfully:", data);
      return data; // Return the successful result
    } catch (error) {
      attempts++;
      console.log(`Attempt ${attempts} failed: ${error.message}`);
      if (attempts >= retries) {
        console.error("Max retries reached. Could not fetch data.");
        throw error; // Rethrow error after max retries
      }
      console.log(`Retrying in ${delay}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delay)); // Wait for a delay before retrying
    }
  }
}

// Call the function to fetch data with retry logic
fetchDataWithRetry(url)
  .then((data) => console.log("Final data:", data))
  .catch((error) => console.error("Final error:", error));
```

### **Explanation:**

1. **Function Parameters**:

   - `url`: The URL to fetch data from.
   - `retries`: The number of retries before giving up (defaults to 3).
   - `delay`: The delay between retries in milliseconds (defaults to 1000ms).

2. **Looping for Retries**:

   - The function attempts to fetch the data, and if it fails (e.g., network issue or non-2xx HTTP status), the `catch` block is triggered.
   - After each failure, it increments the `attempts` counter and checks if the retry count has been reached.
   - If the retry count has not been reached, it waits for the specified delay using `setTimeout` wrapped in a `Promise` and then retries the request.
   - If the request succeeds, the data is logged and returned. If all attempts fail, an error is logged and thrown.

3. **Error Handling**:
   - If the request fails after all retries, the function throws the error and the promise is rejected.
   - If the request is successful, the data is logged and the function exits.

---

### **Benefits of Implementing Retry Logic:**

1. **Handling Temporary Network Issues**:
   - Network problems such as timeouts, server overloads, or intermittent connectivity issues can cause requests to fail temporarily. Retry logic allows the system to recover from these temporary failures without immediately giving up.
2. **Improved User Experience**:

   - By retrying failed requests, you can avoid showing users an error message for minor or transient issues. This ensures that the system is more robust and less prone to displaying failures.

3. **Graceful Degradation**:

   - Instead of failing the entire operation due to a single network failure, retrying gives the system a chance to recover from issues like a slow server or high network latency. This can be particularly useful in scenarios where the system is trying to reach external APIs or services that might occasionally be down.

4. **Optimizing Reliability**:
   - In situations where the network is unstable (e.g., mobile apps), retrying can help ensure that the application remains functional without constantly bombarding the user with failure notifications.

---

### **Conclusion:**

Retry logic is a simple yet powerful way to make network requests more resilient, particularly in environments where network failures are not uncommon. It helps to ensure that temporary issues do not prevent the user from getting the expected results, thus enhancing the overall reliability of the application.

## 15. **How do you handle timeouts in network requests?**

### Write an example of setting a timeout for a **fetch()** request and handling cases where the request exceeds the timeout duration.

Here’s an example of setting a timeout for a `fetch()` request and handling cases where the timeout duration is exceeded:

```javascript
function fetchWithTimeout(url, options = {}, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(`Request timed out after ${timeout}ms`));
    }, timeout);

    fetch(url, options)
      .then((response) => {
        clearTimeout(timeoutId); // Clear timeout if fetch succeeds
        resolve(response); // Resolve the fetch response
      })
      .catch((error) => {
        clearTimeout(timeoutId); // Clear timeout if fetch fails
        reject(error); // Reject with the fetch error
      });
  });
}

// Example usage:
(async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetchWithTimeout(url, {}, 3000); // 3-second timeout
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data fetched successfully:", data);
  } catch (error) {
    console.error("Error during fetch:", error.message);
  }
})();
```

---

### How It Works:

1. **Timeout Logic**:

   - A `setTimeout` is used to reject the promise if the request takes longer than the specified duration (`timeout`).

2. **Clearing Timeout**:

   - If the `fetch()` request completes (success or failure), the `clearTimeout()` function is called to prevent the timeout from firing unnecessarily.

3. **Promise Wrapping**:

   - The `fetch()` call is wrapped in a `Promise` to manage both the fetch and timeout behaviors.
   - Resolves with the `fetch()` response if successful.
   - Rejects with an error if the timeout is exceeded or the fetch fails.

4. **Error Handling**:
   - Includes both network errors (handled by `fetch`) and timeout errors (handled by `setTimeout`).

---

### Example Output:

1. If the request completes within the timeout:

   ```
   Data fetched successfully: [ { userId: 1, id: 1, title: "..." }, ... ]
   ```

2. If the request exceeds the timeout:
   ```
   Error during fetch: Request timed out after 3000ms
   ```

---

### Key Considerations:

1. **Timeout Behavior**:

   - This approach doesn't abort the actual `fetch()` request; it only rejects the promise. The request will continue running in the background.
   - To cancel the request entirely, you can use the **AbortController** API (covered below).

2. **Using AbortController**:
   For better control over the request, including cancellation:

   ```javascript
   function fetchWithAbort(url, options = {}, timeout = 5000) {
     const controller = new AbortController();
     const signal = controller.signal;

     const timeoutId = setTimeout(() => controller.abort(), timeout);

     return fetch(url, { ...options, signal })
       .then((response) => {
         clearTimeout(timeoutId);
         return response;
       })
       .catch((error) => {
         clearTimeout(timeoutId);
         if (signal.aborted) {
           throw new Error(`Request timed out after ${timeout}ms`);
         }
         throw error;
       });
   }
   ```

## 16. **What is **debouncing** in network requests, and how can it help with performance?**

### Explain **debouncing** and provide an example where it is used to limit the number of API calls during user input, such as in a search bar.

### What is Debouncing?

**Debouncing** is a programming technique used to limit the frequency of executing a function. It ensures that the function is only called after a specified time has elapsed since the last event triggering it. This is especially useful for scenarios like user input, window resizing, or button clicks, where rapid, repeated events can cause performance issues or unnecessary computations.

---

### Use Case: Limiting API Calls in a Search Bar

In a search bar, every keystroke can trigger an API call to fetch suggestions or search results. Debouncing ensures that the API call is only made after the user has stopped typing for a short duration.

---

### Example: Debounced Search Function

Here’s an implementation of a debounce function and its usage in a search bar:

#### Debounce Function

```javascript
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // Clear the previous timer
    timer = setTimeout(() => {
      fn(...args); // Execute the function after the delay
    }, delay);
  };
}
```

#### Example Usage: Search Bar with Debouncing

```javascript
async function fetchSuggestions(query) {
  console.log(`Fetching suggestions for: "${query}"`);
  // Simulate API call with fetch or a timeout
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Results for "${query}"`), 1000)
  );
}

const handleSearch = debounce(async (query) => {
  if (!query.trim()) return; // Ignore empty input
  const results = await fetchSuggestions(query);
  console.log(results);
}, 500); // Debounce with a 500ms delay

// Simulating a search bar
const searchInput = document.createElement("input");
searchInput.placeholder = "Type to search...";
searchInput.addEventListener("input", (event) =>
  handleSearch(event.target.value)
);
document.body.appendChild(searchInput);
```

---

### How It Works:

1. **Debounce Logic**:

   - The `debounce` function wraps the original function (`fn`) and manages a timer.
   - If the wrapped function is called again before the delay has elapsed, the timer is reset.

2. **API Call Throttling**:

   - The API function `fetchSuggestions` is wrapped in the debounced `handleSearch`.
   - This ensures that the API call is only triggered after the user stops typing for 500ms.

3. **Event Listener**:
   - An `input` event listener on the search bar triggers the debounced `handleSearch` function.

---

### Example Output:

1. If the user types "hel" with a pause of less than 500ms between keystrokes, no API call is made.
2. When the user pauses after typing "hello", the API call is triggered:
   ```
   Fetching suggestions for: "hello"
   Results for "hello"
   ```

---

### Benefits of Debouncing:

1. **Performance Optimization**:

   - Reduces the number of API calls or computations triggered by rapid user input.

2. **User Experience**:

   - Prevents the UI from lagging or being overwhelmed by frequent updates.

3. **Reusable Logic**:
   - The debounce function can be applied to various scenarios like form validation, button clicks, or window resizing.

---

### Alternatives to Debouncing:

- **Throttling**: Ensures the function is called at regular intervals, regardless of how many events occur in between.
- **Rate Limiting**: Restricts the number of function calls within a given time frame, similar to throttling but stricter.

## 17. **What are **pagination** and **infinite scroll** in the context of network requests?**

### Write an example where you fetch data from a paginated API and implement **infinite scroll** to load more items as the user scrolls.

Here’s an example implementation of infinite scrolling with a paginated API:

---

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Infinite Scroll Example</title>
    <style>
      #container {
        width: 300px;
        margin: auto;
        border: 1px solid #ddd;
        padding: 10px;
        max-height: 400px;
        overflow-y: auto;
      }
      .item {
        border-bottom: 1px solid #ddd;
        padding: 10px 5px;
      }
      .loading {
        text-align: center;
        padding: 10px;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <div id="itemList"></div>
      <div id="loadingMessage" class="loading">Loading...</div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

---

### JavaScript for Infinite Scroll

```javascript
const container = document.getElementById("container");
const itemList = document.getElementById("itemList");
const loadingMessage = document.getElementById("loadingMessage");

let currentPage = 1;
let isLoading = false;
const apiEndpoint = "https://jsonplaceholder.typicode.com/posts"; // Example paginated API

// Fetch paginated data
async function fetchData(page) {
  try {
    const response = await fetch(`${apiEndpoint}?_page=${page}&_limit=10`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

// Render items to the DOM
function renderItems(items) {
  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.textContent = `${item.id}: ${item.title}`;
    itemList.appendChild(itemDiv);
  });
}

// Load more items when the user scrolls near the bottom
async function loadMoreItems() {
  if (isLoading) return;

  isLoading = true;
  loadingMessage.style.display = "block";

  const items = await fetchData(currentPage);
  if (items.length > 0) {
    renderItems(items);
    currentPage++;
  } else {
    loadingMessage.textContent = "No more items to load.";
  }

  isLoading = false;
  loadingMessage.style.display = items.length > 0 ? "none" : "block";
}

// Event listener for infinite scroll
container.addEventListener("scroll", () => {
  if (
    container.scrollTop + container.clientHeight >=
    container.scrollHeight - 10
  ) {
    loadMoreItems();
  }
});

// Initial load
loadMoreItems();
```

---

### How It Works:

1. **HTML Structure**:

   - `#container` is a scrollable div where items will be loaded.
   - `#itemList` holds the list of items.
   - `#loadingMessage` indicates the loading state.

2. **Fetching Data**:

   - The `fetchData` function fetches paginated data from the API using query parameters for page (`_page`) and limit (`_limit`).

3. **Rendering Items**:

   - The `renderItems` function dynamically adds new items to the DOM.

4. **Infinite Scroll Logic**:

   - The `container`'s `scroll` event listener checks if the user has scrolled near the bottom (`scrollTop + clientHeight >= scrollHeight`).
   - If true, `loadMoreItems` is called to fetch and render the next page of items.

5. **Loading State**:

   - A `loadingMessage` indicates when more items are being fetched.
   - Prevents concurrent API calls using the `isLoading` flag.

6. **Pagination**:
   - The `currentPage` variable keeps track of the next page to load.

---

### Example Output:

1. On page load, the first 10 items are fetched and displayed.
2. As the user scrolls near the bottom, the next set of items is loaded automatically.
3. When all items are loaded, the loading message displays: "No more items to load."

---

### Benefits of This Approach:

- Efficient data fetching by loading only the necessary items.
- Smooth user experience with automatic loading.
- Easy to integrate with any paginated API.

## 18. **What are HTTP response status codes, and how do you handle them in network requests?**

### Write an example where you check the response status code in a **fetch()** request and handle specific codes like **200**, **404**, or **500**.

Here’s an example of using `fetch()` to check the response status code and handle specific scenarios like `200` (success), `404` (not found), and `500` (server error):

---

### Example Code

```javascript
async function fetchWithStatusHandling(url) {
  try {
    const response = await fetch(url);

    // Handle specific HTTP status codes
    switch (response.status) {
      case 200:
        const data = await response.json();
        console.log("Success! Data received:", data);
        break;

      case 404:
        console.error("Error 404: Resource not found.");
        break;

      case 500:
        console.error(
          "Error 500: Internal server error. Please try again later."
        );
        break;

      default:
        console.error(`Unhandled status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Network error or fetch failed:", error.message);
  }
}

// Example usage
const url = "https://jsonplaceholder.typicode.com/posts/1"; // Change the endpoint for different scenarios
fetchWithStatusHandling(url);
```

---

### Explanation:

1. **Response Status Handling**:

   - `response.status` contains the HTTP status code of the response.
   - A `switch` statement is used to handle specific codes.

2. **Success Case (`200`)**:

   - If the status is `200`, the response is converted to JSON using `response.json()` and the data is logged.

3. **Not Found (`404`)**:

   - If the status is `404`, an error message is logged to indicate the resource was not found.

4. **Internal Server Error (`500`)**:

   - If the status is `500`, a message suggests trying again later.

5. **Unhandled Status**:

   - For any other status codes, a generic error message is logged.

6. **Error Handling**:
   - If the `fetch` request itself fails (e.g., due to a network issue), the error is caught and logged.

---

### Example Outputs:

1. **Success (`200`)**:

   ```
   Success! Data received: { userId: 1, id: 1, title: "...", body: "..." }
   ```

2. **Not Found (`404`)**:

   ```
   Error 404: Resource not found.
   ```

3. **Internal Server Error (`500`)**:

   ```
   Error 500: Internal server error. Please try again later.
   ```

4. **Unhandled Status (`403`, etc.)**:

   ```
   Unhandled status code: 403
   ```

5. **Network Error**:
   ```
   Network error or fetch failed: Failed to fetch
   ```

---

### Use Cases:

- Validating responses from APIs to ensure correct behavior.
- Providing user-friendly error messages for common errors like `404` or `500`.
- Logging unhandled errors for debugging and improvement.

## 19. **How do you implement **file uploads** in a **POST** request using **fetch()**?**

### Write an example where you send a file to the server using **`fetch()`** and a **FormData** object. Discuss the steps of sending a file, including handling the **Content-Type** and progress updates.

Here’s an example of sending a file to a server using the `fetch()` API and a `FormData` object, along with a discussion of the steps:

---

### Example Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>File Upload with Fetch</title>
  </head>
  <body>
    <h1>Upload a File</h1>
    <input type="file" id="fileInput" />
    <button id="uploadButton">Upload</button>
    <div id="status"></div>

    <script>
      document
        .getElementById("uploadButton")
        .addEventListener("click", async () => {
          const fileInput = document.getElementById("fileInput");
          const statusDiv = document.getElementById("status");

          if (!fileInput.files.length) {
            statusDiv.textContent = "Please select a file to upload.";
            return;
          }

          const file = fileInput.files[0];
          const formData = new FormData();
          formData.append("file", file);

          try {
            statusDiv.textContent = "Uploading...";

            const response = await fetch("https://example.com/upload", {
              method: "POST",
              body: formData, // FormData automatically sets the correct Content-Type
            });

            if (response.ok) {
              const result = await response.json();
              statusDiv.textContent = `File uploaded successfully! File ID: ${result.id}`;
            } else {
              statusDiv.textContent = `Error: ${response.statusText} (Status: ${response.status})`;
            }
          } catch (error) {
            statusDiv.textContent = `Upload failed: ${error.message}`;
          }
        });
    </script>
  </body>
</html>
```

---

### Steps to Send a File with `fetch()`:

1. **File Selection**:

   - Use an `<input type="file" />` element to let users select a file.
   - Access the selected file using the `files` property of the input element.

2. **FormData Object**:

   - Create a `FormData` object to hold the file.
   - Use `formData.append()` to add the file with a key (e.g., `"file"`).
   - The `FormData` object automatically handles the `Content-Type` header for `multipart/form-data`.

3. **Fetch API**:

   - Use `fetch()` with the `POST` method.
   - Pass the `FormData` object as the `body` of the request.

4. **Server Handling**:

   - The server should handle the uploaded file using the same key (e.g., `"file"`).
   - For example, in Node.js, a library like `multer` can handle file uploads.

5. **Response Handling**:
   - Check the server’s response (`response.ok`) to confirm success.
   - Handle error cases (e.g., invalid file type, size limit exceeded).

---

### Handling Progress Updates

The `fetch()` API doesn’t provide a built-in way to track upload progress, but you can use the `XMLHttpRequest` API for this:

#### Example with `XMLHttpRequest` for Progress Tracking

```javascript
function uploadFileWithProgress(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/upload");

    // Track progress
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        console.log(`Upload progress: ${percentComplete.toFixed(2)}%`);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error(`Error: ${xhr.status} ${xhr.statusText}`));
      }
    };

    xhr.onerror = () => {
      reject(new Error("Upload failed."));
    };

    const formData = new FormData();
    formData.append("file", file);

    xhr.send(formData);
  });
}
```

---

### Key Considerations:

1. **Content-Type**:

   - When using `FormData`, the browser sets the `Content-Type` header automatically, including the boundary required for `multipart/form-data`.

2. **Security**:

   - Validate files on both the client and server (e.g., size, type).
   - Use HTTPS for secure transmission.

3. **Error Handling**:

   - Handle server errors (e.g., 500, 413 for large files).
   - Handle client-side issues like network failures.

4. **Large Files**:
   - For large files, consider chunked uploads or resumable uploads for better reliability.

## 20. **How do you implement **authentication** and **authorization** with network requests?**

### Explain how to send authentication tokens (e.g., **JWT**) in network requests for secured API endpoints. Provide an example where you include a token in the **Authorization** header of a **GET** request.

### Sending Authentication Tokens (e.g., JWT) in Requests

When accessing secured API endpoints, a common practice is to include an authentication token, such as a JSON Web Token (JWT), in the **`Authorization`** header. This ensures that the server can verify the client’s identity and authorize the request.

---

### Steps to Include a Token in the Request

1. **Obtain the Token**:

   - After login or authentication, the server issues a token (e.g., JWT).
   - Store the token securely (e.g., in localStorage, sessionStorage, or a secure cookie).

2. **Add the Token to the Request**:

   - Include the token in the **`Authorization`** header with the format `Bearer <token>`.

3. **Send the Request**:
   - Use `fetch()` or any other HTTP client (like Axios) to make the request with the token in the headers.

---

### Example Code

#### Server API (Secured Endpoint):

Assume there’s a secured endpoint at `https://example.com/api/user-profile` that requires a valid token.

#### JavaScript Code

```javascript
async function fetchUserProfile() {
  const token = localStorage.getItem("authToken"); // Retrieve the token from storage

  if (!token) {
    console.error("Authentication token is missing. Please log in.");
    return;
  }

  try {
    const response = await fetch("https://example.com/api/user-profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        "Content-Type": "application/json", // Optional, specifies the type of data sent/received
      },
    });

    if (response.ok) {
      const userProfile = await response.json();
      console.log("User profile fetched successfully:", userProfile);
    } else if (response.status === 401) {
      console.error("Unauthorized: Invalid or expired token.");
    } else {
      console.error(`Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Failed to fetch user profile:", error.message);
  }
}

// Example usage: Simulating token storage and making a secured request
localStorage.setItem("authToken", "your-jwt-token-here"); // Store a dummy token
fetchUserProfile(); // Fetch user profile using the stored token
```

---

### Explanation of the Code

1. **Token Retrieval**:

   - The `localStorage.getItem("authToken")` retrieves the JWT from local storage.

2. **Authorization Header**:

   - The `Authorization` header uses the format `Bearer <token>`.

3. **Error Handling**:

   - `401 Unauthorized`: Indicates that the token is invalid or expired.
   - Any other response status is handled as an error.

4. **Making the Request**:
   - The `fetch()` method sends the request with the token in the headers.

---

### Security Considerations

1. **Storage of Tokens**:

   - Use `localStorage` or `sessionStorage` for temporary storage but be cautious of XSS attacks.
   - For sensitive apps, store the token in a secure, HttpOnly cookie.

2. **Token Expiry**:

   - Handle token expiration by refreshing the token (using a refresh token) or redirecting the user to log in again.

3. **HTTPS**:

   - Always use HTTPS to prevent token interception during transmission.

4. **CORS**:
   - Ensure the server is configured to handle cross-origin requests if the client and server are hosted on different domains.

---

### Output Example

1. **Valid Token**:

   ```
   User profile fetched successfully: { id: 1, name: "John Doe", email: "john@example.com" }
   ```

2. **Invalid or Missing Token**:

   ```
   Unauthorized: Invalid or expired token.
   ```

3. **Network Error**:
   ```
   Failed to fetch user profile: Network request failed
   ```

---

## **Bonus Advanced Questions**

## 21. **What is a **service worker**, and how does it improve network request handling in web apps?**

### Explain the role of service workers in handling network requests in Progressive Web Apps (PWAs), such as caching and background synchronization.

### **Role of Service Workers in PWAs**

Service workers are a core technology of Progressive Web Apps (PWAs). They act as a middle layer between the browser and the network, enabling features like offline access, caching, background synchronization, and improved performance. Here’s how they manage network requests:

---

### **Key Roles of Service Workers**

1. **Caching for Offline Access**:

   - Service workers can cache network responses (e.g., HTML, CSS, JavaScript, images).
   - This allows PWAs to work offline or with limited connectivity by serving cached content instead of relying on the network.

2. **Intercepting Network Requests**:

   - Service workers intercept outgoing network requests using the `fetch` event.
   - They can decide how to respond (e.g., return a cached response, fetch from the network, or use a hybrid strategy).

3. **Background Synchronization**:

   - Service workers can schedule tasks to run in the background, such as syncing data when connectivity is restored (e.g., sending form submissions or saving changes).

4. **Push Notifications**:

   - They enable receiving and handling push notifications even when the app is not in the foreground.

5. **Improved Performance**:
   - By serving cached assets, service workers reduce load times, especially for static resources.

---

### **How Service Workers Handle Caching**

1. **Installing the Service Worker**:

   - The service worker caches files during the `install` event.

2. **Fetching Requests**:

   - During the `fetch` event, the service worker decides whether to serve cached content or make a network request.

3. **Updating Cache**:
   - Old caches can be deleted, and new versions of files can be updated during the `activate` event.

---

### **Example: Service Worker for Caching and Fetch Handling**

#### 1. **Register the Service Worker**

```javascript
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => console.log("Service Worker Registered"))
    .catch((error) =>
      console.error("Service Worker Registration Failed:", error)
    );
}
```

#### 2. **Service Worker Script**

```javascript
const CACHE_NAME = "pwa-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/icon.png",
];

// Install Event: Cache Static Assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching assets...");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate Event: Clean Up Old Caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log(`Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// Fetch Event: Serve Cached Content or Fetch from Network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Serve from cache
      }
      // Fetch from network and cache it
      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});
```

---

### **Caching Strategies**

1. **Cache First**:

   - Prioritize cached content for speed.
   - Example: Serve cached images or scripts.

2. **Network First**:

   - Fetch fresh content from the network but fallback to cache if offline.
   - Example: Fetch user data from an API.

3. **Cache Only**:

   - Only use cached content without making network requests.
   - Example: Fully offline apps.

4. **Network Only**:

   - Always fetch from the network, typically for critical data.

5. **Stale While Revalidate**:
   - Serve cached content immediately and update the cache with the latest content in the background.

---

### **Background Synchronization**

1. **Use Case**:

   - Sync data when a network becomes available.
   - Example: Retry failed API requests or save offline edits.

2. **Example Code**:

```javascript
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-data") {
    event.waitUntil(syncDataWithServer());
  }
});

async function syncDataWithServer() {
  try {
    const response = await fetch("/sync", {
      method: "POST",
      body: JSON.stringify({ data: "example" }),
    });
    console.log("Data synchronized successfully:", response);
  } catch (error) {
    console.error("Data synchronization failed:", error);
  }
}
```

---

### **Benefits of Service Workers in PWAs**

1. **Offline Functionality**:

   - Users can access the app even without an internet connection.

2. **Improved User Experience**:

   - Faster load times due to caching.
   - Seamless interactions, even during network disruptions.

3. **Resource Efficiency**:

   - Reduced bandwidth usage by serving cached resources.

4. **Enhanced Engagement**:
   - Features like background sync and push notifications keep users connected.

---

## 22. **How can you implement **offline capabilities** for network requests using **service workers**?**

### Write an example of using a **service worker** to cache network responses and serve them when the user is offline.

Here’s an example of using a **service worker** to cache network responses dynamically and serve them when the user is offline.

---

### **Example Code**

#### 1. Register the Service Worker

In your main JavaScript file (e.g., `app.js`), register the service worker.

```javascript
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => console.log("Service Worker Registered"))
    .catch((error) =>
      console.error("Service Worker Registration Failed:", error)
    );
}
```

---

#### 2. Service Worker Script

Create a file named `service-worker.js` with the following code:

```javascript
const CACHE_NAME = "dynamic-cache-v1";

// Install Event: Pre-cache critical assets (optional)
self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
});

// Activate Event: Clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log(`Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  console.log("Service Worker activated");
});

// Fetch Event: Cache network responses dynamically
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached response if available
        return cachedResponse;
      }
      // Otherwise, fetch from network and cache the response
      return fetch(event.request)
        .then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            // Cache the network response for future use
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          // Optional: Return a fallback page if the network is unavailable
          if (event.request.mode === "navigate") {
            return caches.match("/offline.html");
          }
        });
    })
  );
});
```

---

#### 3. Offline Fallback Page (Optional)

Create an `offline.html` page to serve when the user tries to navigate while offline.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Offline</title>
  </head>
  <body>
    <h1>You are offline</h1>
    <p>Check your internet connection and try again.</p>
  </body>
</html>
```

---

### **How It Works**

1. **Dynamic Caching**:

   - During the `fetch` event, the service worker intercepts every network request.
   - If a cached response exists, it is returned immediately.
   - Otherwise, the request is fetched from the network and cached for future use.

2. **Offline Support**:

   - When the network is unavailable, cached responses are served.
   - Optionally, if the request is for a page and no cache is available, the `offline.html` page is returned.

3. **Cache Management**:
   - Old caches are cleaned up during the `activate` event to ensure the app uses only the latest version.

---

### **Testing the Example**

1. **Run a Local Server**:

   - Serve the files using a local server (e.g., `npx serve` or `python -m http.server`).

2. **Inspect Service Worker**:

   - Open the browser’s developer tools (`Application > Service Workers`).
   - Confirm that the service worker is registered and caching responses.

3. **Simulate Offline Mode**:
   - In developer tools, enable **Offline mode** under the Network tab.
   - Reload the page and verify that cached content is served.

---

### **Benefits of Dynamic Caching**

- **Scalability**: Automatically caches new content without needing to hardcode assets.
- **Improved UX**: Users can navigate the app even when offline or on slow networks.
- **Minimal Setup**: Requires little effort to implement compared to full offline-first solutions.

## 23. **What is **GraphQL**, and how is it used in network requests?**

### Compare **GraphQL** and **REST** APIs for making network requests. Provide an example of making a **GraphQL** query using **fetch()**.

### **GraphQL vs REST APIs**

| Feature                     | GraphQL                                                   | REST                                                                       |
| --------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Data Fetching**           | Fetches exactly what is requested, no more, no less.      | Fetches fixed resources, often leading to over-fetching or under-fetching. |
| **Endpoint**                | Single endpoint (e.g., `/graphql`).                       | Multiple endpoints (e.g., `/users`, `/posts`).                             |
| **Query Structure**         | Flexible, client defines the data shape using queries.    | Server defines the structure and data shape.                               |
| **Versioning**              | No versioning needed; schema evolves over time.           | Versioning (e.g., `/v1/users`, `/v2/users`) is common.                     |
| **Batching and Efficiency** | Supports batching multiple queries into a single request. | Requires multiple requests for related data.                               |
| **Documentation**           | Self-documenting via schema and tools like GraphiQL.      | Separate documentation (e.g., OpenAPI, Postman).                           |
| **Complexity**              | Requires setup of a GraphQL server and schema.            | Easier to set up and implement.                                            |

---

### **Making a GraphQL Query Using `fetch()`**

#### Example Scenario

You have a GraphQL API at `https://example.com/graphql` where you want to fetch a user's name and email.

---

#### Example Code

```javascript
async function fetchGraphQLData() {
  const query = `
    query GetUser($id: ID!) {
      user(id: $id) {
        name
        email
      }
    }
  `;

  const variables = {
    id: "123", // Replace with the desired user ID
  };

  try {
    const response = await fetch("https://example.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer your-jwt-token", // Optional, if authentication is needed
      },
      body: JSON.stringify({ query, variables }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("GraphQL Response:", result.data.user);
    } else {
      console.error(`HTTP Error: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

// Call the function
fetchGraphQLData();
```

---

### **Explanation of the Code**

1. **Query**:

   - The `query` string defines the data structure you want to fetch. The `GetUser` query requests `name` and `email` for a specific user.

2. **Variables**:

   - The `$id` variable is passed dynamically to make the query reusable.

3. **Headers**:

   - Set the `Content-Type` to `application/json`.
   - Optionally, include an `Authorization` header for secured APIs.

4. **Body**:

   - The request body is a JSON object containing:
     - `query`: The GraphQL query string.
     - `variables`: An object containing dynamic query parameters.

5. **Response Handling**:
   - The server returns a JSON response containing the `data` object or any errors.
   - `result.data.user` accesses the requested `name` and `email`.

---

### **GraphQL Response Example**

For a user with `id: 123`:

#### Response Body:

```json
{
  "data": {
    "user": {
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  }
}
```

#### Console Output:

```
GraphQL Response: { name: "John Doe", email: "john.doe@example.com" }
```

---

### **Advantages of GraphQL in the Example**

1. **Exact Data Fetching**:

   - Only `name` and `email` are fetched, avoiding over-fetching or under-fetching.

2. **Single Endpoint**:

   - No need to hit multiple endpoints like `/users/:id`.

3. **Dynamic Queries**:
   - Adding or removing fields (e.g., `phone`) requires only updating the query, not the server.

## 24. **How do you implement **pagination** and **sorting** in network requests using query parameters?**

### Write an example of sending query parameters to an API to request data with pagination and sorting, and handle the response accordingly.

Here's an example of sending query parameters to an API to request paginated and sorted data using the `fetch()` function.

---

### **Scenario**

You are querying an API endpoint `https://api.example.com/products` to fetch a list of products with the following requirements:

- **Pagination**: Specify the page number and the number of items per page.
- **Sorting**: Specify the field to sort by (e.g., `price`) and the sort order (e.g., `asc` for ascending, `desc` for descending).

---

### **Example Code**

```javascript
async function fetchProducts(
  page = 1,
  limit = 10,
  sortBy = "price",
  order = "asc"
) {
  // Construct the query parameters
  const queryParams = new URLSearchParams({
    page: page.toString(), // Convert numbers to strings
    limit: limit.toString(),
    sortBy,
    order,
  });

  const apiUrl = `https://api.example.com/products?${queryParams}`;

  try {
    // Send the GET request
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer your-jwt-token", // Optional, if the API requires authentication
      },
    });

    if (response.ok) {
      // Parse the JSON response
      const data = await response.json();

      // Display the data
      console.log("Products:", data.items); // Assume the response includes an `items` array
      console.log("Total Items:", data.total); // Assume a `total` field indicates total results
      console.log("Current Page:", data.page); // Assume a `page` field indicates the current page
    } else {
      console.error(`HTTP Error: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
}

// Fetch the first page of products, 10 per page, sorted by price in ascending order
fetchProducts(1, 10, "price", "asc");
```

---

### **Explanation**

1. **Query Parameters**:

   - Constructed using `URLSearchParams`, which ensures the parameters are properly encoded.
   - Parameters:
     - `page`: Specifies the current page of results.
     - `limit`: Defines the number of items per page.
     - `sortBy`: Indicates the field to sort by (e.g., `price`).
     - `order`: Specifies the sort order (`asc` or `desc`).

2. **API URL**:

   - Combines the base URL with the query parameters using template literals.

3. **HTTP Headers**:

   - Optional `Authorization` header is included if the API requires authentication.

4. **Response Handling**:

   - The `response.json()` method parses the JSON response.
   - Example fields in the response:
     - `items`: Array of paginated products.
     - `total`: Total number of products in the database.
     - `page`: The current page.

5. **Error Handling**:
   - Checks if `response.ok` is `true` before processing the data.
   - Catches network errors using a `try-catch` block.

---

### **Sample API Response**

#### Request URL:

```
https://api.example.com/products?page=1&limit=10&sortBy=price&order=asc
```

#### Response Body:

```json
{
  "items": [
    { "id": 1, "name": "Product A", "price": 10.99 },
    { "id": 2, "name": "Product B", "price": 12.49 },
    { "id": 3, "name": "Product C", "price": 14.99 }
  ],
  "total": 50,
  "page": 1,
  "limit": 10
}
```

#### Console Output:

```
Products: [
  { id: 1, name: 'Product A', price: 10.99 },
  { id: 2, name: 'Product B', price: 12.49 },
  { id: 3, name: 'Product C', price: 14.99 }
]
Total Items: 50
Current Page: 1
```

---

### **Benefits of Query Parameters for Pagination and Sorting**

- **Efficiency**: Reduces the data payload by fetching only the required items.
- **Flexibility**: Clients can control the pagination and sorting dynamically.
- **Scalability**: Handles large datasets effectively by fetching in chunks.
