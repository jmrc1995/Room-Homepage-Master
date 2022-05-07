import React from "react";
import logo from "../images/logo.svg";
import '../styles/Navigation.css'
function Navigation() {
  const navLinks = ["home", "shop", "about", "contact"];

  return (
    <>
      <div className="flex full-width">
        <img 
          src={logo} 
          alt="room the logo"
          className="logo" />
        <ul>
          {navLinks.map((link) => (
            <li>{link}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navigation;
