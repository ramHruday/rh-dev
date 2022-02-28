import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-feather";
import { NavHashLink } from "react-router-hash-link";
import { Projects } from "../constants/projects";
import ProjectCard from "../project-card/project-card";
import "./project-page.scss";

interface IProjectSectionprops {
  id?: string;
}

const ProjectSection: React.FC<IProjectSectionprops> = (props) => {
  return (
    <Col
      sm="12"
      className="pt-3 pb-5 justify-content-end bg-apple-grey"
      id={props.id}
    >
      <NavHashLink smooth to="#projects" className="text-decoration-none">
        <h1 className="display-5 p-2 monty text-dark ">
          Projects
          <Link className="px-1" />
        </h1>
      </NavHashLink>
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
