import { useState } from "react";
import Garage from "./Garage";
const Car = ({ carInfo }) => {
  const [color, setColor] = useState("red");

  return (
    <>
      <div>
        <header>
          This car is a {color} {carInfo.model}.
        </header>
        <Garage size="small" />
      </div>
    </>
  );
};

export default Car;
