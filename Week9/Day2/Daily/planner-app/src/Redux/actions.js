export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SELECT_DATE = "SELECT_DATE";

export const addTask = (date, task) => {
  return {
    type: ADD_TASK,
    payload: { date, task },
  };
};

export const editTask = (date, taskId, newTask) => {
  return {
    type: EDIT_TASK,
    payload: { date, taskId, newTask },
  };
};

export const deleteTask = (date, taskId) => {
  return {
    type: DELETE_TASK,
    payload: { date, taskId },
  };
};

export const selectDate = (date) => ({
  type: SELECT_DATE,
  payload: date,
});
