// Combining arrays with the spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const combinedArray = [...array1, ...array2, ...array3];

console.log(combinedArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//---------------------------------------

// Function to sum multiple numbers using the rest operator
function sum(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(10, 20, 30, 40)); // Output: 100

//-------------------------------------

// Combining arrays with the spread operator
const fruits = ["apple", "banana", "cherry"];
const vegetables = ["carrot", "lettuce", "spinach"];
const combinedFood = [...fruits, ...vegetables];

console.log(combinedFood);
// Output: ['apple', 'banana', 'cherry', 'carrot', 'lettuce', 'spinach']

// Function to handle multiple arguments using the rest operator
function describeFood(first, second, ...others) {
  console.log(`First food: ${first}`);
  console.log(`Second food: ${second}`);
  console.log(`Other foods: ${others.join(", ")}`);
}

describeFood(...combinedFood);
// Output:
// First food: apple
// Second food: banana
// Other foods: cherry, carrot, lettuce, spinach
