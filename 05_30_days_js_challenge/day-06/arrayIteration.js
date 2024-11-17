// Initial array of elements
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Iterating over the array using a for loop
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// apple
// banana
// cherry
// date
// elderberry

// Iterating over the array using forEach method
console.log("Using forEach method:");
fruits.forEach(function (fruit) {
  console.log(fruit);
});
// Output:
// apple
// banana
// cherry
// date
// elderberry
