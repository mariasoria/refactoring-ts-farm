import {Tool} from './tool'

export class Axe extends Tool {
    getCooperImprovement() {
        return 'Can chop Large Stumps. 8 hits to chop a fully-grown tree, and 4 hits for a small stump.'
    }
    getSteelImprovement() {
        return 'Can chop Large Logs. 6 hits to chop a fully-grown tree, and 3 hits for a small stump. 3 hits for a stage 4 tree, and 2 hits for a stage 3 tree and below.'
    }
}