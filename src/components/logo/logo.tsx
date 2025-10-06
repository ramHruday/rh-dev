import React from "react";
import Image from "react-bootstrap/Image";

interface ILogoProps {}
const Logo: React.FC<ILogoProps> = () => {
  return (
    <Image
      className="position-fixed logo-positioning"
      src="../../logo.svg"
      roundedCircle
    />
  );
};

export default Logo;
