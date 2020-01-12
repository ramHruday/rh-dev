import React from 'react';
import { Badge, Dropdown, FormCheck } from 'react-bootstrap';

import './facet-value.scss';

import { IFacetValue } from '../../models';

interface IFacetValueProps {
  facet: IFacetValue;
  isSelected: boolean;
  className?: string;
  eventKey?: string;
}

const FacetValue: React.FC<IFacetValueProps> = props => {
  return (
    <Dropdown.Item
      as="li"
      className={`px-3 d-flex justify-content-between align-items-center ${props.className}`}
      eventKey={props.eventKey ?? props.facet.value}
      title={props.facet.value}
    >
      <FormCheck className="w-75">
        <FormCheck.Input type="checkbox" checked={props.isSelected} onChange={() => {}} />
        <FormCheck.Label className="d-block mr-3 w-100 text-overflow-ellipsis">{props.facet.value}</FormCheck.Label>
      </FormCheck>

      <Badge className="rounded-pill" style={{ backgroundColor: '#e0e0e0', color: '#797979' }}>
        {new Intl.NumberFormat('en-US').format(props.facet.count ?? 0)}
      </Badge>
    </Dropdown.Item>
  );
};

export default FacetValue;
