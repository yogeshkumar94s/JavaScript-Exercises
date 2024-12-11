### **Resumable File Upload**

**Resumable File Upload** allows uploading large files in chunks so that if the upload is interrupted (e.g., due to a network issue), it can resume from where it left off instead of restarting the entire process. This is commonly used in services like Google Drive or Dropbox.

---

### **How It Works**

1. **Divide the File into Chunks**:
   - Split the file into smaller pieces (e.g., 5 MB each).
2. **Send Each Chunk**:

   - Upload chunks sequentially or in parallel to the server.

3. **Server Tracks Progress**:

   - The server keeps track of which chunks have been received.

4. **Resume Upload**:
   - If the connection is interrupted, upload resumes from the last completed chunk.

---

### **Example Architecture**

1. **Client**:

   - Reads the file in chunks.
   - Sends each chunk to the server.
   - Tracks upload progress and retries failed chunks.

2. **Server**:
   - Receives chunks and saves them to a temporary location.
   - Validates chunk order and integrity.
   - Combines chunks into the final file after all parts are received.

---

### **Example: Client-Side Code**

Here’s a basic example using the `File` and `Blob` APIs along with `fetch`.

```html
<input type="file" id="fileInput" />
<div id="progress">Upload Progress: 0%</div>

<script>
  const CHUNK_SIZE = 5 * 1024 * 1024; // 5 MB

  async function uploadFile(file) {
    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
    let uploadedChunks = 0;

    for (let start = 0; start < file.size; start += CHUNK_SIZE) {
      const chunk = file.slice(start, start + CHUNK_SIZE);
      const formData = new FormData();
      formData.append("chunk", chunk);
      formData.append("chunkIndex", Math.floor(start / CHUNK_SIZE));
      formData.append("totalChunks", totalChunks);

      try {
        const response = await fetch("/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(
            `Failed to upload chunk at index ${Math.floor(start / CHUNK_SIZE)}`
          );
        }

        uploadedChunks++;
        const progress = ((uploadedChunks / totalChunks) * 100).toFixed(2);
        document.getElementById(
          "progress"
        ).textContent = `Upload Progress: ${progress}%`;
      } catch (err) {
        console.error(err);
        alert("Error uploading a chunk. Retry.");
        return;
      }
    }

    alert("File upload complete!");
  }

  document.getElementById("fileInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadFile(file);
    }
  });
</script>
```

---

### **Example: Server-Side Code**

Here’s a basic example using Node.js with `Express`.

```javascript
const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();
const upload = multer({ dest: "temp/" });

app.post("/upload", upload.single("chunk"), (req, res) => {
  const { chunkIndex, totalChunks } = req.body;
  const chunkPath = req.file.path;
  const fileName = "uploaded_file"; // Use a consistent file name or an identifier

  const finalFilePath = path.join(__dirname, "uploads", fileName);

  // Append chunk to final file
  const writeStream = fs.createWriteStream(finalFilePath, { flags: "a" });
  const readStream = fs.createReadStream(chunkPath);

  readStream.pipe(writeStream);

  readStream.on("end", () => {
    fs.unlinkSync(chunkPath); // Clean up the temp file

    if (parseInt(chunkIndex) + 1 === parseInt(totalChunks)) {
      console.log("All chunks received. Upload complete!");
    }

    res.status(200).send("Chunk uploaded successfully");
  });

  readStream.on("error", (err) => {
    console.error("Error writing chunk:", err);
    res.status(500).send("Error processing chunk");
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

### **Best Practices**

1. **Chunk Size**:

   - Choose a reasonable chunk size (e.g., 5–10 MB) based on network conditions and server capacity.

2. **Retry Failed Chunks**:

   - Implement retry logic for failed chunk uploads.

3. **Track Upload State**:

   - Use unique file identifiers or tokens to ensure the server tracks which chunks have been uploaded.

4. **Parallel Uploads**:

   - For faster uploads, send multiple chunks in parallel.

5. **Integrity Checks**:

   - Validate each chunk using checksums (e.g., MD5) to ensure no corruption.

6. **Cleanup**:
   - Clean up temporary files on both client and server after the upload completes.

---

### **Advanced Use Case: Resumable Upload**

Add support for resumable uploads by checking which chunks have already been uploaded.

#### **Client-Side (Enhanced)**

```javascript
async function uploadFileWithResume(file) {
  const response = await fetch(`/upload/status?fileName=${file.name}`);
  const { uploadedChunks } = await response.json();

  const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

  for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
    if (uploadedChunks.includes(chunkIndex)) {
      continue; // Skip already uploaded chunks
    }

    const start = chunkIndex * CHUNK_SIZE;
    const chunk = file.slice(start, start + CHUNK_SIZE);
    const formData = new FormData();
    formData.append("chunk", chunk);
    formData.append("chunkIndex", chunkIndex);
    formData.append("totalChunks", totalChunks);
    formData.append("fileName", file.name);

    try {
      const uploadResponse = await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error(`Chunk ${chunkIndex} upload failed.`);
      }
    } catch (err) {
      console.error(err);
      alert("Error during upload. Retry.");
      return;
    }
  }

  alert("Resumable file upload complete!");
}
```

---

### **Task for You**

1. Implement the resumable file upload client and server.
2. Add:
   - A progress bar that updates dynamically.
   - Retry logic for failed chunks.
3. Test with large files (e.g., >100 MB).

Let me know if you’d like help with any specific part!
