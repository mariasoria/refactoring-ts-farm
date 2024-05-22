import {Animal} from './animal'
import {Product} from './product'

export class ProductHandler {
  pickUpProductFrom(animal: Animal): Product[] {
    return animal.pickUp()
  }
}