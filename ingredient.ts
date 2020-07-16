import * as category from './category'
import * as csv from 'csv-string';
const fs = require('fs');

export type IngredientMap = Map<string, category.CategoryType>

export class Ingredient {
    static readCSV(filename: string): IngredientMap {
        let result: IngredientMap = new Map<string, category.CategoryType>()
        try {
            csv.parse(fs.readFileSync(filename, {encoding:'utf8', flag:'r'})).forEach( row => {
                const ingredient = row[0].trim()
                const cat = row[1].trim()
                if(category.CATEGORIES.includes(cat as category.CategoryType)) {
                    result.set(ingredient, cat as category.CategoryType)
                } else {
                    console.warn(`${cat} is not a valid category. Valid categories: ${category.CATEGORIES}`);
                }
            })
        } catch(err) {
            console.error(err);
        }
        return result
    }
}
