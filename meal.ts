import * as category from './category'
import * as recipe from './recipe'
import * as ingredient from './ingredient'

export class Meal {
    private name: string
    private elements: category.CategoryType[] | undefined

    constructor(name: string, ingredients: string[], private catalog :string = 'ingredients.csv', private recipes: string = 'recipes.csv') { 
        this.name = name
        this.elements = this.checkIngredients(ingredients)
    }

    checkIngredients(ingredients: string[]) : category.CategoryType[] | undefined{
        const catalog = ingredient.Ingredient.readCSV(this.catalog)
        let invalid = false
        let elements : category.CategoryType[] = []
        ingredients.forEach(ingredient => {
            let category = catalog.get(ingredient)
            if(category) {
                elements.push(category)
            } else {
                invalid = false
                console.warn(`This meal contains an unknown ingredient ${ingredient}.`)
            }
        })
        return invalid? undefined : elements.sort()
    }

    checkRecipe(name: string) : boolean {
        if(this.elements == undefined)
            return false
        const recipebook = new recipe.RecipeBook(this.recipes)
        const recipeElements = recipebook.getRecipe(name)?.sort()
        const match = (this.elements.toString() === recipeElements?.toString())
        console.log(`${match? '': 'NO'} MATCH -- ${this.name} ingredients: ${this.elements} / Recipe elements: ${recipeElements}`)
        return match
    }
}

const args = process.argv.slice(2)
const mealname : string = args[0]
const mealrecipe : string = args[1]
const checkAgainst: string = args[2]
const catalog : string = args[3]
const recipes : string = args[4]

const myMeal = new Meal(mealname, mealrecipe.split(','), catalog, recipes)
myMeal.checkRecipe(checkAgainst)

export default Meal