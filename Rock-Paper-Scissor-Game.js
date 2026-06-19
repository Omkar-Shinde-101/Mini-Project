const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEL = document.getElementById("user-score");
const computerScoreEL = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        resultEl.innerText = result;
    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissor"];
    const randChoice = Math.floor(Math.random() * choices.length);
    return choices[randChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEL.innerText = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEL.innerText = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}
