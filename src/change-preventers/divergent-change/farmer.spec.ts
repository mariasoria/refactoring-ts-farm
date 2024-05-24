import {Farmer, PlantedSeed} from './farmer'
import {Seed} from './seed'
import {Crop} from './crop'
import {Calendar} from "./calendar";

describe('Farmer', () => {
  it('should plant a seed when her energy is enough', () => {
    const farmer = new Farmer()
    const carrot =  new Crop('Carrot', 35)
    const carrotSeed: Seed = new Seed('Carrot seed', 30, 3, 'Spring', carrot)
    farmer.inventory = [carrotSeed]
    farmer.plantCrop(carrotSeed)
    const plantedSeed: PlantedSeed = {seed: carrotSeed, plantedDay: 1}
    expect(farmer.plantedSeeds).toStrictEqual([plantedSeed])
  })

  it('Parallel - should plant a seed when her energy is enough', () => {
      const farmer = new Farmer()
      const carrot =  new Crop('Carrot', 35)
      const carrotSeed: Seed = new Seed('Carrot seed', 30, 3, 'Spring', carrot)
      farmer.inventory = [carrotSeed]
      farmer.plantCropParallel(carrotSeed)
      const plantedSeed: PlantedSeed = {seed: carrotSeed, plantedDay: 1}
      expect(farmer.plantedSeeds).toStrictEqual([plantedSeed])
    })

  it('should not plant a seed in a different season', () => {
    const farmer = new Farmer()
    const blueberry =  new Crop('Blueberry', 50)
    const blueberrySeed: Seed = new Seed('Blueberry seed', 80, 13, 'Summer', blueberry)
    farmer.inventory = [blueberrySeed]
    expect(() => farmer.plantCrop(blueberrySeed)).toThrowError('Cannot plant crop in this season')
  })

  it('Parallel - should not plant a seed in a different season', () => {
      const farmer = new Farmer()
      const blueberry =  new Crop('Blueberry', 50)
      const blueberrySeed: Seed = new Seed('Blueberry seed', 80, 13, 'Summer', blueberry)
      farmer.inventory = [blueberrySeed]
      expect(() => farmer.plantCropParallel(blueberrySeed)).toThrowError('Cannot plant crop in this season')
    })

  it('should not plant a seed when her energy is not enough', () => {
    const farmer = new Farmer()
    farmer.energy = 1
    farmer.calendar = { day: 10, season: 'Summer'}
    const corn =  new Crop('Corn', 50)
    const cornSeed: Seed = new Seed('Corn seed', 150, 14, 'Summer', corn)
    farmer.inventory = [cornSeed]
    expect(() => farmer.plantCrop(cornSeed)).toThrowError('Not enough energy to plant crop')
  })

  it('Parallel - should not plant a seed when her energy is not enough', () => {
    const farmer = new Farmer()
    farmer.energy = 1
    const corn =  new Crop('Corn', 50)
    const cornSeed: Seed = new Seed('Corn seed', 150, 14, 'Summer', corn)
    farmer.inventory = [cornSeed]
    const calendar : Calendar = { day: 10, season: 'Summer'}
    expect(() => farmer.plantCropParallel(cornSeed, calendar)).toThrowError('Not enough energy to plant crop')
  })


  it('should harvest a crop when her energy is enough', () => {
    const farmer = new Farmer()
    farmer.calendar = { day: 24, season: 'Spring'}
    const cauliflower =  new Crop('Cauliflower', 175)
    const cauliflowerSeed: Seed = new Seed('Cauliflower seed', 80, 12, 'Spring', cauliflower)
    const plantedSeed: PlantedSeed = {seed: cauliflowerSeed, plantedDay: 1}
    farmer.plantedSeeds = [plantedSeed]
    farmer.harvestCrop()
    expect(farmer.inventory).toContain(cauliflower)
  })

  it('should not harvest a crop when her energy is not enough', () => {
    const farmer = new Farmer()
    farmer.energy = 4
    farmer.calendar = { day: 15, season: 'Spring'}
    const garlic =  new Crop('Garlic', 60)
    const garlicSeed: Seed = new Seed('Garlic seed', 40, 4, 'Spring', garlic)
    const plantedSeed: PlantedSeed = {seed: garlicSeed, plantedDay: 1}
    farmer.plantedSeeds = [plantedSeed]
    expect(() => farmer.harvestCrop()).toThrowError('Not enough energy to harvest crop')
  })

  it('should not harvest a crop when it is not ready', () => {
    const farmer = new Farmer()
    farmer.calendar = { day: 8, season: 'Spring'}
    const greenBean =  new Crop('Green bean', 40)
    const beanStarter: Seed = new Seed('Bean starter', 60, 10, 'Spring', greenBean)
    const plantedSeed: PlantedSeed = {seed: beanStarter, plantedDay: 1}
    farmer.plantedSeeds = [plantedSeed]
    expect(farmer.inventory).not.toContain(greenBean)
  })

  it('should sell a crop', () => {
    const farmer = new Farmer()
    const cauliflower =  new Crop('Cauliflower', 175)
    farmer.inventory = [cauliflower]
    farmer.sellCrop(cauliflower)
    expect(farmer.coins).toBe(275)
  })

  it('should buy a seed when she has enough coins', () => {
    const farmer = new Farmer()
    const garlic =  new Crop('Garlic', 60)
    const garlicSeed: Seed = new Seed('Garlic seed', 40, 4, 'Spring', garlic)
    farmer.buySeed(garlicSeed)
    expect(farmer.coins).toBe(60)
  })

  it('should not buy a seed when she has not enough coins', () => {
    const farmer = new Farmer()
    const corn =  new Crop('Corn', 50)
    const cornSeed: Seed = new Seed('Corn seed', 150, 14, 'Summer', corn)
    expect(() => farmer.buySeed(cornSeed)).toThrowError('Not enough coins to buy seed')
  })
})