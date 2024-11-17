# localStorage and sessionStorage in JavaScript

## LocalStorage

### LocalStorage in JavaScript

`LocalStorage` is a web storage mechanism provided by modern web browsers that allows you to store key-value pairs in a web browser with no expiration date. The data stored in `LocalStorage` is specific to the domain and is accessible from any page of that domain.

#### Key Features of LocalStorage:

- **Persistence**: Data stored in `LocalStorage` persists even after the browser is closed and reopened.
- **Size Limit**: Each domain can store up to 5MB of data in `LocalStorage`.
- **Synchronous**: All operations on `LocalStorage` are synchronous.

### Basic Operations

1. **Storing Data**:

   ```javascript
   localStorage.setItem("key", "value");
   ```

2. **Retrieving Data**:

   ```javascript
   let value = localStorage.getItem("key");
   console.log(value);
   ```

3. **Removing Data**:

   ```javascript
   localStorage.removeItem("key");
   ```

4. **Clearing All Data**:
   ```javascript
   localStorage.clear();
   ```

### Example Script: Validation of Passwords and URLs

Here is a script that uses regular expressions to validate passwords and URLs, and logs whether they are valid:

```javascript
// Function to validate a password
function validatePassword(password) {
  // Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return passwordRegex.test(password);
}

// Function to validate a URL
function validateURL(url) {
  // Basic URL validation regex
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  return urlRegex.test(url);
}

// Test the validation functions
const password = "Password123!";
const url = "https://www.example.com";

console.log(`Password "${password}" is valid: ${validatePassword(password)}`);
console.log(`URL "${url}" is valid: ${validateURL(url)}`);
```

### Explanation:

1. **Password Validation**:

   - The regex `^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$` checks for:
     - At least one lowercase letter.
     - At least one uppercase letter.
     - At least one digit.
     - At least one special character.
     - A minimum length of 8 characters.

2. **URL Validation**:
   - The regex `^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$` checks for:
     - An optional `http` or `https` scheme.
     - A domain name with optional subdomains.
     - A top-level domain (e.g., `.com`, `.net`).
     - An optional path.

### Task 1: Save a String Value to LocalStorage and Retrieve It

Here's a script that saves a string value to `LocalStorage` and retrieves it:

```javascript
// Save a string value to LocalStorage
localStorage.setItem("myString", "Hello, LocalStorage!");

// Retrieve the string value from LocalStorage
let retrievedString = localStorage.getItem("myString");

// Log the retrieved value
console.log(retrievedString); // Output: Hello, LocalStorage!
```

### Task 2: Save an Object to LocalStorage by Converting It to a JSON String

Here's a script that saves an object to `LocalStorage` by converting it to a JSON string, retrieves and parses the object, then logs it:

```javascript
// Define an object
let myObject = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

// Convert the object to a JSON string and save it to LocalStorage
localStorage.setItem("myObject", JSON.stringify(myObject));

// Retrieve the JSON string from LocalStorage
let retrievedObjectString = localStorage.getItem("myObject");

// Parse the JSON string to get the original object
let retrievedObject = JSON.parse(retrievedObjectString);

// Log the retrieved object
console.log(retrievedObject); // Output: { name: 'Alice', age: 25, city: 'Wonderland' }
```

### Explanation:

1. **Task 1**:

   - `localStorage.setItem('myString', 'Hello, LocalStorage!');` saves the string `'Hello, LocalStorage!'` to `LocalStorage` with the key `'myString'`.
   - `localStorage.getItem('myString');` retrieves the string value associated with the key `'myString'` from `LocalStorage`.
   - `console.log(retrievedString);` logs the retrieved value to the console.

2. **Task 2**:
   - An object `myObject` is defined with some properties.
   - `JSON.stringify(myObject);` converts the object to a JSON string.
   - `localStorage.setItem('myObject', JSON.stringify(myObject));` saves the JSON string to `LocalStorage` with the key `'myObject'`.
   - `localStorage.getItem('myObject');` retrieves the JSON string from `LocalStorage`.
   - `JSON.parse(retrievedObjectString);` parses the JSON string back to an object.
   - `console.log(retrievedObject);` logs the retrieved object to the console.

---

## Use of localStorage

### Task 1: Create a Simple Form to Save User Input to LocalStorage

Here’s how you can create a simple form that saves user input (e.g., name and email) to `localStorage` when submitted, and retrieves and displays the saved data on page load:

