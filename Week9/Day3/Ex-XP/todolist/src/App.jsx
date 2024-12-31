import "./App.css";
import AddTodo from "./features/AddTodo";
import TodoList from "./features/TodoList";

function App() {
  return (
    <>
      <h1>Todos:</h1>
      <AddTodo />

      <TodoList />
    </>
  );
}

export default App;
