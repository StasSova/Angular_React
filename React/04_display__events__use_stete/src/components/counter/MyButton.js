import React, { useState } from "react";

function MyButton({ count, onClick }) {
  //   const [count, setCount] = useState(0);
  //   const handleClick = () => {
  //     setCount((count) => count + 1);
  //   };
  return (
    <>
      <button onClick={onClick}>Clicked {count} times</button>
    </>
  );
}

export default MyButton;
