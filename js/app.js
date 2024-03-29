/*
 * Create a list that holds all of your cards
 */

// Creating a node list of the cards by selecting the parent element 
const deck = document.querySelector('.deck');
console.log(deck);

// Two cards will be added to this array and will be used to check whether the cards match
let activeCards = [];

//  Implementing event delegation in order to detect when a card has been selected, this is computationally more efficient then adding event listeners to each of the cards individually 
deck.addEventListener('click', event => {
    const selectedCard = event.target;
    if (selectedCard.classList.contains('card') && (activeCards.length < 2)) {
        // console.log(selectedCard);
        selectedCard.classList.toggle('show');
        selectedCard.classList.toggle('open');
        activateCard(selectedCard);
        if (activeCards.length == 2) {
            checkMatch();
        }
    }
});

// This function will be used to push cards onto the 'activeCards' array when they have been selected. Will have a maximum of 2 cards
function activateCard(selectedCard) {
    activeCards.push(selectedCard);
}

// This function will check if the cards that have been selected are a match and update their class if they are. Otherwise it will deactivate the cards are remove them from the activeCards array
function checkMatch() {
    if (activeCards[0].firstElementChild.className ===
        activeCards[1].firstElementChild.className) {
        console.log("match");
        activeCards[0].classList.toggle('match');
        activeCards[1].classList.toggle('match');
        activeCards = [];
    } else {
        // setTimeout function used so that player has sufficient time to view both cards before it is unselected
        setTimeout(() => {
            toggleSelectedCard(activeCards[0]);
            toggleSelectedCard(activeCards[1]);
            activeCards = [];
        }, 1500);
    }
}

// This function toggles the classes which are active when a class has been selected 
function toggleSelectedCard(selectedCard) {
    selectedCard.classList.toggle('show');
    selectedCard.classList.toggle('open');
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
