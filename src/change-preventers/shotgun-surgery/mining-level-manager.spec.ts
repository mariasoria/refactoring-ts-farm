import {MiningLevelManager} from './mining-level-manager'


describe('Mining Level Manager', () => {
  it('should level up', () => {
    const manager = new MiningLevelManager()
    manager.levelUp()
    expect(manager.level).toBe(1)
    expect(manager.perks).toEqual(['New crafting recipe: Cherry Bomb'])
  })

  it('should not level up if max level reached', () => {
    const manager = new MiningLevelManager()
    manager.level = 3
    expect(() => manager.levelUp()).toThrow('Max level reached')
  })
})