### **Server-Sent Events (SSE)**

**Server-Sent Events (SSE)** is a lightweight protocol for unidirectional communication from the server to the client. Unlike WebSockets, which are bidirectional, SSE is designed for scenarios where the server pushes updates to the client.

---

### **How SSE Works**

1. **HTTP Connection**:

   - The client establishes an HTTP connection to the server and keeps it open.

2. **Unidirectional Communication**:

   - The server sends updates to the client as a stream of events.

3. **Text-Based Protocol**:

   - SSE uses plain text with a specific format (`event`, `data`, etc.), making it easy to implement and debug.

4. **Automatic Reconnection**:
   - The browser automatically attempts to reconnect if the connection is lost.

---

### **Use Cases**

- Real-time notifications.
- Live score updates.
- Monitoring dashboards.
- News feeds.

---

### **Implementing SSE**

#### **1. Server-Side Code (Node.js)**

Install `express`:

```bash
npm install express
```

Server code:

```javascript
const express = require("express");
const app = express();

app.get("/events", (req, res) => {
  // Set headers for SSE
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Send a message every 3 seconds
  const intervalId = setInterval(() => {
    const timestamp = new Date().toLocaleTimeString();
    res.write(
      `data: ${JSON.stringify({
        message: "Hello, Client!",
        time: timestamp,
      })}\n\n`
    );
  }, 3000);

  // Handle client disconnect
  req.on("close", () => {
    clearInterval(intervalId);
    console.log("Client disconnected");
  });
});

app.listen(3000, () =>
  console.log("SSE server running on http://localhost:3000")
);
```

---

#### **2. Client-Side Code**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SSE Example</title>
  </head>
  <body>
    <h1>Server-Sent Events Example</h1>
    <div id="messages"></div>

    <script>
      // Create a new EventSource
      const eventSource = new EventSource("/events");

      // Listen for incoming messages
      eventSource.onmessage = (event) => {
        const messagesDiv = document.getElementById("messages");
        const data = JSON.parse(event.data);
        messagesDiv.innerHTML += `<p>${data.message} at ${data.time}</p>`;
      };

      // Handle errors
      eventSource.onerror = (error) => {
        console.error("SSE Error:", error);
        eventSource.close();
      };

      // Optional: Close connection after 30 seconds
      setTimeout(() => {
        eventSource.close();
        console.log("SSE connection closed");
      }, 30000);
    </script>
  </body>
</html>
```

---

### **Advanced Features**

#### **1. Named Events**

SSE supports custom event names using the `event:` field.

**Server-Side**:

```javascript
res.write(`event: customEvent\n`);
res.write(`data: ${JSON.stringify({ message: "This is a custom event" })}\n\n`);
```

**Client-Side**:

```javascript
eventSource.addEventListener("customEvent", (event) => {
  console.log("Received custom event:", event.data);
});
```

---

#### **2. Retry Intervals**

You can specify a custom retry interval in milliseconds using the `retry:` field.

**Server-Side**:

```javascript
res.write(`retry: 5000\n`); // Retry every 5 seconds
```

---

#### **3. Last-Event-ID for Resume**

SSE supports resuming missed messages using the `Last-Event-ID` header.

**Server-Side**:

```javascript
const lastEventId = req.headers["last-event-id"] || 0;
console.log("Last Event ID:", lastEventId);
```

**Client-Side**:

```javascript
const eventSource = new EventSource("/events", { withCredentials: true });
```

---

### **Best Practices**

1. **Connection Limits**:

   - Browsers and servers limit the number of open SSE connections. Keep connections efficient.

2. **Retry Handling**:

   - The browser handles reconnections automatically. Use the `retry` field for fine control.

3. **Efficient Data Streaming**:

   - Only send updates when necessary to reduce overhead.

4. **Security**:

   - Use HTTPS (`https://`) for secure communication.
   - Sanitize and validate data sent to the client to prevent injection attacks.

5. **Load Balancing**:
   - Use sticky sessions or server setups that support sticky connections.

---

### **Advantages**

1. **Lightweight**:

   - Simpler and lighter than WebSockets for one-way communication.

2. **Browser Support**:

   - Native support in most modern browsers without additional libraries.

3. **Automatic Reconnection**:
   - Handles reconnection out-of-the-box with minimal client-side logic.

---

### **Limitations**

1. **Unidirectional**:

   - Only server-to-client communication is supported.

2. **Scaling**:

   - Open connections can impact server resources.

3. **Limited Browser Support**:
   - Not supported in older versions of Internet Explorer.

---

### **Comparison with WebSockets**

| Feature          | SSE                  | WebSockets                |
| ---------------- | -------------------- | ------------------------- |
| **Direction**    | Unidirectional       | Bidirectional             |
| **Use Case**     | Notifications, feeds | Chat, gaming, real-time   |
| **Transport**    | HTTP                 | Custom WebSocket protocol |
| **Reconnection** | Automatic            | Manual                    |
| **Ease of Use**  | Simple               | Requires more setup       |

---

### **Task for You**

1. Implement the example SSE server and client.
2. Extend it to:
   - Support multiple named events.
   - Handle reconnection with `Last-Event-ID`.
3. Test scalability by opening multiple client connections.
4. Compare SSE with WebSockets in a use case of your choice.

Let me know if you need help implementing any part of this!
