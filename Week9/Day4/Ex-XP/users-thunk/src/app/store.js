import { combineReducers, configureStore } from "@reduxjs/toolkit";

import usersReducer from "../features/users/userSlice";

const appReducer = combineReducers({
  usersReducer,
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
