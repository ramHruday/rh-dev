import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import uc from "../../assets/calvin.png";
import { Projects } from "../constants/projects";
import ProjectCard from "../project-card/project-card";
import "./home.scss";

const Home: React.FC = () => {
  return (
    <Container fluid className="h-100">
      <Row>
        <Col sm="12" md="10" style={{ height: "85vh" }}>
          <h1 className="display-5 p-2 monty">Hello, This is Hruday.</h1>
          <h4 className="p-1 monty mb-0">
            I am a Grad student at Texas tech University.
          </h4>
          <h4 className="p-1 monty mb-0">
            Skilled in Full stack development, Internet of drones
          </h4>
          <Image className="float-end" src={uc} />
        </Col>
        <Col sm="12" className="py-2 justify-content-end bg-apple-grey">
          <h1 className="display-5 p-2 monty">My Projects</h1>
          <Row className="justify-content-end">
            {Projects.map((p) => (
              <Col sm="12" md="5">
                <ProjectCard {...p} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
