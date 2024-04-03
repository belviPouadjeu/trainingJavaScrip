
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let startGameButton = document.getElementById("start-game");
let newCardButton = document.getElementById("new-card");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById('cards-el');

console.log(cards);

startGameButton.addEventListener('click', startGame);
newCardButton.addEventListener('click', newCard);

// (if 1 -> return 11)
// (if 11 - 13 -> return 10)
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if(randomNumber > 10){
        return 10;
    }else if(randomNumber === 1){
        return 11;
    }else{
        return randomNumber;
    }
    
}

const result = getRandomCard();

console.log(result);

// 1. Create a new function called startGame that calls rendergame()
function startGame(){
    // Generate two random number
    // Re-assign the cards and sum variable so that the game can start

    let firsCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firsCard, secondCard];
    sum = firsCard + secondCard;
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
