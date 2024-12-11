### **FormData**

The `FormData` interface in JavaScript is used to construct key-value pairs representing form fields and their values. It is particularly useful for sending form data to servers, especially when the form includes files.

---

### **Why Use FormData?**

- Encodes data the same way as a form's `multipart/form-data` submission.
- Automatically handles file uploads.
- Compatible with Fetch API or XMLHttpRequest for HTTP requests.
- Easy to append, update, and retrieve form fields programmatically.

---

### **Creating a FormData Object**

You can create a `FormData` object in two ways:

1. **Empty FormData Object**:

   ```javascript
   const formData = new FormData();
   ```

2. **From an HTML Form Element**:
   ```javascript
   const formElement = document.querySelector("form");
   const formData = new FormData(formElement);
   ```

---

### **Common Methods**

- **`append(name, value)`**: Adds a field to the FormData.
- **`set(name, value)`**: Sets or updates a field's value.
- **`get(name)`**: Retrieves the value of a specific field.
- **`delete(name)`**: Removes a field.
- **`has(name)`**: Checks if a field exists.
- **`entries()`**: Returns an iterator for all key-value pairs.

---

### **Examples**

#### 1. Constructing FormData Programmatically

```javascript
const formData = new FormData();
formData.append("username", "johndoe");
formData.append("age", 30);
formData.append("profile_picture", fileInput.files[0]); // Assuming fileInput is an <input type="file">

// Logging key-value pairs
for (const [key, value] of formData.entries()) {
  console.log(`${key}:`, value);
}
```

---

#### 2. Sending FormData with Fetch

```javascript
const formData = new FormData();
formData.append("username", "johndoe");
formData.append("age", 30);

fetch("https://example.com/submit", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => console.log("Server Response:", data))
  .catch((error) => console.error("Error:", error));
```

---

#### 3. Creating FormData from an HTML Form

```html
<form id="myForm">
  <input type="text" name="username" value="johndoe" />
  <input type="number" name="age" value="30" />
  <input type="file" name="profile_picture" />
</form>
```

```javascript
const formElement = document.querySelector("#myForm");
const formData = new FormData(formElement);

fetch("https://example.com/submit", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => console.log("Server Response:", data));
```

---

#### 4. Handling File Uploads

If you're working with file uploads, you can easily include files in the FormData object:

```javascript
const fileInput = document.querySelector("#fileInput");
const formData = new FormData();
formData.append("document", fileInput.files[0]);

fetch("https://example.com/upload", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => console.log("Upload Successful:", data))
  .catch((error) => console.error("Upload Failed:", error));
```

---

#### 5. Modifying FormData Fields

```javascript
const formData = new FormData();
formData.append("username", "johndoe");
formData.append("age", 30);

// Update an existing field
formData.set("username", "janedoe");

// Check if a field exists
if (formData.has("age")) {
  console.log("Age is set:", formData.get("age"));
}

// Delete a field
formData.delete("age");
```

---

### **Use Case: File Upload with Form Metadata**

You can combine textual metadata and files in a single request:

```javascript
const fileInput = document.querySelector("#fileInput");
const formData = new FormData();
formData.append("title", "My Document");
formData.append("description", "This is a test file.");
formData.append("file", fileInput.files[0]);

fetch("https://example.com/api/upload", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => console.log("Response:", data))
  .catch((error) => console.error("Error:", error));
```

---

### **Limitations**

- You cannot directly inspect FormData contents with `console.log(formData)`. Use `.entries()` or similar methods to log it.
- It’s mainly for `multipart/form-data`; for JSON or other content types, you’ll need to use `JSON.stringify`.

---

### **Task for You**

1. Create an HTML form with fields:

   - `name` (text input)
   - `age` (number input)
   - `profile` (file input)
   - A submit button.

2. Write a script to:
   - Use `FormData` to collect the form values when the form is submitted.
   - Log all key-value pairs to the console.
   - Send the form data to `https://jsonplaceholder.typicode.com/posts` using Fetch.

Let me know once you're done, or if you need help!
