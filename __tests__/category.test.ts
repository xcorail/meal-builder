import * as category from '../category'

describe('a dummy test: checked by type anyway', () => {
    it('tests something', async () => {
      expect(category.CATEGORIES.includes('vegetable')).toBeTruthy()
    })
})
  
  