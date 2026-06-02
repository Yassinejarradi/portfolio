import React, { useState } from "react";
import "./header.css";
import "@iconscout/unicons/css/line.css";
// translation
import CustomToggleSwitch from "./CustomToggleSwitch"
import { useTranslation } from "react-i18next";
// 
const Header = ({setIsDarkMode}) => {
  // traslation
  //const [activeNav, setActiveNav] = useState('#home');

  const [isFrench, setIsFrench] = useState(true);

  const { i18n } = useTranslation();

  const handleLanguageToggle = () => {
    const newLanguage = isFrench ? 'en' : 'fr';
    i18n.changeLanguage(newLanguage);
    setIsFrench(!isFrench);
  };
  const {t} = useTranslation("translation");
  /* ==== Toggle Menu ==== */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  /* ==== Change Background Header ==== */
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    window.scrollY >= 80
      ? header.classList.add("scroll-header")
      : header.classList.remove("scroll-header");
  });
  return (
    <header className="header">
        <nav className="nav container">
          
          <input onClick={() => setIsDarkMode(prevMode => !prevMode)} type="checkbox" class="theme-checkbox"></input>
          <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
            <ul className="nav_list grid">
              <li className="nav_item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home" ? "nav_link active-link" : "nav_link"
                  }>
                  <i className="uil uil-estate nav_icon"></i> Home
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav === "#about" ? "nav_link active-link" : "nav_link"
                  }>
                  <i className="uil uil-user nav_icon"></i>About
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav === "#skills"
                      ? "nav_link active-link"
                      : "nav_link"
                  }>
                  <i className="uil uil-file-alt nav_icon"></i>Skills
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#services"
                  onClick={() => setActiveNav("#services")}
                  className={
                    activeNav === "#services"
                      ? "nav_link active-link"
                      : "nav_link"
                  }>
                  <i className="uil uil-briefcase-alt nav_icon"></i> Services
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#portfolio"
                  onClick={() => setActiveNav("#portfolio")}
                  className={
                    activeNav === "#portfolio"
                      ? "nav_link active-link"
                      : "nav_link"
                  }>
                  <i className="uil uil-scenery nav_icon"></i> Porfolio
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav === "#contact"
                      ? "nav_link active-link"
                      : "nav_link"
                  }>
                  <i className="uil uil-message nav_icon"></i> Contact
                </a>
              </li>
            </ul>

            <i
              className="uil uil-times nav_close"
              onClick={() => showMenu(!Toggle)}></i>
          </div>
          <CustomToggleSwitch onChange={handleLanguageToggle} checked={isFrench} />
          
          <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>

          {/* traduction */}
        
        </nav>
    </header>
  );
};

export default Header;
