import {Animal} from './animal'

describe('Animal', () => {
  it('should increase the friendship when petting the animal', () => {
    const animal = new Animal()
    animal.pet()
    expect(animal.friendShip).toBe(15)
  })
  it('should increase the friendship when feeding the animal', () => {
    const animal = new Animal()
    animal.feed()
    expect(animal.friendShip).toBe(8)
  })
})