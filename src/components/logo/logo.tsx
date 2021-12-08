import React from "react";
import Image from "react-bootstrap/Image";

interface ILogoProps {}
const Logo: React.FC<ILogoProps> = () => {
  return (
    <Image
      className="position-fixed"
      style={{ right: 10 }}
      src="../../logo.svg"
      roundedCircle
    />
  );
};

export default Logo;
