import { useDispatch } from "react-redux";
import { ageDownAsync, ageUpAsync } from "./ageSlice";

const AgeControls = () => {
  const dispatch = useDispatch();

  const handleAgeUp = () => {
    dispatch(ageUpAsync());
  };

  const handleAgeDown = () => {
    dispatch(ageDownAsync());
  };

  return (
    <div>
      <button onClick={handleAgeUp}>Age Up</button>
      <button onClick={handleAgeDown}>Age Down</button>
    </div>
  );
};

export default AgeControls;
