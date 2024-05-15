import {CharcoalKiln} from '../src/farm/charcoal-kiln'
import {Material} from '../src/farm/material'

describe('Charcoal kiln', () => {
  let charcoalKiln: CharcoalKiln
  let wood: Material

  beforeEach(() => {
    charcoalKiln = new CharcoalKiln()
    wood = new Material('wood', 5)
  })

  it('should add ingredients', () => {
    charcoalKiln.addIngredients([wood])
    expect(charcoalKiln.ingredients).toEqual([wood])
  })

  it('should create a coal when there are enough woods', () => {
    charcoalKiln.addIngredients([wood])
    const coal = charcoalKiln.createCoal()
    expect(coal).toEqual(new Material('coal', 1))
  })

  it('should not create a coal when there are not enough woods', () => {
    wood = new Material('wood', 4)
    charcoalKiln.addIngredients([wood])
    expect(() => charcoalKiln.createCoal()).toThrow('Not enough woods')
  })
})