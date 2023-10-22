"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent='Correct Number🎉'

document.querySelector('.number').textContent = 23;
document.querySelector('.score').textContent = 13;


// here we can take or set value on input field with ".value" method
document.querySelector('.guess').value=15;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector(".score").textContent = score;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No number! ⛔";
    displayMessage("No number! ⛔");
  }
  // When Player wins
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number🎉";
    displayMessage("Correct Number🎉");
    document.querySelector(".number").textContent = secretNumber;
    // manupulating page background using css
    document.querySelector("body").style.backgroundColor = "#60b347";
    // changing width after correct guess
    document.querySelector(".number").style.width = "30rem";
    // implementing high score
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // If guess not equal to a secret number
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent = guess>secretNumber ? "Too high 📈" : "Too low 📉";
      displayMessage(guess > secretNumber ? "Too high 📈" : "Too low 📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost ☹️";
      document.querySelector(".score").textContent = 0;
    }
  }

  //  //if guess is high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too high 📈";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost ☹️";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  // // if guess is low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too low 📉";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost ☹️";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

/*Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK �*/

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  // document.querySelector(".message").textContent = "Start Guessing...";
  displayMessage("Start Guessing...");
});
