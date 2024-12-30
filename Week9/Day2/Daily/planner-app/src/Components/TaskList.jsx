import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, editTask } from "../Redux/actions";

const TaskList = () => {
  const [taskText, setTaskText] = useState("");
  const [taskToEdit, setTaskToEdit] = useState(null);

  const selectedDate = useSelector((state) => state.taskReducer.selectedDate);
  const tasks = useSelector(
    (state) => state.taskReducer.tasksByDate[selectedDate] || []
  );
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText) {
      dispatch(addTask(selectedDate, taskText));
      setTaskText("");
    }
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setTaskText(task.text);
  };

  const handleSaveEdit = () => {
    if (taskText.trim()) {
      dispatch(editTask(selectedDate, taskToEdit.id, taskText));
      setTaskToEdit(null);
      setTaskText("");
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(selectedDate, taskId));
  };

  return (
    <div>
      <h2>Task for: {selectedDate}</h2>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Entrez une tâche"
      />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.id === taskToEdit?.id ? (
              <div>
                <input
                  type="text"
                  value={taskText}
                  onChange={(e) => setTaskText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </div>
            ) : (
              <div>
                {task.text}{" "}
                <button onClick={() => handleEditTask(task)}>Edit</button>
                <button onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
