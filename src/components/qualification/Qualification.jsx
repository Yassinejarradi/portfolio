import React, { useState, useMemo } from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import "./qualification.css";

const Qualification = () => {
  const { t } = useTranslation("translation");
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => setToggleState(index);

  // Récupération des tableaux depuis i18next (si la clé n'existe pas, on retombe sur un tableau vide)
  const educationData = t("education", { returnObjects: true }) || [];

  // ⚠️ Ici on lit expérience2 + expérience3
  const exp2 = t("experience2", { returnObjects: true }) || [];
  const exp3 = t("experience3", { returnObjects: true }) || [];

  // Concatène proprement (tu peux inverser l'ordre si besoin)
  const experienceData = useMemo(() => {
    // Si tu veux afficher d’abord l’expérience la plus récente (experience3), mets [...exp3, ...exp2]
    return [...exp2, ...exp3];
  }, [exp2, exp3]);

  const renderQualificationData = (data) =>
    (Array.isArray(data) ? data : []).map((item, index) => (
      <div className="qualification_data" key={`${item.title}-${index}`}>
        {index % 2 === 0 ? (
          <>
            <div>
              <h3 className="qualification_title">{item.title}</h3>
              <span className="qualification_subtitle">{item.institution}</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>
                {item.duration}
              </div>
            </div>
            <div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line"></span>
            </div>
          </>
        ) : (
          <>
            <div></div>
            <div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line"></span>
            </div>
            <div>
              <h3 className="qualification_title">{item.title}</h3>
              <span className="qualification_subtitle">{item.institution}</span>
              <div className="qualification_calendar">
                <i className="uil uil-calendar-alt"></i>
                {item.duration}
              </div>
            </div>
          </>
        )}
      </div>
    ));

  return (
    <section className="qualification section">
      <Fade direction="down">
        <h2 className="section_title">{t("qualification")}</h2>
        <span className="section_subtitle">{t("qualification_sub")}</span>
      </Fade>

      <div className="qualification_container container">
        <Fade duration={2000}>
          <div className="qualification_tabs">
            <div
              onClick={() => toggleTab(1)}
              className={
                toggleState === 1
                  ? "qualification_button qualification_active button--flex"
                  : "qualification_button button--flex"
              }
            >
              <i className="uil uil-graduation-cap qualification_icon"></i>
              Education
            </div>
            <div
              onClick={() => toggleTab(2)}
              className={
                toggleState === 2
                  ? "qualification_button qualification_active button--flex"
                  : "qualification_button button--flex"
              }
            >
              <i className="uil uil-briefcase-alt qualification_icon"></i>
              Experience
            </div>
          </div>
        </Fade>

        <Fade direction="up" duration={2500}>
          <div className="qualification_sections">
            <div
              className={
                toggleState === 1
                  ? "qualification_content qualification_content-active"
                  : "qualification_content"
              }
            >
              {renderQualificationData(educationData)}
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification_content qualification_content-active"
                  : "qualification_content"
              }
            >
              {renderQualificationData(experienceData)}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Qualification;
