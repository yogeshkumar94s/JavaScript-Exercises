function checkVotingEligibility(age) {
  // Minimum voting age
  const votingAge = 18;

  if (age >= votingAge) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not eligible to vote.");
  }
}

// Test the function with different ages
checkVotingEligibility(20); // Output: You are eligible to vote.
checkVotingEligibility(16); // Output: You are not eligible to vote.
checkVotingEligibility(18); // Output: You are eligible to vote.
