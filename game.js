function computerPlay() {
  let rockPaperScissors = ["rock", "paper", "scissors"];
  return rockPaperScissors[Math.floor(Math.random() * 3)];
}
let winCount = 0;
let lossCount = 0;
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) return "Tie game!!";
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      lossCount++;
      return "You lose! paper beats rock";
    } else {
      winCount++;
      return "You win! rock beats scissors";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      winCount++;
      return "You win! paper beats rock";
    } else {
      lossCount++;
      return "You lose! scissors beats paper";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      winCount++;
      return "You win! scissors beats paper";
    } else {
      lossCount++;
      return "You lose! rock beats scissors";
    }
  }
}

function game() {
  for (let index = 0; index < 5; index++) {
    let playerSelection = prompt("Enter rock, paper or scissors").toLowerCase();
    if (
      playerSelection === "rock" ||
      playerSelection === "paper" ||
      playerSelection === "scissors"
    ) {
      console.log(playRound(playerSelection, computerPlay()));
    } else {
      console.error("Please enter a value");
    }
  }
  if (winCount > lossCount) {
    console.log(
      "You beat the computer " + winCount + " to " + lossCount + "!!"
    );
  } else {
    console.log(
      "You lost to a computer " + lossCount + " to " + winCount + " :("
    );
  }
}
game();
