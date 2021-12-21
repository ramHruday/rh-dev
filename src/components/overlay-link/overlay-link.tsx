import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Placement } from "react-bootstrap/esm/types";
import { Link, LinkProps } from "react-router-dom";

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
      <Link {...link}>{children}</Link>
    </OverlayTrigger>
  );
};

export default OverlayLink;
