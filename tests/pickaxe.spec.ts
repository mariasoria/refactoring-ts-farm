import {Material} from '../src/farm/material'
import {Pickaxe} from '../src/farm/pickaxe'

const COOPER_IMPROVEMENT = 'In the Mines, can break all rocks on floors 1-39 in 1 hit and 40-79 in 2 hits.'
const STEEL_IMPROVEMENT = 'In the Mines, can break rocks on floors 40-79 in 1 hit, and Quarry Mine rocks in 2 hits.'

describe('Pickaxe', () => {
  let pickaxe: Pickaxe
  let cooperBars: Material
  let ironBars: Material
  let woods: Material

  beforeEach(() => {
    pickaxe = new Pickaxe()
    cooperBars = new Material('cooper bar', 5)
    ironBars = new Material('iron bar', 5)
    woods = new Material('wood', 5)
  })

  it('should change its improvement when upgraded to cooper', () => {
    pickaxe.improveToCooper(cooperBars, woods)

    expect(pickaxe.improvement).toBe(COOPER_IMPROVEMENT)
  })

  it('should change its improvement when upgraded to steel', () => {
    pickaxe.improveToCooper(cooperBars, woods)
    pickaxe.improveToSteel(ironBars, woods)

    expect(pickaxe.improvement).toBe(STEEL_IMPROVEMENT)
  })
})