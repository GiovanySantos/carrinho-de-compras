import React from "react";

const Product = ({ product }) => {
  return (
    <div className="productBox">
      <h1>{product.title}</h1>
    </div>
  );
};

export default Product;