#### HTML and JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LocalStorage Form</title>
  </head>
  <body>
    <h1>User Information</h1>
    <form id="userForm">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <br /><br />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <br /><br />
      <button type="submit">Save</button>
    </form>
    <h2>Saved Data:</h2>
    <div id="savedData"></div>

    <script>
      // Function to display saved data
      function displaySavedData() {
        const name = localStorage.getItem("name");
        const email = localStorage.getItem("email");

        if (name && email) {
          document.getElementById("savedData").innerHTML = `
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                `;
        } else {
          document.getElementById("savedData").innerHTML =
            "<p>No data saved.</p>";
        }
      }

      // Display saved data on page load
      window.onload = displaySavedData;

      // Save user input to LocalStorage on form submit
      document
        .getElementById("userForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;

          localStorage.setItem("name", name);
          localStorage.setItem("email", email);

          displaySavedData();
        });
    </script>
  </body>
</html>
```

### Task 2: Remove an Item from LocalStorage and Log Before and After

Here’s a script that removes an item from `localStorage` and logs the content before and after removal:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Remove LocalStorage Item</title>
  </head>
  <body>
    <h1>LocalStorage Management</h1>
    <button id="removeItem">Remove Name from LocalStorage</button>

    <script>
      // Function to log LocalStorage content
      function logLocalStorage() {
        console.log("LocalStorage Content:", { ...localStorage });
      }

      // Initial logging of LocalStorage content
      logLocalStorage();

      // Remove item from LocalStorage on button click
      document
        .getElementById("removeItem")
        .addEventListener("click", function () {
          localStorage.removeItem("name");
          logLocalStorage();
        });
    </script>
  </body>
</html>
```

### Explanation:

1. **Task 1**:

   - The HTML form collects user input for `name` and `email`.
   - On form submission, the input values are saved to `localStorage`.
   - The saved data is retrieved and displayed on page load using the `displaySavedData` function.

2. **Task 2**:
   - The script logs the initial `localStorage` content.
   - When the "Remove Name from LocalStorage" button is clicked, it removes the `name` item from `localStorage` and logs the content again to show the change.

---

## sessionStorage in JavaScript

`sessionStorage` is similar to `localStorage` in that it allows you to store data in the browser. The key difference is that data stored in `sessionStorage` is only available for the duration of the page session. This means the data is cleared when the page session ends, which happens when the page is closed. Here's a brief overview and some tasks to help you understand how to use `sessionStorage` in JavaScript.

### Overview of `sessionStorage`

- **Lifetime**: Data in `sessionStorage` is only available for the duration of the page session (as long as the browser tab is open).
- **Scope**: Data is specific to the tab in which it was stored and is not shared across tabs.
- **Usage**: Useful for storing temporary data that should not persist beyond the current session.

### Common Methods

- `sessionStorage.setItem(key, value)`: Stores a key-value pair.
- `sessionStorage.getItem(key)`: Retrieves the value for a given key.
- `sessionStorage.removeItem(key)`: Removes the key-value pair for a given key.
- `sessionStorage.clear()`: Clears all key-value pairs in `sessionStorage`.

### Tasks

1. **Save and Retrieve Data**
2. **Remove Data and Clear Storage**

### Task 1: Save and Retrieve Data

Let's write a script to save a string value to `sessionStorage` and retrieve it. Then, log the retrieved value.

#### HTML and JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SessionStorage Example</title>
  </head>
  <body>
    <h1>SessionStorage Example</h1>
    <button id="saveData">Save Data</button>
    <button id="retrieveData">Retrieve Data</button>
    <div id="output"></div>

    <script>
      document
        .getElementById("saveData")
        .addEventListener("click", function () {
          // Save a string value to sessionStorage
          sessionStorage.setItem("myData", "Hello, SessionStorage!");
          alert("Data saved to sessionStorage.");
        });

      document
        .getElementById("retrieveData")
        .addEventListener("click", function () {
          // Retrieve the string value from sessionStorage
          const data = sessionStorage.getItem("myData");
          document.getElementById("output").textContent = data
            ? data
            : "No data found in sessionStorage.";
        });
    </script>
  </body>
