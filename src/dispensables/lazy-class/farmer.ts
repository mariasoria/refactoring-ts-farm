import {ProductHandler} from './product-handler'
import {Animal} from './animal'
import {Product} from './product'

export class Farmer {
  productHandler: ProductHandler = new ProductHandler()
  inventory: Product[] = []

  pickUpProductFrom(animal: Animal) {
    this.inventory.push(...this.productHandler.pickUpProductFrom(animal))
  }
}