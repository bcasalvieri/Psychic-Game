// NOTES:
  // Can you add an OR into the for loop? --> loop ends when guessesLeft = 0 or userGuess === computerGuess
  // Push userGuess to guessedLetter array --> guessedLetter.push(userGuess)
  // Print guessedLetter array to the HTML document --> drink list activity - jQuery activity 2
  // New game function!!! Resets computerGuess, guessesLeft, and guessedLetters



// Create variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var computerChoices = alphabet.split("");
var computerGuess;
var lettersGuessed = [];

// Create a function to start new game
function newGame() {
  
  // Computer picks letter
  var randomIndex = Math.floor(Math.random() * computerChoices.length);
  
  computerGuess = computerChoices[randomIndex];

  console.log(computerGuess);

  // Reset Guesses Left
  guessesLeft = 10;

  // Print to document
  var guesses

  // Reset Guessed Letters array
  lettersGuessed = [];

  // Print to document


}


// Create a function to play the game beginning with user key press
document.onkeyup = function(event) {

  // Capture key pressed and store in variable
  var userGuess = event.key;

  // Compare userGuess with computerGuess
  if (userGuess === computerGuess) {

    // Win
    win++;

    // New Game
    newGame();
  }

  else {

    // Minus one guess
    guessesLeft = (guessesLeft - 1);

    // Add letter guessed to lettersGuessed array
    lettersGuessed.push(userGuess);

    // Print lettersGuessed array to document

  };

  // Create
  if (guessesLeft <= 0) {
    
    // Lose
    losses++;

    //New Game
    newGame();

  };
  
};