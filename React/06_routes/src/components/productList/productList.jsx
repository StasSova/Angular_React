import React from "react";
import ProductItem from "../productItem/productItem";
import css from "./productList.module.css";
import { useProducts } from "../../contexts/productsContext";

function ProductList() {
  const products = useProducts();
  return (
    <>
      <h2>Product List</h2>
      <div className={css.row}>
        {products.map((el) => (
          <ProductItem key={el.id} product={el} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
