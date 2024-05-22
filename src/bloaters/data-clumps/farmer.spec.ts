import {Farmer} from './farmer'

describe('Farmer', () => {
  it('should catch fish', () => {
    const farmer = new Farmer()
    farmer.catchFish('Salmon', 75, 48)
    expect(farmer.inventory).toStrictEqual([{ fishName: 'Salmon', fishPrice: 75, fishSize: 48 }])
  })

  it('should sell fish', () => {
    const farmer = new Farmer()
    farmer.catchFish('Carp', 30, 22)
    farmer.sellFish('Carp', 30, 22)
    expect(farmer.inventory).toStrictEqual([])
    expect(farmer.coins).toEqual(130)
  })
})