import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Products from "../components/Products";

const Home = () => {
  const { setProducts } = useContext(ProductsContext);

  useEffect(() => {
    axios.get("db.json").then((res) => setProducts(res.data.products));
  }, [setProducts]);

  return (
    <>
      <Container>
        <Row>
          <Col className='d-flex justify-content-start'>
            <Products />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
