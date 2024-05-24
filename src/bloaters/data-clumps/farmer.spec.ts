import {Farmer} from './farmer'

describe('Farmer', () => {
  it('should catch fish', () => {
    const farmer = new Farmer()
    farmer.catchFish({fishName : 'Salmon', fishPrice : 75, fishSize : 48})
    expect(farmer.inventory).toStrictEqual([{ fishName: 'Salmon', fishPrice: 75, fishSize: 48 }])
  })

  it('should sell fish', () => {
    const farmer = new Farmer()
    farmer.catchFish({fishName : 'Carp', fishPrice : 30, fishSize : 22})
    farmer.sellFish({fishName : 'Carp', fishPrice : 30, fishSize : 22})
    expect(farmer.inventory).toStrictEqual([])
    expect(farmer.coins).toEqual(130)
  })
})