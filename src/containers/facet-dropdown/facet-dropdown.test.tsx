import { shallow } from 'enzyme';
import React from 'react';

import { FiltersObject } from '../../models';
import FacetDropdown from './facet-dropdown';

describe('FacetDropdown', () => {
  it('should render FacetDropdown', () => {
    const component = shallow(
      <FacetDropdown
        category="account_id"
        facetField={undefined}
        onFilterToggle={() => {}}
        onClear={() => {}}
        selectedItems={new FiltersObject()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
