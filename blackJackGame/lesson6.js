let firstCard = 9;
let secondCard = 14;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let startGameButton = document.getElementById("start-game");
let newCardButton = document.getElementById("new-card");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById('cards-el');

startGameButton.addEventListener('click', startGame);
newCardButton.addEventListener('click', newCard);

// Create a new function called startGame that calls rendergame()
function startGame(){
    renderGame();
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 😞";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🎉";
        hasBlackJack = true; // Corrected hasBlackJack assignment
    } else {
        message = "You're out of the game! 😞";
        isAlive = false;
    }

    messageEl.textContent = message;

    // render out firsCard and secondCard
    cardsEl.textContent = `Cards : ${cards[0]} ${cards[1]}`;
    sumEl.textContent = `Sum : ${sum}`;
}

function newCard() {
    // Generate a random card value between 1 and 13
    let card = 9;
    sum += card;
    
    startGame();
}
