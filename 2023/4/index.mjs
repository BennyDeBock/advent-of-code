// Day 4: Scratchcards
import { readInputFromFile } from "../loadFile.mjs";
import { Card } from "./Card.mjs";

const input = await readInputFromFile('./input.txt')

// Create cards
const cards = []
for(const card of input) {
  cards.push(new Card(card))
}

// Part 1
const cardValues = []
for(const card of cards) {
  cardValues.push(card.calculatePoints())
}
console.log(cardValues.reduce((sum, current) => sum + current));

// Part 2, calculate total amount of cards
for(const card of cards) {
  const amountOfMatches = card.calculateAmountOfMatches()
  const cardId = card.id - 1;
  // console.log(`Card ${card.id}: Increase ${card.calculateAmountOfMatches()} matches`);
  // // Increase the amount of copies
  // for(let index = 1; index <= amountOfMatches; index++) {
  //   console.log(`Amount of instances of card ${cards[cardId + index].id} before increase: ${1 + cards[cardId + index].getAmountOfCopies()}`);
  //   if(cards[cardId + index - 1].getAmountOfCopies() === 0) {
  //     cards[cardId + index].increaseAmountOfCopies()
  //   } else {
  //     for(let copies = cards[cardId + index - 1].getAmountOfCopies(); copies > 0; copies--){
  //       cards[cardId + index].increaseAmountOfCopies()
  //     }
  //   }
  //   console.log(`Amount of instances of card ${cards[cardId + index].id} after increase: ${1 + cards[cardId + index].getAmountOfCopies()}`);
  // }
  // console.log('');
  const indexOfCard = card.id - 1
  for(let copies = (1 + cards[indexOfCard].getAmountOfCopies()); copies > 0; copies--) {
    for(let index = 1; index <= amountOfMatches; index++) {
        cards[cardId + index].increaseAmountOfCopies()
    }
  }
}

const cardCopies = []
for(const card of cards) {
  console.log(`Card ${card.id} has ${1 + card.getAmountOfCopies()} instances`)
  cardCopies.push((1 + card.getAmountOfCopies()))
}
console.log(cardCopies.reduce((sum, current) => sum + current));
