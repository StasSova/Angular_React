import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";
import css from "./Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    setCount((val) => val + value);
  };

  return (
    <div className={css.counterContent}>
      <MyButton increment={-100} onClick={handleClick} />
      <MyButton increment={-25} onClick={handleClick} />
      <MyButton increment={-1} onClick={handleClick} />
      <h2>{count}</h2>
      <MyButton increment={1} onClick={handleClick} />
      <MyButton increment={25} onClick={handleClick} />
      <MyButton increment={100} onClick={handleClick} />
    </div>
  );
}

export default Counter;
