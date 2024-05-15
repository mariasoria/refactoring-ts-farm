export class Item {
  name: string
  quantity: number

  constructor(name:string, quantity: number = 0) {
      this.name = name
      this.quantity = quantity
  }
}