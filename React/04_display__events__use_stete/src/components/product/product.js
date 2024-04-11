import React from "react";

function Product(props) {
  function handleClick() {
    alert("You clicked by");
  }

  return (
    <div className="item">
      <p>Product: {props.product.title}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Product;
