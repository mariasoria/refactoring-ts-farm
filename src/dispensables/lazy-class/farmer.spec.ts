import {Farmer} from './farmer'
import {Chicken} from './chicken'

describe('Farmer', () => {
  it('should pick up product from animal', () => {
    const farmer = new Farmer()
    const animal = new Chicken()
    farmer.pickUpProductFrom(animal)
    expect(farmer.inventory).toEqual([{name: 'Egg', price: 50}])
  })
})