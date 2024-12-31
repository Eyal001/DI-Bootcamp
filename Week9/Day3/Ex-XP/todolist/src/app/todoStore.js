import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todosReducer from "../features/todoSlice";

const appReducer = combineReducers({
  todosReducer,
});
const store = configureStore({
  reducer: appReducer,
});

export default store;
