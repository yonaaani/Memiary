import React from "react";
import Hero from "../components/Hero";
import AuthContainer from "../components/AuthContainer";
import "./Authorization.css";

const Authorization = () => {
  return (
    <div className="authorization">
      <Hero />
      <div className="auth-container-wrapper">
        <AuthContainer />
      </div>
    </div>
  );
};

export default Authorization;
