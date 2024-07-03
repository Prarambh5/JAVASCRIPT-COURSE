let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    Ties: 0,
  };
  updateScoreElement();
  /*
  if (!score) {
    score = {
      wins: 0,
      losses: 0,
      Ties: 0,
    };
  }
    */

  function generateResult(res) {
    document.querySelector(".js-result").innerHTML = `${res}`;
  }

  function playGame(yourMove) {
    let result = "";
    const computerMove = pickComputerMove();
    moveShower(yourMove, computerMove);

    if (computerMove === yourMove) {
      result = "Tie";
    } else if (
      (computerMove === "rock" && yourMove === "scissors") ||
      (computerMove === "paper" && yourMove === "rock") ||
      (computerMove === "scissors" && yourMove === "paper")
    ) {
      result = "you loss";
    } else {
      result = "you win";
    }
    if (result === "you win") {
      score.wins += 1;
      generateResult("You Won");
    } else if (result === "you loss") {
      score.losses += 1;
      generateResult("You Loose");
    } else {
      score.Ties += 1;
      generateResult("Tied");
    }

    localStorage.setItem("score", JSON.stringify(score));

    updateScoreElement();
  }

  function moveShower(yourMove, computerMove) {
    document.querySelector(".js-moves").innerHTML = `You:
  <img class="move-icon" src="../images/${yourMove}-emoji.png" alt="Rock" />
  <img
    class="move-icon"
    src="../images/${computerMove}-emoji.png"
    alt="Sciisors"/> :Computer`;
  }

  function updateScoreElement(yourMove, computerMove) {
    document.querySelector(
      ".js-score"
    ).innerHTML = `wins:${score.wins}  Losses:${score.losses}   Ties:${score.Ties}`;
  }

  function pickComputerMove() {
    let computerMove = "";
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else {
      computerMove = "scissors";
    }
    return computerMove;
  }