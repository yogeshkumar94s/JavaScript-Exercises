Here’s a script that demonstrates how to save, retrieve, and remove items from `sessionStorage`, and displays the saved data on page load.

### Script

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SessionStorage Example</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 20px;
      }
      .container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>SessionStorage Example</h1>
      <form id="dataForm">
        <label for="key">Key:</label>
        <input type="text" id="key" required />
        <br /><br />
        <label for="value">Value:</label>
        <input type="text" id="value" required />
        <br /><br />
        <button type="submit">Save to SessionStorage</button>
      </form>
      <button id="retrieveButton">Retrieve from SessionStorage</button>
      <button id="removeButton">Remove from SessionStorage</button>
      <h2>Saved Data</h2>
      <pre id="displayData"></pre>
    </div>

    <script>
      // Function to save data to sessionStorage
      function saveToSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
        alert(`Saved: ${key} = ${value}`);
      }

      // Function to retrieve data from sessionStorage
      function retrieveFromSessionStorage() {
        const key = document.getElementById("key").value;
        const value = sessionStorage.getItem(key);
        if (value) {
          document.getElementById(
            "displayData"
          ).textContent = `${key}: ${value}`;
        } else {
          document.getElementById(
            "displayData"
          ).textContent = `No data found for key: ${key}`;
        }
      }

      // Function to remove data from sessionStorage
      function removeFromSessionStorage() {
        const key = document.getElementById("key").value;
        sessionStorage.removeItem(key);
        alert(`Removed: ${key}`);
        document.getElementById("displayData").textContent = "";
      }

      // Event listeners for form submission and buttons
      document
        .getElementById("dataForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const key = document.getElementById("key").value;
          const value = document.getElementById("value").value;
          saveToSessionStorage(key, value);
        });

      document
        .getElementById("retrieveButton")
        .addEventListener("click", retrieveFromSessionStorage);
      document
        .getElementById("removeButton")
        .addEventListener("click", removeFromSessionStorage);

      // Display saved data on page load
      function displaySavedData() {
        const keys = Object.keys(sessionStorage);
        const savedData = keys
          .map((key) => `${key}: ${sessionStorage.getItem(key)}`)
          .join("\n");
        document.getElementById("displayData").textContent =
          savedData || "No data found";
      }

      // Initial display
      displaySavedData();
    </script>
  </body>
</html>
```

### Explanation:

1. **HTML Structure**:

   - A form for inputting key-value pairs to save in `sessionStorage`.
   - Buttons to retrieve and remove items from `sessionStorage`.
   - A `<pre>` tag to display saved data.

2. **JavaScript Functions**:

   - `saveToSessionStorage(key, value)`: Saves the key-value pair to `sessionStorage`.
   - `retrieveFromSessionStorage()`: Retrieves the value associated with the key and displays it.
   - `removeFromSessionStorage()`: Removes the item from `sessionStorage` based on the key.
   - `displaySavedData()`: Displays all saved key-value pairs from `sessionStorage` on page load.

3. **Event Listeners**:
   - Form submission triggers saving data to `sessionStorage`.
   - Buttons trigger retrieval and removal of data.

This script provides a complete example of interacting with `sessionStorage` in a web page. You can test it by saving, retrieving, and removing items, and viewing the data on page load.
