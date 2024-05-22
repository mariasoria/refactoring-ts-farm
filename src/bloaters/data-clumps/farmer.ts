export class Farmer {
  inventory: any[] = []
  coins: number = 100

  catchFish(fishName: string, fishPrice: number, fishSize: number) {
    console.log('You caught a ' + fishName + '! Length: ' + fishSize + ' in.')
    this.inventory.push({
      fishName: fishName,
      fishPrice: fishPrice,
      fishSize: fishSize
    })
  }

  sellFish(fishName: string, fishPrice: number, fishSize: number) {
    this.coins += fishPrice
    this.inventory = this.inventory.filter(fish => fish.fishName !== fishName)
    console.log('You sold an ' + fishSize + ' inches ' + fishName + ' for ' + fishPrice + ' coins!')
  }
}