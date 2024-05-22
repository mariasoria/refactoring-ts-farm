import {JamMaker} from './jam-maker'

describe('Jam Maker', () => {
  it('should process fruit', () => {
    const fruit = {name: 'Apple', price: 100}
    const jamMaker = new JamMaker()
    const jam = jamMaker.processFruit(fruit)
    expect(jam).toEqual({name: 'Jelly', price: 250})
  })
})