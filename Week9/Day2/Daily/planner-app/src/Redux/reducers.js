import { ADD_TASK, DELETE_TASK, EDIT_TASK, SELECT_DATE } from "./actions";

const initialState = {
  tasksByDate: {},
  selectedDate: "",
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [action.payload.date]: [
            ...(state.tasksByDate[action.payload.date] || []),
            { id: Date.now(), text: action.payload.task },
          ],
        },
      };
    case EDIT_TASK:
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [action.payload.date]: state.tasksByDate[action.payload.date].map(
            (task) =>
              task.id === action.payload.taskId
                ? { ...task, text: action.payload.newTask }
                : task
          ),
        },
      };
    case DELETE_TASK:
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [action.payload.date]: state.tasksByDate[action.payload.date].filter(
            (task) => task.id !== action.payload.taskId
          ),
        },
      };
    case SELECT_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    default:
      return state;
  }
};
