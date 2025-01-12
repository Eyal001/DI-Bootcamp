import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./store/store";

import DataFetcher from "./components/DataFetcher";

function App() {
  const { recipes, loading, error } = useSelector(
    (state: RootState) => state.data
  );
  return (
    <>
      <DataFetcher recipes={recipes} loading={loading} error={error} />
    </>
  );
}

export default App;
