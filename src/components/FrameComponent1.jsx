import "./FrameComponent1.css";
import { Layout } from 'antd';
const { Header } = Layout;
import { Link } from "react-router-dom";

const FrameComponent1 = () => {
  return (
    <div className="mainpage-inner">
      <div className="frame-parent">
        <Layout>
          <Header
            style={{
              position: 'fixed',
              top: 0,
              zIndex: 10,
              padding: 25,
              width: 1520,
              height: 120,
              display: 'flex',
              className: 'frame-parent',
              background: '#FEFBF6',
              left: 0,
            }}
          >
            <div className="frame-group">
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
                <Link to="/authorization" className="log-in">Log in</Link>
                </div>
                <button className="rectangle-parent">
                <Link to="/registration">
                  <div className="frame-child" />
                  <div className="sign-up">Sign up</div>
                  </Link>
                </button>
              </div>
            </div>
          </Header>
        </Layout>
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
