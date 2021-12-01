import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { ProductsContext } from "../contexts/ProductsContext";

const Cart = () => {
  const { state, dispatch } = useContext(ProductsContext);

  return (
    <Container className='p-5'>
      {state.cart.map((item, i) => {
        return (
          <div key={i}>
            <div>{item.product}</div>
            <div>{item.plan.title}</div>
          </div>
        );
      })}
    </Container>
  );
};

export default Cart;
