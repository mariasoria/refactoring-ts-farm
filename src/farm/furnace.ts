import {CharcoalKiln} from './charcoal-kiln'
import {Material} from './material'

export class Furnace extends CharcoalKiln{
  createCoal() {
    throw new Error('Cannot create coal in furnace')
  }

  createIronBar(): Material {
    const irons = this.ingredients.find((ingredient) => ingredient.name === 'iron ore')
    const coal = this.ingredients.find((ingredient) => ingredient.name === 'coal')
    if (!irons || irons.quantity < 5 || !coal || coal.quantity < 1) {
      throw new Error('Not enough materials to create iron bar')
    }
    return new Material('iron bar', 1)
  }

  createCooperBar(): Material {
    const coopers = this.ingredients.find((ingredient) => ingredient.name === 'cooper ore')
    const coal = this.ingredients.find((ingredient) => ingredient.name === 'coal')
    if (!coopers || coopers.quantity < 5 || !coal || coal.quantity < 1) {
      throw new Error('Not enough materials to create cooper bar')
    }
    return new Material('cooper bar', 1)
  }
}