// Retrieve Data Asynchronously with Promises.

// Basics of Promises:

// A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It has three states: pending, resolved (fulfilled), and rejected. Promises are typically used for handling asynchronous tasks like making HTTP requests.

// Retrieving Data Asynchronously:

// Let's assume you want to retrieve data from an API asynchronously. We'll use the fetch API, which returns a promise.

// Function that returns a promise to fetch data from an API
function fetchData() {
  // The fetch function returns a promise
  return fetch("https://api.example.com/data")
    .then((response) => {
      // Check if the response status is OK
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON data and return it
      return response.json();
    })
    .catch((error) => {
      // Handle errors during the fetch operation
      console.error("Error fetching data:", error);
      throw error; // Rethrow the error for further handling
    });
}

// Using the fetchData function
fetchData()
  .then((data) => {
    // Handle the retrieved data
    console.log("Data retrieved:", data);
  })
  .catch((error) => {
    // Handle errors from the fetchData function
    console.error("Error in data retrieval:", error);
  });

//   In this example:

//   The fetchData function returns a promise that represents the asynchronous operation of fetching data from the specified API endpoint.
//   The then method is used to handle the successful resolution of the promise. Inside the then block, you can process the retrieved data.
//   The catch method is used to handle errors during the asynchronous operation. This includes network errors or errors thrown explicitly in the promise chain.

//   Using async/await Syntax:

//   ES2017 introduced the async/await syntax, which provides a more concise way to work with promises, making asynchronous code look more like synchronous code.

// Async function using the async/await syntax
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");

    // Check if the response status is OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data and return it
    return response.json();
  } catch (error) {
    // Handle errors during the fetch operation
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error for further handling
  }
}

// Using the fetchData function with async/await
async function getData() {
  try {
    const data = await fetchData();
    console.log("Data retrieved:", data);
  } catch (error) {
    // Handle errors from the fetchData function
    console.error("Error in data retrieval:", error);
  }
}

// Calling the async function
getData();

// In this example:

// The fetchData function is marked as async, indicating that it returns a promise. The await keyword is used inside the function to wait for the resolution of the fetch promise.
// The getData function is also marked as async, allowing the use of await when calling fetchData. This makes the code more readable and resembles synchronous code.
// Using promises with async/await syntax can greatly improve the readability and maintainability of asynchronous code in JavaScript. It allows you to handle asynchronous operations in a more sequential and natural way.

// *-*--***-*-*-*Local Storage*-*-*-*-*-*-*

// Maintaining state over time is a common requirement in web development, and one way to achieve this is by using localStorage. localStorage is a simple key-value store provided by web browsers that allows you to store data persistently on a user's device. It's particularly useful for storing small amounts of data such as user preferences, settings, or the current state of an application.

// Let's walk through the basics of using localStorage to maintain state over time:

// Storing Data in localStorage:
// You can use the localStorage.setItem(key, value) method to store data in the localStorage. The key is a string that acts as a unique identifier for the stored data.

// Storing data in localStorage
localStorage.setItem("username", "john_doe");
localStorage.setItem("theme", "dark");

// In this example, we're storing a username and a theme preference in localStorage.

// Retrieving Data from localStorage:

// To retrieve data from localStorage, you can use the localStorage.getItem(key) method.

// Retrieving data from localStorage
const username = localStorage.getItem("username");
const theme = localStorage.getItem("theme");

console.log("Username:", username);
console.log("Theme:", theme);

// Updating Data in localStorage:

// If you want to update the value associated with a key, you can simply set the key again with the new value

// Updating data in localStorage
localStorage.setItem("theme", "light");

// Now, the theme preference in localStorage is updated to 'light'.

// Removing Data from localStorage:
// To remove a specific item from localStorage, you can use the localStorage.removeItem(key) method.

// Removing data from localStorage
localStorage.removeItem("theme");

// This will remove the 'theme' key and its associated value from localStorage.

// Clearing All Data in localStorage:

// If you want to clear all data stored in localStorage, you can use the localStorage.clear() method.

// Clearing all data in localStorage
localStorage.clear();

// Be cautious when using localStorage.clear() because it will remove all data, not just a specific key-value pair.

// Using localStorage for State Persistence:

// You can use localStorage to persist the state of your application across page reloads or even when the user closes and reopens the browser. For example, you might use localStorage to remember user preferences, such as the selected theme, language, or other settings.

// Example: Storing and retrieving user preferences
// Set preferences
localStorage.setItem("theme", "dark");
localStorage.setItem("language", "english");

// Retrieve preferences
const theme1 = localStorage.getItem("theme");
const language = localStorage.getItem("language");

console.log("Theme:", theme1);
console.log("Language:", language);

// By utilizing localStorage in this way, your application can provide a more personalized experience for users, remembering their choices even after they leave and return to your site.

// Remember that localStorage has limitations, such as a storage capacity limit (usually around 5 MB per domain) and the fact that it's synchronous, meaning that reading and writing data are blocking operations. For more complex state management or larger datasets, you might want to explore other options like client-side databases or state management libraries.
