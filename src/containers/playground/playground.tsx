import React from 'react';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './playground.scss';

const PlayGround: React.FC = () => {
  return (
    <Container>
      <h1 className="abbr pt-5 pb-2">Component PlayGround</h1>
      <Row noGutters>
        <Col className="sandbox-editor p-2 bg-light">
          <iframe
            src="https://codesandbox.io/embed/reverent-mccarthy-w8g47?fontsize=14&hidenavigation=1&theme=dark"
            className="i-frame"
            title="sandbox"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayGround;
