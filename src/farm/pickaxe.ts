import {Tool} from './tool'

export class Pickaxe extends Tool {
    getCooperImprovement() {
        return 'In the Mines, can break all rocks on floors 1-39 in 1 hit and 40-79 in 2 hits.'
    }
    getSteelImprovement() {
        return 'In the Mines, can break rocks on floors 40-79 in 1 hit, and Quarry Mine rocks in 2 hits.'
    }
}