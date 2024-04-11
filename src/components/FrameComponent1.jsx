import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="mainpage-inner">
      <div className="frame-parent">
        <header className="frame-group">
          <div className="group-1logo-1-wrapper">
            <img
              className="group-1logo-1"
              loading="lazy"
              alt=""
              src="/group-1logo-1@2x.png"
            />
          </div>
          <div className="content-area">
            <div className="log-in-wrapper">
              <div className="log-in">Log in</div>
            </div>
            <button className="rectangle-parent">
              <div className="frame-child" />
              <div className="sign-up">Sign up</div>
            </button>
          </div>
        </header>
        <div className="laptop-background">
          <div className="memiary-parent">
            <div className="memiary">Memiary</div>
            <div className="by-ivy">by Ivy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
