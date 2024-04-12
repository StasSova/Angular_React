import React from "react";
import { useState } from "react";
import MyButton from "./MyButton";

function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <h2>Hello World, I`m Counter - {count}</h2>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
}

export default Counter;
