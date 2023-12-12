// Day 4: Scratchcards
import { readInputFromFile } from "../loadFile.mjs";
import { Card } from "./Card.mjs";

const input = await readInputFromFile('./input.txt')
console.log(input);

// Create cards
const cards = []
for(const card of input) {
  cards.push(new Card(card))
}

const cardValues = []

for(const card of cards) {
  cardValues.push(card.calculatePoints())
}

console.log(cardValues.reduce((sum, current) => sum + current));