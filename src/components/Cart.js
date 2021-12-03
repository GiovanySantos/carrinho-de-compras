import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProductsContext } from "../contexts/ProductsContext";

const Cart = () => {
  const { state } = useContext(ProductsContext);
  const [fee, setFee] = useState(0);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    let total = 0;
    state.cart.forEach((item) => (total = total + item.plan.price));
    setFee(0);
    setTotal(total.toFixed(2));
  }, [state]);

  return (
    <Container className='cart p-5'>
      <Row className='pb-3'>
        <Col md={6}>
          <h6>Taxa de Instalação:</h6>
        </Col>
        <Col md={6}>{fee === 0 ? <h6>Gratuito</h6> : <h6>R$: {fee}</h6>}</Col>
      </Row>
      <Row className='pb-3'>
        <Col md={6}>
          <h6>Total:</h6>
        </Col>
        <Col md={6}>
          <h6>R$: {total}/mês</h6>
        </Col>
      </Row>
      <Row>
        <div className='pb-3'>
          <button
            className='button-cart'
            disabled={state.cart.length < 3}
            onClick={() => alert("Compra efetuada")}>
            Continuar
          </button>
        </div>
      </Row>
    </Container>
  );
};

export default Cart;
