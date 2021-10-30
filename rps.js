function computerPlay() {
    let random = Math.floor(Math.random() * 3) + 1;
    let move;
    if (random === 1)
        move = "rock";
    if (random === 2)
        move = "paper";
    if (random === 3)
        move = "scissors";
    return move;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors')
        return "error";
    console.log("you played ==========> " + playerSelection);
    console.log("the computer played => " + computerSelection);
    if (playerSelection === computerSelection) 
        return "its a draw";
    if (playerSelection === 'rock' && computerSelection === 'paper')
        return "you lose";
    if (playerSelection === 'rock' && computerSelection === 'scissors')
        return "you win";
    if (playerSelection === 'paper' && computerSelection === 'rock')
        return "you win";
    if (playerSelection === 'paper' && computerSelection === 'scissors')
        return "you lose";
    if (playerSelection === 'scissors' && computerSelection === 'paper')
        return "you win";
    if (playerSelection === 'scissors' && computerSelection === 'rock')
        return "you lose";
    return ;
}
function game() {
    let str;
    let i = 0;
    let j = 0;
    for (let k = 0; k < 5; k++) {
        str = playRound(prompt("choose a move", "rock/paper/scissors"), computerPlay());
        console.log(str);
        if (str === "error" || str === "its a draw")
            k--;
        else if (str === "you win")
            i++;
        else if (str === "you lose")
            j--;
    }
    if (i > j)
            console.log("congratulations, you won");
        else
            console.log("you SUCK");
}
game();
