import { RecipeCollection } from "./model/RecipeCollection";
import { RecipeItem } from "./model/RecipeItem";
import { RecipeTemplate } from "./templates/RecipeTemplate";

const recipeCollection = new RecipeCollection();
const recipeTemplate = new RecipeTemplate();

recipeCollection.loadFromLocalStorage();
recipeTemplate.renderRecipes(recipeCollection.recipes);

document.getElementById("recipeEntryForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = (document.getElementById("recipeTitle") as HTMLInputElement)
    .value;
  const ingredientsText = (
    document.getElementById("ingredients") as HTMLTextAreaElement
  ).value;
  const instructions = (
    document.getElementById("instructions") as HTMLTextAreaElement
  ).value;

  const ingredients = ingredientsText
    .split("\n")
    .map((ingredient) => ingredient.trim());

  const newRecipe = new RecipeItem(title, ingredients, instructions);
  recipeCollection.addRecipe(newRecipe);

  recipeTemplate.renderRecipes(recipeCollection.recipes);

  (document.getElementById("recipeTitle") as HTMLInputElement).value = "";
  (document.getElementById("ingredients") as HTMLTextAreaElement).value = "";
  (document.getElementById("instructions") as HTMLTextAreaElement).value = "";
});

document.getElementById("clearRecipesButton")!.addEventListener("click", () => {
  localStorage.removeItem("recipes");
  recipeCollection.recipes = [];
  recipeTemplate.renderRecipes(recipeCollection.recipes);
});

window.addEventListener("toggleFavorite", (e: CustomEvent) => {
  const recipeId = e.detail;
  recipeCollection.toggleFavorite(recipeId);
  recipeTemplate.renderRecipes(recipeCollection.recipes);
});

window.addEventListener("deleteRecipe", (e: CustomEvent) => {
  const recipeId = e.detail;
  recipeCollection.removeRecipe(recipeId);
  recipeTemplate.renderRecipes(recipeCollection.recipes);
});
