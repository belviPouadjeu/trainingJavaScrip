// 2. Use getRandomCard() to set the values of firstCard and secondCard
let firstCard = getRandomCard();
let secondCard = getRandomCard();
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

// Create a function, getRandomCard(), that always returns 5
function getRandomCard(){
    return 5;
}

const result = getRandomCard();

console.log(result);

// 1. Create a new function called startGame that calls rendergame()
function startGame(){
    renderGame();
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 😞";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🎉";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😞";
        isAlive = false;
    }

    messageEl.textContent = message;

    // Clear existing cards content
    cardsEl.textContent = '';

    // Create a new paragraph element for each card
    let cardsParagraph = document.createElement('p');

    // Loop through the cards array to display all the cards
    for(let i = 0; i < cards.length; i++){
        // Append each card value to the cards paragraph
        cardsParagraph.textContent += `${cards[i]} `;
    }

    // Append the cards paragraph to the cardsEl container
    cardsEl.appendChild(cardsParagraph);

    sumEl.textContent = `Sum : ${sum}`;
}


function newCard() {
    // 3. Use the  getRandomCard() to set the value of card
    let card =  getRandomCard();
    sum += card;
    cards.push(card);

    console.log(cards);
    
    startGame();
}
