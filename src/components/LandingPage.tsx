import React from 'react';
import HeroSection from './HeroSection'; // Import HeroSection
import AboutSection from './AboutSection'; // Import AboutSection
import ProjectSection from './ProjectSection'; // Import ProjectSection
import SkillsSection from './SkillsSection'; // Import SkillsSection
import ContactSection from './ContactSection'; // Import ContactSection
import SideNavigation from './SideNavigation'; // Import SideNavigation
import ThemeToggleButton from './ThemeToggleButton'; // Import ThemeToggleButton

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page-container">
      <SideNavigation /> {/* Render SideNavigation */}
      <ThemeToggleButton /> {/* Render ThemeToggleButton at the top level */}
      <div className="main-content">
        <HeroSection id="home" /> {/* Render HeroSection */}
        <AboutSection id="about" /> {/* Render AboutSection */}
        <ProjectSection id="projects" /> {/* Render ProjectSection */}
        <SkillsSection id="skills" /> {/* Render SkillsSection */}
        <ContactSection id="contact" /> {/* Render ContactSection */}
      </div>
    </div>
  );
};

export default LandingPage;
