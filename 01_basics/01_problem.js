/*   Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38      */

const now = new Date();
const daysOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const dayIndex = now.getDay();

// Get the current hour, minute, and second
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// Determine if it's AM or PM
const amOrpm = hours >= 12 ? "PM" : "AM";
const hours12 = hours % 12 || 12;
const formattedDayTime = `today is : ${daysOfWeek[dayIndex]}. 
Current time is: ${hours12} ${amOrpm} : ${minutes} : ${seconds}
`;

console.log(formattedDayTime);
