import {Item} from './item'

export class Chest {
  capacity: number
  items: Item[] = []
  itemToStore: Item | null = null
  constructor(capacity: number = 16) {
      this.capacity = capacity
  }

  store (item: Item) {
    this.itemToStore = item
    // @ts-ignore
    const storedItems = this.items.filter((chestItem) => chestItem.name === this.itemToStore.name)

    if(storedItems.length === 0 && this.hasSpace()) {
      this.items.push(this.itemToStore)
      return
    }

    storedItems.forEach((storedItem: Item) => {
      if(storedItem.quantity < 5) {
        // @ts-ignore
        while (this.itemToStore.quantity !==0 && storedItem.quantity < 5) {
          storedItem.quantity++
          // @ts-ignore
          this.itemToStore.quantity--
        }
      }
    })

    if(this.itemToStore.quantity !== 0 && this.hasSpace()) {
      this.items.push(this.itemToStore)
    }
    this.itemToStore = null
  }

  hasSpace(): boolean {
    return this.items.length < this.capacity
  }
}