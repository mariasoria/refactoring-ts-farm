import {Product} from './product'
import {Animal} from './animal'

export class Chicken extends Animal{
  pickUp(): Product[] {
    let products = [{name: 'Egg', price: 50}]
    if(this.friendShip >= 700) {
      products = [{name: 'Large Egg', price: 95}]
    }
    this.friendShip += 5
    return products
  }
}