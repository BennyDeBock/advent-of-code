import { Bag } from "./Bag.mjs";

export class Game {
  #isValid = true

  constructor(gameString) {
    const game = gameString.split(':')

    // Set game ID
    this.id = game[0].slice(-1)

    // Initialize game sets
    const setStrings = game[1].split(';')
    this.sets = [] 
    
    for(const set of setStrings) {
      this.sets.push(new GameSet(set.trim()))
    }
  }

  /**
   * 
   * @param {Bag} bag 
   */
  validateSets(bag) {
    for(const set of this.sets) {
      if(
        bag.redCubes < set.getRedCubes() ||
        bag.blueCubes < set.getBlueCubes() ||
        bag.greenCubes < set.getGreenCubes()
      ) {
        this.#isValid = false
        break
      }
    }
  }

  isValid() {
    return this.#isValid
  }
}

class GameSet {
  #redCubes = 0
  #blueCubes = 0
  #greenCubes = 0

  constructor(setString) {
    const splitSet = setString.split(',')
    for(const cubes of splitSet) {
      this.#setCubes(cubes.trim())
    }
  }

  #setCubes(cubes) {
    if(cubes.indexOf('red') !== -1) {
      this.#redCubes = cubes.replace(/[a-zA-Z ]/g, '')
    } else if (cubes.indexOf('blue') !== -1) {
      this.#blueCubes = cubes.replace(/[a-zA-Z ]/g, '')
    } else {
      this.#greenCubes = cubes.replace(/[a-zA-Z ]/g, '')
    }
  }

  getGreenCubes() {
    return this.#greenCubes
  }

  getRedCubes() {
    return this.#redCubes
  }

  getBlueCubes() {
    return this.#blueCubes
  }
}