import React from "react";
import '../styles/MobileNavLinks.scss'

function MobileNav({navbarOpen, navLinks}) {
    
  return (
    <>
      {" "}
      {navbarOpen && (
        <div className="header__dropdown animate slideIn">
          <nav className="header__nav--dropdown">
            <ul>
              {navLinks.map((link) => (
                <li key={link} className="header__menu-item--dropdown">
                  {link}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default MobileNav;
