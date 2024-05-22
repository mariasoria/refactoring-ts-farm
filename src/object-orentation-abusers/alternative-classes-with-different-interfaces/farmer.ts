import {JamMaker} from './jam-maker'
import {PickleMaker} from './pickle-maker'
import {Product} from './product'

export class Farmer {
  jamMaker: JamMaker = new JamMaker()
  pickleMaker: PickleMaker = new PickleMaker()

  makeJam(fruit: Product): Product {
    return this.jamMaker.processFruit(fruit)
  }

  makePickle(vegetable: Product): Product {
    return this.pickleMaker.processVegetable(vegetable)
  }

}