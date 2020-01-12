import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

type TriggerType = "hover" | "click" | "focus";

/**
 * @params title is the header of your tooltip
 * @params content is the content of your tooltip
 * @params trigger -> popover tooltip, default:hover
 *
 */
const InfoTooltip: React.FC<{
  title: string;
  content?: string;
  trigger?: TriggerType | TriggerType[];
}> = ({ title, content, children, trigger }) => {
  return (
    <OverlayTrigger
      trigger={trigger ? trigger : "hover"}
      placement="right"
      overlay={
        <Popover id="popover-basic">
          <Popover.Title as="h3">{title}</Popover.Title>
          <Popover.Content>{content ? content : children}</Popover.Content>
        </Popover>
      }
      rootClose={true}
    >
      {/* <FontAwesomeIcon className="mx-2 cursor-pointer" icon={faInfoCircle} color="info" />
       */}
      <p>info</p>
    </OverlayTrigger>
  );
};

export default InfoTooltip;
