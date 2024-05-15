import {Item} from './item'

export class Food extends Item {
  constructor(name: string, quantity: number) {
    super(name, quantity)
  }
}