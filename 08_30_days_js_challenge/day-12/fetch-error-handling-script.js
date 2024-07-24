// Function to fetch data from a URL and handle errors using .catch()
function fetchDataWithCatch(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        // If the response status is not OK, throw an error
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the JSON from the response
    })
    .then((data) => {
      console.log("Data fetched with .catch():", data);
    })
    .catch((error) => {
      // Handle errors that occur during the fetch or while processing the response
      console.error("Error using .catch():", error.message);
    });
}

// Function to fetch data from a URL and handle errors using async/await
async function fetchDataAsync(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      // If the response status is not OK, throw an error
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON from the response
    console.log("Data fetched with async/await:", data);
  } catch (error) {
    // Handle errors that occur during the fetch or while processing the response
    console.error("Error using async/await:", error.message);
  }
}

// Test URLs
const invalidUrl = "https://api.example.com/invalid-endpoint";

// Call functions with an invalid URL
fetchDataWithCatch(invalidUrl);
fetchDataAsync(invalidUrl);
