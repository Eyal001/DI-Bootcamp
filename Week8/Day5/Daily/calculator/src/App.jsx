import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);
  const [calc, setCalc] = useState("+");

  const calcNumbers = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let res;
    switch (calc) {
      case "+":
        res = number1 + number2;
        break;
      case "-":
        res = number1 - number2;
        break;
      case "*":
        res = number1 * number2;
        break;
      case "/":
        res = number2 !== 0 ? number1 / number2 : "Error: division by 0";
        break;
    }
    setSum(res);
  };
  return (
    <>
      <div>
        <h1>Calculate Two Numbers</h1>
        <select
          name=""
          id=""
          value={calc}
          onChange={(e) => setCalc(e.target.value)}
        >
          <option value="+">Addition</option>
          <option value="-">Subtraction</option>
          <option value="*">multiplication</option>
          <option value="/">division</option>
        </select>
        <br />
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button type="submit" onClick={calcNumbers}>
          Calculate them!
        </button>
      </div>
      <h1>{sum}</h1>
    </>
  );
}

export default App;
