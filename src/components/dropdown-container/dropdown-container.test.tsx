import { shallow } from 'enzyme';
import React from 'react';

import DropdownContainer from './dropdown-container';

describe('DropdownContainer', () => {
  it('should render DropdownContainer', () => {
    const component = shallow(<DropdownContainer title="" onValueToggle={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});
