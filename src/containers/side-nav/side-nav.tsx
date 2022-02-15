import React from "react";
import { GitHub, Home, Info, Linkedin, Zap } from "react-feather";
import OverlayLink from "../../components/overlay-link/overlay-link";
import "./side-nav.scss";

const SideNavBar: React.FC = () => {
  return (
    <div className="postion-relative">
      <nav
        className="app-nav d-none d-md-flex flex-column justify-content-between text-white bg-dark position-sticky h-100"
        style={{ width: "3.5rem" }}
      >
        <NavItemList className="nav-list w-100 h-50 d-flex flex-column align-items-center justify-content-around" />
        <SocialWebBox />
      </nav>
      <nav
        className="app-pill-nav d-md-none text-white bg-dark"
        style={{ height: "3.5rem", fontSize: "1.4rem" }}
      >
        <NavItemList className="nav-list w-100 h-100 d-flex flex-row align-items-center justify-content-around" />
      </nav>
    </div>
  );
};

interface NavItemListProps {
  className?: string;
}
const NavItemList: React.FC<NavItemListProps> = ({ className }) => {
  return (
    <div className={className}>
      <OverlayLink placement="right" msg="Home" to="/">
        <Home key="home" className="cursor-pointer" />
      </OverlayLink>
      <OverlayLink placement="right" msg="Skills" to="/library">
        <Zap key="library" className="cursor-pointer" />
      </OverlayLink>
      <OverlayLink placement="right" msg="About Me" to="/about-me">
        <Info key="Info" className="cursor-pointer" />
      </OverlayLink>
    </div>
  );
};

const SocialWebBox: React.FC = () => {
  return (
    <div className="social-list h-25 p-2 w-100 d-flex flex-column align-items-center justify-content-around">
      <a
        href="https://github.com/ramHruday"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </a>
      <a
        href="https://www.linkedin.com/in/rama-hrudayb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </a>
    </div>
  );
};

export default SideNavBar;
