'use strict';
 
// DOM Element Selection - The Foundation
console.log('=== DOM ELEMENT SELECTION ===');
 
// Select elements by class name
const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);
messageEl.textContent = 'Hello from JavaScript';
 
const scoreEl = document.querySelector('.score');
console.log(`Score element:`, scoreEl);
scoreEl.textContent = 50;
 
const numberEl = document.querySelector('.number')
//numberEl.textContent = 15;
 
const highscoreEl = document.querySelector('.highscor');
//highscoreEl.textContent = 100;
 
const guessEl = document.querySelector('.guess')
//guessEl.value = 17;
 
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`Secret Number`, secretNumber);
 
//Track the current Score// this is your current score
let score = 20;
let highscore = 0;
 
document.querySelector('.score').textContent = score;
document.querySelector('.highscore') .textContent = highscore;
 
console.log(`Game State Initialized`);
 
// Basic Game Logic
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);
 
  //check if our guess input valus is empty
  if (!guess) {
    document.querySelector('.message').textContent = 'Please input a number';
    return;
  }
  if (guess < 1 || guess > 20){
    document.querySelector('.message').textContent ='Number must be between 1 and 20';
    return;
  }
  if (guess === secretNumber) {
    console.log('Your guess is correct!');
    document.querySelector('.message').textContent = 'Correct Number 🎉';
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
    document.querySelector('.message').textContent = 'You have won!🎉'
    document.querySelector(`.guess`).disabled = true;
    document.querySelector(`.check`).disabled = true;
    document.body.style.backgroundColor = '#3abd06ff';
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'Too high! 🔥';
    score--;
    document.querySelector('.score').textContent = score;
    if(score < 1) {
      document.querySelector('.message').textContent = 'You lost the game! Press again!'
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'maroon';
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.guess').value = '';
    }
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = '📉 Too low! 🥺';
    score--;
    document.querySelector('.score').textContent = score;
    if(score < 1) {
      document.querySelector('.message').textContent = 'You lost the game! Press again!'
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'maroon';
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.guess').value = '';
    }
  }
});
 
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //restart the message display
  document.querySelector('.message').textContent = 'Start guessing...';
  //restart question mark or reveal secret number
  doocument.querySelector('.number').textContent = '?';
  //reset score display
  document.querySelector('.score').textContent = score;
  //clear input field
  document.querySelector('.guess').value = '';
  // enable input and check button
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.body.style.backgroundColor = '';
});
 