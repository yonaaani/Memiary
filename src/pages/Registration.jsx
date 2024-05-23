import Hero from "../components/Hero";
import RegisterContainer from "../components/RegisterContainer";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="registration">
      <div className="registration-inner">
        <Hero
          practiceMindfulFlowContaiWidth="unset"
          practiceMindfulFlowContaiMinWidth="unset"
          practiceMindfulFlowContaiAlignSelf="stretch"
          descriptionDebugCommit="unset"
          propDebugCommit="unset"
        />
      </div>
      <RegisterContainer />
    </div>
  );
};

export default Registration;
