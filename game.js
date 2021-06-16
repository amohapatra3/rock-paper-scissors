function computerPlay() {
  let rockPaperScissors = ["rock", "paper", "scissors"];
  return rockPaperScissors[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) return "Tie game!!";
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You lose! paper beats rock";
    } else {
      return "You win! rock beats scissors";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You win! paper beats rock";
    } else {
      return "You lose! scissors beats paper";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "You win! scissors beats paper";
    } else {
      return "You lose! rock beats scissors";
    }
  }
}
