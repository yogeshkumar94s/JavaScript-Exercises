## Problem 1: Two Sum

**Problem Statement**:
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

**Solution**:

```javascript
function twoSum(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
```

## Problem 2: Reverse Integer

**Problem Statement**:
Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range, then return 0.

**Solution**:

```javascript
function reverse(x) {
  const limit = 2147483648; // 2^31
  const sign = x < 0 ? -1 : 1;
  const reversed =
    parseInt(String(Math.abs(x)).split("").reverse().join("")) * sign;
  if (reversed < -limit || reversed > limit - 1) {
    return 0;
  }
  return reversed;
}

// Example usage:
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
console.log(reverse(0)); // Output: 0
```

## Problem 3: Palindrome Number

**Problem Statement**:
Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

**Solution**:

```javascript
function isPalindrome(x) {
  if (x < 0) return false;
  const str = x.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Example usage:
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
```

## Generated Questions

1. **Problem**: Find the Single Number
   **Description**: Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.

2. **Problem**: Intersection of Two Arrays II
   **Description**: Given two arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays.

3. **Problem**: Move Zeroes
   **Description**: Given an array `nums`, move all `0`s to the end while maintaining the relative order of the non-zero elements.

4. **Problem**: Remove Duplicates from Sorted Array
   **Description**: Given a sorted array `nums`, remove the duplicates in-place such that each element appears only once and return the new length.

5. **Problem**: Best Time to Buy and Sell Stock
   **Description**: Given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day, find the maximum profit you can achieve.

6. **Problem**: Valid Anagram
   **Description**: Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

7. **Problem**: Merge Two Sorted Lists
   **Description**: Merge two sorted linked lists and return it as a sorted list.

8. **Problem**: Maximum Subarray
   **Description**: Given an integer array `nums`, find the contiguous subarray which has the largest sum and return its sum.

9. **Problem**: Climbing Stairs
   **Description**: You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

10. **Problem**: Plus One
    **Description**: Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

---

## writing a function that finds the indices of two numbers that add up to a target.

```javascript
function findTwoSumIndices(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
}

// Test cases
console.log(findTwoSumIndices([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(findTwoSumIndices([3, 2, 4], 6)); // Output: [1, 2]
console.log(findTwoSumIndices([3, 3], 6)); // Output: [0, 1]
```

### Generated Similar Tasks

1. **Task**: Write a function that takes an array of numbers and returns the pair of numbers that add up to the largest sum. Log the pair for a few test cases.

2. **Task**: Write a function that takes an array of numbers and a target number, and returns `true` if there are any two numbers in the array that add up to the target. Log the result for a few test cases.

3. **Task**: Write a function that takes a sorted array of numbers and a target number, and returns the indices of the two numbers that add up to the target using a two-pointer technique. Log the indices for a few test cases.

4. **Task**: Write a function that takes an array of numbers and returns the indices of the two smallest numbers in the array. Log the indices for a few test cases.

5. **Task**: Write a function that takes an array of numbers and a target number, and returns the indices of the three numbers that add up to the target. Log the indices for a few test cases.

6. **Task**: Write a function that takes an array of numbers and returns the indices of the two largest numbers in the array. Log the indices for a few test cases.

7. **Task**: Write a function that takes an array of numbers and returns an array of all unique pairs of numbers that add up to zero. Log the pairs for a few test cases.

8. **Task**: Write a function that takes an array of numbers and a target number, and returns all unique triplets in the array that add up to the target. Log the triplets for a few test cases.

9. **Task**: Write a function that takes an array of numbers and a target number, and returns `true` if there are any three numbers in the array that add up to the target. Log the result for a few test cases.

10. **Task**: Write a function that takes an array of numbers and returns the indices of two numbers whose product is maximum. Log the indices for a few test cases.

---

### a function that takes an integer and returns it with its digits reversed, handling edge cases like negative numbers and numbers ending in zero.

