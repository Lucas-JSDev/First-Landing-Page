let playerScore = 0;
let computerScore = 0;
const playerOptions = {
    option1: document.querySelector('#rockBtn'),
    option2: document.querySelector('#paperBtn'),
    option3: document.querySelector('#scissorsBtn')
}
function getPlayerChoice() {}

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      console.log("Tied Match!");
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      console.log("Player Wins!");
      playerScore++;
    } else {
      console.log("Computer Wins!");
      computerScore++;
    }
}