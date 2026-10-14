var secretNumber = 0;

function setSecretNumber() {
    // Only set the secret number if it hasn't been set yet
    secretNumber = document.getElementById("secretNum").value;

    if (secretNumber > 0 && secretNumber <= 100) {
        alert("Good Job. Your number is " + secretNumber);
        document.getElementById("helplabel").innerHTML = "Try to Guess the Number";
        secretSet = true;
    } else {
        alert("Stop messing around!!!");
        secretNumber = 0;
    }
    
    
    document.getElementById("secretNum").value = "0";
}

function guessSecretNumber() {
     // Read Player 2's guess from the separate guess input field
    const guess = document.getElementById("guessNum").value;
    
    if (secretNumber == guess) {
        alert("Your guess is correct!! \n");
    } else {
        alert("Wrong guess, try again!");
    }
}
