
let randomOption;

function rockPaperScissor() {
    randomOption = Math.floor(Math.random() * 3 + 1);
    console.log("randomnumber", randomOption);

    let playerInput = document.getElementsByName("rpsradiobuttons");
    let playerValue;

    for (let i = 0; i < playerInput.length; i++) {
        if (playerInput[i].checked == true) {
            playerValue = playerInput[i].value
        }
    }

    console.log("userinput", playerValue)
    if (randomOption == playerValue) {
        alert("Glug glug glug! Its a draw.") //cpu wins
    } else if( randomOption == 1 && playerValue == 3){
       alert("YOU LOSE! Kraken has chosen Pet Rock.")
    } else if( randomOption == 2 && playerValue == 1){
       alert("YOU LOSE! Kraken has chosen Newspaper.")
     } else if( randomOption == 3 && playerValue == 2){
     alert("YOU LOSE! Kraken has chosen Secateurs.")
        //user wins
    } else if( randomOption == 3 && playerValue == 1){
        alert("*Congratulations*!! YOU defeated Kraken! .. you see Kraken drowning but look out!! as he attempts to throw the secateurs at you in defeat.")
     } else if ( randomOption == 1 && playerValue == 2){
    alert("*Congratulations*!! YOU defeated Kraken! .. you see Kraken drowning... he seems to be holding his pet rock.")
     } else if( randomOption == 2 && playerValue == 3) {
     alert("*Congratulations*!! YOU defeated Kraken .. you see Kraken drown, in anger he crumples his newspaper.")
     }

}