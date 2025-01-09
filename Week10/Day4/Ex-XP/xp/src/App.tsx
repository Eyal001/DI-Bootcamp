import "./App.css";
import Counter from "./Components/Counter";
import Greeting from "./Components/Greeting";
import UserCard from "./Components/UserCard";
import UserList from "./Components/UserList";

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <Greeting name="The name is here" messageCount={3} />
      <Counter />
      <UserCard name="Eyal" age={26} role="Fullstack Developer" />{" "}
      {/* Test with all props provided*/}
      <UserCard name="Luna" age={20} /> {/* Test with some props omitted*/}
      <UserCard />
      <UserList />
    </>
  );
}

export default App;
