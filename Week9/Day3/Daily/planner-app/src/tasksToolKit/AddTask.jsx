import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./tasksSlice";

const AddTask = ({ date }) => {
  const dispatch = useDispatch();
  const inputValue = useRef();

  const handleAddTask = () => {
    const taskValue = inputValue.current.value.trim();

    if (taskValue && date) {
      dispatch(addTask({ name: taskValue, date: date }));
      inputValue.current.value = "";
    }
  };

  return (
    <>
      <input ref={inputValue} placeholder="Enter a task.." />
      <button onClick={handleAddTask}>Add</button>
    </>
  );
};
export default AddTask;
