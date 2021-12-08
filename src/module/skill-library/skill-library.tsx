import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { FRAMEWORKS } from "../../constants/frameworks";
import { OTHER_SKILLS } from "../../constants/misc";
import { SKILLS } from "../../constants/skills";
import SkillCard from "../../containers/skill-card/skill-card";

const SkillLibrary: React.FC = () => {
  return (
    <>
      <Col sm="12" md="9" className="pt-2">
        <h1 className="abbr">Languages</h1>
        <Row xs={2} md={6} className="g-4">
          {SKILLS.length > 0 &&
            SKILLS.map(({ label, img }) => (
              <Col>
                <SkillCard skill={label} imageSrc={img} />
              </Col>
            ))}
        </Row>
      </Col>
      <Col sm="12" md="9" className="pt-2">
        <h1 className="abbr">Frameworks</h1>
        <Row xs={2} md={6} className="g-4">
          {FRAMEWORKS.length > 0 &&
            FRAMEWORKS.map(({ label, img }) => (
              <Col>
                <SkillCard skill={label} imageSrc={img} />
              </Col>
            ))}
        </Row>
      </Col>
      <Col sm="12" md="9" className="pt-2">
        <h1 className="abbr">Other skills</h1>
        <Row xs={2} md={6} className="g-4">
          {OTHER_SKILLS.length > 0 &&
            OTHER_SKILLS.map(({ label, img }) => (
              <Col>
                <SkillCard skill={label} imageSrc={img} />
              </Col>
            ))}
        </Row>
      </Col>
    </>
  );
};

export default SkillLibrary;
