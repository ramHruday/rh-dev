import React, { ReactNode, useRef, useState } from 'react';
import { Button, ButtonGroup, Col, Dropdown, Row } from 'react-bootstrap';
import { Delete } from 'react-feather';

import './dropdown-container.scss';

import { useOutsideClick } from '../../utils/hooks';

interface IDropdownContainerProps {
  title: ReactNode;
  onValueToggle: (val: string) => void;
  onClear?: () => void;
}

const DropdownContainer: React.FC<IDropdownContainerProps> = props => {
  const [show, setShow] = useState(false);
  const containerRef = useRef<any>(null);

  useOutsideClick(containerRef, () => setShow(false));

  return (
    <Row noGutters>
      <Col xs="11">
        <Dropdown
          as={ButtonGroup}
          className="facet-dropdown-container w-100"
          onSelect={(value: string, e: any) => props.onValueToggle(value)}
          alignRight
          show={show}
        >
          <Button
            block
            variant="light"
            className="text-left border"
            onClick={() => setShow(!show)}
          >
            {props.title}
          </Button>

          <Dropdown.Toggle
            split
            variant="light"
            className="border bg-white text-primary"
            id="add-filter-category"
            onClick={() => setShow(!show)}
          />

          <Dropdown.Menu as="ol" ref={containerRef}>
            {props.children}
          </Dropdown.Menu>
        </Dropdown>
      </Col>

      {props.onClear && (
        <Col xs="1" className="text-right pl-2 my-auto">
          <span
            className="facet-clear-icon cursor-pointer"
            onClick={props.onClear}
            title="Clear all values for this Category"
          >
            <Delete color="black" className="mx-2 cursor-pointer" />
          </span>
        </Col>
      )}
    </Row>
  );
};

export default DropdownContainer;
