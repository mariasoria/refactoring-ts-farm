import {Material} from '../src/farm/material'
import {Tool} from '../src/farm/tool'

describe('Tool', () => {
  let tool: Tool
  let cooperBars: Material
  let ironBars: Material
  let woods: Material

  beforeEach(() => {
    tool = new Tool()
    cooperBars = new Material('cooper bar', 5)
    ironBars = new Material('iron bar', 5)
    woods = new Material('wood', 5)
  })

  describe('improve to cooper', () => {
    it('should change its material when improved to cooper', () => {
      tool.improveToCooper(cooperBars, woods)
      expect(tool.material).toBe('cooper')
    })

    it('should not improve the tool when there are not enough materials', () => {
      cooperBars = new Material('cooper bar', 4)
      expect(() => tool.improveToCooper(cooperBars, woods)).toThrowError('Not enough materials to improve to cooper')
    })

    it('should not improve the tool when trying to improve from steel', () => {
      tool = new Tool('steel', 'irrelevant improvement')
      expect(() => tool.improveToCooper(cooperBars, woods)).toThrowError('Cannot improve tool to cooper')
    })
  })

  describe('improve to steel', () => {
    it('should change its material when improved to steel', () => {
      tool = new Tool('cooper', 'irrelevant improvement')
      tool.improveToSteel(ironBars, woods)
      expect(tool.material).toBe('steel')
    })

    it('should not improve the tool when there are not enough materials', () => {
      tool = new Tool('cooper', 'irrelevant improvement')
      ironBars = new Material('iron bar', 4)
      expect(() => tool.improveToSteel(ironBars, woods)).toThrowError('Not enough materials to improve to steel')
    })

    it('should not improve the tool when trying to improve from stone', () => {
      expect(() => tool.improveToSteel(ironBars, woods)).toThrowError('Cannot improve tool to steel')
    })
  })
})