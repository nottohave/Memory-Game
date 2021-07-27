document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'fries',
            img: './img/fries.png'
        },
        {
            name: 'fries',
            img: './img/fries.png'
        },
        {
            name: 'cheeseburger',
            img: './img/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: './img/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: './img/hotdog.png'
        },
        {
            name: 'hotdog',
            img: './img/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: './img/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: './img/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: './img/milkshake.png'
        },
        {
            name: 'milkshake',
            img: './img/milkshake.png'
        },
        {
            name: 'pizza',
            img: './img/pizza.png'
        },
        {
            name: 'pizza',
            img: './img/pizza.png'
        },
    ]

    // shuffle the deck every reload
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    // display the result
    const resultDisplay = document.querySelector('#result');

    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    // create my deck, link the card to my blank img
    function createDeck() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img') // create each card with the element img
            card.setAttribute('src', './img/blank.png') // give each card an img source
            card.setAttribute('data-id', i) // give each card an id
            card.addEventListener('click', flipCard) // add the flip the card event
            grid.appendChild(card) // place the card into the grid div
        }
    }

    //check for matches when you must have 2 cards in the array
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        // show white for two cards match with img name, set an alert
        // otherwise, show blank, set a different alert
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].removeAttribute('data-id');
            cards[optionTwoId].removeAttribute('data-id');
            cardsWon.push(cardsChosen);
        } else {
            console.log(cards[optionOneId].getAttribute('data-id'));
            console.log(cards[optionTwoId].getAttribute('data-id'));
            cards[optionOneId].setAttribute('src', './img/blank.png');
            cards[optionTwoId].setAttribute('src', './img/blank.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Congratulation! You found them all!"
        }
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        // after a match found, if player click on the same spots, display nothing
        if (cardArray[cardId] === undefined) {
            return "";
        }
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        // only 2 cards in the array, then check the match
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 150);
        }
    }

    createDeck();
})