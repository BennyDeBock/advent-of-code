// Day 3: Gear Ratios

import { readInputFromFile } from "../loadFile.mjs";

const input = await readInputFromFile('./input.txt')
console.log(input);

// Create a 2D Array of the input
const inputArray = []
for(let yIndex = 0; yIndex < input.length; yIndex++) {
  const individualCharArray = []
  for(let xIndex = 0; xIndex < input[yIndex].length; xIndex++) {
    individualCharArray.push(input[yIndex][xIndex])
  }

  inputArray.push(individualCharArray)
}

const adjecentNumbers = []
const onlySymbolsRegex = new RegExp(/[^0-9.]+/)
for(let yIndex = 0; yIndex < inputArray.length; yIndex++) {
  for(let xIndex = 0; xIndex < inputArray[yIndex].length; xIndex++) {
    if(inputArray[yIndex][xIndex].match(onlySymbolsRegex))
    {
      // Check left and right of the symbol
      adjecentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex, xIndex, inputArray, 'left'));
      adjecentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex, xIndex, inputArray, 'right'));

      // Check the row above the symbol
      if(returnAdjacentNumberBasedOnDirection(yIndex - 1, xIndex, inputArray, 'omni')) {
        adjecentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex - 1, xIndex, inputArray, 'omni'));
      } 
      else 
      {
        adjecentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex - 1, xIndex, inputArray, 'left'));
        adjecentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex - 1, xIndex, inputArray, 'right'));
      }

      // Check the row beneath the symbol
      if(returnAdjacentNumberBasedOnDirection(yIndex + 1, xIndex, inputArray, 'omni')) {
        adjecentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex + 1, xIndex, inputArray, 'omni'));
      } 
      else 
      {
        adjecentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex + 1, xIndex, inputArray, 'left'));
        adjecentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex + 1, xIndex, inputArray, 'right'));
      }

      console.log(`Character ${inputArray[yIndex][xIndex]} on position ${yIndex + 1}:${xIndex + 1}`);
    }
  }
}

console.log(calculateSumAdjacentNumbers(adjecentNumbers))

const adjacentNumbers = []
const onlyStarRegex = new RegExp(/[*]+/)
for(let yIndex = 0; yIndex < inputArray.length; yIndex++) {
  for(let xIndex = 0; xIndex < inputArray[yIndex].length; xIndex++) {
    if(inputArray[yIndex][xIndex].match(onlyStarRegex))
    {
      const temporaryAdjacentNumbers = []
      // Check left and right of the symbol
      temporaryAdjacentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex, xIndex, inputArray, 'left'));
      temporaryAdjacentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex, xIndex, inputArray, 'right'));

      // Check the row above the symbol
      if(returnAdjacentNumberBasedOnDirection(yIndex - 1, xIndex, inputArray, 'omni')) {
        temporaryAdjacentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex - 1, xIndex, inputArray, 'omni'));
      } 
      else 
      {
        temporaryAdjacentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex - 1, xIndex, inputArray, 'left'));
        temporaryAdjacentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex - 1, xIndex, inputArray, 'right'));
      }

      // Check the row beneath the symbol
      if(returnAdjacentNumberBasedOnDirection(yIndex + 1, xIndex, inputArray, 'omni')) {
        temporaryAdjacentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex + 1, xIndex, inputArray, 'omni'));
      } 
      else 
      {
        temporaryAdjacentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex + 1, xIndex, inputArray, 'left'));
        temporaryAdjacentNumbers.push(returnAdjacentNumberBasedOnDirection(yIndex + 1, xIndex, inputArray, 'right'));
      }

      console.log(`Character ${inputArray[yIndex][xIndex]} on position ${yIndex + 1}:${xIndex + 1}`);

      const filteredArray = temporaryAdjacentNumbers.filter((value) => value !== 0)

      if(filteredArray.length === 2) {
        const power = filteredArray.reduce((power, accumulator) => power * accumulator, 1)
        adjacentNumbers.push(power)
      }
    }
  }
}

console.log(calculateSumAdjacentNumbers(adjacentNumbers))
/**
 * 
 * @param {Number} yIndex The y-position to start from
 * @param {Number} xIndex The x-position to start from
 * @param {Array<Array<String>>} array The array to search in 
 * @param {String} direction The direction to search in
 */
function returnAdjacentNumberBasedOnDirection(yIndex, xIndex, array, direction) {
  const numberArray = []
  switch(direction) {
    case 'left':
      xIndex--
      if(xIndex > 0 && array[yIndex][xIndex].match(/\d/)) {
        do {
          numberArray.push(array[yIndex][xIndex])
          xIndex--
        } while (xIndex >= 0 && array[yIndex][xIndex].match(/\d/));
      }
      return +numberArray.reverse().join('') ?? 0
    case 'right':
      xIndex++
      if(xIndex < array[yIndex].length && array[yIndex][xIndex].match(/\d/)) {
        do {
          numberArray.push(array[yIndex][xIndex])
          xIndex++
        } while (xIndex < array[yIndex].length && array[yIndex][xIndex].match(/\d/));
      }
      return +numberArray.join('') ?? 0
    
    case 'omni':
      if(yIndex < 0 || yIndex >= array.length) {
        return 0
      }
      const originalX = xIndex
      if(array[yIndex][xIndex].match(/\d/)) {
        do {
          numberArray.push(array[yIndex][xIndex])
          xIndex--
        } while (xIndex >= 0 && array[yIndex][xIndex].match(/\d/));
        
        numberArray.reverse()
        xIndex = originalX + 1
        while(xIndex <= array[yIndex].length && array[yIndex][xIndex].match(/\d/)) {
          numberArray.push(array[yIndex][xIndex])
          xIndex++
        }
      }
      return +numberArray.join('') ?? 0
    default:
      return 0
  }
}

/**
 * 
 * @param {Array<Number>} numberArray 
 */
function calculateSumAdjacentNumbers(numberArray) {
  return numberArray.reduce((sum, accumulator) => sum + accumulator, 0)
}