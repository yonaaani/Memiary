import React from 'react';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import "./Carousel1.css";

const Carousel1 = () => {
  return (
    <div className='carousel'>
    <Carousel
      slideSize="14%"
      align="start"
      loop
    >
      <Carousel.Slide>
        <img
          className="image-1-icon"
          loading="lazy"
          alt=""
          src="/image-24@2x.png"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          className="image-2-icon"
          loading="lazy"
          alt=""
          src="/image-20@2x.png"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          className="image-3-icon"
          loading="lazy"
          alt=""
          src="/image-18@2x.png"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          className="image-4-icon"
          loading="lazy"
          alt=""
          src="/image-19@2x.png"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          className="image-5-icon"
          loading="lazy"
          alt=""
          src="/image-21@2x.png"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          className="image-6-icon"
          loading="lazy"
          alt=""
          src="/image-22@2x.png"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          className="image-7-icon"
          loading="lazy"
          alt=""
          src="/image-23@2x.png"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          className="image-8-icon"
          loading="lazy"
          alt=""
          src="/image-25@2x.png"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          className="image-9-icon"
          loading="lazy"
          alt=""
          src="/image-26@2x.png"
        />
      </Carousel.Slide>
    </Carousel>
    </div>
  );
};

export default Carousel1;
