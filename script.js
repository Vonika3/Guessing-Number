let randomNumber;
let attempts = 0;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('feedback').textContent = '';
    document.getElementById('restartGame').style.display = 'none';
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value, 10);
    const feedback = document.getElementById('feedback');
    const attemptsElement = document.getElementById('attempts');
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    attempts++;
    attemptsElement.textContent = attempts;

    if (guess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('restartGame').style.display = 'inline-block';
    } else if (guess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else {
        feedback.textContent = 'Too high! Try again.';
    }
}

document.getElementById('submitGuess').addEventListener('click', checkGuess);
document.getElementById('restartGame').addEventListener('click', startGame);

// Start the game when the page loads
startGame();
