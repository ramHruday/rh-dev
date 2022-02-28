import React from "react";
import { Col, Row } from "react-bootstrap";
import { Projects } from "../constants/projects";
import ProjectCard from "../project-card/project-card";
import "./project-page.scss";
interface IProjectSectionprops {}

const ProjectSection: React.FC<IProjectSectionprops> = (props) => {
  return (
    <Col sm="12" className="pt-3 pb-5 justify-content-end bg-apple-grey">
      <h1 className="display-5 p-2 monty">Projects</h1>
      <Row className="justify-content-end">
        {Projects.map((p) => (
          <Col sm="12" md="5">
            <ProjectCard {...p} />
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default ProjectSection;
