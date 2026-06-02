import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import "./services.css";


const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const { t } = useTranslation();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // Détails des services traduits
  const webDevelopmentDetails = t("services.web.details", { returnObjects: true });
  const mobileDevelopmentDetails = t("services.mobile.details", { returnObjects: true });

  return (
    <section className="services section" id="services">
      <Fade direction="down">
        <h2 className="section_title">{t("services.title")}</h2>
        <span className="section_subtitle">{t("services.subtitle")}</span>
      </Fade>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              {t("services.web.title")}
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(1)}>
            {t("services.view_more")}
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
            <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
              <h3 className="services_modal-title">{t("services.web.title")}</h3>
              <p className="services_modal-description">{t("services.web.description")}</p>
              <ul className="services_modal-services grid">
                {webDevelopmentDetails.map((detail, index) => (
                  <li className="services_modal-service" key={index}>
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-mobile-android services_icon"></i>
            <h3 className="services_title">
              {t("services.mobile.title")}
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(2)}>
            {t("services.view_more")}
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
            <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
              <h3 className="services_modal-title">{t("services.mobile.title")}</h3>
              <p className="services_modal-description">{t("services.mobile.description")}</p>
              <ul className="services_modal-services grid">
                {mobileDevelopmentDetails.map((detail, index) => (
                  <li className="services_modal-service" key={index}>
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
