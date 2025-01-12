import { RecipeItem } from "../model/RecipeItem";

export class RecipeTemplate {
  private recipeContainer: HTMLElement | null;

  constructor() {
    this.recipeContainer = document.getElementById("recipeContainer");
  }

  renderRecipe(recipe: RecipeItem): HTMLElement {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    const title = document.createElement("h2");
    title.textContent = recipe.title;
    recipeCard.appendChild(title);

    const ingredients = document.createElement("ul");
    recipe.ingredients.forEach((ingredient) => {
      const ingredientItem = document.createElement("li");
      ingredientItem.textContent = ingredient;
      ingredients.appendChild(ingredientItem);
    });
    recipeCard.appendChild(ingredients);

    const instructions = document.createElement("p");
    instructions.textContent = recipe.instructions;
    recipeCard.appendChild(instructions);

    const favoriteButton = document.createElement("span");
    favoriteButton.textContent = recipe.isFavorite ? "❤️" : "♡";
    favoriteButton.onclick = () => this.toggleFavorite(recipe.id);
    recipeCard.appendChild(favoriteButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "X";
    deleteButton.onclick = () => this.deleteRecipe(recipe.id);
    recipeCard.appendChild(deleteButton);

    return recipeCard;
  }

  renderRecipes(recipes: RecipeItem[]): void {
    this.recipeContainer.innerHTML = "";
    recipes.forEach((recipe) => {
      this.recipeContainer?.appendChild(this.renderRecipe(recipe));
    });
  }

  // Create a custom event to trigger an event listener and call the toggleFavorite method from the RecipeCollection class.
  toggleFavorite(id: string): void {
    const event = new CustomEvent("toggleFavorite", { detail: id });
    window.dispatchEvent(event);
  }

  deleteRecipe(id: string): void {
    const event = new CustomEvent("deleteRecipe", { detail: id });
    window.dispatchEvent(event);
  }
}
