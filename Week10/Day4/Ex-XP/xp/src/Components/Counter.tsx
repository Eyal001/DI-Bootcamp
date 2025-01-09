import { useState } from "react";

interface CounterState {
  count: number;
  lastAction: string;
}

const Counter = () => {
  const [state, setState] = useState<CounterState>({
    count: 0,
    lastAction: "",
  });

  const handleIncrement = () => {
    setState({ count: state.count + 1, lastAction: "Increment" });
  };
  const handleDecrement = () => {
    setState({ count: state.count - 1, lastAction: "Decrement" });
  };

  return (
    <>
      <h3>Count: {state.count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export default Counter;
