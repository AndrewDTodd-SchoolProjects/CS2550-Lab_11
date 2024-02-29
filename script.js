// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses = 10) {
    let promptText = "Enter a number between 1 and 100.";
    let guessCount = 0;

    while (guessCount < totalGuesses) {
        let userGuess = prompt(promptText);

        if (userGuess === null) {
            // User pressed Cancel
            return 0;
        }

        if (userGuess === "" || isNaN(userGuess)) {
            promptText = "Please enter a number.";
            continue;
        }

        userGuess = Number(userGuess);

        if (userGuess < numToGuess) {
            promptText = `${userGuess} is too small. Guess a larger number.`;
        } else if (userGuess > numToGuess) {
            promptText = `${userGuess} is too large. Guess a smaller number.`;
        } else {
            // Correct guess
            return guessCount + 1; // Return the number of guesses taken
        }

        guessCount++;
    }

    // Exceeded the total number of guesses
    return 0;
}