function getDayOfWeek(dayNumber) {
  let dayName;

  switch (dayNumber) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
    case 3:
      dayName = "Tuesday";
      break;
    case 4:
      dayName = "Wednesday";
      break;
    case 5:
      dayName = "Thursday";
      break;
    case 6:
      dayName = "Friday";
      break;
    case 7:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day number. Please enter a number between 1 and 7.";
  }

  console.log(dayName);
}

// Test the function with different numbers
getDayOfWeek(1); // Output: Sunday
getDayOfWeek(5); // Output: Thursday
getDayOfWeek(7); // Output: Saturday
getDayOfWeek(8); // Output: Invalid day number. Please enter a number between 1 and 7.
