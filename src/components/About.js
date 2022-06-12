import React from "react";
import aboutDark from "../images/image-about-dark.jpg";
import aboutLight from "../images/image-about-light.jpg";
import "../styles/About.scss";

function About() {
  return (
    <div className="about__main__container">
      <img className="about_image" src={aboutDark} alt="about-dark" />
      <div className="about_content">
        <span>
          <p className="about_header">ABOUT OUR FURNITURE</p>
          <p className="about_body">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.{" "}
          </p>
        </span>
      </div>
      <img className="about_image" src={aboutLight} alt="about-dark" />
    </div>
  );
}

export default About;
