import React from "react";
import "../styles/Carousel.css";
import set1 from "../images/desktop-image-hero-1.jpg";
import rightArrow from "../images/icon-arrow.svg"

function Carousel() {
  return (
    <div className="flex-row">
      <div className="left-container" >

          <img 
              src={set1} 
              alt='Dining Set 1'
              className="imageset-1"
              />
      </div>

      <div className="flex-column">
        <h1>Discover innovative ways to decorate</h1>

        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country, Our ecperts combine form and function in bringing
          your cision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>

        <span>
            <h3>SHOP NOW</h3>
          <img src={rightArrow} alt= 'right-arrow'/>
        </span>

      </div>
    </div>
  );
}

export default Carousel;
