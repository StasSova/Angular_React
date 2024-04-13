import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={`appContainer ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="toggleSwitcherContainer">
        <ThemeSwitcher onToggle={toggleTheme} />
      </div>
      <div className="counterContainer">
        <Counter />
      </div>
    </div>
  );
}

export default App;
