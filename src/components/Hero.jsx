import { useMemo } from "react";
import "./Hero.css";

const Hero = ({
  practiceMindfulFlowContaiWidth,
  practiceMindfulFlowContaiMinWidth,
  practiceMindfulFlowContaiAlignSelf,
  descriptionDebugCommit,
  propDebugCommit,
}) => {
  const heroStyle = useMemo(() => {
    return {
      width: practiceMindfulFlowContaiWidth,
      minWidth: practiceMindfulFlowContaiMinWidth,
      alignSelf: practiceMindfulFlowContaiAlignSelf,
    };
  }, [
    practiceMindfulFlowContaiWidth,
    practiceMindfulFlowContaiMinWidth,
    practiceMindfulFlowContaiAlignSelf,
  ]);

  const graphicIconStyle = useMemo(() => {
    return {
      debugCommit: descriptionDebugCommit,
    };
  }, [descriptionDebugCommit]);

  const mindfulStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  return (
    <div className="hero" style={heroStyle}>
      <h2 className="practice-mindful-flow-container">
        <p className="practice-mindful">{`Practice mindful, `}</p>
        <p className="flow-of-your">{`flow of your thoughts `}</p>
        <p className="with-memairy">with Memairy</p>
      </h2>
      <div className="body">
        <div className="graphic-parent">
          <img
            className="graphic-icon"
            loading="lazy"
            alt=""
            src="/vector-11.svg"
            style={graphicIconStyle}
          />
          <div className="description">
            <h3 className="mindful" style={mindfulStyle}>
              Mindful.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
