import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="frame-section">
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
    </section>
  );
};

export default FrameComponent;
