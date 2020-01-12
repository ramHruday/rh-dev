import { shallow } from 'enzyme';
import React from 'react';

import FacetValue from './facet-value';

describe('FacetValue', () => {
  it('should render FacetValue', () => {
    const component = shallow(<FacetValue facet={{ count: 10, value: 'something' }} isSelected />);
    expect(component).toMatchSnapshot();
  });
});
