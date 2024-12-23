import { useEffect, useState } from "react";

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]);

  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <>
      <h1>My favorite Color is {favoriteColor}</h1>
      <button onClick={changeColor}>Change fav Color</button>
    </>
  );
};

export default Color;
