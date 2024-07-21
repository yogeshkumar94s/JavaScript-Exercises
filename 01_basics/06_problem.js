// Q: Write a JavaScript program to determine whether a given year is a leap year

const checkLeapYear = (year) => {
  if (year % 4 === 0) return `The year :  ${year} is a leap year`;

  return `The year : ${year} is not a leap year`;
};

console.log(checkLeapYear(2025));
