import {Crop} from './crop'
import {Season} from './season'
import {Item} from './item'

export class Seed extends Item {
  growthTime: number
  season: Season
  crop: Crop

  constructor(name: string, price: number, growthTime: number, season: Season, crop: Crop) {
    super(name, price)
    this.growthTime = growthTime
    this.season = season
    this.crop = crop
  }
}