import FrameComponent1 from "../components/FrameComponent1";
import VecteezyImage from "../components/VecteezyImage";
import FrameComponent from "../components/FrameComponent";
import TabletBackground from "../components/TabletBackground";
import EmotionLandscape from "../components/EmotionLandscape";
import Carousel1 from "../components/Carousel1";
import Footer from "../components/Footer";
import "./MainPage.css";
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const MainPage = () => {
  
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Коли більше 10% компоненту видно на екрані
  });

  // Коли компонент стає видимим, і це перше виявлення, встановлюємо isVisible в true
  if (inView && !hasBeenVisible) {
    setIsVisible(true);
    setHasBeenVisible(true);
    
  }

  return (
    <div className="mainpage">
      <img className="top-header-icon" alt="" src="/top-header.svg" />
      <FrameComponent1 />
      <VecteezyImage />
      <FrameComponent />
      <TabletBackground />
      <div className="carousel-container">
         <Carousel1 />
      </div>
      <EmotionLandscape />
      <Footer />
    </div>
  );
};

export default MainPage;
