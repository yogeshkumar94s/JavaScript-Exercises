function assignGrade(score) {
  let grade;

  // Ensure the score is within 0-100 range
  if (score < 0 || score > 100) {
    console.log("Invalid score. Please enter a score between 0 and 100.");
    return;
  }

  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    case score < 60:
      grade = "F";
      break;
  }

  console.log(`Your grade is: ${grade}`);
}

// Test the function with different scores
assignGrade(95); // Output: Your grade is: A
assignGrade(82); // Output: Your grade is: B
assignGrade(74); // Output: Your grade is: C
assignGrade(58); // Output: Your grade is: F
assignGrade(105); // Output: Invalid score. Please enter a score between 0 and 100.
