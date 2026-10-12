var highValue = 100;
var lowValue = 0;

function guess(hl){
    const target = document.getElementById("guess");
    //alert(hl);
    // alert("Is your number "+ target.innerHTML);
    let guess = parseInt(target.innerHTML);
    //guess is now a number
    if (hl == 1){//take higher half
        lowValue = (guess);
        comment.innerHTML="Is your number..."
    }
    else if (hl == 0 ){//take lower half
        highValue = guess;
        comment.innerHTML = "Is your number..."
    }
    guess = Math.floor((highValue+lowValue)/2) ;//will this yield a fraction?????

    target.innerHTML = guess;
    

}
