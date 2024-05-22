import {Product} from './product'

export class PickleMaker {
  processVegetable(vegetable: Product): Product {
    return {name: 'Pickles', price: 2 * vegetable.price + 50}
  }
}