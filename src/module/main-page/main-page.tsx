import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ComponentLibrary from '../../assets/json/components.json';
import DeckCard from '../../containers/deck-card/deck-card';

const MainPage: React.FC = () => {
  return (
    <Container fluid>
      <h1 className="abbr">Your feed</h1>
      <Row noGutters>
        {ComponentLibrary.length > 0 ? (
          ComponentLibrary.map((component: any) => (
            <Col sm="12" md="2">
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

export default MainPage;
