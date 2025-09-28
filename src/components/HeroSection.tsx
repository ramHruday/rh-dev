import React from 'react';
import { Container, Button } from 'react-bootstrap';
import TypingEffectTitle from './TypingEffectTitle'; // Import TypingEffectTitle
import './HeroSection.scss';

interface HeroSectionProps {
  id?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const roles = [
    "Data Engineer turning raw data into insights.",
    "Frontend Developer creating seamless UIs.",
    "Robotics enthusiast automating the future.",
  ];

  return (
    <section id={id} className="hero-section-container d-flex align-items-center">
      <Container className="text-center">
        <h1 className="display-3 fw-bold mb-4">
          Hi, I'm <span className="highlight">Hruday</span>,
        </h1>
        <h2 className="lead mb-4">
          <TypingEffectTitle 
            messages={roles} 
            typingSpeed={200} // Faster typing speed
            deletingSpeed={50} // Faster deleting speed
            delayBetweenMessages={0} // Shorter delay between messages
          />
        </h2>
        <Button variant="primary" href="#projects" className="hero-cta-button mt-3">
          View My Work
        </Button>
      </Container>
    </section>
  );
};

export default HeroSection;
