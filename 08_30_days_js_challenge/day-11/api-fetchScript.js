// Fetch data using Promises
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data fetched using Promises:", data);
  })
  .catch((error) => {
    console.error("Error fetching data with Promises:", error);
  });

//---------------

// Fetch data using async/await
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Data fetched using async/await:", data);
  } catch (error) {
    console.error("Error fetching data with async/await:", error);
  }
};

// Call the async function
fetchData();
