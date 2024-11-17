// Break:----------------
// The break statement is used within loops (for, while, or switch) to exit the loop prematurely. It allows you to terminate the loop based on a certain condition.

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Exit the loop when i is 3
  }
  console.log(i);
}
// Outputs: 0, 1, 2

//   Continue:---------------
//   The continue statement is used within loops to skip the rest of the current iteration and move on to the next one. It allows you to bypass certain code within the loop based on a condition.

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip the rest of the loop body when i is 2
  }
  console.log(i);
}
// Outputs: 0, 1, 3, 4
