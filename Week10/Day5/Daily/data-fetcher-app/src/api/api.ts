import axios from "axios";
import { Recipe } from "../types/types";

const API_URL =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random";

const options = {
  method: "GET",
  url: API_URL,
  params: { number: "3" },
  headers: {
    "x-rapidapi-key": "24779be0famsha811f8b68361d27p130fedjsnf4cdd9dda6bc",
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchData = async (): Promise<Recipe[]> => {
  try {
    const res = await axios.request(options);
    return res.data.recipes;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
};
