import { Cupboard } from './cupboard'
import { Refrigerator } from './refrigerator'

export class Kitchen {
  private cupboard: Cupboard = new Cupboard()
  private refrigerator: Refrigerator = new Refrigerator()

  getCupboard(): Cupboard {
    return this.cupboard
  }

  getRefrigerator(): Refrigerator {
    return this.refrigerator
  }
}