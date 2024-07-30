A script that includes implementations for Bubble Sort, Selection Sort, and Quick Sort algorithms to sort arrays in ascending order:

```javascript
// Bubble Sort Algorithm
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Selection Sort Algorithm
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found minimum element with the first element
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

// Quick Sort Algorithm
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = arr.filter((x) => x < pivot);
  let middle = arr.filter((x) => x === pivot);
  let right = arr.filter((x) => x > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Test the sorting algorithms
let array = [64, 25, 12, 22, 11];

console.log("Original array:", array);

// Bubble Sort
let bubbleSortedArray = [...array];
console.log("Bubble Sort:", bubbleSort(bubbleSortedArray));

// Selection Sort
let selectionSortedArray = [...array];
console.log("Selection Sort:", selectionSort(selectionSortedArray));

// Quick Sort
let quickSortedArray = [...array];
console.log("Quick Sort:", quickSort(quickSortedArray));
```

### Explanation

1. **Bubble Sort**:

   - Iterates through the array multiple times, comparing adjacent elements and swapping them if they are in the wrong order.
   - This process continues until the array is sorted.

2. **Selection Sort**:

   - Finds the minimum element from the unsorted portion of the array and places it at the beginning.
   - Continues this process with the remaining unsorted elements.

3. **Quick Sort**:
   - Selects a pivot element and partitions the array into elements less than the pivot, elements equal to the pivot, and elements greater than the pivot.
   - Recursively applies the same process to the left and right partitions.
