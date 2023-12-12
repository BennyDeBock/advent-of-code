export class Seed {
  constructor(seed) {
    this.seed = +seed
    this.soil = -1
    this.fertilizer = -1
    this.water = -1
    this.light = -1
    this.temperature = -1
    this.humidity = -1
    this.location = -1
  }

  mapProperty(property, mappers) {
    switch(property) {
      case 'soil': 
        this.soil = this.#mapIndividualProperty(this.seed, mappers)
        break
      case 'fertilizer': 
        this.fertilizer = this.#mapIndividualProperty(this.soil, mappers)
        break
      case 'water': 
        this.water = this.#mapIndividualProperty(this.fertilizer, mappers)
        break
      case 'light': 
        this.light = this.#mapIndividualProperty(this.water, mappers)
        break
      case 'temperature': 
        this.temperature = this.#mapIndividualProperty(this.light, mappers)
        break
      case 'humidity': 
        this.humidity = this.#mapIndividualProperty(this.temperature, mappers)
        break
      case 'location': 
        this.location = this.#mapIndividualProperty(this.humidity, mappers)
        break
    }
  }

  #mapIndividualProperty(property, mappers) {
    for(const mapper of mappers) {
      if(property >= mapper.source && property <= mapper.source + mapper.range) {
        const difference = property - mapper.source
        property = mapper.destination + difference
        break;
      }
    }

    return property
  }
}