import "./App.css";
import Navigation from "./components/Navigation.js";
import Carousel from "./components/Carousel.js";
// import About from "./components/About";

import mobileImage1 from "./images/mobile-image-hero-1.jpg";
import mobileImage2 from "./images/mobile-image-hero-2.jpg";
import mobileImage3 from "./images/mobile-image-hero-3.jpg";

import orgImage1 from "./images/desktop-image-hero-1.jpg"
import orgImage2 from "./images/desktop-image-hero-2.jpg"
import orgImage3 from "./images/desktop-image-hero-3.jpg"

export const allImages = [
  {
    name: "first-image",
    image: mobileImage1,
    header: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    name: "second-image",
    image: mobileImage2,
    header:"We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today. ",
  },
  {
    name: "third-image",
    image: mobileImage3,
    header:"Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

export const allOrgImages = [
  {
    name: "first-image",
    image: orgImage1,
    header: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    name: "second-image",
    image: orgImage2,
    header:"We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today. ",
  },
  {
    name: "third-image",
    image: orgImage3,
    header:"Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

const mobileOpen = () => {

}


function App() {
  return (
    <div className="App">
      <Navigation />
      {}
      <Carousel allImages={allImages} allOrgImages={allOrgImages} />
      {/* <About /> */}
    </div>
  );
}

export default App;
