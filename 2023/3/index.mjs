// Day 3: Gear Ratios

import { readInputFromFile } from "../loadFile.mjs";

const input = await readInputFromFile('./test.txt')
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

const onlySymbolsRegex = new RegExp(/[^0-9.]+/)
for(let yIndex = 0; yIndex < inputArray.length; yIndex++) {
  for(let xIndex = 0; xIndex < inputArray[yIndex].length; xIndex++) {
    if(inputArray[yIndex][xIndex].match(onlySymbolsRegex))
    console.log(`Character ${inputArray[yIndex][xIndex]} on position ${yIndex + 1}:${xIndex + 1}`);
  }
}