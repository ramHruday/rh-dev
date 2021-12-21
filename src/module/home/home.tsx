import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./home.scss";

const Home: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12" md="6" className="section"></Col>

        <h1 className="display-5">Hello, This is Hruday.</h1>
        <h1>I am a Fall 2021 graduate student at Texas tech University.</h1>
        {/* <Col sm="12" md="6" className="section">
          <img src={uc} alt="site under construction" className="w-100" />
        </Col> */}
      </Row>
    </Container>
  );
};

export default Home;
