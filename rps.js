const btn = document.querySelectorAll(`[data-select]`);
const playerScore = document.querySelector(".playerScoreNumber");
const computerScore = document.querySelector(".computerScoreNumber");
const roundResult = document.querySelector(".roundResult");
const roundNumber = document.querySelector(".roundNumber");

let k = 0;
let i = 0;
let j = 0;
let ret = 0;
let round = 0;

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
    if (playerSelection === computerSelection)
        return "its a draw";
    else if (playerSelection === 'rock' && computerSelection === 'paper')
        return "you lose";
    else if (playerSelection === 'rock' && computerSelection === 'scissors')
        return "you win";
    else if (playerSelection === 'paper' && computerSelection === 'rock')
        return "you win";
    else if (playerSelection === 'paper' && computerSelection === 'scissors')
        return "you lose";
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
        return "you win";
    else if (playerSelection === 'scissors' && computerSelection === 'rock')
        return "you lose";
    return;
}


btn.forEach((button) => {
    button.addEventListener("click", () => {
        const selectionName = button.dataset.select;
        let str;


        if (k == 0)
            ret = 0;
        if (k == 5) {
            return;
        }
        str = playRound(selectionName, computerPlay());

        if (str === "its a draw") {
            k--;
            round--;
            roundResult.textContent = 'DRAW';
        }
        else if (str === "you win") {
            i++;
            playerScore.textContent = i;
            roundResult.textContent = 'WIN';
        }
        else if (str === "you lose") {
            j++;
            computerScore.textContent = j;
            roundResult.textContent = 'LOSE';
        }
        round++;
        roundNumber.textContent = round;

        k++;

        if (k == 5) {
            if (i > j)
                roundResult.textContent = 'congratulations you won!'
            else
                roundResult.textContent = 'you lost lol'
            if (ret == 0) {
                retr();
                ret = 1;
            }
        }
    })
})

function retr() {
    const restart = document.querySelector('.retryButton');
    const retryButton = document.querySelector(".buttonDiv");
    const retry = document.createElement('button');

    retry.setAttribute('id', 'retryButton');
    retry.textContent = 'Retry?';
    retryButton.appendChild(retry);
    if (retry) {
        retry.addEventListener('click', function () {
            const el = document.getElementById('retryButton');
            el.remove();
            k = 0;
            roundResult.textContent = '--';
            playerScore.textContent = '0';
            computerScore.textContent = '0';
            roundNumber.textContent = '1';
            i = 0;
            j = 0;
            round = 0;
        })
    }

}
