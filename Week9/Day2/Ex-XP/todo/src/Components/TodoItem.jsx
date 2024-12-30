import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../Redux/actions";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li key={todo.id}>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

const mapDispatchToProps = {
  toggleTodo,
  deleteTodo,
};

export default connect(null, mapDispatchToProps)(TodoItem);