</html>
```

### Task 2: Save and Retrieve an Object

Let's write a script to save an object to `sessionStorage` by converting it to a JSON string. Then, retrieve and parse the object, and log it.

#### HTML and JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SessionStorage Object Example</title>
  </head>
  <body>
    <h1>SessionStorage Object Example</h1>
    <button id="saveObject">Save Object</button>
    <button id="retrieveObject">Retrieve Object</button>
    <div id="outputObject"></div>

    <script>
      document
        .getElementById("saveObject")
        .addEventListener("click", function () {
          // Save an object to sessionStorage
          const user = { name: "John Doe", email: "john@example.com" };
          sessionStorage.setItem("user", JSON.stringify(user));
          alert("Object saved to sessionStorage.");
        });

      document
        .getElementById("retrieveObject")
        .addEventListener("click", function () {
          // Retrieve the object from sessionStorage
          const userString = sessionStorage.getItem("user");
          const user = userString ? JSON.parse(userString) : null;
          document.getElementById("outputObject").textContent = user
            ? `Name: ${user.name}, Email: ${user.email}`
            : "No object found in sessionStorage.";
        });
    </script>
  </body>
</html>
```

### Task 3: Remove Data and Clear Storage

Let's write a script to remove an item from `sessionStorage` and log the content before and after removal.

#### HTML and JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Remove SessionStorage Item</title>
  </head>
  <body>
    <h1>Remove SessionStorage Item</h1>
    <button id="saveSampleData">Save Sample Data</button>
    <button id="removeData">Remove Data</button>
    <button id="clearStorage">Clear Storage</button>

    <script>
      // Function to log sessionStorage content
      function logSessionStorage() {
        console.log("sessionStorage Content:", { ...sessionStorage });
      }

      document
        .getElementById("saveSampleData")
        .addEventListener("click", function () {
          // Save sample data to sessionStorage
          sessionStorage.setItem("sampleData", "This is some sample data.");
          logSessionStorage();
        });

      document
        .getElementById("removeData")
        .addEventListener("click", function () {
          // Remove sample data from sessionStorage
          sessionStorage.removeItem("sampleData");
          logSessionStorage();
        });

      document
        .getElementById("clearStorage")
        .addEventListener("click", function () {
          // Clear all sessionStorage data
          sessionStorage.clear();
          logSessionStorage();
        });

      // Initial logging of sessionStorage content
      logSessionStorage();
    </script>
  </body>
</html>
```

### Explanation:

1. **Task 1**:

   - Two buttons are provided to save and retrieve a string value from `sessionStorage`.
   - When the "Save Data" button is clicked, the script saves the string `"Hello, SessionStorage!"` to `sessionStorage`.
   - When the "Retrieve Data" button is clicked, the script retrieves the value from `sessionStorage` and logs it.

2. **Task 2**:

   - Two buttons are provided to save and retrieve an object from `sessionStorage`.
   - When the "Save Object" button is clicked, the script saves a user object (converted to a JSON string) to `sessionStorage`.
   - When the "Retrieve Object" button is clicked, the script retrieves the object, parses it back into a JavaScript object, and logs it.

3. **Task 3**:
   - Three buttons are provided to save sample data, remove data, and clear the entire `sessionStorage`.
   - The initial content of `sessionStorage` is logged, and the content is logged again after each operation to show the changes.

Here's how you can complete these tasks using `sessionStorage` in JavaScript.

### Task 1: Save and Retrieve a String Value

#### HTML and JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SessionStorage String Example</title>
  </head>
  <body>
    <h1>SessionStorage String Example</h1>
    <button id="saveString">Save String</button>
    <button id="retrieveString">Retrieve String</button>
    <div id="outputString"></div>

    <script>
      document
        .getElementById("saveString")
        .addEventListener("click", function () {
          // Save a string value to sessionStorage
          sessionStorage.setItem("myString", "Hello, SessionStorage!");
          alert("String saved to sessionStorage.");
        });

      document
        .getElementById("retrieveString")
        .addEventListener("click", function () {
          // Retrieve the string value from sessionStorage
          const data = sessionStorage.getItem("myString");
          document.getElementById("outputString").textContent = data
            ? data
            : "No data found in sessionStorage.";
        });
    </script>
  </body>
</html>
```

### Task 2: Save and Retrieve an Object

