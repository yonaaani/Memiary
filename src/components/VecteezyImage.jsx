import "./VecteezyImage.css";

const VecteezyImage = () => {
  return (
    <section className="vecteezy-image">
      <div className="frame-container">
        <div className="mind-full-wrapper">
          <div className="mind-full">Mind full?</div>
        </div>
        <div className="outside-box">
          <div className="vector-parent">
            <img className="frame-item" alt="" src="/vector-5.svg" />
            <img className="frame-inner" alt="" src="/vector-6.svg" />
            <img className="vector-icon" alt="" src="/vector-7.svg" />
            <img
              className="frame-child1"
              loading="lazy"
              alt=""
              src="/vector-8.svg"
            />
          </div>
          <h2 className="express-your-thoughts-container">
            <p className="express">{`Express `}</p>
            <p className="your-thoughts-digitally">
              your thoughts digitally with Memairy by Ivy
            </p>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default VecteezyImage;
