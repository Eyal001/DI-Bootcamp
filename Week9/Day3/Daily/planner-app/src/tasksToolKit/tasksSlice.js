import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [{ id: 1, name: "my task", date: "23/12/2024" }],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: uuidv4(),
        name: action.payload.name,
        date: action.payload.date,
      });
    },
    editTask: (state, action) => {
      const { id, name } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex >= 0) {
        state.tasks[taskIndex].name = name;
      }
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, editTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
