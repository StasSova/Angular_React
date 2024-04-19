import React from "react";
import { useProducts } from "../../contexts/productsContext";

function ManagementProduct() {
  const { addProduct } = useProducts();
  const handleAdd = () => {
    const newProduct = {
      title: "Саквояж",
      price: 1800,
      id: Math.round(Math.random() * 100000),
    };
    addProduct(newProduct);
  };
  return (
    <>
      <h2>Add product</h2>
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

export default ManagementProduct;
