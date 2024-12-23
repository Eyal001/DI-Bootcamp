import { useState } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const handleVote = (languageName) => {
    const newLanguages = languages.map((language) => {
      if (language.name === languageName) {
        return { ...language, votes: language.votes + 1 };
      }
      return language;
    });
    setLanguages(newLanguages);
  };
  return (
    <>
      <h1>Vote Your Language!</h1>
      {languages.map((language, index) => {
        return (
          <div className="language" key={index}>
            <p>{language.votes}</p>
            <p>{language.name}</p>
            <button onClick={() => handleVote(language.name)}>
              Click Here!
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
