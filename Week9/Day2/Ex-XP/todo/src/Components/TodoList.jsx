import { connect } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.TodoReducer.todos,
});

export default connect(mapStateToProps)(TodoList);
