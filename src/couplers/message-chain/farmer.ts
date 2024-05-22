import { Kitchen } from './kitchen'
import {Product} from './product'

export class Farmer {
  kitchen: Kitchen = new Kitchen()
  inventory: Product[] = []

  makePancakes(): void {
    const ingredients: Product[] = [{name: 'Wheat Flour', energy: 13, health: 5}, {name: 'Egg', energy: 25, health: 11}]
    ingredients.forEach(ingredient => {
      const storedIngredient = this.inventory.find(product => product.name === ingredient.name)
      if(!storedIngredient) {
        throw new Error('You do not have ' + ingredient.name)
      } else {
        this.inventory = this.inventory.filter(product => product.name !== storedIngredient.name)
      }
    })
    this.inventory.push({name: 'Pancakes', energy: 90, health: 40})
  }

  getFlour() {
    this.inventory.push(this.kitchen.getCupboard().getShelf().getFlour())
  }

  getEgg() {
    this.inventory.push(this.kitchen.getRefrigerator().getEggTray().getEgg())
  }

}