// Declare variables using let and const
let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1-100
let guessCount = 0;
const maxAttempts = 10;

// Function to check the guess
function checkGuess() {
  // Get the user's input from the DOM
  let userGuess = Number(document.getElementById("guessInput").value);
  let feedback = document.getElementById("feedback");
  guessCount++;

  // Conditional logic for feedback
  if (userGuess === randomNumber) {
    feedback.textContent = "Correct! You win!";
    feedback.style.color = "green";
    disableInput();
  } else if (userGuess > randomNumber) {
    feedback.textContent = "Too high! Try again.";
    feedback.style.color = "red";
  } else if (userGuess < randomNumber) {
    feedback.textContent = "Too low! Try again.";
    feedback.style.color = "red";
  }

  // Update guess count
  document.getElementById("guessCount").textContent = `Guesses: ${guessCount}`;

  // Check if max attempts are reached
  if (guessCount >= maxAttempts) {
    feedback.textContent = `Game Over! The number was ${randomNumber}.`;
    disableInput();
  }

  // Clear the input field
  document.getElementById("guessInput").value = "";
}

// Function to reset the game
function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessCount = 0;
  document.getElementById("feedback").textContent = "";
  document.getElementById("guessCount").textContent = "Guesses: 0";
  document.getElementById("guessInput").disabled = false;
  document.getElementById("guessInput").value = "";
}

// Function to disable input after winning or losing
function disableInput() {
  document.getElementById("guessInput").disabled = true;
}