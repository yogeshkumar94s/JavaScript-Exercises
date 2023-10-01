// Q: Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

const randomNumber = Math.floor(Math.random() * 10 + 1);

const userGuess = parseInt(prompt("Enter the number"));

if (randomNumber === userGuess) {
  console.log("Good Work, You Guessed it right");
} else {
  console.log(`Try again, Right number was ${randomNumber}`);
}

// this code will work on web browser's console
