let rows = 5; // Number of rows for the pattern

console.log("Star Pattern:");

for (let i = 1; i <= rows; i++) {
  let stars = "";

  // Inner loop to handle the number of stars in each row
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }

  console.log(stars);
}

//--------------

let rows1 = 5; // Number of rows for the pyramid pattern

console.log("Pyramid Star Pattern:");

for (let i = 1; i <= rows1; i++) {
  let stars = "";
  let spaces = " ".repeat(rows1 - i); // Spaces before the stars

  // Add spaces
  stars += spaces;

  // Add stars
  for (let j = 1; j <= 2 * i - 1; j++) {
    stars += "*";
  }

  console.log(stars);
}
