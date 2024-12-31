import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./todoSlice";

const TodoItem = ({ description, id, completed }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTodo({ id }))}
        />
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>
          {description}
        </span>
        <button onClick={() => dispatch(removeTodo(id))}>X</button>{" "}
      </li>
    </>
  );
};
export default TodoItem;
