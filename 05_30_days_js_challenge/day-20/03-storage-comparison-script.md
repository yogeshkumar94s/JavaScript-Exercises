Here's a script that demonstrates saving data to both `localStorage` and `sessionStorage`, retrieving the data from both, and comparing the results.

### Script

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Storage Comparison</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Storage Comparison</h1>
      <form id="storageForm">
        <label for="key">Key:</label>
        <input type="text" id="key" required />
        <br /><br />
        <label for="value">Value:</label>
        <input type="text" id="value" required />
        <br /><br />
        <button type="submit">Save to Both Storage</button>
      </form>
      <button id="compareButton">Compare Storage</button>
      <h2>Stored Data Comparison</h2>
      <pre id="storageComparison"></pre>
    </div>

    <script>
      // Function to save data to both localStorage and sessionStorage
      function saveToBothStorages(key, value) {
        localStorage.setItem(key, value);
        sessionStorage.setItem(key, value);
        alert(
          `Saved: ${key} = ${value} to both localStorage and sessionStorage`
        );
      }

      // Function to compare data in localStorage and sessionStorage
      function compareStorages() {
        const key = document.getElementById("key").value;
        const localStorageValue = localStorage.getItem(key);
        const sessionStorageValue = sessionStorage.getItem(key);

        let comparisonResult;
        if (localStorageValue === sessionStorageValue) {
          comparisonResult = `Match:\nKey: ${key}\nValue: ${localStorageValue}`;
        } else {
          comparisonResult = `Mismatch:\nKey: ${key}\nlocalStorage Value: ${localStorageValue}\nsessionStorage Value: ${sessionStorageValue}`;
        }

        document.getElementById("storageComparison").textContent =
          comparisonResult || "No data found for the provided key.";
      }

      // Event listeners for form submission and compare button
      document
        .getElementById("storageForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const key = document.getElementById("key").value;
          const value = document.getElementById("value").value;
          saveToBothStorages(key, value);
        });

      document
        .getElementById("compareButton")
        .addEventListener("click", compareStorages);
    </script>
  </body>
</html>
```

### Explanation:

1. **HTML Structure**:

   - A form for inputting key-value pairs.
   - A button to compare the data stored in `localStorage` and `sessionStorage`.
   - A `<pre>` tag to display the comparison results.

2. **JavaScript Functions**:

   - `saveToBothStorages(key, value)`: Saves the key-value pair to both `localStorage` and `sessionStorage`.
   - `compareStorages()`: Retrieves the value from both storage mechanisms for the given key and compares them. Logs whether the values match or not.

3. **Event Listeners**:
   - Form submission triggers saving data to both storages.
   - Button click triggers comparison of the stored data.

This script helps you test how data is stored in and retrieved from `localStorage` and `sessionStorage`, and it provides a comparison of the results.
