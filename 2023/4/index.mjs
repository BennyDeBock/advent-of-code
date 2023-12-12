// Day 4: Scratchcards
import { readInputFromFile } from "../loadFile.mjs";
import { Card } from "./Card.mjs";

const input = await readInputFromFile('./test.txt')
console.log(input);

// Create cards
const cards = []
for(const card of input) {
  cards.push(new Card(card))
}