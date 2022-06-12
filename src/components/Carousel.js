import React, { useState } from "react";
import "../styles/Carousel.scss";
import rightArrow from "../images/icon-arrow.svg";
import About from "./About";
import angleLeft from "../images/icon-angle-left.svg";
import angleRight from "../images/icon-angle-right.svg";
import { motion } from "framer-motion";

import {
  ArticleDesc,
  ArticleStyle,
  SlideImage,
  StyledSlider,
} from "./SlideImage";
import useMediaQuery from "./useMediaQuery";

function Carousel({ allImages, allOrgImages }) {
  const [current, setCurrent] = useState(0);
  const length = allImages.length;
  const isMobile = useMediaQuery("(min-width: 500px)");

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // const changeImageRes = () => {
  //   setMobileOpen(mobileOpen === false && mobileOpen);
  // };

  return (
    <main>
      <div className="image_slider__container">
        <div className="image__container">
          {" "}
          {isMobile
            ? allOrgImages.map((image, index) => {
                return (
                  <div key={index} className="image_style_carousel">
                    {index === current && (
                      <motion.div
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          ease: [0.17, 0.67, 0.83, 0.67],
                          duration: 1.5,
                        }}
                      >
                        <SlideImage src={image.image} />
                      </motion.div>
                    )}
                    {/* {index === current && console.log(index)} */}
                  </div>
                );
              })
            : allImages.map((image, index) => {
                return (
                  <div key={index} className="image_style_carousel">
                    {index === current && (
                      <motion.div
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          ease: [0.17, 0.67, 0.83, 0.67],
                          duration: 1.5,
                        }}
                      >
                        <SlideImage src={image.image} />
                      </motion.div>
                    )}
                    {/* {index === current && console.log(index)} */}
                  </div>
                );
              })}
          <div className="slider_button_container">
            <button onClick={prevSlide} className="slider_button">
              <img src={angleLeft} alt="left angle svg" />
            </button>
            <button className="slider_button" onClick={nextSlide}>
              {" "}
              <img src={angleRight} alt="right angle svg" />
            </button>
          </div>
        </div>
        <div className="content_slider_container__relative">
          <div className="content_slider__container">
            {allOrgImages.map((image, index) => {
              return (
                <div key={index}>
                  {index === current && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        ease: [0.17, 0.67, 0.83, 0.67],
                        duration: 1.6,
                      }}
                    >
                      <>
                        <ArticleStyle>{image.header}</ArticleStyle>

                        <ArticleDesc> {image.desc}</ArticleDesc>
                      </>
                    </motion.div>
                  )}
                </div>
              );
            })}

            <span className="content_button__container">
              <p className="content_button__text">SHOP NOW</p>
              <img
                className="conent_button__img"
                src={rightArrow}
                alt="right-arrow-svg"
              />
            </span>
          </div>
          <div className="slider_button_container__web">
            <button onClick={prevSlide} className="slider_button__web">
              <img src={angleLeft} alt="left angle svg" />
            </button>
            <button className="slider_button__web" onClick={nextSlide}>
              {" "}
              <img src={angleRight} alt="right angle svg" />
            </button>
          </div>
        </div>
      </div>

      <About />
    </main>
  );
}

export default Carousel;
