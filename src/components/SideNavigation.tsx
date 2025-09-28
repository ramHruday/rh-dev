import React, { useState, useEffect } from 'react';
import { Home, User, Folder, Award, Mail, GitHub, Linkedin } from 'react-feather';
import { NavHashLink } from 'react-router-hash-link';
import './SideNavigation.scss';

const navLinks = [
  { to: '#home', icon: Home, label: 'Home' },
  { to: '#about', icon: User, label: 'About' },
  { to: '#projects', icon: Folder, label: 'Projects' },
  { to: '#skills', icon: Award, label: 'Skills' },
  { to: '#contact', icon: Mail, label: 'Contact' },
];

const socialLinks = [
  { to: 'https://github.com/ramHruday', icon: GitHub, label: 'GitHub' }, // Replace with your GitHub
  { to: 'https://www.linkedin.com/in/rama-hrudayb/', icon: Linkedin, label: 'LinkedIn' }, // Replace with your LinkedIn
];

const SideNavigation: React.FC = () => {
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.to.substring(1)));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveHash(navLinks[i].to);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set active section on initial load
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="side-navigation-container position-fixed d-none d-md-flex flex-column justify-content-between h-100 p-3">
      <div className="nav-links d-flex flex-column align-items-center">
        {navLinks.map((link) => (
          <NavHashLink 
            key={link.to}
            smooth 
            to={link.to}
            className={`nav-item neumorphic-embossed-icon p-3 mb-3 ${activeHash === link.to ? 'active' : ''}`}
            aria-label={link.label}
          >
            <link.icon size={20} />
          </NavHashLink>
        ))}
      </div>
      <div className="social-links d-flex flex-column align-items-center">
        {socialLinks.map((link) => (
          <a 
            key={link.to}
            href={link.to} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="neumorphic-embossed-icon p-3 mb-3"
            aria-label={link.label}
          >
            <link.icon size={20} />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SideNavigation;
