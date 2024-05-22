import {Product} from './product'

export class Animal {
  friendShip: number = 0

  pet() {
    this.friendShip += 15
  }

  feed() {
    this.friendShip += 8
  }

  pickUp(): Product[] {
    this.friendShip += 5
    return []
  }
}