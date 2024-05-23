import "./EmotionLandscape.css";
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const EmotionLandscape = () => {
  
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
    <section className="emotion-landscape">
       <div ref={ref} className={`your-component ${isVisible ? 'visible' : ''}`}>
      <div className="vecteezy-tablet-with-free-spac-parent">
        <img
          className="vecteezy-tablet-with-free-spac-icon"
          loading="lazy"
          alt=""
          src="/vecteezy-tabletwithfreespacetabletorlaptopmockup-19860761-1@2x.png"
        />
        <div className="emotional-landscape">
          <div className="emotion-tracker-label-parent">
            <div className="emotion-tracker-label">
              <div className="emotional-tracker">Emotional tracker</div>
            </div>
            <div className="mapping-the-emotional">
              Mapping the emotional landscape and journeying through
              experiences.
            </div>
          </div>
        </div>
      </div>
      </div>
      <img
          className="frame-child5"
          loading="lazy"
          alt=""
          src="/vector-20.svg"
        />
    </section>
  );
};

export default EmotionLandscape;
