// For 2P Mode
var secretNumber = 0;

// For 1P Mode
var highValue = 100;
var lowValue = 0;

// Scripts for 1P Mode
function guess(hl){
    const target = document.getElementById("guess");

    let guess = parseInt(target.innerHTML);
    if (hl == 1) { // Take higher half
        lowValue = (guess);
        comment.innerHTML="Is your number..."
    }
    else if (hl == 0) { // Take lower half
        highValue = guess;
        comment.innerHTML = "Is your number..."
    }
    else if (hl == 2) { // Guess is correct
        comment.innerHTML = "Haha, I got it right!"
    }
    guess = Math.floor((highValue + lowValue)/2);

    target.innerHTML = guess;
}

// Scripts for 2P Mode
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
    }
    else if (secretNumber > guess) {
        alert("Too high, try again!");
    }
    else if (secretNumber < guess) {
        alert("Too low, try again!");
    }
}
