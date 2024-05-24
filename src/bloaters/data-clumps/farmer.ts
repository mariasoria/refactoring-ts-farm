interface FishParams {
  fishName: string;
  fishPrice: number;
  fishSize: number;
}

export class Farmer {
  inventory: any[] = []
  coins: number = 100

  catchFish({fishName, fishPrice, fishSize}: FishParams) {
    console.log('You caught a ' + fishName + '! Length: ' + fishSize + ' in.')
    this.inventory.push({
      fishName: fishName,
      fishPrice: fishPrice,
      fishSize: fishSize
    })
  }

  sellFish({fishName, fishPrice, fishSize}: FishParams) {
    this.coins += fishPrice
    this.inventory = this.inventory.filter(fish => fish.fishName !== fishName)
    console.log('You sold an ' + fishSize + ' inches ' + fishName + ' for ' + fishPrice + ' coins!')
  }
}