#### HTML and JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SessionStorage Object Example</title>
  </head>
  <body>
    <h1>SessionStorage Object Example</h1>
    <button id="saveObject">Save Object</button>
    <button id="retrieveObject">Retrieve Object</button>
    <div id="outputObject"></div>

    <script>
      document
        .getElementById("saveObject")
        .addEventListener("click", function () {
          // Save an object to sessionStorage
          const user = { name: "John Doe", email: "john@example.com" };
          sessionStorage.setItem("user", JSON.stringify(user));
          alert("Object saved to sessionStorage.");
        });

      document
        .getElementById("retrieveObject")
        .addEventListener("click", function () {
          // Retrieve the object from sessionStorage
          const userString = sessionStorage.getItem("user");
          const user = userString ? JSON.parse(userString) : null;
          document.getElementById("outputObject").textContent = user
            ? `Name: ${user.name}, Email: ${user.email}`
            : "No object found in sessionStorage.";
        });
    </script>
  </body>
</html>
```

### Explanation:

1. **Task 1**:

   - Two buttons are provided to save and retrieve a string value from `sessionStorage`.
   - When the "Save String" button is clicked, the script saves the string `"Hello, SessionStorage!"` to `sessionStorage`.
   - When the "Retrieve String" button is clicked, the script retrieves the value from `sessionStorage` and logs it.

2. **Task 2**:
   - Two buttons are provided to save and retrieve an object from `sessionStorage`.
   - When the "Save Object" button is clicked, the script saves a user object (converted to a JSON string) to `sessionStorage`.
   - When the "Retrieve Object" button is clicked, the script retrieves the object, parses it back into a JavaScript object, and logs it.

Here's how you can use `sessionStorage` to save and retrieve user input from a form, as well as remove items from `sessionStorage`.

### Task 1: Save User Input and Retrieve on Page Load

#### HTML and JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SessionStorage Form Example</title>
  </head>
  <body>
    <h1>SessionStorage Form Example</h1>
    <form id="userForm">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <br />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <br />
      <button type="submit">Save</button>
    </form>
    <h2>Saved Data:</h2>
    <div id="savedData"></div>

    <script>
      document
        .getElementById("userForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          // Get user input values
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;

          // Save user input to sessionStorage
          const user = { name, email };
          sessionStorage.setItem("user", JSON.stringify(user));

          // Display saved data
          displaySavedData();
        });

      function displaySavedData() {
        const userString = sessionStorage.getItem("user");
        const user = userString ? JSON.parse(userString) : null;
        document.getElementById("savedData").textContent = user
          ? `Name: ${user.name}, Email: ${user.email}`
          : "No data saved in sessionStorage.";
      }

      // Display saved data on page load
      document.addEventListener("DOMContentLoaded", displaySavedData);
    </script>
  </body>
</html>
```

### Task 2: Remove an Item from SessionStorage

#### HTML and JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SessionStorage Remove Example</title>
  </head>
  <body>
    <h1>SessionStorage Remove Example</h1>
    <button id="removeItem">Remove Item</button>
    <h2>SessionStorage Content Before Removal:</h2>
    <div id="beforeRemoval"></div>
    <h2>SessionStorage Content After Removal:</h2>
    <div id="afterRemoval"></div>

    <script>
      document
        .getElementById("removeItem")
        .addEventListener("click", function () {
          // Log sessionStorage content before removal
          document.getElementById("beforeRemoval").textContent =
            sessionStorage.getItem("user")
              ? sessionStorage.getItem("user")
              : "No data in sessionStorage.";

          // Remove the item from sessionStorage
          sessionStorage.removeItem("user");

          // Log sessionStorage content after removal
          document.getElementById("afterRemoval").textContent =
            sessionStorage.getItem("user")
              ? sessionStorage.getItem("user")
              : "No data in sessionStorage.";
        });
    </script>
  </body>
