export class SeedToSoilMapper {
  constructor(mapString) {
    const splitMap = mapString.split(' ')
    
    this.destination = +splitMap[0]
    this.source = +splitMap[1]
    this.range = +splitMap[2]
  }
}

export class SoilToFertilizerMapper {
  constructor(mapString) {
    const splitMap = mapString.split(' ')
    
    this.destination = +splitMap[0]
    this.source = +splitMap[1]
    this.range = +splitMap[2]
  }
}

export class FertilizerToWaterMapper {
  constructor(mapString) {
    const splitMap = mapString.split(' ')
    
    this.destination = +splitMap[0]
    this.source = +splitMap[1]
    this.range = +splitMap[2]
  }
}

export class WaterToLightMapper {
  constructor(mapString) {
    const splitMap = mapString.split(' ')
    
    this.destination = +splitMap[0]
    this.source = +splitMap[1]
    this.range = +splitMap[2]
  }
}

export class LightToTemperatureMapper {
  constructor(mapString) {
    const splitMap = mapString.split(' ')
    
    this.destination = +splitMap[0]
    this.source = +splitMap[1]
    this.range = +splitMap[2]
  }
}

export class TemperatureToHumidityMapper {
  constructor(mapString) {
    const splitMap = mapString.split(' ')
    
    this.destination = +splitMap[0]
    this.source = +splitMap[1]
    this.range = +splitMap[2]
  }
}

export class HumidityToLocationMapper {
  constructor(mapString) {
    const splitMap = mapString.split(' ')
    
    this.destination = +splitMap[0]
    this.source = +splitMap[1]
    this.range = +splitMap[2]
  }
}

