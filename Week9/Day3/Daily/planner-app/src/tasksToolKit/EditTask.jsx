import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "./tasksSlice";

const EditTask = ({ task, onUpdate }) => {
  const [name, setName] = useState(task.name);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: task.id, name }));
    onUpdate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Edit here .."
      />
      <button type="submit">Update Task</button>
    </form>
  );
};
export default EditTask;
