import {Furnace} from '../src/farm/furnace'
import {Material} from '../src/farm/material'

describe('Furnace', () => {
  let furnace: Furnace
  let ironOres: Material
  let coal: Material
  let cooperOres: Material

  beforeEach(() => {
    furnace = new Furnace()
    ironOres = new Material('iron ore', 5)
    coal = new Material('coal', 1)
    cooperOres = new Material('cooper ore', 5)
  })

  describe('create cooper bar', () => {
    it('should create a cooper bar when there are enough materials', () => {
      furnace.addIngredients([cooperOres, coal])

      const cooperBar = furnace.createCooperBar()

      expect(cooperBar.name).toBe('cooper bar')
      expect(cooperBar.quantity).toBe(1)
    })

    it('should not create a cooper bar when there are not enough cooper ores', () => {
      cooperOres = new Material('cooper ore', 3)
      furnace.addIngredients([cooperOres])

      expect(() => {
        furnace.createCooperBar()
      }).toThrowError('Not enough materials to create cooper bar')
    })
  })

  describe('create iron bar', () => {
    it('should create an iron bar when there are enough materials', () => {
      furnace.addIngredients([ironOres, coal])

      const ironBar = furnace.createIronBar()

      expect(ironBar.name).toBe('iron bar')
      expect(ironBar.quantity).toBe(1)
    })

    it('should not when there are not enough iron ores', () => {
      ironOres = new Material('iron ore', 3)
      furnace.addIngredients([ironOres, coal])

      expect(() => {
        furnace.createIronBar()
      }).toThrowError('Not enough materials to create iron bar')
    })
  })
})