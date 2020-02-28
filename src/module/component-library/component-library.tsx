import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

import ComponentLibrary from '../../assets/json/components.json';
import DeckCard from '../../containers/deck-card/deck-card';

const Library: React.FC = () => {
  return (
    <Container fluid>
      <h1 className="abbr">Your feed</h1>
      <Row>
        {ComponentLibrary.length > 0 ? (
          ComponentLibrary.map((component: any) => (
            <Col sm="12" md="6" lg="3">
              <DeckCard component={component} />
            </Col>
          ))
        ) : (
          <div>No Items Found</div>
        )}
      </Row>
    </Container>
  );
};

export default Library;
