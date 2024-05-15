import {Item} from './item'
import {Furnace} from './furnace'
import {Backpack} from './backpack'
import {FarmStorage} from './farm-storage'
import {Tool} from './tool'
import {Material} from './material'
import {CharcoalKiln} from './charcoal-kiln'

export class Farmer {
  backpack: Backpack = new Backpack()
  farmStorage: FarmStorage = new FarmStorage()
  furnace: Furnace = new Furnace()
  charcoalKiln: CharcoalKiln = new CharcoalKiln()

  keepInBackpack(items: Item[]) {
    items.forEach((item: Item) => {
      if(this.backpack.items.length < this.backpack.capacity) {
        this.backpack.items.push(item)
      } else {
        throw new Error('No space left in backpack')
      }
    })
  }

  castSortedSpell() {
    this.farmStorage.keep(this.backpack.getItems())
    this.backpack.empty()
    this.farmStorage.sort()
  }

  createCoalFromWood(woods: Material) {
    this.charcoalKiln.addIngredients([woods])
    return this.charcoalKiln.createCoal()
  }

  improveToolToCooper(tool: Tool, woods: Material, cooperOres: Material[], coals: Material) {
    const cooperBars: Material = new Material('cooper bar', 0)
    cooperOres.forEach((cooperOre: Material) => {
      while(coals.quantity > 0){
        this.furnace.addIngredients([cooperOre, new Material('coal',1)])
        coals.quantity--
        cooperBars.quantity++
      }
    })
    tool.improveToCooper(cooperBars, woods)
  }

  improveToolToSteel(tool: Tool, woods: Material, ironOres: Material[], coals: Material) {
    const ironBars: Material = new Material('iron bar', 0)
    ironOres.forEach((ironOre: Material) => {
      while(coals.quantity > 0){
        this.furnace.addIngredients([ironOre, new Material('coal',1)])
        coals.quantity--
        ironBars.quantity++
      }
    })
    tool.improveToSteel(ironBars, woods)
  }
}
