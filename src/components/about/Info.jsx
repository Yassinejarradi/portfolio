import React from "react";
import { Fade } from "react-awesome-reveal";
// traduction
import { useTranslation } from "react-i18next";
const Info = () => {
  const {t} = useTranslation("translation");
  return (
    <div className="about_info grid">
      <Fade direction="down" cascade="true">
        <div className="about_box">
          <i className="bx bx-award about_icon"></i>
          
          <h3 className="about_title">  {t("intro.experience_card")}</h3>
          <span className="about_subtitle"> {t("intro.experience_value")}</span>
        </div>
        <div className="about_box">
          <i className="bx bx-briefcase-alt about_icon"></i>
          <h3 className="about_title"> {t("intro.completed_card")}</h3>
          <span className="about_subtitle"> {t("intro.completed_value")}</span>
        </div>
        <div className="about_box">
          <div className="bx bx-support about_icon"></div>
          <h3 className="about_title">{t("intro.support_card")}</h3>
          <span className="about_subtitle"> {t("intro.support_value")}</span>
        </div>
      </Fade>
    </div>
  );
};

export default Info;
