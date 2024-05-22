import {FishingLevelManager} from './fishing-level-manager'

describe('Fishing Level Manager', () => {
  it('should level up', () => {
    const manager = new FishingLevelManager()
    manager.levelUp()
    expect(manager.level).toBe(1)
    expect(manager.perks).toEqual(['Casting distance increased by one tile'])
  })

  it('should not level up if max level reached', () => {
    const manager = new FishingLevelManager()
    manager.level = 3
    expect(() => manager.levelUp()).toThrow('Max level reached')
  })
})