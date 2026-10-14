var highValue = 100;
var lowValue = 0;

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