</html>
```

### Explanation:

1. **Task 1**:

   - A simple form captures the user's name and email.
   - On form submission, the input values are saved to `sessionStorage` as a JSON string.
   - The saved data is displayed both upon form submission and on page load using the `displaySavedData` function.

2. **Task 2**:
   - A button allows the user to remove the saved item from `sessionStorage`.
   - The content of `sessionStorage` is logged before and after removal, showing the changes in the stored data.

---

## Comparison between localStorage and sessionStorage

Both `localStorage` and `sessionStorage` are part of the Web Storage API, which allows you to store data in the browser. However, they have distinct differences in their usage and behavior. Here's a comparison of `localStorage` and `sessionStorage`:

### Similarities:

1. **Key-Value Storage**:

   - Both `localStorage` and `sessionStorage` store data as key-value pairs.
   - Data is stored in string format. Non-string data needs to be serialized (e.g., using JSON.stringify) before storage and deserialized (e.g., using JSON.parse) when retrieved.

2. **API Methods**:
   - Both have similar methods: `setItem(key, value)`, `getItem(key)`, `removeItem(key)`, and `clear()`.
   - Both can be accessed through the `window` object: `window.localStorage` and `window.sessionStorage`.

### Differences:

1. **Persistence**:

   - **localStorage**: Data stored in `localStorage` has no expiration time. It remains until it is explicitly deleted by the user or the application, even if the browser is closed and reopened.
   - **sessionStorage**: Data stored in `sessionStorage` is temporary and is only available for the duration of the page session. It is cleared when the page session ends, i.e., when the tab or browser is closed.

2. **Scope**:

   - **localStorage**: Data is shared across all tabs and windows with the same origin (protocol, host, and port).
   - **sessionStorage**: Data is only accessible within the tab or window where it was set. Each tab has its own session storage, and data is not shared between them.

3. **Storage Capacity**:
   - **localStorage**: Typically allows for storing around 5-10 MB of data, depending on the browser.
   - **sessionStorage**: Typically has a smaller storage limit compared to `localStorage`, but the exact size can vary between browsers.

### Use Cases:

- **localStorage**:

  - Suitable for storing data that needs to persist across sessions, such as user preferences, themes, and settings.
  - Can be used for caching data to improve performance and reduce server load.

- **sessionStorage**:
  - Ideal for storing temporary data that is specific to a single session, such as form inputs, shopping cart items for the current session, or temporary state data that does not need to persist beyond the session.
  - Useful for data that should not be shared between tabs or windows for security reasons.

### Example Usage:

```javascript
// localStorage Example
// Storing data
localStorage.setItem("username", "JohnDoe");

// Retrieving data
const username = localStorage.getItem("username");
console.log(username); // Output: JohnDoe

// Removing data
localStorage.removeItem("username");

// Clearing all data
localStorage.clear();

// sessionStorage Example
// Storing data
sessionStorage.setItem("sessionUser", "JaneDoe");

// Retrieving data
const sessionUser = sessionStorage.getItem("sessionUser");
console.log(sessionUser); // Output: JaneDoe

// Removing data
sessionStorage.removeItem("sessionUser");

// Clearing all data
sessionStorage.clear();
```

In summary, choose `localStorage` when you need to store data that persists across sessions and `sessionStorage` for data that should only last for the duration of the page session.

Here’s how you can complete these tasks:

### Task 1: Save and Retrieve Data

```javascript
// Function to save a value to both localStorage and sessionStorage
function saveToStorages(key, value) {
  // Save to localStorage
  localStorage.setItem(key, value);

  // Save to sessionStorage
  sessionStorage.setItem(key, value);
}

// Function to retrieve and log values from both storages
function logValues(key) {
  // Retrieve from localStorage
  const localValue = localStorage.getItem(key);
  console.log(`Value from localStorage for key "${key}": ${localValue}`);

  // Retrieve from sessionStorage
  const sessionValue = sessionStorage.getItem(key);
  console.log(`Value from sessionStorage for key "${key}": ${sessionValue}`);
}

// Example usage
saveToStorages("username", "JohnDoe");
logValues("username");
```

### Task 2: Clear Data from Both Storages

```javascript
// Function to clear all data from both localStorage and sessionStorage
function clearAllStorages() {
  // Clear localStorage
  localStorage.clear();
  console.log("localStorage has been cleared.");

  // Clear sessionStorage
  sessionStorage.clear();
  console.log("sessionStorage has been cleared.");
}

// Function to verify that both storages are empty
function verifyStoragesEmpty() {
  const localIsEmpty = localStorage.length === 0;
  const sessionIsEmpty = sessionStorage.length === 0;

  console.log(`localStorage is empty: ${localIsEmpty}`);
  console.log(`sessionStorage is empty: ${sessionIsEmpty}`);
}

// Example usage
clearAllStorages();
verifyStoragesEmpty();
```

### Explanation:

1. **Saving and Retrieving Values**:

   - `saveToStorages(key, value)` stores the given value under the provided key in both `localStorage` and `sessionStorage`.
   - `logValues(key)` retrieves the value from both storages and logs it to the console.

2. **Clearing and Verifying Storage**:
   - `clearAllStorages()` clears all entries from both `localStorage` and `sessionStorage`.
   - `verifyStoragesEmpty()` checks if both storages are empty by verifying their lengths and logs the results.
