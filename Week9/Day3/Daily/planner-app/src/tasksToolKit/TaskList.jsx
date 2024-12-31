import { useState } from "react";
import { useSelector } from "react-redux";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";

const TaskList = ({ date }) => {
  const [editingTask, setEditingTask] = useState(null);
  const tasks = useSelector((state) => state.tasksReducer.tasks);

  const filteredTasks = date
    ? tasks.filter((task) => task.date === date)
    : tasks;

  const handleEditClick = (task) => {
    setEditingTask(task);
  };

  const handleTaskUpdate = () => {
    setEditingTask(null);
  };
  return (
    <>
      <ul>
        {filteredTasks.map((task) => {
          return (
            <li key={task.id}>
              {task.name} {task.date}
              <button onClick={() => handleEditClick(task)}>Edit</button>
              <DeleteTask id={task.id} />
            </li>
          );
        })}
      </ul>
      {editingTask && (
        <EditTask task={editingTask} onUpdate={handleTaskUpdate} />
      )}
    </>
  );
};
export default TaskList;
