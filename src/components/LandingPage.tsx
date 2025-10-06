import React from 'react';
import HeroSection from './HeroSection'; // Import HeroSection
import ProjectSection from './ProjectSection'; // Import ProjectSection
import SkillsSection from './SkillsSection'; // Import SkillsSection
import ContactSection from './ContactSection'; // Import ContactSection
import SideNavigation from './SideNavigation'; // Import SideNavigation
import ThemeToggleButton from './ThemeToggleButton'; // Import ThemeToggleButton
import { Container, Row, Col } from "react-bootstrap";

const LandingPage: React.FC = () => {

  return (
    <div className="landing-page-container">
      <SideNavigation /> {/* Render SideNavigation */}
      <ThemeToggleButton /> {/* Render ThemeToggleButton at the top level */}
      <Container fluid className="main-content ms-md-5">
        <Row>
          <Col>
            <HeroSection id="home" /> {/* Render HeroSection */}
            {/* <ProjectSection id="featured-projects" featuredProjectLabels={featuredProjectLabels} /> Featured Projects */}
            <ProjectSection id="projects" /> {/* All Projects */}
            <SkillsSection id="skills" /> {/* Render SkillsSection */}
            <ContactSection id="contact" /> {/* Render ContactSection */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
