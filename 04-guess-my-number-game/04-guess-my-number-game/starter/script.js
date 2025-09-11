'use strict';
 
//CONSTANTS
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;
 
//Cached Selectors
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number')
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess')
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');
 
 
//UI HELPERS
function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(value) {
  numberEl.textContent = value;
}
function setScore(value) {
  scoreEl.textContent = value;
}
function setHighscore(value) {
  highscoreEl.textContent = value;
}
function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}
function clearInput() {
  guessEl.value = '';
}
 
 
//GAME STATES
 
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log(`Secret Number`, secretNumber);
 
//Track the current Score// this is your current score
let score = START_SCORE;
let highscore = 0;
//reset game state
function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}
 
function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}
renderInitialUI();
 
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