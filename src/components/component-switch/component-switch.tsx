import React from 'react';

import HeaderBar from '../header-bar/header-bar';
import InfoTooltip from '../info-tooltip/info-tooltip';

const Components: any = {
  infoTooltip: InfoTooltip,
  headerBar: HeaderBar
};

interface IBlock {
  component: any;
  block: any;
  id: any;
}
const ComponentSwitcher: any = (block: IBlock) => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block.id,
      block: block
    });
  }
};

export default ComponentSwitcher;
