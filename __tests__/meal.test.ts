import * as meal from '../meal'

describe('testing the meal checking', () => {
    it('detects wrong ingredients', async () => {
        const myMeal = new meal.Meal('myMeal', ['lettuce','unknown'], './__tests__/resources/catalog.csv', './__tests__/resources/recipes.csv')
        expect(myMeal.checkRecipe('recipe1')).toBeFalsy()
    })

    it('checks properly', async () => {
        const myMeal = new meal.Meal('myMeal', ['lettuce','ham'], './__tests__/resources/catalog.csv', './__tests__/resources/recipes.csv')
        expect(myMeal.checkRecipe('recipe1')).toBeFalsy()
        expect(myMeal.checkRecipe('recipe2')).toBeTruthy()
        const myMealOtherOrder = new meal.Meal('myMeal', ['ham','lettuce'], './__tests__/resources/catalog.csv', './__tests__/resources/recipes.csv')
        expect(myMealOtherOrder.checkRecipe('recipe2')).toBeTruthy()
    })

})
