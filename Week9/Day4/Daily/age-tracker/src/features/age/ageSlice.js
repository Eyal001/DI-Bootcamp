import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  age: 0,
  loading: false,
};

export const ageUpAsync = createAsyncThunk("age/ageUp", async () => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, 2000);
  });
});

export const ageDownAsync = createAsyncThunk("age/ageDown", async () => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, 2000);
  });
});

const ageSlice = createSlice({
  name: "age",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state) => {
        state.age += 1;
        state.loading = false;
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state) => {
        state.age -= 1;
        state.loading = false;
      });
  },
});

export default ageSlice.reducer;
