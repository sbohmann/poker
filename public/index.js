import {createSvgCard} from "./card.js"

const values = [0.5, 1, 2, 3, 5, 8, 13, 21, 40, 100, '?']
const participants = ['Alice', 'Bob', 'Hans']
const participantEmptyCard = createParticipantSvgCard()
const participantCards =
    new Map(values.map(value => [value, createParticipantSvgCard(value)]))

window.onload = function() {
    renderCards()
    renderParticipants()
}

function selectCard(value) {
    const hansCardCell = document.getElementById('participant_card_Hans')
    if (hansCardCell) {
        while (hansCardCell.firstChild) {
            hansCardCell.removeChild(hansCardCell.firstChild)
        }
        hansCardCell.appendChild(participantCards.get(value).cloneNode(true))
    }
}

function renderCards() {
    const cardsContainer = document.getElementById('cards-container')
    values.forEach(value => {
        const cardElement = createSvgCard(value)
        cardElement.id = `card_${value}`
        cardElement.classList.add('card')
        cardElement.addEventListener('click', () => {
            selectCard(value)
        })
        cardsContainer.appendChild(cardElement)
    })
}

function renderParticipants() {
    const participantsContainer = document.getElementById('participants-container')
    const table = document.createElement('table')
    table.classList.add('participants-table')
    participants.forEach(participant => {
        const row = document.createElement('tr')
        row.classList.add('participant-row')

        const nameCell = document.createElement('td')
        nameCell.classList.add('participant-name-cell')
        nameCell.textContent = participant

        const cardCell = document.createElement('td')
        cardCell.id = `participant_card_${participant}`
        cardCell.classList.add('participant-card-cell')
        const cardElement = participantEmptyCard.cloneNode(true)
        cardCell.appendChild(cardElement)

        row.appendChild(nameCell)
        row.appendChild(cardCell)
        table.appendChild(row)
    })
    participantsContainer.appendChild(table)
}

function createParticipantSvgCard(value) {
    let result = createSvgCard(value)
    result.classList.add('participant-card')
    return result
}
