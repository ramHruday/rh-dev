import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { Heart } from "react-feather";
import "./App.scss";
import SideNavBar from "./containers/side-nav/side-nav";
import { ThemeContextProvider } from "./contexts";
import Home from "./home-page/home/home";
import ProjectSection from "./my-project-page/project-page/project-page";
import SkillLibrary from "./skill-page/skill-library/skill-library";

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <div className="wrapper">
        <div className="d-flex h-100">
          <SideNavBar width="4.2rem" />
          {/* <Logo /> */}
          <div className="p-0 w-100">
            <Container fluid className="h-100">
              <Row>
                <Home id="home" />
                <ProjectSection id="projects" />
                <SkillLibrary id="library" />
                {/* <Aboutme id="about-me" /> */}
              </Row>
              <Row className="justify-content-center">
                <Col>
                  <Badge bg="none" text="dark" className="mb-3">
                    Inspired by
                    <Heart
                      color="#eb2f96"
                      className="heartbeat neu-div p-2 mx-1"
                    />
                    Neumorphism
                  </Badge>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
