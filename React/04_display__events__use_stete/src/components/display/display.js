import React from "react";
import css from "./style.module.scss";

function Display() {
  const user = {
    name: "Heady Lamar",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  let content,
    isValid = true;

  if (isValid) {
    content = <h2>Send data</h2>;
  } else {
    content = <h2>Error</h2>;
  }

  return (
    <div className={css.user}>
      <p>Name: {user.name}</p>
      <img
        className="avatar"
        style={{
          width: user.imageSize,
          borderRadius: "10px",
        }}
        src={user.imageUrl}
        alt="avatar"
      />
      <div className="output">{content}</div>

      <div className="output">{isValid ? <h2>Send data</h2> : <></>}</div>

      <div className="output">{isValid && <h2>Send data</h2>}</div>
    </div>
  );
}

export default Display;
