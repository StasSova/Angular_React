import React from "react";

// Принимаем значение в props
function RfcDesign(props) {
  return (
    <>
      <p>
        {props.title}: {props.price}
      </p>
    </>
  );
}

export default RfcDesign;
