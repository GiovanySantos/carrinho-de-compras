import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { ProductsContext } from "../contexts/ProductsContext";
import Product from "./Product";

const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      {products &&
        products.map((product) => {
          return (
            <Container>
              <Row>
                <Product product={product} />
              </Row>
            </Container>
          );
        })}
    </>
  );
};

export default Products;
