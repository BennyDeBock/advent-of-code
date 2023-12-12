export class Card {
  constructor(cardString) {
    const cardSplit = cardString.split(':')
    const numberSplit = cardSplit[1].split('|')
    const winningNumbers = numberSplit[0].split(' ')
    const pickedNumbers = numberSplit[1].split(' ')

    // Initialize variables
    this.id = cardSplit[0].split(' ')[1]
    this.winningNumbers = winningNumbers.filter((value) => value !== '')
    this.pickedNumbers = pickedNumbers.filter((value) => value !== '')
    console.log(this.id);
    console.log(this.winningNumbers);
    console.log(this.pickedNumbers);
  }

  calculatePoints() {
    
  }
}