'use strict';

/* 
// querySelector: this function returns the first element that matches the selector.
// textContent: this function returns the text content of the first element that matches the selector.
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎊 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// value: this function returns the value of the first element that matches the selector.
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); 
*/

// addEventListener: this function adds an event listener to the first element that matches the selector.

// Math.random: this function returns a random number between 0 and 1.
// Math.trunc: this function truncates a number to the nearest integer.

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    displayMessage('🚫 No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎊 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    // style: this function manipulates css properties
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  /*   // When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';

  console.log(document.querySelector('.number').textContent);
});

// 텍스트 콘텐츠가 포함된 요소와 함께 querySelector를 사용할 때 일반적으로 textContent를 사용하여 해당 요소 내의 텍스트를 검색하거나 수정합니다.
// 반면 <input>, <select> 또는 <textarea>와 같은 양식 요소로 작업할 때는 value 속성을 사용하여 현재 값을 가져오거나 설정합니다.
