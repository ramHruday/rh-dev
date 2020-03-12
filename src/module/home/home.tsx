import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './home.scss';

import uc from '../../assets/uc.gif';

const Home: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12" md="6" className="section">
          My curated code snippets/ logics and tricks
        </Col>
        <Col sm="12" md="6" className="section">
          <img src={uc} alt="site under construction" className="w-100" />
        </Col>
        {/* <Col sm="12" md="6" className="bg-light"></Col> */}
      </Row>
    </Container>
  );
};

export default Home;
