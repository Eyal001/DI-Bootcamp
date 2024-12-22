import "./App.css";
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise from "./exercise3";

const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

function App() {
  const helloMessage = <p>Hello World!</p>;
  const myElement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  return (
    <>
      {helloMessage}
      {myElement}
      <p>React is {sum} times better with JSX</p>
      <div>
        <h3>First Name: {user.firstName}</h3>
        <h3>Last Name: {user.lastName}</h3>

        <UserFavoriteAnimals favAnimals={user.favAnimals} />
        <Exercise />
      </div>
    </>
  );
}

export default App;
