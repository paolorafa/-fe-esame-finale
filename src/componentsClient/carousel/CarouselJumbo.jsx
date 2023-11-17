import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { imageCarosoul } from "./imageCarosoul";
import { nanoid } from "nanoid";

function CarouselJumbo() {
  const firstElement = imageCarosoul[0].url;
  const secondElement = imageCarosoul[1].url;
  const thirdElement = imageCarosoul[2].url;
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img key={nanoid()} src={firstElement} alt="First slide" />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img key={nanoid()} src={secondElement} alt="First slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img key={nanoid()} src={thirdElement} alt="First slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselJumbo;
