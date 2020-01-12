import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';

import ComponentSwitcher from '../../components/component-switch/component-switch';

const PlayGround: React.FC = () => {
  const { componentId } = useParams();
  return (
    <Container fluid>
      <h1 className="abbr">Your feed</h1>
      <Row noGutters>
        <Col sm="12" md="6">
          <ComponentSwitcher id={componentId} component={componentId} />
        </Col>
      </Row>
    </Container>
  );
};

export default PlayGround;
