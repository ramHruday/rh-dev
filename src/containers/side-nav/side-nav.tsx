import React from 'react';

import './side-nav.scss';

const SideNavBar: React.FC = () => {
  return (
    <nav className="app-nav shadow-sm d-flex justify-content-between w-100 align-items-stretch flex-row">
      <div className="px-2 head-logo"></div>
      <div className="bg-light w-100 d-flex justify-content-end pr-2"></div>
    </nav>
  );
};

export default SideNavBar;
