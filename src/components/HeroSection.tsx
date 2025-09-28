import React from "react";
import { Container, Button } from "react-bootstrap";
import TypingEffectTitle from "./TypingEffectTitle"; // Assuming this is a custom typing effect component
import "./HeroSection.scss";

interface HeroSectionProps {
  id?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const roleMessages = [
    "Turning data into actionable insights.",
    "Building smooth and responsive user interfaces.",
    "Exploring automation through robotics.",
    "Designing scalable cloud-native data pipelines.",
    "Committed to reliable and maintainable software.",
  ];

  return (
    <section
      id={id}
      className="hero-section-container d-flex align-items-center"
    >
      <Container className="text-center">
        {/* Main greeting */}
        <h1 className="display-3 fw-bold mb-3 hero-title">
          Hi, I'm <span className="highlight">Rama Hruday</span>
        </h1>

        {/* Typing effect directly under name */}
        <h2 className="lead hero-typing-effect mb-4">
          <TypingEffectTitle messages={roleMessages} />
        </h2>

        {/* Short tagline */}
        <p className="lead hero-tagline mb-3 w-75 mx-auto">
          Data Engineer | Frontend Developer | Robotics Enthusiast
        </p>

        {/* Expanded description */}
        <p className="hero-description mb-4 w-75 mx-auto">
          I focus on building scalable, cloud-native data systems and intuitive
          user experiences that empower real-time analytics and support business
          needs. Experienced in PySpark, Flink, Delta Lake, and modern lakehouse
          architectures, I strive to deliver reliable and efficient solutions
          that evolve with the organization.
        </p>

        {/* Call-to-action */}
        <Button
          variant="primary"
          href="#projects"
          className="hero-cta-button mt-3 px-5 py-3 fw-bold fs-5"
        >
          Explore Projects
        </Button>
      </Container>
    </section>
  );
};

export default HeroSection;
