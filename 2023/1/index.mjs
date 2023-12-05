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

// Part 1
// Reduce to sum of calibration values
// const combinedCallibrationValue = input.reduce((sum, inputString) => {
//   let firstNumber
//   let lastNumber

//   inputString.split('').forEach((character) => {
//     if(character.match(/\d/)) {
//       if(!firstNumber) {
//         firstNumber = character
//         lastNumber = character
//       } else {
//         lastNumber = character
//       }
//     }
//   })

//   const callibrationValue = firstNumber + lastNumber
//   return sum += parseInt(callibrationValue)
// }, 0)

// // Log result
// console.log(combinedCallibrationValue);

// Part 2
const digitDictionary = {
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9
}

/**
 * 
 * @param {string} numberString 
 * @param {Array.<{key: String, index: Number}>} indices
 */
function replaceAllWrittenNumbersInString(numberString, indices) {
  let replacedString = numberString
  for (const indice of indices) {
    const regex = new RegExp(indice.key)
    replacedString = replacedString.replace(regex, digitDictionary[indice.key])
  }
  return replacedString
}

/**
 * 
 * @param {string} numberString 
 * @returns {Array.<{key: String, index: Number}>}
 */
function getIndexOrderOfString(numberString) {
  const indices = []

  for (const [key] of Object.entries(digitDictionary)) {
    const regex = new RegExp(key, 'gi')
    let result

    while( (result = regex.exec(numberString)) ) {
      indices.push({ 
        key: key,
        index: result.index
      })
    }
    // if(numberString.indexOf(key) != -1) {
    //   indices.push({ 
    //     key: key,
    //     index: numberString.indexOf(key)
    //   })
    // }
  }

  const sortedIndices = indices.sort((a,b) => a.index - b.index)

  //console.log(numberString, sortedIndices);
  return sortedIndices
}

// Reduce to sum of calibration values
const combinedCallibrationValueWithWrittenNumbers = input.reduce((sum, inputString) => {
  let firstNumber
  let lastNumber

  const indices = getIndexOrderOfString(inputString)
  const newString = replaceAllWrittenNumbersInString(inputString, indices)
  newString.split('').forEach((character) => {
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
  console.log(`${newString}. callibrationValue: ${firstNumber}${lastNumber}`);
  return sum += parseInt(callibrationValue)
}, 0)

// Log result
console.log(combinedCallibrationValueWithWrittenNumbers);