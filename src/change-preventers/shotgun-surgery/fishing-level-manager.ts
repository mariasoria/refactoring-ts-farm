export class FishingLevelManager {
  level: number = 0
  perks: string[] = []

  levelUp() {
    if(this.level === 3) {
      throw new Error('Max level reached')
    }
    this.level++
    if (this.level === 1) {
      this.perks.push('Casting distance increased by one tile')
    } else if (this.level === 2) {
      this.perks.push('New crafting recipe: Bait')
      this.perks.push('Fiberglass Rod & Bait unlocked in Willy\'s Fish Shop')
    } else {
      this.perks.push('New crafting recipe: Crab Pot')
      this.perks.push('New cooking recipe: Dish O\' The Sea')
      this.perks.push('Crab Pot unlocked in Willy\'s Fish Shop')
    }
    this.notifyFarmingLevelUp()
  }

  notifyFarmingLevelUp() {
    console.log('Level Up')
    console.log(`Level ${this.level} Fishing`)
    this.perks.forEach(perk => console.log(perk))
  }
}