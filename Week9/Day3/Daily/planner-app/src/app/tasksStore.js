import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../tasksToolKit/tasksSlice";

const appReducer = combineReducers({
  tasksReducer,
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
