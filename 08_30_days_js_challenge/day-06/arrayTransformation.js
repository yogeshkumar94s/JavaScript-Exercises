// Initial array of student objects
let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 58 },
  { name: "Charlie", score: 95 },
  { name: "David", score: 73 },
  { name: "Eve", score: 64 },
];

// 1. Use map to create an array of student names
let studentNames = students.map((student) => student.name);
console.log("Student Names:", studentNames);
// Output: ["Alice", "Bob", "Charlie", "David", "Eve"]

// 2. Use filter to create an array of students who passed (score >= 60)
let passingStudents = students.filter((student) => student.score >= 60);
console.log("Passing Students:", passingStudents);
// Output:
// [
//   { name: "Alice", score: 85 },
//   { name: "Charlie", score: 95 },
//   { name: "David", score: 73 },
//   { name: "Eve", score: 64 }
// ]

// 3. Use reduce to calculate the average score of the students
let totalScore = students.reduce((total, student) => total + student.score, 0);
let averageScore = totalScore / students.length;
console.log("Average Score:", averageScore);
// Output: 75

// Combined example:
// Get names of students who passed, uppercase their names,
// and calculate the average score of passing students
let passingStudentNames = students
  .filter((student) => student.score >= 60)
  .map((student) => student.name.toUpperCase());
console.log("Passing Student Names (Uppercase):", passingStudentNames);
// Output: ["ALICE", "CHARLIE", "DAVID", "EVE"]

let totalPassingScore = students
  .filter((student) => student.score >= 60)
  .reduce((total, student) => total + student.score, 0);
let averagePassingScore = totalPassingScore / passingStudents.length;
console.log("Average Passing Score:", averagePassingScore);
// Output: 79.25
