import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Social from "../Social/index";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const darkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.classList.add("light-theme");
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }
  }, [isDarkMode]);

  return (
    <header className="header" id="Home">
      <nav className={`nav ${isDarkMode ? "dark-theme" : "light-theme"}`}>
        <a href="#" className="nav__brand">
          <img src="./assets/images/moi.avif" className="nav__image"></img>
          <span className="nav__title">Vincent Dorée</span>
        </a>
        <Social />
        <button className="nav__mobile" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="nav__icon" />
        </button>
        <ul className={`nav__lists ${isMobileMenuOpen ? "open" : ""}`}>
          <li className="nav__section">
            <a href="#Home" onClick={closeMobileMenu}>
              Accueil{" "}
            </a>
          </li>
          <li className="nav__section">
            <a href="#Projects" onClick={closeMobileMenu}>
              Projets{" "}
            </a>
          </li>
          <li className="nav__section">
            <a href="#Competence" onClick={closeMobileMenu}>
              Compétences
            </a>
          </li>
          <li className="nav__section">
            <a href="#Contact" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
          <li className="nav__section">
            <button type="submit" className="nav__dark-mode" onClick={darkMode} aria-label="Toggle dark/light mode">
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="icon" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
