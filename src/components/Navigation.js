import React, { useState } from "react";
import logo from "../images/logo.svg";
import "../styles/Navigation.scss";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import MobileNav from "./MobileNav";

function Navigation() {
  const navLinks = ["home", "shop", "about", "contact"];

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <header className="header">
        <MobileNav navbarOpen={navbarOpen} navLinks={navLinks} />
        <div className="header__wrapper">
          <img
            className="hamburger__logo"
            src={navbarOpen ? close : hamburger}
            alt="hamburger-menu"
            onClick={() => handleToggle()}
          />
          <div className="header__logo__container">
            <img src={logo} className="header__logo" alt="room the logo" />
          </div>

          <nav className="header__nav">
            <ul className="header__nav__ul">
              {navLinks.map((link) => (
                <li key={link} className="header__menu-item">
                  {link}
                </li>
              ))}
            </ul>
          </nav>

          
        </div>
      </header>
    </>
  );
}

export default Navigation;
