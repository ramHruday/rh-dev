import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './playground.scss';

const PlayGround: React.FC = () => {
  const [newObject, setNewObject] = useState("");
  const [oldObject, setOldObject] = useState("");

  //convert items of csv cell from string, array to excel readable strings
  const properString = (item: string | []) => {
    switch (typeof item) {
      case "string":
        return item.replace(/,/g, " & ").replace(/(\r\n|\n|\r)/gm, "");
      case "object":
        return item
          ? item instanceof Array
            ? item
                .join("    ##        ") // SPACES DELIBERATELY GIVEN
                .replace(/,/g, " ") // replaces ' ,' in each string of array (delimiter for csv is ',')
                .replace(/(\r\n|\n|\r)/gm, "") // replaces ' \N\R' in each string of array
            : item
          : "NA";
      default:
        return "NA-not handled";
    }
  };

  const mainSolver = (json1: any, json2: any) => {
    const newJson = JSON.parse(json1);
    const oldJson = JSON.parse(json2);
    let str = "";
    for (const key in newJson) {
      if (newJson.hasOwnProperty(key)) {
        const newSolar = properString(newJson[key]);
        const oldSolar = properString(oldJson[key]);
        str += `${key} , ${newSolar} , ${oldSolar} , ${newSolar ===
          oldSolar}\n`;
      }
    }
    copy(str);
  };

  const copy = (target: any) => {
    // standard way of copying
    var textArea = document.createElement("textarea");
    textArea.setAttribute("style", "width:1px;border:0;opacity:0;");
    document.body.appendChild(textArea);
    textArea.value = target;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  return (
    <Container fluid>
      {/* <h1 className="abbr pt-5 pb-2">Component PlayGround</h1> */}
      {/* <Row noGutters>
        <Col className="sandbox-editor p-2 bg-light">
          <iframe
            src="https://codesandbox.io/embed/reverent-mccarthy-w8g47?fontsize=14&hidenavigation=1&theme=dark"
            className="i-frame"
            title="sandbox"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </Col>
      </Row> */}
      <Row>
        <Col xs="6">
          <h1 className="abbr pt-5 pb-2">New</h1>

          <Form.Control
            as="textarea"
            rows="24"
            value={newObject}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewObject(e.target.value)
            }
          />
        </Col>
        <Col xs="6">
          <h1 className="abbr pt-5 pb-2">Old</h1>

          <Form.Control
            as="textarea"
            rows="24"
            value={oldObject}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOldObject(e.target.value)
            }
          />
        </Col>

        <Col xs="12">
          <Button
            variant="primary"
            className="mt-4 float-right"
            onClick={() => {
              mainSolver(newObject, oldObject);
            }}
          >
            Compare and copy csv
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayGround;
