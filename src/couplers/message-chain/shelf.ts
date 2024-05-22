import {Product} from './product'

export class Shelf {
  getFlour(): Product {
    return {name: 'Wheat Flour', energy: 13, health: 5} as Product
  }
}