import {Material} from './material'

export class CharcoalKiln {
  ingredients: Material[] = []

  addIngredients(ingredients: Material[]) {
    this.ingredients = ingredients
  }

  createCoal(): Material | void  {
    const woods = this.ingredients.find((ingredient: Material) => ingredient.name === 'wood')

    if (!woods || woods.quantity < 5) {
      throw new Error('Not enough woods')
    }

    return new Material('coal', 1)
  }
}