// Day 1: Trebuchet

// Load file
const fileSystem = require('node:fs')

fileSystem.readFile('./input.txt', 'utf-8', (err, data) => {
  if(err) { 
    console.error(`Something went wrong reading the file: ${err}`)
    return
  }

  console.log(data);
})

