'use strict';
// Hour 1: Game Foundation & Dice Rolling
console.log('=== PIG GAME DEVELOPMENT: FOUNDATION & DICE ROLLING ===');
 
// SECTION 1
let scores, currentScore, activePlayer, playing;
 
// Element selections
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
 
// Initialize game
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
 
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
};
init();
 
// Updated roll dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
 
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Use our new switchPlayer function
      switchPlayer();
      console.log('Active Player:', activePlayer);
      console.log('Player 0 active:', player0El.classList.contains('player--active'));
      console.log('Player 1 active:', player1El.classList.contains('player--active'));
    }
  }
});
 
// Hour 2: Player Switching & Hold Functionality
 
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
 
const btnHold = document.querySelector('.btn--hold');
btnHold.addEventListener('click', function () {
  if (playing && currentScore > 0) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
 
    switchPlayer();
  }
});
 
// Test complete game state
console.log('Scores:', scores);
console.log('Current Score:', currentScore);
console.log('Active Player:', activePlayer);
console.log('Playing:', playing);
console.log('Player 0 active:', player0El.classList.contains('player--active'));
console.log('Player 1 active:', player1El.classList.contains('player--active'));