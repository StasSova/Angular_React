import React from "react";
import ProductItem from "../productItem/productItem";
import css from "./productList.module.css";
import { useProducts } from "../../contexts/productsContext";
import ManagementProduct from "../managmentProduct/managmentProduct";

function ProductList() {
  const { products } = useProducts();
  return (
    <>
      <h2>Product List</h2>
      <ManagementProduct />
      <div className={css.row}>
        {products.map((el) => (
          <ProductItem key={el.id} product={el} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
