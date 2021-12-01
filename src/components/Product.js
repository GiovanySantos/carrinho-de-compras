import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductsContext } from "../contexts/ProductsContext";

const Product = ({ product }) => {
  const { state, dispatch } = useContext(ProductsContext);

  const handleSelectField = (plan) => {
    const objProduct = {
      product: product.title,
      plan: plan,
    };
    const found = state.cart.find((item) => item.product === product.title);
    if (!found) {
      dispatch({ type: "add", payload: objProduct });
    } else if (found.plan.title !== plan.title) {
      dispatch({ type: "remove", payload: objProduct });
      dispatch({ type: "add", payload: objProduct });
    } else {
      dispatch({ type: "remove", payload: objProduct });
    }
  };

  return (
    <Container>
      <h1 className='product-title pt-5'>{product.title}</h1>
      <p>Selecione um plano de {product.title}</p>
      <Row>
        <Col className='d-flex justify-content-start p-2'>
          {product.plans &&
            product.plans.map((plan, i) => {
              return (
                <div
                  className={
                    state.cart.some((item) => item.plan.title === plan.title)
                      ? `plan-box-active`
                      : `plan-box`
                  }
                  key={i}
                  onClick={() => handleSelectField(plan)}>
                  <p className='plan-title'>{plan.title}</p>
                  <p className='plan-price'>R$: {plan.price}</p>
                </div>
              );
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
