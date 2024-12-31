import { useDispatch } from "react-redux";
import { removeTask } from "./tasksSlice";

const DeleteTask = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(removeTask(id))}>X</button>
    </>
  );
};
export default DeleteTask;
