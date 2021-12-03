import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Products from "../components/Products";
import Header from "../components/Header";
import Cart from "../components/Cart";

const Home = () => {
  const { setProducts } = useContext(ProductsContext);

  useEffect(() => {
    axios.get("db.json").then((res) => setProducts(res.data.products));
  }, [setProducts]);

  return (
    <>
      <Header />
      <Container className="pb-5">
        <Row>
          <Col className='d-flex justify-content-start'>
            <Products />
          </Col>
          <Col className='d-flex justify-content-center'>
            <Cart />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
