import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Social from "../Social/index";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkMode = () => {
    setIsDarkMode(!isDarkMode);
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
      <nav className={`nav ${isDarkMode ? "dark-theme" : "light-theme"}`} >
        <a href="#Home" className="nav__brand">
          <span className="nav__title">Vincent Dorée</span>
        </a>
        <Social />
        <ul className="nav__lists">
          <li className="nav__section">
            <a href="#Home">Accueil</a>
          </li>
          <li className="nav__section">
            <a href="#Projects">Projets</a>
          </li>
          <li className="nav__section">
            <a href="#Competence">Compétences</a>
          </li>
          <li className="nav__section">
            <a href="#Contact">Contact</a>
          </li>
          <button type=""className="nav__dark-mode" onClick={darkMode} aria-label="Toggle dark/light mode">
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="icon" />
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
