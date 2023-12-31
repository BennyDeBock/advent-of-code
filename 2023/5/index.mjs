// Day 5: If you give a seed a fertilizer
import { readInputFromFile } from "../loadFile.mjs";
import { FertilizerToWaterMapper, HumidityToLocationMapper, LightToTemperatureMapper, SeedToSoilMapper, SoilToFertilizerMapper, TemperatureToHumidityMapper, WaterToLightMapper } from "./mappers.mjs";
import { Seed } from "./seed.mjs";

const input = await readInputFromFile('./input.txt')

const seeds = []
const seedRanges = []
const seedToSoilMappers = []
const soilToFertilizerMapper = []
const fertilizerToWaterMapper = []
const waterToLightMapper = []
const lightToTemperatureMapper = []
const temperatureToHumidityMapper = []
const humidityToLocationMapper = []

parseInputToObjects()

for(const seed of seeds) {
  seed.mapProperty('soil', seedToSoilMappers)
  seed.mapProperty('fertilizer', soilToFertilizerMapper)
  seed.mapProperty('water', fertilizerToWaterMapper)
  seed.mapProperty('light', waterToLightMapper)
  seed.mapProperty('temperature', lightToTemperatureMapper)
  seed.mapProperty('humidity', temperatureToHumidityMapper)
  seed.mapProperty('location', humidityToLocationMapper)
}

const lowest = seeds.reduce((lowest, seed) => {
  if(seed.location < lowest) {
    lowest = seed.location
  }

  return lowest
}, Number.MAX_VALUE)

console.log(lowest);

// part 2
const newSeeds = []
for(let range of seedRanges) {
  for(let index = 0; index < range.length; index++) {
    newSeeds.push(new Seed(range.start + index))
  }
}

console.log(newSeeds);

// for(const seed of newSeeds) {
//   seed.mapProperty('soil', seedToSoilMappers)
//   seed.mapProperty('fertilizer', soilToFertilizerMapper)
//   seed.mapProperty('water', fertilizerToWaterMapper)
//   seed.mapProperty('light', waterToLightMapper)
//   seed.mapProperty('temperature', lightToTemperatureMapper)
//   seed.mapProperty('humidity', temperatureToHumidityMapper)
//   seed.mapProperty('location', humidityToLocationMapper)
// }

// const lowest2 = newSeeds.reduce((lowest, seed) => {
//   if(seed.location < lowest) {
//     lowest = seed.location
//   }

//   return lowest
// }, Number.MAX_VALUE)

// console.log(lowest2);

function parseInputToObjects() {
  let map = false
  let counter = -1

  for(const line of input) {
    // Parse out seeds
    if(line.indexOf('seeds') !== -1) {
      const seedString = line.split(':')[1].trim()
      const individualSeeds = seedString.split(' ')
      for(const seed of individualSeeds) {
        seeds.push(new Seed(seed))
      }

      for(let index = 0; index < individualSeeds.length; index += 2) {
        seedRanges.push({'start': +individualSeeds[index], 'length': +individualSeeds[index + 1]})
      }
    }

    if(line.indexOf('map') !== -1) {
      map = true
      continue
    }

    if(line === '') {
      map = false
      counter++
    }

    if(map) {
      switch(counter) {
        case 0:
          seedToSoilMappers.push(new SeedToSoilMapper(line))
          break;
        case 1:
          soilToFertilizerMapper.push(new SoilToFertilizerMapper(line))
          break;
        case 2:
          fertilizerToWaterMapper.push(new FertilizerToWaterMapper(line))
          break;
        case 3:
          waterToLightMapper.push(new WaterToLightMapper(line))
          break;
        case 4:
          lightToTemperatureMapper.push(new LightToTemperatureMapper(line))
          break;
        case 5:
          temperatureToHumidityMapper.push(new TemperatureToHumidityMapper(line))
          break;
        case 6:
          humidityToLocationMapper.push(new HumidityToLocationMapper(line))
          break;
        default:
          break;
      }
    }
  }
}