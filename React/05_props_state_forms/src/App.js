import React, { useState } from "react";
import Posts from "./components/Post/Posts";
import Form1 from "./components/Form/Form1";
import TextEditor from "./components/TextEditor/TextEditor";
import SwitchTheme from "./components/SwitchTheme/SwitchTheme";
import "./App.css";
import CreateComment from "./components/CreateComment/CreateComment";
import Comments from "./components/CreateComment/Comments";
import CreateImage from "./components/Images/Create/CreateImage";
import Images from "./components/Images/Show/Images";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = (isDarkMode) => {
    setDarkMode(isDarkMode);
  };

  return (
    <>
      <div className={`appContainer ${darkMode ? "darkMode" : ""}`}>
        {/* <Posts /> */}
        {/* <Form1 /> */}
        {/* <TextEditor />
        <hr />
        <SwitchTheme onThemeChange={handleThemeChange} />
        <hr />
        <Comments /> */}
        <Images />
      </div>
    </>
  );
}

export default App;
