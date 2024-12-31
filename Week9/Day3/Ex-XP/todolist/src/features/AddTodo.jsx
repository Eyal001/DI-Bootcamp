import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const todoRef = useRef();

  const handleAddTodo = () => {
    const todoValue = todoRef.current.value.trim();
    if (todoValue) {
      dispatch(addTodo(todoValue));
      todoRef.current.value = "";
    }
  };
  return (
    <div>
      <input placeholder="Add a todo" ref={todoRef} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
