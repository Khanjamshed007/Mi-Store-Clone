import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Slider.scss'

const Slider = ({ start }) => {
  return (
    <Carousel fade>
      {start.map((item, index) => (
        <Carousel.Item>
          <img className="img" src={item} alt="first Slide"  />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
