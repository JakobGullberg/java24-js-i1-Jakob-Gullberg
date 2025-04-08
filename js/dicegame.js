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
const diceImage = document.getElementById("diceImage");
const restartButton = document.getElementById("restartGame");

document.getElementById("rollDice").addEventListener("click", rollDice);
document.getElementById("holdScore").addEventListener("click", holdScore);
restartButton.addEventListener("click", restartGame);

nameForm.addEventListener("submit", function (e) {
  e.preventDefault();
  playerName = playerInput.value.trim();
  if (playerName) {
    displayName.textContent = playerName;
    gameArea.classList.remove("hidden");
    nameForm.classList.add("hidden");
  }
});

// Funktion för att kasta tärningen
function rollDice() {
    if (totalScore >= 100) return;
  
    const dice = Math.floor(Math.random() * 6) + 1;
  
    // Startar tärning animationen
    diceImage.classList.add("dice-roll-animation");
  
    // Visar bild först efter animationen (fejkad 3D delay)
    setTimeout(() => {
      diceImage.src = `img/dice${dice}.png`;
      diceImage.classList.remove("dice-roll-animation");
  
      if (dice === 1) {
        // Om spelaren slår en etta, förlorar de poängen för den omgången och går till nästa omgång
        roundScore = 0;
        updateScores();
        startNewRound(true); // Startar en ny omgång direkt
      } else {
        // Lägg till tärningens resultat om det inte är en etta
        roundScore += dice;
        updateScores();
      }
    }, 600); // Samma tid som CSS-animationen
  }
  

// Funktionen för att frysa poängen
function holdScore() {
  if (totalScore >= 100) return;

  // Lägg till poängen från omgången till den totala poängen
  totalScore += roundScore;
  roundScore = 0;
  updateScores();
  startNewRound(true);

  if (totalScore >= 100) {
    gameOverEl.classList.remove("hidden");
    gameOverEl.textContent = `${playerName} har vunnit spelet på ${rounds} omgångar! 🎉`;

    // Visa "Spela igen"-knappen
    restartButton.classList.remove("hidden");
  }
}

// Funktion för att starta en ny omgång
function startNewRound(incrementRound = true) {
    if (incrementRound) {
      rounds++; // Uppdatera omgången
    }
  
    // Nollställ omgångens poäng
    roundScore = 0;
    roundScoreEl.textContent = roundScore; // Nollställ omgångens poäng på skärmen
  
    // Uppdatera visningen av poäng och omgångar på sidan
    updateScores();
  }
  

// Uppdaterar poäng och omgångar på sidan
function updateScores() {
  roundScoreEl.textContent = roundScore;
  totalScoreEl.textContent = totalScore;
  roundsEl.textContent = rounds;
}

// Funktion för att återställa spelet när knappen "Spela igen" trycks
function restartGame() {
    // Återställer alla variabler
    roundScore = 0;
    totalScore = 0;
    rounds = 0;
  
    // Uppdaterar UI med nollade värden
    roundScoreEl.textContent = 0;
    totalScoreEl.textContent = 0;
    roundsEl.textContent = 0;
  
    // Döljer game over och visa spelområdet igen
    gameOverEl.classList.add("hidden");
    gameArea.classList.remove("hidden");
  
    // Dölj namnformuläret eftersom spelaren redan har ett namn och är i spelet, detta hade jag problem med.
    nameForm.classList.add("hidden");
  
    // Döljer knappen tills en ny omgång startar
    restartButton.classList.add("hidden");
  
    // Startar en ny omgång utan att visa namnformuläret
    startNewRound(false);
  }
  
