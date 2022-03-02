import React from "react";
import { Col, Image } from "react-bootstrap";
import uc from "../../assets/calvin.webp";
import "./home.scss";

interface IHomeprops {
  id?: string;
}
const Home: React.FC<IHomeprops> = (props) => {
  return (
    <Col sm="12" md="10" style={{ height: "85vh" }} id={props.id}>
      <h1 className="display-5 p-2 monty">Hello, This is Hruday.</h1>
      <h4 className="p-1 monty mb-0">
        I am a Grad student at Texas tech University.
      </h4>
      <h4 className="p-1 monty mb-0">
        Skilled in Full stack development, Internet of drones
      </h4>
      <Image className="float-end" src={uc} />
    </Col>
  );
};

export default Home;
