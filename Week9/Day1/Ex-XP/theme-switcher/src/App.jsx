import { createContext, useState } from "react";
import "./App.css";
import ThemeSwitcher from "./Components/ThemeSwitcher";
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme}>
          <ThemeSwitcher />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
