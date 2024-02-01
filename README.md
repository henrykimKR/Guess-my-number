# Guess My Number

Welcome to the "Guess My Number" game! This simple HTML, CSS, and JavaScript project allows users to guess a randomly generated number and provides feedback on their guesses. Below is an explanation of the project structure and key JavaScript functions.

## Project Structure

### HTML (`index.html`)

The HTML file defines the structure of the webpage, including the game title, user input, feedback messages, and buttons.

### CSS (`style.css`)

The CSS file styles the HTML elements, providing a visually appealing layout for the game.

### JavaScript (`script.js`)

The JavaScript file contains the game logic, handling user input, generating a random number, and providing feedback to the player.

## Key JavaScript Functions

### `displayMessage(message)`

This function updates the text content of the message element with the specified message.

```javascript
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
```

### Event Listeners

The `addEventListener` function is used to respond to user interactions. Two event listeners are implemented:

- **Check Button:**
  - Checks the user's guess against the randomly generated number.
  - Updates the message, score, and highscore accordingly.

- **Again Button:**
  - Resets the game by generating a new random number and resetting the score.
  - Restores the default styling.

```javascript
document.querySelector('.check').addEventListener('click', function () {
  // Check logic
});

document.querySelector('.again').addEventListener('click', function () {
  // Reset logic
});
```

### Game Logic

The game logic includes:
- Generating a random number between 1 and 20.
- Handling user guesses and providing feedback.
- Updating the score and highscore.
- Resetting the game for a new round.

```javascript
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// Additional game logic...

```

## How to Use

1. Open `index.html` in a web browser.
2. Enter your guess in the input field.
3. Click the "Check!" button to see if your guess is correct.
4. Try to guess the correct number within the given score limit.
5. Click the "Again!" button to start a new round.

Have fun playing "Guess My Number"!
