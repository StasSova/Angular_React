import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";

function ProductPage() {
  const { id } = useParams();
  console.log(id);
  console.log(typeof id);
  const { products } = useProducts();
  const el = products.find((el) => el.id === parseInt(id, 10));

  const { title, price } = el;

  return (
    <div className="container">
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}

export default ProductPage;
