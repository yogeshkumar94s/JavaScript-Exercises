// Q: Write a JavaScript program to determine whether a given year is a leap year

// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       return year % 400 === 0;
//     } else {
//       return true;
//     }
//   } else {
//     return false;
//   }
// }

// const year = 2024;

// if (isLeapYear(year)) {
//   console.log(`${year} is a Leap year.`);
// } else {
//   console.log(`${year} is not a leap year.`);
// }

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const year = 2023;

if (isLeapYear(year)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
