import { useEffect, useState } from "react";
import "./App.css";
import Button from "./Components/Button.jsx";
import Quote from "./Components/Quote.jsx";
import quotes from "./Quotes.js";

function App() {
  const [quote, setQuote] = useState({});
  const [usedQuotes, setUsedQuote] = useState([]);
  const [color, setColor] = useState("");

  const getRandomQuote = () => {
    if (usedQuotes.length === quotes.length) {
      setUsedQuote([]);
    }
    const unusedQuotes = quotes.filter((q) => !usedQuotes.includes(q));

    const randomQuoteIndex = Math.floor(Math.random() * unusedQuotes.length);
    const newQuote = unusedQuotes[randomQuoteIndex];

    setUsedQuote([...usedQuotes, newQuote]);
    setQuote(newQuote);

    const newColor = randomColor();
    document.documentElement.style.setProperty("--bg-color", color);
    setColor(newColor);
  };
  const randomColor = () => {
    const hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hex;
  };

  useEffect(() => {
    if (color) {
      document.documentElement.style.setProperty("--bg-color", color);
    }
  }, [color]);

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <>
      <div className="App">
        <div className="quote-container">
          <Quote quote={quote.quote} author={quote.author} color={color} />
          <Button color={color} onClick={getRandomQuote} />
        </div>
      </div>
    </>
  );
}

export default App;
