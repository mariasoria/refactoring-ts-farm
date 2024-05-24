import {Animal} from './animal'
import {Product} from './product'

export class Farmer {
  inventory: Product[] = []

  pickUpProductFrom(animal: Animal) {
    this.inventory.push(...(animal.pickUp()))
  }
}