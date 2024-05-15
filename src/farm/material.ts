import {Item} from './item'

export class Material extends Item {
  constructor(name: string, quantity: number) {
    super(name, quantity)
  }
}