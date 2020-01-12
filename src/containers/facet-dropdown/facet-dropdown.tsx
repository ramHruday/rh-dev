import React, { ChangeEvent, useMemo, useState } from 'react';
import { FormControl } from 'react-bootstrap';

import DropdownContainer from '../../components/dropdown-container/dropdown-container';
import FacetValue from '../../components/facet-value/facet-value';
import { FiltersObject, IAssetAttribute, IFacetField } from '../../models';

interface IFacetDropdownProps {
  category: IAssetAttribute;
  facetField: IFacetField | undefined;
  onFilterToggle: (category: IAssetAttribute, value: string) => void;
  selectedItems: FiltersObject;
  onClear: (category: IAssetAttribute) => void;
  categoryName: string | undefined;
}

const FacetDropdown: React.FC<IFacetDropdownProps> = props => {
  const categoryItems =
    props.selectedItems.filters![props.category] || new Set<string>();
  const [searchText, setSearchText] = useState("");

  const filteredValues = useMemo(
    () =>
      props.facetField?.values?.filter(
        value =>
          !searchText ||
          value.value?.toLowerCase().startsWith(searchText.toLowerCase())
      ) ?? [],
    [props.facetField, searchText]
  );

  return (
    <DropdownContainer
      title={`${props.categoryName} (${categoryItems.size})`}
      onValueToggle={value => props.onFilterToggle(props.category, value)}
      onClear={() => props.onClear(props.category)}
    >
      {(props.facetField?.values?.length ?? 0) > 10 && (
        <li className="px-3 pb-2">
          <FormControl
            placeholder="Search"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchText(e.target.value.trim())
            }
          />
        </li>
      )}

      {filteredValues.length > 0 ? (
        filteredValues.map(value => (
          <FacetValue
            key={value.value}
            facet={value}
            isSelected={categoryItems.has(value.value!)}
          />
        ))
      ) : (
        <li className="px-3">No Items</li>
      )}
    </DropdownContainer>
  );
};

export default FacetDropdown;
