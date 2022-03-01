import React from "react";
import { Col } from "react-bootstrap";
import uc from "../../assets/uc-impro.gif";
import "./about-me.scss";
interface IAboutmeprops {
  id?: string;
}
const Aboutme: React.FC<IAboutmeprops> = (props) => {
  return (
    <Col sm="12" className="pt-3 pb-5 " id={props.id}>
      <h1 className="display-5  monty">About me</h1>

      <Col sm="12" className="section text-center">
        <img
          src={uc}
          alt="site under construction"
          className=""
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </Col>
    </Col>
  );
};

export default Aboutme;
