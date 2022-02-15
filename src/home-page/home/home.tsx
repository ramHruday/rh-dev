import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import uc from "../../assets/rc.gif";
import "./home.scss";

const Home: React.FC = () => {
  return (
    <Container
      fluid
      className="h-100"
      style={{ zIndex: 9999, background: `url(${uc})` }}
    >
      <Row className="p-2">
        <Col sm="12" md="6" className="section"></Col>
        <h1 className="display-5 text-white">Hello, This is Hruday.</h1>
        <h1 className="text-white">
          I am a Fall 2021 graduate student at Texas tech University.
        </h1>
        {/* <Col sm="12" md="6" className="section">
          <img src={uc} alt="zooooooom" className="w-100" />
        </Col> */}
      </Row>
    </Container>
  );
};

export default Home;
