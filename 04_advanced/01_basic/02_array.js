// What is an array in JavaScript?
// An array is a data structure that stores a collection of elements. Each element in an array is identified by an index.

const myFruits = ["banana", "apple", "mango", "guava"];

const firstElement = myFruits[0];
console.log(firstElement); // banana

//How to add elements to an array?
//1.0 using push() method
myFruits.push("grapes", "papaya"); // grapes and papaya will be added at the end of the array

console.log(myFruits);

//2.0 using a specific indices number
// myFruits[2] = "kiwi"; // it will override the value of index number 2
// console.log(myFruits);

//How to remove elements from an array?
console.log(myFruits);

myFruits.pop(); // remove the last element
console.log(myFruits);

myFruits.shift(); // remove the first element
console.log(myFruits);

myFruits.splice(1, 2); // remove one element from index number one 1 = index no. // 2 = no. element to be removed
console.log(myFruits);

//How to iterate over elements in an array?
// for iteration over array, we can use for loop or array methods like forEach;

const myFruits3 = ["banana", "apple", "mango", "guava"];

let newArray = [];
for (let i = 0; i < myFruits3.length; i++) {
  newArray.push(myFruits3[i].toUpperCase());
}
console.log(newArray);

// using forEach

let myNewArray = [];
myFruits3.forEach((fruit) => myNewArray.push(fruit.toUpperCase()));
console.log(myNewArray);

// How to check if an element exists in an array?
console.log(myNewArray.includes("banana")); // false
console.log(myNewArray.includes("BANANA")); // true

// What is the difference between slice() and splice()?

// slice() creates a new array containing elements from a specified start to end index, while splice() changes the contents of an array by removing or replacing existing elements.

const myGadgets = [
  "mobile",
  "computer",
  "headphone",
  "game",
  "keyboard",
  "mouse",
];

const myNewGadgetsList = myGadgets.slice(2, 5); // create new array containing elements from indexNo. 2 to indexNo. 5
// 2= included 5= excluded
console.log(myNewGadgetsList);

console.log(myGadgets);

const myGadgetsList2 = myGadgets.splice(2, 5);
console.log(myGadgetsList2);
console.log(myGadgets);

//map
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => {
  return num ** 2;
});
console.log(squaredNumbers);

//filter
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//reduce// The reduce() method is used to accumulate values of an array into a single result.
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((acc, curVal) => acc + curVal, 0);
console.log(sum);
