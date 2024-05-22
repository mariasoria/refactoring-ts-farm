import { Shelf } from './shelf'

export class Cupboard {
  private shelf: Shelf = new Shelf()

  getShelf(): Shelf {
    return this.shelf
  }
}