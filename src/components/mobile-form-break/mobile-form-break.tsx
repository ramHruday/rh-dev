//wip i have to handle more than two layouts by click next button in mobile layout
import React, { ReactNode, useState } from 'react';

interface ISliderProps {
  layouts: ReactNode[];
  next: (index: number) => {};
  previous: (index: number) => {};
  current: number;
}

const Slider: React.FC<ISliderProps> = props => {
  return (
    <div className="main-div">
      <div className="mb-0"></div>
      <div className="slider-inner-container">{props.children}</div>
    </div>
  );
};

export default Slider;
