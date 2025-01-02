import { useSelector } from "react-redux";

const AgeDisplay = () => {
  const { age, loading } = useSelector((state) => state.ageReducer);

  return (
    <div>
      <h1>Age: {age}</h1>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default AgeDisplay;
