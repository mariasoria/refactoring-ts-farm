import {Chest} from '../src/farm/chest'
import {Food} from '../src/farm/food'
import {Item} from '../src/farm/item'
import {Material} from '../src/farm/material'

describe('Chest', () => {
  it('should store an item', () => {
    const chest = new Chest()
    const item = new Food('wild onion', 5)
    chest.store(item)
    expect(chest.items).toStrictEqual([item])
  })

  it('should discards items that do not fit in farm', () => {
    const items: Item[] = [
      new Material('wood', 5),
      new Material('wood', 5),
      new Material('wood', 5),
      new Material('wood', 2),
      new Material('stone', 5),
      new Material('stone', 5),
      new Material('stone', 5),
      new Material('stone', 3),
      new Material('wood', 5),
      new Material('wood', 5),
      new Material('wood', 5),
      new Material('stone', 5),
      new Material('stone', 5),
      new Material('stone', 5),
      new Material('stone', 4),
      new Material('coal', 2),
      new Material('wood', 5),
      new Material('wood', 5),
      new Material('wood', 5),
      new Material('wood', 5),
      new Material('wood', 5),
      new Material('coal', 5),
      new Material('coal', 5),
      new Material('coal', 5)
    ]

    const chest = new Chest()
    items.forEach(item => chest.store(item))

    const materials: Item[] = [
      new Material('wood', 5),
      new Material('wood', 5),
      new Material('wood', 5),
      new Material('wood', 5),
      new Material('stone', 5),
      new Material('stone', 5),
      new Material('stone', 5),
      new Material('stone', 5),
      new Material('wood', 5),
      new Material('wood', 5),
      new Material('wood', 5),
      new Material('stone', 5),
      new Material('stone', 5),
      new Material('stone', 5),
      new Material('stone', 2),
      new Material('coal', 5),
  ]

    expect(chest.items).toStrictEqual(materials)
  })
})