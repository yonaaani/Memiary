import "./TabletBackground.css";
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const TabletBackground = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Коли більше 50% компоненту видно на екрані
  });

  // Коли компонент стає видимим, і це перше виявлення, встановлюємо isVisible в true
  if (inView && !hasBeenVisible) {
    setIsVisible(true);
    setHasBeenVisible(true);
  }

  return (
    <section className="tablet-background">
      <div className="tablet-background-inner">
      <div ref={ref} className={`your-component ${isVisible ? 'visible' : ''}`}>
        <div className="various-helping-styles-parent">
          <div className="various-helping-styles">
            <div className="various-helping-styles-child" />
            <div className="a-helping-hand">A helping hand</div>
            <div className="our-specialists-will-container">
              <p className="our-specialists-will">{`Our specialists will help you understand the problems that are bothering `}</p>
              <p className="you">you</p>
            </div>
          </div>
          <div className="vector-group">
            <img className="frame-child2" alt="" src="/vector-9.svg" />
            <img
              className="frame-child3"
              loading="lazy"
              alt=""
              src="/vector-16.svg"
            />
            <img
              className="frame-child4"
              loading="lazy"
              alt=""
              src="/vector-17.svg"
            />
          </div>
        </div>
        </div>
      </div>
      <div className="tablet-device-image">
        <img
          className="tablet-device-image-child"
          loading="lazy"
          alt=""
          src="/vector-19.svg"
        />
        <div className="tablet-device-image-inner">
          <div className="frame-div">
            <div className="various-styles-wrapper">
              <div className="various-styles">Various styles</div>
            </div>
            <div className="myriad-styles-to">
              Myriad styles to suit everyone's personal taste
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabletBackground;
