import "./FrameComponent.css";
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const FrameComponent = () => {
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
    <section className="frame-section">
      <div ref={ref} className={`your-component ${isVisible ? 'visible' : ''}`}>
      <div className="register-call-to-action-parent">
        <div className="register-call-to-action">
          <div className="laptop-clipart">
            <div className="memoir-at-your-container">
              <p className="memoir">{`Memoir `}</p>
              <p className="at-your-fingertips">at your fingertips</p>
            </div>
            <div className="whether-youre-thinking">
              Whether you’re thinking inside or outside the box, it’s never been
              easier to write down thoughts on Memiary
            </div>
            <button className="rectangle-group">
              <div className="rectangle-div" />
              <div className="register">Register</div>
            </button>
          </div>
        </div>
        <img
          className="vecteezy-laptop-device-clipart-icon"
          loading="lazy"
          alt=""
          src="/vecteezy-laptopdeviceclipartdesignillustration-9385085-1@2x.png"
        />
      </div>
      </div>
    </section>
  );
};

export default FrameComponent;
