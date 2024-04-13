import React from "react";

function ThemeSwitcher({ onToggle }) {
  return (
    <button onClick={onToggle} id="theme-toggle">
      Toggle Theme
    </button>
  );
}

export default ThemeSwitcher;
