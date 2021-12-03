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
    
    const addProd = () => {
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

    if (product.id === 1) addProd();

    if (product.id === 2)
      if (state.cart.some((item) => item.product === "Internet")) addProd();

    if (product.id === 3)
      if (state.cart.some((item) => item.product === "Fixo")) addProd();
  };

  return (
    <Container>
      <h1 className='product-title pt-5'>{product.title}</h1>
      <p>Selecione um plano de {product.title}</p>
      <Row>
        <Col className='d-flex justify-content-start p-2 text-center'>
          {product.plans &&
            product.plans.map((plan) => {
              return (
                <div
                  className={
                    state.cart.some((item) => item.plan.title === plan.title)
                      ? `plan-box-active`
                      : `plan-box`
                  }
                  key={plan.id}
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
