import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import ThemePage from "./pages/ThemePage";
const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/search/beaches");
    }
  }, [navigate]);
  return (
    <>
      <Routes>
        <Route path="/" element={<ThemePage />} />
        <Route path="/beaches" element={<ThemePage theme="beaches" />} />
        <Route path="/mountains" element={<ThemePage theme="mountains" />} />
        <Route path="/foods" element={<ThemePage theme="food" />} />
        <Route path="/funny" element={<ThemePage theme="funny" />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/:theme" element={<ThemePage />} />
      </Routes>
    </>
  );
};

export default App;
