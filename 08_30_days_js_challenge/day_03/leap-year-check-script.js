function isLeapYear(year) {
  // Check if the year is divisible by 4
  if (year % 4 === 0) {
    // Check if the year is divisible by 100
    if (year % 100 === 0) {
      // If divisible by 100, check if it is also divisible by 400
      if (year % 400 === 0) {
        console.log(`${year} is a leap year.`);
      } else {
        console.log(`${year} is not a leap year.`);
      }
    } else {
      console.log(`${year} is a leap year.`);
    }
  } else {
    console.log(`${year} is not a leap year.`);
  }
}

// Test the function with different years
isLeapYear(2020); // Output: 2020 is a leap year.
isLeapYear(1900); // Output: 1900 is not a leap year.
isLeapYear(2000); // Output: 2000 is a leap year.
isLeapYear(2023); // Output: 2023 is not a leap year.
