import React from "react";
import css from "./productItem.module.css";
import { Link } from "react-router-dom";

function ProductItem(props) {
  const { id, title, price } = props.product;
  return (
    <Link className={css.Link} to={`/product/${id}`}>
      <div className={css.item}>
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </Link>
  );
}

export default ProductItem;
