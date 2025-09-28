import React from 'react';
import HeroSection from './HeroSection'; // Import HeroSection
import ProjectSection from './ProjectSection'; // Import ProjectSection
import SkillsSection from './SkillsSection'; // Import SkillsSection
import ContactSection from './ContactSection'; // Import ContactSection
import SideNavigation from './SideNavigation'; // Import SideNavigation
import ThemeToggleButton from './ThemeToggleButton'; // Import ThemeToggleButton

const LandingPage: React.FC = () => {
  const featuredProjectLabels = ["IoT Telemetry Pipeline", "3D IoT Platform", "Yettey"]; // Define your featured projects

  return (
    <div className="landing-page-container">
      <SideNavigation /> {/* Render SideNavigation */}
      <ThemeToggleButton /> {/* Render ThemeToggleButton at the top level */}
      <div className="main-content">
        <HeroSection id="home" /> {/* Render HeroSection */}
        {/* <ProjectSection id="featured-projects" featuredProjectLabels={featuredProjectLabels} /> Featured Projects */}
        <ProjectSection id="projects" /> {/* All Projects */}
        <SkillsSection id="skills" /> {/* Render SkillsSection */}
        <ContactSection id="contact" /> {/* Render ContactSection */}
      </div>
    </div>
  );
};

export default LandingPage;
