import React, { useState } from "react";

function RfcEditor() {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [transform, setTransform] = useState("");

  const toggleBold = () => {
    setBold(!bold);
  };

  const toggleItalic = () => {
    setItalic(!italic);
  };

  const toggleUnderline = () => {
    setUnderline(!underline);
  };

  const toggleTransform = () => {
    setTransform((prevTransform) =>
      prevTransform === "uppercase" ? "lowercase" : "uppercase"
    );
  };

  return (
    <>
      <div
        className="commands"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
        }}
      >
        <button onClick={toggleBold}>B</button>
        <button onClick={toggleItalic}>I</button>
        <button onClick={toggleUnderline}>U</button>
        <button onClick={toggleTransform}>T</button>
      </div>
      <p
        style={{
          fontWeight: bold ? "bold" : "",
          fontStyle: italic ? "italic" : "",
          textDecoration: underline ? "underline" : "",
          textTransform: transform,
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci sint
        dolorum eos, illo minima laudantium vel est tempora cupiditate nobis
        laborum rem libero amet eveniet officia doloribus cum inventore dicta.
      </p>
    </>
  );
}

export default RfcEditor;
