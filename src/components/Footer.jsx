import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <footer className="footer-child" />
      <div className="footer-content">
        <div className="subscription">
          <div className="want-in-on-stories-about-psych-parent">
            <div className="want-in-on">
              Want in on stories about psychology and the latest Memairy news?
            </div>
            <div className="navigation-links">
              
            </div>
            <div className="links">
            <div className="products-wrapper">
                <div className="products">Products</div>
              </div>
              <div className="about-us-wrapper">
                <div className="about-us">About Us</div>
              </div>
              <div className="resources-wrapper">
                <div className="resources">Resources</div>
              </div>
              <div className="exploration-link">
              <div className="explore">Explore</div>
            </div>
            </div>
          </div>
          <div className="form">
            <div className="name-fields">
              <div className="field-labels">
              <input type="text" className="first-name" placeholder="First name"/>
              </div>
              <img className="field-icons" alt="" src="/field-icons.svg" />
            </div>
            <div className="name-fields1">
              <div className="last-name-wrapper">
              <input type="text" className="last-name" placeholder="Last name"/>
              </div>
              <img className="name-fields-child" alt="" src="/vector-24.svg" />
            </div>
            <div className="email-field">
              <div className="email-box">
                <div className="email-wrapper">
                <input type="text" className="email" placeholder="Email"/>
                </div>
                <img className="email-icon" alt="" src="/email-icon.svg" />
              </div>
              <button className="group-div">
                  <div className="rectangle-div" />
                  <div className="submit">Submit</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
          className="logo2"
          alt=""
          src="/logo2.png"
        />
      <img
          className="vector-23"
          alt=""
          src="/vector-23.png"
        />
      <div className="copyright">
        <img
          className="footer-decoration-icon"
          alt=""
          src="/footer-decoration.svg"
        />
        <div className="memiary1">©2024 Memiary</div>
      </div>
    </footer>
  );
};

export default Footer;