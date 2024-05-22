import {Product} from './product'

export class EggTray {
  getEgg(): Product {
    return {name: 'Egg', energy: 25, health: 11} as Product
  }
}