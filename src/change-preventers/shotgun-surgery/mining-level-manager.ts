export class MiningLevelManager {
  level: number = 0
  perks: string[] = []

  levelUp() {
    if(this.level === 3) {
      throw new Error('Max level reached')
    }
    this.level++
    if (this.level === 1) {
      this.perks.push('New crafting recipe: Cherry Bomb')
    } else if (this.level === 2) {
      this.perks.push('New crafting recipe: Staircase')
    } else {
      this.perks.push('New cooking recipe: Miner\'s Treat')
    }
    this.notifyFarmingLevelUp()
  }

  notifyFarmingLevelUp() {
    console.log('Level Up')
    console.log(`Level ${this.level} Mining`)
    this.perks.forEach(perk => console.log(perk))
  }
}