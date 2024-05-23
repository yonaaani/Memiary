import React from 'react';
import "./ImagePicker.css"; // Ensure this file exists and has appropriate styles
import { Carousel } from '@mantine/carousel';

const ImagePicker = ({ onImageSelect }) => {
  const images = ['/public/journal.png', 
  '/public/journal1.png', 
  '/public/journal3.png', 
  '/public/journal4.png', 
  '/public/journal5.png',
  '/public/journal6.png',
  '/public/journal7.png',
  '/public/journal8.png',
  '/public/image42.png',
  '/public/image43.png',
  '/public/image44.png',
  '/public/image45.png',
  '/public/image46.png',
  '/public/image47.png',
  '/public/image48.png',
  '/public/image49.png',
  '/public/image50.png',
  '/public/image51.png',
  '/public/image52.png',
  '/public/image53.png']; // Add more paths as needed

  return (
    <Carousel
    slideSize="6%"
    slideGap="xs"
    loop
    align="center"
  >
    {images.map((image, index) => (
      <Carousel.Slide key={index}>
        <img
          src={image}
          alt={`Image ${index}`}
          onClick={() => onImageSelect(image)}
          className="image-picker-item"
        />
      </Carousel.Slide>
    ))}
  </Carousel>
  );
};

export default ImagePicker;
