import * as category from './category'
import * as csv from 'csv-string';
const fs = require('fs');

export class RecipeBook {

    private book: Map<string, category.CategoryType[]>

    constructor(filename: string) {
        this.book = this.readCSV(filename)
    }

    readCSV(filename: string): Map<string, category.CategoryType[]> {
        let result = new Map<string, category.CategoryType[]>()
        try {
            csv.parse(fs.readFileSync(filename, {encoding:'utf8', flag:'r'})).forEach( row => {
                const recipe = row[0].trim()
                const components: category.CategoryType[] = []
                let invalid = false
                for(let component = 1; !invalid && component < row.length; component++) {
                    const cat = row[component].trim()
                    if(category.CATEGORIES.includes(cat as category.CategoryType)) {
                        components.push(cat as category.CategoryType)
                    } else {
                        console.warn(`Wrong recipe ${recipe}: ${cat} is not a valid category. Valid categories: ${category.CATEGORIES}`);
                        invalid = true
                    }
                }
                if(!invalid)
                    result.set(recipe, components)
            })
        } catch(err) {
            console.error(err);
        }
        return result
    }

    getRecipe(name: string): category.CategoryType[] | undefined {
        return this.book.get(name)
    }
}
