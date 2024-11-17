Here's a script that clears all data from both `localStorage` and `sessionStorage`, and then verifies that both storages are empty:

### Script

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clear Storage</title>
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
      <h1>Clear Storage</h1>
      <button id="clearStorageButton">Clear All Storage</button>
      <h2>Storage Status</h2>
      <pre id="storageStatus"></pre>
    </div>

    <script>
      // Function to clear all data from localStorage and sessionStorage
      function clearAllStorage() {
        localStorage.clear();
        sessionStorage.clear();
        alert("All data has been cleared from localStorage and sessionStorage");
      }

      // Function to verify that both storages are empty
      function checkStorageStatus() {
        const localStorageIsEmpty = localStorage.length === 0;
        const sessionStorageIsEmpty = sessionStorage.length === 0;

        let statusMessage = "Storage Status:\n";

        statusMessage += localStorageIsEmpty
          ? "localStorage is empty.\n"
          : "localStorage is not empty.\n";
        statusMessage += sessionStorageIsEmpty
          ? "sessionStorage is empty.\n"
          : "sessionStorage is not empty.\n";

        document.getElementById("storageStatus").textContent = statusMessage;
      }

      // Event listener for the clear storage button
      document
        .getElementById("clearStorageButton")
        .addEventListener("click", function () {
          clearAllStorage();
          checkStorageStatus();
        });

      // Initial check of storage status on page load
      checkStorageStatus();
    </script>
  </body>
</html>
```

### Explanation:

1. **HTML Structure**:

   - A button to clear all data from `localStorage` and `sessionStorage`.
   - A `<pre>` tag to display the status of the storages.

2. **JavaScript Functions**:

   - `clearAllStorage()`: Clears all data from both `localStorage` and `sessionStorage` using the `clear()` method.
   - `checkStorageStatus()`: Checks if `localStorage` and `sessionStorage` are empty and updates the display.

3. **Event Listeners**:
   - Button click triggers the clearing of both storages and the status check.
   - The status check is performed when the page loads to display the initial state of the storages.

This script helps you manage and verify the state of `localStorage` and `sessionStorage` by clearing all data and confirming that both are empty.
