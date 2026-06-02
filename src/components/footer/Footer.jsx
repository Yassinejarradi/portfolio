import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";
const Footer = () => {
  
  const {t} = useTranslation("translation");
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">{t("name_footer")}</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">{t("introduction_footer")}</a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">{t("projets_footer")}</a>
          </li>
          <li>
            <a href="#testimonials" className="footer_link">{t("certification_footer")}</a>
          </li>
        </ul>
        <div className="footer_social">
        <a href="https://www.facebook.com/" className="footer_social-link" target="_blank">
        <i className="bx bxl-facebook"></i>
      </a>
      <a href="https://www.instagram.com/" className="footer_social-link" target="_blank">
        <i className="bx bxl-instagram"></i>
      </a>
      <a href="https://twitter.com/" className="footer_social-link" target="_blank">
        <i className="bx bxl-twitter"></i>
      </a>
        </div>
        <span className="footer_copy">&#169; {t("intro.name")}. All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
