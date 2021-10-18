import React, { useState } from "react";
import {
  ChevronsLeft,
  ChevronsRight,
  GitHub,
  Home,
  Info,
  Linkedin,
  Zap,
} from "react-feather";
import { Link } from "react-router-dom";
import "./side-nav.scss";

const SideNavBar: React.FC = () => {
  return (
    <>
      <nav className="h-100 app-nav d-none d-md-flex flex-column justify-content-between position-fixed text-white bg-primary align-items-center">
        <NavItemList />
      </nav>
      <nav className="app-pill-nav d-md-none ">
        <NavItemList />
      </nav>
    </>
  );
};

const NavItemList: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <>
      <div
        className="nav-list p-2 w-100 h-50 d-flex flex-column justify-content-around align-items-center position-relative"
        style={{ width: "3.5rem" }}
      >
        {isExpanded ? (
          <>
            <Link to="/">
              <Home />
            </Link>
            <Link to="/library">
              <Zap />
            </Link>
            <Link to="/code-play">
              <Info />
            </Link>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/library">Skills</Link>
            <Link to="/code-play">About me</Link>
          </>
        )}
      </div>
      <div className="social-list d-flex p-2 w-100  h-25 d-flex flex-column justify-content-around align-items-center">
        <a
          href="https://github.com/ramHruday"
          target="_blank"
          rel="noopener noreferrer"
          className="my-2"
        >
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/rama-hrudayb/"
          target="_blank"
          rel="noopener noreferrer"
          className="my-2"
        >
          <Linkedin />
        </a>
        {isExpanded ? (
          <ChevronsLeft onClick={() => setIsExpanded(!isExpanded)} />
        ) : (
          <ChevronsRight onClick={() => setIsExpanded(!isExpanded)} />
        )}
      </div>
    </>
  );
};

export default SideNavBar;
