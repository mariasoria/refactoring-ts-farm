import {Farmer} from './farmer'

describe('Farmer', () => {
  it('should make jam', () => {
    const fruit = {name: 'Banana', price: 150}
    const farmer = new Farmer()

    const jam = farmer.makeJam(fruit)

    expect(jam).toEqual({name: 'Jelly', price: 350})
  })

  it('should make pickle', () => {
    const vegetable = {name: 'Parsnip', price: 35}
    const farmer = new Farmer()

    const pickle = farmer.makePickle(vegetable)

    expect(pickle).toEqual({name: 'Pickles', price: 120})
  })
})