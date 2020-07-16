import * as recipe from '../recipe'

describe('testing the recipe book creation', () => {
    it('returns a valid book', async () => {
      const recipebook = new recipe.RecipeBook('./__tests__/resources/recipes-valid.csv')
      expect(recipebook.getRecipe('recipe1')).toEqual(['vegetable', 'vegetable', 'protein'])
      expect(recipebook.getRecipe('recipe2')).toEqual(['protein', 'protein', 'protein'])
    })

    it('removes invalid recipes', async () => {
        const recipebook = new recipe.RecipeBook('./__tests__/resources/recipes-invalid.csv')
        expect(recipebook.getRecipe('recipe-valid')).toEqual(['vegetable', 'protein'])
        expect(recipebook.getRecipe('recipe-invalid')).toBeUndefined()
      })
})
