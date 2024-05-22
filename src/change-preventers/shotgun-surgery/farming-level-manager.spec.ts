import {FarmingLevelManager} from './farming-level-manager'

describe('Farming Level Manager', () => {
  it('should level up', () => {
    const manager = new FarmingLevelManager()
    manager.levelUp()
    expect(manager.level).toBe(1)
    expect(manager.perks).toEqual(['New crafting recipe: Scarecrow', 'New crafting recipe: Basic Fertilizer'])
  })

  it('should not level up if max level reached', () => {
    const manager = new FarmingLevelManager()
    manager.level = 3
    expect(() => manager.levelUp()).toThrow('Max level reached')
  })
})