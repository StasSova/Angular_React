import React from "react";

function MyButton({ increment, onClick }) {
  return (
    <button
      onClick={() => {
        onClick(increment);
      }}
    >
      {increment > 0 ? `+${increment}` : increment}
    </button>
  );
}

export default MyButton;
