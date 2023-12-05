// Day 2: Cube conundrum

// Load file
import * as fileSystem from 'node:fs/promises'
import { Bag } from './Bag.mjs'
import { Game } from './Game.mjs'

async function readInputFromFile(path) {
  try {
    const data = await fileSystem.readFile(path, { encoding: 'utf8' })
    return data.split('\r\n')
  } catch (error) {
    console.error(`Something went wrong reading the file: ${error}`)
  }
}

const input = await readInputFromFile('./input.txt')

// Set properties
const bag = new Bag(12, 13, 14)
const games = []

for(const game of input) {
  games.push(new Game(game))
}

// Check if the games are valid
for(const game of games) {
  game.validateSets(bag)
}

// Reduce games to singular value
const gameSum = games.reduce((sum, game) => {
  if(game.isValid()) {
    return sum += +game.id
  }

  return sum
}, 0)

console.log(gameSum);
