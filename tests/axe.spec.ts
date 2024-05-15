import {Material} from '../src/farm/material'
import {Axe} from '../src/farm/axe'

const COOPER_IMPROVEMENT = 'Can chop Large Stumps. 8 hits to chop a fully-grown tree, and 4 hits for a small stump.'
const STEEL_IMPROVEMENT = 'Can chop Large Logs. 6 hits to chop a fully-grown tree, and 3 hits for a small stump. 3 hits for a stage 4 tree, and 2 hits for a stage 3 tree and below.'

describe('Axe', () => {
  let axe: Axe
  let cooperBars: Material
  let ironBars: Material
  let woods: Material

  beforeEach(() => {
    axe = new Axe()
    cooperBars = new Material('cooper bar', 5)
    ironBars = new Material('iron bar', 5)
    woods = new Material('wood', 5)
  })

  it('should change its improvement when improved to cooper', () => {
    axe.improveToCooper(cooperBars, woods)
    expect(axe.improvement).toBe(COOPER_IMPROVEMENT)
  })

  it('should change its improvement when improved to steel', () => {
    axe.improveToCooper(cooperBars, woods)
    axe.improveToSteel(ironBars, woods)
    expect(axe.improvement).toBe(STEEL_IMPROVEMENT)
  })
})