import {FarmingLevelManager} from './farming-level-manager'
import {FishingLevelManager} from './fishing-level-manager'
import {MiningLevelManager} from './mining-level-manager'

export class Farmer {
  farmingLevelManager: FarmingLevelManager = new FarmingLevelManager()
  miningLevelManager: MiningLevelManager = new MiningLevelManager()
  fishingLevelManager: FishingLevelManager = new FishingLevelManager()

  levelUpFarming() {
    this.farmingLevelManager.levelUp()
  }

  levelUpMining() {
    this.miningLevelManager.levelUp()
  }

  levelUpFishing() {
    this.fishingLevelManager.levelUp()
  }
}