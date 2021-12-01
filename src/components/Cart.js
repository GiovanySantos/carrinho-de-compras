import React, { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const Cart = () => {
  const { state, dispatch } = useContext(ProductsContext);

  return (
    <>
      {state.cart.map((item, i) => {
        return (
          <div key={i}>
            <div>{item.product}</div>
            <div>{item.plan.title}</div>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
