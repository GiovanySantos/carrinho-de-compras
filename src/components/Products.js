import React, { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { Container, Row } from "react-bootstrap";
import Product from "./Product";

const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Container>
      {products &&
        products.map((product) => {
          return (
            <Row key={product.id}>
              {/* <h1>{product.title}</h1> */}
              <Product product={product} />
            </Row>
          );
        })}
    </Container>
  );
};

export default Products;
