import React from "react";
import landingVideo from "./landing-video.mp4";
import "./LandingPage.css";
import Typical from "react-typical";
import { NavLink } from "react-router-dom";


const LandingPage = () => {
  return (
    <div className="headers">
      <video autoPlay loop muted className="video">
        <source src={landingVideo} type="video/mp4" />
      </video>
      <div className="center">
        <h1 className="texts">
          Hello.
          <mark style={{ color: "#C38D9E", background: "none" }}>I'm</mark>{" "}
          <mark style={{ color: "#E8A87C", background: "none" }}>Okeowo</mark>{" "}
          <mark style={{ color: "#EDF5E1", background: "none" }}>
            Oluwadarasimi David
          </mark>
        </h1>
        <p className="text">
          I'm
          <Typical
            className="loops"
            loop={Infinity}
            wrapper="b"
            steps={[
              " a software developer",
              1000,
              " a student",
              1000,
              " a Quick learner",
              1000,
              " Manchester United fanboy",
              1000,
              " problem solver",
              1000,
            ]}
          />
        </p>
        <NavLink to='/main'>
        <button className="button">Learn more about me</button>
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;
