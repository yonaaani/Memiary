import FrameComponent1 from "../components/FrameComponent1";
import VecteezyImage from "../components/VecteezyImage";
import FrameComponent from "../components/FrameComponent";
import TabletBackground from "../components/TabletBackground";
import EmotionLandscape from "../components/EmotionLandscape";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="mainpage">
      <img className="top-header-icon" alt="" src="/top-header.svg" />
      <FrameComponent1 />
      <VecteezyImage />
      <FrameComponent />
      <TabletBackground />
      <section className="wrapper-image-24-parent">
        <div className="wrapper-image-24">
          <img
            className="image-24-icon"
            loading="lazy"
            alt=""
            src="/image-24@2x.png"
          />
        </div>
        <div className="wrapper-image-20">
          <img
            className="image-20-icon"
            loading="lazy"
            alt=""
            src="/image-20@2x.png"
          />
        </div>
        <div className="wrapper-image-18">
          <img
            className="image-18-icon"
            loading="lazy"
            alt=""
            src="/image-18@2x.png"
          />
        </div>
        <div className="wrapper-image-19">
          <img
            className="image-19-icon"
            loading="lazy"
            alt=""
            src="/image-19@2x.png"
          />
        </div>
      </section>
      <section className="tablet-u-i-parent">
        <div className="tablet-u-i">
          <div className="wrapper-image-21">
            <img
              className="image-21-icon"
              loading="lazy"
              alt=""
              src="/image-21@2x.png"
            />
          </div>
        </div>
        <div className="tablet-u-i1">
          <div className="wrapper-image-22">
            <img
              className="image-22-icon"
              loading="lazy"
              alt=""
              src="/image-22@2x.png"
            />
          </div>
        </div>
        <div className="wrapper-image-23">
          <img
            className="image-23-icon"
            loading="lazy"
            alt=""
            src="/image-23@2x.png"
          />
        </div>
        <div className="wrapper-image-25">
          <img
            className="image-25-icon"
            loading="lazy"
            alt=""
            src="/image-25@2x.png"
          />
        </div>
      </section>
      <EmotionLandscape />
      <footer className="mainpage-child" />
    </div>
  );
};

export default MainPage;
