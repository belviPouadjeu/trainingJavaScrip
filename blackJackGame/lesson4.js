let firstCard = 9;
let secondCard = 8;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let startGameButton = document.getElementById("start-game");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum");

function startGame() {
    startGameButton.addEventListener('click', () => {
        if (sum <= 21) {
            message = "Do you want to draw a new card? 😞";
        } else if (sum === 21) {
            message = "Wohoo! You've got Blackjack! 🎉";
            hasBlackJack = true; // Corrected hasBlackJack assignment
        } else {
            message = "You're out of the game! 😞";
            isAlive = false;
        }

        messageEl.textContent = message;
        sumEl.textContent = `Sum : ${sum}`;
    });
}

startGame();
