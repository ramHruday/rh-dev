import React from "react";
import { GitHub, Home, Linkedin, Package, Zap } from "react-feather";
import OverlayLink from "../../components/overlay-link/overlay-link";
import "./side-nav.scss";

export interface ISideNavbarProps {
  // width: string | number;
}

const SideNavBar: React.FC<ISideNavbarProps> = ({ /* width */ }) => {
  return (
    <div className="postion-relative d-none d-md-block side-nav-wrapper">
      <div className="position-fixed h-100 side-nav-fixed-container">
        <nav
          className="app-nav d-none d-md-flex flex-column justify-content-between position-sticky h-100"
          // style={{ width: "4.2rem" }}
        >
          <NavItemList className="nav-list w-100 h-60 d-flex flex-column align-items-center justify-content-around" />
          <SocialWebBox />
        </nav>
        <nav
          className="app-pill-nav d-md-none mobile-nav-styles"
          // style={{ height: "3.5rem", fontSize: "1.4rem" }}
        >
          <NavItemList className="nav-list w-100 h-100 d-flex flex-row align-items-center justify-content-around" />
        </nav>
      </div>
    </div>
  );
};

interface NavItemListProps {
  className?: string;
}
const NavItemList: React.FC<NavItemListProps> = ({ className }) => {
  const currentHash = window.location.hash;
  return (
    <div className={className}>
      <OverlayLink placement="right" msg="Home" to="#home" className={currentHash === '#home' || currentHash === '' ? 'active' : ''}>
        <Home key="home" className="cursor-pointer" />
      </OverlayLink>
      <OverlayLink placement="right" msg="Projects" to="#projects" className={currentHash === '#projects' ? 'active' : ''}>
        <Package key="projects" className="cursor-pointer" />
      </OverlayLink>
      <OverlayLink placement="right" msg="Skills" to="#library" className={currentHash === '#library' ? 'active' : ''}>
        <Zap key="library" className="cursor-pointer" />
      </OverlayLink>
      {/* <OverlayLink placement="right" msg="About" to="#about-me">
        <Info key="Info" className="cursor-pointer" />
      </OverlayLink> */}
    </div>
  );
};

const SocialWebBox: React.FC = () => {
  return (
    <div className="social-list p-2 w-100 d-flex flex-column align-items-center justify-content-around">
      <a
        href="https://github.com/ramHruday"
        target="_blank"
        rel="noopener noreferrer"
        className="my-2 p-2"
      >
        <GitHub />
      </a>
      <a
        href="https://www.linkedin.com/in/rama-hrudayb/"
        target="_blank"
        rel="noopener noreferrer"
        className="my-2 p-2"
      >
        <Linkedin color="#0077b5" />
      </a>
    </div>
  );
};

export default SideNavBar;
