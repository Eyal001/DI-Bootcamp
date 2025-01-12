import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../api/api";
import { Recipe } from "../types/types";

interface RecipeState {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
}

const initialState: RecipeState = {
  recipes: [],
  loading: false,
  error: null,
};

export const loadRecipes = createAsyncThunk<
  Recipe[],
  void,
  { rejectValue: string }
>("recipes/loadRecipes", async (_, { rejectWithValue }) => {
  try {
    const recipes = await fetchData();
    return recipes;
  } catch (error) {
    return rejectWithValue("Failed to fetch recipes");
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(loadRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching recipes";
      });
  },
});

export default dataSlice.reducer;
