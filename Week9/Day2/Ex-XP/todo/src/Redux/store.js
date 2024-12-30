import { configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "./reducers";

const store = configureStore({
  reducer: {
    TodoReducer: TodoReducer,
  },
});

export default store;
