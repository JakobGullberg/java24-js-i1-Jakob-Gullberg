let playerName = "";
let roundScore = 0;
let totalScore = 0;
let rounds = 0;

const nameForm = document.getElementById("nameForm");
const playerInput = document.getElementById("playerName");
const displayName = document.getElementById("displayName");
const gameArea = document.getElementById("gameArea");
const roundScoreEl = document.getElementById("roundScore");
const totalScoreEl = document.getElementById("totalScore");
const roundsEl = document.getElementById("rounds");
const diceRollEl = document.getElementById("diceRoll");
const gameOverEl = document.getElementById("gameOver");

document.getElementById("rollDice").addEventListener("click", rollDice);
document.getElementById("holdScore").addEventListener("click", holdScore);

nameForm.addEventListener("submit", function (e) {
  e.preventDefault();
  playerName = playerInput.value.trim();
  if (playerName) {
    displayName.textContent = playerName;
    gameArea.classList.remove("hidden");
    nameForm.classList.add("hidden");
  }
});

function rollDice() {
  if (totalScore >= 100) return;

  const dice = Math.floor(Math.random() * 6) + 1;
  diceRollEl.textContent = dice;

  if (dice === 1) {
    roundScore = 0;
    updateScores();
    startNewRound(false);
  } else {
    roundScore += dice;
    updateScores();
  }
}

function holdScore() {
  if (totalScore >= 100) return;

  totalScore += roundScore;
  roundScore = 0;
  updateScores();
  startNewRound(true);

  if (totalScore >= 100) {
    gameOverEl.classList.remove("hidden");
    gameOverEl.textContent = `${playerName} har vunnit spelet på ${rounds} omgångar! 🎉`;
  }
}

function startNewRound(incrementRound = true) {
  if (incrementRound) rounds++;
  updateScores();
}

function updateScores() {
  roundScoreEl.textContent = roundScore;
  totalScoreEl.textContent = totalScore;
  roundsEl.textContent = rounds;
}
