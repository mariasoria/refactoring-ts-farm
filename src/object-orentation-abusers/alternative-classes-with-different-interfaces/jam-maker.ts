import {Product} from './product'

export class JamMaker {
  processFruit(fruit: Product): Product {
    return {name: 'Jelly', price: 2 * fruit.price + 50}
  }
}