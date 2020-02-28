import React from 'react';

import './header-bar.scss';

import brandName from '../../assets/RH-DEV.png';
import searcIcon from '../../assets/Vector.svg';

interface IHeaderBarProps {
  brandName: string;
  className?: string;
}

const HeaderBar: React.FC<IHeaderBarProps> = props => {
  return (
    <>
      <header
        className={`app-header shadow-sm d-flex justify-content-between w-100 align-items-stretch flex-row ${props.className}`}
      >
        <div className="px-2 head-logo bg-white">
          <img src={brandName} alt={props.brandName} className="pb-2" />
        </div>
        <div className="bg-light w-100 d-flex justify-content-end pr-2">
          <img src={searcIcon} alt="search" />
        </div>
      </header>
    </>
  );
};

export default HeaderBar;
