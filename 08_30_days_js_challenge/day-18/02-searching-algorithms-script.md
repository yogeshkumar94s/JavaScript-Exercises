A script that implements both Linear Search and Binary Search algorithms to find values in arrays:

```javascript
// Linear Search Algorithm
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index of the target value
    }
  }
  return -1; // Return -1 if the target is not found
}

// Binary Search Algorithm
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index of the target value
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }
  return -1; // Return -1 if the target is not found
}

// Test the search algorithms
let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let targetLinear = 40;
let targetBinary = 70;

// Linear Search
let linearSearchResult = linearSearch(array, targetLinear);
console.log(
  `Linear Search: The target ${targetLinear} is at index ${linearSearchResult}`
);

// Binary Search (array must be sorted for binary search)
let binarySearchResult = binarySearch(array, targetBinary);
console.log(
  `Binary Search: The target ${targetBinary} is at index ${binarySearchResult}`
);
```

### Explanation

1. **Linear Search**:

   - Iterates through each element of the array one by one.
   - Compares each element to the target value.
   - Returns the index of the target value if found; otherwise, returns `-1`.

2. **Binary Search**:
   - Assumes that the array is sorted.
   - Repeatedly divides the search interval in half.
   - Compares the target value to the middle element of the array.
   - Adjusts the search interval based on the comparison and continues until the target is found or the interval is empty.
   - Returns the index of the target value if found; otherwise, returns `-1`.

The script includes test cases for both search algorithms. Linear Search works on unsorted arrays, while Binary Search requires the array to be sorted.
