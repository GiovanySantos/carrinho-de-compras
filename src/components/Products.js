import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { ProductsContext } from "../contexts/ProductsContext";
import Product from "./Product";

const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Container>
      {products &&
        products.map((product) => {
          return (
            <Row key={product.id}>
              <Product product={product} />
            </Row>
          );
        })}
    </Container>
  );
};

export default Products;
