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
  }

  /**
   * 
   * @returns {Number} The number of points this card is worth
   */
  calculatePoints() {
    return this.pickedNumbers.reduce((sum, picked) => {
      if(this.winningNumbers.indexOf(picked) != -1) {
        if(sum === 0) {
          sum = 1
        } else {
          sum *= 2
        }
      }

      return sum
    }, 0)
  }
}
