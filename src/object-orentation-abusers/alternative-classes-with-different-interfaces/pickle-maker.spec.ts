import {PickleMaker} from './pickle-maker'

describe('Pickle Maker', () => {
  it('should process fruit', () => {
    const vegetable = {name: 'Eggplant', price: 60}
    const pickleMaker = new PickleMaker()
    const pickle = pickleMaker.processVegetable(vegetable)
    expect(pickle).toEqual({name: 'Pickles', price: 170})
  })
})