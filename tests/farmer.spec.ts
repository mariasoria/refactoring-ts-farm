import {Farmer} from '../src/farm/farmer'
import {Item} from '../src/farm/item'
import {Material} from '../src/farm/material'
import {Food} from '../src/farm/food'
import {Seed} from '../src/farm/seed'
import {Axe} from '../src/farm/axe'
import {Pickaxe} from '../src/farm/pickaxe'

describe('Farmer', () => {
  describe('keep in backpack', () => {
    it('should add an item to the backpack', () => {
      const farmer = new Farmer()
      const item = new Food('apricot', 3)

      farmer.keepInBackpack([item])

      expect(farmer.backpack.getItems()).toStrictEqual([item])
    })
    it('should not add items when the backpack is full', () => {
      const farmer = new Farmer()
      const items: Item[] = [
        new Material('wood', 5),
        new Material('stone', 5),
        new Material('stone', 3),
        new Food('mushroom', 1),
        new Food('trout', 4),
        new Material('cooper ore', 3),
        new Seed('wheat seed', 4),
        new Seed('potato seed', 2)
      ]

      farmer.keepInBackpack(items)

      expect(() => farmer.keepInBackpack([new Food('apricot', 1)])).toThrow('No space left in backpack')
    })
  })
  describe('sorted spell', () => {
    it('should empty the backpack after sorting', () => {
      const items: Item[] = [
        new Material('wood', 5),
        new Material('wood', 2),
        new Material('stone', 3),
        new Food('mushroom', 1),
        new Seed('wheat seed', 4),
        new Seed('potato seed', 2),
        new Food('trout', 1),
        new Material('cooper ore', 3)
      ]
      const farmer = new Farmer()
      farmer.keepInBackpack(items)
      farmer.castSortedSpell()

      expect(farmer.backpack.getItems()).toStrictEqual([])
    })
  })
  describe('improve tool', () => {
    it('should improve the tool to cooper', () => {
      const axe = new Axe()
      const cooperOres: Material[] = [
        new Material('cooper ore', 5),
        new Material('cooper ore', 5),
        new Material('cooper ore', 5),
        new Material('cooper ore', 5),
        new Material('cooper ore', 5)
      ]
      const coals = new Material('coal', 5)
      const woods = new Material('wood', 5)
      const farmer = new Farmer()
      farmer.improveToolToCooper(axe, woods, cooperOres, coals)
      expect(axe.material).toBe('cooper')
    })

    it('should improve the tool to steel', () => {
      const pickaxe = new Pickaxe('cooper', 'irrelevant improvement')
      const ironOres: Material[] = [
        new Material('iron ore', 5),
        new Material('iron ore', 5),
        new Material('iron ore', 5),
        new Material('iron ore', 5),
        new Material('iron ore', 5)
      ]
      const coals = new Material('coal', 5)
      const woods = new Material('wood', 5)
      const farmer = new Farmer()
      farmer.improveToolToSteel(pickaxe, woods, ironOres, coals)
      expect(pickaxe.material).toBe('steel')
    })
  })
  describe('create coal from wood', () => {
    it('should create coal from wood', () => {
      const woods = new Material('wood', 5)
      const farmer = new Farmer()
      const coal = farmer.createCoalFromWood(woods)
      expect(coal).toStrictEqual(new Material('coal', 1))
    })
  })
})