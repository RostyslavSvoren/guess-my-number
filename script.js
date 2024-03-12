'use strict';

let score = 20;
let highScore = 0;
let guess = '';
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const startGame = function () {
  guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.score').textContent = --score;

      document.querySelector('.message').textContent = ' 📈 Too high!';
    } else {
      document.querySelector('.message').textContent =
        '💥 You lose the game! Try again.';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.score').textContent = --score;

      document.querySelector('.message').textContent = '📉 Too low!';
    } else {
      document.querySelector('.message').textContent =
        '💥 You lose the game! Try again.';
      document.querySelector('.score').textContent = 0;
    }
  }
};

const newGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', startGame);

document.querySelector('.again').addEventListener('click', newGame);
