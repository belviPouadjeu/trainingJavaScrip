let firstCard = 9;
        let secondCard = 4;
        let sum = firstCard + secondCard;
        let hasBlackJack = false;
        let isAlive = true;
        let message = "";

        let startGameButton = document.getElementById("start-game");
        let messageEl = document.getElementById("message-el");
        let sumEl = document.getElementById("sum");
        let cardsEl = document.getElementById('cards-el');

        startGameButton.addEventListener('click', startGame);

        function startGame() {
            // Calculate the sum of cards
            sum = firstCard + secondCard;

            if (sum <= 21) {
                message = "Do you want to draw a new card? 😞";
            } else if (sum === 21) {
                message = "Wohoo! You've got Blackjack! 🎉";
                hasBlackJack = true;
            } else {
                message = "You're out of the game! 😞";
                isAlive = false;
            }

            messageEl.textContent = message;
            sumEl.textContent = `Sum : ${sum}`;
            cardsEl.textContent = `Cards : ${firstCard} ${secondCard}`;
        }