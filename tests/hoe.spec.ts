import {Material} from '../src/farm/material'
import {Hoe} from '../src/farm/hoe'

const COOPER_IMPROVEMENT = 'Increases maximum area of effect to 3 tiles in a straight line.'
const STEEL_IMPROVEMENT = 'Increases maximum area of effect to 5 tiles in a straight line.'


describe('Hoe', () => {
  let hoe: Hoe
  let cooperBars: Material
  let ironBars: Material
  let woods: Material

  beforeEach(() => {
    hoe = new Hoe()
    cooperBars = new Material('cooper bar', 5)
    ironBars = new Material('iron bar', 5)
    woods = new Material('wood', 5)
  })

  describe('improve to cooper', () => {
    it('should change its improvement when improved to cooper', () => {
      hoe.improveToCooper(cooperBars, woods)
      expect(hoe.improvement).toBe(COOPER_IMPROVEMENT)
    })
  })

  describe('improve to steel', () => {
    it('should change its improvement when improved to steel', () => {
      hoe.improveToCooper(cooperBars, woods)
      hoe.improveToSteel(ironBars, woods)
      expect(hoe.improvement).toBe(STEEL_IMPROVEMENT)
    })
  })
})