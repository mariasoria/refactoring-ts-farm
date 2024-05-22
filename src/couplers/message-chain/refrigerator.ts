import { EggTray } from './egg-tray'

export class Refrigerator {
  private eggTray: EggTray = new EggTray()

  getEggTray(): EggTray {
    return this.eggTray
  }
}