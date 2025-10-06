import React from "react";
import { Col, Image, Button } from "react-bootstrap";
import uc from "../../assets/calvin.webp";
import "./home.scss";

interface IHomeprops {
  id?: string;
}
const Home: React.FC<IHomeprops> = (props) => {
  return (
    <Col sm="12" md="10" className="home-section d-flex align-items-center justify-content-center" id={props.id}>
      <div className="home-content neumorphic-debossed p-4 p-md-5 d-flex flex-column flex-md-row align-items-center justify-content-between w-100">
        <Col md={7} className="text-content text-center text-md-start mb-4 mb-md-0">
          <h1 className="display-4 monty fw-bold">Hi, I'm Rama Hruday.</h1>
          <h3 className="monty text-muted mb-4">A Passionate Full-stack Developer & Innovator.</h3>
          <p className="lead mb-4">
            Building seamless web experiences and exploring the future of IoT with drones.
          </p>
          <Button variant="primary" className="neumorphic-embossed-button px-4 py-2" href="#projects">
            View My Work
          </Button>
        </Col>
        <Col md={5} className="image-content mt-4 mt-md-0 ms-md-5">
          <Image src={uc} alt="Hruday" fluid roundedCircle className="profile-image neumorphic-embossed" />
        </Col>
      </div>
    </Col>
  );
};

export default Home;
