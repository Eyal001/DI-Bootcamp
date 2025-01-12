export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
  image: string;
}

export interface Recipe {
  id: number;
  title: string;
  image: string;
  instructions: string;
  readyInMinutes: number;
  servings: number;
  extendedIngredients: Ingredient[];
}

export interface DataFetcherProps<T> {
  recipes: T[];
  loading: boolean;
  error: string | null;
}
