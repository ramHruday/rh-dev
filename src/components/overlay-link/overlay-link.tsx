import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Placement } from "react-bootstrap/esm/types";
import { LinkProps } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
interface IOverlayLinkProps extends LinkProps {
  placement: Placement;
  msg: string;
}
const OverlayLink: React.FC<IOverlayLinkProps> = ({
  placement,
  children,
  msg,
  ...link
}) => {
  return (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={<Tooltip id={`tooltip-${placement}-${msg}`}>{msg}</Tooltip>}
    >
      <span className="w-100 text-center hoverable-neu">
        <NavHashLink
          smooth
          to={link.to}
          activeClassName="neu-grey"
          className="monty text-decoration-none w-75 p-2 mb-0"
        >
          {children}
        </NavHashLink>
        <p className="mb-0 font-monospace f-90">
          <small>{msg}</small>
        </p>
      </span>
    </OverlayTrigger>
  );
};

export default OverlayLink;
