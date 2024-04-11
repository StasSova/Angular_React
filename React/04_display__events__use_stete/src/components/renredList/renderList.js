import React from "react";
import Product from "../product/product";
import css from "./style.module.css";

function RenderList() {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  const content = products.map((el) => <Product key={el.id} product={el} />);
  return (
    <section className="wrapProducts">
      <h1>Products list</h1>
      {content}
    </section>
  );
}

export default RenderList;
