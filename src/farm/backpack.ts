import {Item} from './item'

export class Backpack {
  items: Item[] = []
  capacity: number = 8

  empty() {
    this.items = []
  }

  getItems() {
    return this.items
  }
}