```javascript
function reverseInteger(num) {
  const isNegative = num < 0;
  const reversedNumStr = Math.abs(num).toString().split("").reverse().join("");
  const reversedNum = parseInt(reversedNumStr) * (isNegative ? -1 : 1);
  return reversedNum;
}

// Test cases
console.log(reverseInteger(12345)); // Output: 54321
console.log(reverseInteger(-12345)); // Output: -54321
console.log(reverseInteger(1000)); // Output: 1
console.log(reverseInteger(0)); // Output: 0
console.log(reverseInteger(-100)); // Output: -1
```

### Generated Similar Tasks

1. **Task**: Write a function that takes an integer and returns the sum of its digits. Handle edge cases like negative numbers. Log the sum for a few test cases.

2. **Task**: Write a function that takes an integer and returns a boolean indicating whether it is a palindrome. Handle edge cases like negative numbers and single-digit numbers. Log the result for a few test cases.

3. **Task**: Write a function that takes an integer and returns the number with its digits sorted in ascending order. Handle edge cases like negative numbers and numbers with repeated digits. Log the sorted integers for a few test cases.

4. **Task**: Write a function that takes an integer and returns the number of digits in it. Handle edge cases like negative numbers and zero. Log the number of digits for a few test cases.

5. **Task**: Write a function that takes an integer and returns the factorial of the number. Handle edge cases like negative numbers and zero. Log the factorial for a few test cases.

6. **Task**: Write a function that takes an integer and returns the integer formed by squaring each of its digits. Handle edge cases like negative numbers. Log the result for a few test cases.

7. **Task**: Write a function that takes an integer and returns the number with alternating digits negated (e.g., 1234 becomes -1, 2, -3, 4). Handle edge cases like negative numbers. Log the result for a few test cases.

8. **Task**: Write a function that takes an integer and returns the next largest integer that can be formed using its digits. Handle edge cases where the next largest integer does not exist. Log the result for a few test cases.

9. **Task**: Write a function that takes an integer and returns a boolean indicating whether all its digits are unique. Handle edge cases like negative numbers. Log the result for a few test cases.

10. **Task**: Write a function that takes an integer and returns a new integer formed by inserting zeros between each digit (e.g., 123 becomes 10203). Handle edge cases like negative numbers. Log the result for a few test cases.

---

### a function that takes an integer and returns true if it is a palindrome and false otherwise.

```javascript
function isPalindrome(num) {
  const str = num.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Test cases
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(-12321)); // Output: false
console.log(isPalindrome(1001)); // Output: true
console.log(isPalindrome(123)); // Output: false
console.log(isPalindrome(-101)); // Output: false
```

### Generated Similar Tasks

1. **Task**: Write a function that takes a string and returns true if it is a palindrome, and false otherwise. Log the result for a few test cases, including edge cases like empty strings and single-character strings.

2. **Task**: Write a function that takes a string and returns the count of vowels in it. Handle edge cases like empty strings and strings with no vowels. Log the result for a few test cases.

3. **Task**: Write a function that takes a string and returns true if it contains all unique characters, and false otherwise. Log the result for a few test cases.

4. **Task**: Write a function that takes an integer and returns true if it is a prime number, and false otherwise. Log the result for a few test cases.

5. **Task**: Write a function that takes a string and returns the longest word in the string. Handle edge cases like empty strings and strings with multiple words of the same length. Log the result for a few test cases.

6. **Task**: Write a function that takes an integer and returns the sum of its digits. Handle edge cases like negative numbers. Log the result for a few test cases.

7. **Task**: Write a function that takes an array of numbers and returns the second largest number in the array. Handle edge cases like arrays with less than two elements. Log the result for a few test cases.

8. **Task**: Write a function that takes a string and returns it with the first letter of each word capitalized. Handle edge cases like empty strings and single-word strings. Log the result for a few test cases.

9. **Task**: Write a function that takes a string and returns the most frequent character in it. Handle edge cases like empty strings and strings with all unique characters. Log the result for a few test cases.

10. **Task**: Write a function that takes an array of numbers and returns the mode (the number that appears most frequently). Handle edge cases like arrays with no repeating numbers. Log the result for a few test cases.

---

### define a basic linked list structure with a Node class and a LinkedList class. Then, we will implement the function to merge two sorted linked lists

First, let's define a basic linked list structure with a Node class and a LinkedList class. Then, we will implement the function to merge two sorted linked lists.

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  display() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

