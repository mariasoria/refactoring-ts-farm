import {Item} from '../src/farm/item'
import {Material} from '../src/farm/material'
import {Food} from '../src/farm/food'
import {Seed} from '../src/farm/seed'
import {FarmStorage} from '../src/farm/farm-storage'

function createItems(): Item[] {
  return [
    new Material('wood', 5),
    new Material('stone', 3),
    new Food('mushroom', 1),
    new Seed('wheat seed', 4),
    new Seed('potato seed', 2)
  ]
}

describe('Farm storage', () => {
  let farmStorage: FarmStorage
  let items: Item[]

  beforeEach(() => {
    farmStorage = new FarmStorage()
    items = createItems()
    farmStorage.keep(items)
  })

  describe('keeping items', () => {
    it('should keep items in the specific chest', () => {
      const materials: Item[] = [
        new Material('wood', 5),
        new Material('stone', 3)
      ]
      const seeds: Item[] = [
        new Seed('wheat seed', 4),
        new Seed('potato seed', 2)
      ]
      const food: Item[] = [
        new Food('mushroom', 1)
      ]

      expect(farmStorage.materials()).toStrictEqual(materials)
      expect(farmStorage.seeds()).toStrictEqual(seeds)
      expect(farmStorage.food()).toStrictEqual(food)
    })
  })

  describe('sorting items', () => {
    it('should sort items in the farm', () => {
      const sortedMaterials: Item[] = [
        new Material('stone', 3),
        new Material('wood', 5)
      ]
      const sortedSeeds: Item[] = [
        new Seed('potato seed', 2),
        new Seed('wheat seed', 4)
      ]
      const sortedFood: Item[] = [
        new Food('mushroom', 1)
      ]
      farmStorage.sort()

      expect(farmStorage.materials()).toStrictEqual(sortedMaterials)
      expect(farmStorage.seeds()).toStrictEqual(sortedSeeds)
      expect(farmStorage.food()).toStrictEqual(sortedFood)
    })
  })
})