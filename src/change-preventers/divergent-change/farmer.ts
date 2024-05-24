import {Calendar} from './calendar'
import {Seed} from './seed'
import {Item} from './item'
import {Crop} from './crop'

export type PlantedSeed = {
  seed: Seed,
  plantedDay: number
}

export class Farmer {
  coins: number
  energy: number
  calendar: Calendar
  plantedSeeds: PlantedSeed[] = []
  inventory: Item[] = []

  constructor(coins: number = 100, energy: number = 200, calendar: Calendar = { day: 1, season: 'Spring'}) {
    this.coins = coins
    this.energy = energy
    this.calendar = calendar
  }

  plantCrop(seed: Seed) {
    if(this.calendar.season !== seed.season) {
      throw new Error('Cannot plant crop in this season')
    }

    if(this.energy < 2) {
      throw new Error('Not enough energy to plant crop')
    }

    this.energy -= 2
    this.plantedSeeds.push({seed, plantedDay: this.calendar.day})
    this.inventory = this.inventory.filter(item => item.name !== seed.name)
  }

  plantCropParallel(seed: Seed, calendar: Calendar = this.calendar) {
    if(calendar.season !== seed.season) {
      throw new Error('Cannot plant crop in this season')
    }

    if(this.energy < 2) {
      throw new Error('Not enough energy to plant crop')
    }

    this.energy -= 2
    this.plantedSeeds.push({seed, plantedDay: calendar.day})
    this.inventory = this.inventory.filter(item => item.name !== seed.name)
  }

  harvestCrop() {
    this.plantedSeeds.forEach(plantedSeed => {
      if(this.energy < 5) {
        throw new Error('Not enough energy to harvest crop')
      }
      if(this.calendar.day - plantedSeed.plantedDay >= plantedSeed.seed.growthTime) {
        this.inventory.push(plantedSeed.seed.crop)
        this.plantedSeeds = this.plantedSeeds.filter(item => item.seed.name !== plantedSeed.seed.name)
        this.energy -= 5
      }
    })
  }

  sellCrop(crop: Crop) {
    this.coins += crop.price
    this.inventory = this.inventory.filter(item => item.name !== crop.name)
  }

  buySeed(seed: Seed) {
    if(this.coins < seed.price) {
      throw new Error('Not enough coins to buy seed')
    }
    this.coins -= seed.price
    this.inventory.push(seed)
  }
}