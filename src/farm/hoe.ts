import {Tool} from './tool'

export class Hoe extends Tool {

  getCooperImprovement() {
    return 'Increases maximum area of effect to 3 tiles in a straight line.'
  }

  getSteelImprovement() {
    return 'Increases maximum area of effect to 5 tiles in a straight line.'
  }
}