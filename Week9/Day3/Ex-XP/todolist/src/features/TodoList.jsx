import { useSelector } from "react-redux";
import TodoItem from "../features/TodoItem";
const TodoList = () => {
  const todos = useSelector((state) => state.todosReducer.todos);

  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.key}
              description={todo.description}
              id={todo.id}
              completed={todo.completed}
            />
          );
        })}
      </ul>
    </>
  );
};
export default TodoList;
