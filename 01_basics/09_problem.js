// Q: Write a JavaScript program to calculate the days left before Christmas.

const currentDate = new Date();

const christmasDate = new Date(currentDate.getFullYear(), 11, 25);

const timeDifference = christmasDate - currentDate;

const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

console.log(`There are ${daysLeft} days left until Christmas!`);
