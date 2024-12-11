### **Fetch: Download Progress**

The Fetch API does not directly provide progress information for downloading a resource. However, you can monitor progress by working with **Readable Streams**, which allow you to process chunks of data as they are received.

This approach requires using the `response.body` property, which is a `ReadableStream`. By reading this stream, you can track the progress of the download.

---

### **How It Works**

1. **Fetch the Resource**: Use the Fetch API to initiate the download.
2. **Access the Stream**: Retrieve the `response.body` property.
3. **Process Chunks**: Use a `ReadableStreamReader` to process each chunk of the response.
4. **Track Progress**: Accumulate the size of the downloaded chunks and calculate the percentage of completion.

---

### **Example: Tracking Download Progress**

Here’s an example of how to track download progress using Fetch:

```javascript
async function fetchWithProgress(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Get the total size from the Content-Length header
  const contentLength = response.headers.get("Content-Length");
  if (!contentLength) {
    console.warn("Unable to determine content length");
    return response.blob(); // Fallback to downloading the whole resource
  }

  const total = parseInt(contentLength, 10);
  let loaded = 0;

  // Create a reader for the response body
  const reader = response.body.getReader();
  const chunks = [];

  // Process the data in chunks
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    chunks.push(value);
    loaded += value.length;

    // Calculate and log progress
    const percentComplete = ((loaded / total) * 100).toFixed(2);
    console.log(`Downloaded: ${percentComplete}%`);
  }

  // Combine all chunks into a Blob
  const blob = new Blob(chunks);
  return blob;
}

// Example usage
fetchWithProgress("https://via.placeholder.com/600x400.png").then((blob) => {
  console.log("Download complete!");

  // Create a URL and display the image
  const imageUrl = URL.createObjectURL(blob);
  const img = document.createElement("img");
  img.src = imageUrl;
  document.body.appendChild(img);
});
```

---

### **Explanation**

1. **`Content-Length` Header**:

   - The server must provide the `Content-Length` header for progress tracking.
   - If unavailable, progress tracking won't be possible.

2. **Readable Streams**:

   - The `response.body.getReader()` method returns a `ReadableStreamReader`.
   - Use the `.read()` method to process chunks of data.

3. **Combining Chunks**:
   - Store each chunk in an array.
   - After downloading, combine the chunks into a `Blob`.

---

### **Best Practices**

1. **Graceful Handling of Missing Headers**:

   - Not all servers provide the `Content-Length` header. Handle this gracefully with fallback logic.

2. **Error Handling**:

   - Always check the response status and handle errors appropriately.

3. **Memory Management**:

   - Avoid holding large amounts of data in memory. Process or display data incrementally, if possible.

4. **User Feedback**:
   - Show a progress bar or spinner to keep the user informed.

---

### **Enhanced Example: Progress Bar**

Here’s an example that updates a progress bar on the page:

```html
<div id="progress-container">
  <progress id="progress-bar" value="0" max="100"></progress>
  <span id="progress-text">0%</span>
</div>
<script>
  async function fetchWithProgress(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentLength = response.headers.get("Content-Length");
    if (!contentLength) {
      console.warn("Unable to determine content length");
      return response.blob(); // Fallback
    }

    const total = parseInt(contentLength, 10);
    let loaded = 0;

    const reader = response.body.getReader();
    const chunks = [];
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      chunks.push(value);
      loaded += value.length;

      const percentComplete = ((loaded / total) * 100).toFixed(2);
      progressBar.value = percentComplete;
      progressText.textContent = `${percentComplete}%`;
    }

    const blob = new Blob(chunks);
    return blob;
  }

  // Start the download
  fetchWithProgress("https://via.placeholder.com/600x400.png").then((blob) => {
    console.log("Download complete!");
    const imageUrl = URL.createObjectURL(blob);
    const img = document.createElement("img");
    img.src = imageUrl;
    document.body.appendChild(img);
  });
</script>
```

---

### **Task for You**

1. Implement a script that:
   - Fetches a large file (e.g., an image or JSON).
   - Displays a progress bar on the page showing download progress.
2. Bonus: If the `Content-Length` header is unavailable, show a spinner instead of a progress bar.

Let me know how it goes!
