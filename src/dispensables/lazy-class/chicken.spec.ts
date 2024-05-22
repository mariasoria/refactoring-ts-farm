import {Chicken} from './chicken'

describe('Chicken', () => {
  it('should drop a large egg when the friendship is greater than or equal to 700', () => {
    const chicken = new Chicken()
    chicken.friendShip = 700
    expect(chicken.pickUp()).toEqual([{name: 'Large Egg', price: 95}])
  })
  it('should drop a normal egg when the friendship is less than 700', () => {
    const chicken = new Chicken()
    chicken.friendShip = 50
    expect(chicken.pickUp()).toEqual([{name: 'Egg', price: 50}])
  })
  it('should increase the friendship by 5 when picking up the egg', () => {
    const chicken = new Chicken()
    chicken.pickUp()
    expect(chicken.friendShip).toBe(5)
  })
})