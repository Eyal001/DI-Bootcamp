import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadRecipes } from "../features/dataSlice";
import { AppDispatch } from "../store/store";
import { DataFetcherProps, Recipe } from "../types/types";

const DataFetcher = ({ recipes, loading, error }: DataFetcherProps<Recipe>) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <p>
            <strong>Instructions:</strong> {recipe.instructions}
          </p>
          <p>
            <strong>Ready in:</strong> {recipe.readyInMinutes} minutes
          </p>
          <p>
            <strong>Servings:</strong> {recipe.servings}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DataFetcher;
