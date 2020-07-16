read -p "Enter meal name: " mealname
read -p "Enter meal components (comma separated): " mealrecipe
read -p "Enter recipe to check: " recipe
read -p "Enter ingredients catalog CSV file (default ingredients.csv)" catalog
read -p "Enter recipes CSV file (default recipes.csv)" recipes

node meal.js $mealname $mealrecipe $recipe $catalog $recipes
