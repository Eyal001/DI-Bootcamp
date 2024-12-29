import { useContext } from "react";
import { ThemeContext } from "../App";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "ligth"}
      </button>
      {console.log(theme)}
    </>
  );
};

export default ThemeSwitcher;
