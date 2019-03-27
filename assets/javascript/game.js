// Create variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var computerChoices = alphabet.split("");

// Tell browswer that whenever user releases a key on the keyboard, run this function
document.onkeyup = function(event) {

  // Capture key pressed and store in variable
  var userGuess = event.key;

  // Generate a computer guess by selecting one of the choices in array above at random
  var randomIndex = Math.floor(Math.random() * computerChoices.length);

  var computerGuess = computerChoices[randomIndex];

  // Compare userGuess with computerGuess
  if (userGuess === computerGuess) {
    // Win
    win++;
  }
  else {
    // Minus one life
    guessesLeft = (guessesLeft - 1);
  }

  // Guesses Left

    // If guesses left > 0, guess again

    // If guesses = 0, user loses
  
};

// Computer picks letter
// User presses letter
  // If letter is same as Computer, user wins
  // If letter is not the same as Computer
    // Guesses left -1
    // When guesses left = 0, user loses
// Game resets