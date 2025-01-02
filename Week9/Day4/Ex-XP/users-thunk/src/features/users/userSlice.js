import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  status: "",
};

export const fetchUsers = createAsyncThunk("users/userdata", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("failed to fetch users data.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        (state.status = "success"), (state.users = action.payload);
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const {} = usersSlice.actions;
export default usersSlice.reducer;
