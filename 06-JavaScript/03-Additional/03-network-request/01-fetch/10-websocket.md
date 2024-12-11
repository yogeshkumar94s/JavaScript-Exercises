### **WebSockets**

**WebSockets** provide a full-duplex communication channel over a single, long-lived connection between a client and a server. Unlike HTTP, which is a request-response protocol, WebSockets enable real-time bidirectional communication, making them ideal for chat apps, live notifications, multiplayer games, and more.

---

### **How WebSockets Work**

1. **Handshake**:

   - WebSocket communication starts with an HTTP request (the handshake) that upgrades to the WebSocket protocol.
   - If the server agrees, the connection remains open for continuous data exchange.

2. **Persistent Connection**:

   - Once established, the connection stays open, and both the client and server can send messages at any time.

3. **Protocol**:
   - Messages are sent in a lightweight, binary or text format, reducing overhead.

---

### **Practical Implementation**

#### **1. WebSocket Server (Node.js)**

Install the `ws` library:

```bash
npm install ws
```

Server code:

```javascript
const WebSocket = require("ws");

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("New client connected");

  // Send a welcome message to the client
  ws.send("Welcome to the WebSocket server!");

  // Handle incoming messages from the client
  ws.on("message", (message) => {
    console.log("Received from client:", message);

    // Echo the message back to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(`Echo: ${message}`);
      }
    });
  });

  // Handle connection closure
  ws.on("close", () => {
    console.log("Client disconnected");
  });

  // Handle errors
  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
```

---

#### **2. WebSocket Client (Browser)**

Connect to the WebSocket server and interact with it:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebSocket Example</title>
  </head>
  <body>
    <h1>WebSocket Chat</h1>
    <div id="messages"></div>
    <input type="text" id="messageInput" placeholder="Type a message..." />
    <button id="sendButton">Send</button>

    <script>
      const ws = new WebSocket("ws://localhost:8080");

      // Display messages from the server
      ws.onmessage = (event) => {
        const messagesDiv = document.getElementById("messages");
        messagesDiv.innerHTML += `<p>${event.data}</p>`;
      };

      // Send a message to the server
      document.getElementById("sendButton").addEventListener("click", () => {
        const input = document.getElementById("messageInput");
        ws.send(input.value);
        input.value = "";
      });

      // Handle WebSocket errors
      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      // Handle connection close
      ws.onclose = () => {
        console.log("WebSocket connection closed");
      };
    </script>
  </body>
</html>
```

---

### **Advanced Features**

#### **1. Broadcasting Messages**

The server can broadcast messages to all connected clients:

```javascript
wss.clients.forEach((client) => {
  if (client.readyState === WebSocket.OPEN) {
    client.send("A new client has connected!");
  }
});
```

#### **2. Ping-Pong for Keep-Alive**

To detect disconnected clients:

```javascript
setInterval(() => {
  wss.clients.forEach((client) => {
    if (client.isAlive === false) return client.terminate();

    client.isAlive = false;
    client.ping();
  });
}, 30000);

wss.on("connection", (ws) => {
  ws.isAlive = true;
  ws.on("pong", () => (ws.isAlive = true));
});
```

#### **3. Handling Binary Data**

WebSockets can send and receive binary data like images or files:

```javascript
// Sending binary data
const buffer = Buffer.from("Hello, binary world!");
ws.send(buffer);
```

#### **4. Authenticating WebSocket Connections**

Use query parameters or headers to authenticate:

```javascript
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws, request) => {
  const params = new URLSearchParams(request.url.split("?")[1]);
  const token = params.get("token");

  if (!token || token !== "your-auth-token") {
    ws.close();
    console.log("Unauthorized connection attempt");
  } else {
    console.log("Authorized client connected");
  }
});
```

---

### **Best Practices**

1. **Connection Management**:

   - Detect and handle disconnections to prevent memory leaks.

2. **Compression**:

   - Use WebSocket extensions like `permessage-deflate` for compressing messages.

3. **Security**:

   - Use `wss://` (WebSocket Secure) to encrypt communication.
   - Authenticate connections and validate incoming data to prevent attacks.

4. **Error Handling**:

   - Gracefully handle errors and provide meaningful feedback to the client.

5. **Scalability**:

   - Use a library like `Socket.IO` or a service like AWS AppSync for handling WebSocket connections at scale.

6. **Load Balancing**:
   - Implement sticky sessions or a dedicated WebSocket gateway for proper load balancing.

---

### **Advantages**

1. Real-time, bidirectional communication.
2. Lightweight and low latency.
3. Suitable for various use cases, including chat, gaming, and notifications.

---

### **Limitations**

1. Requires a persistent connection, which can consume server resources.
2. Not as simple as HTTP-based protocols like long polling or SSE.
3. May require additional infrastructure for scaling large numbers of connections.

---

### **Task for You**

1. Implement the WebSocket server and client example.
2. Extend the client to allow displaying a list of connected users.
3. Add a "typing indicator" feature to show when a user is typing.
4. Use `wss://` for secure communication (use a self-signed certificate for development).

Let me know if you'd like help with any part of this!
