import React from "react";
import { Container, Row } from "react-bootstrap";
import Aboutme from "./about-me-page/about-me/about-me";
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
          <SideNavBar width="4rem" />
          {/* <Logo /> */}
          <div className="p-0 w-100">
            <Container fluid className="h-100">
              <Row>
                <Home id="home" />
                <ProjectSection id="projects" />
                <SkillLibrary id="library" />
                <Aboutme id="about-me" />
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
