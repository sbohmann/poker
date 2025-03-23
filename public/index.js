import {createCardBackSVG} from "./card.js"

const values = [0.5, 1, 2, 3, 5, 8, 13, 21, 40, 100, '?']

window.onload = function() {
    renderCards()
}

function selectCard(value) {
    console.log(`Card selected with value: ${value}`);
}

function renderCards() {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
    values.forEach(value => {
        const cardElement = createCardBackSVG(value);
        cardElement.id = `card_${value}`
        cardElement.classList.add('card')
        cardElement.addEventListener('click', () => {
            selectCard(value);
        });
        cardsContainer.appendChild(cardElement);
    });
}
