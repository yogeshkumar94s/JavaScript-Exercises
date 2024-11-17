A script that includes functions for rotating an array by `k` positions and merging two sorted arrays into one sorted array:

```javascript
// Function to rotate an array by k positions
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // Handle cases where k is greater than the array length
  return arr.slice(-k).concat(arr.slice(0, -k));
}

// Function to merge two sorted arrays into one sorted array
function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

// Test the functions

// Test array rotation
let array = [1, 2, 3, 4, 5];
let k = 2;
console.log("Original Array:", array);
console.log("Rotated Array by", k, "positions:", rotateArray(array, k));

// Test merging sorted arrays
let sortedArray1 = [1, 3, 5, 7];
let sortedArray2 = [2, 4, 6, 8];
console.log("Sorted Array 1:", sortedArray1);
console.log("Sorted Array 2:", sortedArray2);
console.log(
  "Merged Sorted Array:",
  mergeSortedArrays(sortedArray1, sortedArray2)
);
```

### Explanation

1. **Rotate Array**:

   - **Function**: `rotateArray`
   - **Parameters**:
     - `arr`: The array to rotate.
     - `k`: Number of positions to rotate.
   - **Logic**:
     - Compute the effective rotation (`k % n`) where `n` is the length of the array.
     - Use `slice` to split the array into two parts: the last `k` elements and the rest.
     - Concatenate these two parts to achieve the rotated array.

2. **Merge Sorted Arrays**:
   - **Function**: `mergeSortedArrays`
   - **Parameters**:
     - `arr1`, `arr2`: The two sorted arrays to merge.
   - **Logic**:
     - Use two pointers (`i` and `j`) to iterate through both arrays.
     - Compare elements from both arrays and push the smaller element to the `merged` array.
     - Once one array is exhausted, append the remaining elements from the other array.
