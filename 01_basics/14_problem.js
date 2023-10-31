//find the most frequent element in an array

// -- to solve this problem, first we need to understand the reduce() method.

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const totalSum = array1.reduce((acc, curVal) => acc + curVal, 0); // acc = its like totalSum (final result), for the first iteration its value is 0 (second argument of the callback) .
// // curVal = current value, this is the current element of the array as we iterate through it.
// // this callback function start with the acc value 0 and curVal value 1 and return the 0 + 1. This result become the new acc value for the second iteration.
// console.log(totalSum);

// function findMostFrequentElement(arr) {
//   // Create an object to store element counts
//   const elementCounts = {};

//   // Use the reduce method to count element occurrences
//   const mostFrequent = arr.reduce((mostFrequentElement, currentElement) => {
//     // Initialize the count for the current element
//     elementCounts[currentElement] = (elementCounts[currentElement] || 0) + 1;

//     // Update the most frequent element if needed
//     if (elementCounts[currentElement] > elementCounts[mostFrequentElement]) {
//       return currentElement;
//     } else {
//       return mostFrequentElement;
//     }
//   }, arr[0]); // Initialize with the first element

//   return mostFrequent;
// }

// const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// const mostFrequentElement = findMostFrequentElement(array);
// console.log(mostFrequentElement); // Output: 4

//--------//-----------//
// 1.0 Calculate the Total Price of Items in a Shopping Cart:

const shoppingCart = [
  { item: "Shirt", price: 25 },
  { item: "Shoes", price: 35 },
  { item: "Jeans", price: 30 },
];

const totalPrice = shoppingCart.reduce((acc, curItem) => {
  return acc + curItem.price;
}, 0);

console.log(totalPrice);

// 2. Find the Longest Word in a Sentence:
const sentense = "This is a sample sentence with some long words";
const array = sentense.split(" ");

const logestWord = array.reduce((longest, currentWord) => {
  return currentWord.length > longest.length ? currentWord : longest;
}, "");

console.log(logestWord);

// 3. Grouping Items by Category
const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Banana", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Torch", category: "Electronic" },
  { name: "Almonds", category: "Dry Fruits" },
  { name: "Brinjal", category: "Vegetable" },
  { name: "T-Shirt", category: "Cloths" },
];

const groupedItems = items.reduce((result, currentItem) => {
  if (!result[currentItem.category]) {
    result[currentItem.category] = [];
  }
  result[currentItem.category].push(currentItem.name);
  return result;
}, {});

console.log(groupedItems);
// console.log(typeof groupedItems); // object

// {
//     Fruit: [ 'Apple', 'Banana' ],
//     Vegetable: [ 'Carrot', 'Brinjal' ],
//     Electronic: [ 'Torch' ],
//     'Dry Fruits': [ 'Almonds' ],
//     Cloths: [ 'T-Shirt' ]
// }
