import React from "react";
import "./Banner";
import { Carousel } from "react-bootstrap";

const Banner = ({ end }) => {
  return (
    <div className="banner">
      <Carousel fade>
        {end.map((item, index) => (
          <Carousel.Item key={item.image} id="banner" interval={1000}>
            <img className="d-block w-100" src={item.image} alt={`${index} banner`} />
            <Carousel.Caption>
                 <h3>{item.name}</h3>
                 <p>{item.description}</p>
                 <p>{item.source}</p>
                 <u>Read More</u>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