function mergeTwoSortedLists(l1, l2) {
  const dummy = new Node(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.value < l2.value) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;
  return dummy.next;
}

// Test cases
const list1 = new LinkedList();
list1.add(1);
list1.add(3);
list1.add(5);
list1.display();

const list2 = new LinkedList();
list2.add(2);
list2.add(4);
list2.add(6);
list2.display();

const mergedHead = mergeTwoSortedLists(list1.head, list2.head);
const mergedList = new LinkedList();
mergedList.head = mergedHead;
mergedList.display();
```

### Generated Similar Tasks

1. **Task**: Write a function that takes a linked list and an integer `n`, and returns the `n`-th node from the end of the list. Log the result for a few test cases.

2. **Task**: Write a function that takes a linked list and reverses it. Log the reversed list for a few test cases.

3. **Task**: Write a function that takes a linked list and removes all duplicate values. Log the resulting list for a few test cases.

4. **Task**: Write a function that takes two linked lists and returns the intersection node, if any. Log the intersection node for a few test cases.

5. **Task**: Write a function that takes a linked list and determines if it contains a cycle. Log whether the list has a cycle for a few test cases.

6. **Task**: Write a function that takes a sorted linked list and removes all nodes that have duplicate numbers, leaving only distinct numbers. Log the resulting list for a few test cases.

7. **Task**: Write a function that takes a linked list and a value, and removes the first occurrence of that value from the list. Log the resulting list for a few test cases.

8. **Task**: Write a function that takes two linked lists and returns a new linked list representing the sum of the two numbers, where each node contains a single digit. The digits are stored in reverse order. Log the resulting list for a few test cases.

9. **Task**: Write a function that takes a linked list and partitions it around a value `x`, such that all nodes less than `x` come before nodes greater than or equal to `x`. Log the resulting list for a few test cases.

10. **Task**: Write a function that takes a linked list and checks if it is a palindrome. Log whether the list is a palindrome for a few test cases.

---

## Write a function that takes a string containing just the characters '(', ')', '{', '}', '['and']', and determines if the input string is valid. A string is valid if open brackets are closed in the correct order. Log the result for a few test cases.

Let's write a function to determine if a string containing just the characters '(', ')', '{', '}', '[' and ']' is valid.

```javascript
function isValid(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (map[char]) {
      // If the character is an opening bracket, push its corresponding closing bracket onto the stack.
      stack.push(map[char]);
    } else {
      // If the character is a closing bracket, check if it matches the top of the stack.
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets were matched correctly.
  return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("")); // true
console.log(isValid("{[()]()}")); // true
console.log(isValid("{[}")); // false
console.log(isValid("[[[]]]")); // true
console.log(isValid("[(])")); // false
```

### Generated Similar Tasks

1. **Task**: Write a function that takes a string containing just the characters '0' to '9' and '+', '-', '\*', '/', and evaluates the mathematical expression. Log the result for a few test cases.

2. **Task**: Write a function that takes a string containing letters and digits, and returns the string with letters reversed but digits in the same place. Log the result for a few test cases.

3. **Task**: Write a function that takes a string and returns the first non-repeating character. Log the result for a few test cases.

4. **Task**: Write a function that takes a string and checks if it is a valid palindrome, ignoring spaces and punctuation. Log the result for a few test cases.

5. **Task**: Write a function that takes two strings and checks if one is a permutation of the other. Log the result for a few test cases.

6. **Task**: Write a function that takes a string and returns all the permutations of the string. Log the permutations for a few test cases.

7. **Task**: Write a function that takes a string and compresses it using the counts of repeated characters (e.g., "aabcccccaaa" becomes "a2b1c5a3"). Log the compressed string for a few test cases.

8. **Task**: Write a function that takes a string containing letters and returns the longest substring without repeating characters. Log the length of the substring for a few test cases.

9. **Task**: Write a function that takes two strings and checks if they are anagrams of each other. Log the result for a few test cases.

10. **Task**: Write a function that takes a string and checks if it contains balanced number of 'a's and 'b's. Log the result for a few test cases.
