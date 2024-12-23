import { useState } from "react";

const Events = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      alert(`You typed: ${e.target.value}`);
    }
  };

  const handleToggle = () => {
    setIsToggleOn((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={clickMe}>Click Me</button>
      <input
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Press the ENTER key!"
      />
      <button onClick={handleToggle}>{isToggleOn ? "ON" : "OFF"}</button>
    </>
  );
};

export default Events;
