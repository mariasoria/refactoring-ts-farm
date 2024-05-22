import {Farmer} from './farmer'

describe('Farmer', () => {
  it('should cook pancakes', () => {
    const farmer = new Farmer()
    farmer.getFlour()
    farmer.getEgg()
    farmer.makePancakes()
    expect(farmer.inventory).toEqual([{name: 'Pancakes', energy: 90, health: 40}])
  })

  it('should not cook pancakes if there is no egg', () => {
    const farmer = new Farmer()
    farmer.getFlour()
    expect(() => farmer.makePancakes()).toThrowError('You do not have Egg')
  })
})