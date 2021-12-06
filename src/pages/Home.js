import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ProductsContext } from "../contexts/ProductsContext";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Products from "../components/Products";
import Header from "../components/Header";
import Cart from "../components/Cart";
import styled from "styled-components";

const Home = () => {
  const { setProducts } = useContext(ProductsContext);
  const { theme } = useContext(ThemeContext);

  const MainPage = styled.div`
    background: ${theme ? "#fff" : "#181A1B"};
    color: ${theme ? "#181A1B" : "#fff"};
    h1, h6 {
      color: ${theme ? "#920FB3" : "#8F68CC"};
    }
    p {
      color: ${theme ? "#181A1B" : "#fff"};
    }
  `;

  useEffect(() => {
    axios.get("db.json").then((res) => setProducts(res.data.products));
  }, [setProducts]);

  return (
    <MainPage>
      <Header />
      <Container className='pb-5'>
        <Row>
          <Col className='d-flex justify-content-start'>
            <Products />
          </Col>
          <Col className='d-flex justify-content-center'>
            <Cart />
          </Col>
        </Row>
      </Container>
    </MainPage>
  );
};

export default Home;
