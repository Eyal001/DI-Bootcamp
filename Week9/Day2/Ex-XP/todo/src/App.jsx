import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div>
      <h1>Todo List:</h1>
      <div>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
