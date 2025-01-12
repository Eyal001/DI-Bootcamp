import { RecipeItem } from "./RecipeItem";

export class RecipeCollection {
  recipes: RecipeItem[] = [];

  constructor() {}

  addRecipe(recipe: RecipeItem): void {
    this.recipes.push(recipe);
    this.saveToLocalStorage();
  }

  removeRecipe(id: string): void {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
    this.saveToLocalStorage();
  }

  toggleFavorite(id: string): void {
    const recipe = this.recipes.find((recipe) => recipe.id === id);
    if (recipe) {
      recipe.isFavorite = !recipe.isFavorite;
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage(): void {
    localStorage.setItem("recipes", JSON.stringify(this.recipes));
  }

  loadFromLocalStorage(): void {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      this.recipes = JSON.parse(storedRecipes).map((recipe: any) => {
        const recipeItem = new RecipeItem(
          recipe.title,
          recipe.ingredients,
          recipe.instructions
        );
        recipeItem.isFavorite = recipe.isFavorite;
        return recipeItem;
      });
    }
  }
}
