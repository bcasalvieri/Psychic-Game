// Create variables
var wins = 0;
var losses = 0;
var guessesLeft;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var computerChoices = alphabet.split("");
var computerGuess;
var lettersGuessed = [];
var gameRunning = false;
var userName;

window.onload = function() {
  userName = prompt(`What is your name?`);
};

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

function letterAlreadyGuessed(userGuess) {
  if (lettersGuessed.includes(userGuess)) {
    alert(`You've already guessed this letter!`);
    return false;
  }

  else {
    // Add letter guessed to lettersGuessed array
    lettersGuessed.push(userGuess);
    var $lettersGuessed = lettersGuessed.join(`, `);
    document.getElementById("guessedLetters").textContent = $lettersGuessed;

    // Compare userGuess with computerGuess
    if (userGuess === computerGuess) {
  
      // Win and print to document
      wins++;
      document.getElementById("wins").innerText = wins;
      
      // Alert user they won
      document.getElementById("results").innerText = `Your psychic powers are strong, ${userName}!`;
      
      // Turn game off
      gameRunning = false;
    }
    
    else {
      
      // Minus one guess
      guessesLeft--;
      document.getElementById("guessesLeft").innerText = guessesLeft;
      
    };
    
    // Create
    if (guessesLeft <= 0) {
      
      // Lose
      losses++;
      document.getElementById("losses").innerText = losses;
      
      // Alert user they lost
      document.getElementById("results").innerText = `Are you sure you're psychic, ${userName}! The letter was: ${computerGuess}.`;
      
      // Turn game off
      gameRunning = false;
      
    };
  };
};

// Create a function to play the game beginning with user key press
document.onkeyup = function(event) {

  if (!gameRunning || !computerChoices.includes(event.key)) {
    return false;
  }
  
  else {
    // Capture key pressed and store in variable
    var userGuess = event.key;

    // Print user guess to page
    document.getElementById("userGuess").innerText = userGuess;
    
    // Run letterAlreadyGuessed function
    letterAlreadyGuessed(userGuess);

  };

};
  

document.getElementById("newGame").addEventListener("click", newGame);