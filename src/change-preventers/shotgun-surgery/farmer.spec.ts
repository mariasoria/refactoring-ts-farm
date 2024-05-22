import {Farmer} from './farmer'

describe("Farmer", () => {
  it("should level up farming", () => {
    const farmer = new Farmer()
    farmer.levelUpFarming()
    expect(farmer.farmingLevelManager.level).toBe(1)
    expect(farmer.farmingLevelManager.perks).toEqual([
      'New crafting recipe: Scarecrow',
      'New crafting recipe: Basic Fertilizer'
    ])
  })

  it("should level up mining", () => {
    const farmer = new Farmer()
    farmer.levelUpMining()
    expect(farmer.miningLevelManager.level).toBe(1)
    expect(farmer.miningLevelManager.perks).toEqual([
      'New crafting recipe: Cherry Bomb'
    ])
  })

  it("should level up fishing", () => {
    const farmer = new Farmer()
    farmer.levelUpFishing()
    expect(farmer.fishingLevelManager.level).toBe(1)
    expect(farmer.fishingLevelManager.perks).toEqual([
      'Casting distance increased by one tile'
    ])
  })

})