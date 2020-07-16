import  { Ingredient, IngredientMap } from '../ingredient'
import { CategoryType } from '../category'

describe('testing the ingredients map creation', () => {
    const expected: IngredientMap = new Map<string,CategoryType>()
    expected.set('ingredient1', 'vegetable')
    expected.set('ingredient3', 'protein')
    it('returns a valid map', async () => {
      expect(Ingredient.readCSV("./__tests__/resources/ingredients-valid.csv")).toEqual(expected)
    })

    const expected2: IngredientMap = new Map<string,CategoryType>()
    expected2.set('ingredient1', 'vegetable')
    expected2.set('ingredient3', 'vegetable')
    it('removes invalid entries', async () => {
      expect(Ingredient.readCSV("./__tests__/resources/ingredients-invalid.csv")).toEqual(expected2)
    })
})
