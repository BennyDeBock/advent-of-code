// Day 1: Trebuchet

// Load file
import * as fileSystem from 'node:fs/promises'

async function readInputFromFile(path) {
  try {
    const data = await fileSystem.readFile(path, { encoding: 'utf8' })
    return data.split('\r\n')
  } catch (error) {
    console.error(`Something went wrong reading the file: ${error}`)
  }
}

const input = await readInputFromFile('./input.txt')

// Reduce to sum of calibration values
const combinedCallibrationValue = input.reduce((sum, inputString) => {
  let firstNumber
  let lastNumber

  inputString.split('').forEach((character) => {
    if(character.match(/\d/)) {
      if(!firstNumber) {
        firstNumber = character
        lastNumber = character
      } else {
        lastNumber = character
      }
    }
  })

  const callibrationValue = firstNumber + lastNumber
  return sum += parseInt(callibrationValue)
}, 0)

console.log(combinedCallibrationValue);