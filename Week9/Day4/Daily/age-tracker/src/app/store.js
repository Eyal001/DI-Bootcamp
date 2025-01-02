import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ageReducer from "../features/age/ageSlice";

const appReducer = combineReducers({
  ageReducer,
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
