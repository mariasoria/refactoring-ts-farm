export class FarmingLevelManager {
  level: number = 0
  perks: string[] = []

  levelUp() {
    if(this.level === 3) {
      throw new Error('Max level reached')
    }
    this.level++
    if (this.level === 1) {
      this.perks.push('New crafting recipe: Scarecrow')
      this.perks.push('New crafting recipe: Basic Fertilizer')
    } else if (this.level === 2) {
      this.perks.push('New crafting recipe: Mayonnaise Machine')
      this.perks.push('New crafting recipe: Stone Fence')
      this.perks.push('New crafting recipe: Sprinkler')
    } else {
      this.perks.push('New crafting recipe: Bee House')
      this.perks.push('New crafting recipe: Speed-Gro')
      this.perks.push('New cooking recipe: Farmer\'s Lunch')
    }
    this.notifyFarmingLevelUp()
  }

  notifyFarmingLevelUp() {
    console.log('Level Up')
    console.log(`Level ${this.level} Farming`)
    this.perks.forEach(perk => console.log(perk))
  }
}