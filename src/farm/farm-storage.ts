import {Item} from './item'
import {Chest} from './chest'
import {Material} from './material'
import {Food} from './food'
import {Seed} from './seed'

export class FarmStorage {
  materialChest: Chest = new Chest()
  seedChest: Chest = new Chest()
  foodChest: Chest = new Chest()

  keep(items: Item[]) {
    this.addToChest(items)
  }

  private addToChest(items: Item[]) {
    items.forEach((item: Item) => {
      if (item instanceof Material) {
        this.materialChest.store(item)
      }
      if (item instanceof Food) {
        this.foodChest.store(item)
      }
      if (item instanceof Seed) {
        this.seedChest.store(item)
      }
    })
  }

  sort() {
    this.materialChest.items.sort((a, b) => a.name.localeCompare(b.name))
    this.seedChest.items.sort((a, b) => a.name.localeCompare(b.name))
    this.foodChest.items.sort((a, b) => a.name.localeCompare(b.name))
  }

  materials() {
    return this.materialChest.items
  }

  seeds() {
    return this.seedChest.items
  }

  food() {
    return this.foodChest.items
  }
}