// Create variables
var wins = 0;
var losses = 0;
var guessesLeft;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var computerChoices = alphabet.split("");
var computerGuess;
var lettersGuessed = [];
var gameRunning = false;


// Create a function to start new game
function newGame() {

  gameRunning = true;
  
  // Computer picks letter
  var randomIndex = Math.floor(Math.random() * computerChoices.length);
  computerGuess = computerChoices[randomIndex];

  // Reset userGuess and write to document
  userGuess = "";
  document.getElementById("userGuess").innerHTML = userGuess;

  // Reset guessesLeft and write to document
  guessesLeft = 10;
  document.getElementById("guessesLeft").innerText = guessesLeft;

  // Reset Guessed Letters array and write to document
  lettersGuessed = [];
  document.getElementById("guessedLetters").innerText = lettersGuessed;

  document.getElementById("results").innerText = "";
};


// Create a function to play the game beginning with user key press
document.onkeyup = function(event) {

  if (!gameRunning || !computerChoices.includes(event.key)) {
    return false;
  };

  // Capture key pressed and store in variable
  var userGuess = event.key;

  document.getElementById("userGuess").innerText = userGuess;

  // Compare userGuess with computerGuess
  if (userGuess === computerGuess) {

    // Win and print to document
    wins++;
    document.getElementById("wins").innerText = wins;
    
    // Alert user they won
    document.getElementById("results").innerText = `Congrats, you won!`;
    
    // Turn game off
    gameRunning = false;
  }
  
  else {
    
    // Minus one guess
    guessesLeft--;
    document.getElementById("guessesLeft").innerText = guessesLeft;
    
    // Add letter guessed to lettersGuessed array
    lettersGuessed.push(` ${userGuess}`);
    
    
    // Write lettersGuessed array to document
    document.getElementById("guessedLetters").innerText = lettersGuessed;
    
  };
  
  // Create
  if (guessesLeft <= 0) {
    
    // Lose
    losses++;
    document.getElementById("losses").innerText = losses;
    
    // Alert user they lost
    document.getElementById("results").innerText = `Bummer, you lost!`;
    
    // Turn game off
    gameRunning = false;
    
  };
  
};

document.getElementById("newGame").addEventListener("click", newGame);