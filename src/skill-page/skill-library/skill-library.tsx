import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Link } from "react-feather";
import { NavHashLink } from "react-router-hash-link";
import { FRAMEWORKS } from "../constants/frameworks";
import { OTHER_SKILLS } from "../constants/misc";
import { SKILLS } from "../constants/skills";
import SkillCard from "../skill-card/skill-card";
interface ISkillLibraryprops {
  id?: string;
}
const SkillLibrary: React.FC<ISkillLibraryprops> = (props) => {
  return (
    <Col sm="12" className="pt-3 pb-5 " id={props.id}>
      <NavHashLink smooth to="#library" className="text-decoration-none">
        <h1 className="display-5 p-2 monty text-dark ">
          My Skillset
          <Link className="px-1" />
        </h1>
      </NavHashLink>
      <Row className="p-5">
        <Col sm="12" md="9" className="pb-5">
          <h1 className="monty">Languages</h1>
          <Row xs={2} md={6} className="g-4">
            {SKILLS.length > 0 &&
              SKILLS.map(({ label, img }) => (
                <Col>
                  <SkillCard skill={label} imageSrc={img} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col sm="12" md="9" className="pb-5">
          <h1 className="monty">Frameworks</h1>
          <Row xs={2} md={6} className="g-4">
            {FRAMEWORKS.length > 0 &&
              FRAMEWORKS.map(({ label, img }) => (
                <Col>
                  <SkillCard skill={label} imageSrc={img} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col sm="12" md="9" className="pb-5">
          <h1 className="monty">Other skills</h1>
          <Row xs={2} md={6} className="g-4">
            {OTHER_SKILLS.length > 0 &&
              OTHER_SKILLS.map(({ label, img }) => (
                <Col>
                  {" "}
                  <SkillCard skill={label} imageSrc={img} />{" "}
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default SkillLibrary;
