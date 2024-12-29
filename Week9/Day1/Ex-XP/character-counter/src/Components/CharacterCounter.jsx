import { useRef, useState } from "react";

const CharacterCounter = () => {
  const inputRef = useRef();
  const [count, setCount] = useState();

  const handleInput = () => {
    setCount(inputRef.current.value.length);
  };

  return (
    <>
      <input
        ref={inputRef}
        placeholder="Enter something.."
        onChange={handleInput}
      />
      <p>Character count: {count}</p>
    </>
  );
};

export default CharacterCounter;
